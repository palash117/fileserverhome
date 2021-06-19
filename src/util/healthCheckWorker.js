import { v4 as uuidv4 } from 'uuid';
import { checkHealth } from '../actions/healthCheck';
import store from '../Store'
// import  from '../actions/healthCheck'

const startHealthCheckWorker = ()=>{
    let value = uuidv4();
    let key = "HEALTH_CHECK_WORKER_ID"
    localStorage.setItem(key,value)
    let healthCheckWorker = ()=>{
        if (localStorage.getItem(key)==value){
        store.dispatch(checkHealth());
        }
    }
    setInterval(healthCheckWorker, 1000)
}

export default startHealthCheckWorker