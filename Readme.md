# Aurelia React Element

Aurelia React Element makes it super easy to use React components inside Aurelia!

You create a new Aurelia custom element, inherit our `ReactElement` base class and import the React component. Now you can simply use it in Aurelia by doing:

```ts
<WrappedReactComponent props="{ message: 'Hello World'}">
```

## Installing

### Install aurelia component

`npm install --save aurelia-react-element`

### React setup

`npm install --save react react-dom @types/react @types/react-dom`

## Configuring an Aurelia CLI project (`Aurelia.json` etc)

### `Aurelia.json` setup

Example where we are wrapping the react component named `react-circular-progressbar` from npm.

In the `"dependencies":` section in `aurelia.json`.

```json
"react-circular-progressbar",
{
    "name": "react",
    "path": "../node_modules/react/umd",
    "main": "react.development"
},
{
    "name": "react-dom",
    "path": "../node_modules/react-dom/umd",
    "main": "react-dom.development"
},
{
    "name": "aurelia-react-element",
    "path": "../node_modules/aurelia-react-element",
    "main": "index"
},
```

## `tsconfig.json` setup (for TypeScript users)

Add `"jsx": "react"` to your `tsconfig.json`.

Example `tsconfig.json`:

```json
{
  "compileOnSave": false,
  "compilerOptions": {
    "sourceMap": true,
    "target": "es5",
    "module": "amd",
    "declaration": false,
    "noImplicitAny": false,
    "removeComments": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "allowJs": true,
    "moduleResolution": "node",
    "lib": ["es2017", "dom"],
    "jsx": "react"
  },
  "exclude": ["node_modules", "aurelia_project"],
  "filesGlob": [
    "./src/**/*.ts",
    "./test/**/*.ts",
    "./custom_typings/**/*.d.ts"
  ],
  "atom": {
    "rewriteTsconfig": false
  }
}
```

# Wrapping a React component in an Aurelia custom element

Note samples are made using TypeScript but should be easy to convert to JavaScript.

## Wrapping your own React component

### Your Aurelia custom element

```ts
import { bindable } from "aurelia-framework";
import ReactElement from "aurelia-react-element";
import ReactSampleComponent from "./react-components/react-sample-component";

export class SampleComponent extends ReactElement {
  props = { message: "Hello from Aurelia!" };
  component: any = ReactSampleComponent;
}
```

### Your React component (sample)
This file should have a file ending of `tsx` (TypeScript) or `jsx` (JavaScript)
```jsx
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
          <code>src/react-components/sample-component.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}
```

## Wrapping an existing component (from npm)

In this example we are wrapping the `react-circular-progressbar` from npm.

```ts
import { bindable } from "aurelia-framework";
import ReactElement from "aurelia-react-element";
import CircularProgressbar from "react-circular-progressbar";

export class ProgressBar extends ReactElement {
  @bindable props = {};
  component: any = CircularProgressbar;

  @bindable percentage: number = 0;

  bind() {
    this.syncProps();
  }

  syncProps() {
    this.props = { percentage: this.percentage };
  }

  percentageChanged(newValue: number, oldValue: number) {
    this.syncProps();
  }
}
```

## Using in Aurelia:

### Sample 1

```html
<template>
   <require from="./sample-component"></require>
   <sample-component></sample-component>
</template>
```

### Sample 2

```html
<template>
  <require from="./progress-bar"></require>
  <progress-bar percentage.two-way="percentCompleted"></progress-bar>
  
  <!-- Or use the props property -->
  <!-- <progress-bar props.bind="{ percentage: '33' }"></progress-bar> -->
</template>
```

## More reading

Ashley Grant has another great example of using React with Aurelia, read more [here](https://stackoverflow.com/questions/46282448/can-we-integrate-react-component-into-aurelia-project).
