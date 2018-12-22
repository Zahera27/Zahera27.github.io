(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about-us/about-us.component.css":
/*!*************************************************!*\
  !*** ./src/app/about-us/about-us.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LXVzL2Fib3V0LXVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/about-us/about-us.component.html":
/*!**************************************************!*\
  !*** ./src/app/about-us/about-us.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  about-us works!\n</p>\n"

/***/ }),

/***/ "./src/app/about-us/about-us.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-us/about-us.component.ts ***!
  \************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.css */ "./src/app/about-us/about-us.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post/post.component */ "./src/app/post/post.component.ts");
/* harmony import */ var _singlepost_singlepost_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./singlepost/singlepost.component */ "./src/app/singlepost/singlepost.component.ts");







var routes = [{ path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }, { path: 'about', component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_4__["AboutUsComponent"] }, { path: 'post', component: _post_post_component__WEBPACK_IMPORTED_MODULE_5__["PostComponent"] }, { path: 'post/:id', component: _singlepost_singlepost_component__WEBPACK_IMPORTED_MODULE_6__["SinglepostComponent"] }];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".myclass\r\n{\r\n    color:white;\r\n    background-color: black;\r\n}\r\n.myclass2{\r\n    font-size: 30px;\r\n}\r\n.myclass3{\r\n    padding: 20px;\r\n    border: 4px solid rgb(252, 3, 3);\r\n}\r\n.table\r\n{\r\n    border: 3px solid black;\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksWUFBWTtJQUNaLHdCQUF3QjtDQUMzQjtBQUNEO0lBQ0ksZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxjQUFjO0lBQ2QsaUNBQWlDO0NBQ3BDO0FBQ0Q7O0lBRUksd0JBQXdCO0lBQ3hCLG1CQUFtQjtDQUN0QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15Y2xhc3Ncclxue1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG4ubXljbGFzczJ7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuLm15Y2xhc3Mze1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHJnYigyNTIsIDMsIDMpO1xyXG59XHJcbi50YWJsZVxyXG57XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n{{myname}}\n<!-- {{myfunc()}} -->\n<button (click)=\"myfunc()\">Click</button>\n\n\n{{a<b ? 'a is small' : ' b is small' }}\n<input type=\"text\" value=\"{{x}}\"/><br>\n<input type=\"text\" [value]=\"x\"/><br>\n<p>Disable walla</p>\n<input type=\"text\" disabled=\"{{isdisable}}\"/><br>\n<input type=\"text\" [disabled]=\"isdisable\"/><br><br>\n<input #frame type=\"text\"/><br>\n<button (click)=\"getval(frame.value)\">Click</button><br>\n<p>{{mynames}}</p><br>\n\n<input #num1 type=\"number\"/>\n<input #num2 type=\"number\"/>\n<button (click)=\"getval2(num1.value,num2.value)\">Add</button>\n<p>Addition={{adds}}</p>\n<!-- <p>{{adds}}</p> -->\n \n<!-- <input #num3 type=\"number\"/>\n<input #num4 type=\"number\"/> -->\n<button (click)=\"getval3(num1.value,num2.value)\">Sub</button>\n<p>Substraction={{sub}}</p>\n\n<button (click)=\"getval4(num1.value,num2.value)\">Mul</button>\n<p>Multiplication={{mul}}</p>\n<br><br><br>\n<button class=\"btn btn-primary  \" [class.myclass]=\"isactive\">Submit data</button>\n<br><br>\n<p [style.color]=\"mycolor ? 'green' : 'red'\">This is para</p>\n\n<p [ngClass] =\"  multiclass  \"> This is another para with multi class</p>\n\n<input type=\"text\" [(ngModel)]=\"firstname\" />\n<p>{{firstname}}</p>\n<div *ngIf=\"showdiv\">\nthis division inside if\n</div>\n<div *ngIf=\"y<z;  else elsepart\">\n  Y is small\n</div>\n<ng-template #elsepart> z is small</ng-template>\n\n<div *ngIf=\"y>z; then ifpart1 else elsepart1\"></div>\n<ng-template #ifpart1> y is grt</ng-template>\n<ng-template #elsepart1> z is grt</ng-template>\n<br><br>\n\n<div *ngIf=\"x1>y; then ifpart2 else elsepart2\"></div>\n\n<ng-template #ifpart2> \n  <ng-container *ngIf=\"x1>z;then ifpart3 else elsepart3 \">\n      \n  </ng-container> \n</ng-template>\n<ng-template #ifpart3> x1 is grt</ng-template>    \n<ng-template #elsepart3>z is grt</ng-template>   \n<ng-template #elsepart2>\n  <ng-container *ngIf=\"y>z;then ifpart4 else elsepart4\">\n      \n  </ng-container>\n</ng-template>\n<ng-template #ifpart4> y is grt</ng-template>\n<ng-template #elsepart4> z is grt</ng-template>\n<br><br><br>\n<ul *ngFor=\"let x2 of myarr\">\n  <li>{{x2}}</li>\n</ul>\n<br><br>\n<p>{{myobj.lname}} {{myobj.age}}</p>\n<br><br>\n<ul *ngFor=\"let x3 of myobj1\">\n  <li>{{x3.fname1}}</li>\n</ul>\n<br><br>\n<div>\n<table class=\"table\">\n  <tr>\n    <td>First Name</td>\n    <td>Last name</td>\n    <td>Age</td>\n    <td>City</td>\n  </tr>\n  <tr *ngFor=\"let x4 of myobj1\">\n    <td>{{x4.fname1}}</td>\n    <td>{{x4.lname}}</td>\n    <td>{{x4.age}}</td>\n    <td>{{x4.city}}</td>\n  </tr>\n</table>\n</div>\n<br><br>\n<div [ngSwitch]=\"w\">\n  <div *ngSwitchCase=\"1\">One</div>\n  <div *ngSwitchCase=\"2\">Two</div>\n  <div *ngSwitchCase=\"3\">Three</div>\n  <div *ngSwitchDefault>Default</div>\n</div>\n<br><br>\n<input type=\"number\" #day/>\n<br>\n<button class=\"btn btn-primary\" (click)=\"getvalue(day.value)\" >Show</button>\n<div [ngSwitch]=\"day1\">\n  <div *ngSwitchCase=\"0\"> </div>\n  <div *ngSwitchCase=\"1\">Monday</div>\n  <div *ngSwitchCase=\"2\">Tuesday</div>\n  <div *ngSwitchCase=\"3\">Wednesday</div>\n  <div *ngSwitchCase=\"4\">Thursday</div>\n  <div *ngSwitchCase=\"5\">Friday</div>\n  <div *ngSwitchCase=\"6\">Saturday</div>\n  <div *ngSwitchCase=\"7\">Sunday</div>\n  <div *ngSwitchDefault>Wrong Choice</div>\n</div>\n<ul>\n<a routerLink=\"home\" target=\"_blank\">Home</a><br>\n<a routerLink=\"about\" target=\"_blank\">About</a><br>\n<a routerLink=\"post\" target=\"_self\">Post</a>\n</ul>\n<br>\n<p>\n  {{\"This is string\"|uppercase}}\n  <br>\n  {{\"THIS IS STRING\"|lowercase}}\n</p>\n<p>\n  Birthday:{{birthday|date:\"dd/MM/yyyy\"}}\n</p>\n<br>\n<p>The hero's birthday is {{ birthday | date:format }}</p>\n<button (click)=\"toggleFormat()\">Toggle Format</button>\n<br>\n<div>\n  <code>promise|async</code>: \n  <button (click)=\"clicked()\">{{ arrived ? 'Reset' : 'Resolve' }}</button>\n  <span>Wait for it... {{ greeting | async }}</span>\n</div>\n<br>\n<div>\n  <!--output '$0.26'-->\n  <p>A: {{a | currency}}</p>\n\n  <!--output 'CA$0.26'-->\n  <p>A: {{a | currency:'CAD'}}</p>\n\n  <!--output 'CAD0.26'-->\n  <p>A: {{a | currency:'CAD':'code'}}</p>\n\n  <!--output 'CA$0,001.35'-->\n  <p>B: {{b | currency:'CAD':'symbol':'4.2-2'}}</p>\n\n  <!--output '$0,001.35'-->\n  <p>B: {{b | currency:'CAD':'symbol-narrow':'4.2-2'}}</p>\n\n  <!--output '0 001,35 CA$'-->\n  <p>B: {{b | currency:'CAD':'symbol':'4.2-2':'fr'}}</p>\n\n  <!--output 'CLP1' because CLP has no cents-->\n  <p>B: {{b | currency:'CLP'}}</p>\n</div>\n<br>\n<!-- <div>\n  <h3>{{\"This is string \"|mycustom}}</h3>\n</div> -->\n<br>\n<div>\n  {{fruits|mycustom}}\n</div>\n\n{{sliceexmp | splicestr }}\n<br>\n<!-- <div>\n  <app-register [pardata]=\"mydata\" [xvar]=\"mydata1\"></app-register>\n</div> -->\n<div>\n  <app-register (datasend)=\"parfun($event)\"></app-register>\n  {{chdata}}\n</div>\n<br>\n<div>\n  <app-register1><h1>Hello</h1>\n  \n  </app-register1>\n</div>\n<app-register2>\n  <ng-container class=\"headingpart\">\n    This is heading part\n  </ng-container>\n  <ng-container class=\"bodypart\">\n    This is body part\n  </ng-container>\n</app-register2>\n<router-outlet></router-outlet>\n                   "

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.birthday = new Date(1997, 1, 27);
        this.toggle = true;
        this.sliceexmp = "Hello this is slice example";
        this.a = 10;
        this.b = 12;
        this.x = "hello";
        this.isdisable = false;
        this.title = 'thirdapp';
        this.myname = "Hello World";
        this.mynames = " ";
        this.isactive = true;
        this.adds = 0;
        this.sub = 0;
        this.mul = 1;
        this.mycolor = true;
        this.multiclass = {
            myclass: true, myclass2: true, myclass3: false
        };
        this.firstname = "";
        this.fontsize = "15px";
        this.showdiv = true;
        this.y = 35;
        this.z = 90;
        this.x1 = 12;
        this.myarr = [1, 2, 3, 4, 5];
        this.myobj = { fname1: "Abc", lname: "Xyz", age: 20, city: "Ngp" };
        this.myobj1 = [{ fname1: "Abc", lname: "Xyz", age: 20, city: "Ngp" }, { fname1: "Def", lname: "Uvw", age: 20, city: "Bom" }, { fname1: "Lmn", lname: "Pqr", age: 20, city: "Ngp" }];
        this.w = 3;
        this.day1 = 0;
        this.greeting = null;
        this.arrived = false;
        this.resolve = null;
        this.a1 = 0.259;
        this.b1 = 1.3495;
        this.fruits = ["Banana", "Orange", "Apple", "Mango"];
        this.mydata = "Hello,this data is sent from parent to child";
        this.mydata1 = "Hello World !";
        this.chdata = " ";
        this.reset();
    }
    Object.defineProperty(AppComponent.prototype, "format", {
        get: function () {
            return this.toggle ? 'shortDate' : 'fullDate';
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.toggleFormat = function () {
        this.toggle = !this.toggle;
    };
    AppComponent.prototype.myfunc = function () {
        alert("Hello Typescript");
    };
    AppComponent.prototype.getval = function (str) {
        this.mynames = str;
    };
    AppComponent.prototype.getval2 = function (s, t) {
        this.adds = parseInt(s) + parseInt(t);
    };
    AppComponent.prototype.getval3 = function (x, y) {
        this.sub = parseInt(x) - parseInt(y);
    };
    AppComponent.prototype.getval4 = function (x, y) {
        this.mul = parseInt(x) * parseInt(y);
    };
    AppComponent.prototype.getvalue = function (num) {
        this.day1 = num;
    };
    AppComponent.prototype.reset = function () {
        var _this = this;
        this.arrived = false;
        this.greeting = new Promise(function (resolve, reject) { _this.resolve = resolve; });
    };
    AppComponent.prototype.clicked = function () {
        if (this.arrived) {
            this.reset();
        }
        else {
            this.resolve('hi there!');
            this.arrived = true;
        }
    };
    AppComponent.prototype.parfun = function ($event) {
        this.chdata = $event;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./post/post.component */ "./src/app/post/post.component.ts");
/* harmony import */ var _singlepost_singlepost_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./singlepost/singlepost.component */ "./src/app/singlepost/singlepost.component.ts");
/* harmony import */ var _mycustom_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mycustom.pipe */ "./src/app/mycustom.pipe.ts");
/* harmony import */ var _splicestr_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./splicestr.pipe */ "./src/app/splicestr.pipe.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _register1_register1_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./register1/register1.component */ "./src/app/register1/register1.component.ts");
/* harmony import */ var _register2_register2_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./register2/register2.component */ "./src/app/register2/register2.component.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_7__["AboutUsComponent"],
                _post_post_component__WEBPACK_IMPORTED_MODULE_8__["PostComponent"],
                _singlepost_singlepost_component__WEBPACK_IMPORTED_MODULE_9__["SinglepostComponent"],
                _mycustom_pipe__WEBPACK_IMPORTED_MODULE_10__["MycustomPipe"],
                _splicestr_pipe__WEBPACK_IMPORTED_MODULE_11__["SplicestrPipe"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
                _register1_register1_component__WEBPACK_IMPORTED_MODULE_13__["Register1Component"],
                _register2_register2_component__WEBPACK_IMPORTED_MODULE_14__["Register2Component"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/mycustom.pipe.ts":
/*!**********************************!*\
  !*** ./src/app/mycustom.pipe.ts ***!
  \**********************************/
/*! exports provided: MycustomPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MycustomPipe", function() { return MycustomPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MycustomPipe = /** @class */ (function () {
    function MycustomPipe() {
        this.text1 = "";
        this.i = 0;
    }
    MycustomPipe.prototype.transform = function (value, args) {
        // return value+" "+Date();
        for (this.i = 0; this.i < value.length; this.i++) {
            this.text1 += value[this.i] + " ";
            // console.log(value[0]);
        }
        return this.text1;
    };
    MycustomPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'mycustom'
        })
    ], MycustomPipe);
    return MycustomPipe;
}());



