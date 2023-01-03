import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Container, Input, Label, Row } from "reactstrap";
import AdminContext from "../../Context/Admin/AdminContext";

const Login = () => {
  const {
    admins,
    selectedAdmin,
    sesionActivity,
    getAdminsList,
    SignInAdmin,
  } = useContext(AdminContext);
  /* "mail": "andre.zapata@asdlkja.cl",
            "password": "123123" 
         */
  const Login = () => {
    console.log(fromLoginAdmin);
    SignInAdmin(fromLoginAdmin);
  };

  const [fromLoginAdmin, serFromLoginAdmin] = useState({
    mail: "",
    password: "",
  });

  const list = () => {
    getAdminsList();
  };
  const view = () => {
    console.log(admins);
    console.log(selectedAdmin);
    console.log(sesionActivity);
  };
  const handleUpdateForm = (e) => {
    const { value, id } = e.target;

    switch (id) {
      case "mail":
        serFromLoginAdmin({ ...fromLoginAdmin, mail: value });
        break;
      case "password":
        serFromLoginAdmin({ ...fromLoginAdmin, password: value });
        break;
      default:
        serFromLoginAdmin({ ...fromLoginAdmin });
        break;
    }
  };
  return (
    <>
      <Container  >
        <Row className=" justify-content-md-center">
          <Col
            className=" card  bg-dark mt-4 text-white"
            style={{ width: "22rem" }}
          >
            <h1 className="text-center mt-3">Login</h1>
            <div className="card-body">
              <div className="">
                <Label className="">Mail</Label>
                <Input
                  placeholder="correo@correo.correo"
                  value={fromLoginAdmin.nombre}
                  onChange={handleUpdateForm}
                  type="email"
                  id="mail"
                />
              </div>
              <div className="mt-3">
                <Label className="">Contraseña</Label>
                <Input
                  placeholder="******"
                  value={fromLoginAdmin.password}
                  onChange={handleUpdateForm}
                  type="password"
                  id="password"
                />
              </div>
              <hr />
              <div className="text-center"> 
                <Link
                  href="#!"
                  onClick={() => Login()}
                  className="mt-4 btn btn-outline-light mb-2"
                >
                  Iniciar Sesion{" "}
                </Link>
              </div>
              
              <a
                href="#!"
                onClick={() => list()}
                className="btn mt-4 btn-primary"
              >
                list{" "}
              </a>
              <a
                href="#!"
                onClick={() => view()}
                className="btn mt-4 btn-primary"
              >
                view{" "}
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <Outlet />
    </>
  );
};

export default Login;
