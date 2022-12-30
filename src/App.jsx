import { useState } from 'react'
import './App.css'
import { addRoomService, deleteRoomService, editRoomService } from '../API/roomServices'
import { useStudentStore } from './Store/studentStore'
import { getStudentListService } from '../API/studentServices'
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import HeaderLandingPage from './Components/Common/HeaderLandingPage'
import PrincipalLanding from './Components/LandingPage/PrincipalLanding'
import Login from './Components/Sesion/Login'

function App() {


  const [count, setCount] = useState(0)
  return (
    <>
      <div className="h-screen">
        {/* <button
          onClick= {async ()=> await deleteRoomService('12c','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzEyMzEyMyIsImlhdCI6MTY3MjM2MDY4OSwiZXhwIjoxNjc0OTUyNjg5fQ.Rb-VpMRdYlvrFUQS4q-R391YkUC5as8TXPIKYteFIG4')}
        >eliminary room</button>
        <button
          onClick= {async ()=> await addRoomService({
            "code": "12c",
            "name": "Cocina industrial",
            "details": "details details details details details ",
            "list": "" 
        },'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzEyMzEyMyIsImlhdCI6MTY3MjM2MDY4OSwiZXhwIjoxNjc0OTUyNjg5fQ.Rb-VpMRdYlvrFUQS4q-R391YkUC5as8TXPIKYteFIG4')}
        >add room</button>
        <button
          onClick= {async ()=> await editRoomService({
             
            "name": "escavacion industrial",
            "details": "details details details details details ",
            "list": "" 
        },"12c",'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzEyMzEyMyIsImlhdCI6MTY3MjM2MDY4OSwiZXhwIjoxNjc0OTUyNjg5fQ.Rb-VpMRdYlvrFUQS4q-R391YkUC5as8TXPIKYteFIG4')}
        >edit room</button> */}

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HeaderLandingPage />}>
              <Route index element={<PrincipalLanding />} />
              <Route path='Login' element={<Login />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
