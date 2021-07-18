import axios from '../../http/axios';
import * as ACTION from '../action/action';

function findById(arr, _id) {
  return arr.find(item => item._id === _id);
}

export function addTasksboardAsync(note) {
  return dispatch => {
    dispatch(ACTION.showLoader())
    axios.post('taskboard', note).then(
      response => {
        dispatch(ACTION.updateTaskboard(response.data));
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
export function updateTasksboardAsync(note) {
  return dispatch => {
    axios.patch('taskboard', note).then(
      response => {
        dispatch(ACTION.updateTaskboard(response.data))
        dispatch(ACTION.showToast({title:"Update",body:"Board Updated !"}));
      }
    ).catch(
      err=>{
        console.log(err)
        dispatch(ACTION.showToast({title:"Error",body:"Error occured !"})); 
      }
    )
  };
}
export function deleteTasksboardAsync(note) {
  return dispatch => {
    axios.delete(`taskboard?taskboardId=${note._id}`).then(
      response => {
        dispatch(ACTION.deleteTaskboard(note))
        dispatch(ACTION.showToast({title:"Update",body:"Board Updated !"}));
      }
    ).catch(
      err=>{
        console.log(err)
        dispatch(ACTION.showToast({title:"Error",body:"Error occured !"}));
      }
    )
  };
}

export function refresh() {
  return dispatch => {
    let tasks = axios.get('tasks');
    let notes = axios.get('tasksboard');
    Promise.all([tasks,notes]).then(
      ([tasks,notes]) => {
        dispatch(ACTION.addTodoList(tasks.data));
        dispatch(ACTION.addTaskboard(notes.data));
        dispatch(ACTION.showToast({title:"Refresh",body:"Dashboard refreshed !"}));
      }
    )
  }
}

export function fetchTodoAsync() {
  return dispatch => {
    dispatch(ACTION.showLoader())
    axios.get('tasks').then(
      response => {
        dispatch(ACTION.hideLoader())
        dispatch(ACTION.addTodoList(response.data));
        dispatch(ACTION.showToast({title:"Update",body:"Board Updated !"}));
      }
    ).catch(
      err=>{
        console.log(err)
        dispatch(ACTION.hideLoader())
        dispatch(ACTION.showToast({title:"Error",body:"Error occured !"}));
      }
    )
  };
}

export function addTodoAsync(task) {
  return dispatch => {
    dispatch(ACTION.showLoader())
    axios.post('task', task).then(
      response => {
        dispatch(ACTION.addTodo(response.data))
        dispatch(ACTION.hideLoader())
      }
    ).catch(
      err=>{
        console.log(err)
        dispatch(fetchTodoAsync())
        dispatch(ACTION.hideLoader())
      }
    )
  };
}

export function updateTodoAsync(data) {
  return (dispatch, getState) => {
    const task = findById(getState().todos, data._id)
    task.progress = data.progress;
    dispatch(ACTION.updateTodo(task)) 
    axios.patch('task', task).then(
      response => {
        dispatch(ACTION.showToast({title:"update",body:"Board Updated !"}));
      }
    ).catch(
      err=>{
        console.log(err);
        dispatch(fetchTodoAsync())
        dispatch(ACTION.showToast({title:"Error",body:"Error occured !"}));
      }
    )
  };
}

export function deleteTodoAsync(data) {
  return (dispatch) => {
    dispatch(ACTION.deleteTodo(data));
    axios.delete(`task?taskId=${data._id}`).then(
      response => {
        dispatch(ACTION.showToast({title:"Update",body:"Task Delete Success!"}));
      }
    ).catch(
      err=>{
        console.log(err)
        dispatch(fetchTodoAsync())
        dispatch(ACTION.showToast({title:"Update",body:"Unable to delete task!"}));
      }
    )
  };
}