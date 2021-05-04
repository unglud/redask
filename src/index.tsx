import { Component } from "react";
import ReactDom from "react-dom";

interface AppProps {
  color: string;
}

class App extends Component<AppProps> {
  render() {
    return <div>{this.props.color}</div>;
  }
}

ReactDom.render(<App color="red" />, document.getElementById("root"));
