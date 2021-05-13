import axios from '../../http/axios';

export const ADD_USER = "ADD_USER";
export const REMOVE_USER = "REMOVE_USER";
export const ADD_TASKBOARD = "ADD_TASKBOARD";

export function addUser(data){ 
  return {type: ADD_USER, payload: data};
}

export function addTaskboard(data){ 
  return {type: ADD_TASKBOARD, payload: data};
}

export function fetchTasksboardAsync() {
  return dispatch => {
    console.log("Calling async function!")
    axios.get('tasksboard').then(
      response => {
        console.log("response from server!")
        dispatch(addTaskboard(response.data));
      }
    ).catch(
      err=>console.log(err)
    )
  };
}