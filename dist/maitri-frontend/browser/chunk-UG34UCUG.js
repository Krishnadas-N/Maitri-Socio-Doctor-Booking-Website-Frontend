import{a as j}from"./chunk-5H4ZEC6U.js";import{a as E,b as L}from"./chunk-63APZDV3.js";import{a as b}from"./chunk-35SNKNNU.js";import{C as I,c as S,g as k,l as D}from"./chunk-IWUKBY46.js";import{Db as h,Fb as _,Ga as v,Ha as w,Jb as m,Pb as t,Qb as a,Rb as s,Yb as o,gd as T,ic as g,lb as l,mb as d,oc as x,pc as R,pd as M,qc as y,sc as C,ta as u}from"./chunk-PWWHKO4X.js";function A(p,r){p&1&&s(0,"i",17)}var V=(()=>{let r=class r{constructor(i,c,e,n){this.toastr=i,this.dialogRef=c,this.commonService=e,this.data=n,this.rating=0,this.reviewText="",this.isLoading=!1,console.log(n),this.appoinmentId=n.appoinmentId}ngOnInit(){}setRating(i){this.rating=i}submitReview(){console.log(this.rating,this.reviewText,this.appoinmentId),this.rating>0&&this.reviewText.trim().length>3&&(this.isLoading=!0,this.commonService.addReview(this.rating,this.reviewText,this.appoinmentId).subscribe({next:i=>{this.isLoading=!1,this.toastr.success("Review added successfully"),this.closeDialog(i.data)},error:i=>{this.isLoading=!1,this.toastr.error(i)}}))}closeDialog(i){this.dialogRef.close(i)}onCancel(){this.dialogRef.close()}};r.\u0275fac=function(c){return new(c||r)(d(b),d(E),d(j),d(L))},r.\u0275cmp=u({type:r,selectors:[["app-rating-review-dialog"]],standalone:!0,features:[C],decls:30,vars:12,consts:[[1,"flex","flex-col","w-full","justify-center"],[1,"w-full","sm:mx-auto"],[1,"bg-white","w-full","flex","flex-col","rounded-xl","shadow-lg"],[1,"px-12","py-5","text-center"],[1,"text-gray-800","text-3xl","font-semibold"],[1,"bg-gray-200","w-full","flex","flex-col","items-center"],[1,"flex","flex-col","items-center","py-6","space-y-3"],[1,"text-lg","text-gray-800"],[1,"flex","space-x-3"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 20 20","fill","currentColor",3,"click"],["d","M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"],[1,"w-3/4","flex","flex-col"],["rows","3",1,"p-4","text-gray-500","rounded-xl","resize-none",3,"ngModelChange","ngModel"],[1,"py-3","my-8","text-lg","bg-gradient-to-r","from-purple-500","to-indigo-600","rounded-xl","text-white",3,"click"],["class","fas fa-spinner fa-spin mr-1",4,"ngIf"],[1,"h-20","flex","items-center","justify-center"],[1,"text-gray-600","cursor-pointer",3,"click"],[1,"fas","fa-spinner","fa-spin","mr-1"]],template:function(c,e){c&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h2",4),g(5,"Rate the Consulation"),a()(),t(6,"div",5)(7,"div",6)(8,"span",7),g(9,"How was quality of the call?"),a(),t(10,"div",8),v(),t(11,"svg",9),o("click",function(){return e.setRating(1)}),s(12,"path",10),a(),t(13,"svg",9),o("click",function(){return e.setRating(2)}),s(14,"path",10),a(),t(15,"svg",9),o("click",function(){return e.setRating(3)}),s(16,"path",10),a(),t(17,"svg",9),o("click",function(){return e.setRating(4)}),s(18,"path",10),a(),t(19,"svg",9),o("click",function(){return e.setRating(5)}),s(20,"path",10),a()()(),w(),t(21,"div",11)(22,"textarea",12),y("ngModelChange",function(f){return R(e.reviewText,f)||(e.reviewText=f),f}),g(23,"Please add a review also..."),a(),t(24,"button",13),o("click",function(){return e.submitReview()}),h(25,A,1,0,"i",14),g(26," Rate now"),a()()(),t(27,"div",15)(28,"a",16),o("click",function(){return e.onCancel()}),g(29,"Maybe later"),a()()()()()),c&2&&(l(11),m("w-12 h-12 cursor-pointer "+(e.rating>=1?"text-yellow-500":"text-gray-500")),l(2),m("w-12 h-12 cursor-pointer "+(e.rating>=2?"text-yellow-500":"text-gray-500")),l(2),m("w-12 h-12 cursor-pointer "+(e.rating>=3?"text-yellow-500":"text-gray-500")),l(2),m("w-12 h-12 cursor-pointer "+(e.rating>=4?"text-yellow-500":"text-gray-500")),l(2),m("w-12 h-12 cursor-pointer "+(e.rating>=5?"text-yellow-500":"text-gray-500")),l(3),x("ngModel",e.reviewText),l(3),_("ngIf",e.isLoading))},dependencies:[M,T,I,S,k,D]});let p=r;return p})();export{V as a};
