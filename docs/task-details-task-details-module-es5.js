function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["task-details-task-details-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/task-share/task-form/task-form.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/task-share/task-form/task-form.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTaskShareTaskFormTaskFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"taskForm\">\n  <!-- TODO: angular Material DatePicker -->\n  <ion-item lines=\"full\">\n    <ion-label position=\"floating\">國曆</ion-label>\n    <ion-datetime formControlName=\"solarCalendar\"></ion-datetime>\n  </ion-item>\n\n  <!-- TODO: angular Material DatePicker -->\n  <ion-item lines=\"full\">\n    <ion-label position=\"floating\">農曆</ion-label>\n    <ion-datetime formControlName=\"lunarCalendar\"></ion-datetime>\n  </ion-item>\n\n  <ion-item lines=\"full\">\n    <ion-label position=\"floating\">案名</ion-label>\n    <ion-input formControlName=\"caseName\" type=\"text\"></ion-input>\n  </ion-item>\n\n  <ion-item lines=\"full\">\n    <ion-label position=\"floating\">廳堂</ion-label>\n    <ion-input formControlName=\"hall\" type=\"text\"></ion-input>\n  </ion-item>\n\n  <ion-item lines=\"full\">\n    <ion-label position=\"floating\">到廳堂時間</ion-label>\n    <ion-datetime formControlName=\"arriveHallTime\" displayFormat=\"h:mm a\"></ion-datetime>\n  </ion-item>\n\n  <ion-item lines=\"full\">\n    <ion-label position=\"floating\">領屍時間</ion-label>\n    <ion-datetime formControlName=\"receiveBodyTime\" displayFormat=\"h:mm a\"></ion-datetime>\n  </ion-item>\n\n  <ion-item lines=\"full\">\n    <ion-label position=\"floating\">入殮時間</ion-label>\n    <ion-datetime formControlName=\"casketingTime\" displayFormat=\"h:mm a\"></ion-datetime>\n  </ion-item>\n\n  <ion-item lines=\"full\">\n    <ion-label position=\"floating\">動遷棺時間</ion-label>\n    <ion-datetime formControlName=\"moveCoffinTime\" displayFormat=\"h:mm a\"></ion-datetime>\n  </ion-item>\n\n  <ion-item lines=\"full\">\n    <ion-label position=\"floating\">家祭時間</ion-label>\n    <ion-datetime formControlName=\"worshipTime\" displayFormat=\"h:mm a\"></ion-datetime>\n  </ion-item>\n\n  <ion-list lines=\"full\" formGroupName=\"jobContent\">\n    <ion-list-header>\n      <ion-label>工作內容</ion-label>\n    </ion-list-header>\n    <ion-item>\n      <ion-label>出殯</ion-label>\n      <ion-checkbox formControlName=\"funeral\" slot=\"start\"></ion-checkbox>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">人數</ion-label>\n      <ion-input formControlName=\"funeralWorkerCount\" type=\"number\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>出入現</ion-label>\n      <ion-checkbox formControlName=\"inOut\" slot=\"start\"></ion-checkbox>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">人數</ion-label>\n      <ion-input formControlName=\"inOutWorkerCount\" type=\"number\"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-list lines=\"full\">\n    <ion-list-header>\n      <ion-label>工作人員</ion-label>\n    </ion-list-header>\n    <ion-item lines=\"full\" formArrayName=\"staffs\">\n      <div *ngFor=\"let staff of staffs.controls; let index=index\">\n        <ion-item>\n          <ion-label position=\"floating\">人員 {{ index + 1 }}</ion-label>\n          <ion-input [formControlName]=\"index\" type=\"text\"></ion-input>\n          <ion-button slot=\"end\" size=\"small\" color=\"danger\" (click)=\"removeStaff(index)\">\n            <ion-icon name=\"trash-outline\"></ion-icon>\n          </ion-button>\n        </ion-item>\n      </div>\n    </ion-item>\n    <ion-button size=\"small\" color=\"primary\" (click)=\"addStaff()\">\n      <ion-icon name=\"add-outline\"></ion-icon>新增人員\n    </ion-button>\n  </ion-list>\n\n\n  <ion-item lines=\"full\">\n    <ion-label position=\"floating\">地點</ion-label>\n    <ion-input formControlName=\"location\" type=\"text\"></ion-input>\n  </ion-item>\n\n  <ion-item lines=\"full\">\n    <ion-label position=\"floating\">事件</ion-label>\n    <ion-input formControlName=\"event\" type=\"text\"></ion-input>\n  </ion-item>\n\n  <ion-item lines=\"full\">\n    <ion-label position=\"floating\">備註</ion-label>\n    <ion-input formControlName=\"remarks\" type=\"text\"></ion-input>\n  </ion-item>\n\n  <ion-item lines=\"full\">\n    <ion-label position=\"floating\">執案人</ion-label>\n    <ion-input formControlName=\"leader\" type=\"text\"></ion-input>\n  </ion-item>\n\n  <!-- TODO: add material slide toggle (metrial): 進行中/結案 -->\n  <ion-radio-group lines=\"full\" formControlName=\"isCaseClosed\">\n    <ion-list-header>\n      <ion-label>狀態</ion-label>\n    </ion-list-header>\n    <ion-item>\n      <ion-label>進行中</ion-label>\n      <ion-radio slot=\"start\" value=\"onTheWay\"></ion-radio>\n    </ion-item>\n    <ion-item>\n      <ion-label>已結案</ion-label>\n      <ion-radio slot=\"start\" value=\"theEnd\"></ion-radio>\n    </ion-item>\n  </ion-radio-group>\n\n  <ion-footer *ngIf=\"!taskControls.id.value\">\n    <ion-toolbar color=\"success\">\n      <ion-button expand=\"full\" fill=\"clear\" color=\"light\" (click)=\"onAddTask(taskForm)\">\n        <ion-icon name=\"checkmark\" slot=\"start\"></ion-icon>\n        新增任務\n      </ion-button>\n    </ion-toolbar>\n  </ion-footer>\n\n  <ion-footer *ngIf=\"taskControls.id.value\">\n    <ion-row no-padding text-center>\n      <ion-col size=\"6\">\n        <ion-button expand=\"block\" fill=\"outline\" color=\"danger\" (click)=\"onDeleteTask(taskForm.value)\">\n          <ion-icon name=\"trash\" slot=\"start\"></ion-icon>\n          刪除\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-button expand=\"block\" fill=\"solid\" color=\"success\" (click)=\"onUpdateTask(taskForm.value)\">\n          <ion-icon name=\"save\" slot=\"start\"></ion-icon>\n          存檔\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-footer>\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/task-details/task-details.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/task-details/task-details.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTaskDetailsTaskDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>任務資料</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <app-task-form (createTask)=\"onAddTask($event)\" [selectedTask]=\"task\" (updateTask)=\"onUpdateTask($event)\"\r\n    (deleteTask)=\"onDeleteTask($event)\"></app-task-form>\r\n\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/components/task-share/task-form/task-form.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/components/task-share/task-form/task-form.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsTaskShareTaskFormTaskFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFzay1zaGFyZS90YXNrLWZvcm0vdGFzay1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/task-share/task-form/task-form.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/components/task-share/task-form/task-form.component.ts ***!
    \************************************************************************/

  /*! exports provided: TaskFormComponent */

  /***/
  function srcAppComponentsTaskShareTaskFormTaskFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskFormComponent", function () {
      return TaskFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var TaskFormComponent = /*#__PURE__*/function () {
      function TaskFormComponent(formBuilder) {
        _classCallCheck(this, TaskFormComponent);

        this.formBuilder = formBuilder;
        this.createTask = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.updateTask = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.deleteTask = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.initialForm();
      }

      _createClass(TaskFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.selectedTask.currentValue === null || changes.selectedTask.currentValue === undefined) {
            this.initialForm();
          }

          if (changes.selectedTask.currentValue !== null && changes.selectedTask.currentValue !== undefined) {
            this.updateForm(changes.selectedTask.currentValue);
          }
        }
      }, {
        key: "addStaff",
        value: function addStaff() {
          var staff = this.formBuilder.control('');
          this.staffs.push(staff);
        }
      }, {
        key: "removeStaff",
        value: function removeStaff(index) {
          this.staffs.removeAt(index);
        }
      }, {
        key: "onAddTask",
        value: function onAddTask(newTask) {
          this.createTask.emit(newTask.value);
        }
      }, {
        key: "onUpdateTask",
        value: function onUpdateTask(task) {
          this.updateTask.emit(task);
        }
      }, {
        key: "onDeleteTask",
        value: function onDeleteTask(task) {
          this.deleteTask.emit(task);
        }
      }, {
        key: "initialForm",
        value: function initialForm() {
          this.taskForm = this.formBuilder.group({
            id: [null],
            solarCalendar: [null],
            lunarCalendar: [null],
            caseName: [''],
            location: [''],
            hall: [''],
            event: [''],
            jobContent: this.formBuilder.group({
              funeral: [null],
              funeralWorkerCount: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)]],
              inOut: [null],
              inOutWorkerCount: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)]]
            }),
            arriveHallTime: [null],
            receiveBodyTime: [null],
            casketingTime: [null],
            moveCoffinTime: [null],
            worshipTime: [null],
            staffs: this.formBuilder.array([this.initSatffs()]),
            remarks: [''],
            leader: [''],
            isCaseClosed: [null]
          });
        }
      }, {
        key: "initSatffs",
        value: function initSatffs() {
          return this.formBuilder.control('');
        }
      }, {
        key: "updateForm",
        value: function updateForm(changes) {
          var _this = this;

          if (changes === undefined || changes === null) {
            return;
          }

          while (this.staffs.length !== 0) {
            this.staffs.removeAt(0);
          }

          if (changes.staffs !== null && changes.staffs !== undefined) {
            changes.staffs.forEach(function (staff) {
              return _this.staffs.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](staff));
            });
          }

          this.taskForm.patchValue({
            id: changes.id !== undefined ? changes.id : null,
            solarCalendar: changes.solarCalendar !== undefined ? changes.solarCalendar : this.taskControls.solarCalendar.value,
            lunarCalendar: changes.lunarCalendar !== undefined ? changes.lunarCalendar : this.taskControls.lunarCalendar,
            caseName: changes.caseName !== undefined ? changes.caseName : this.taskControls.caseName.value,
            location: changes.location !== undefined ? changes.location : this.taskControls.location.value,
            hall: changes.hall !== undefined ? changes.hall : this.taskControls.hall.value,
            event: changes.event !== undefined ? changes.event : this.taskControls.event.value,
            jobContent: changes.jobContent !== undefined ? changes.jobContent : this.taskControls.jobContent.value,
            arriveHallTime: changes.arriveHallTime !== undefined ? changes.arriveHallTime : this.taskControls.arriveHallTime.value,
            receiveBodyTime: changes.receiveBodyTime !== undefined ? changes.receiveBodyTime : this.taskControls.receiveBodyTime.value,
            casketingTime: changes.casketingTime !== undefined ? changes.casketingTime : this.taskControls.casketingTime.value,
            moveCoffinTime: changes.moveCoffinTime !== undefined ? changes.moveCoffinTime : this.taskControls.moveCoffinTime.value,
            worshipTime: changes.worshipTime !== undefined ? changes.worshipTime : this.taskControls.worshipTime.value,
            remarks: changes.remarks !== undefined ? changes.remarks : this.taskControls.remarks.value,
            leader: changes.leader !== undefined ? changes.leader : this.taskControls.leader.value,
            isCaseClosed: changes.isCaseClosed !== undefined ? changes.isCaseClosed : this.taskControls.isCaseClosed.value
          });
          this.taskForm.markAsPristine();
        }
      }, {
        key: "taskControls",
        get: function get() {
          return this.taskForm.controls;
        }
      }, {
        key: "staffs",
        get: function get() {
          return this.taskForm.get('staffs');
        }
      }]);

      return TaskFormComponent;
    }();

    TaskFormComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TaskFormComponent.prototype, "selectedTask", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], TaskFormComponent.prototype, "createTask", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], TaskFormComponent.prototype, "updateTask", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], TaskFormComponent.prototype, "deleteTask", void 0);
    TaskFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-task-form',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./task-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/task-share/task-form/task-form.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./task-form.component.scss */
      "./src/app/components/task-share/task-form/task-form.component.scss"))["default"]]
    })], TaskFormComponent);
    /***/
  },

  /***/
  "./src/app/components/task-share/task-share.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/components/task-share/task-share.module.ts ***!
    \************************************************************/

  /*! exports provided: TaskShareModule */

  /***/
  function srcAppComponentsTaskShareTaskShareModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskShareModule", function () {
      return TaskShareModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_task_share_task_form_task_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../components/task-share/task-form/task-form.component */
    "./src/app/components/task-share/task-form/task-form.component.ts");

    var components = [_components_task_share_task_form_task_form_component__WEBPACK_IMPORTED_MODULE_5__["TaskFormComponent"]];

    var TaskShareModule = function TaskShareModule() {
      _classCallCheck(this, TaskShareModule);
    };

    TaskShareModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]],
      declarations: [].concat(components),
      exports: [].concat(components)
    })], TaskShareModule);
    /***/
  },

  /***/
  "./src/app/pages/task-details/task-details-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/task-details/task-details-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: TaskDetailsPageRoutingModule */

  /***/
  function srcAppPagesTaskDetailsTaskDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskDetailsPageRoutingModule", function () {
      return TaskDetailsPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _task_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./task-details.page */
    "./src/app/pages/task-details/task-details.page.ts");

    var routes = [{
      path: '',
      component: _task_details_page__WEBPACK_IMPORTED_MODULE_3__["TaskDetailsPage"]
    }];

    var TaskDetailsPageRoutingModule = function TaskDetailsPageRoutingModule() {
      _classCallCheck(this, TaskDetailsPageRoutingModule);
    };

    TaskDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TaskDetailsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/task-details/task-details.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/task-details/task-details.module.ts ***!
    \***********************************************************/

  /*! exports provided: TaskDetailsPageModule */

  /***/
  function srcAppPagesTaskDetailsTaskDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskDetailsPageModule", function () {
      return TaskDetailsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _task_details_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./task-details-routing.module */
    "./src/app/pages/task-details/task-details-routing.module.ts");
    /* harmony import */


    var _task_details_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./task-details.page */
    "./src/app/pages/task-details/task-details.page.ts");
    /* harmony import */


    var _components_task_share_task_share_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../components/task-share/task-share.module */
    "./src/app/components/task-share/task-share.module.ts");

    var TaskDetailsPageModule = function TaskDetailsPageModule() {
      _classCallCheck(this, TaskDetailsPageModule);
    };

    TaskDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _task_details_routing_module__WEBPACK_IMPORTED_MODULE_4__["TaskDetailsPageRoutingModule"], _components_task_share_task_share_module__WEBPACK_IMPORTED_MODULE_6__["TaskShareModule"]],
      declarations: [_task_details_page__WEBPACK_IMPORTED_MODULE_5__["TaskDetailsPage"]]
    })], TaskDetailsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/task-details/task-details.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/task-details/task-details.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTaskDetailsTaskDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rhc2stZGV0YWlscy90YXNrLWRldGFpbHMucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/task-details/task-details.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/task-details/task-details.page.ts ***!
    \*********************************************************/

  /*! exports provided: TaskDetailsPage */

  /***/
  function srcAppPagesTaskDetailsTaskDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskDetailsPage", function () {
      return TaskDetailsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/task.service */
    "./src/app/services/task.service.ts");
    /* harmony import */


    var src_app_core_data_domain_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/@core/data/domain/model */
    "./src/app/@core/data/domain/model.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var TaskDetailsPage = /*#__PURE__*/function () {
      function TaskDetailsPage(taskService, activateRoute, router, toastCtrl) {
        _classCallCheck(this, TaskDetailsPage);

        this.taskService = taskService;
        this.activateRoute = activateRoute;
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.task = new src_app_core_data_domain_model__WEBPACK_IMPORTED_MODULE_3__["Task"]();
        this.id = null;
      }

      _createClass(TaskDetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.id = this.activateRoute.snapshot.paramMap.get('id');

          if (this.id) {
            this.taskService.getTask(this.id).subscribe(function (task) {
              _this2.task = task;
              console.log('this.task:', _this2.task);
            });
          } else {
            this.task = null;
          }
        }
      }, {
        key: "showToast",
        value: function showToast(msg) {
          this.toastCtrl.create({
            message: msg,
            duration: 3000
          }).then(function (toast) {
            return toast.present();
          });
        }
      }, {
        key: "onAddTask",
        value: function onAddTask(newTask) {
          var _this3 = this;

          this.taskService.addTask(newTask).then(function () {
            _this3.showToast('新增成功 : D');

            _this3.router.navigateByUrl('/menu/task-list');
          }, function (err) {
            _this3.showToast('新增失敗 :(');
          });
        }
      }, {
        key: "onUpdateTask",
        value: function onUpdateTask(task) {
          var _this4 = this;

          this.taskService.updateTask(task).then(function () {
            _this4.showToast('儲存成功 : D');
          }, function (err) {
            _this4.showToast('儲存失敗 :(');
          });
        }
      }, {
        key: "onDeleteTask",
        value: function onDeleteTask(task) {
          var _this5 = this;

          this.taskService.deleteTask(task.id).then(function () {
            _this5.showToast('刪除成功 : D');

            _this5.router.navigateByUrl('/menu/task-list');
          }, function (err) {
            _this5.showToast('刪除失敗 :(');
          });
        }
      }]);

      return TaskDetailsPage;
    }();

    TaskDetailsPage.ctorParameters = function () {
      return [{
        type: src_app_services_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
      }];
    };

    TaskDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-task-details',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./task-details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/task-details/task-details.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./task-details.page.scss */
      "./src/app/pages/task-details/task-details.page.scss"))["default"]]
    })], TaskDetailsPage);
    /***/
  }
}]);
//# sourceMappingURL=task-details-task-details-module-es5.js.map