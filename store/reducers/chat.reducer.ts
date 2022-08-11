import { Chatroom } from "../../entities/Chatroom";
import { ADD_CHATROOM, DELETE_CHATROOM, FETCH_CHATROOMS } from "../actions/chat.actions";

interface ReduxState {
    chatrooms: Chatroom[]
}

const initialState: ReduxState = {
    chatrooms: [],
}

interface ReduxAction {
    type: string,
    payload?: boolean | number | string | Chatroom
}

const chatReducer = (state: ReduxState = initialState, action: ReduxAction) => {
    switch (action.type) {
        
        case ADD_CHATROOM:
            console.log(action.payload);
            return { ...state, chatrooms: [...state.chatrooms, action.payload] }

        case FETCH_CHATROOMS:
            return { ...state, chatrooms: action.payload }

        case DELETE_CHATROOM:
            return {...state, chatrooms: action.payload}
            
        default:
            return state;
    }
};

export default chatReducer;