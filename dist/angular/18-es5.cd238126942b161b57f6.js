(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{ft4b:function(n,e,t){"use strict";t.d(e,"a",function(){return a});var o=t("CcnG"),r=t("ZYCi"),a=function(){function n(n){this.router=n}return n.prototype.canActivate=function(n,e){return"Admin"===localStorage.getItem("role")||(this.router.navigate(["/dashboard"]),!1)},n.ngInjectableDef=o["\u0275\u0275defineInjectable"]({factory:function(){return new n(o["\u0275\u0275inject"](r.k))},token:n,providedIn:"root"}),n}()},tePd:function(n,e,t){"use strict";t.r(e);var o=t("CcnG"),r=function(){return function(){}}(),a=t("pMnS"),i=t("Ip0R"),u=t("4GxJ"),l=t("ZYCi"),c=t("ft4b"),d=function(){return Promise.all([t.e(1),t.e(4),t.e(23)]).then(t.bind(null,"mhqm")).then(function(n){return n.DashboardModuleNgFactory})},h=function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(5),t.e(4),t.e(25)]).then(t.bind(null,"s9Fp")).then(function(n){return n.StaffModuleNgFactory})},f=function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(7),t.e(13)]).then(t.bind(null,"KMbw")).then(function(n){return n.CustomerModuleNgFactory})},p=function(){return Promise.all([t.e(0),t.e(3),t.e(5),t.e(8),t.e(20)]).then(t.bind(null,"Xvm/")).then(function(n){return n.MarketingModuleNgFactory})},m=function(){return Promise.all([t.e(1),t.e(15)]).then(t.bind(null,"g9M5")).then(function(n){return n.VendorModuleNgFactory})},s=function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(5),t.e(7),t.e(4),t.e(21)]).then(t.bind(null,"Oji1")).then(function(n){return n.ServiceModuleNgFactory})},g=function(){return Promise.all([t.e(8),t.e(19)]).then(t.bind(null,"7REJ")).then(function(n){return n.MailModuleNgFactory})},C=function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(5),t.e(7),t.e(24)]).then(t.bind(null,"ypEY")).then(function(n){return n.ProductModuleNgFactory})},b=function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(4),t.e(14)]).then(t.bind(null,"w4GT")).then(function(n){return n.SupportModuleNgFactory})},M=function(){return t.e(16).then(t.bind(null,"6av5")).then(function(n){return n.EnterpriseModuleNgFactory})},v=function(){return Promise.all([t.e(0),t.e(3),t.e(17)]).then(t.bind(null,"VPrE")).then(function(n){return n.PermissionModuleNgFactory})},y=function(){return function(){}}();t.d(e,"PagesModuleNgFactory",function(){return F});var F=o["\u0275cmf"](r,[],function(n){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[a.a]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,i.NgLocalization,i.NgLocaleLocalization,[o.LOCALE_ID,[2,i["\u0275angular_packages_common_common_a"]]]),o["\u0275mpd"](1073742336,i.CommonModule,i.CommonModule,[]),o["\u0275mpd"](1073742336,u.B,u.B,[]),o["\u0275mpd"](1073742336,l.o,l.o,[[2,l.t],[2,l.k]]),o["\u0275mpd"](1073742336,y,y,[]),o["\u0275mpd"](1073742336,r,r,[]),o["\u0275mpd"](1024,l.i,function(){return[[{path:"dashboard",loadChildren:d},{path:"staff",loadChildren:h},{path:"customer",loadChildren:f},{path:"marketing",loadChildren:p},{path:"vendor",loadChildren:m,canActivate:[c.a]},{path:"service",loadChildren:s,canActivate:[c.a]},{path:"mail",loadChildren:g,canActivate:[c.a]},{path:"product",loadChildren:C},{path:"support",loadChildren:b},{path:"enterprise",loadChildren:M,canActivate:[c.a]},{path:"permission",loadChildren:v,canActivate:[c.a]},{path:"",redirectTo:"/dashboard",pathMatch:"prefix"}]]},[])])})}}]);