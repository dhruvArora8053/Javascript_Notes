import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";

//copying object:
const state = {
  cart: [
    { product: "bread", quantity: 5 },
    { product: "pizza", quantity: 5 },
  ],
  user: {
    loggedIN: true,
  },
};

//With Javascript
const stateClone = Object.assign({}, state);
console.log(stateClone);

state.user.loggedIN = false;
console.log(stateClone);
//it is also false

//With Lodash
const stateDeepClone = cloneDeep(state);
console.log(stateDeepClone);

state.user.loggedIN = true;
console.log(stateDeepClone);
//it's still fasle
