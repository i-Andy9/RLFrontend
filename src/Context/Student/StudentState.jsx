import React from 'react'
import StudentContext from './StudentContext'
import { useReducer } from 'react'
import StudentReducer from './StudentReducer'
import { addStudentService, deleteStudentService, getStudentListService, getStudentService } from '../../../API/studentServices'
import { useState } from 'react'
import { useEffect } from 'react'
import { successAlert } from '../../Alerts/Alerts'
import { useNavigate } from 'react-router-dom'

const StudentState = (props) => {

    const navigate = useNavigate()
    const initialStudentState = {
        students: [],
        selectedStudent: null,
        data: {}
    }

    const [state, dispatch] = useReducer(StudentReducer, initialStudentState)
    const [first, setfirst] = useState({})

    const getStudentList = async () => {
        const studentList = await getStudentListService()
        dispatch({
            type: 'GET_STUDENTSLIST',
            payload: studentList
        })
    }

    const getStudent = async (rut) => {
        const student = await getStudentService(rut)
        setfirst(await getStudentService(rut))
        console.log(first);
        dispatch({
            type: 'GET_STUDENT',
            payload: state.students.find((s) => s.rut === rut)
        })
    }

    const addStudent = async (data, token) => {
        const addStudent = await addStudentService(data, token)
        dispatch({
            type: 'ADD_STUDENTS',
            payload: addStudent
        })
        navigate('/Students')
    }

    const deleteStudent = async (code, token) => {
        const deleteStudent = await deleteStudentService(code, token)

        successAlert('Se ha borrado correctamente el registro')
        getStudentList()
    };

    const editStudent = async (rut) => { }
    return (
        <StudentContext.Provider
            value={{
                students: state.students,
                selectedStudent: state.selectedStudent,
                data: state.data,
                getStudentList,
                getStudent,
                addStudent,
                deleteStudent,
            }}
        >
            {props.children}
        </StudentContext.Provider>
    )
}

export default StudentState