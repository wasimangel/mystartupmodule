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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".myclass{\n  background-image: url(\"/assets/images/splashbg.jpg\");\n  text-align: center;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"myclass\">\n  <mat-card-content>\n    <app-stepper></app-stepper>\n\n  </mat-card-content>\n</div>\n\n\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _register_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/stepper/stepper.component */ "./src/app/register/stepper/stepper.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _register_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_6__["StepperComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/register/stepper/stepper.component.css":
/*!********************************************************!*\
  !*** ./src/app/register/stepper/stepper.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-div{\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n}\n"

/***/ }),

/***/ "./src/app/register/stepper/stepper.component.html":
/*!*********************************************************!*\
  !*** ./src/app/register/stepper/stepper.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"main-div\">\n  <mat-card>\n    <form [formGroup]=\"formGroup\">\n      <mat-horizontal-stepper #linearHStepper=\"matHorizontalStepper\" formArrayName=\"formArray\" [linear]=\"false\">\n        <mat-step formGroupName=\"0\" [stepControl]=\"formArray?.get([0])\">\n          <ng-template matStepLabel>Organisation</ng-template>\n          <div>\n            <mat-form-field style=\"width: 100%;\">\n              <mat-label>Company Name </mat-label>\n              <input matInput formControlName=\"companyNameCtrl\" required>\n              <mat-error>This field is required</mat-error>\n            </mat-form-field>\n          </div>\n\n          <div>\n            <mat-form-field style=\"width: 100%;\">\n              <mat-label>Company Size </mat-label>\n              <input matInput formControlName=\"companySizeCtrl\" required>\n              <mat-error>This field is required</mat-error>\n            </mat-form-field>\n          </div>\n          <div>\n            <mat-form-field style=\"width: 100%;\">\n              <mat-label>Contact Person </mat-label>\n              <input matInput formControlName=\"companypersonCtrl\" required>\n              <mat-error>This field is required</mat-error>\n            </mat-form-field>\n          </div>\n          <div>\n            <mat-form-field style=\"width: 100%;\">\n              <mat-label>Phone Number </mat-label>\n              <input matInput formControlName=\"phomeNumberCtrl\" required>\n              <mat-error>This field is required</mat-error>\n            </mat-form-field>\n          </div>\n          <div>\n            <mat-form-field style=\"width: 100%;\">\n              <mat-label>LandLine Number </mat-label>\n              <input matInput formControlName=\"landLineCtrl\" required>\n              <mat-error>This field is required</mat-error>\n            </mat-form-field>\n          </div>\n          <div>\n            <mat-form-field style=\"width: 100%;\">\n              <mat-label> GST No </mat-label>\n              <input matInput formControlName=\"GstCtrl\" required>\n              <mat-error>This field is required</mat-error>\n            </mat-form-field>\n          </div>\n          <div>\n            <button mat-raised-button color=\"primary\" matStepperNext>Next</button>\n          </div>\n        </mat-step>\n        <mat-step formGroupName=\"1\" [stepControl]=\"formArray?.get([1])\">\n          <ng-template matStepLabel>\n            <div>Address</div>\n          </ng-template>\n          <div>\n          <mat-form-field style=\"width: 100%;\">\n            <mat-label>Office No </mat-label>\n            <input matInput formControlName=\"officeNOCtrl\" >\n            <mat-error>The input is invalid.</mat-error>\n          </mat-form-field>\n          </div>\n          <div>\n          <mat-form-field style=\"width: 100%;\">\n            <mat-label> Landmark </mat-label>\n            <input matInput formControlName=\"landmarkCtrl\" required>\n            <mat-error>The input is invalid.</mat-error>\n          </mat-form-field>\n          </div>\n          <div>\n          <mat-form-field style=\"width: 100%;\">\n            <mat-label> Country </mat-label>\n            <input matInput formControlName=\"countryCtrl\" required>\n            <mat-error>The input is invalid.</mat-error>\n          </mat-form-field>\n          </div>\n          <div>\n          <mat-form-field style=\"width: 100%;\">\n            <mat-label> State </mat-label>\n            <input matInput formControlName=\"stateCtrl\" required>\n            <mat-error>The input is invalid.</mat-error>\n          </mat-form-field>\n          </div>\n          <div>\n          <mat-form-field style=\"width: 100%;\">\n            <mat-label> City </mat-label>\n            <input matInput formControlName=\"cityCtrl\" required>\n            <mat-error>The input is invalid.</mat-error>\n          </mat-form-field>\n          </div>\n          <div>\n          <mat-form-field style=\"width: 100%;\">\n            <mat-label> Area Code </mat-label>\n            <input matInput formControlName=\"areaCodeCtrl\" required>\n            <mat-error>The input is invalid.</mat-error>\n          </mat-form-field>\n          </div>\n          <div>\n            <button mat-raised-button color=\"primary\" matStepperPrevious>Back</button>\n            <button mat-raised-button  color=\"primary\" matStepperNext>Next</button>\n          </div>\n        </mat-step>\n        <mat-step formGroupName=\"2\" [stepControl]=\"formArray?.get([2])\">\n          <ng-template matStepLabel>\n            <div>Product</div>\n          </ng-template>\n          <div>\n            <mat-form-field style=\"width: 100%\">\n              <mat-select placeholder=\"Select Product\" [formControl]=\"toppings\" multiple>\n                <mat-option *ngFor=\"let topping of toppingList\" [value]=\"topping\">{{topping}}</mat-option>\n              </mat-select>\n            </mat-form-field>\n\n          </div>\n          <div>\n            <mat-form-field style=\"width: 100%\">\n              <mat-select placeholder=\"Select Product Plan\" [formControl]=\"productPlanControl\" required>\n                <mat-option>--</mat-option>\n                <mat-option *ngFor=\"let plan of productPlan\" [value]=\"plan\">\n                  {{plan.name}}\n                </mat-option>\n              </mat-select>\n              <mat-error *ngIf=\"productPlanControl.hasError('required')\">Please choose a Plan</mat-error>\n\n            </mat-form-field>\n\n          </div>\n          <div>\n            <mat-form-field style=\"width: 100%\">\n              <mat-select placeholder=\"Select Industry\" [formControl]=\"industryControl\" required>\n                <mat-option>--</mat-option>\n                <mat-option *ngFor=\"let indus of industry\" [value]=\"indus\">\n                  {{indus.name}}\n                </mat-option>\n              </mat-select>\n              <mat-error *ngIf=\"industryControl.hasError('required')\">Please choose a Industry</mat-error>\n\n            </mat-form-field>\n          </div>\n          <div>\n            <mat-form-field style=\"width: 100%\">\n              <mat-select placeholder=\"Select Domain\" [formControl]=\"domainControl\" required>\n                <mat-option>--</mat-option>\n                <mat-option *ngFor=\"let dom of domain\" [value]=\"dom\">\n                  {{dom.name}}\n                </mat-option>\n              </mat-select>\n              <mat-error *ngIf=\"domainControl.hasError('required')\">Please choose a Industry</mat-error>\n\n            </mat-form-field>          </div>\n          <div>\n            <mat-form-field style=\"width: 100%\">\n              <mat-select placeholder=\"Select Product Type\" [formControl]=\"productControl\" required>\n                <mat-option>--</mat-option>\n                <mat-option *ngFor=\"let proType of productType\" [value]=\"proType\">\n                  {{proType.name}}\n                </mat-option>\n              </mat-select>\n              <mat-error *ngIf=\"productControl.hasError('required')\">Please choose Product Type</mat-error>\n\n            </mat-form-field>          </div>\n          <div>\n            <button style=\"margin-right: 20%\" mat-raised-button color=\"primary\" matStepperPrevious>Back</button>\n\n            <button style=\"margin-left: 20%\" mat-raised-button  color=\"primary\" matStepperNext>Next</button>\n          </div>\n        </mat-step>\n        <mat-step>\n          <ng-template matStepLabel>Payment</ng-template>\n          Everything seems correct.\n          <div>\n            <button mat-button>Done</button>\n            <button type=\"button\" mat-button (click)=\"linearHStepper.reset()\">Reset</button>\n          </div>\n        </mat-step>\n      </mat-horizontal-stepper>\n    </form>\n\n\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/register/stepper/stepper.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/register/stepper/stepper.component.ts ***!
  \*******************************************************/
