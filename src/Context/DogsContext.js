import { createContext, useReducer, useContext } from "react";
import DogsReducer from "../Reducers/DogsReducer";
import { getDogs } from "../Actions/DogsActions";
import axios from "axios";

const initialState = {
  dogs: []
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DogsReducer, initialState);

  const getRandomDog = () => {
    let dog;
    try {
      axios.get(`https://dog.ceo/api/breed/${search.toLowerCase()}/images/random`).then(res => {
        dog = res.data.message;
        dispatch(getDogs(dog));
        console("Dog:", dog);
      });
    } catch (error) {
      console.log("Šuns veislė nerasta...");
    }
  };
  return <AppContext.Provider value={{ ...state, getRandomDog }}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };