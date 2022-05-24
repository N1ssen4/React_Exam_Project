import { Eventroom } from "../../entities/Eventroom";
import { ADD_EVENTROOM, FETCH_EVENTROOM } from "../actions/event.actions";

interface ReduxState{
    eventrooms: Eventroom[]
}

const initialState: ReduxState = {
    eventrooms: []
}

interface ReduxAction{
    type: string, 
    payload?: boolean | number | string | Eventroom
}

const eventReducer = (state: ReduxState = initialState, action: ReduxAction) => {
    switch(action.type){
        case ADD_EVENTROOM: 
            return{...state, eventrooms: [...state.eventrooms, action.payload]}

        case FETCH_EVENTROOM: 
            return {...state, eventrooms: action.payload}

        default: 
            return state 
    }
}
export default eventReducer