import React, { useEffect } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import {QueryClient, QueryClientProvider, useQuery} from 'react-query'
import { useDispatch, useSelector } from 'react-redux';
import { Eventroom } from '../entities/Eventroom';
import { addEventroom, fetchEventrooms } from '../store/actions/event.actions';
import Joke from '../components/Joke';


export default function DiscoverScreen() {
    const [title, onChangeTitle] = React.useState('')
    const eventrooms: Eventroom[] = useSelector((state: any) => state.event.eventrooms)
    const dispatch = useDispatch()

    useEffect(()=> {  //Renders only the first time 
        dispatch(fetchEventrooms())
    }, [])

    const handleAddEventroom = () => {
        const eventroom: Eventroom = new Eventroom(title,'', new Date())
        dispatch(addEventroom(eventroom))
    }

    const renderEventroom = ({item}:{item:any}) => (
        <Text>
            {item.title}
            -
            {item.id}
        </Text>
    )

    return (
        <View style={styles.container}>
            
            <FlatList
                data = {eventrooms}
                renderItem={renderEventroom}
            />
            <Text>Having a tough day? Below you can get endless jokes</Text>
            <Text>Chuck Norris Joke: </Text>
            <Joke/>
            <TextInput 
                onChangeText={onChangeTitle}
                value={title}
                placeholder='Event Name'
            />
            <Button title='Create Event' onPress={handleAddEventroom} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textinput:{
        fontWeight: "bold"
    }
})