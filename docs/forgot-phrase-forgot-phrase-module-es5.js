function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgot-phrase-forgot-phrase-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgot-phrase/forgot-phrase.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgot-phrase/forgot-phrase.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesForgotPhraseForgotPhrasePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>重設密碼</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form>\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\">Email</ion-label>\r\n      <ion-input type=\"email\" #email required></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button type=\"submit\" color=\"danger\" expand=\"block\" (click)=\"resetPhrase(email)\">送出</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <small>請提供您建立帳戶時使用的 Email</small>\r\n  </form>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/forgot-phrase/forgot-phrase-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/forgot-phrase/forgot-phrase-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: ForgotPhrasePageRoutingModule */

  /***/
  function srcAppPagesForgotPhraseForgotPhraseRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPhrasePageRoutingModule", function () {
      return ForgotPhrasePageRoutingModule;
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


    var _forgot_phrase_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./forgot-phrase.page */
    "./src/app/pages/forgot-phrase/forgot-phrase.page.ts");

    var routes = [{
      path: '',
      component: _forgot_phrase_page__WEBPACK_IMPORTED_MODULE_3__["ForgotPhrasePage"]
    }];

    var ForgotPhrasePageRoutingModule = function ForgotPhrasePageRoutingModule() {
      _classCallCheck(this, ForgotPhrasePageRoutingModule);
    };

    ForgotPhrasePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ForgotPhrasePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/forgot-phrase/forgot-phrase.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/forgot-phrase/forgot-phrase.module.ts ***!
    \*************************************************************/

  /*! exports provided: ForgotPhrasePageModule */

  /***/
  function srcAppPagesForgotPhraseForgotPhraseModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPhrasePageModule", function () {
      return ForgotPhrasePageModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _forgot_phrase_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./forgot-phrase-routing.module */
    "./src/app/pages/forgot-phrase/forgot-phrase-routing.module.ts");
    /* harmony import */


    var _forgot_phrase_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./forgot-phrase.page */
    "./src/app/pages/forgot-phrase/forgot-phrase.page.ts");

    var ForgotPhrasePageModule = function ForgotPhrasePageModule() {
      _classCallCheck(this, ForgotPhrasePageModule);
    };

    ForgotPhrasePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _forgot_phrase_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotPhrasePageRoutingModule"]],
      declarations: [_forgot_phrase_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPhrasePage"]]
    })], ForgotPhrasePageModule);
    /***/
  },

  /***/
  "./src/app/pages/forgot-phrase/forgot-phrase.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/pages/forgot-phrase/forgot-phrase.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesForgotPhraseForgotPhrasePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "small {\n  display: block;\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZm9yZ290LXBocmFzZS9GOlxccGxheUdyb3VuZFxcaW9uaWNQbHVzRmlyZWJhc2VQcmFjdGljZS9zcmNcXGFwcFxccGFnZXNcXGZvcmdvdC1waHJhc2VcXGZvcmdvdC1waHJhc2UucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9mb3Jnb3QtcGhyYXNlL2ZvcmdvdC1waHJhc2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZvcmdvdC1waHJhc2UvZm9yZ290LXBocmFzZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzbWFsbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbn0iLCJzbWFsbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxNXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/forgot-phrase/forgot-phrase.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/forgot-phrase/forgot-phrase.page.ts ***!
    \***********************************************************/

  /*! exports provided: ForgotPhrasePage */

  /***/
  function srcAppPagesForgotPhraseForgotPhrasePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPhrasePage", function () {
      return ForgotPhrasePage;
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


    var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/authentication.service */
    "./src/app/services/authentication.service.ts");

    var ForgotPhrasePage = /*#__PURE__*/function () {
      function ForgotPhrasePage(authService) {
        _classCallCheck(this, ForgotPhrasePage);

        this.authService = authService;
      }

      _createClass(ForgotPhrasePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "resetPhrase",
        value: function resetPhrase(email) {
          this.authService.forgotPhrase(email.value);
        }
      }]);

      return ForgotPhrasePage;
    }();

    ForgotPhrasePage.ctorParameters = function () {
      return [{
        type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }];
    };

    ForgotPhrasePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-forgot-phrase',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./forgot-phrase.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgot-phrase/forgot-phrase.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./forgot-phrase.page.scss */
      "./src/app/pages/forgot-phrase/forgot-phrase.page.scss"))["default"]]
    })], ForgotPhrasePage);
    /***/
  }
}]);
//# sourceMappingURL=forgot-phrase-forgot-phrase-module-es5.js.map