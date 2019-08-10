import { CHICAGO_NAME } from "./types";


//dispatch can be used because of thunk middleware
export const chicagoName = () => async dispatch => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    
  
    try {
      const res = await axios.post("/api/auth", body, config);
  
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
      dispatch(loadUser())
    } catch (err) {
      const errors = err.response.data.errors;
  
      if (errors) {
        errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
      }
      dispatch({
        type: LOGIN_FAIL
      });
    }
  };
