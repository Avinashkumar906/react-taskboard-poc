import axios from '../../http/axios';
import * as ACTION from '../action/action';

function findById(arr, _id) {
  const item = arr.find(item => item._id === _id);
  return item;
}

export function fetchTasksboardAsync() {
  return dispatch => {
    dispatch(ACTION.showLoader())
    axios.get('tasksboard').then(
      response => {
        dispatch(ACTION.addTaskboard(response.data));
        dispatch(ACTION.hideLoader())
      }
    ).catch(
      err=>{
        console.log(err)
        dispatch(ACTION.hideLoader())
      }
    )
  };
}

export function fetchTodoAsync() {
  return dispatch => {
    dispatch(ACTION.showLoader())
    axios.get('tasks').then(
      response => {
        dispatch(ACTION.addTodo(response.data));
        dispatch(ACTION.hideLoader())
      }
    ).catch(
      err=>{
        console.log(err)
        dispatch(ACTION.hideLoader())
      }
    )
  };
}

export function updateTodoAsync(data) {
  return (dispatch, getState) => {
    let task = findById(getState().todos, data._id)
    task.progress = data.progress;
    dispatch(ACTION.updateTodo(task)) 
    axios.patch('task', task).then(
      response => {
        dispatch(ACTION.showToast(new Object({title:"update",body:"Board Updated !"}))) 
      }
    ).catch(
      err=>console.log(err)
    )
  };
}