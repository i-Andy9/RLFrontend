import { useState } from 'react'
import './App.css'
import { Routes, BrowserRouter, Route } from 'react-router-dom'
//COMPONENTS
import HeaderLandingPage from './Components/Common/HeaderLandingPage'
import PrincipalLanding from './Components/LandingPage/PrincipalLanding'
import Login from './Components/Sesion/Login'
import RoomItem from './Components/Rooms/RoomItem'

function App() {
  const [validateSesion, setvalidateSesion] = useState(false);
  const sesion = true
  return (
    <><div className="h-screen bg-gray-400">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <HeaderLandingPage
                validateSesion={validateSesion}
                sesion={sesion}
              />}
          >
            <Route
              index
              element={
                <PrincipalLanding
                  sesion={sesion}
                />}
            />
            <Route
              path='Login'
              element={
                <Login
                  setvalidateSesion={setvalidateSesion}
                  sesion={sesion}
                />}
            />
            <Route
              path='Room/:code'
              element={
                <RoomItem
                  RoomItem={RoomItem}
                  sesion={sesion}
                />}
            />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
