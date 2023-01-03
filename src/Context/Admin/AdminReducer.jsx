import { GET_ADMINS, LOGIN_ADMIN, LOGOUT_ADMIN } from "./AdminConstants";

export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case LOGIN_ADMIN:
      return {
        ...state,
        selectedAdmin: payload,
        sesionActivity: payload.adminSave.actSesion,
        token: payload.adminSave.token,
      };
    case LOGOUT_ADMIN:
      return {
        ...state,
        selectedAdmin: payload,
        sesionActivity: payload.adminSave.actSesion,
        token: '',
      };
    case GET_ADMINS:
      return { ...state, admins: payload };

    default:
      state;
      break;
  }
};
