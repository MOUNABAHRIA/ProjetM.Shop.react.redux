// import { configureStore } from '@reduxjs/toolkit'
// const store = configureStore({
//     reducer:{}
// })
// export default store
import { combineReducers, createStore } from "redux";
import cartSlice from "./cartSlice";

const store = createStore(
  combineReducers({ cartSlice }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
