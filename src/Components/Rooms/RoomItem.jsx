import React, { useContext, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import RoomContext from "../../Context/Room/RoomContext";
import { Container } from "reactstrap";
import SideAdminMenu from "../Common/SideAdminMenu";

const RoomItem = () => {
  const { selectedRoom, cleanRoom } = useContext(RoomContext);
  const cleanItem = () => {
    cleanRoom()
  }
  const get = () => {
    console.log("codeeee", selectedRoom.code)
  }
  console.log("codeeee", selectedRoom.code)
  useEffect(() => {
    console.log(selectedRoom);
  }, [selectedRoom])
  return (
    <>
      <div className="flex">
        <SideAdminMenu />
        <Container>
          {selectedRoom ?
            (
              <div>
                <div> {selectedRoom.code} holaa</div>
                <button className="btn-danger btn" onClick={cleanItem}> chao
                </button>
              </div>
            )

            :
            (<h1>no hay nada seleccionado</h1>)}
          <button className="btn-danger btn" onClick={() => get()}>
            hola
          </button>
        </Container>
      </div>
      <Outlet />
    </>
  );
};

export default RoomItem;
