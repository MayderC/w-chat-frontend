import {
  SET_FRIENDS,
  SET_MESSAGES_FRIEND,
  SET_PROFILE,
  SET_TOKEN,
  SET_SOCKET,
  SET_SIDEBAR,
} from "./Types";

export const Reducer = (state, action) => {
  switch (action.type) {
    case SET_FRIENDS:
      return { ...state, FRIENDS: action.payload };
    case SET_MESSAGES_FRIEND:
      return { ...state, MESSAGES_FRIEND: action.payload };
    case SET_PROFILE:
      return { ...state, PROFILE: action.payload };
    case SET_TOKEN:
      return { ...state, TOKEN: action.payload };
    default:
      return state;
  }
};
