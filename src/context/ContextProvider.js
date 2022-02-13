import { useReducer, useCallback, useState } from "react";
import { Context } from "./Context";

import { SET_FRIENDS, SET_MESSAGES_FRIEND, SET_PROFILE } from "./Types";
import { Reducer } from "./Reducer";

const initialState = {
  FRIENDS: [],
  MESSAGES_FRIEND: [],
  PROFILE: {},
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const [TOKEN, setTokenSatate] = useState("");
  const setToken = useCallback((token) => {
    setTokenSatate(token);
    //dispatch({ type: SET_TOKEN, payload: token });
  }, []);

  const setProfile = useCallback((profile) => {
    dispatch({ type: SET_PROFILE, payload: profile });
  }, []);

  return (
    <>
      <Context.Provider
        value={{
          ...state,
          TOKEN,
          setToken,
          setProfile,
        }}
      >
        {children}
      </Context.Provider>
    </>
  );
};
