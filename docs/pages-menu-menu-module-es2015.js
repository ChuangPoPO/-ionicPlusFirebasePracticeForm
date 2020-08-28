(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-menu-menu-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/menu.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/menu.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\r\n  <ion-menu contentId=\"main-content\" side=\"start\">\r\n    <ion-header>\r\n      <ion-toolbar>\r\n        <ion-title>功能選單</ion-title>\r\n\r\n        <ion-buttons slot=\"start\">\r\n          <ion-menu-button autoHide=\"false\"></ion-menu-button>\r\n        </ion-buttons>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n\r\n    <ion-content>\r\n      <ion-list>\r\n        <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let page of pages\">\r\n          <ion-item [routerLink]=\"page.path\" routerDirection=\"root\" [class.active-menu]=\"activePath === page.path\">\r\n            {{page.name}}\r\n          </ion-item>\r\n        </ion-menu-toggle>\r\n      </ion-list>\r\n    </ion-content>\r\n  </ion-menu>\r\n\r\n  <ion-router-outlet id=\"main-content\" main></ion-router-outlet>\r\n\r\n</ion-app>");

/***/ }),

/***/ "./src/app/pages/menu/menu.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/menu/menu.module.ts ***!
  \*******************************************/
/*! exports provided: MenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu.page */ "./src/app/pages/menu/menu.page.ts");







const routes = [
    {
        path: 'menu',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"],
        children: [
            {
                path: 'home',
                loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ../home/home.module */ "./src/app/pages/home/home.module.ts")).then(m => m.HomePageModule)
            },
            {
                path: 'login',
                loadChildren: () => __webpack_require__.e(/*! import() | login-login-module */ "login-login-module").then(__webpack_require__.bind(null, /*! ../login/login.module */ "./src/app/pages/login/login.module.ts")).then(m => m.LoginPageModule)
            },
            {
                path: 'registration',
                loadChildren: () => __webpack_require__.e(/*! import() | registration-registration-module */ "registration-registration-module").then(__webpack_require__.bind(null, /*! ../registration/registration.module */ "./src/app/pages/registration/registration.module.ts")).then(m => m.RegistrationPageModule)
            },
            {
                path: 'forgot-phrase',
                loadChildren: () => __webpack_require__.e(/*! import() | forgot-phrase-forgot-phrase-module */ "forgot-phrase-forgot-phrase-module").then(__webpack_require__.bind(null, /*! ../forgot-phrase/forgot-phrase.module */ "./src/app/pages/forgot-phrase/forgot-phrase.module.ts")).then(m => m.ForgotPhrasePageModule)
            },
            {
                path: 'task-details',
                loadChildren: () => Promise.all(/*! import() | task-details-task-details-module */[__webpack_require__.e("common"), __webpack_require__.e("task-details-task-details-module")]).then(__webpack_require__.bind(null, /*! ../task-details/task-details.module */ "./src/app/pages/task-details/task-details.module.ts")).then(m => m.TaskDetailsPageModule)
            },
            {
                path: 'task-details/:id',
                loadChildren: () => Promise.all(/*! import() | task-details-task-details-module */[__webpack_require__.e("common"), __webpack_require__.e("task-details-task-details-module")]).then(__webpack_require__.bind(null, /*! ../task-details/task-details.module */ "./src/app/pages/task-details/task-details.module.ts")).then(m => m.TaskDetailsPageModule)
            },
            {
                path: 'task-list',
                loadChildren: () => Promise.all(/*! import() | task-list-task-list-module */[__webpack_require__.e("common"), __webpack_require__.e("task-list-task-list-module")]).then(__webpack_require__.bind(null, /*! ../task-list/task-list.module */ "./src/app/pages/task-list/task-list.module.ts")).then(m => m.TaskListPageModule)
            },
        ]
    },
    {
        path: '',
        redirectTo: '/menu/home',
    }
];
let MenuPageModule = class MenuPageModule {
};
MenuPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
        ],
        declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"]]
    })
], MenuPageModule);



/***/ }),

/***/ "./src/app/pages/menu/menu.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/menu/menu.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lbnUvbWVudS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/menu/menu.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/menu/menu.page.ts ***!
  \*****************************************/
/*! exports provided: MenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPage", function() { return MenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let MenuPage = class MenuPage {
    constructor(router) {
        this.router = router;
        this.activePath = '';
        this.pages = [
            {
                name: '首頁',
                path: '/menu/home',
            },
            {
                name: '任務清單',
                path: '/menu/task-list',
            },
            {
                name: '新增任務',
                path: '/menu/task-details',
            },
            {
                name: '登入',
                path: '/menu/login',
            },
            {
                name: '註冊新會員',
                path: '/menu/registration',
            },
        ];
        this.router.events.subscribe((event) => {
            this.activePath = event.url;
        });
    }
    ngOnInit() {
    }
};
MenuPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
MenuPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./menu.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/menu.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./menu.page.scss */ "./src/app/pages/menu/menu.page.scss")).default]
    })
], MenuPage);



/***/ })

}]);
//# sourceMappingURL=pages-menu-menu-module-es2015.js.map