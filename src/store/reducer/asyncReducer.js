import axios from '../../http/axios';
import * as ACTION from '../action/action';

function findById(arr, _id) {
  const item = arr.find(item => item._id === _id);
  return item;
}

export function fetchTasksboardAsync() {
  return dispatch => {
    axios.get('tasksboard').then(
      response => {
        dispatch(ACTION.addTaskboard(response.data));
      }
    ).catch(
      err=>console.log(err)
    )
  };
}

export function fetchTodoAsync() {
  return dispatch => {
    axios.get('tasks').then(
      response => {
        dispatch(ACTION.addTodo(response.data));
      }
    ).catch(
      err=>console.log(err)
    )
  };
}

export function updateTodoAsync(data) {
  return (dispatch, getState) => {
    let task = findById(getState().todos, data._id)
    task.progress = data.progress;
    axios.patch('task', task).then(
      response => {
        dispatch(ACTION.updateTodo(data)) 
      }
    ).catch(
      err=>console.log(err)
    )
  };
}