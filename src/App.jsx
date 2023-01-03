import { useState } from "react";
import "./App.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";
//COMPONENTS
import HeaderLandingPage from "./Components/Common/HeaderLandingPage";
import PrincipalLanding from "./Components/LandingPage/PrincipalLanding";
import Login from "./Components/Sesion/Login";
import RoomItem from "./Components/Rooms/RoomItem";
import RoomState from "./Context/Room/RoomState";
import AdminState from "./Context/Admin/AdminState";
import RoomForm from "./Components/Rooms/RoomForm";
import StudentsList from "./Components/Students/StudentsList";
import StudentState from "./Context/Student/StudentState";
import StudentItem from "./Components/Students/StudentItem";
import StudentForm from "./Components/Students/StudentForm";

function App() {

  return (
    <>
      <div className="h-screen bg-gray-400">
        <BrowserRouter>
          <AdminState>
            <RoomState>
              <StudentState>
                <Routes>
                  <Route
                    path="/"
                    element={
                      <HeaderLandingPage
                      />
                    }
                  >
                    <Route index element={<PrincipalLanding />} />
                    <Route
                      path="Login"
                      element={
                        <Login />
                      }
                    />
                    <Route
                      path="Room/:code"
                      element={
                        <RoomItem />
                      }
                    />
                    <Route
                      path="Room/"
                      element={
                        <RoomForm />
                      }
                    />
                    <Route
                      path="Students/"
                      element={
                        <StudentState>
                          <StudentsList />
                        </StudentState>
                      }
                    />
                    <Route
                      path="Student/:rut"
                      element={
                        <StudentItem />
                      }
                    />
                    <Route
                      path="Student/"
                      element={
                        <StudentForm />
                      }
                    />
                  </Route>
                </Routes>
              </StudentState>
            </RoomState>
          </AdminState>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
