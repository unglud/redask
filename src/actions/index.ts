import { Dispatch } from "redux";
import axios from "axios";

const url = `https://jsonplaceholder.typicode.com/todos`;

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get(url);

    dispatch({
      type: "FETCH_TODOS",
      payload: response.data,
    });
  };
};
