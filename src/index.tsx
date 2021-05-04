import { Component } from 'react';
import ReactDom from 'react-dom';

interface AppProps {
  color?: string;
}

class App extends Component<AppProps> {
  state = { counter: 0 }

  render () {
    return (
      <div>
        <button onClick={this.onIncrement}>++</button>
        <button onClick={this.onDecrement}>--</button>
        {this.state.counter}
      </div>
    )
  }

  private onIncrement = (): void => {
    this.setState({ counter: this.state.counter + 1 })
  };

  private onDecrement = (): void => {
    this.setState({ counter: this.state.counter - 1 })
  };
}

ReactDom.render(<App/>, document.getElementById('root'));
