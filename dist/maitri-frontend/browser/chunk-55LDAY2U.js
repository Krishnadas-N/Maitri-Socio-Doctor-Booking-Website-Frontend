import{p as k}from"./chunk-ZLPOKOOC.js";import{b as A}from"./chunk-4YYND6ZR.js";import{a as O}from"./chunk-G5FRVDIH.js";import{n as E}from"./chunk-AA2U36RO.js";import"./chunk-PI3LJFPN.js";import"./chunk-66G5UFEZ.js";import"./chunk-3XJJVYVF.js";import"./chunk-NJHSAT6J.js";import"./chunk-4XTAZTIE.js";import"./chunk-EO67VZ56.js";import"./chunk-U4JTO2HX.js";import{a as L}from"./chunk-TFG3IBEJ.js";import"./chunk-63APZDV3.js";import"./chunk-LFVSKKQO.js";import"./chunk-SXFKYE6F.js";import"./chunk-XVPSVN7Z.js";import"./chunk-L7KF6TMI.js";import"./chunk-UMSWC4GJ.js";import"./chunk-FEXZKP3R.js";import"./chunk-O54DFGYZ.js";import"./chunk-TG65SF6R.js";import{a as T}from"./chunk-35SNKNNU.js";import"./chunk-WAWZTAIB.js";import"./chunk-7B4WEPGY.js";import{n as M}from"./chunk-UC2OFU5X.js";import"./chunk-ONIKTDMA.js";import"./chunk-IWUKBY46.js";import"./chunk-7ZKIOEOA.js";import"./chunk-Y5BMXVS7.js";import{Db as h,Dc as I,Ea as C,Fa as y,Fb as c,Pb as r,Qb as s,Rb as a,Sa as _,Sb as D,Tb as F,Vb as b,Yb as x,_b as v,fd as S,gd as w,hc as P,lb as p,mb as l,pd as u,sc as f,ta as m}from"./chunk-PWWHKO4X.js";import"./chunk-4LMIJWLY.js";var j=(()=>{let e=class e{constructor(){}ngOnInit(){}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=m({type:e,selectors:[["app-card-skelton-loader"]],standalone:!0,features:[f],decls:6,vars:0,consts:[[1,"card","rounded-[12px]","text-xl","shadow-2xl","p-5","animate-pulse"],["href","#"],[1,"w-full","h-64","bg-gray-200","rounded","mb-3"],[1,"h-4","bg-gray-200","rounded","w-3/4","mb-2"],[1,"h-1","bg-gray-200","rounded","w-full","mb-2"],[1,"h-4","bg-gray-200","rounded","w-1/4"]],template:function(n,i){n&1&&(r(0,"div",0)(1,"a",1),a(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),s()())},dependencies:[u]});let t=e;return t})();function V(t,e){if(t&1&&(r(0,"div"),a(1,"post-component",6),s()),t&2){let g=e.$implicit,o=v(2);p(),c("postData",g)("userType",o.userType)}}function N(t,e){if(t&1&&(D(0),h(1,V,2,2,"div",5),F()),t&2){let g=v();p(),c("ngForOf",g.posts)}}function R(t,e){t&1&&(r(0,"div"),a(1,"app-card-skelton-loader"),s())}var ne=(()=>{let e=class e{ngOnInit(){this.isLoadingPosts=!0,this.loadAllPosts(),this.loadCurrentDoctor(),this.getDoctor()}getDoctor(){this.store.select(A).subscribe(o=>{this.doctorDetail=o})}loadCurrentDoctor(){this.store.dispatch(E())}loadAllPosts(){this.FeedService.getAllPosts().subscribe({next:o=>{this.posts=o.data,console.log(this.posts),this.isLoadingPosts=!1},error:o=>this.toastr.error(o),complete:()=>console.info("complete")})}openAddpost(){this.addPostModal=!this.addPostModal}constructor(o,n,i,d){this.store=o,this.FeedService=n,this.toastr=i,this.platformId=d,this.addPostModal=!1,this.isLoadingPosts=!1,this.userType="Doctor",this.posts=[],this.doctorDetail=null}};e.\u0275fac=function(n){return new(n||e)(l(M),l(L),l(T),l(_))},e.\u0275cmp=m({type:e,selectors:[["app-DoctorFeedHome"]],standalone:!0,features:[f],decls:6,vars:3,consts:[["cardLoader",""],[1,"bg-white","shadow","rounded-lg","mb-6","p-4"],["name","message","readonly","","placeholder","Start a Post...",1,"w-full","rounded-lg","p-2","text-sm","bg-gray-100","border","border-transparent","appearance-none","rounded-tg","placeholder-gray-400",3,"click"],[3,"isOpen"],[4,"ngIf","ngIfElse"],[4,"ngFor","ngForOf"],[3,"postData","userType"]],template:function(n,i){if(n&1){let d=b();r(0,"div",1)(1,"input",2),x("click",function(){return C(d),y(i.openAddpost())}),s()(),a(2,"app-add-post",3),h(3,N,2,1,"ng-container",4)(4,R,2,0,"ng-template",null,0,I)}if(n&2){let d=P(5);p(2),c("isOpen",i.addPostModal),p(),c("ngIf",!i.isLoadingPosts)("ngIfElse",d)}},dependencies:[O,k,u,S,w,j]});let t=e;return t})();export{ne as DoctorFeedHomeComponent};
