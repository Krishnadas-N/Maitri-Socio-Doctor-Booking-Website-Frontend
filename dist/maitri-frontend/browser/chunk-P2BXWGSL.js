import{a as Z,b as ee}from"./chunk-WOWYMOJ6.js";import{b as te}from"./chunk-3U6AHVRM.js";import{t as q,w as W,z as Y}from"./chunk-ZPUWZR45.js";import{b as K,c as Q}from"./chunk-2G4VONH3.js";import"./chunk-ORAXOBPL.js";import{A as H,p as G,v as L}from"./chunk-MZNBSL5Q.js";import{a as X}from"./chunk-DKDZJVTM.js";import"./chunk-Q62XEUEG.js";import{e as w,f as I,i as J}from"./chunk-OEBG5XYA.js";import"./chunk-7B4WEPGY.js";import{n as $}from"./chunk-CFIRI2J5.js";import{a as R}from"./chunk-TGHWUEU6.js";import"./chunk-J7J3MBJD.js";import"./chunk-RXVUTR5D.js";import{Aa as V,Hc as U,Jc as j,Kb as u,Kc as E,La as f,Ma as _,Mb as c,Wb as n,Xb as i,Yb as S,Zb as v,_b as b,ac as x,dc as D,fc as d,kd as A,ld as O,mb as P,nb as B,oc as y,pc as o,qc as p,rc as g,sb as l,sc as T,sd as M,tb as C,ud as z,yc as N,zc as F}from"./chunk-MMBRV4NV.js";function ne(t,s){if(t&1&&(n(0,"a",24),o(1),i()),t&2){let e=d();l(),g(" ",((e.userDetails==null?null:e.userDetails.firstName)||(e.DoctorDetails==null?null:e.DoctorDetails.firstName)||"")+((e.userDetails==null||e.userDetails.lastName==null?null:e.userDetails.lastName.slice(1))||(e.DoctorDetails==null||e.DoctorDetails.lastName==null?null:e.DoctorDetails.lastName.slice(1))||"")," ")}}function oe(t,s){if(t&1&&(v(0),o(1),b()),t&2){let e=d();l(),g(" ",e.DoctorDetails.bio," ")}}function le(t,s){t&1&&o(0," Not Available ")}function re(t,s){if(t&1){let e=x();n(0,"button",28),D("click",function(){f(e);let r=d(2);return _(r.toggleBlock())}),o(1,"Block User"),i()}}function ae(t,s){if(t&1){let e=x();n(0,"button",29),D("click",function(){f(e);let r=d(2);return _(r.toggleBlock())}),o(1,"Unblock User"),i()}}function se(t,s){if(t&1&&(n(0,"div",25),u(1,re,2,0,"button",26)(2,ae,2,0,"button",27),i()),t&2){let e=d();l(),c("ngIf",e.userDetails&&(e.userDetails==null?null:e.userDetails.isBlocked)===!1),l(),c("ngIf",e.userDetails&&(e.userDetails==null?null:e.userDetails.isBlocked)===!0)}}function ce(t,s){if(t&1){let e=x();n(0,"button",28),D("click",function(){f(e);let r=d(2);return _(r.toggleBlock())}),o(1,"Block Doctor"),i()}}function de(t,s){if(t&1){let e=x();n(0,"button",29),D("click",function(){f(e);let r=d(2);return _(r.toggleBlock())}),o(1,"Unblock Doctor"),i()}}function me(t,s){t&1&&(n(0,"button",31),o(1," Verified Profile "),i())}function ue(t,s){if(t&1){let e=x();n(0,"button",28),D("click",function(){f(e);let r=d(3);return _(r.verifyProfile())}),o(1," Not Verified "),i()}}function pe(t,s){if(t&1&&u(0,ue,2,0,"button",26),t&2){let e=d(2);c("ngIf",e.DoctorDetails&&!(e.DoctorDetails!=null&&e.DoctorDetails.isProfileComplete))}}function fe(t,s){if(t&1&&(n(0,"div",25),u(1,ce,2,0,"button",26)(2,de,2,0,"button",27)(3,me,2,0,"button",30)(4,pe,1,1,"ng-template",null,2,E),i()),t&2){let e=y(5),a=d();l(),c("ngIf",a.DoctorDetails&&!(a.DoctorDetails!=null&&a.DoctorDetails.isBlocked)),l(),c("ngIf",a.DoctorDetails&&(a.DoctorDetails==null?null:a.DoctorDetails.isBlocked)),l(),c("ngIf",a.DoctorDetails&&(a.DoctorDetails==null?null:a.DoctorDetails.isProfileComplete))("ngIfElse",e)}}function _e(t,s){if(t&1&&(n(0,"div",33)(1,"div",34),o(2,"User Name"),i(),n(3,"div",35),o(4),i()()),t&2){let e=d(2);l(4),p(e.userDetails.username)}}function De(t,s){if(t&1&&(n(0,"div",33)(1,"div",34),o(2,"Contact No."),i(),n(3,"div",35),o(4),i()()),t&2){let e=d(2);l(4),p(e.DoctorDetails.phone||"")}}function xe(t,s){if(t&1&&(n(0,"div",33)(1,"div",34),o(2,"Address"),i(),n(3,"div",35),o(4),i()()),t&2){let e=d(2);l(4),T("",e.DoctorDetails.address.state," ",e.DoctorDetails.address.city,"")}}function ge(t,s){if(t&1&&(n(0,"div",33)(1,"div",34),o(2,"Location"),i(),n(3,"div",35),o(4),i()()),t&2){let e=d(2);l(4),T("",e.DoctorDetails.address.zipcode," ",e.DoctorDetails.address.country,"")}}function ve(t,s){if(t&1&&(n(0,"div",32)(1,"div",33)(2,"div",34),o(3,"First Name"),i(),n(4,"div",35),o(5),i()(),n(6,"div",33)(7,"div",34),o(8,"Last Name"),i(),n(9,"div",35),o(10),i()(),u(11,_e,5,1,"div",36),n(12,"div",33)(13,"div",34),o(14,"Gender"),i(),n(15,"div",35),o(16),i()(),u(17,De,5,1,"div",36)(18,xe,5,2,"div",36)(19,ge,5,2,"div",36),n(20,"div",33)(21,"div",34),o(22,"Email."),i(),n(23,"div",35)(24,"a",37),o(25),i()()(),n(26,"div",33)(27,"div",34),o(28,"Date of Birth"),i(),n(29,"div",35),o(30),U(31,"date"),i()()()),t&2){let e=d();l(5),p(((e.userDetails==null?null:e.userDetails.firstName)||(e.DoctorDetails==null?null:e.DoctorDetails.firstName)||"").charAt(0).toUpperCase()+((e.userDetails==null?null:e.userDetails.firstName)||(e.DoctorDetails==null?null:e.DoctorDetails.firstName)||"").slice(1)),l(5),p(((e.userDetails==null?null:e.userDetails.lastName)||(e.DoctorDetails==null?null:e.DoctorDetails.lastName)||"").charAt(0).toUpperCase()+((e.userDetails==null?null:e.userDetails.lastName)||(e.DoctorDetails==null?null:e.DoctorDetails.lastName)||"").slice(1)),l(),c("ngIf",e.userDetails),l(5),p((e.userDetails==null?null:e.userDetails.gender)||(e.DoctorDetails==null?null:e.DoctorDetails.gender)||""),l(),c("ngIf",e.DoctorDetails),l(),c("ngIf",e.DoctorDetails),l(),c("ngIf",e.DoctorDetails),l(6),p((e.userDetails==null?null:e.userDetails.email)||(e.DoctorDetails==null?null:e.DoctorDetails.email)||""),l(5),g(" ",e.userDetails!=null&&e.userDetails.dateOfBirth||e.DoctorDetails!=null&&e.DoctorDetails.dateOfBirth?j(31,9,(e.userDetails==null?null:e.userDetails.dateOfBirth)||(e.DoctorDetails==null?null:e.DoctorDetails.dateOfBirth),"dd/MM/yyyy"):"No date of birth available"," ")}}function be(t,s){if(t&1){let e=x();n(0,"button",38),D("click",function(){f(e);let r=d();return _(r.showFullDetailsToggle=!r.showFullDetailsToggle)}),o(1,"Show Full Information"),i()}}function he(t,s){if(t&1&&(n(0,"div")(1,"div",53)(2,"a",54),o(3,"View PDF"),i(),S(4,"iframe",55),i()()),t&2){let e=s.$implicit;l(2),c("href",e,P),l(2),c("src",e,B)}}function ye(t,s){if(t&1&&(n(0,"div",52),u(1,he,5,2,"div",51),i()),t&2){let e=d(2);l(),c("ngForOf",e.DoctorDetails.certifications)}}function Ce(t,s){if(t&1&&(v(0),o(1),b()),t&2){let e=d(2);l(),g(" ",e.DoctorDetails.consultationFee?e.DoctorDetails.consultationFee:"Not Available"," ")}}function Se(t,s){t&1&&(v(0),o(1," Not Available "),b())}function Ee(t,s){if(t&1&&(v(0),n(1,"div",33)(2,"div",34),o(3,"Day of Week"),i(),n(4,"div",35),o(5),i()(),n(6,"div",33)(7,"div",34),o(8,"Start Time"),i(),n(9,"div",35),o(10),i()(),n(11,"div",33)(12,"div",34),o(13,"End Time"),i(),n(14,"div",35),o(15),i()(),b()),t&2){let e=s.$implicit;l(5),p(e.dayOfWeek),l(5),p(e.startTime),l(5),p(e.endTime)}}function we(t,s){if(t&1&&(v(0),u(1,Ee,16,3,"ng-container",51),b()),t&2){let e=d(2);l(),c("ngForOf",e.DoctorDetails.availability)}}function Ie(t,s){t&1&&o(0," Not Available ")}function ke(t,s){if(t&1&&(v(0),n(1,"div",33)(2,"div",34),o(3,"Degree"),i(),n(4,"div",35),o(5),i()(),n(6,"div",33)(7,"div",34),o(8,"Institution"),i(),n(9,"div",35),o(10),i()(),n(11,"div",33)(12,"div",34),o(13,"Year"),i(),n(14,"div",35),o(15),i()(),b()),t&2){let e=s.$implicit;l(5),p(e.degree),l(5),p(e.institution),l(5),p(e.year)}}function Pe(t,s){if(t&1){let e=x();n(0,"div",39)(1,"div",40)(2,"h3",41),o(3,"Full Details"),i(),n(4,"h4",42),D("click",function(){f(e);let r=d();return _(r.showCertifications=!r.showCertifications)}),o(5,"Show Certifications"),i()(),u(6,ye,2,1,"div",43),n(7,"div",44)(8,"div",45)(9,"dl",46)(10,"div",47)(11,"dt",48),o(12," Consultation Fee Excepted per Patient "),i(),n(13,"dd",49),u(14,Ce,2,1,"ng-container",50)(15,Se,2,0,"ng-container",50),i()(),n(16,"div",47)(17,"dt",48),o(18," Availablity "),i(),n(19,"dd",49),u(20,we,2,1,"ng-container",12)(21,Ie,1,0,"ng-template",null,3,E),i()(),n(23,"div",47)(24,"dt",48),o(25," Maximum Patients Per Day "),i(),n(26,"dd",49),o(27),i()(),n(28,"div",47)(29,"dt",48),o(30," Languages known "),i(),n(31,"dd",49),o(32),i()()()(),n(33,"div",45)(34,"dl",46)(35,"div",47)(36,"dt",48),o(37," specialization "),i(),n(38,"dd",49),o(39),i()(),n(40,"div",47)(41,"dt",48),o(42," Eductation "),i(),n(43,"dd",49),u(44,ke,16,3,"ng-container",51),i()(),n(45,"div",47)(46,"dt",48),o(47," Experience "),i(),n(48,"dd",49),o(49),i()()()()()()}if(t&2){let e,a=y(22),r=d();l(6),c("ngIf",r.showCertifications),l(8),c("ngIf",(r.DoctorDetails==null?null:r.DoctorDetails.consultationFee)!==void 0&&(r.DoctorDetails==null?null:r.DoctorDetails.consultationFee)!==null),l(),c("ngIf",(r.DoctorDetails==null?null:r.DoctorDetails.consultationFee)===void 0||(r.DoctorDetails==null?null:r.DoctorDetails.consultationFee)===null),l(5),c("ngIf",r.DoctorDetails.availability&&r.DoctorDetails.availability.length>0)("ngIfElse",a),l(7),g(" ",r.DoctorDetails.maxPatientsPerDay," "),l(5),g(" ",r.DoctorDetails.languages||"Not Available"," "),l(7),g(" ",(e=r.doctorSpecialization==null?null:r.doctorSpecialization.name)!==null&&e!==void 0?e:"Not Available"," "),l(5),c("ngForOf",(r.DoctorDetails==null?null:r.DoctorDetails.education)||(r.DoctorDetails==null?null:r.DoctorDetails.education)),l(5),g(" ",r.DoctorDetails.experience||"Not Available"," ")}}var We=(()=>{let s=class s{constructor(a,r,m,h){this.route=a,this.store=r,this.confirmationService=m,this.messageService=h,this.position="center",this.userDetails=null,this.DoctorDetails=null,this.showFullDetailsToggle=!1,this.showCertifications=!1}ngOnInit(){this.route.url.subscribe(a=>{if(a.length>1){console.log("User Type is : ",a);let r=a[0].path,m=a[1].path;r==="doctors"?(this.userType="doctor",this.loadDoctorDetails(m),this.loadDoctor()):r==="users"&&(this.userType="user",this.loadUserDetails(m),this.loadUser())}})}loadUser(){this.store.select(H).subscribe(a=>{this.userDetails=a,console.log(this.userDetails,"log from user details in profile")})}loadDoctor(){this.store.select(te).subscribe(a=>{this.DoctorDetails=a,this.doctorSpecialization=a?.specialization})}loadUserDetails(a){this.store.dispatch(L({id:a}))}loadDoctorDetails(a){this.store.dispatch(Y({id:a}))}toggleBlockStatus(){console.log(this.userDetails?._id,this.userType),this.userType==="user"&&this.userDetails&&this.userDetails?._id?(console.log(this.userDetails._id),this.store.dispatch(G({id:this.userDetails._id})),this.loadUser()):this.userType==="doctor"&&this.DoctorDetails&&this.DoctorDetails._id&&(this.store.dispatch(q({id:this.DoctorDetails._id})),this.loadDoctor())}toggleBlock(){console.log("cliked block");let a=this.DoctorDetails?this.DoctorDetails.isBlocked?"Unblock":"Block":this.userDetails&&this.userDetails.isBlocked?"Unblock":"Block";this.confirmationService.confirm({message:`Are you sure you want to ${a} the User?`,header:"Confirmation",icon:"pi pi-info-circle",acceptIcon:"none",rejectIcon:"none",rejectButtonStyleClass:"p-button-text",accept:()=>{this.messageService.add({severity:"info",summary:"Confirmed",detail:"Request submitted"}),this.toggleBlockStatus()},reject:()=>{this.messageService.add({severity:"error",summary:"Rejected",detail:"Process incomplete",life:3e3})},key:"positionDialog"})}verifyProfile(){this.confirmationService.confirm({message:"Are you sure you want to To Verify the Doctor?",header:"Confirmation",icon:"pi pi-info-circle",acceptIcon:"none",rejectIcon:"none",rejectButtonStyleClass:"p-button-text",accept:()=>{this.messageService.add({severity:"info",summary:"Confirmed",detail:"Request submitted"}),this.verifyDoctorProfile()},reject:()=>{this.messageService.add({severity:"error",summary:"Rejected",detail:"Process incomplete",life:3e3})},key:"positionDialog"})}verifyDoctorProfile(){this.DoctorDetails?._id&&this.store.dispatch(W({id:this.DoctorDetails?._id}))}};s.\u0275fac=function(r){return new(r||s)(C(R),C($),C(w),C(I))},s.\u0275cmp=V({type:s,selectors:[["app-profile-Component"]],standalone:!0,features:[N([w,I]),F],decls:25,vars:11,consts:[["notDoctor",""],["cd",""],["notVerified",""],["notAvailable",""],[1,"bg-white","m-2","text-black","min-h-screen"],[1,"container","m-2","py-2","mb-4"],[1,"flex","flex-col","border-2","border-dashed","border-gray-400","lg:flex-row","items-center","justify-center","gap-2","lg:justify-between","me-3"],[1,"p-5","border","rounded","text-center","text-gray-500","max-w-sm"],["alt","",1,"w-32","h-32","rounded-full","mx-auto",3,"src"],[1,"text-sm","mt-5"],["class","font-medium leading-none text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out",4,"ngIf"],[1,"mt-2","text-sm","text-gray-900"],[4,"ngIf","ngIfElse"],["class","ms-5 flex  justify-center gap-2",4,"ngIf"],["class","ms-5  flex  justify-center gap-2",4,"ngIf"],[1,"w-full","border-dashed","border-gray-400","md:w-9/12","mx-2","h-64"],[1,"bg-white","shadow-sm","rounded-sm"],[1,"text-gray-700"],["class","grid md:grid-cols-2 text-sm",4,"ngIf"],["class","block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4",3,"click",4,"ngIf"],["class","container border-2 border-dashed border-gray-400 mt-sm-3",4,"ngIf"],["icon","pi pi-check","key","positionDialog",3,"styleClass","position"],["type","button","pButton","","icon","pi pi-times","label","Cancel",1,"bg-gray-300","text-gray-800","px-4","py-2","rounded-md","shadow-md","hover:bg-gray-400","focus:outline-none","focus:ring-2","focus:ring-gray-500","focus:ring-opacity-50",3,"click"],["type","button","pButton","","icon","pi pi-check","label","Confirm",1,"ms-2","bg-blue-500","text-white","px-4","py-2","rounded-md","shadow-md","hover:bg-blue-600","focus:outline-none","focus:ring-2","focus:ring-blue-500","focus:ring-opacity-50",3,"click"],[1,"font-medium","leading-none","text-gray-900","hover:text-indigo-600","transition","duration-500","ease-in-out"],[1,"ms-5","flex","justify-center","gap-2"],["class","bg-red-600 text-white px-6 py-3 rounded-md shadow-md mb-4 lg:mb-0 lg:mr-4",3,"click",4,"ngIf"],["class","bg-green-500 text-white px-6 py-3 rounded-md shadow-md mb-4 lg:mb-0 lg:mr-4",3,"click",4,"ngIf"],[1,"bg-red-600","text-white","px-6","py-3","rounded-md","shadow-md","mb-4","lg:mb-0","lg:mr-4",3,"click"],[1,"bg-green-500","text-white","px-6","py-3","rounded-md","shadow-md","mb-4","lg:mb-0","lg:mr-4",3,"click"],["class","bg-green-500 text-white px-6 py-3 rounded-md shadow-md mb-4 lg:mb-0 lg:mr-4 ","disabled","",4,"ngIf","ngIfElse"],["disabled","",1,"bg-green-500","text-white","px-6","py-3","rounded-md","shadow-md","mb-4","lg:mb-0","lg:mr-4"],[1,"grid","md:grid-cols-2","text-sm"],[1,"grid","grid-cols-2"],[1,"px-4","py-2","font-semibold"],[1,"px-4","py-2"],["class","grid grid-cols-2",4,"ngIf"],["href","mailto:jane@example.com",1,"text-blue-800"],[1,"block","w-full","text-blue-800","text-sm","font-semibold","rounded-lg","hover:bg-gray-100","focus:outline-none","focus:shadow-outline","focus:bg-gray-100","hover:shadow-xs","p-3","my-4",3,"click"],[1,"container","border-2","border-dashed","border-gray-400","mt-sm-3"],[1,"flex","justify-between"],[1,"font-bold","text-xl","mb-5","px-5","pt-5","bg-white","rounded-t"],[1,"font-bold","text-xl","mb-5","px-5","pt-5","bg-white","rounded-t","hover:cursor-pointer",3,"click"],["class","container mx-auto mt-10 flex gap-3",4,"ngIf"],[1,"grid","grid-cols-2","gap-4","px-5"],[1,"border-t","border-gray-200","px-4","py-5","sm:p-0"],[1,"sm:divide-y","sm:divide-gray-200"],[1,"py-3","sm:py-5","sm:grid","sm:grid-cols-3","sm:gap-4","sm:px-6"],[1,"text-sm","font-medium","text-gray-500"],[1,"mt-1","text-sm","text-gray-900","sm:mt-0","sm:col-span-2"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"container","mx-auto","mt-10","flex","gap-3"],[1,"ms-4"],["target","_blank",1,"bg-blue-500","hover:bg-blue-700","text-white","font-bold","py-2","px-4","rounded","inline-block","mb-4",3,"href"],[1,"w-full","h-1/3",3,"src"]],template:function(r,m){if(r&1){let h=x();n(0,"section",4)(1,"div",5)(2,"div",6)(3,"div",7),S(4,"img",8),n(5,"div",9),u(6,ne,2,1,"a",10),i(),n(7,"p",11),u(8,oe,2,1,"ng-container",12)(9,le,1,0,"ng-template",null,0,E),i(),u(11,se,3,2,"div",13)(12,fe,6,4,"div",14),i(),n(13,"div",15)(14,"div",16)(15,"div",17),u(16,ve,32,12,"div",18),i(),u(17,be,2,0,"button",19),i()()()(),u(18,Pe,50,10,"div",20),i(),S(19,"p-toast"),n(20,"p-confirmDialog",21,1)(22,"p-footer")(23,"button",22),D("click",function(){f(h);let k=y(21);return _(k.reject())}),i(),n(24,"button",23),D("click",function(){f(h);let k=y(21);return _(k.accept())}),i()()()}if(r&2){let h=y(10);l(4),c("src",(m.userDetails==null?null:m.userDetails.profilePic)||(m.DoctorDetails==null?null:m.DoctorDetails.profilePic)||"fallback-image-url",P),l(2),c("ngIf",m.userDetails||m.DoctorDetails),l(2),c("ngIf",m.DoctorDetails&&m.DoctorDetails.bio)("ngIfElse",h),l(3),c("ngIf",m.userDetails),l(),c("ngIf",m.DoctorDetails),l(4),c("ngIf",m.userDetails||m.DoctorDetails),l(),c("ngIf",!m.userDetails),l(),c("ngIf",m.DoctorDetails&&m.showFullDetailsToggle),l(2),c("styleClass","bg-white shadow-md rounded-lg")("position",m.position)}},dependencies:[z,A,O,M,Q,K,J,ee,Z,X]});let t=s;return t})();export{We as ProfileComponent};
