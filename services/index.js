import { loginUser, productList, removeProduct, addProduct, signOut } from "../actions";

let user = [{ email: "harini@123.com", password: "harini123" }];

let products = [
  {
    id: 1,
    name: "Amul",
    rate: 500,
    quality: 2
  },
  {
    id: 2,
    name: "Govind",
    rate: 560,
    quality: 1
  },
  {
    id: 3,
    name: "Krishna",
    rate: 460,
    quality: 3
  }
];

export const getUser = () => dispatch => {
  return dispatch(loginUser(user));
};

export const getProducts = () => dispatch => {
  /*products = [
  {
    id: 1,
    name: "Amul",
    rate: 500,
    quality: 2
  },
  {
    id: 2,
    name: "Govind",
    rate: 560,
    quality: 1
  },
  {
    id: 3,
    name: "Krishna",
    rate: 460,
    quality: 3
  }
];*/
  return dispatch(productList(products));
};

export const getLogout = () => dispatch => {
  return dispatch(signOut());
};

export const removeProductItem = id => dispatch => {
  let new_items = products.filter((item, index) =>{ 
    return id !== item.id
  });
  products = new_items;
  return dispatch(removeProduct(products));
};

export const addProductItem = data => dispatch => {
  let id = products.length + 1; 
  data.id = id;
  products.push(data)
  console.log(products)
  return dispatch(addProduct(products));
};
