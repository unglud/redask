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
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.renderList()}
      </div>
    );
  }

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return <div key={todo.id}>{todo.title}</div>;
    });
  }

  private onButtonClick = (): void => {
    this.props.fetchTodos();
  };
}

const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
  return { todos: state.todos };
};

export const App = connect(mapStateToProps, { fetchTodos })(_App);
