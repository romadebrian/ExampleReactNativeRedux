import {configureStore} from '@reduxjs/toolkit';
import userData from './dataUser';

export default configureStore({
  reducer: {dataUser: userData},
});
