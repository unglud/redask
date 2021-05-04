import { Component } from "react";
import { deleteTodo, fetchTodos, Todo } from "../actions";
import { StoreState } from "../reducers";
import { connect } from "react-redux";

interface AppProps {
  todos: Todo[];

  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
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
      return (
        <div onClick={() => this.onTodoClick(todo.id)} key={todo.id}>
          {todo.title}
        </div>
      );
    });
  }

  private onButtonClick = (): void => {
    this.props.fetchTodos();
  };

  private onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  };
}

const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
  return { todos: state.todos };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
