import{a as Ee}from"./chunk-UDCKG5GM.js";import{b as ke}from"./chunk-4YYND6ZR.js";import{n as be}from"./chunk-AA2U36RO.js";import{b as Pe}from"./chunk-NJHSAT6J.js";import"./chunk-U4JTO2HX.js";import{a as Se}from"./chunk-AJCFBXF2.js";import{a as K}from"./chunk-VQQBBI66.js";import"./chunk-FEXZKP3R.js";import{a as Ce}from"./chunk-35SNKNNU.js";import"./chunk-NKMITRER.js";import"./chunk-7B4WEPGY.js";import{n as ye}from"./chunk-UC2OFU5X.js";import{B as ve,D as we,c as pe,e as g,g as ue,h as ge,m as fe,p as _e,q as he,s as xe}from"./chunk-IWUKBY46.js";import"./chunk-7ZKIOEOA.js";import"./chunk-Y5BMXVS7.js";import{$b as ee,Ac as D,Bc as T,Da as X,Db as c,Dc as se,Ea as S,Eb as V,Fa as P,Fb as a,Ga as v,Ha as $,Hb as z,Jb as Y,Lb as L,Mb as J,Nb as Q,Ob as W,Oc as N,Pb as i,Qb as n,Rb as u,Sb as H,Tb as Z,Vb as E,Yb as h,_b as p,ac as te,bc as ne,ed as I,fb as A,fd as le,gd as de,hc as ie,ia as O,ic as l,jc as x,jd as j,ka as U,kc as q,lb as o,lc as B,mb as w,md as ce,nd as me,pd as F,rc as oe,sc as re,ta as b,ua as G,vc as k,yc as ae}from"./chunk-PWWHKO4X.js";import{a as y,b as R}from"./chunk-4LMIJWLY.js";var De=(()=>{class t{styleClass;style;shape="rectangle";animation="wave";borderRadius;size;width="100%";height="1rem";containerClass(){return{"p-skeleton p-component":!0,"p-skeleton-circle":this.shape==="circle","p-skeleton-none":this.animation==="none"}}containerStyle(){return this.size?R(y({},this.style),{width:this.size,height:this.size,borderRadius:this.borderRadius}):R(y({},this.style),{width:this.width,height:this.height,borderRadius:this.borderRadius})}static \u0275fac=function(s){return new(s||t)};static \u0275cmp=b({type:t,selectors:[["p-skeleton"]],hostAttrs:[1,"p-element"],inputs:{styleClass:"styleClass",style:"style",shape:"shape",animation:"animation",borderRadius:"borderRadius",size:"size",width:"width",height:"height"},decls:1,vars:7,consts:[[3,"ngClass","ngStyle"]],template:function(s,d){s&1&&u(0,"div",0),s&2&&(Y(d.styleClass),a("ngClass",d.containerClass())("ngStyle",d.containerStyle()),V("data-pc-name","skeleton")("aria-hidden",!0)("data-pc-section","root"))},dependencies:[I,j],styles:[`@layer primeng{.p-skeleton{position:relative;overflow:hidden}.p-skeleton:after{content:"";animation:p-skeleton-animation 1.2s infinite;height:100%;left:0;position:absolute;right:0;top:0;transform:translate(-100%);z-index:1}.p-skeleton.p-skeleton-circle{border-radius:50%}.p-skeleton-none:after{animation:none}}@keyframes p-skeleton-animation{0%{transform:translate(-100%)}to{transform:translate(100%)}}
`],encapsulation:2,changeDetection:0})}return t})(),Te=(()=>{class t{static \u0275fac=function(s){return new(s||t)};static \u0275mod=G({type:t});static \u0275inj=O({imports:[F]})}return t})();var ze=["*"],Le=(t,r,e,s,d)=>({"custom-content":t,circle:r,progress:e,"progress-dark":s,pulse:d});function qe(t,r){t&1&&te(0)}function Be(t,r){if(t&1&&(i(0,"div",0),c(1,qe,1,0),n()),t&2){let e=p();a("ngClass",ae(5,Le,e.appearance==="custom-content",e.appearance==="circle",e.animation==="progress",e.animation==="progress-dark",e.animation==="pulse"))("ngStyle",e.theme),V("aria-label",e.ariaLabel)("aria-valuetext",e.loadingText),o(),L(e.appearance==="custom-content"?1:-1)}}var Ne=new U("ngx-skeleton-loader.config"),Me=(()=>{let r=class r{constructor(s){this.config=s;let{appearance:d="line",animation:m="progress",theme:f=null,loadingText:C="Loading...",count:_=1,ariaLabel:Ge="loading"}=s||{};this.appearance=d,this.animation=m,this.theme=f,this.loadingText=C,this.count=_,this.items=[],this.ariaLabel=Ge}ngOnInit(){this.validateInputValues()}validateInputValues(){/^\d+$/.test(`${this.count}`)||(N()&&console.error("`NgxSkeletonLoaderComponent` need to receive 'count' a numeric value. Forcing default to \"1\"."),this.count=1),this.appearance==="custom-content"&&N()&&this.count!==1&&(console.error('`NgxSkeletonLoaderComponent` enforces elements with "custom-content" appearance as DOM nodes. Forcing "count" to "1".'),this.count=1),this.items.length=this.count;let s=["progress","progress-dark","pulse","false"];s.indexOf(String(this.animation))===-1&&(N()&&console.error(`\`NgxSkeletonLoaderComponent\` need to receive 'animation' as: ${s.join(", ")}. Forcing default to "progress".`),this.animation="progress"),["circle","line","custom-content",""].indexOf(String(this.appearance))===-1&&(N()&&console.error("`NgxSkeletonLoaderComponent` need to receive 'appearance' as: circle or line or custom-content or empty string. Forcing default to \"''\"."),this.appearance="");let{theme:d}=this.config||{};d&&d.extendsFromRoot&&this.theme!==null&&(this.theme=y(y({},this.config.theme),this.theme))}ngOnChanges(s){["count","animation","appearance"].find(d=>s[d]&&(s[d].isFirstChange()||s[d].previousValue===s[d].currentValue))||this.validateInputValues()}};r.\u0275fac=function(d){return new(d||r)(w(Ne,8))},r.\u0275cmp=b({type:r,selectors:[["ngx-skeleton-loader"]],inputs:{count:"count",loadingText:"loadingText",appearance:"appearance",animation:"animation",ariaLabel:"ariaLabel",theme:"theme"},features:[X],ngContentSelectors:ze,decls:2,vars:0,consts:[["aria-busy","true","aria-valuemin","0","aria-valuemax","100","role","progressbar","tabindex","-1",1,"skeleton-loader",3,"ngClass","ngStyle"]],template:function(d,m){d&1&&(ee(),Q(0,Be,2,11,"div",0,J)),d&2&&W(m.items)},dependencies:[I,j],styles:['.skeleton-loader[_ngcontent-%COMP%]{box-sizing:border-box;overflow:hidden;position:relative;background:#eff1f6 no-repeat;border-radius:4px;width:100%;height:20px;display:inline-block;margin-bottom:10px;will-change:transform}.skeleton-loader[_ngcontent-%COMP%]:after, .skeleton-loader[_ngcontent-%COMP%]:before{box-sizing:border-box}.skeleton-loader.circle[_ngcontent-%COMP%]{width:40px;height:40px;margin:5px;border-radius:50%}.skeleton-loader.progress[_ngcontent-%COMP%], .skeleton-loader.progress-dark[_ngcontent-%COMP%]{transform:translateZ(0)}.skeleton-loader.progress[_ngcontent-%COMP%]:after, .skeleton-loader.progress[_ngcontent-%COMP%]:before, .skeleton-loader.progress-dark[_ngcontent-%COMP%]:after, .skeleton-loader.progress-dark[_ngcontent-%COMP%]:before{box-sizing:border-box}.skeleton-loader.progress[_ngcontent-%COMP%]:before, .skeleton-loader.progress-dark[_ngcontent-%COMP%]:before{animation:_ngcontent-%COMP%_progress 2s ease-in-out infinite;background-size:200px 100%;position:absolute;z-index:1;top:0;left:0;width:200px;height:100%;content:""}.skeleton-loader.progress[_ngcontent-%COMP%]:before{background-image:linear-gradient(90deg,#fff0,#fff9,#fff0)}.skeleton-loader.progress-dark[_ngcontent-%COMP%]:before{background-image:linear-gradient(90deg,transparent,rgba(0,0,0,.2),transparent)}.skeleton-loader.pulse[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_pulse 1.5s cubic-bezier(.4,0,.2,1) infinite;animation-delay:.5s}.skeleton-loader.custom-content[_ngcontent-%COMP%]{height:100%;background:none}@media (prefers-reduced-motion: reduce){.skeleton-loader.pulse[_ngcontent-%COMP%], .skeleton-loader.progress-dark[_ngcontent-%COMP%], .skeleton-loader.custom-content[_ngcontent-%COMP%], .skeleton-loader.progress[_ngcontent-%COMP%]:before{animation:none}.skeleton-loader.progress[_ngcontent-%COMP%]:before, .skeleton-loader.progress-dark[_ngcontent-%COMP%], .skeleton-loader.custom-content[_ngcontent-%COMP%]{background-image:none}}@media screen and (min-device-width: 1200px){.skeleton-loader[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none;cursor:wait}}@keyframes _ngcontent-%COMP%_progress{0%{transform:translate3d(-200px,0,0)}to{transform:translate3d(calc(200px + 100vw),0,0)}}@keyframes _ngcontent-%COMP%_pulse{0%{opacity:1}50%{opacity:.4}to{opacity:1}}'],changeDetection:0});let t=r;return t})(),Oe=(()=>{let r=class r{static forRoot(s){return{ngModule:r,providers:[{provide:Ne,useValue:s}]}}};r.\u0275fac=function(d){return new(d||r)},r.\u0275mod=G({type:r}),r.\u0275inj=O({imports:[F]});let t=r;return t})();var M=(t,r)=>({"border-purple-500 text-blue-600":t,"border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700":r});function Re(t,r){t&1&&u(0,"p-skeleton",29)}function $e(t,r){if(t&1){let e=E();i(0,"app-profile-picture",30),h("imageFile",function(d){S(e);let m=p();return P(m.onImageSelected(d))}),n()}if(t&2){let e=p();a("src",e.imageSrc?e.imageSrc:"")}}function Ae(t,r){if(t&1&&(i(0,"div",31)(1,"h2",32),l(2),D(3,"titlecase"),D(4,"titlecase"),n(),i(5,"p",33),l(6),n(),i(7,"div",34),v(),i(8,"svg",35),u(9,"path",36),n(),$(),i(10,"p",37),l(11),n(),i(12,"button",38),l(13,"Change Email"),n()(),i(14,"div",34),v(),i(15,"svg",35),u(16,"path",36),n(),$(),i(17,"p",39),l(18),n()(),i(19,"p",40),l(20),n()()),t&2){let e=p();o(2),B("Dr. ",T(3,6,e.currentDoctor.firstName)," ",T(4,8,e.currentDoctor.lastName),""),o(4),x(e.getSpecializationName(e.currentDoctor.specialization)),o(5),x(e.currentDoctor.email),o(7),x(e.currentDoctor.phone),o(2),x(e.currentDoctor.bio)}}function He(t,r){if(t&1&&(H(0),l(1),D(2,"titlecase"),Z()),t&2){let e=r.$implicit,s=r.last;o(),B(" ",T(2,2,e),"",s?"":", "," ")}}function Ze(t,r){if(t&1&&(i(0,"li",41)(1,"span",42),l(2,"Languages Known:"),n(),i(3,"span",43),c(4,He,3,4,"ng-container",44),n()()),t&2){let e=p();o(4),a("ngForOf",e.currentDoctor.languages)}}function Ke(t,r){if(t&1&&(i(0,"li",45)(1,"span",42),l(2,"Experience:"),n(),i(3,"span",43),l(4),n()()),t&2){let e=p();o(4),q("",e.currentDoctor.experience," years")}}function Ue(t,r){t&1&&u(0,"ngx-skeleton-loader",46)}function Xe(t,r){if(t&1){let e=E();i(0,"button",72),h("click",function(){S(e);let d=p(2);return P(d.toggleeditGeneralDetails())}),l(1," Edit General details "),n()}}function Ye(t,r){if(t&1){let e=E();i(0,"button",72),h("click",function(){S(e);let d=p(2);return P(d.onSubmit())}),l(1," Save General details "),n()}}function Je(t,r){t&1&&(i(0,"span"),l(1,"First Name is required."),n())}function Qe(t,r){t&1&&(i(0,"span"),l(1,"First Name must be at least 2 characters long."),n())}function We(t,r){t&1&&(i(0,"span"),l(1,"First Name cannot exceed 50 characters."),n())}function et(t,r){if(t&1&&(i(0,"div",73),c(1,Je,2,0,"span",74)(2,Qe,2,0,"span",74)(3,We,2,0,"span",74),n()),t&2){let e=p(2);o(),a("ngIf",e.f.firstName.errors==null?null:e.f.firstName.errors.required),o(),a("ngIf",e.f.firstName.errors==null?null:e.f.firstName.errors.minlength),o(),a("ngIf",e.f.firstName.errors==null?null:e.f.firstName.errors.maxlength)}}function tt(t,r){t&1&&(i(0,"span"),l(1,"Last Name is required."),n())}function nt(t,r){t&1&&(i(0,"span"),l(1,"Last Name cannot exceed 50 characters."),n())}function it(t,r){if(t&1&&(i(0,"div",73),c(1,tt,2,0,"span",74)(2,nt,2,0,"span",74),n()),t&2){let e=p(2);o(),a("ngIf",e.f.lastName.errors==null?null:e.f.lastName.errors.required),o(),a("ngIf",e.f.lastName.errors==null?null:e.f.lastName.errors.maxlength)}}function ot(t,r){t&1&&(i(0,"span"),l(1,"Bio is required."),n())}function rt(t,r){t&1&&(i(0,"span"),l(1,"Bio must be at least 8 characters long."),n())}function at(t,r){if(t&1&&(i(0,"div",73),c(1,ot,2,0,"span",74)(2,rt,2,0,"span",74),n()),t&2){let e=p(2);o(),a("ngIf",e.f.bio.errors==null?null:e.f.bio.errors.required),o(),a("ngIf",e.f.bio.errors==null?null:e.f.bio.errors.minlength)}}function st(t,r){t&1&&(i(0,"span"),l(1,"Gender is required."),n())}function lt(t,r){if(t&1&&(i(0,"div",73),c(1,st,2,0,"span",74),n()),t&2){let e=p(2);o(),a("ngIf",e.f.gender.errors==null?null:e.f.gender.errors.required)}}function dt(t,r){if(t&1&&(i(0,"div",75),l(1),D(2,"date"),n()),t&2){let e=p(2);o(),x(T(2,1,e.currentDoctor.dateOfBirth))}}function ct(t,r){t&1&&(i(0,"span",75),l(1,"Date of Birth Not available"),n())}function mt(t,r){t&1&&(i(0,"span"),l(1,"Date of Birth is required."),n())}function pt(t,r){if(t&1&&(i(0,"div",73),c(1,mt,2,0,"span",74),n()),t&2){let e=p(3);o(),a("ngIf",e.f.dateOfBirth.errors==null?null:e.f.dateOfBirth.errors.required)}}function ut(t,r){if(t&1&&(i(0,"dd",65),u(1,"input",76),c(2,pt,2,1,"div",58),n()),t&2){let e=p(2);o(),a("readonly",!e.isEditGeneralDetails),o(),a("ngIf",(e.f.dateOfBirth==null?null:e.f.dateOfBirth.invalid)&&(e.f.dateOfBirth==null?null:e.f.dateOfBirth.touched))}}function gt(t,r){t&1&&(i(0,"span"),l(1,"Phone number is required."),n())}function ft(t,r){t&1&&(i(0,"span"),l(1,"Invalid phone number."),n())}function _t(t,r){if(t&1&&(i(0,"div",73),c(1,gt,2,0,"span",74)(2,ft,2,0,"span",74),n()),t&2){let e=p(2);o(),a("ngIf",e.f.phone.errors==null?null:e.f.phone.errors.required),o(),a("ngIf",e.f.phone.errors==null?null:e.f.phone.errors.invalidPhoneNumber)}}function ht(t,r){t&1&&(i(0,"span"),l(1,"City is required."),n())}function xt(t,r){if(t&1&&(i(0,"div",73),c(1,ht,2,0,"span",74),n()),t&2){let e=p(2);o(),a("ngIf",e.f["address.city"].errors==null?null:e.f["address.city"].errors.required)}}function vt(t,r){t&1&&(i(0,"span"),l(1,"State is required."),n())}function wt(t,r){if(t&1&&(i(0,"div",73),c(1,vt,2,0,"span",74),n()),t&2){let e=p(2);o(),a("ngIf",e.f["address.state"].errors==null?null:e.f["address.state"].errors.required)}}function Ct(t,r){t&1&&(i(0,"span"),l(1,"Zipcode is required."),n())}function yt(t,r){t&1&&(i(0,"span"),l(1,"Zipcode must be 6 characters long."),n())}function bt(t,r){t&1&&(i(0,"span"),l(1,"Zipcode cannot exceed 6 characters."),n())}function St(t,r){if(t&1&&(i(0,"div",73),c(1,Ct,2,0,"span",74)(2,yt,2,0,"span",74)(3,bt,2,0,"span",74),n()),t&2){let e=p(2);o(),a("ngIf",e.f["address.zipcode"].errors==null?null:e.f["address.zipcode"].errors.required),o(),a("ngIf",e.f["address.zipcode"].errors==null?null:e.f["address.zipcode"].errors.minlength),o(),a("ngIf",e.f["address.zipcode"].errors==null?null:e.f["address.zipcode"].errors.maxlength)}}function Pt(t,r){t&1&&(i(0,"span"),l(1,"Country is required."),n())}function Et(t,r){if(t&1&&(i(0,"div",73),c(1,Pt,2,0,"span",74),n()),t&2){let e=p(2);o(),a("ngIf",e.f["address.country"].errors==null?null:e.f["address.country"].errors.required)}}function kt(t,r){if(t&1){let e=E();i(0,"div",47)(1,"h2",48),l(2,"Profile"),n(),c(3,Xe,2,0,"button",49)(4,Ye,2,0,"button",49),n(),i(5,"form",50),h("ngSubmit",function(){S(e);let d=p();return P(d.onSubmit())}),i(6,"div",51)(7,"div",52)(8,"dl",16)(9,"div",53)(10,"dt",54),l(11,"First Name"),n(),i(12,"dd",55)(13,"div",56),u(14,"input",57),c(15,et,4,3,"div",58),n()()(),i(16,"div",53)(17,"dt",54),l(18,"Last Name"),n(),i(19,"dd",55),u(20,"input",59),c(21,it,3,2,"div",58),n()(),i(22,"div",53)(23,"dt",54),l(24,"Bio"),n(),i(25,"dd",55)(26,"textarea",60),l(27),n(),c(28,at,3,2,"div",58),n()(),i(29,"div",53)(30,"dt",54),l(31,"Gender"),n(),i(32,"dd",55),u(33,"input",61),c(34,lt,2,1,"div",58),n()()()(),i(35,"div",52)(36,"dl",16)(37,"div",53)(38,"dt",54),l(39,"Date of Birth"),n(),i(40,"dd",62),c(41,dt,3,3,"div",63)(42,ct,2,0,"span",63),n(),c(43,ut,3,2,"dd",64),n(),i(44,"div",53)(45,"dt",54),l(46,"Phone"),n(),i(47,"dd",65),u(48,"input",66),c(49,_t,3,2,"div",58),n()(),i(50,"div",67)(51,"div",53)(52,"dt",54),l(53,"City"),n(),i(54,"dd",65),u(55,"input",68),c(56,xt,2,1,"div",58),n()(),i(57,"div",53)(58,"dt",54),l(59,"State"),n(),i(60,"dd",65),u(61,"input",69),c(62,wt,2,1,"div",58),n()(),i(63,"div",53)(64,"dt",54),l(65,"Zipcode"),n(),i(66,"dd",65),u(67,"input",70),c(68,St,4,3,"div",58),n()(),i(69,"div",53)(70,"dt",54),l(71,"Country"),n(),i(72,"dd",65),u(73,"input",71),c(74,Et,2,1,"div",58),n()()()()()()()}if(t&2){let e=p();o(3),a("ngIf",!e.isEditGeneralDetails),o(),a("ngIf",e.isEditGeneralDetails),o(),a("formGroup",e.profileForm),o(9),a("readonly",!e.isEditGeneralDetails),o(),a("ngIf",e.f&&e.f.firstName&&(e.f.firstName==null?null:e.f.firstName.invalid)&&(e.f.firstName==null?null:e.f.firstName.touched)),o(5),a("readonly",!e.isEditGeneralDetails),o(),a("ngIf",e.f&&e.f.lastName.invalid&&e.f.lastName.touched),o(5),a("readonly",!e.isEditGeneralDetails),o(),x(e.currentDoctor.bio),o(),a("ngIf",e.f&&e.f.bio.invalid&&e.f.bio.touched),o(5),a("readonly",!e.isEditGeneralDetails),o(),a("ngIf",e.f&&e.f.gender.invalid&&e.f.gender.touched),o(7),a("ngIf",(e.currentDoctor==null?null:e.currentDoctor.dateOfBirth)&&!e.isEditGeneralDetails),o(),a("ngIf",!(e.currentDoctor!=null&&e.currentDoctor.dateOfBirth)&&!e.isEditGeneralDetails),o(),a("ngIf",e.isEditGeneralDetails),o(5),a("readonly",!e.isEditGeneralDetails),o(),a("ngIf",(e.f.phone==null?null:e.f.phone.invalid)&&(e.f.phone==null?null:e.f.phone.touched)),o(6),a("readonly",!e.isEditGeneralDetails),o(),a("ngIf",(e.f["address.city"]==null?null:e.f["address.city"].invalid)&&(e.f["address.city"]==null?null:e.f["address.city"].touched)),o(5),a("readonly",!e.isEditGeneralDetails),o(),a("ngIf",(e.f["address.state"]==null?null:e.f["address.state"].invalid)&&(e.f["address.state"]==null?null:e.f["address.state"].touched)),o(5),a("readonly",!e.isEditGeneralDetails),o(),a("ngIf",(e.f["address.zipcode"]==null?null:e.f["address.zipcode"].invalid)&&(e.f["address.zipcode"]==null?null:e.f["address.zipcode"].touched)),o(5),a("readonly",!e.isEditGeneralDetails),o(),a("ngIf",(e.f["address.country"]==null?null:e.f["address.country"].invalid)&&(e.f["address.country"]==null?null:e.f["address.country"].touched))}}function It(t,r){if(t&1&&(H(0),u(1,"img",83),Z()),t&2){let e=p().$implicit;o(),ne("alt",e),a("src",e,A)}}function Ft(t,r){t&1&&(i(0,"div",84),v(),i(1,"svg",85),u(2,"path",86),n()())}function Dt(t,r){if(t&1&&(i(0,"div",79)(1,"div",80),c(2,It,2,2,"ng-container",81)(3,Ft,3,0,"ng-template",null,0,se),n(),i(5,"div",10)(6,"a",82),l(7,"View Certification"),n()()()),t&2){let e=r.$implicit,s=ie(4),d=p(2);o(2),a("ngIf",d.getFileType(e)==="image")("ngIfElse",s),o(4),a("href",e,A)}}function Tt(t,r){if(t&1&&(i(0,"div",25)(1,"div",77),c(2,Dt,8,3,"div",78),n()()),t&2){let e=p();o(2),a("ngForOf",e.currentDoctor.certifications)}}function Nt(t,r){if(t&1&&(i(0,"div",89)(1,"div",90)(2,"h3",91),l(3),n(),i(4,"p",42),l(5),n()()()),t&2){let e=r.$implicit;o(3),x(e.degree),o(2),B("",e.institution," | ",e.year,"")}}function Mt(t,r){if(t&1&&(i(0,"div",26)(1,"h2",87),l(2,"Education"),n(),c(3,Nt,6,3,"div",88),n()),t&2){let e=p();o(3),a("ngForOf",e.currentDoctor.education)}}function Ot(t,r){t&1&&(v(),i(0,"svg",106),u(1,"path",107),n())}function Gt(t,r){t&1&&(v(),i(0,"svg",108),u(1,"path",109),n())}function Vt(t,r){t&1&&(v(),i(0,"svg",110),u(1,"path",111),n())}function zt(t,r){if(t&1&&(i(0,"div",98)(1,"div",99),c(2,Ot,2,0,"svg",100)(3,Gt,2,0,"svg",101)(4,Vt,2,0,"svg",102),n(),i(5,"div",103)(6,"h3",104),l(7),n(),i(8,"p",105),l(9),n()()()),t&2){let e=r.$implicit;o(2),a("ngIf",e.type==="video"),o(),a("ngIf",e.type==="chat"),o(),a("ngIf",e.type==="clinic"),o(3),q("",e.type," Consultation"),o(2),q("Fee: $",e.fee,"")}}function Lt(t,r){if(t&1&&(i(0,"li"),l(1),n()),t&2){let e=r.$implicit;o(),x(e)}}function qt(t,r){if(t&1&&(i(0,"div",27)(1,"h2",92),l(2,"Consultation Fees"),n(),c(3,zt,10,5,"div",93),i(4,"div",94)(5,"h2",87),l(6,"Guidelines & Policy"),n(),i(7,"ul",95),c(8,Lt,2,1,"li",44),n(),i(9,"div",96)(10,"p",97),l(11,"Appointment Cancellation Policy"),n(),i(12,"p"),l(13),n()()()()),t&2){let e=p();o(3),a("ngForOf",e.currentDoctor.consultationFee),o(5),a("ngForOf",e.guidelines),o(5),x(e.policy)}}function Bt(t,r){t&1&&(i(0,"div",73),l(1," Current password is required. "),n())}function jt(t,r){t&1&&(i(0,"div",73),l(1," New password must be at least 6 characters long. "),n())}function Rt(t,r){t&1&&(i(0,"div",73),l(1," Passwords must match. "),n())}function $t(t,r){if(t&1){let e=E();i(0,"div",28)(1,"h2",112),l(2,"Change Password"),n(),i(3,"form",50),h("ngSubmit",function(){S(e);let d=p();return P(d.changePassword())}),i(4,"div",113)(5,"label",114),l(6,"Current Password"),n(),u(7,"input",115),c(8,Bt,2,0,"div",58),n(),i(9,"div",113)(10,"label",116),l(11,"New Password"),n(),u(12,"input",117),c(13,jt,2,0,"div",58),n(),i(14,"div",113)(15,"label",118),l(16,"Confirm New Password"),n(),u(17,"input",119),c(18,Rt,2,0,"div",58),n(),i(19,"button",120),l(20,"Change Password"),n()()()}if(t&2){let e,s,d,m,f,C,_=p();o(3),a("formGroup",_.changePasswordForm),o(4),z("border-red-500",((e=_.changePasswordForm.get("currentPassword"))==null?null:e.invalid)&&((e=_.changePasswordForm.get("currentPassword"))==null?null:e.touched)),o(),a("ngIf",((s=_.changePasswordForm.get("currentPassword"))==null?null:s.invalid)&&((s=_.changePasswordForm.get("currentPassword"))==null?null:s.touched)),o(4),z("border-red-500",((d=_.changePasswordForm.get("newPassword"))==null?null:d.invalid)&&((d=_.changePasswordForm.get("newPassword"))==null?null:d.touched)),o(),a("ngIf",((m=_.changePasswordForm.get("newPassword"))==null?null:m.invalid)&&((m=_.changePasswordForm.get("newPassword"))==null?null:m.touched)),o(4),z("border-red-500",((f=_.changePasswordForm.get("confirmPassword"))==null?null:f.invalid)&&((f=_.changePasswordForm.get("confirmPassword"))==null?null:f.touched)),o(),a("ngIf",((C=_.changePasswordForm.get("confirmPassword"))==null?null:C.invalid)&&((C=_.changePasswordForm.get("confirmPassword"))==null?null:C.touched)),o(),a("disabled",_.changePasswordForm.invalid)}}function At(t,r){t&1&&(i(0,"div")(1,"p"),l(2,"Don't have a Page for this option !!!"),n()())}var _n=(()=>{let r=class r{constructor(s,d,m,f){this.toastr=s,this.fb=d,this.store=m,this.doctorService=f,this.section="General",this.guidelines=["Arrive 10 minutes before your appointment.","Ensure a stable internet connection for video consultations.","Keep your medical records handy during the consultation.","Maintain privacy and confidentiality during the session.","Be prepared to discuss the patient\u2019s medical history and current symptoms.","Ensure all necessary medical equipment is functioning and accessible.","Respect patient\u2019s time by staying on schedule as much as possible.","Maintain a professional and empathetic demeanor throughout the consultation.","Follow up with patients as required, ensuring they understand their treatment plans.","Document the consultation thoroughly and accurately in the patient\u2019s medical records.","Adhere to all relevant medical guidelines and ethical standards during consultations."],this.policy=`
    If you cancel your appointment, 20% of the amount will be credited to your account. If we cancel, no amount will be received.
  `,this.isLoading=!1,this.initialLoading=!1,this.isEditGeneralDetails=!1,this.imageSrc="",this.initialLoading=!0,this.changePasswordForm=this.fb.group({currentPassword:["",[g.required]],newPassword:["",[g.required,g.minLength(6)]],confirmPassword:["",[g.required]]},{validators:this.passwordMatchValidator})}ngOnInit(){this.store.dispatch(be()),this.store.select(ke).subscribe(s=>{console.log(s),s&&(this.currentDoctor=s,this.imageSrc=this.currentDoctor.profilePic,this.initializeForm(),this.patchFormValues(),this.initialLoading=!1)})}passwordMatchValidator(s){let d=s.get("newPassword"),m=s.get("confirmPassword");return d&&m?d.value===m.value?null:{mismatch:!0}:null}toggleeditGeneralDetails(){this.isEditGeneralDetails=!this.isEditGeneralDetails,this.toggleFormControls(this.isEditGeneralDetails)}initializeForm(){this.profileForm=this.fb.group({firstName:["",[g.required,g.minLength(2),g.maxLength(50)]],lastName:["",[g.required,g.maxLength(50)]],bio:["",[g.required,g.minLength(8)]],gender:["",g.required],dateOfBirth:["",g.required,K.checkSixYaersBefore],phone:["",[g.required,K.phoneNumberValidator]],address:this.fb.group({city:["",g.required],state:["",g.required],zipcode:["",[g.required,g.minLength(6),g.maxLength(6)]],country:["",g.required]})})}get f(){return this.profileForm.controls}patchFormValues(){this.currentDoctor&&this.profileForm.patchValue({firstName:this.currentDoctor.firstName||"",lastName:this.currentDoctor.lastName||"",bio:this.currentDoctor.bio||"",gender:this.currentDoctor.gender||"",dateOfBirth:this.currentDoctor.dateOfBirth||"",email:this.currentDoctor.email||"",phone:this.currentDoctor.phone||"",address:{city:this.currentDoctor.address?.city||"",state:this.currentDoctor.address?.state||"N/A",zipcode:this.currentDoctor.address?.zipcode||"",country:this.currentDoctor.address?.country||""}}),console.log(this.profileForm.value)}changeSection(s){this.section=s}toggleEditGeneralDetails(){this.isEditGeneralDetails=!0}getSpecializationName(s){return typeof s=="object"&&s!==null?s.name:s||"Not available"}onSubmit(){console.log(this.profileForm.value),this.profileForm.valid?(console.log(this.profileForm.value),this.doctorService.editDoctorDetails(this.profileForm.value).subscribe({next:s=>{this.currentDoctor=s.data,this.isEditGeneralDetails=!1,this.toastr.success("Doctor Details Edited SuccessFully")},error:s=>{this.isEditGeneralDetails=!1,this.toastr.error("Error caused while Editing the user")}}),this.isEditGeneralDetails=!1):console.log("Form is invalid")}onImageSelected(s){console.log("Selected image:",s),s&&this.changeProfileImage(s)}changeProfileImage(s){this.doctorService.changeProfilePic(s).subscribe({next:d=>{this.imageSrc=d.data},error:d=>{this.toastr.error(d)}})}toggleFormControls(s){s?this.profileForm.enable():this.profileForm.disable()}getFileType(s){let d=s.split(".").pop()?.toLowerCase();if(d){if(d==="pdf")return"pdf";if(["jpg","jpeg","png","gif","bmp","tiff"].includes(d))return"image"}return"unknown"}changePassword(){if(this.changePasswordForm.valid){let{currentPassword:s,newPassword:d}=this.changePasswordForm.value;console.log("Change Password Form Submitted",{currentPassword:s,newPassword:d})}}};r.\u0275fac=function(d){return new(d||r)(w(Ce),w(ve),w(ye),w(Se))},r.\u0275cmp=b({type:r,selectors:[["app-doctor-settings"]],standalone:!0,features:[oe([]),re],decls:45,vars:27,consts:[["pdfTemplate",""],[1,"flex-1"],[1,"relative","max-w-5xl","mx-auto","md:px-4","xl:px-0"],[1,"pt-6","pb-16"],[1,"px-4","sm:px-6","md:px-0"],[1,"text-3xl","font-extrabold","text-gray-900"],[1,"py-3"],[1,"mt-5","divide-y","divide-gray-200"],[1,"max-w-screen-xl","mx-auto","grid","grid-cols-1","lg:grid-cols-3","gap-8"],[1,"bg-white","shadow-md","rounded-md","overflow-hidden","lg:col-span-1"],[1,"p-4"],[1,"w-full","mx-auto","bg-white","shadow-md","rounded-md","overflow-hidden"],["class","mx-auto","shape","circle","size","10rem",4,"ngIf"],[3,"src","imageFile",4,"ngIf"],["class","p-6",4,"ngIf"],[1,"text-lg","font-semibold","text-gray-800","mb-2"],[1,"divide-y","divide-gray-200"],["class","py-2 flex gap-2 justify-between",4,"ngIf"],["class","py-2 flex justify-between",4,"ngIf"],["count","2","appearance","line",4,"ngIf"],[1,"bg-white","shadow-md","rounded-md","overflow-hidden","lg:col-span-2"],[1,"border-b","border-gray-200"],[1,"-mb-px","flex","space-x-8"],[1,"hover:cursor-pointer","whitespace-nowrap","py-4","px-1","border-b-2","font-medium","text-sm",3,"click","ngClass"],[1,"p-2"],[1,"flex","flex-wrap","justify-center"],[1,"bg-white","p-6","rounded-lg","shadow-md"],[1,"bg-white","p-3","rounded-lg","shadow-md"],[1,"w-full","mx-auto","p-8","bg-white","rounded-lg","shadow-lg"],["shape","circle","size","10rem",1,"mx-auto"],[3,"imageFile","src"],[1,"p-6"],[1,"text-xl","font-bold","text-gray-800","mb-2"],[1,"text-sm","text-gray-600","mb-4"],[1,"flex","items-center","text-gray-600","mb-4"],["fill","none","viewBox","0 0 24 24","stroke","currentColor",1,"h-5","w-5","mr-2"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M12 6v6m0 0v6m0-6h6m-6 0H6"],["id","doctor-email",1,"text-sm"],["id","change-email-btn",1,"ml-4","text-blue-500","hover:underline"],[1,"text-sm"],[1,"text-sm","text-gray-700"],[1,"py-2","flex","gap-2","justify-between"],[1,"text-sm","text-gray-600"],[1,"text-sm","font-medium","text-gray-800"],[4,"ngFor","ngForOf"],[1,"py-2","flex","justify-between"],["count","2","appearance","line"],[1,"flex","justify-between","items-center","p-6","border-b","rounded-md","border-gray-700"],[1,"text-lg","leading-6","font-medium","text-gray-900"],["class","bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded",3,"click",4,"ngIf"],[3,"ngSubmit","formGroup"],[1,"grid","grid-cols-1","sm:grid-cols-2","gap-y-6"],[1,"p-10"],[1,"py-4","sm:py-5"],[1,"text-sm","font-medium","text-gray-500"],[1,"mt-1","flex","text-sm","text-gray-900"],[1,"group","relative","w-72","md:w-80","lg:w-96"],["type","text","formControlName","firstName",1,"peer","h-10","w-full","rounded-md","bg-gray-50","px-4","font-thin","outline-none","drop-shadow-sm","transition-all","duration-200","ease-in-out","focus:bg-white","focus:shadow-lg","focus:shadow-blue-400",3,"readonly"],["class","text-red-500 text-sm mt-1",4,"ngIf"],["type","text","formControlName","lastName",1,"peer","h-10","w-full","rounded-md","bg-gray-50","px-4","font-thin","outline-none","drop-shadow-sm","transition-all","duration-200","ease-in-out","focus:bg-white","focus:shadow-lg","focus:shadow-blue-400",3,"readonly"],["rows","7","formControlName","bio",1,"peer","h-10","w-full","rounded-md","bg-gray-50","px-4","font-thin","outline-none","drop-shadow-sm","transition-all","duration-200","ease-in-out","focus:bg-white","focus:shadow-lg","focus:shadow-blue-400",3,"readonly"],["formControlName","gender","type","text",1,"peer","h-10","w-full","rounded-md","bg-gray-50","px-4","font-thin","outline-none","drop-shadow-sm","transition-all","duration-200","ease-in-out","focus:bg-white","focus:shadow-lg","focus:shadow-blue-400",3,"readonly"],[1,"mt-1","text-sm","text-gray-900","pt-2"],["class","h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:shadow-lg focus:shadow-blue-400",4,"ngIf"],["class","mt-1 text-sm text-gray-900",4,"ngIf"],[1,"mt-1","text-sm","text-gray-900"],["formControlName","phone","type","tel",1,"h-10","w-full","rounded-md","bg-gray-50","px-4","font-thin","outline-none","drop-shadow-sm","transition-all","duration-200","ease-in-out","focus:bg-white","focus:shadow-lg","focus:shadow-blue-400",3,"readonly"],["formGroupName","address"],["formControlName","city","type","text",1,"h-10","w-full","rounded-md","bg-gray-50","px-4","font-thin","outline-none","drop-shadow-sm","transition-all","duration-200","ease-in-out","focus:bg-white","focus:shadow-lg","focus:shadow-blue-400",3,"readonly"],["formControlName","state","type","text",1,"h-10","w-full","rounded-md","bg-gray-50","px-4","font-thin","outline-none","drop-shadow-sm","transition-all","duration-200","ease-in-out","focus:bg-white","focus:shadow-lg","focus:shadow-blue-400",3,"readonly"],["formControlName","zipcode","type","text",1,"h-10","w-full","rounded-md","bg-gray-50","px-4","font-thin","outline-none","drop-shadow-sm","transition-all","duration-200","ease-in-out","focus:bg-white","focus:shadow-lg","focus:shadow-blue-400",3,"readonly"],["formControlName","country","type","text",1,"h-10","w-full","rounded-md","bg-gray-50","px-4","font-thin","outline-none","drop-shadow-sm","transition-all","duration-200","ease-in-out","focus:bg-white","focus:shadow-lg","focus:shadow-blue-400",3,"readonly"],[1,"bg-blue-500","hover:bg-blue-600","text-white","font-bold","py-2","px-4","rounded",3,"click"],[1,"text-red-500","text-sm","mt-1"],[4,"ngIf"],[1,"h-10","w-full","rounded-md","bg-gray-50","px-4","font-thin","outline-none","drop-shadow-sm","transition-all","duration-200","ease-in-out","focus:bg-white","focus:shadow-lg","focus:shadow-blue-400"],["type","date","formControlName","dateOfBirth",1,"h-10","w-full","rounded-md","bg-gray-50","px-4","font-thin","outline-none","drop-shadow-sm","transition-all","duration-200","ease-in-out","focus:bg-white","focus:shadow-lg","focus:shadow-blue-400",3,"readonly"],[1,"grid","grid-cols-1","sm:grid-cols-2","lg:grid-cols-3","gap-6","p-4"],["class","p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300",4,"ngFor","ngForOf"],[1,"p-4","bg-white","rounded-lg","shadow-md","hover:shadow-lg","transition-shadow","duration-300"],[1,"relative"],[4,"ngIf","ngIfElse"],["target","_blank",1,"mt-2","inline-block","text-blue-500","hover:text-blue-700","hover:underline",3,"href"],[1,"w-full","h-48","object-cover","rounded-t-lg",3,"src","alt"],[1,"flex","items-center","justify-center","w-full","h-48","bg-gray-200","rounded-t-lg"],["fill","none","stroke","currentColor","viewBox","0 0 24 24","xmlns","http://www.w3.org/2000/svg",1,"w-16","h-16","text-gray-500"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM14 2v6h6M16 13H8m0 4h8M8 9h4"],[1,"text-2xl","font-semibold","text-gray-800","mb-4"],["class","mb-6",4,"ngFor","ngForOf"],[1,"mb-6"],[1,"p-4","bg-gray-100","rounded-lg"],[1,"text-xl","font-bold","text-gray-900"],[1,"text-2xl","font-semibold","text-gray-800","mb-2"],["class","flex items-center mb-2 p-4 bg-gray-100 rounded-lg shadow-sm",4,"ngFor","ngForOf"],[1,"mt-8","bg-gray-50","p-6","rounded-lg","shadow-md"],[1,"list-disc","pl-5","text-gray-700","mb-4"],["role","alert",1,"bg-yellow-100","border-l-4","border-yellow-500","text-yellow-700","p-4"],[1,"font-bold"],[1,"flex","items-center","mb-2","p-4","bg-gray-100","rounded-lg","shadow-sm"],[1,"flex-shrink-0"],["class","w-10 h-10 text-blue-500","fill","none","stroke","currentColor","viewBox","0 0 24 24","xmlns","http://www.w3.org/2000/svg",4,"ngIf"],["class","w-10 h-10 text-green-500","fill","none","stroke","currentColor","viewBox","0 0 24 24","xmlns","http://www.w3.org/2000/svg",4,"ngIf"],["class","w-10 h-10 text-red-500","fill","none","stroke","currentColor","viewBox","0 0 24 24","xmlns","http://www.w3.org/2000/svg",4,"ngIf"],[1,"ml-4"],[1,"text-lg","font-semibold","text-gray-800","capitalize"],[1,"text-gray-600"],["fill","none","stroke","currentColor","viewBox","0 0 24 24","xmlns","http://www.w3.org/2000/svg",1,"w-10","h-10","text-blue-500"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M15 10l4.553-2.276A2 2 0 0122 9.659v4.682a2 2 0 01-2.447 1.934L15 14m-4-4v4m4 0a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2h8a2 2 0 012 2z"],["fill","none","stroke","currentColor","viewBox","0 0 24 24","xmlns","http://www.w3.org/2000/svg",1,"w-10","h-10","text-green-500"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M7 8h10M7 12h4m1 8a9 9 0 110-18 9 9 0 010 18zm0 0v-4a3 3 0 00-3-3H7a3 3 0 00-3 3v4h14z"],["fill","none","stroke","currentColor","viewBox","0 0 24 24","xmlns","http://www.w3.org/2000/svg",1,"w-10","h-10","text-red-500"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M3 7h18M4 21h16a1 1 0 001-1V7a1 1 0 00-1-1h-4a2 2 0 01-4 0H8a2 2 0 01-4 0H4a1 1 0 00-1 1v13a1 1 0 001 1zm10-3v-4a2 2 0 10-4 0v4h4z"],[1,"text-2xl","font-semibold","text-gray-800","mb-6"],[1,"mb-4"],["for","currentPassword",1,"block","text-sm","font-medium","text-gray-700"],["type","password","id","currentPassword","formControlName","currentPassword",1,"mt-1","block","w-full","px-4","py-2","border","rounded-md","shadow-sm","focus:ring-blue-500","focus:border-blue-500","sm:text-sm"],["for","newPassword",1,"block","text-sm","font-medium","text-gray-700"],["type","password","id","newPassword","formControlName","newPassword",1,"mt-1","block","w-full","px-4","py-2","border","rounded-md","shadow-sm","focus:ring-blue-500","focus:border-blue-500","sm:text-sm"],["for","confirmPassword",1,"block","text-sm","font-medium","text-gray-700"],["type","password","id","confirmPassword","formControlName","confirmPassword",1,"mt-1","block","w-full","px-4","py-2","border","rounded-md","shadow-sm","focus:ring-blue-500","focus:border-blue-500","sm:text-sm"],["type","submit",1,"w-full","bg-blue-500","text-white","py-2","px-4","rounded-md","hover:bg-blue-600","focus:ring-2","focus:ring-offset-2","focus:ring-blue-500",3,"disabled"]],template:function(d,m){if(d&1&&(i(0,"main",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"h1",5),l(5,"Profile Settings"),n()(),i(6,"div",4)(7,"div",6)(8,"div",7)(9,"div",8)(10,"div",9)(11,"div",10)(12,"div",11),c(13,Re,1,0,"p-skeleton",12)(14,$e,1,1,"app-profile-picture",13)(15,Ae,21,10,"div",14),n()(),i(16,"div",10)(17,"div",10)(18,"h3",15),l(19,"Languages Known"),n(),i(20,"ul",16),c(21,Ze,5,1,"li",17)(22,Ke,5,1,"li",18),n(),c(23,Ue,1,0,"ngx-skeleton-loader",19),n()()(),i(24,"div",20)(25,"div",10)(26,"div",21)(27,"nav",22)(28,"a",23),h("click",function(){return m.changeSection("General")}),l(29," General "),n(),i(30,"a",23),h("click",function(){return m.changeSection("Certifications")}),l(31," Certifications "),n(),i(32,"a",23),h("click",function(){return m.changeSection("Education")}),l(33," Education "),n(),i(34,"a",23),h("click",function(){return m.changeSection("Fee")}),l(35,"Consultation Fee "),n(),i(36,"a",23),h("click",function(){return m.changeSection("changePassword")}),l(37,"Change Password "),n()()()(),i(38,"div",24),c(39,kt,75,25)(40,Tt,3,1,"div",25)(41,Mt,4,1,"div",26)(42,qt,14,3,"div",27)(43,$t,21,11,"div",28)(44,At,3,0,"div"),n()()()()()()()()()),d&2){let f;o(13),a("ngIf",m.initialLoading),o(),a("ngIf",!m.initialLoading),o(),a("ngIf",!m.initialLoading),o(6),a("ngIf",!m.initialLoading),o(),a("ngIf",!m.initialLoading),o(),a("ngIf",m.initialLoading),o(5),a("ngClass",k(12,M,m.section==="General",m.section!=="General")),o(2),a("ngClass",k(15,M,m.section==="Certifications",m.section!=="Certifications")),o(2),a("ngClass",k(18,M,m.section==="Education",m.section!=="Education")),o(2),a("ngClass",k(21,M,m.section==="Fee",m.section!=="Fee")),o(2),a("ngClass",k(24,M,m.section==="changePassword",m.section!=="changePassword")),o(3),L((f=m.section)==="General"?39:f==="Certifications"?40:f==="Education"?41:f==="Fee"?42:f==="changePassword"?43:44)}},dependencies:[we,fe,pe,ue,ge,_e,xe,he,F,I,le,de,ce,me,Oe,Me,Ee,Te,De,Pe],styles:["ngx-skeleton-loader[_ngcontent-%COMP%]{display:block;margin-bottom:1rem}"]});let t=r;return t})();export{_n as SettingsPageComponent};