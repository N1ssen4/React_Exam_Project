import React, { useEffect } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Chatroom, Status } from '../entities/Chatroom';
import { addChatroom, fetchChatrooms } from '../store/actions/chat.actions';


export default function Chatroomscreen() {
    const [title, onChangeTitle] = React.useState('');
    const chatrooms: Chatroom[] = useSelector((state: any) => state.chat.chatrooms)

    const dispatch = useDispatch()

    useEffect(() => { // Only runs one time, the first time the component renders
        dispatch(fetchChatrooms())
    }, [])

    const handleAddChatroom = () => {
        const chatroom: Chatroom = new Chatroom(title, Status.UNREAD, '', new Date());
        dispatch(addChatroom(chatroom));
    }
    const renderChatroom = ({ item }: { item: any }) => (
        <Text>
        {item.title} 
        - 
        {item.status}
        </Text>
        
    );

    return (
        <View style={styles.container}>
            
            <FlatList
                data={chatrooms}
                renderItem={renderChatroom}
        
            />

            <TextInput style={styles.textinput}
                onChangeText={onChangeTitle}
                value={title}
                placeholder="Chatroom name"
            />
            <Button title="Create chatroom" onPress={handleAddChatroom} />
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