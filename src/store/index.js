import { createStore } from "redux";
import rootReducer from "../reducers";

const initialState = {
  cards: [
    {id:1, title:'title 1', text:'hello'},
    {id:2, title:'title 2', text:'hello'},
    {id:3, title:'title 3', text:'hello'},
    {id:4, title:'title 4', text:'hello'},
  ]
};

const store = createStore(
  rootReducer,
  initialState
);

store.subscribe(() => {
  console.log("store :", store.getState());
});

export default store;
