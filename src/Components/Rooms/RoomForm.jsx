import React, { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import SideAdminMenu from "../Common/SideAdminMenu";
import { Button, Card, CardBody, Input, Label } from "reactstrap";
import { codeRoomValidator } from "../../Helpers/Functions";
import RoomContext from "../../Context/Room/RoomContext";
import AdminContext from "../../Context/Admin/AdminContext";

const RoomForm = () => {

  const { addRoom } = useContext(RoomContext)
  const { token } = useContext(AdminContext)

  const [odtRoomForm, setodtRoomForm] = useState({
    code: "",
    name: "",
    details: "",
    list: '',
  });

  const handleUpdateForm = (e) => {
    const { id, value } = e.target

    switch (id) {
      case 'code':
        setodtRoomForm({ ...odtRoomForm, code: codeRoomValidator(value) })
        break;

      case 'name':
        setodtRoomForm({ ...odtRoomForm, name: value })
        break;

      case 'details':
        setodtRoomForm({ ...odtRoomForm, details: value })
        break;

      default:
        setodtRoomForm(odtRoomForm)
        break;
    }
  }

  const sendToAddRoom = () => {

    addRoom(odtRoomForm, token)
  }


  return (
    <>
      <div className="flex  ">
        <SideAdminMenu />
        <div className=" col col-md-8 col-sm-6 col-xs-2 flex justify-center h-100  ">
          <Card className="p-4 mt-3 bg-gray-800 w-50 text-white">
            <h1 className="text-center text-xl">Fomulario Registro Aula</h1>

            <CardBody>
              <div className="mt-3">
                <Label className="">Codigo</Label>
                <Input
                  className="w-55"
                  placeholder="00a"
                  type="text"
                  id="code"
                  value={(odtRoomForm.code)}
                  onChange={handleUpdateForm}
                />
              </div>
              <div className="mt-3">
                <Label className="">Nombre de Aula</Label>
                <Input
                  className="w-55"
                  placeholder="Sala cultural"
                  type="text"
                  id="name"
                  value={odtRoomForm.name}
                  onChange={handleUpdateForm}
                />
              </div>
              <div className="mt-3">
                <Label className="">Descripcion</Label>
                <Input
                  className="w-55"
                  placeholder="Se usa para..."
                  type="text"
                  id="details"
                  value={odtRoomForm.details}
                  onChange={handleUpdateForm}
                />
              </div>

              <div className="text-center">
                <button
                  className="btn btn-outline-light mt-5"
                  onClick={sendToAddRoom}
                >
                  Registrar
                </button>
              </div>
            </CardBody>

          </Card>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default RoomForm;
