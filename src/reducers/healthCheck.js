import { SET_HEALTH } from "../actions/actionTypes";

const initialState = {
    healthy : true
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_HEALTH:
      return {
        ...state,
        healthy:payload
      };

    default:
      return state;
  }
}