/*! exports provided: StepperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepperComponent", function() { return StepperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StepperComponent = /** @class */ (function () {
    function StepperComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.productPlanControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.productPlan = [
            { name: 'Basic' },
            { name: 'Advanced' },
            { name: 'Enterprise' },
            { name: 'Custom' },
        ];
        this.industryControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.industry = [
            { name: 'IT' },
            { name: 'Retail' },
            { name: 'Mechnical' },
            { name: 'Other' }
        ];
        this.domainControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.domain = [
            { name: 'Software Development' },
            { name: 'Other' }
        ];
        this.productControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.productType = [
            { name: 'Trial' },
            { name: 'Premium (Paid)' }
        ];
        this.toppings = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.toppingList = ['HRM', 'CRM', 'ERP'];
    }
    Object.defineProperty(StepperComponent.prototype, "formArray", {
        /** Returns a FormArray with the name 'formArray'. */
        get: function () {
            return this.formGroup.get('formArray');
        },
        enumerable: true,
        configurable: true
    });
    StepperComponent.prototype.ngOnInit = function () {
        this.formGroup = this._formBuilder.group({
            formArray: this._formBuilder.array([
                this._formBuilder.group({
                    companyNameCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    companySizeCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    companypersonCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    phomeNumberCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    landLineCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    GstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
                }),
                this._formBuilder.group({
                    officeNOCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]],
                    landmarkCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]],
                    countryCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    stateCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    cityCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    areaCodeCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                }),
                this._formBuilder.group({
                    productformCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    productPlanformCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    industryformCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    domainformCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    typeformCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
                }),
            ])
        });
        this.organisationFormGroup = this._formBuilder.group({
            companyNameCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]],
            companySizeCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]],
            companypersonCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]],
            phomeNumberCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            landLineCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            GstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.addressFormGroup = this._formBuilder.group({
            officeNOCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]],
            landmarkCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]],
            countryCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            stateCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            cityCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            areaCodeCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.productFormGroup = this._formBuilder.group({
            productformCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            productPlanformCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            industryformCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            domainformCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            typeformCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.productFormGroup = this._formBuilder.group({
            newformCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    StepperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stepper',
            template: __webpack_require__(/*! ./stepper.component.html */ "./src/app/register/stepper/stepper.component.html"),
            styles: [__webpack_require__(/*! ./stepper.component.css */ "./src/app/register/stepper/stepper.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], StepperComponent);
    return StepperComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mac/WebstormProjects/startupmodule/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map