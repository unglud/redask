import { Dispatch } from "redux";
import axios from "axios";
import { ActionType } from "./types";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const url = `https://jsonplaceholder.typicode.com/todos`;

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url);

    dispatch({
      type: ActionType.fetchTodos,
      payload: response.data,
    });
  };
};
