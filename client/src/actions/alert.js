import { SET_ALERT, REMOVE_ALERT } from "./types";
import uuid from "uuid";

//dispatch can be used because of thunk middleware
export const setAlert = (msg, alertType, timeoute = 5000) => dispatch => {
  const id = uuid.v4();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  });
  //Delete the Alert after 5 seconds
  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeoute);
};