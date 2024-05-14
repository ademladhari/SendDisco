import { FETCH_MEDICATIONS } from "../store/types ";

const initialState = {
  commandes: [],
};

const medicationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MEDICATIONS:
      return {
        ...state,
        commandes: action.payload,
      };
    default:
      return state;
  }
};

export default medicationReducer;
