import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { Chatroom, Status } from '../entities/Chatroom';
import { useGetChatrooms, usePostChatmessage, usePostChatroom } from '../hooks/chats';
import { toggleHappy } from '../store/actions/chat.actions';
import { StackParamList } from "../typings/navigations";

type ScreenNavigationType = NativeStackNavigationProp<
    StackParamList,
    "Screen1"
>

export default function Screen1() {
    // Get QueryClient from the context
    const queryClient = useQueryClient()
    const navigation = useNavigation<ScreenNavigationType>()
    const [title, onChangeTitle] = React.useState('');
    const [message, setMessage] = React.useState('');


    const isHappy = useSelector((state: any) => state.chat.isHappy) // subscribe to redux store and select attribute (isHappy)
    // const chatrooms: Chatroom[] = useSelector((state: any) => state.chat.chatrooms)
    const loggedInUser = useSelector((state: any) => state.user.loggedInUser);
    const { isLoading, isError, chatrooms, error } = useGetChatrooms();
    console.log("react query", chatrooms);
    const { mutate: createChatroom } = usePostChatroom()
    const { mutate: createChatmessage } = usePostChatmessage('-MyqTM_GYmJUQqBS0j-F')



    // console.log("isHappy", isHappy);
    const dispatch = useDispatch()

    // useEffect(() => { // only runs dispatch the first time the component renders
    //     dispatch(fetchChatrooms())
    // }, [])

    const handleAddChatroom = () => {
        const chatroom: Chatroom = new Chatroom(title, Status.UNREAD, '', new Date());
        // dispatch(addChatroom(chatroom));
        createChatroom(chatroom, { onSuccess: () => queryClient.invalidateQueries('chatrooms') })
    }
    const handleMessage = () => {
        const msg = { title: message, user: loggedInUser }
        console.log("saving message", msg);


        createChatmessage(msg, { onSuccess: () => queryClient.invalidateQueries('chatrooms') })
    }


    const renderChatroom = ({ item }: { item: any }) => (
        <TouchableOpacity onPress={() => navigation.navigate("Screen2")}>
            <Text>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text>Screen 1</Text>
            <Button title="Go to screen 2" onPress={() => navigation.navigate("Screen2")} />
            <Text>{isHappy.toString()}</Text>
            <Button title="Toggle happy" onPress={() => dispatch(toggleHappy())} />

            <FlatList
                data={chatrooms}
                renderItem={renderChatroom}
            />

            <TextInput
                onChangeText={onChangeTitle}
                value={title}
                placeholder="Chatroom name"
            />
            <Button title="Create chatroom" onPress={handleAddChatroom} />

            <TextInput
                onChangeText={setMessage}
                value={message}
                placeholder="Chatmessage"
            />
            <Button title="Send message" onPress={handleMessage} />
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
})