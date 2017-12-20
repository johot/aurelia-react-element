import { bindable } from "aurelia-framework";
import ReactElement from "./library/react-element";
import ReactSampleComponent from "./react-components/react-sample-component";

export class SampleComponent extends ReactElement {
  props = { message: "Hello from Aurelia!" };
  component: any = ReactSampleComponent;
}
