import React, { useContext, useEffect } from 'react'
import { Card, CardBody, Container, Label, Row } from 'reactstrap'
import StudentContext from '../../Context/Student/StudentContext'
import { Outlet } from 'react-router-dom'
import SideAdminMenu from '../Common/SideAdminMenu'
import RoomContext from '../../Context/Room/RoomContext'
import { formatRut } from '../../Helpers/Functions'
import { useState } from 'react'
import { GenderOptions } from '../../Helpers/Contants'

const StudentItem = () => {

    const { selectedStudent, students, getStudentList, getStudent } = useContext(StudentContext)
    const { rooms, getRoomsList, editRoom } = useContext(RoomContext)
    const dummy = {
        age: "32",
        classroom: "33a",
        family: "199919281",
        gender: "m",
        lastName: "chalkin",
        name: "rorro",
        rut: "169871987",
    }

    const [roomName, setRoomName] = useState('')
    const [GenderName, setGenderName] = useState('')
    const [familyName, setfamilyName] = useState('')

    const loadNsetDataInfo = () => {
        setRoomName(rooms.find(room => room.code === dummy.classroom).name)
        setGenderName(GenderOptions.find(g => g.value === dummy.gender).title);
        let familyName = students.find(s => s.rut === dummy.rut)
        setfamilyName(`${familyName.name} ${familyName.lastName}`)
    }

    useEffect(() => {
        console.log("cargo", selectedStudent);
    }, [selectedStudent])

    useEffect(() => {
        () => getStudentList();
        () => getRoomsList();
        loadNsetDataInfo()
    }, [])
    return (
        <div className="flex">
            <SideAdminMenu />
            <Container>

                {dummy !== null ?
                    (
                        <>

                            <div className=" col col-md-12 col-sm-11 col-xs-12 flex justify-center    ">
                                <Card className="p-4 mt-3 bg-gray-800 w-50 text-white">
                                    <h1 className="text-center text-xl">Estudiante {dummy.name} {dummy.lastName}</h1>

                                    <CardBody
                                        className='text-white'
                                    >

                                        <Row>
                                            <Label
                                                className='mt-3'
                                            >Rut : {formatRut(dummy.rut)}</Label>
                                        </Row>
                                        <Row>
                                            <Label
                                                className='mt-3'
                                            >Edad : {dummy.age}</Label>
                                        </Row>
                                        <Row>
                                            <Label
                                                className='mt-3'
                                            >Aula : {roomName}</Label>
                                        </Row>
                                        <Row>
                                            <Label
                                                className='mt-3'
                                            >Genero : {GenderName}</Label>
                                        </Row>
                                        <Row>
                                            <Label
                                                className='mt-3'
                                            >Familia en Rather School: {familyName}</Label>
                                        </Row>

                                    </CardBody>

                                </Card>
                            </div>
                        </>
                    ) : (<></>)
                }
            </Container>
            <Outlet />
        </div>
    )
}

export default StudentItem