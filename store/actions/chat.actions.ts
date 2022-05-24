import { Chatroom } from "../../entities/Chatroom";

export const ADD_CHATROOM = 'ADD_CHATROOM';
export const FETCH_CHATROOMS = 'FETCH_CHATROOMS';
export const DELETE_CHATROOM = 'DELETE_CHATROOM'


export const fetchChatrooms = () => {
    return async (dispatch: any, getState: any) => {
        const token = getState().user.idToken;

        const response = await fetch(
            'https://cbscs-68cbc-default-rtdb.europe-west1.firebasedatabase.app/chatrooms.json?auth=' + token, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            console.log("Couldn't fetch chatrooms")
        } else {
            const data = await response.json();
            let chatrooms: Chatroom[] = []
            for (const key in data) {
                const obj = data[key];
                chatrooms.push(new Chatroom(obj.title, obj.status, obj.message, new Date(obj.timestamp), key))
            }
            console.log("chatrooms", chatrooms);
            dispatch({ type: FETCH_CHATROOMS, payload: chatrooms })
        }
    };
}

export const addChatroom = (chatroom: Chatroom) => {
    return async (dispatch: any, getState: any) => {
        const token = getState().user.idToken;

        console.log(token);

        //delete chatroom.id // for an update, this would remove the id attribute (and value) from the chatroom
        const response = await fetch(
            'https://cbscs-68cbc-default-rtdb.europe-west1.firebasedatabase.app/chatrooms.json?auth=' + token, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                chatroom
            )
        });

        if (!response.ok) {
            console.log("Couldn't add a chatroom")

        } else {
            const data = await response.json(); 
            console.log("data from server", data);
            chatroom.id = data.name;
            dispatch({ type: ADD_CHATROOM, payload: chatroom })
        }
    };
}

    export const deleteChatroom = (chatroom: Chatroom) => {
        return async (dispatch: any, getState: any) => {
            const token = getState().user.idToken;
    
            console.log(token);
    
            //delete chatroom.id // for an update, this would remove the id attribute (and value) from the chatroom
            const response = await fetch(
                'https://cbscs-68cbc-default-rtdb.europe-west1.firebasedatabase.app/chatrooms.json?auth=' + token, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
    
            if (!response.ok) {
                console.log("Couldn't delete chatroom")
    
            } else {
                const data = await response.json(); 
                chatroom.id = data.name;
                dispatch({ type: DELETE_CHATROOM, payload: chatroom })
            }
        };
    
}