/***/ }),

/***/ "./src/app/post/post.component.css":
/*!*****************************************!*\
  !*** ./src/app/post/post.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table\r\n{\r\n    background-color: rgb(223, 219, 215);\r\n    border: 3px solid black;\r\n    width: 600px;\r\n    margin-left: 400px;\r\n    \r\n}\r\ntr,td\r\n{\r\n    border-right: 2px solid black;\r\n    border-bottom: 3px solid black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC9wb3N0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUkscUNBQXFDO0lBQ3JDLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsbUJBQW1COztDQUV0QjtBQUNEOztJQUVJLDhCQUE4QjtJQUM5QiwrQkFBK0I7Q0FDbEMiLCJmaWxlIjoic3JjL2FwcC9wb3N0L3Bvc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZVxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIzLCAyMTksIDIxNSk7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcclxuICAgIHdpZHRoOiA2MDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MDBweDtcclxuICAgIFxyXG59XHJcbnRyLHRkXHJcbntcclxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJsYWNrO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/post/post.component.html":
/*!******************************************!*\
  !*** ./src/app/post/post.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<table class=\"table\">\n  <tr>\n    <td style=\"text-align:center;\"><b>Id</b></td>\n    <td style=\"text-align:center;\"><b>Title</b></td>\n  </tr>\n  <tr *ngFor=\"let y of myarr\">\n    <td><a routerLink=\"{{y.id}}\">{{y.id}}</a></td>\n    <td>{{y.title}}</td>\n  </tr>\n</table>\n\n<!-- <div *ngFor=\"let x of myarr\"> -->\n  <!-- <h4>{{x.userId}}</h4> -->\n<!-- </div> -->\n"

/***/ }),

