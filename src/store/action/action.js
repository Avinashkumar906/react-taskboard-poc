export const ADD_USER = "ADD_USER";
export const REMOVE_USER = "REMOVE_USER";

export function addUser(data){ 
  return {type: ADD_USER, payload: data};
}