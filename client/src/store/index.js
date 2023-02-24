import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  students: [],
  alertBox:{
    show:false,
    title:"",
    message:"",
    color:""
  }
};

export const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    setStudents: (state,action) => {
      state.students = action.payload; 
    },
    setAlertBox:(state,action)=> {
      state.alertBox = action.payload; 
    },
  },
});

export const { setStudents, setAlertBox } =
  studentSlice.actions;
export default studentSlice.reducer;
