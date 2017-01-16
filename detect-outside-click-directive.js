"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var DetectOutsideClick = (function () {
    function DetectOutsideClick(elem) {
        this.elem = elem;
        this.outsideClick = new core_1.EventEmitter();
    }
    DetectOutsideClick.prototype.handleOutsideClick = function (event) {
        var current = event.target;
        var host = this.elem.nativeElement;
        do {
            if (current === host) {
                this.outsideClick.emit(true);
                return;
            }
            current = current.parentNode;
        } while (current);
        this.outsideClick.emit(false);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], DetectOutsideClick.prototype, "outsideClick", void 0);
    __decorate([
        core_1.HostListener('document:click', ['$event']),
        core_1.HostListener('document:mousedown', ['$event']),
        core_1.HostListener('document:mouseup', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], DetectOutsideClick.prototype, "handleOutsideClick", null);
    DetectOutsideClick = __decorate([
        core_1.Directive({
            selector: '[detect-outside-click]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], DetectOutsideClick);
    return DetectOutsideClick;
}());
exports.DetectOutsideClick = DetectOutsideClick;