/***/ "./src/app/post/post.component.ts":
/*!****************************************!*\
  !*** ./src/app/post/post.component.ts ***!
  \****************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PostComponent = /** @class */ (function () {
    function PostComponent() {
        this.myarr = [];
    }
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) { return response.json(); })
            .then(function (json) { return _this.myarr = json; })
            .catch(function (err) { return console.error("Error" + err); });
    };
    PostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.component.html */ "./src/app/post/post.component.html"),
            styles: [__webpack_require__(/*! ./post.component.css */ "./src/app/post/post.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  register works!\n</p> -->\n\n{{pardata}}\n<br>\n{{xvar}}"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
        this.datasend = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.datasend.emit("Data from child to parent");
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RegisterComponent.prototype, "pardata", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RegisterComponent.prototype, "xvar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RegisterComponent.prototype, "datasend", void 0);
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/register1/register1.component.css":
/*!***************************************************!*\
  !*** ./src/app/register1/register1.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyMS9yZWdpc3RlcjEuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/register1/register1.component.html":
/*!****************************************************!*\
  !*** ./src/app/register1/register1.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  register1 works!\n</p>\n<ng-content></ng-content>\n"

/***/ }),

/***/ "./src/app/register1/register1.component.ts":
/*!**************************************************!*\
  !*** ./src/app/register1/register1.component.ts ***!
  \**************************************************/
