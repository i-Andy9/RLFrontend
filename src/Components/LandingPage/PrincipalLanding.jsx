import React from 'react'
import { Outlet } from 'react-router-dom'

const PrincipalLanding = () => {
    return (
        <>
            <div className='min-h-screen' style={{backgroundColor:'#4b4a54', display: 'flex' , flexFlow:'column',height: '100%',}}> 
                    
        holaa
            </div>
            <Outlet />
        </>
    )
}

export default PrincipalLanding