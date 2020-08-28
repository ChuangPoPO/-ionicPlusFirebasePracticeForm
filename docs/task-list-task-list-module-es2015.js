(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["task-list-task-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/task-list/task-list.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/task-list/task-list.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>任務清單</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-item button *ngFor=\"let task of (tasks | async)\" [routerLink]=\"['/menu/task-details', task.id]\">\r\n      {{ task.id }} - {{ task.caseName }}\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/task-list/task-list-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/task-list/task-list-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: TaskListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskListPageRoutingModule", function() { return TaskListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _task_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task-list.page */ "./src/app/pages/task-list/task-list.page.ts");




const routes = [
    {
        path: '',
        component: _task_list_page__WEBPACK_IMPORTED_MODULE_3__["TaskListPage"]
    }
];
let TaskListPageRoutingModule = class TaskListPageRoutingModule {
};
TaskListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TaskListPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/task-list/task-list.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/task-list/task-list.module.ts ***!
  \*****************************************************/
/*! exports provided: TaskListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskListPageModule", function() { return TaskListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _task_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task-list-routing.module */ "./src/app/pages/task-list/task-list-routing.module.ts");
/* harmony import */ var _task_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./task-list.page */ "./src/app/pages/task-list/task-list.page.ts");







let TaskListPageModule = class TaskListPageModule {
};
TaskListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _task_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["TaskListPageRoutingModule"]
        ],
        declarations: [_task_list_page__WEBPACK_IMPORTED_MODULE_6__["TaskListPage"]]
    })
], TaskListPageModule);



/***/ }),

/***/ "./src/app/pages/task-list/task-list.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/task-list/task-list.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rhc2stbGlzdC90YXNrLWxpc3QucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/task-list/task-list.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/task-list/task-list.page.ts ***!
  \***************************************************/
/*! exports provided: TaskListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskListPage", function() { return TaskListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/task.service */ "./src/app/services/task.service.ts");



let TaskListPage = class TaskListPage {
    constructor(taskService) {
        this.taskService = taskService;
    }
    ngOnInit() {
        this.tasks = this.taskService.getTasks();
    }
};
TaskListPage.ctorParameters = () => [
    { type: src_app_services_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"] }
];
TaskListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-task-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./task-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/task-list/task-list.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./task-list.page.scss */ "./src/app/pages/task-list/task-list.page.scss")).default]
    })
], TaskListPage);



/***/ })

}]);
//# sourceMappingURL=task-list-task-list-module-es2015.js.map