/*! exports provided: Register1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Register1Component", function() { return Register1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Register1Component = /** @class */ (function () {
    function Register1Component() {
    }
    Register1Component.prototype.ngOnInit = function () {
    };
    Register1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register1',
            template: __webpack_require__(/*! ./register1.component.html */ "./src/app/register1/register1.component.html"),
            styles: [__webpack_require__(/*! ./register1.component.css */ "./src/app/register1/register1.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Register1Component);
    return Register1Component;
}());



/***/ }),

/***/ "./src/app/register2/register2.component.css":
/*!***************************************************!*\
  !*** ./src/app/register2/register2.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyMi9yZWdpc3RlcjIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/register2/register2.component.html":
/*!****************************************************!*\
  !*** ./src/app/register2/register2.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  register2 works!\n</p> -->\n<div class=\"card\">\n  <div class=\"card-header\">\n    <ng-content select=\".headingpart\"></ng-content>\n  </div>\n  <div class=\"card-body\">\n    <ng-content select=\".bodypart\"></ng-content>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/register2/register2.component.ts":
/*!**************************************************!*\
  !*** ./src/app/register2/register2.component.ts ***!
  \**************************************************/
/*! exports provided: Register2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Register2Component", function() { return Register2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Register2Component = /** @class */ (function () {
    function Register2Component() {
    }
    Register2Component.prototype.ngOnInit = function () {
    };
    Register2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register2',
            template: __webpack_require__(/*! ./register2.component.html */ "./src/app/register2/register2.component.html"),
            styles: [__webpack_require__(/*! ./register2.component.css */ "./src/app/register2/register2.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Register2Component);
    return Register2Component;
}());



/***/ }),

