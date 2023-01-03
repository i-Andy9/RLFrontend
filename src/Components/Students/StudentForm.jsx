import React, { useContext, useEffect } from 'react'
import SideAdminMenu from '../Common/SideAdminMenu'
import { Card, CardBody, Container, Input, Label } from 'reactstrap'
import AdminContext from '../../Context/Admin/AdminContext'
import RoomContext from '../../Context/Room/RoomContext'
import StudentContext from '../../Context/Student/StudentContext'
import { useState } from 'react'

const StudentForm = () => {

  const { token, sesionActivity } = useContext(AdminContext)
  const { rooms, getRoomsList } = useContext(RoomContext)
  const { students, getStudentList } = useContext(StudentContext)
  const [roomsList, setroomsList] = useState([])
  const [studentsList, setstudentsList] = useState([])

  useEffect(() => {
    getRoomsList()
    getStudentList()
  }, [])

  return (
    <div className='flex'>
      <SideAdminMenu />
      <div className=" col col-md-8 col-sm-6 col-xs-2 flex justify-center h-100  ">
        <Card className="p-4 mt-3 bg-gray-800 w-50 text-white">
          <h1 className="text-center text-xl">Fomulario Registro de Estudiante</h1>

          <CardBody>
            <div className="mt-3">
              <Label className="">Nombre</Label>
              <Input
                className="w-55"
                placeholder="Samuel"
                type="text"
                id="code"


              />
            </div>
            <div className="mt-3">
              <Label className="">Apellido</Label>
              <Input
                className="w-55"
                placeholder="Gutierrez"
                type="text"
                id="code"


              />
            </div>
            <div className="mt-3">
              <Label className="">Rut</Label>
              <Input
                className="w-55"
                placeholder="11.111.111-2"
                type="text"
                id="name"


              />
            </div>
            <div className="mt-3">
              <Label className="">Edad</Label>
              <Input
                className="w-55"
                placeholder="17"
                type="text"
                id="details"


              />
            </div>
            <div className="mt-3">
              <Label className="">Aula</Label>
              <select
                id='room'
                className=' form-select outline-none text-black  w-80 px-2 py-1 mx-2 rounded-md' >
                <option key={0} value={''} disabled>
                  Seleccione
                </option>
                {rooms.length > 0 && rooms.map((r, i) => (
                  <option key={i + 1} value={r.code}>
                    {r.name}
                  </option>
                ))

                }
              </select>
            </div>
            <div className="mt-3">
              <Label className="">Genero</Label>
              <Input
                className="w-55"
                placeholder="M/F"
                type="text"
                id="details"


              />
            </div>
            <div className="mt-3">
              <Label className="">Familia</Label>
              <Input
                className="w-55"
                placeholder=""
                type="text"
                id="name"


              />
            </div>

            <div className="text-center">
              <button
                className="btn btn-outline-light mt-5"
                onClick={() => console.log("hola")}
              >
                Registrar
              </button>
            </div>
          </CardBody>

        </Card>
      </div>
    </div >
  )
}

export default StudentForm