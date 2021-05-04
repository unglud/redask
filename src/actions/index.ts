import { Dispatch } from "redux";
import axios from "axios";
import { ActionType } from "./types";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodosAction {
  type: ActionType.fetchTodos;
  payload: Todo[];
}

export interface DeleteTodoAction {
  type: ActionType.deleteTodo;
  payload: number;
}

const url = `https://jsonplaceholder.typicode.com/todos`;

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url);

    dispatch<FetchTodosAction>({
      type: ActionType.fetchTodos,
      payload: response.data,
    });
  };
};

export const deleteTodo = (id: number): DeleteTodoAction => {
  return {
    type: ActionType.deleteTodo,
    payload: id,
  };
};
