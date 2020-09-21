import {createSlice} from '@reduxjs/toolkit';

const doctorMock = createSlice({
  name: 'doctors',
  initialState: {
    id: 'null'
  },
  reducers: {
    loadDoctors(state, payload) {
      return {...state, payload};
    }
  }
});

export const {loadDoctors} = doctorMock.actions;

export default doctorMock.reducer;