import React, { useReducer } from "react";
import RoomContext from "./RoomContext.jsx";
import { getRoomListService, getRoomService } from "../../../API/roomServices";
import RoomReducer from "./RoomReducer.jsx";

const RoomState = (props) => {
  const initialRoomState = {
    rooms: [],
    selectedRoom: null,
  };

  const [state, dispatch] = useReducer(RoomReducer, initialRoomState);

  const getRoomsList = async () => {
    let listRooms = await getRoomListService() 
    dispatch({
      type:'GET_ROOMSLIST',
      payload: listRooms
    })
  };
  const getRoom = async (code) => { 
    let Room= await getRoomService(code) 
  };
  const addRoom = () => {};
  const editRoom = () => {};
  const deleteRoom = () => {};
  return ( 
      <RoomContext.Provider
        value={{
          Rooms: state.rooms,
          SelectedRoom: state.SelectedRoom,
          getRoomsList,
          getRoom,
          addRoom,
          editRoom,
          deleteRoom,
        }}
      >
        {props.children}
      </RoomContext.Provider> 
  )
};

export default RoomState;
