(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+Mu2":function(t,n,e){"use strict";e.r(n),e.d(n,"ActivateModule",function(){return A});var o=e("ofXK"),i=e("tk/3"),a=e("Dk7Y"),c=e("3Pt+"),r=e("tyNb"),g=e("aR35"),s=e("4L4/"),_=e("qfBg"),l=e("c2Te"),f=e("gN7+"),d=e("Y9WU"),u=e("gYN0"),p=e("fXoL"),v=e("l0Yc"),m=e("8T5t");function b(t,n){if(1&t&&(p.Ub(0,"p",15),p.Hc(1),p.Tb()),2&t){var e=p.ec(2);p.Ab(1),p.Ic(null==e.appLang?null:e.appLang.signin_to_activate)}}function P(t,n){if(1&t&&(p.Ub(0,"p",16),p.Hc(1),p.Tb()),2&t){var e=p.ec(2);p.Ab(1),p.Ic(null==e.appLang?null:e.appLang.enter_code_TV_screen)}}function C(t,n){if(1&t&&(p.Ub(0,"span"),p.Hc(1),p.Tb()),2&t){var e=p.ec(3);p.Ab(1),p.Jc(" ",e.ErrorValidationMsg," ")}}function M(t,n){if(1&t&&(p.Ub(0,"div",26),p.Hc(1),p.Tb()),2&t){var e=p.ec(3);p.Ab(1),p.Ic(e.errorMessage)}}var O=function(t){return{"btn-grey":t}};function h(t,n){if(1&t&&(p.Ub(0,"button",27),p.Hc(1),p.Tb()),2&t){var e=p.ec(3);p.jc("ngClass",p.oc(3,O,!e.myForm.valid||e.errorMessage))("disabled",!e.myForm.valid||e.errorMessage),p.Ab(1),p.Ic(null==e.appLang?null:e.appLang.activate)}}var x=function(){return{bottom:"-24px"}};function w(t,n){if(1&t){var e=p.Vb();p.Ub(0,"form",17),p.bc("ngSubmit",function(){return p.yc(e),p.ec(2).validateForm()}),p.Ub(1,"div",18),p.Ub(2,"label",19),p.Ub(3,"span",20),p.Hc(4),p.Tb(),p.Ub(5,"input",21),p.bc("keypress",function(t){return p.yc(e),p.ec(2).validateCode(t)}),p.Tb(),p.Ub(6,"span",22),p.Fc(7,C,2,1,"span",23),p.Tb(),p.Tb(),p.Fc(8,M,2,1,"div",24),p.Tb(),p.Fc(9,h,2,5,"button",25),p.Tb()}if(2&t){var o=p.ec(2);p.jc("formGroup",o.myForm),p.Ab(4),p.Ic(null==o.appLang?null:o.appLang.enter_code),p.Ab(2),p.jc("ngStyle",p.nc(6,x)),p.Ab(1),p.jc("ngIf",o.myForm.controls.code.dirty&&!o.myForm.controls.code.valid),p.Ab(1),p.jc("ngIf",o.errorMessage),p.Ab(1),p.jc("ngIf",!!o.userDetails)}}function y(t,n){if(1&t){var e=p.Vb();p.Ub(0,"button",28),p.bc("click",function(){return p.yc(e),p.ec(2).goSingIn()}),p.Hc(1),p.Tb()}if(2&t){var o=p.ec(2);p.Ab(1),p.Ic(null==o.appLang?null:o.appLang.signin)}}var k=function(){return["/terms-use"]};function F(t,n){if(1&t&&(p.Ub(0,"div",8),p.Ub(1,"h2"),p.Hc(2),p.Tb(),p.Fc(3,b,2,1,"p",9),p.Fc(4,P,2,1,"p",10),p.Fc(5,w,10,7,"form",11),p.Fc(6,y,2,1,"button",12),p.Ub(7,"p",13),p.Hc(8),p.Ub(9,"a",14),p.Hc(10),p.Tb(),p.Tb(),p.Tb()),2&t){var e=p.ec();p.Ab(2),p.Ic(null==e.appLang?null:e.appLang.activate_devices),p.Ab(1),p.jc("ngIf",!e.userDetails),p.Ab(1),p.jc("ngIf",!!e.userDetails),p.Ab(1),p.jc("ngIf",!!e.userDetails),p.Ab(1),p.jc("ngIf",!e.userDetails),p.Ab(2),p.Lc("",null==e.appLang?null:e.appLang.you_agree_to," ",e.appConfig.appName,"",null==e.appLang?null:e.appLang._s," "),p.Ab(1),p.jc("routerLink",p.nc(11,k))("target",e.tcPath),p.Ab(1),p.Ic(null==e.appLang?null:e.appLang.terms_condition)}}function L(t,n){if(1&t){var e=p.Vb();p.Ub(0,"div",29),p.Ub(1,"div",30),p.Ub(2,"div",31),p.Ub(3,"h3"),p.Hc(4),p.Tb(),p.Ub(5,"div",32),p.Ub(6,"button",33),p.bc("click",function(){return p.yc(e),p.ec().closeDevicePopUp()}),p.Hc(7),p.Tb(),p.Tb(),p.Tb(),p.Tb(),p.Tb()}if(2&t){var o=p.ec();p.Ab(4),p.Ic(o.sucessMessage),p.Ab(3),p.Ic(null==o.appLang?null:o.appLang.go_to_home)}}function I(t,n){1&t&&(p.Ub(0,"div",34),p.Pb(1,"loader"),p.Tb())}var S=function(){return["/"]},z=function(){function t(t,n,e,o,i,a,r,s,_,l){var f,d,u,p,v,m,b,P,C,M,O,h,x,w,y=this;this.formBuilder=t,this._SeoService=n,this.dataManager=e,this.oTTGlobalService=o,this._router=i,this.userService=a,this.localization=r,this.location=s,this.ottGlobalService=_,this._AnalyticsService=l,this.appConfig=g.a,this.myForm=c.e,this.displayLoader=!1,this.codePattern=/^[a-z0-9]+$/i,this.ErrorValidationMsg="",this.code="",this.sucessMessage="",this.appLang={},this.queryParams={},this.cSettings=g.a.getCsettings("cSettings_signin"),this.tcPath="",this.userDetails=this.userService.getUserDetails(),this.systemFeatures=a.getSystemFeatures(),this.systemConfigs=a.getSystemConfig(),this.pagePath=this.oTTGlobalService.getPagePath(this._router.url);var k=this._router.url.split("/").length>3?this._router.url.split("/")[this._router.url.split("/").length-1]:"";this.queryParams=this.oTTGlobalService.getQueryParams(this._router.url),this.appLangSub=this.localization.appLangSource.subscribe(function(t){y.appLang=t.activateDevice}),this.myForm=this.formBuilder.group({code:[(null===(f=this.queryParams)||void 0===f?void 0:f.dactivetk)?null===(d=this.queryParams)||void 0===d?void 0:d.dactivetk:k,[c.t.required,c.t.pattern(this.codePattern),c.t.minLength((null===(v=null===(p=null===(u=this.systemFeatures)||void 0===u?void 0:u.passcode)||void 0===p?void 0:p.fields)||void 0===v?void 0:v.length)?parseInt(null===(P=null===(b=null===(m=this.systemFeatures)||void 0===m?void 0:m.passcode)||void 0===b?void 0:b.fields)||void 0===P?void 0:P.length):4),c.t.maxLength((null===(O=null===(M=null===(C=this.systemFeatures)||void 0===C?void 0:C.passcode)||void 0===M?void 0:M.fields)||void 0===O?void 0:O.length)?parseInt(null===(w=null===(x=null===(h=this.systemFeatures)||void 0===h?void 0:h.passcode)||void 0===x?void 0:x.fields)||void 0===w?void 0:w.length):6)]]}),this.myForm.controls.code.valueChanges.subscribe(function(t){var n,e,o,i,a,r,g,s,_,l,f,d,u,p;y.errorMessage="",null!=t&&null!=typeof t&&""!=t?(y.myForm.controls.code.setValidators([c.t.required,c.t.pattern(y.codePattern),c.t.minLength((null===(o=null===(e=null===(n=y.systemFeatures)||void 0===n?void 0:n.passcode)||void 0===e?void 0:e.fields)||void 0===o?void 0:o.length)?parseInt(null===(r=null===(a=null===(i=y.systemFeatures)||void 0===i?void 0:i.passcode)||void 0===a?void 0:a.fields)||void 0===r?void 0:r.length):4),c.t.maxLength((null===(_=null===(s=null===(g=y.systemFeatures)||void 0===g?void 0:g.passcode)||void 0===s?void 0:s.fields)||void 0===_?void 0:_.length)?parseInt(null===(d=null===(f=null===(l=y.systemFeatures)||void 0===l?void 0:l.passcode)||void 0===f?void 0:f.fields)||void 0===d?void 0:d.length):6)]),y.myForm.controls.code.markAsTouched(),y.ErrorValidationMsg=null===(u=y.appLang)||void 0===u?void 0:u.Enter_a_valid_code):y.ErrorValidationMsg=null===(p=y.appLang)||void 0===p?void 0:p.Code_required}),this.systemConfigSub=this.userService.systemConfigsSource.subscribe(function(t){y.systemConfigs=y.userService.getSystemConfig(),y._SeoService.getSeoData("activate/device")}),this.routerFrom=this.ottGlobalService.getQueryParams(this._router.url),this._SeoService.getSeoData("activate/device")}return t.prototype.ngOnInit=function(){var t=this,n=this.userService.getLocationInfo();n&&(this.ipInfo=n.ipInfo,this.checkCountry()),this.locationInfoSub=this.userService.locationInfoSource.subscribe(function(n){t.ipInfo=n.ipInfo,t.checkCountry()}),this.tcPath=this.userService.isUtuser?"_self":"_blank"},t.prototype.checkCountry=function(){"IN"!=this.ipInfo.countryCode&&"US"!=this.ipInfo.countryCode&&this._router.navigateByUrl("/")},t.prototype.ngOnDestroy=function(){this.appLangSub&&this.appLangSub.unsubscribe(),this.systemConfigSub&&this.systemConfigSub.unsubscribe()},t.prototype.validateForm=function(){var t=this;"VALID"==this.myForm.status&&(this.displayLoader=!0,this.dataManager.postData(this.userService.staticInitData.api+"/service/api/auth/validate/passcode",{key:this.myForm.value.code}).subscribe(function(n){n.status?(t.sucessMessage=n.response.message,t._AnalyticsService.sendEvent("activate_TV_completed",t.ottGlobalService.getPlansDetails())):t.errorMessage=n.error.message,t.displayLoader=!1},function(n){var e;t.errorMessage=null===(e=t.appLang)||void 0===e?void 0:e.Something_went_wrong_please_try_again,t.displayLoader=!1}))},t.prototype.validateCode=function(t){var n=t.which?t.which:t.keyCode;return n>31&&(n>47&&n<58||n>64&&n<91||n>96&&n<123)},t.prototype.closeDevicePopUp=function(){this.sucessMessage="",this._router.navigateByUrl("/")},t.prototype.goSingIn=function(){var t,n;(null===(t=this.queryParams)||void 0===t?void 0:t.dactivetk)?this.userService.setNavigationFrom(this.pagePath+"?dactivetk="+(null===(n=this.queryParams)||void 0===n?void 0:n.dactivetk)):this.userService.setNavigationFrom(this.pagePath),this._router.navigateByUrl("/signin")},t.prototype.back=function(){var t;this.routerFrom?"settings"===(null===(t=this.routerFrom)||void 0===t?void 0:t.nf)&&this.location.back():(this.userService.isUtuser&&(window.location.href=this.systemConfigs.siteURL),this.location.back())},t.\u0275fac=function(n){return new(n||t)(p.Ob(c.c),p.Ob(u.a),p.Ob(s.a),p.Ob(f.a),p.Ob(r.d),p.Ob(_.a),p.Ob(l.a),p.Ob(o.g),p.Ob(f.a),p.Ob(d.a))},t.\u0275cmp=p.Ib({type:t,selectors:[["app-activate-device"]],decls:9,vars:8,consts:[[1,"activate_device"],[1,"logo",3,"routerLink","src","alt"],[1,"go_back"],[1,"back"],["alt","back","src","https://d2ivesio5kogrp.cloudfront.net/static/watcho/images/help-back-arrow.svg",3,"click"],["class","activate_inner",4,"ngIf"],["class"," stream__pin__validate",4,"ngIf"],["class","display_loader",4,"ngIf"],[1,"activate_inner"],["class","msg2",4,"ngIf"],["class","msg1",4,"ngIf"],["novalidate","",3,"formGroup","ngSubmit",4,"ngIf"],["class","btn signin_btn",3,"click",4,"ngIf"],[1,"msg"],[3,"routerLink","target"],[1,"msg2"],[1,"msg1"],["novalidate","",3,"formGroup","ngSubmit"],[1,"form_rows"],[1,"isActivate"],[1,"title"],["type","text","maxlength","6","AutoFocus","","formControlName","code","autocomplete","code",1,"form-control",3,"keypress"],[1,"text-danger",3,"ngStyle"],[4,"ngIf"],["class","text-danger1 err_msg_position",4,"ngIf"],["class","btn",3,"ngClass","disabled",4,"ngIf"],[1,"text-danger1","err_msg_position"],[1,"btn",3,"ngClass","disabled"],[1,"btn","signin_btn",3,"click"],[1,"stream__pin__validate"],[1,"success_inner"],[1,""],[1,"bottom_buttons"],["type","button",1,"apply",3,"click"],[1,"display_loader"]],template:function(t,n){1&t&&(p.Ub(0,"div",0),p.Pb(1,"img",1),p.Ub(2,"div",2),p.Ub(3,"span",3),p.Ub(4,"img",4),p.bc("click",function(){return n.back()}),p.Tb(),p.Hc(5),p.Tb(),p.Tb(),p.Fc(6,F,11,12,"div",5),p.Fc(7,L,8,2,"div",6),p.Tb(),p.Fc(8,I,2,0,"div",7)),2&t&&(p.Ab(1),p.kc("src",n.appConfig.logoPath,p.Bc),p.kc("alt",n.appConfig.appName),p.jc("routerLink",p.nc(7,S)),p.Ab(4),p.Ic(null==n.appLang?null:n.appLang.activate_devices),p.Ab(1),p.jc("ngIf",!n.sucessMessage),p.Ab(1),p.jc("ngIf",!!n.sucessMessage),p.Ab(1),p.jc("ngIf",n.displayLoader))},directives:[r.e,o.k,r.g,c.u,c.m,c.f,c.b,c.h,v.a,c.l,c.d,o.l,o.i,m.a],styles:['@import url("https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");@font-face{font-family:Poppins;font-style:normal;font-weight:200;font-display:swap;src:url(pxiByp8kv8JHgFVrLFj_Z11lFc-K.36828c2aa518db3d9dfe.woff2) format("woff2");unicode-range:u+0900-097f,u+1cd0-1cf9,u+200c-200d,u+20a8,u+20b9,u+20f0,u+25cc,u+a830-a839,u+a8e0-a8ff,u+11b00-11b09}@font-face{font-family:Poppins;font-style:normal;font-weight:200;font-display:swap;src:url(pxiByp8kv8JHgFVrLFj_Z1JlFc-K.81aeafc015f493f18d85.woff2) format("woff2");unicode-range:u+0100-02af,u+0304,u+0308,u+0329,u+1e00-1e9f,u+1ef2-1eff,u+2020,u+20a0-20ab,u+20ad-20c0,u+2113,u+2c60-2c7f,u+a720-a7ff}@font-face{font-family:Poppins;font-style:normal;font-weight:200;font-display:swap;src:url(pxiByp8kv8JHgFVrLFj_Z1xlFQ.7498246ad20e0ba71240.woff2) format("woff2");unicode-range:u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+0304,u+0308,u+0329,u+2000-206f,u+2074,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd}@font-face{font-family:Poppins;font-style:normal;font-weight:300;font-display:swap;src:url(pxiByp8kv8JHgFVrLDz8Z11lFc-K.8236e953c7367362a568.woff2) format("woff2");unicode-range:u+0900-097f,u+1cd0-1cf9,u+200c-200d,u+20a8,u+20b9,u+20f0,u+25cc,u+a830-a839,u+a8e0-a8ff,u+11b00-11b09}@font-face{font-family:Poppins;font-style:normal;font-weight:300;font-display:swap;src:url(pxiByp8kv8JHgFVrLDz8Z1JlFc-K.b0bb003afc8483bd32d2.woff2) format("woff2");unicode-range:u+0100-02af,u+0304,u+0308,u+0329,u+1e00-1e9f,u+1ef2-1eff,u+2020,u+20a0-20ab,u+20ad-20c0,u+2113,u+2c60-2c7f,u+a720-a7ff}@font-face{font-family:Poppins;font-style:normal;font-weight:300;font-display:swap;src:url(pxiByp8kv8JHgFVrLDz8Z1xlFQ.39576fe9df8a22cc1bcc.woff2) format("woff2");unicode-range:u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+0304,u+0308,u+0329,u+2000-206f,u+2074,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd}@font-face{font-family:Poppins;font-style:normal;font-weight:400;font-display:swap;src:url(pxiEyp8kv8JHgFVrJJbecmNE.64d5f06ee726edd58ca3.woff2) format("woff2");unicode-range:u+0900-097f,u+1cd0-1cf9,u+200c-200d,u+20a8,u+20b9,u+20f0,u+25cc,u+a830-a839,u+a8e0-a8ff,u+11b00-11b09}@font-face{font-family:Poppins;font-style:normal;font-weight:400;font-display:swap;src:url(pxiEyp8kv8JHgFVrJJnecmNE.4f38b4331448d2313adc.woff2) format("woff2");unicode-range:u+0100-02af,u+0304,u+0308,u+0329,u+1e00-1e9f,u+1ef2-1eff,u+2020,u+20a0-20ab,u+20ad-20c0,u+2113,u+2c60-2c7f,u+a720-a7ff}@font-face{font-family:Poppins;font-style:normal;font-weight:400;font-display:swap;src:url(pxiEyp8kv8JHgFVrJJfecg.405055dd680fa1dcdfa2.woff2) format("woff2");unicode-range:u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+0304,u+0308,u+0329,u+2000-206f,u+2074,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd}@font-face{font-family:Poppins;font-style:normal;font-weight:500;font-display:swap;src:url(pxiByp8kv8JHgFVrLGT9Z11lFc-K.f43b6ebf46ee6fba0555.woff2) format("woff2");unicode-range:u+0900-097f,u+1cd0-1cf9,u+200c-200d,u+20a8,u+20b9,u+20f0,u+25cc,u+a830-a839,u+a8e0-a8ff,u+11b00-11b09}@font-face{font-family:Poppins;font-style:normal;font-weight:500;font-display:swap;src:url(pxiByp8kv8JHgFVrLGT9Z1JlFc-K.b59bcdf2f050e663ca29.woff2) format("woff2");unicode-range:u+0100-02af,u+0304,u+0308,u+0329,u+1e00-1e9f,u+1ef2-1eff,u+2020,u+20a0-20ab,u+20ad-20c0,u+2113,u+2c60-2c7f,u+a720-a7ff}@font-face{font-family:Poppins;font-style:normal;font-weight:500;font-display:swap;src:url(pxiByp8kv8JHgFVrLGT9Z1xlFQ.08491d3f7fe7ae88ef44.woff2) format("woff2");unicode-range:u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+0304,u+0308,u+0329,u+2000-206f,u+2074,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd}@font-face{font-family:Poppins;font-style:normal;font-weight:600;font-display:swap;src:url(pxiByp8kv8JHgFVrLEj6Z11lFc-K.3343afa6b8c01e48a23b.woff2) format("woff2");unicode-range:u+0900-097f,u+1cd0-1cf9,u+200c-200d,u+20a8,u+20b9,u+20f0,u+25cc,u+a830-a839,u+a8e0-a8ff,u+11b00-11b09}@font-face{font-family:Poppins;font-style:normal;font-weight:600;font-display:swap;src:url(pxiByp8kv8JHgFVrLEj6Z1JlFc-K.d08f0891e438248ce419.woff2) format("woff2");unicode-range:u+0100-02af,u+0304,u+0308,u+0329,u+1e00-1e9f,u+1ef2-1eff,u+2020,u+20a0-20ab,u+20ad-20c0,u+2113,u+2c60-2c7f,u+a720-a7ff}@font-face{font-family:Poppins;font-style:normal;font-weight:600;font-display:swap;src:url(pxiByp8kv8JHgFVrLEj6Z1xlFQ.91145014c0350c248ed2.woff2) format("woff2") format("woff2");unicode-range:u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+0304,u+0308,u+0329,u+2000-206f,u+2074,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd}[_ngcontent-%COMP%]:root{--body-bg:#141414;--bg-color:#e7195a;--menu-header:#222;--hover-color:#cc6810;--txt-color:#fff;--mobile-oth-bg:#141414;--white-color-opposite:#fff;--white-color:#fff;--header-text-color:#fff;--mega-menu-bg:#222;--mega-menu-bg-tablet:#141414;--mega-menu-li-color:#ccc;--mega-menu-h5-border:#34343c;--setting-details-bg:#232323;--setting-details-h2-bg:#282828;--setting-details-h2-txt-color:#fff;--change-user-profile-input-txt-color:#ccc;--languages-bg:#232323;--languages-item-bg:#232323;--languages-item-border:#333;--cancel-button-bg:#4f4f4f;--modal-bg:#262626;--user-inter-devider:#383838;--profile-lock-sm-label:#999;--toggle-bg:#e7195a;--otp-input-bg:#1f1e1e;--activate-plan:hsla(0,0%,100%,.7);--border:#dee2e6;--secondary-text:#adadad;--edit_color:#e5e5e5;--add_color:#e5e5e5;--managep_text:#fff;--defualt_edituser_bg:rgba(0,0,0,.65);--user_inputout:#999;--user_input_title:#888;--meturity_title:#e5e5e5;--emojji_title:hsla(0,0%,100%,.65);--actviate_bg:none;--lang_li_activate:#454545;--languages:#232323;--lang_text:#fff;--lang_subtext:hsla(0,0%,100%,.65);--view_disc:#281c31;--right_symbol:#fff;--transection_bg_clr:#262626;--edit_profile_note:hsla(0,0%,100%,.6);--activate_device_info:#ccc;--bg_account_delet:#262626;--resend_otp:hsla(0,0%,100%,.6);--input_text:#fff;--ott_theme_font:#fff;--text_trans_clr:#fff}[_ngcontent-%COMP%]:focus, button[_ngcontent-%COMP%], button[_ngcontent-%COMP%]:focus{outline:none!important}@font-face{font-family:Glyphicons Halflings;src:url(https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/fonts/glyphicons-halflings-regular.eot);src:url(https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/fonts/glyphicons-halflings-regular.eot?#iefix) format("embedded-opentype"),url(https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/fonts/glyphicons-halflings-regular.woff2) format("woff2"),url(https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/fonts/glyphicons-halflings-regular.woff) format("woff"),url(https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/fonts/glyphicons-halflings-regular.ttf) format("truetype"),url(https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/fonts/glyphicons-halflings-regular.svg#glyphicons_halflingsregular) format("svg")}.overflow[_ngcontent-%COMP%]{width:100%;overflow:hidden;position:relative}.visible[_ngcontent-%COMP%]{display:block}.hidden[_ngcontent-%COMP%]{display:none}.remove-padding[_ngcontent-%COMP%]{padding-left:0;padding-right:0}.remove-margin[_ngcontent-%COMP%]{margin-left:0;margin-right:0}.desktop-margins[_ngcontent-%COMP%]{margin-left:58px;margin-right:58px}@media (max-width:1366px){.desktop-margins[_ngcontent-%COMP%]{margin-left:35px;margin-right:35px}}@media (max-width:991px){.desktop-margins[_ngcontent-%COMP%]{margin-left:25px;margin-right:25px}}@media (max-width:576px){.desktop-margins[_ngcontent-%COMP%]{margin-left:15px;margin-right:15px}}.ott-display-none[_ngcontent-%COMP%]{display:none}.text-right[_ngcontent-%COMP%]{text-align:right}.ott-theme-active-color[_ngcontent-%COMP%]{color:#00a2e8}.overflow-hidden[_ngcontent-%COMP%]{overflow:hidden}.activate_device[_ngcontent-%COMP%]{width:100%;min-height:100vh;margin:0 auto;position:fixed;height:100%;overflow:auto;background:#141414}@media (max-width:991px){.activate_device[_ngcontent-%COMP%]{height:100%;overflow:auto}}@media (max-width:767px){.activate_device[_ngcontent-%COMP%]{background:#141414}}.activate_device[_ngcontent-%COMP%]   img.logo[_ngcontent-%COMP%]{position:fixed;top:58px;left:58px;cursor:pointer;width:130px;z-index:1}@media (max-width:1440px){.activate_device[_ngcontent-%COMP%]   img.logo[_ngcontent-%COMP%]{top:30px;left:30px;width:120px}}@media (max-width:991px){.activate_device[_ngcontent-%COMP%]   img.logo[_ngcontent-%COMP%]{left:0;right:0;position:absolute;top:30px;margin:0 auto}}@media (max-width:767px){.activate_device[_ngcontent-%COMP%]   img.logo[_ngcontent-%COMP%]{display:none}}.activate_device[_ngcontent-%COMP%]   img.mobile_logo_center[_ngcontent-%COMP%]{display:none;width:84px;position:relative;top:20px;left:0;right:0;margin:auto}@media (max-width:767px){.activate_device[_ngcontent-%COMP%]   img.mobile_logo_center[_ngcontent-%COMP%]{display:block}}.activate_device[_ngcontent-%COMP%]   img.mobile_logo_left[_ngcontent-%COMP%]{display:none;width:84px;position:relative;top:20px;left:20px;right:0;margin:0}@media (max-width:767px){.activate_device[_ngcontent-%COMP%]   img.mobile_logo_left[_ngcontent-%COMP%]{display:block}}.activate_device[_ngcontent-%COMP%]   .go_back[_ngcontent-%COMP%]{height:56px;line-height:56px;background:#262626;padding:0 25px;display:none}@media (max-width:767px){.activate_device[_ngcontent-%COMP%]   .go_back[_ngcontent-%COMP%]{display:block;position:fixed;top:0;left:0;width:100%}}.activate_device[_ngcontent-%COMP%]   .go_back[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]{font-size:18px;color:#fff}.activate_device[_ngcontent-%COMP%]   .go_back[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:10px;width:22px}.activate_device[_ngcontent-%COMP%]   .help[_ngcontent-%COMP%]{display:none;cursor:pointer}@media (max-width:767px){.activate_device[_ngcontent-%COMP%]   .help[_ngcontent-%COMP%]{display:inline;opacity:.65;font-size:16px;color:#fff;line-height:26px;position:absolute;top:20px;right:20px}}.activate_device[_ngcontent-%COMP%]   .help[_ngcontent-%COMP%]:hover{opacity:1}.activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]{padding:50px 50px 70px;display:block;overflow:hidden;width:580px;margin:120px auto 30px;background:var(--bg_account_delet);text-align:center}@media (max-width:1366px){.activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]{margin-top:60px}}@media (max-width:991px){.activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]{width:100%;max-width:450px;margin:120px auto 20px;padding:30px}}@media (max-width:767px){.activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]{background:none;padding:0 20px 20px;margin:80px auto 0}}.activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:28px;margin-bottom:10px;font-weight:400;color:var(--white-color)}@media (max-width:1440px){.activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:26px}}@media (max-width:1366px){.activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:24px}}@media (max-width:991px){.activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:22px}}@media (max-width:767px){.activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px}}.activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]   .msg2[_ngcontent-%COMP%]{font-size:15px;color:#888;margin-bottom:20px}.activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]   .msg1[_ngcontent-%COMP%]{font-size:14px;color:#888;margin-bottom:40px}.activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]   .msg1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:hsla(0,0%,100%,.75);text-decoration:underline}.activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]   .form_rows[_ngcontent-%COMP%]{position:relative;margin-bottom:15px}.activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]   .form_rows[_ngcontent-%COMP%]   .text-danger1[_ngcontent-%COMP%]{position:absolute;color:#e80000;left:0;font-size:14px;bottom:-10px;right:0;margin:0 auto}.activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]   .form_rows[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{border:1px solid #52525c;position:relative;border-radius:4px;margin-bottom:38px;height:50px;width:100%}.activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]   .form_rows[_ngcontent-%COMP%]   label.mobile_number[_ngcontent-%COMP%]{margin-bottom:58px}@media (max-width:1440px){.activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]   .form_rows[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-bottom:30px}}.activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]   .form_rows[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#888;font-size:12px;position:absolute;top:-8px;left:10px;background:var(--bg_account_delet);padding:0 5px;z-index:9}@media (max-width:767px){.activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]   .form_rows[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background:#141414}}.activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]   .form_rows[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background:none;border:none;color:#888;padding:0 16px;width:100%;font-size:15px!important;height:48px;line-height:48px;display:inline-block}@media (max-width:1440px){.activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]   .form_rows[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-size:14px}}.activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]   .form_rows[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-webkit-autofill, .activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]   .form_rows[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-webkit-autofill:focus, .activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]   .form_rows[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-webkit-autofill:hover, .activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]   .form_rows[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:-webkit-autofill, .activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]   .form_rows[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:-webkit-autofill:focus, .activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]   .form_rows[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:-webkit-autofill:hover, .activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]   .form_rows[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:-webkit-autofill, .activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]   .form_rows[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:-webkit-autofill:focus, .activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]   .form_rows[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:-webkit-autofill:hover{border:none;-webkit-text-fill-color:#fff;box-shadow:0 0 0 1000px var(--bg_account_delet) inset;-webkit-box-shadow:0 0 0 1000px var(--bg_account_delet) inset;-webkit-transition:background-color 5000s ease-in-out 0s;transition:background-color 5000s ease-in-out 0s;font-size:15px!important}@media (max-width:767px){.activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]   .form_rows[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-webkit-autofill, .activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]   .form_rows[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-webkit-autofill:focus, .activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]   .form_rows[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-webkit-autofill:hover, .activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]   .form_rows[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:-webkit-autofill, .activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]   .form_rows[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:-webkit-autofill:focus, .activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]   .form_rows[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:-webkit-autofill:hover, .activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]   .form_rows[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:-webkit-autofill, .activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]   .form_rows[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:-webkit-autofill:focus, .activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]   .form_rows[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:-webkit-autofill:hover{box-shadow:inset 0 0 0 1000px #0f0f1c;box-shadow:none}}.activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]   .form_rows[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:-internal-autofill-previewed{font-size:16px!important}.activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]   .form_rows[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-internal-autofill-selected{background:none!important}@keyframes autofill{to{background:transparent;color:inherit;font-size:inherit}}.activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]   .form_rows[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-moz-placeholder{color:#ffdab9;font-size:13px}.activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]   .form_rows[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder{color:#ffdab9;font-size:13px}.activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]   .form_rows[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .text-danger[_ngcontent-%COMP%]{position:absolute;color:#e80000;bottom:-20px;left:0;font-size:12px}.activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]   .form_rows[_ngcontent-%COMP%]   label.password[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding-right:50px}.activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]   .form_rows[_ngcontent-%COMP%]   label.password[_ngcontent-%COMP%]   .show_password[_ngcontent-%COMP%]{position:absolute;top:14px;right:10px;font-size:14px;cursor:pointer;color:#888}@media (max-width:1366px){.activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]   .form_rows[_ngcontent-%COMP%]   label.password[_ngcontent-%COMP%]   .show_password[_ngcontent-%COMP%]{top:13px}}.activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]   .form_rows[_ngcontent-%COMP%]   label.password[_ngcontent-%COMP%]   .show_password[_ngcontent-%COMP%]:hover{color:#fff}.activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]   .form_rows[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .otpDisclaimer[_ngcontent-%COMP%]{font-size:10px;color:#888;display:block;margin-top:5px}.activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]   .link_wrap[_ngcontent-%COMP%]{margin-top:10px}.activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]   .link_wrap[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#888;float:right;font-size:14px}@media (max-width:1440px){.activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]   .link_wrap[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:12px}}.activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]   .link_wrap[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{opacity:1;color:#fff}.activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]   .msg[_ngcontent-%COMP%]{font-size:12px;color:#888}.activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]   .msg[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:hsla(0,0%,100%,.75);text-decoration:underline}.activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]   .msg[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff;opacity:1}.activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{background-color:var(--bg-color);height:44px;line-height:44px;padding:0;font-size:18px!important;width:270px;margin-bottom:20px;margin-top:15px}@media (max-width:1440px){.activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{font-size:16px}}@media (max-width:1366px){.activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{margin-top:10px;font-size:14px}}@media (max-width:991px){.activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{margin-top:10px;width:250px}}@media (max-width:767px){.activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{width:100%}}.activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]   .signin_btn[_ngcontent-%COMP%]{margin-bottom:30px;width:200px}@media (max-width:1440px){.activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]   .signin_btn[_ngcontent-%COMP%]{font-size:16px}}@media (max-width:1366px){.activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]   .signin_btn[_ngcontent-%COMP%]{font-size:14px}}@media (max-width:767px){.activate_device[_ngcontent-%COMP%]   .activate_inner[_ngcontent-%COMP%]   .signin_btn[_ngcontent-%COMP%]{width:100%}}.activate_device[_ngcontent-%COMP%]   .stream__pin__validate[_ngcontent-%COMP%]{display:block}.activate_device[_ngcontent-%COMP%]   .stream__pin__validate[_ngcontent-%COMP%]   .success_inner[_ngcontent-%COMP%]{padding:50px;display:block;overflow:hidden;width:550px;max-width:none!important;margin:120px auto 30px;background:var(--bg_account_delet);text-align:center}@media (max-width:1366px){.activate_device[_ngcontent-%COMP%]   .stream__pin__validate[_ngcontent-%COMP%]   .success_inner[_ngcontent-%COMP%]{margin-top:60px}}@media (max-width:991px){.activate_device[_ngcontent-%COMP%]   .stream__pin__validate[_ngcontent-%COMP%]   .success_inner[_ngcontent-%COMP%]{width:500px;margin:120px auto 20px;padding:30px}}@media (max-width:767px){.activate_device[_ngcontent-%COMP%]   .stream__pin__validate[_ngcontent-%COMP%]   .success_inner[_ngcontent-%COMP%]{width:100%;background:none;padding:0 20px 20px;margin:60px auto 0}}.activate_device[_ngcontent-%COMP%]   .stream__pin__validate[_ngcontent-%COMP%]   .success_inner[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:26px;text-align:center;padding:10px 0 20px;margin:0 auto}@media (max-width:1440px){.activate_device[_ngcontent-%COMP%]   .stream__pin__validate[_ngcontent-%COMP%]   .success_inner[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:24px}}@media (max-width:1366px){.activate_device[_ngcontent-%COMP%]   .stream__pin__validate[_ngcontent-%COMP%]   .success_inner[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:22px}}@media (max-width:991px){.activate_device[_ngcontent-%COMP%]   .stream__pin__validate[_ngcontent-%COMP%]   .success_inner[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;max-width:450px}}@media (max-width:767px){.activate_device[_ngcontent-%COMP%]   .stream__pin__validate[_ngcontent-%COMP%]   .success_inner[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;max-width:350px}}.activate_device[_ngcontent-%COMP%]   .stream__pin__validate[_ngcontent-%COMP%]   .success_inner[_ngcontent-%COMP%]   .bottom_buttons[_ngcontent-%COMP%]{text-align:center;display:block;overflow:hidden;margin-top:40px;margin-bottom:20px}@media (max-width:767px){.activate_device[_ngcontent-%COMP%]   .stream__pin__validate[_ngcontent-%COMP%]   .success_inner[_ngcontent-%COMP%]   .bottom_buttons[_ngcontent-%COMP%]{margin-top:20px}}.activate_device[_ngcontent-%COMP%]   .stream__pin__validate[_ngcontent-%COMP%]   .success_inner[_ngcontent-%COMP%]   .bottom_buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:8px 0;border:none;background:var(--bg-color);width:160px;text-align:center;color:#fff;border-radius:2px;-moz-border-radius:2px;-webkit-border-radius:2px}.display_loader[_ngcontent-%COMP%]{text-align:center}']}),t}(),T=[{path:"device",component:z,children:[{path:"**",component:z}]}],U=function(){function t(){}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=p.Mb({type:t}),t.\u0275inj=p.Lb({imports:[[r.h.forChild(T)],r.h]}),t}(),A=function(){function t(){}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=p.Mb({type:t}),t.\u0275inj=p.Lb({imports:[[o.b,i.b,a.a,U,c.g,c.s]]}),t}()}}]);