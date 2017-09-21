webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navBar {\n  background-color: white;\n  height: 50px;\n}\n\n.navBarBtn {\n  font-size: 20px;\n  font-family: \"Lato\", \"Arial\";\n  color: black;\n  margin-top: 5px;\n  margin-left: 30px;\n}\n\n@media only screen and (max-width: 600px) {\n  .navBarBtn{\n    font-size: 15px;\n    margin-left: 10px;\n  }\n\n@media only screen and (max-width: 420px) {\n  .navBarBtn{\n    margin-top: 50px;\n    font-size: 12px;\n    margin: auto;\n  }\n  .navBar{\n    margin-top: 20px;\n  }\n}\n\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"navBar\">\n  <button class=\"navBarBtn\" md-button routerLink=\"/\" routerLinkActive=\"active\">\n    About Me\n  </button>\n  <button class=\"navBarBtn\" md-button routerLink=\"/projects\" routerLinkActive=\"active\">\n    Projects\n  </button>\n  <button class=\"navBarBtn\" md-button routerLink=\"/resume\" routerLinkActive=\"active\">\n    Resume\n  </button>\n  <button class=\"navBarBtn\" md-button routerLink=\"/contact\" routerLinkActive=\"active\">\n    Contact\n  </button>\n</div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__projects_projects_component__ = __webpack_require__("../../../../../src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__resume_resume_component__ = __webpack_require__("../../../../../src/app/resume/resume.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_5__contact_contact_component__["a" /* ContactComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_6__about_about_component__["a" /* AboutComponent */] },
    { path: 'projects', component: __WEBPACK_IMPORTED_MODULE_7__projects_projects_component__["a" /* ProjectsComponent */] },
    { path: 'resume', component: __WEBPACK_IMPORTED_MODULE_8__resume_resume_component__["a" /* ResumeComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_5__contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_6__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_7__projects_projects_component__["a" /* ProjectsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__resume_resume_component__["a" /* ResumeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { enableTracing: false }),
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["a" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["b" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["c" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["d" /* MdTabsModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["e" /* MdDialogModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["f" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap__["a" /* CarouselModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <md-form-field>\n    <input mdInput placeholder=\"Name\">\n  </md-form-field>\n  <md-form-field>\n    <input mdInput placeholder=\"LastName\">\n  </md-form-field>\n  <br>\n  <md-form-field>\n    <input mdInput placeholder=\"Email\">\n  </md-form-field>\n</div>"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-contact',
        template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact/contact.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ContactComponent);

//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".about_me {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: auto;\n}\n\n.about_me_picture{\n  height: 200px; \n  border-radius: 100%; \n  margin-top: 20px; \n  margin-left: 40px;\n  margin-bottom: 40px;\n  margin-right: 40px;\n}\n\n.button {\n  color: black;\n}\n\n.table {\n  border-left: 1px solid white;\n  border-right: 1px solid white;\n  min-width: 600px;\n  max-width: 900px;\n  margin: auto;\n}\n\n.papers {\n  position: absolute;\n  /* border: 1px solid black; */\n  margin:auto;\n  margin-left: 20px;\n  margin-top: 180px;\n  height: 230px;\n  width: 200px;\n  cursor: pointer;\n}\n\n.projects {\n  position: absolute;\n  /* border: 1px solid black; */\n  height: 210px;\n  width: 290px;\n  margin: auto;\n  margin-left: 390px;\n  margin-top: 120px;\n  -webkit-transform: rotate(22deg);\n  transform: rotate(22deg);\n  cursor: pointer;\n}\n\n.header_name {\n  /* border-left: 1px solid black;  */\n  font-size: 40px; \n  margin-left: 20px;\n  margin-top: 50px;\n}\n\n.secondary_headers {\n  font-size: 20px; \n  margin-top: 10px\n}\n\n.about_me_buttons {\n  font-size: 15px;\n}\n\n.closing {\n  margin-top: -10px;\n  margin-left: 10px;\n}\n\n.animation_text{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; \n  background-color: white;\n}\n\n.animation_text_2{\n  font-size: 20px; \n  font-family: Lato;\n}\n\n.interactive_animation {\n  font-size: 40px; \n  font-family: Lato; \n  border-bottom: 5px solid black\n}\n\n@media only screen and (max-width: 1000px) {\n  .papers {\n    height: 130px;\n    width: 110px;\n    margin-top: 180px;\n    margin-left: 20px;\n  }\n\n  .projects{\n    height: 180px;\n    width: 250px;\n    margin-left: 350px;\n    margin-top: 70px;\n  }\n}\n\n.interactive_animation {\n  font-size: 40px; \n  font-family: Lato; \n  border-bottom: 5px solid black\n}\n\n@media only screen and (max-width: 420px) {\n  .table{\n    height: 35vh;\n    width: 100%;\n    min-width: 0;\n  }\n\n  .header_name {\n    margin-top: 20px;\n    font-size: 25px;\n  }\n\n  .secondary_headers {\n    font-size: 15px;\n  }\n\n  .about_me_picture{\n    height: 100px; \n    border-radius: 100%; \n    margin-top: 20px;\n    margin-bottom: 0px;\n    margin-left: 10px;\n    margin-right: 10px;\n  }\n\n  .papers {\n    height: 85px;\n    width: 75px;\n    margin-top: 115px;\n    margin-left: 10px;\n  }\n\n\n  .projects{\n    height: 85px;\n    width: 115px;\n    margin-left: 205px;\n    margin-top: 70px;\n  }\n\n  .animation_text{\n    margin-top: -30px;\n    display: block;\n  }\n\n  .animation_text_2{\n    margin-top: -10px;\n    font-size: 18px;\n  }\n\n  .interactive_animation {\n    margin-top: 65px;\n    font-size: 30px; \n    font-family: Lato; \n    border-bottom: 5px solid black\n  }\n\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"about_me\" style=\"font-family: Lato\">\n  <img class=\"about_me_picture\" src=\"assets/images/my_face.png\" />\n  <h1 class=\"header_name\">Jay Hongvarivatana\n    <div class=\"secondary_headers\" style=\"border-left: 1px solid black\">\n      <p style=\"margin-left: 10px\">Full-Stack Developer</p>\n      <p style=\"margin-top: -5px; margin-left: 10px\">Animator</p>\n    </div>\n    <p class=\"about_me_buttons\">\n      <a class=\"button\" href=\"https://www.linkedin.com/in/jayyhong/\" target=\"_blank\"><button md-button>Linked In</button></a>\n      <a class=\"button\" href=\"https://github.com/jayyhong\" target=\"_blank\"><button md-button>Github</button></a>\n      <a class=\"button\" href=\"https://www.facebook.com/jay.hongvarivatana\" target=\"_blank\"><button md-button>Facebook</button></a>\n      <a class=\"button\" href=\"https://angel.co/jay-hongvarivatana?al_content=view+your+profile&al_source=transaction_feed%2Fnetwork_sidebar\"\n        target=\"_blank\"><button md-button>Angel List</button></a>\n    </p>\n  </h1>\n</div>\n\n<!-- <div style=\"display: flex; background-color:#DBCC97\"> -->\n<div class=\"animation_text\">\n  <div style=\"display: flex; margin: auto; flex-direction: column\">\n    <p class=\"interactive_animation\">Interactive Animation</p>\n    <p class=\"animation_text_2\">Tablet - My Projects</p>\n    <p class=\"animation_text_2\">Phone - Contact Me</p>\n    <p class=\"animation_text_2\">Folder - Code Repository</p>\n  </div>\n  <div style=\"margin: auto\">\n    <!-- papers -->\n    <div class=\"papers\" onClick=\"window.open('https://github.com/jayyhong/portfoliolio', '_blank')\">\n    </div>\n    <!-- ipad -->\n    <div class=\"projects\" (click)=\"renderProjects()\" routerLink=\"/projects\" routerLinkActive=\"active\">\n    </div>\n    <!-- coffee -->\n    <div class=\"coffee\" (click)=\"renderAboutMe()\" routerLink=\"/\" routerLinkActive=\"active\">\n    </div>\n    <img class=\"table\" src=\"../../assets/images/test/table_test-{{frames}}.png\" />\n    <!-- <div class=\"about\" routerLink=\"about\" routerLinkActive=\"active\">  -->\n  </div>\n</div>\n<div class=\"closing\">\n  <!-- <p style=\"font-family: Lato; font-weight: bold; font-size: 30px; border-left: 3px solid black\">Interactive Animation</p>\n  <p style=\"font-family: Lato; font-size: 20px; margin-top: -15px;\">Click on an item above to redirect to another page.</p> -->\n</div>\n<!--table color code: #DBCC97 -->"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.frames = 1;
        this.progressBar = true;
        // this.background = this.sanitizer.bypassSecurityTrustStyle(`url('../../assets/images/test/table_test-`+this.frames+`.png')`)
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        //setInterval will start the animation
        setInterval(function () {
            if (_this.frames === 80) {
                _this.progressBar = false;
                _this.frames = 1;
            }
            else {
                _this.frames++;
            }
        }, 40);
    };
    HomeComponent.prototype.renderCode = function () {
        console.log('render code popup');
    };
    HomeComponent.prototype.renderProjects = function () {
        console.log('render projects popup');
    };
    HomeComponent.prototype.renderAboutMe = function () {
        console.log('About me render');
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["g" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["g" /* DomSanitizer */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".paragraph {\n  padding: 10px;\n  width: 500px;\n}\n.image_ar{\n  width: 100%;\n  max-width: 900px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: auto;\n  margin-top: 30px;\n}\n.triplit_header_img {\n  width: 100%;\n  max-width: 950px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: auto;\n  margin-top: 30px;\n}\n\n.gw_desktop_paragraph{\ndisplay: -webkit-box;\ndisplay: -ms-flexbox;\ndisplay: flex;\nmargin: auto;\nwidth: 100%;\nmax-width: 900px;\n}\n\n.gw_desktop_paragraph_1 {\n  border-right: 1px solid black;\n  color: black;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n.gw_desktop_paragraph_2 {\n  margin: auto;\n  margin-left: 10px;\n  font-size: 20px;\n}\n\n.login_img {\n  height: 500px;\n  opacity: 0.7;\n  margin-right: 25px;\n}\n\n.login_img:hover{\n  opacity: 1;\n}\n\n.images {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: auto;\n  width: 100%;\n  max-width: 900px;\n}\n.triplit_img{\n  width: 100%;\n  margin-top: 100px;\n}\n.triplit_images{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin: auto;\n  max-width: 900px;\n  opacity: 0.7;\n}\n.triplit_images:hover{\n  opacity: 1;\n}\n.coffee_img{\n   display: -webkit-box;\n   display: -ms-flexbox;\n   display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin: auto;\n  max-width: 400px;\n}\n\n.ar_image_2 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: auto;\n  width: 100%;\n  margin-top: 30px;\n  max-width: 900px;\n  opacity: 0.7;\n}\n\n.ar_image_2:hover {\n  opacity: 1;\n}\n\n@media only screen and (max-width: 800px) {\n  .login_img {\n    height: 400px;\n    opacity: 0.7;\n    margin-right: 10px;\n  }\n}\n\n@media only screen and (max-width: 420px) {\n  .gw_desktop_paragraph{\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin: auto;\n    margin-top: 0px;\n  }\n  .image_ar{\n    height: 200px; \n    padding: 5px;\n    border-radius: 8px;\n    margin-top: 30px;\n  }\n  .thesis {\n    width: 350px;\n  }\n  .gw_desktop_paragraph_1{\n    margin-left: 10px;\n    width: 120px;\n    font-size: 25px;\n  }\n  .gw_desktop_paragraph_2{\n    font-size: 18px;\n  }\n  .images {\n    width: 100%;\n    margin-left: 20px;\n    margin-top: 20px;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n  }\n  .login_img{\n    height: 600px;\n    opacity: 1;\n    margin-top: 20px;\n    margin-right: 5px;\n  }\n  .triplit_images{\n    opacity: 1;\n  }\n\n  .ar_image_2 {\n  width: 100%;\n  margin-top: 30px;\n  margin-left: 15px;\n  opacity: 1;\n}\n\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"font-family: Lato\">\n\n  <md-tab-group>\n\n    <!-- ghost-writers -->\n    <md-tab label=\"Ghost Writers\">\n      <div class=\"thesis\">\n        <img class=\"image_ar\" src=\"assets/project_screenshots/ghost_writers_ar.png\" />\n        <div class=\"gw_desktop_paragraph\">\n          <p class=\"gw_desktop_paragraph_1\" style=\"width: 450px\">\n            Ghost Writers\n            <br>\n            <a href=\"https://www.youtube.com/watch?v=X-kw4UlwKjE\" target=\"_blank\"><button md-button style=\"background-color: #7da6e8; color: white; width: 100px\">Video Demo</button></a>\n            <br>\n            <a href=\"https://github.com/Ghost-Writers/Ghost-Writers-Web-v2\" target=\"_blank\"><button md-button style=\"background-color: #5e8edb; color: white; width: 100px\">GitHub</button></a>\n          </p>\n\n          <!-- <p style=\"margin-top: 30px; border-right: 2px solid black; color: grey; margin-right: 10px\">Ghost Writers</p> -->\n          <p class=\"gw_desktop_paragraph_2\">\n            Ghost Writers uses Wikitude's image recognition software to create a mobile augmented reality graffiti application that allows\n            users to post and create their own virtual art, anywhere in the world. TechStack: Angular 2, Ionic 2, Wikitude,\n            bCrypt, AWS, MongoDB, Node, Express, Google Maps API, FileStack.\n          </p>\n        </div>\n        <div class=\"images\" style=\"margin-top: 50px\">\n          <img class=\"login_img\" src=\"assets/project_screenshots/ghost_writers_login.png\" />\n          <img class=\"login_img\" src=\"assets/project_screenshots/ghost_writers_create.png\" />\n          <img class=\"login_img\" src=\"assets/project_screenshots/ghost_writers_map.png\" />\n        </div>\n          <img class=\"ar_image_2\" src=\"assets/project_screenshots/ghost_writers_1.png\" />\n      </div>\n    </md-tab>\n\n    <!-- triplit -->\n    <md-tab label=\"Triplit\">\n      <div class=\"triplit\">\n        <img class=\"triplit_header_img\" src=\"assets/project_screenshots/triplit_3.png\" />\n        <div style= \"margin-top: 20px;\" class=\"gw_desktop_paragraph\">\n          <p class=\"gw_desktop_paragraph_1\">\n            Triplit\n            <br>\n            <a href=\"https://github.com/Ghost-Writers/Ghost-Writers-Web-v2\" target=\"_blank\"><button md-button style=\"background-color: #5e8edb; color: white; width: 100px\">GitHub</button></a>\n          </p>\n\n          <!-- <p style=\"margin-top: 30px; border-right: 2px solid black; color: grey; margin-right: 10px\">Ghost Writers</p> -->\n          <p  class=\"gw_desktop_paragraph_2\">\n            Triplit is a web application that makes it easy for you and your friends to plan trips in as simple as three easy steps.\n            Create a trip, invite your friends, find a hotel, and depart on your adventure. TechStack: React, MySQL, Sequelize,\n            Node, Express, Auth0, GoogleMaps API.\n          </p>\n        </div>\n        <div class=\"triplit_images\">\n          <img class=\"triplit_img\" src=\"assets/project_screenshots/triplit_1.png\" />\n          <img class=\"triplit_img\" src=\"assets/project_screenshots/triplit_4.png\" />\n          <img class=\"triplit_img\" src=\"assets/project_screenshots/triplit_2.png\" />\n          <img class=\"triplit_img\" src=\"assets/project_screenshots/triplit_5.png\" />\n        </div>\n      </div>\n      <!-- <img style=\"height: 600px\" src=\"assets/project_screenshots/triplit_1.png\" />\n      <img style=\"height: 600px\" src=\"assets/project_screenshots/triplit_2.png\" /> -->\n    </md-tab>\n\n    <!-- slackoverflow -->\n    <md-tab label=\"Slack Overflow\">\n      <div class=\"triplit\">\n        <img class=\"triplit_header_img\" src=\"assets/project_screenshots/slackoverflow_1.png\" />\n        <div style= \"margin-top: 20px;\" class=\"gw_desktop_paragraph\">\n          <p class=\"gw_desktop_paragraph_1\">\n            Slack Overflow\n            <br>\n            <a href=\"https://github.com/jayyhong/slacker_overflow_2\" target=\"_blank\"><button md-button style=\"background-color: #5e8edb; color: white; width: 100px\">GitHub</button></a>\n          </p>\n\n          <!-- <p style=\"margin-top: 30px; border-right: 2px solid black; color: grey; margin-right: 10px\">Ghost Writers</p> -->\n          <p class=\"gw_desktop_paragraph_2\">\n            Slack Overflow is a web application where software engineers can go to post questions and discuss about topics based on programming,\n            coding, technologies, and software engineering. My team had to add features to their existing codebase. I created\n            a simple video-chatting system built on Web RTC, HTML5 and Socket.io. TechStack: React, WebRTC, Socket.io, Heroku.\n\n          </p>\n        </div>\n        <div class=\"triplit_images\">\n          <img class=\"triplit_img\" src=\"assets/project_screenshots/slackoverflow_2.png\" />\n        </div>\n      </div>\n    </md-tab>\n\n    <!-- spacedbar -->\n    <md-tab label=\"Spaced Bar\">\n      <div class=\"triplit\">\n        <img class=\"triplit_header_img\" src=\"assets/project_screenshots/spaced_bar_1.png\" />\n        <div style= \"margin-top: 20px;\" class=\"gw_desktop_paragraph\">\n          <p class=\"gw_desktop_paragraph_1\">\n            Spaced Bar\n            <br>\n            <a href=\"https://github.com/jayyhong/mvp\" target=\"_blank\"><button md-button style=\"background-color: #5e8edb; color: white; width: 100px\">GitHub</button></a>\n          </p>\n\n          <!-- <p style=\"margin-top: 30px; border-right: 2px solid black; color: grey; margin-right: 10px\">Ghost Writers</p> -->\n          <p class=\"gw_desktop_paragraph_2\">\n            A simple game. How fast can you press the space bar before the timer runs out? Created on Angular.JS, Persisted Highscore\n            with MySQL. TechStack: Angular 1.6, MySql, Sequelize, Node, Express.\n          </p>\n        </div>\n        <div class=\"triplit_images\">\n        </div>\n      </div>\n    </md-tab>\n\n    <md-tab label=\"Coffee-Coffee\">\n      <div class=\"triplit\">\n        <img style=\"display: flex; margin: auto; height: 600px\" src=\"assets/project_screenshots/coffee_1.png\" />\n        <div class=\"gw_desktop_paragraph\" style=\"margin-top: 40px\">\n          <p class=\"gw_desktop_paragraph_1\">\n            Coffee-Coffee\n            <br>\n            <a href=\"https://github.com/jayyhong/Coffee_Coffee\" target=\"_blank\"><button md-button style=\"background-color: #5e8edb; color: white; width: 100px\">GitHub</button></a>\n          </p>\n\n          <!-- <p style=\"margin-top: 30px; border-right: 2px solid black; color: grey; margin-right: 10px\">Ghost Writers</p> -->\n          <p class=\"gw_desktop_paragraph_2\">\n            A simple mobile coffee app made on Ionic 2. Choose the amount of coffee with the slider. Choose the amount of milk to add\n            on top, but add too much milk and the cup will overflow. Created all the artwork and animations myself. Animations\n            created on Harmony Toon Boom.\n          </p>\n        </div>\n        <div>\n          <img class=\"coffee_img\" src=\"assets/project_screenshots/coffee_2.png\" />\n          <img class=\"coffee_img\" src=\"assets/project_screenshots/coffee_3.png\" />\n          <img class=\"coffee_img\" src=\"assets/project_screenshots/coffee_4.png\" />\n        </div>\n      </div>\n    </md-tab>\n\n  </md-tab-group>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsComponent = (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    return ProjectsComponent;
}());
ProjectsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-projects',
        template: __webpack_require__("../../../../../src/app/projects/projects.component.html"),
        styles: [__webpack_require__("../../../../../src/app/projects/projects.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProjectsComponent);

//# sourceMappingURL=projects.component.js.map

/***/ }),

/***/ "../../../../../src/app/resume/resume.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/resume/resume.component.html":
/***/ (function(module, exports) {

module.exports = "<button md-button class=\"navBarBtn\">Download</button>\n"

/***/ }),

/***/ "../../../../../src/app/resume/resume.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResumeComponent = (function () {
    function ResumeComponent() {
    }
    ResumeComponent.prototype.ngOnInit = function () {
    };
    return ResumeComponent;
}());
ResumeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-resume',
        template: __webpack_require__("../../../../../src/app/resume/resume.component.html"),
        styles: [__webpack_require__("../../../../../src/app/resume/resume.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ResumeComponent);

//# sourceMappingURL=resume.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map