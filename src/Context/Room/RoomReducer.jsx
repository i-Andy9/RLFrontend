import { GET_ROOM, GET_ROOMSLIST } from "./Constants"

export default (state,action)=>{
    const {payload,type}= action

    switch(type){
        case GET_ROOMSLIST:
            return {...state,rooms:payload}
        case GET_ROOM :
            return {...state,selectedRoom:payload}
        default:
            return state;

    }
}