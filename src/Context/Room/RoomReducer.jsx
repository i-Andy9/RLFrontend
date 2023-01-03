import { CLEAN_ROOMITEM, GET_ROOMSLIST, GET_ROOMITEM, ADD_ROOMITEM, EDIT_ROOMITEM } from "./RoomConstants";

export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_ROOMITEM:
      console.log("reducer1", payload);
      return { ...state, selectedRoom: payload };
    case GET_ROOMSLIST:
      return { ...state, rooms: payload };
    case CLEAN_ROOMITEM:
      return { ...state, selectedRoom: {} };
    case ADD_ROOMITEM:
      return {...state, selectedRoom:payload.Aula}
    case EDIT_ROOMITEM:
      return {...state, selectedRoom:payload.roomUpdated}
    default: 
      return {...state};
  }
};
