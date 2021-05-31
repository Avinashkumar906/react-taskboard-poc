import axios from '../../http/axios';
import * as ACTION from '../action/action';

export function fetchTasksboardAsync() {
  return dispatch => {
    // console.log("Calling async function!")
    axios.get('tasksboard').then(
      response => {
        // console.log("response from server!")
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

// export function updateTodoAsync(task) {
//   return dispatch => {
//     axios.patch('task', task).then(
//       response => {
//         dispatch(ACTION.addTodo(response.data));
//       }
//     ).catch(
//       err=>console.log(err)
//     )
//   };
// }