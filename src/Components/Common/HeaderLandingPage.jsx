import React, { useEffect, useState } from 'react'
import { Link, Outlet, useSearchParams } from 'react-router-dom';

const HeaderLandingPage = () => {
    const [validateSesion, setvalidateSesion] = useState(false)
    const [validateClick, setvalidateClick] = useState(false)

    const validateState =()=>{
        setvalidateClick(true)
    }

    useEffect(() => {
        console.log(window.location.pathname);
        if (window.location.pathname === '/Login') {
             setvalidateSesion(true)
        }
        console.log("andando");
    },[])
    return (
        <>
            <div>
                <nav className="navbar nav-dark bg-dark  ">
                    <div className="container-fluid">
                        <Link to="/" style={{ textDecoration: 'none' }}><span className="navbar-brand text-white" href="#">Rather School</span></Link>
                        {window.location.pathname !== '/Login' ? <div className="" role="search">
                            <Link to="/Login" className="btn btn-outline-light" onClick={validateState} type="submit">Iniciar sesion</Link>
                        </div> : <></>}
                    </div>
                </nav>
            </div>
            <Outlet />
        </>
    )
}

export default HeaderLandingPage