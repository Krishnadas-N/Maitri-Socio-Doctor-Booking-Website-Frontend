import{a as H,b as q}from"./chunk-WOWYMOJ6.js";import{b as U,c as z}from"./chunk-2G4VONH3.js";import{a as j}from"./chunk-DKDZJVTM.js";import{e as w,f as k,i as O}from"./chunk-OEBG5XYA.js";import{Aa as L,Ba as V,Kb as m,La as d,Ma as u,Mb as l,Na as B,Va as b,Wb as s,Xb as c,Yb as C,Zb as f,_b as x,ac as h,dc as _,fc as r,jd as $,kd as N,ld as R,mb as M,oa as D,oc as P,pc as g,rc as v,sb as o,tb as y,ud as I,yc as F,zc as A}from"./chunk-MMBRV4NV.js";function Y(i,e){if(i&1&&(s(0,"th",7)(1,"p",8),g(2),B(),s(3,"svg",9),C(4,"path",10),c()()()),i&2){let t=e.$implicit,n=r();o(2),v(" ",n.headerMapping[t]," ")}}function X(i,e){if(i&1&&(f(0),C(1,"img",14),x()),i&2){let t=r().$implicit,n=r().$implicit;o(),l("src",n[t],M)}}function J(i,e){if(i&1&&(f(0),s(1,"span",15),g(2),c(),x()),i&2){let t=r().$implicit,n=r().$implicit,a=r();o(),l("ngClass",a.getStatusClass(t,n[t])),o(),v(" ",n[t]," ")}}function K(i,e){if(i&1&&(f(0),s(1,"span",15),g(2),c(),x()),i&2){let t=r().$implicit,n=r().$implicit,a=r();o(),l("ngClass",a.getStatusClass(t,n[t])),o(),v(" ",n[t]==null?null:n[t].name," ")}}function Q(i,e){if(i&1){let t=h();s(0,"button",22),_("click",function(){d(t);let a=r(3).$implicit,p=r();return u(p.toggleBlock(a))}),g(1," Block "),c()}}function Z(i,e){if(i&1){let t=h();s(0,"button",23),_("click",function(){d(t);let a=r(3).$implicit,p=r();return u(p.toggleBlock(a))}),g(1," Unblock "),c()}}function ee(i,e){if(i&1){let t=h();f(0),m(1,Q,2,0,"button",16)(2,Z,2,0,"button",17),s(3,"button",18),_("click",function(){d(t);let a=r(2).$implicit,p=r();return u(p.viewUser(a))}),C(4,"i",19),s(5,"span",20),g(6,"View"),c(),s(7,"span",21),g(8,"View User Details"),c()(),x()}if(i&2){let t=r(2).$implicit;o(),l("ngIf",!t.isBlocked),o(),l("ngIf",t.isBlocked)}}function te(i,e){if(i&1&&(s(0,"td",12),m(1,X,2,1,"ng-container",13)(2,J,3,2,"ng-container",13)(3,K,3,2,"ng-container",13)(4,ee,9,2,"ng-container",13),c()),i&2){let t=e.$implicit;o(),l("ngIf",t==="profilePic"),o(),l("ngIf",t!=="profilePic"&&t!=="Actions"&&t!=="specialization"),o(),l("ngIf",t==="specialization"),o(),l("ngIf",t==="Actions")}}function ne(i,e){if(i&1&&(s(0,"tr"),m(1,te,5,4,"td",11),c()),i&2){let t=r();o(),l("ngForOf",t.header)}}var fe=(()=>{let e=class e{constructor(n,a){this.confirmationService=n,this.messageService=a,this.header=[],this.rows=[],this.position="center",this.headerMapping={},this.blockStatusChange=new b,this.viewUserInDetail=new b}ngOnInit(){console.log(this.header,this.rows,this.position,this.headerMapping)}getStatusClass(n,a){switch(n){case"isBlocked":return a?"bg-green-500 text-white rounded-full px-2 py-1":"bg-red-500 text-white rounded-full px-2 py-1";case"isVerified":return a?"bg-green-500 text-white rounded-full px-2 py-1":"bg-red-500 text-white rounded-full px-2 py-1";default:return""}}toggleBlock(n){let a=n.isBlocked?"Unblock":"Block";this.confirmationService.confirm({message:`Are you sure you want to ${a} the User?`,header:"Confirmation",icon:"pi pi-info-circle",acceptIcon:"none",rejectIcon:"none",rejectButtonStyleClass:"p-button-text",accept:()=>{this.messageService.add({severity:"info",summary:"Confirmed",detail:"Request submitted"}),this.blockStatusChange.emit(n._id)},reject:()=>{this.messageService.add({severity:"error",summary:"Rejected",detail:"Process incomplete",life:3e3})},key:"positionDialog"})}blockUser(n){console.log(`User ${n.username} ${n.isBlocked?"unblocked":"blocked"}`)}confirm(){console.log("Confirmation button clicked")}viewUser(n){this.viewUserInDetail.emit(n._id),console.log("view user clicked",n)}};e.\u0275fac=function(a){return new(a||e)(y(w),y(k))},e.\u0275cmp=L({type:e,selectors:[["app-Table"]],inputs:{header:"header",rows:"rows",headerMapping:"headerMapping"},outputs:{blockStatusChange:"blockStatusChange",viewUserInDetail:"viewUserInDetail"},standalone:!0,features:[F([w,k]),A],decls:12,vars:4,consts:[["cd",""],[1,"w-full","mt-4","text-left","table-auto","min-w-max"],["class","p-4 transition-colors cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 hover:bg-blue-gray-50",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],["icon","pi pi-check","key","positionDialog",3,"styleClass","position"],["type","button","pButton","","icon","pi pi-times","label","Cancel",1,"bg-gray-300","text-gray-800","px-4","py-2","rounded-md","shadow-md","hover:bg-gray-400","focus:outline-none","focus:ring-2","focus:ring-gray-500","focus:ring-opacity-50",3,"click"],["type","button","pButton","","icon","pi pi-check","label","Confirm",1,"ms-2","bg-blue-500","text-white","px-4","py-2","rounded-md","shadow-md","hover:bg-blue-600","focus:outline-none","focus:ring-2","focus:ring-blue-500","focus:ring-opacity-50",3,"click"],[1,"p-4","transition-colors","cursor-pointer","border-y","border-blue-gray-100","bg-blue-gray-50/50","hover:bg-blue-gray-50"],[1,"flex","items-center","justify-between","gap-2","font-sans","text-sm","antialiased","font-normal","leading-none","text-blue-gray-900","opacity-70"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke-width","2","stroke","currentColor","aria-hidden","true",1,"w-4","h-4"],["stroke-linecap","round","stroke-linejoin","round","d","M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"],["class","items-center p-2 border-b border-blue-gray-50",4,"ngFor","ngForOf"],[1,"items-center","p-2","border-b","border-blue-gray-50"],[4,"ngIf"],["alt","Image",1,"w-10","h-10","rounded-full",3,"src"],[3,"ngClass"],["class","px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600 transition-colors text-sm",3,"click",4,"ngIf"],["class","px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600 transition-colors text-sm",3,"click",4,"ngIf"],[1,"ms-4","relative","px-2","py-1","bg-blue-500","text-white","rounded-md","hover:bg-blue-600","focus:outline-none","focus:bg-blue-600","transition-colors","text-sm",3,"click"],[1,"far","fa-eye"],[1,"hidden","md:inline"],[1,"absolute","top-0","right-full","bg-blue-500","text-white","px-2","py-1","rounded-md","text-xs","opacity-0","transition-opacity","group-hover:opacity-100"],[1,"px-3","py-1","bg-red-500","text-white","rounded-md","hover:bg-red-600","focus:outline-none","focus:bg-red-600","transition-colors","text-sm",3,"click"],[1,"px-3","py-1","bg-green-500","text-white","rounded-md","hover:bg-green-600","focus:outline-none","focus:bg-green-600","transition-colors","text-sm",3,"click"]],template:function(a,p){if(a&1){let E=h();s(0,"table",1)(1,"thead")(2,"tr"),m(3,Y,5,1,"th",2),c()(),s(4,"tbody"),m(5,ne,2,1,"tr",3),c()(),C(6,"p-toast"),s(7,"p-confirmDialog",4,0)(9,"p-footer")(10,"button",5),_("click",function(){d(E);let S=P(8);return u(S.reject())}),c(),s(11,"button",6),_("click",function(){d(E);let S=P(8);return u(S.accept())}),c()()()}a&2&&(o(3),l("ngForOf",p.header),o(2),l("ngForOf",p.rows),o(2),l("styleClass","bg-white shadow-md rounded-lg")("position",p.position))},dependencies:[I,$,N,R,q,H,j,O,z,U]});let i=e;return i})();var T=class{constructor(){this.change=new b,this.instances={},this.DEFAULT_ID="DEFAULT_PAGINATION_ID"}defaultId(){return this.DEFAULT_ID}register(e){return e.id==null&&(e.id=this.DEFAULT_ID),this.instances[e.id]?this.updateInstance(e):(this.instances[e.id]=e,!0)}updateInstance(e){let t=!1;for(let n in this.instances[e.id])e[n]!==this.instances[e.id][n]&&(this.instances[e.id][n]=e[n],t=!0);return t}getCurrentPage(e){return this.instances[e]?this.instances[e].currentPage:1}setCurrentPage(e,t){if(this.instances[e]){let n=this.instances[e],a=Math.ceil(n.totalItems/n.itemsPerPage);t<=a&&1<=t&&(this.instances[e].currentPage=t,this.change.emit(e))}}setTotalItems(e,t){this.instances[e]&&0<=t&&(this.instances[e].totalItems=t,this.change.emit(e))}setItemsPerPage(e,t){this.instances[e]&&(this.instances[e].itemsPerPage=t,this.change.emit(e))}getInstance(e=this.DEFAULT_ID){return this.instances[e]?this.clone(this.instances[e]):{}}clone(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}},Ne=Number.MAX_SAFE_INTEGER;var Re=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=V({type:i}),i.\u0275inj=D({providers:[T],imports:[[I]]}),i})();export{fe as a,Re as b};
