import * as React from "react";
import * as ReactDOM from "react-dom";
import { noView, bindable } from "aurelia-framework";
import { inject } from "aurelia-framework";

@noView()
@inject(Element)
export default class ReactElement {
  @bindable props; // This must be bindable or we will not be able to update it from the view
  component;

  // The html element to insert the component into
  private element: Element;

  constructor(element) {
    this.element = element;
  }

  propsChanged() {
    if (this.props && this.component) {
      this.render();
    }
  }

  componentChanged() {
    if (this.props && this.component) {
      this.render();
    }
  }

  attached() {
    this.render();
  }

  render() {
    ReactDOM.render(
      React.createElement(this.component, this.props, null),
      this.element
    );
  }
}
