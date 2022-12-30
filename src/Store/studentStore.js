import create from "zustand";

export const useStudentStore = create((set) => ({
  studentList: [],
  addStundeList: (data) => set((state) => ({ ...state,studentList: data })),
}));
