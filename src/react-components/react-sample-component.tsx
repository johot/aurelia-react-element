import * as React from "react";
import { Component } from "react";
// import "./App.css";

//const logo = require("./logo.svg");

interface ReactSampleComponentProps {
  message: string;
}

export default class ReactSampleComponent extends Component<
  ReactSampleComponentProps
> {
  render() {
    return (
      <div className="App">
        <div className="App-header" style={{ marginBottom: "10px" }}>
          <img src="img/logo.svg" className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <h3>
            Message from Aurelia: <i>{this.props.message}</i>
            <br />
          </h3>
        </div>
        <p className="App-intro">
          To get started, edit
          <code>src/react-components/sample-component.tsx</code> and save to
          reload.
        </p>
      </div>
    );
  }
}
