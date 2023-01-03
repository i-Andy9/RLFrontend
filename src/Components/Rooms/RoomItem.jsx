import React, { useContext, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import RoomContext from "../../Context/Room/RoomContext";
import { Card, CardBody, Container, Label, Row } from "reactstrap";
import SideAdminMenu from "../Common/SideAdminMenu";

const RoomItem = () => {
  const { selectedRoom, cleanRoom } = useContext(RoomContext);
  const roomDummy = {
    code: "12c",
    details: "details details details details details",
    list: '[{\"list\":{\"name\":\"Elizabeth\",\"lastName\":\"Gonzales\",\"rut\":\"20.129.308-0\",\"age\":\"19\",\"classroom\":\"12c\",\"gender\":\"f\",\"family\":\"18.231.231-2\"}}]',
    name: 'Construccion'
  }
  const [listStudents, setlistStudents] = useState([])
  const cleanItem = () => {
    cleanRoom()
  }
  useEffect(() => {
    let list = JSON.parse(roomDummy.list)
    setlistStudents(list)
  }, [])
  return (
    <div className='flex'>
      <SideAdminMenu />
      <Container>

        {roomDummy !== null ?
          (
            <>

              <div className=" col col-md-12 col-sm-11 col-xs-12 flex justify-center    ">
                <Card className="p-4 mt-3 bg-gray-800 w-50 text-white">
                  <h1 className="text-center text-xl">Aula {roomDummy.name} </h1>

                  <CardBody
                    className='text-white'
                  >

                    <Row>
                      <Label
                        className='mt-3'
                      >Codigo : {roomDummy.code}</Label>
                    </Row>
                    <Row>
                      <Label
                        className='mt-3'
                      >Descripcion : {roomDummy.details}</Label>
                    </Row>
                    <Row>
                      <Label
                        className='mt-3'
                      >Estudiantes inscritos : { }</Label>

                    </Row>
                  </CardBody>

                </Card>
              </div>
            </>
          ) : (<></>)
        }
      </Container>
      <Outlet />
    </div>
  );
};

export default RoomItem;
