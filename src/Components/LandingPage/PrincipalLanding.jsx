import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import RoomsList from "../Rooms/RoomsList";


import RoomState from "../../Context/Room/RoomState";
import AdminContext from "../../Context/Admin/AdminContext";
import SideAdminMenu from "../Common/SideAdminMenu";

const PrincipalLanding = ( ) => { 
  const { sesionActivity } = useContext(AdminContext);
  return (
    <>
      <div
        className="flex" 
      >  <SideAdminMenu/>
        <RoomState>
          <RoomsList   />
        </RoomState>
      </div>
      <Outlet />
    </>
  );
};

export default PrincipalLanding;
