import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import RoomsList from "../Rooms/RoomsList";


import RoomState from "../../Context/Room/RoomState";

const PrincipalLanding = ({ sesion }) => { 
  return (
    <>
      <div
        className="" 
      >
        <RoomState>
          <RoomsList sesion={sesion} />
        </RoomState>
      </div>
      <Outlet />
    </>
  );
};

export default PrincipalLanding;
