import React, { useContext } from "react";
import { Link, Outlet} from "react-router-dom";
import AdminContext from "../../Context/Admin/AdminContext";

const HeaderLandingPage = ( ) => {
  const {  sesionActivity,SignOutAdmin } = useContext(AdminContext);  
  
  const cerrarSesion=()=>{
    SignOutAdmin()
  }
 
  return (
    <>
      <div>
        <nav className="navbar nav-dark bg-dark p-4 ">
          <div className="container-fluid">
            <Link to="/" style={{ textDecoration: "none" }}>
              <span className="navbar-brand text-white" href="#">
                Rather School
              </span>
            </Link>
            { 
              !sesionActivity ? (
                <div className="" role="search">
                  <Link
                    to="/Login"
                    className="btn btn-outline-light"
                    type="submit"
                  >
                    Iniciar sesion
                  </Link>
                </div>
              ) : (
                <>
                  <div className="" role="search">
                    <Link
                      to="/"
                      className="btn btn-outline-light"
                      type="submit"
                      onClick={ cerrarSesion}
                    >
                      Cerrar Sesion
                    </Link>
                  </div>
                </>
              ) }
          </div>
        </nav>
      </div>
      <div className="">
      
      </div>
      <Outlet />
    </>
  );
};

export default HeaderLandingPage;
