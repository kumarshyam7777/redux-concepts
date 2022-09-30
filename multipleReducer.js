const { createStore, combineReducers, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");

const ADD_PRODUCTS = "ADD_PRODUCTS";
const GET_PRODUCTS = "GET_PRODUCTS";

const initialProductStore = {
  products: ["Sugar", "Jaggery"],
  noOfProducts: 2,
};

// CART constants
const ADD_CART = "ADD_CART";
const GET_CART = "GET_CART";

const initialCartStore = {
  carts: ["Car"],
  noOfCart: 1,
};

const addProducts = (product) => {
  return {
    type: ADD_PRODUCTS,
    payload: product,
  };
};

const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};

const addCart = (cart) => {
  return {
    type: ADD_CART,
    payload: cart,
  };
};

const getCart = () => {
  return {
    type: GET_CART,
  };
};

/// reducer of Carts

const cartReducer = (state = initialCartStore, action) => {
  switch (action.type) {
    case ADD_CART:
      return {
        carts: [...state.carts, action.payload],
        noOfCart: state.noOfCart + 1,
      };
    case GET_CART: {
      return {
        ...state,
      };
    }
    default:
   return   state;
  }
};

//reducer of Products
const productReducer = (state = initialProductStore, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };
    case ADD_PRODUCTS:
      return {
        products: [...state.products, action.payload],
        noOfProducts: state.noOfProducts + 1,
      };
    default:
    return  state;
  }
};

const rootReducer = combineReducers({
  productR: productReducer,
  cartR: cartReducer,
});

const store = createStore(rootReducer,applyMiddleware(logger));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProducts());
store.dispatch(addProducts("Jeera"));
store.dispatch(addProducts("Dhania"));

store.dispatch(getCart());
store.dispatch(addCart("Jeep"));
store.dispatch(addCart("Tractor"));
