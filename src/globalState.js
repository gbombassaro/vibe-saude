import {configureStore} from '@reduxjs/toolkit';

import doctorMock from './reducers/doctor';

export default configureStore({
  reducer: {
    doctors: doctorMock,
  }
});