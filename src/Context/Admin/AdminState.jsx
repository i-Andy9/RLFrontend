import React, { useEffect, useReducer, useState } from 'react'
import AdminContext from './AdminContext'
import { LogInAdminServices, LogOutAdminServices, getAdminsListService } from '../../../API/adminServices'
import AdminReducer from './AdminReducer'
import { errorAlert } from '../../Alerts/Alerts'
import { useNavigate } from 'react-router-dom'


const AdminState = (props) => {

    const navigate = useNavigate()
    const localData = JSON.parse(localStorage.getItem('user'))
    const adminsState = {
        admins: [],
        selectedAdmin: localData !== null ? localData : {},
        sesionActivity: localData !== null ? localData.actSesion : false,
        token: localData !== null ? localData.token : '',
    }
    const [state, dispatch] = useReducer(AdminReducer, adminsState)


    const getAdminsList = async () => {
        const adminList = await getAdminsListService()
        console.log(adminList)
        dispatch({
            type: 'GET_ADMINS',
            payload: adminList,
        })
    }
    const SignInAdmin = async (body) => {
        const sesionAdmin = await LogInAdminServices(body)
        if (sesionAdmin.code === 'Mail no valido') {
            return errorAlert(sesionAdmin.code, sesionAdmin.msg)
        }
        if (sesionAdmin.code === 'Contraseña Incorrecta') {
            return errorAlert(sesionAdmin.code, sesionAdmin.msg)
        }
        dispatch({
            payload: sesionAdmin,
            type: 'LOGIN_ADMIN'
        })
        console.log(sesionAdmin.adminSave);
        localStorage.setItem('user', JSON.stringify(sesionAdmin.adminSave))
        navigate("/")

    }
    const SignOutAdmin = async () => {
        const sesionAdmin = await LogOutAdminServices(state.selectedAdmin.token, state.adminSave)
        console.log(sesionAdmin)
        dispatch({
            payload: sesionAdmin,
            type: 'LOGOUT_ADMIN'
        })
        localStorage.removeItem('user')
        navigate("/")
    }
    const getAdmin = () => { }
    const addAdmin = () => { }
    const deleteAdmin = () => { }
    useEffect(() => {
        console.log("ADMIN STATE => ", state)
    }, [state])

    return (
        <AdminContext.Provider
            value={{
                admins: state.admins,
                selectedAdmin: state.selectedAdmin,
                sesionActivity: state.sesionActivity,
                token: state.token,
                getAdminsList,
                getAdmin,
                addAdmin,
                deleteAdmin,
                SignInAdmin,
                SignOutAdmin,
            }}
        >
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminState