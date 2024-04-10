import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer';

const store = configureStore({
  reducer: rootReducer,
  // Optionally, you can configure middleware, dev tools, etc. here
});

export default store;