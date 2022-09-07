import {
  LOGIN,
  LOGOUT,
  PRODUCT_LIST,
  SHOW_USER,
  ERROR,
  LEAVE_FORM,
  ADD_ITEM,
  REMOVE_ITEM
} from "./constant";

export const loginUser = user => {
  return {
    type: LOGIN,
    user
  };
};

export const signOut = () => {
  return {
    type: LOGOUT,
    user: [],
    payload: []
  };
};

export const leaveForm = () => {
  return {
    type: LEAVE_FORM,
    user: [],
    payload: []
  };
};

export const productList = prod => {
  return {
    type: PRODUCT_LIST,
    payload: { list: prod }
  };
};

export const removeProduct = list => {
  return {
  type: REMOVE_ITEM,
  payload: {list}
  }
};

export const addProduct = data => {
  return {
  type: ADD_ITEM,
  payload: {list: data}
  }
};

