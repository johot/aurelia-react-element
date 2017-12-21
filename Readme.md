# Aurelia React Element

Aurelia React Element makes it super easy to use React components inside Aurelia!

You create a new Aurelia custom element, inherit our `ReactElement` base class and import the React component. Now you can simply use it in Aurelia by doing:

```ts
<WrappedReactComponent props="{ message: 'Hello World'}">
```

## Installing

`npm install --save aurelia-react-element`

## React setup

`npm install --save react react-dom @types/react @types/react-dom`

## `Aurelia.json` setup

```json
// Insert dependencies
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

// Also add tsx here
"transpiler": {
    "id": "typescript",
    "displayName": "TypeScript",
    "fileExtension": ".ts",
    "dtsSource": ["./custom_typings/**/*.d.ts"],
    "source": "src/**/*.{ts,tsx}"
},
```

## `tsconfig.json` setup

```json
// Add this
"jsx": "react"
```

# Usage

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

```html
<require from="./progress-bar"></require>
<progress-bar percentage.two-way="percentCompleted"></progress-bar>

<!-- Or -->
<progress-bar props.bind="{ percentage: '33' }"></progress-bar>
```
