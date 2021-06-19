import { SET_FILES } from "../actions/actionTypes";

const initialState = {
  parentId: -1,
  files: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_FILES:
      return {
        ...state,
        parentId: payload.parentId,
        files: [...payload.files],
      };

    default:
      return state;
  }
}
