import { SET_HEALTH } from "./actionTypes";
import axios from "axios";

export const checkHealth =
  (parentId, home, forceRefresh) => async (dispatch) => {
    let apiPath = "/fs/health";
    try {
      let resp = await axios.get(apiPath);
      dispatch({ type: SET_HEALTH, payload: true });
    } catch (err) {
      console.log("err is ", err);
      dispatch({ type: SET_HEALTH, payload: false });
    }
  };
