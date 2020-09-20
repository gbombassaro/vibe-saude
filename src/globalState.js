import {configureStore} from '@reduxjs/toolkit';

import doctorMock from './mocks/doctor';

export default configureStore({
  reducer: {
    user: doctorMock,
  }
});