(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-idea-details-idea-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/idea-details/idea-details.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/idea-details/idea-details.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons solt=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Idea Details</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <ion-item>\r\n    <ion-label position=\"stacked\">Name</ion-label>\r\n    <ion-input [(ngModel)]=\"idea.name\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label position=\"stacked\">Notes</ion-label>\r\n    <ion-textarea [(ngModel)]=\"idea.notes\" rows=\"8\"></ion-textarea>\r\n  </ion-item>\r\n</ion-content>\r\n\r\n<ion-footer *ngIf=\"!idea.id\">\r\n  <ion-toolbar color=\"success\">\r\n    <ion-button expand=\"full\" fill=\"clear\" color=\"light\" (click)=\"addIdea()\">\r\n      <ion-icon name=\"checkmark\" slot=\"start\"></ion-icon>\r\n      Add Idea\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n\r\n<ion-footer *ngIf=\"idea.id\">\r\n  <ion-row no-padding text-center>\r\n    <ion-col size=\"6\">\r\n      <ion-button expand=\"block\" fill=\"outline\" color=\"danger\" (click)=\"deleteIdea()\">\r\n        <ion-icon name=\"trash\" slot=\"start\"></ion-icon>\r\n        Delete\r\n      </ion-button>\r\n    </ion-col>\r\n\r\n    <ion-col size=\"6\">\r\n      <ion-button expand=\"block\" fill=\"solid\" color=\"success\" (click)=\"updateIdea()\">\r\n        <ion-icon name=\"save\" slot=\"start\"></ion-icon>\r\n        Update\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-toolbar color=\"success\">\r\n    <ion-button expand=\"full\" fill=\"clear\" color=\"light\" (click)=\"addIdea()\">\r\n      <ion-icon name=\"checkmark\" slot=\"start\"></ion-icon>\r\n      Add Idea\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "./src/app/pages/idea-details/idea-details-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/idea-details/idea-details-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: IdeaDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdeaDetailsPageRoutingModule", function() { return IdeaDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _idea_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./idea-details.page */ "./src/app/pages/idea-details/idea-details.page.ts");




const routes = [
    {
        path: '',
        component: _idea_details_page__WEBPACK_IMPORTED_MODULE_3__["IdeaDetailsPage"]
    }
];
let IdeaDetailsPageRoutingModule = class IdeaDetailsPageRoutingModule {
};
IdeaDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IdeaDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/idea-details/idea-details.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/idea-details/idea-details.module.ts ***!
  \***********************************************************/
/*! exports provided: IdeaDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdeaDetailsPageModule", function() { return IdeaDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _idea_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./idea-details-routing.module */ "./src/app/pages/idea-details/idea-details-routing.module.ts");
/* harmony import */ var _idea_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./idea-details.page */ "./src/app/pages/idea-details/idea-details.page.ts");







let IdeaDetailsPageModule = class IdeaDetailsPageModule {
};
IdeaDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _idea_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["IdeaDetailsPageRoutingModule"]
        ],
        declarations: [_idea_details_page__WEBPACK_IMPORTED_MODULE_6__["IdeaDetailsPage"]]
    })
], IdeaDetailsPageModule);



/***/ }),

/***/ "./src/app/pages/idea-details/idea-details.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/idea-details/idea-details.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2lkZWEtZGV0YWlscy9pZGVhLWRldGFpbHMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/idea-details/idea-details.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/idea-details/idea-details.page.ts ***!
  \*********************************************************/
/*! exports provided: IdeaDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdeaDetailsPage", function() { return IdeaDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_idea_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/idea.service */ "./src/app/services/idea.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_core_data_domain_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/@core/data/domain/model */ "./src/app/@core/data/domain/model.ts");






let IdeaDetailsPage = class IdeaDetailsPage {
    constructor(activateRoute, ideaService, toastCtrl, router) {
        this.activateRoute = activateRoute;
        this.ideaService = ideaService;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.idea = new src_app_core_data_domain_model__WEBPACK_IMPORTED_MODULE_5__["Idea"]();
        this.id = null;
    }
    ngOnInit() {
        this.id = this.activateRoute.snapshot.paramMap.get('id');
    }
    ionViewWillEnter() {
        if (this.id) {
            this.ideaService.getIdea(this.id).subscribe(idea => {
                this.idea = idea;
            });
        }
    }
    showToast(msg) {
        this.toastCtrl.create({
            message: msg,
            duration: 2000
        }).then(toast => toast.present());
    }
    addIdea() {
        this.ideaService.addIdea(this.idea).then(() => {
            this.router.navigateByUrl('/');
            this.showToast('Idea added');
        }, err => {
            this.showToast('There was a problem adding your idea :(');
        });
    }
    updateIdea() {
        this.ideaService.updateIdea(this.idea).then(() => {
            this.showToast('Idea updated');
        }, err => {
            this.showToast('There was a problem updating your idea :(');
        });
    }
    deleteIdea() {
        this.ideaService.deleteIdea(this.idea.id).then(() => {
            this.router.navigateByUrl('/');
            this.showToast('Idea deleted');
        }, err => {
            this.showToast('There was a problem deleting your idea :(');
        });
    }
};
IdeaDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_idea_service__WEBPACK_IMPORTED_MODULE_3__["IdeaService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
IdeaDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-idea-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./idea-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/idea-details/idea-details.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./idea-details.page.scss */ "./src/app/pages/idea-details/idea-details.page.scss")).default]
    })
], IdeaDetailsPage);



/***/ }),

/***/ "./src/app/services/idea.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/idea.service.ts ***!
  \******************************************/
/*! exports provided: IdeaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdeaService", function() { return IdeaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let IdeaService = class IdeaService {
    constructor(afs) {
        this.afs = afs;
        this.ideaCollection = this.afs.collection('ideas');
        this.ideas = this.ideaCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
    }
    getIdeas() {
        return this.ideas;
    }
    getIdea(id) {
        return this.ideaCollection.doc(id).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(idea => {
            idea.id = id;
            return idea;
        }));
    }
    addIdea(idea) {
        return this.ideaCollection.add(idea);
    }
    updateIdea(idea) {
        return this.ideaCollection.doc(idea.id).update({
            name: idea.name,
            notes: idea.notes
        });
    }
    deleteIdea(id) {
        return this.ideaCollection.doc(id).delete();
    }
};
IdeaService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
IdeaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], IdeaService);



/***/ })

}]);
//# sourceMappingURL=pages-idea-details-idea-details-module-es2015.js.map