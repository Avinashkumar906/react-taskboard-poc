import * as ACTIONCONST from './actionConstant'

export function addUser(data){ 
  return {type: ACTIONCONST.ADD_USER, payload: data};
}

export function removeUser(){ 
  return {type: ACTIONCONST.REMOVE_USER};
}

export function addTaskboard(data){ 
  return {type: ACTIONCONST.ADD_TASKBOARD, payload: data};
}

export function updateTaskboard(data){ 
  return {type: ACTIONCONST.UPDATE_TASKBOARD, payload: data};
}

export function deleteTaskboard(data){ 
  return {type: ACTIONCONST.DELETE_TASKBOARD, payload: data};
}

export function cleanTaskboard(){ 
  return {type: ACTIONCONST.CLEAN_TASKBOARD};
}

export function addTodoList(data){ 
  return {type: ACTIONCONST.ADD_TODO_LIST, payload: data};
}

export function updateTodo(data){ 
  return {type: ACTIONCONST.UPDATE_TODO, payload: data};
}

export function addTodo(data){ 
  return {type: ACTIONCONST.ADD_TODO, payload: data};
}

export function deleteTodo(data){ 
  return {type: ACTIONCONST.DELETE_TODO, payload: data};
}

export function cleanTodo(){ 
  return {type: ACTIONCONST.CLEAN_TODO};
}

export function showLoader(){ 
  return {type: ACTIONCONST.SHOW_LOADER};
}

export function hideLoader(){ 
  return {type: ACTIONCONST.HIDE_LOADER};
}

export function showToast(data){ 
  return {type: ACTIONCONST.SHOW_TOAST, payload: data};
}

export function hideToast(data){ 
  return {type: ACTIONCONST.HIDE_TOAST, payload: data};
}

export function revertState(type, payload){ 
  return {type, payload};
}
