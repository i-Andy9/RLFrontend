import React, { useContext } from "react";
import AdminContext from "../../Context/Admin/AdminContext";
import { Link } from "react-router-dom";

const SideAdminMenu = () => {
  const { sesionActivity, SignOutAdmin } = useContext(AdminContext);

  return (
    <>
      {sesionActivity ? (
        <div
          className={`col text-center text-white text-2xl col-sm-2 col-md-3 col-xs-3 flex whitespace-nowrap overflow-auto scrollbar-hide  `}
        >
          <div
            id="Main"
            className="     duration-500   items-start h-screen  w-full sm:w-64 bg-gray-800     "
          >
            <div className="flex flex-col justify-start items-center    border-b border-gray-600  ">
              <p className="text-sm leading-5  uppercase text-white mt-3 mb-4">
                Menu Administrador
              </p>

              <div
                id="menu1"
                className="flex justify-start  flex-col w-full md:w-auto items-start pb-1 "
              >
                <Link to="/">
                  <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="bi bi-list-ul"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                      />{" "}
                    </svg>
                    <p className="text-base leading-4  ">Lista de Aulas</p>
                  </button>
                </Link>
                <Link to="/Students">
                  <button className="flex justify-start items-center space-x-3 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="bi bi-card-checklist"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />{" "}
                      <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" />{" "}
                    </svg>
                    <p className="text-base leading-4  ">Lista de Estudiantes</p>
                  </button>
                </Link>
                <Link to="/Room">
                  <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
                    <svg
                      className="fill-stroke"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 10L11 14L17 20L21 4L3 11L7 13L9 19L12 15"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p className="text-base leading-4  ">Registrar Aula</p>
                  </button>
                </Link>
                <Link
                  to='/Student'
                >
                  <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="text-center bi bi-person-circle"
                      viewBox="0 0 16 16"
                    >
                      {" "}
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />{" "}
                      <path
                        fillRule="evenodd"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                      />{" "}
                    </svg>
                    <p className="text-base leading-4  ">Registrar Alumno</p>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default SideAdminMenu;
