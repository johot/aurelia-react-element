var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "react", "react-dom", "aurelia-framework", "aurelia-framework"], function (require, exports, React, ReactDOM, aurelia_framework_1, aurelia_framework_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ReactElement = (function () {
        function ReactElement(element) {
            this.element = element;
        }
        ReactElement.prototype.propsChanged = function () {
            if (this.props && this.component) {
                this.render();
            }
        };
        ReactElement.prototype.componentChanged = function () {
            if (this.props && this.component) {
                this.render();
            }
        };
        ReactElement.prototype.attached = function () {
            this.render();
        };
        ReactElement.prototype.render = function () {
            ReactDOM.render(React.createElement(this.component, this.props, null), this.element);
        };
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], ReactElement.prototype, "props", void 0);
        ReactElement = __decorate([
            aurelia_framework_1.noView(),
            aurelia_framework_2.inject(Element),
            __metadata("design:paramtypes", [Object])
        ], ReactElement);
        return ReactElement;
    }());
    exports.default = ReactElement;
});
//# sourceMappingURL=react-element.js.map