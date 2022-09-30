const { createStore } = require("redux");

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const initialState = {
  count: 1,
  users: ["Shyam"],
};

const incrementCounter = (num) => {
  return {
    type: INCREMENT,
    payload: num,
  };
};

const addUser = (user) => {
  return {
    type: "ADD_USER",
    payload: user,
  };
};

const decrementCounter = (number) => {
  return {
    type: DECREMENT,
    payload: number,
  };
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - action.payload,
      };
    case "ADD_USER":
      return {
        users: [...state.users, action.payload],
        count: state.count + 1,
      };
    default:
      state;
  }
};

const store = createStore(counterReducer);

store.subscribe(() => console.log(store.getState()));

store.dispatch(incrementCounter(10));
store.dispatch(incrementCounter(20));
store.dispatch(decrementCounter(5));
store.dispatch(addUser("Riju"))
store.dispatch(addUser("Rahul"))
