export const LogInAdminServices = async (/* token:string, */ body: {}) => {
  try {
    const url = `http://localhost:4000/rather/admin/login`;
    const resp = await fetch(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        /* authorization: `Bearer ${token}`, */
      },
      method: "POST",
      body: JSON.stringify(body),
    });
    const data = await resp.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
export const LogOutAdminServices = async (token: string, body: {}) => {
  try {
    const url = `http://localhost:4000/rather/admin/loadout`;
    const resp = await fetch(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      method: "POST",
      body: JSON.stringify(body),
    });
    const data = await resp.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
export const getAdminsListService = async () => {
  try {
    const url = "http://localhost:4000/rather/admin/";
    const resp = await fetch(url);
    const data = await resp.json();
    const list = await data.adminList;
    return list;
  } catch (error) {
    throw new Error(error.message);
  }
};
