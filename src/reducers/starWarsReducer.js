import { FETCHING, SUCCESS, FAILURE } from "../actions";
const initialState = {
  characters: [],
  isFetching: false,
  error: null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        isFetching: true
      };
    case SUCCESS:
      return {
        ...state,
        characters: action.payload
      };
    case FAILURE:
      return {
        ...state,
        error: "Well that's interesting. Something didn't work out!"
      };
    default:
      return state;
  }
};
