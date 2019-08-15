import { GET_CHICAGO_NAME, CHICAGO_NAME, CHICAGO_NAME_ERROR } from "../actions/types";


const initialState = {
  chicagoname: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
    const {type, payload } = action

  switch (type) {
    case GET_CHICAGO_NAME:
      return {...state, 
        chicagoname: payload,
        loading: false
      };
      case GET_CHICAGO_NAME:
      return {...state, 
        chicagoname: payload,
        loading: false
      };
      case CHICAGO_NAME_ERROR:
        return {
          ...state,
          error: payload,
          loading: false
        }
    default:
        return state
  }
}
