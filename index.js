//defining constans

const { createStore } = require("redux");

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

//State
// counter state
const initialStateCounter = {
  count: 0,
};

// user state
const initialUserState = {
  users: [{ name: "Shyam" }, { name: "Deepak" }],
};

//action is a object that contains Object :- type and payload

// Increment Action Creators
const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};

// Decrement Action Creators
const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};

// Add User Action Creators
const addUser = () => {
  return {
    type: "ADD_USER",
    payload: { name: "Babu" },
  };
};

//create Reducer for counter
const counterReducer = (state = initialStateCounter, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

//1. state
//2. dispatch action
// 3. reducer
//4. store - getState(), dispatch(), subscribe()

// create store
const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())

store.dispatch(decrementCounter())
store.dispatch(decrementCounter())
store.dispatch(decrementCounter())
