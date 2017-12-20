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
