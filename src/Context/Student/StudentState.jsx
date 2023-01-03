import React from 'react'
import StudentContext from './StudentContext'
import { useReducer } from 'react'
import StudentReducer from './StudentReducer'
import { getStudentListService, getStudentService } from '../../../API/studentServices'
import { useState } from 'react'
import { useEffect } from 'react'

const StudentState = (props) => {

    const initialStudentState = {
        students: [],
        selectedStudent: undefined,
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
            payload: student
        })
    }


    return (
        <StudentContext.Provider
            value={{
                students: state.students,
                selectedStudent: state.selectedStudent,
                getStudentList,
                getStudent,
            }}
        >
            {props.children}
        </StudentContext.Provider>
    )
}

export default StudentState