import {useReducer, useCallback} from 'react';
import {Context} from './Context'
import {SET_FRIENDS, SET_MESSAGES_FRIEND, SET_PROFILE, SET_TOKEN} from './Types'
import {Reducer} from './Reducer'

const initialState = {

  FRIENDS : [],
  MESSAGES_FRIEND : [],
  PROFILE : {},
  TOKEN : ""

}

export const ContextProvider = ({childre}) => {

  const [state, dispatch] = useReducer(Reducer, initialState)


  return (

  );
};
