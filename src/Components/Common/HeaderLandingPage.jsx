import React, { useEffect, useState, Component } from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";

const HeaderLandingPage = ({validateSesion,sesion}) => {
   
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
            {!validateSesion ? (
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
              <></>
            )}
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default HeaderLandingPage;
