import { ADD_STUDENTS, CLEAN_STUDENT, DELETE_STUDENTS, EDIT_STUDENTS, GET_STUDENT, GET_STUDENTSLIST } from "./StudentConstant"

export default (state, action) => {
    const { payload, type } = action

    if (payload && payload !== undefined) {
        switch (type) {
            case GET_STUDENTSLIST:
                return { ...state, students: payload.listStudents }
            case GET_STUDENT:
                return { ...state, selectedStudent: payload.studentsExist, data: payload }
            case CLEAN_STUDENT:
                return { ...state, }
            case ADD_STUDENTS:
                return { ...state, selectedStudent: payload.students }
            case EDIT_STUDENTS:
                return { ...state, }
            case DELETE_STUDENTS:
                return { ...state, }
            default:
                return { ...state }
        }
    }
} 