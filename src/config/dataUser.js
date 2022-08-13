import {createSlice} from '@reduxjs/toolkit';

export const dataUser = createSlice({
  name: 'dataUser',
  initialState: {
    email: '',
    password: '',
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setEmail, setPassword} = dataUser.actions;

export default dataUser.reducer;
