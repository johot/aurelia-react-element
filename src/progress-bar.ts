import { bindable } from "aurelia-framework";
import ReactElement from "./library/react-element";
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
