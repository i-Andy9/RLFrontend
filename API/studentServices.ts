export const getStudentListService = async () => {
  try {
    const url = "http://localhost:4000/rather/students/";
    const resp = await fetch(url);
    const data = await resp.json();
    const list = await data;
    return list;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getStudentService = async (rut: string) => {
  try {
    const url = `http://localhost:4000/rather/students/${rut}`;
    const resp = await fetch(url);
    const data = await resp.json();
    const studentData = await data;
    return studentData;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteStudentService = async (rut: string, token: string) => {
  try {
    const url = `http://localhost:4000/rather/students/${rut}`;
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

export const addStudentService = async (body: {}, token: string) => {
  try {
    const url = `http://localhost:4000/rather/students/`;
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