/***/ "./src/app/singlepost/singlepost.component.css":
/*!*****************************************************!*\
  !*** ./src/app/singlepost/singlepost.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpbmdsZXBvc3Qvc2luZ2xlcG9zdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/singlepost/singlepost.component.html":
/*!******************************************************!*\
  !*** ./src/app/singlepost/singlepost.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  singlepost works!\n</p> -->\n<h2>{{mypost.title}}</h2>\n"

/***/ }),

/***/ "./src/app/singlepost/singlepost.component.ts":
/*!****************************************************!*\
  !*** ./src/app/singlepost/singlepost.component.ts ***!
  \****************************************************/
/*! exports provided: SinglepostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinglepostComponent", function() { return SinglepostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var SinglepostComponent = /** @class */ (function () {
    function SinglepostComponent(aroute) {
        this.aroute = aroute;
        this.mypost = [];
    }
    // myarr1=[];
    SinglepostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.aroute.params.subscribe(function (res) { return _this.id = res.id; });
        fetch('https://jsonplaceholder.typicode.com/posts/' + this.id)
            .then(function (response) { return response.json(); })
            .then(function (json) { return _this.mypost = json; });
    };
    SinglepostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-singlepost',
            template: __webpack_require__(/*! ./singlepost.component.html */ "./src/app/singlepost/singlepost.component.html"),
            styles: [__webpack_require__(/*! ./singlepost.component.css */ "./src/app/singlepost/singlepost.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SinglepostComponent);
    return SinglepostComponent;
}());



/***/ }),

/***/ "./src/app/splicestr.pipe.ts":
/*!***********************************!*\
  !*** ./src/app/splicestr.pipe.ts ***!
  \***********************************/
/*! exports provided: SplicestrPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplicestrPipe", function() { return SplicestrPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SplicestrPipe = /** @class */ (function () {
    function SplicestrPipe() {
    }
    SplicestrPipe.prototype.transform = function (value, args) {
        return value.slice(0, 12);
    };
    SplicestrPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'splicestr'
        })
    ], SplicestrPipe);
    return SplicestrPipe;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Angular\thirdapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map