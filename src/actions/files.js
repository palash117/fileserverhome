import { SET_FILES } from "./actionTypes";
import axios from "axios";

export const getFiles =  (parentId, home, forceRefresh) => async(dispatch) => {
	let apiPath =""
    if (home || !parentId){
        apiPath = "/fs/getPaginated?pageNo=1&pageSize=100"
        parentId = 0;
    }else{
        apiPath = `fs/getFilesByParentId?parentID=${parentId}`
    }
    try{
    let resp = await axios.get(apiPath);
    console.log("resp ", resp)
    let data = resp.data
    console.log()
    dispatch({type:SET_FILES, payload:{parentId:parentId, files:data}})
    }
    catch(err){
        console.error(err)
    }
}
