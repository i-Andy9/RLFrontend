import React, { useReducer } from "react";
import RoomContext from "./RoomContext.jsx";
import { addRoomService, deleteRoomService, editRoomService, getRoomListService, getRoomService } from "../../../API/roomServices";
import RoomReducer from "./RoomReducer.jsx";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { errorAlert, successAlert } from "../../Alerts/Alerts.jsx";

const RoomState = (props) => {
  const navigate = useNavigate()
  const initialRoomState = {
    rooms: [],
    selectedRoom: {},
  };

  const [state, dispatch] = useReducer(RoomReducer, initialRoomState);

  const fNavigate = (link) => {
    navigate(`${link}`)
  }

  const getRoomsList = async () => {
    let listRooms = await getRoomListService()
    dispatch({
      type: 'GET_ROOMSLIST',
      payload: listRooms
    })
  };
  const getRoom = async (code) => {
    let roomItem = await getRoomService(code)
    console.log(roomItem.roomExist)
    dispatch({
      type: 'GET_ROOMITEM',
      payload: roomItem,
    })
    navigate(`/Room/${code}`)
  };
  const cleanRoom = () => {
    dispatch({
      type: 'CLEAN_ROOMITEM',
      payload: {},
    })
  }
  const addRoom = async (data, token) => {
    const additemRoom = await addRoomService(data, token)
    if (additemRoom.code && additemRoom.code === 400) {
      return errorAlert('Este codigo ya se encuentra asociado a un aula', additemRoom.msg)
    }
    dispatch({
      type: 'ADD_ROOMITEM',
      payload: addItemRoom,
    })
    navigate('/')

  };
  const editRoom = async (data, code, token, opcion) => {
    const editemRoom = await editRoomService(data, code, token)
    console.log(editemRoom)
    if (editemRoom.code && editemRoom.code === 404) {
      return errorAlert('No se ha encontrado un aula asociado aeste codigo', editemRoom.msg)
    }
    dispatch({
      type: 'ADD_ROOMITEM',
      payload: editemRoom,
    })
    !opcion ? successAlert('Se ha editado correctamente el registro') : null
    navigate('/')
  };
  const deleteRoom = async (code, token) => {
    const deleteRoom = await deleteRoomService(code, token)

    successAlert('Se ha borrado correctamente el registro')
    getRoomsList()
    navigate('/')
  };


  useEffect(() => {

    if (state.selectedRoom) {
      return console.log("existe");
    }
  }, [state.selectedRoom])
  return (
    <RoomContext.Provider
      value={{
        rooms: state.rooms,
        selectedRoom: state.selectedRoom,
        getRoomsList,
        getRoom,
        addRoom,
        editRoom,
        deleteRoom,
        cleanRoom,
      }}
    >
      {props.children}
    </RoomContext.Provider>
  )
};

export default RoomState;
