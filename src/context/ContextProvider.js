import { useReducer, useCallback } from "react";
import { Context } from "./Context";
import {
  SET_FRIENDS,
  SET_MESSAGES_FRIEND,
  SET_PROFILE,
  SET_TOKEN,
} from "./Types";
import { Reducer } from "./Reducer";

const initialState = {
  FRIENDS: [],
  MESSAGES_FRIEND: [],
  PROFILE: {},
  TOKEN: "",
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const setToken = useCallback((token) => {
    //get tokenfrom localStorage, if is null return and cancel

    dispatch({ type: SET_TOKEN, payload: token });
  }, []);

  const setProfile = useCallback((profile) => {
    dispatch({ type: SET_PROFILE, payload: profile });
  }, []);

  return (
    <>
      <Context.Provider
        value={{
          ...state,
          setToken,
          setProfile,
        }}
      >
        {children}
      </Context.Provider>
    </>
  );
};
