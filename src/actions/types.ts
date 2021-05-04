import { DeleteTodoAction, FetchTodosAction } from "./todos";

export enum ActionType {
  fetchTodos,
  deleteTodo,
}

export type Action = FetchTodosAction | DeleteTodoAction;
