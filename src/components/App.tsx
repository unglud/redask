import { Component } from "react";
import { fetchTodos, Todo } from "../actions";
import { StoreState } from "../reducers";
import { connect } from "react-redux";

interface AppProps {
  todos: Todo[];

  fetchTodos(): any;
}

class _App extends Component<AppProps> {
  render() {
    return <div>Hi There</div>;
  }
}

const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
  return { todos: state.todos };
};

export const App = connect(mapStateToProps, { fetchTodos })(_App);
