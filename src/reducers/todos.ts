import { Action, ActionType, Todo } from "../actions";

export const todosReducer = (state: Todo[] = [], action: Action) => {
  switch (action.type) {
    case ActionType.fetchTodos:
      return action.payload;
    default:
      return state;
  }
};
