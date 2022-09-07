import {
  LOGIN,
  LOGOUT,
  PRODUCT_LIST,
  SHOW_USER,
  REMOVE_ITEM,
  ADD_ITEM,
  ERROR
} from "../actions/constant";
import { combineReducers } from "redux";

const initState =  {
    users: [],
    products: []
  }

const dashboard = (state, action) => {
  state = initState;
  switch (action.type) {
    case LOGIN:
    console.log(action)
      return {...state, users: action.payload};
    case PRODUCT_LIST:
      return {...state, products: action.payload.list};
    case REMOVE_ITEM:
      return {...state, products: action.payload.list};
    case ADD_ITEM:
      return {...state, products: action.payload.list};
    case LOGOUT:
      return state;
    default:
      return state;
  }
};

export default combineReducers({ dashboard });
