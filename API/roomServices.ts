export const getRoomListService = async () => {
  try {
    const url = "http://localhost:4000/rather/rooms/";
    const resp = await fetch(url);
    const data = await resp.json();
    const list = await data.listRooms;
    return list;
  } catch (error) {
    throw new Error(error.message);
  }
};
export const getRoomService = async (code: string) => {
  try {
    const url = `http://localhost:4000/rather/rooms/${code}`;
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteRoomService = async (code: string, token: string) => {
  try {
    const url = `http://localhost:4000/rather/rooms/${code}`;
    const resp = await fetch(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      method: "DELETE",
    });
    const data = await resp.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const addRoomService = async (body: {}, token: string) => {
  try {
    const url = `http://localhost:4000/rather/rooms/`;
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

export const editRoomService = async (
  body: {},
  code: string,
  token: string
) => {
  try {
    const url = `http://localhost:4000/rather/rooms/${code}`;
    const resp = await fetch(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      method: "PUT",
      body: JSON.stringify(body),
    });
    const data = await resp.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
