import { CHICAGO_NAME, CHICAGO_NAME_ERROR } from "./types";
import axios from "axios";


//dispatch can be used because of thunk middleware
export const getChicagoName = () => async dispatch => {
    
  
    try {
      const res = await axios.get("/api/chicagoname");

      const firstname = res.data[0].firstnames[Math.floor(Math.random() * res.data[0].firstnames.length)];
      const lastname = res.data[0].lastnames[Math.floor(Math.random() * res.data[0].lastnames.length)];
  
      dispatch({
        type: CHICAGO_NAME,
        payload: { firstname: firstname, lastname: lastname}
      });
     
    
    } catch (err) {
      console.error(err)
      dispatch({
        type: CHICAGO_NAME_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status}
      })
    }
  };

  export const ChicagoName = (firstname, lastname) => dispatch => {
  
    
      dispatch({
        type: CHICAGO_NAME,
        payload: { firstname: firstname, lastname: lastname}
      });
    
    
  };
 


