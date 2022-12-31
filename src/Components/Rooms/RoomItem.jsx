import React from 'react'
import { Outlet } from 'react-router-dom'

const RoomItem = () => {
  return (
    <>
        <div>RoomItem</div>
        <Outlet />
    </>
    
  )
}

export default RoomItem