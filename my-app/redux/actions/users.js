import * as types from "../types";
export function getUsers() {
    return {
      type: types.GET_USERS_REQUESTED,
    }
  }