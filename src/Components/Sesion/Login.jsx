import React from 'react'
import { Outlet } from 'react-router-dom'
import { Container, Input, Label, Row } from 'reactstrap'

const Login = () => {

    
    return (
        <>
            <Container fluid="sm">

                <Row className=" justify-content-md-center">
                    <div className="card  bg-dark text-center mt-4 text-white" style={{ width: '18rem' }}>
                        <h1 className="">Login</h1>
                        <div className="card-body">
                            <div className="">
                                <Label className="">Mail</Label>
                                <Input
                                    type="email"
                                    id="" 
                                />
                            </div>
                            <div className="">
                                <Label className="">Contraseña</Label>
                                <Input
                                    type="password"
                                    id="" 
                                />
                            </div>
                            <a href="#" className="btn mt-2 btn-primary">Iniciar Sesion </a>
                        </div>

                    </div>
                </Row>
            </Container>
            <Outlet />
        </>
    )
}

export default Login