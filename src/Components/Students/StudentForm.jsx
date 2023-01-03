import React, { useContext, useEffect } from 'react'
import SideAdminMenu from '../Common/SideAdminMenu'
import { Card, CardBody, Container, Input, Label } from 'reactstrap'
import AdminContext from '../../Context/Admin/AdminContext'
import RoomContext from '../../Context/Room/RoomContext'
import StudentContext from '../../Context/Student/StudentContext'
import { useState } from 'react'
import { formatRut } from '../../Helpers/Functions'
import { GenderOptions } from '../../Helpers/Contants'

const StudentForm = () => {

  const { token, sesionActivity } = useContext(AdminContext)
  const { rooms, getRoomsList, editRoom } = useContext(RoomContext)
  const { students, getStudentList, addStudent } = useContext(StudentContext)


  const [odtStudent, setodtStudent] = useState({
    name: '',
    lastName: '',
    rut: '',
    age: undefined,
    classroom: '0',
    gender: '0',
    family: '0'
  })

  const handleUpdateODT = (event) => {
    const { id, value } = event.target


    switch (id) {
      case 'name':
        setodtStudent({ ...odtStudent, name: value })
        break;
      case 'lastName':
        setodtStudent({ ...odtStudent, lastName: value })
        break;
      case 'rut':
        setodtStudent({ ...odtStudent, rut: formatRut(value) })
        break;
      case 'age':
        setodtStudent({ ...odtStudent, age: value })
        break;
      case 'classroom':
        console.log(value);
        setodtStudent({ ...odtStudent, classroom: value })
        break;
      case 'gender':
        setodtStudent({ ...odtStudent, gender: value })
        break;
      case 'family':
        setodtStudent({ ...odtStudent, family: value })
        break;

      default:
        setodtStudent({ ...odtStudent })
        break;
    }
  }

  const _onSaveStudent = () => {


    const ODT = { ...odtStudent }
    ODT.family = odtStudent.family.replace(/\./g, "").replace(/\-/g, "");
    ODT.rut = odtStudent.rut.replace(/\./g, "").replace(/\-/g, "");

    let ListStudentSTR = rooms.find(r => r.code === ODT.classroom)
    let ListStudentArray = JSON.parse(ListStudentSTR.list)
    let newListStudent = [{ ...ListStudentArray, list: ODT }]
    let list = JSON.stringify(newListStudent)
    let roomUpdated = { ...ListStudentSTR, list }

    editRoom(roomUpdated, ODT.classroom, token, true)
    addStudent(odtStudent, token)
  }
  useEffect(() => {
    getRoomsList()
    getStudentList()

  }, [])

  return (
    <div className='flex'>
      <SideAdminMenu />
      <div className=" col col-md-8 col-sm-6 col-xs-2 flex justify-center  h-full  ">
        <Card className="p-4 mt-3 bg-gray-800 w-50 text-white">
          <h1 className="text-center text-xl">Fomulario Registro de Estudiante</h1>

          <CardBody>
            <div className="mt-3">
              <Label className="">Nombre</Label>
              <Input
                className="w-55"
                placeholder="Samuel"
                type="text"
                id="name"
                value={odtStudent.name}
                onChange={handleUpdateODT}

              />
            </div>
            <div className="mt-3">
              <Label className="">Apellido</Label>
              <Input
                className="w-55"
                placeholder="Gutierrez"
                type="text"
                id="lastName"
                value={odtStudent.lastName}
                onChange={handleUpdateODT}

              />
            </div>
            <div className="mt-3">
              <Label className="">Rut</Label>
              <Input
                className="w-55"
                placeholder="11.111.111-2"
                type="text"
                id="rut"
                value={odtStudent.rut}
                onChange={handleUpdateODT}

              />
            </div>
            <div className="mt-3">
              <Label className="">Edad</Label>
              <Input
                className="w-55"
                placeholder="17"
                type="number"
                id="age"
                value={odtStudent.age}
                onChange={handleUpdateODT}

              />
            </div>
            <div className="mt-3">
              <Label className="">Aula</Label>
              <select
                id='classroom'
                value={odtStudent.classroom}
                className=' form-select outline-none text-black  w-full px-2 py-1 mx-2 rounded-md'
                onChange={handleUpdateODT}
              >
                <option key={'0'} value={''} disabled>
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
              <select
                id='gender'
                value={odtStudent.gender}
                className=' form-select outline-none text-black  w-full px-2 py-1 mx-2 rounded-md'
                onChange={handleUpdateODT}
              >
                <option key={'0'} value={''} disabled>
                  Seleccione
                </option>
                {GenderOptions.length > 0 && GenderOptions.map((r, i) => (
                  <option key={i + 1} value={r.value}>
                    {r.title}
                  </option>
                ))

                }
              </select>
            </div>

            <div className="mt-3">
              <Label className="">Familia</Label>

              <select
                id='family'
                value={odtStudent.family}
                onChange={handleUpdateODT}
                className=' form-multiselect  w-full outline-none text-black    px-2 py-1 mx-2 rounded-md'

              >
                <option key={'0'} value={''} disabled>
                  Seleccione
                </option>
                {students.length > 0 && students.map((r, i) => (
                  <option key={i + 1} value={r.rut}>
                    {`${r.name} ${r.lastName}`}
                  </option>
                ))

                }
              </select>
            </div>

            <div className="text-center">
              <button
                className="btn btn-outline-light mt-5"
                onClick={_onSaveStudent}
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