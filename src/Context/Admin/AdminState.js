import React from 'react'
import AdminContext from './AdminContext'

 
const AdminState = (props) => {

    const adminsState = {
        admins:[],
        selectedAdmin:null,

    }

    const [state, dispatch] = useReducer(AdminReducer, adminsState)


    const getAdminsList =()=>{
        
    }
    const getAdmin =()=>{
        
    }
    const addAdmin =()=>{
        
    }
    const deleteAdmin =()=>{
        
    }
    const SignInAdmin =()=>{
        
    }
    const SignOutAdmin =()=>{
        
    }
  return (
    <>
        <AdminContext.Provider 
            value={{
                Admins: state.admins,
                SelectedUser: state.selectedAdmin,
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
    </>
  )
}

export default AdminState