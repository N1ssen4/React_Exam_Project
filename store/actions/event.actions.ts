import { Eventroom } from "../../entities/Eventroom";

export const ADD_EVENTROOM = 'ADD_EVENTROOM'
export const FETCH_EVENTROOM = 'FETCH_EVENTROOM'
export const DELETE_EVENTROOM = 'DELETE_EVENTROOM'

export const fetchEventrooms = () => {
    return async (dispatch: any, getState: any) => {
        const token = getState().user.idToken

        const response = await fetch(
            'https://cbscs-68cbc-default-rtdb.europe-west1.firebasedatabase.app/eventrooms.json?auth=' + token, {
                method: 'GET',
                headers: {
                    'Content-Type' : 'application/json'
                }
            })
            if (!response.ok){
                console.log("Couldn't fetch eventrooms")

            } else {
                const data = await response.json()
                let eventrooms: Eventroom[] = []
                for (const key in data){
                    const obj = data[key]
                    eventrooms.push(new Eventroom(obj.title, obj.description, new Date(obj.timestamp), key))
                }
                console.log('eventrooms',eventrooms)
                dispatch({type: FETCH_EVENTROOM, payload : eventrooms})
            }
    
        }
}
export const addEventroom = (eventroom: Eventroom) => {
    return async (dispatch: any, getState: any) => {
        const token = getState().user.idToken
        const response = await fetch(
            'https://cbscs-68cbc-default-rtdb.europe-west1.firebasedatabase.app/eventrooms.json?auth=' + token, {
                method: 'POST', 
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(eventroom)
            })
            if (!response.ok){
                console.log("Couldn't add an eventroom")
            } else {
                const data = await response.json()
                console.log('Data from server',data)
                eventroom.id = data.name
                dispatch({type: ADD_EVENTROOM, payload: eventroom})
            }
    }
}
