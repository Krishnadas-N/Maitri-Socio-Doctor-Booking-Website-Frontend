import"./chunk-P4VXOIO5.js";import"./chunk-ZPUWZR45.js";import"./chunk-BXMAJGNT.js";import"./chunk-MZNBSL5Q.js";import{b as j}from"./chunk-3AINOVD3.js";import"./chunk-DDDJMONK.js";import"./chunk-RW7QU5VL.js";import"./chunk-HBGVDYAA.js";import"./chunk-DKDZJVTM.js";import{a as F}from"./chunk-5GHUIYDR.js";import{c as O}from"./chunk-HMDMCBQE.js";import"./chunk-GZ5LVMH7.js";import"./chunk-O6E4DEDJ.js";import"./chunk-OGNTREHX.js";import"./chunk-Q62XEUEG.js";import"./chunk-OEBG5XYA.js";import{a as M}from"./chunk-HYGX2NCD.js";import"./chunk-72ERA4KK.js";import"./chunk-7B4WEPGY.js";import"./chunk-CFIRI2J5.js";import"./chunk-TGHWUEU6.js";import"./chunk-CWHW6EFR.js";import"./chunk-J7J3MBJD.js";import"./chunk-RXVUTR5D.js";import{Aa as x,Kb as y,La as u,Ma as g,Mb as p,Wb as e,Xb as r,Yb as n,Za as v,ac as b,dc as C,fc as S,kd as w,mb as h,pc as s,rc as f,sb as d,tb as c,ud as P,wd as I,zc as _}from"./chunk-MMBRV4NV.js";function D(a,i){if(a&1){let l=b();e(0,"div",10)(1,"a",11),C("click",function(){let o=u(l).$implicit,m=S();return g(m.onClickOpenModal(o))}),e(2,"article",12),n(3,"img",13),e(4,"div",14)(5,"div",15)(6,"span",16),n(7,"i",17),s(8),r(),e(9,"span",16),n(10,"i",18),s(11),r()()()()()()}if(a&2){let l=i.$implicit;d(3),p("src",l.media[0].url,h),d(5),f(" ",l.likes.length," "),d(3),f(" ",l.comments.length," ")}}var U=(()=>{let i=class i{constructor(t,o,m,k){this.dialog=t,this.feedService=o,this.toastr=m,this.platformId=k,this.doctorPosts=[],this.isCommentBoxHidden=!1}ngOnInit(){I(this.platformId)&&this.getDoctorsPost()}getDoctorsPost(){this.feedService.loadCurrentDoctorPosts().subscribe({next:t=>{console.log(t),this.doctorPosts=t.data},error:t=>{this.toastr.error(t)}})}onClickOpenModal(t){this.dialog.open(j,{width:"600px",data:{postId:t._id}})}};i.\u0275fac=function(o){return new(o||i)(c(O),c(F),c(M),c(v))},i.\u0275cmp=x({type:i,selectors:[["app-doctor-my-feed"]],standalone:!0,features:[_],decls:19,vars:1,consts:[[1,"px-px","md:px-3"],[1,"flex","items-center","justify-around","md:justify-center","space-x-12","uppercase","tracking-widest","font-semibold","text-xs","text-gray-600","border-t"],[1,"md:border-t","md:border-gray-700","md:-mt-px","md:text-gray-700"],["href","#",1,"inline-block","p-3"],[1,"fas","fa-th-large","text-xl","md:text-xs"],[1,"hidden","md:inline"],[1,"far","fa-square","text-xl","md:text-xs"],[1,"fas","fa-user","border","border-gray-500","px-1","pt-1","rounded","text-xl","md:text-xs"],[1,"flex","flex-wrap","-mx-px","md:-mx-3"],["class","w-1/3 p-px md:px-3 hover:cursor-pointer file:",4,"ngFor","ngForOf"],[1,"w-1/3","p-px","md:px-3","hover:cursor-pointer","file:"],[3,"click"],[1,"post","bg-gray-100","text-white","relative","pb-full","md:mb-6"],["alt","image",1,"w-full","h-full","absolute","left-0","top-0","object-cover",3,"src"],[1,"overlay","bg-gray-800","bg-opacity-25","w-full","h-full","absolute","left-0","top-0","hidden"],[1,"flex","justify-center","items-center","space-x-4","h-full"],[1,"p-2"],[1,"fas","fa-heart"],[1,"fas","fa-comment"]],template:function(o,m){o&1&&(e(0,"div",0)(1,"ul",1)(2,"li",2)(3,"a",3),n(4,"i",4),e(5,"span",5),s(6,"post"),r()()(),e(7,"li")(8,"a",3),n(9,"i",6),e(10,"span",5),s(11,"Saved"),r()()(),e(12,"li")(13,"a",3),n(14,"i",7),e(15,"span",5),s(16,"tagged"),r()()()(),e(17,"div",8),y(18,D,12,3,"div",9),r()()),o&2&&(d(18),p("ngForOf",m.doctorPosts))},dependencies:[P,w],styles:["@media screen and (min-width: 768px){.post[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%]{display:block}}.pb-full[_ngcontent-%COMP%]{padding-bottom:100%}"]});let a=i;return a})();export{U as DoctorMyFeedComponent};
