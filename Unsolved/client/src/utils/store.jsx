// import { createContext, useContext, useReducer } from "react";
import { configureStore } from "@reduxjs/toolkit";
//provider from redux
import { Provider } from "react-redux";
import { reducer } from "./reducers";

const store = configureStore({ reducer });

//This wraps your application in the Redux Provider, passing the store as a prop to make it available throughout your component tree.
const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
export { StoreProvider };

//this was removed from inside the storeProvider function:
//this is an initial state that must be moved to the reducer
// const [state, dispatch] = useReducer(reducer, {
//   products: [],
//   cart: [],
//   cartOpen: false,
//   categories: [],
//   currentCategory: "",
// });

//this was in the provider: NOT NEEDED; value={[state, dispatch]}

//this was also removed: a useStoreContext function that was called in every react component
// const useStoreContext = () => {
//   return useContext(StoreContext);
// };

// const StoreContext = createContext();
// const { Provider } = StoreContext;
