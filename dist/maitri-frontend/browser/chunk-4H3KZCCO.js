import{a as z,b as N}from"./chunk-ZYZLIVNE.js";import{a as I}from"./chunk-ZMWPLIFU.js";import"./chunk-HUFV74GP.js";import"./chunk-EO67VZ56.js";import{a as A}from"./chunk-XLP5WL7V.js";import"./chunk-GG4KKEGR.js";import"./chunk-L7KF6TMI.js";import"./chunk-UMSWC4GJ.js";import"./chunk-FEXZKP3R.js";import"./chunk-WAWZTAIB.js";import"./chunk-7B4WEPGY.js";import{c as T}from"./chunk-ONIKTDMA.js";import{C as V,c as M,g as U,l as L,t as D,u as B,v as E}from"./chunk-IWUKBY46.js";import"./chunk-7ZKIOEOA.js";import"./chunk-Y5BMXVS7.js";import{Db as x,Fb as u,Ga as f,Ha as h,Pb as n,Qb as i,Rb as c,Yb as p,fd as S,ic as g,jc as P,lb as s,mb as m,oc as b,pc as w,pd as k,qc as _,sc as C,ta as y}from"./chunk-PWWHKO4X.js";import"./chunk-4LMIJWLY.js";function F(d,l){if(d&1&&(n(0,"option",24),g(1),i()),d&2){let v=l.$implicit;u("value",v.toLowerCase()),s(),P(v)}}var X=(()=>{let l=class l{constructor(t,r){this.adminService=t,this.route=r,this.userHeader=["profilePic","username","email","isVerified","gender","isBlocked","Actions"],this.headerMapping={profilePic:"Profile Picture",username:"Username",email:"Email",isVerified:"Verified",gender:"Gender",isBlocked:"Blocked",Actions:"Actions"},this.TabContents=["All","Blocked","Verified","Not-Verified"],this.selectedTab="all",this.userRows=[],this.currentPage=1,this.totalPages=0,this.totalCount=0,this.pageSize=6,this.searchQuery=""}ngOnInit(){this.fetchData(),this.fetchusers(),console.log(this.userRows)}fetchusers(t="all"){}fetchData(){this.adminService.getAllUsers(this.currentPage,this.pageSize,this.searchQuery).subscribe({next:t=>{console.log("get all users",t),this.userRows=t.data.users,this.currentPage=t.data.currentPage,this.pageSize=t.data.pageSize,this.totalCount=t.data.totalCount,this.totalPages=t.data.totalPages},error:t=>{console.log(t)}})}onBlockStatusChange(t){console.log("Block status changed:",t),this.adminService.blockUser(t).subscribe({next:r=>{let e=this.userRows.findIndex(o=>o._id.toString()===r.data._id.toString());this.userRows.splice(e,1,r.data)},error:r=>{console.log(r)}})}selectTab(t){console.log(t.target.value);let r=t.target.value;switch(this.selectedTab=r,r){case"all":this.fetchusers(r);break;case"blocked":this.fetchusers(r);break;case"verified":this.fetchusers(r);break;case"not-verified":this.fetchusers(r);break;default:break}}ViewUser(t){this.route.navigate(["/admin/users/",t])}onPreviousPage(){this.currentPage>1&&(this.currentPage--,this.fetchData())}onPageChange(t){this.currentPage=t,this.fetchData()}onNextPage(){this.currentPage<this.totalPages&&(this.currentPage++,this.fetchData())}};l.\u0275fac=function(r){return new(r||l)(m(A),m(T))},l.\u0275cmp=y({type:l,selectors:[["app-user-list"]],standalone:!0,features:[C],decls:26,vars:10,consts:[[1,"flex","flex-col","w-[95%]","h-full","text-gray-700","bg-white","shadow-md","rounded-xl","bg-clip-border","mx-auto","mb-4"],[1,"relative","mx-2","mt-2","overflow-hidden","text-gray-700","bg-white","rounded-none","bg-clip-border"],[1,"flex","items-center","justify-between","gap-5","mb-2"],[1,"mt-4"],[1,"block","font-sans","text-xl","antialiased","font-semibold","leading-snug","tracking-normal","text-blue-gray-900"],[1,"flex","flex-col","gap-2","shrink-0","sm:flex-row"],[1,"flex","flex-col","items-center","justify-between","gap-3","md:flex-row"],[1,"block","w-full","overflow-hidden","md:w-max"],[1,"relative"],[1,"block","appearance-none","w-full","bg-blue-gray-50","bg-opacity-60","border","border-blue-gray-300","text-blue-gray-900","py-1","px-2","pr-8","rounded-lg","leading-tight","focus:outline-none","focus:bg-white","focus:border-gray-500",3,"ngModelChange","change","ngModel"],[3,"value",4,"ngFor","ngForOf"],[1,"pointer-events-none","absolute","inset-y-0","right-0","flex","items-center","px-1","text-gray-700"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 20 20",1,"fill-current","h-4","w-4"],["d","M10 12a1 1 0 01-.7-.29l-4-4a1 1 0 111.41-1.42L10 9.58l3.29-3.29a1 1 0 111.41 1.42l-4 4a1 1 0 01-.71.29z"],[1,"w-full","md:w-72"],[1,"relative","h-10","w-full","min-w-[200px]"],[1,"absolute","grid","w-5","h-5","top-2/4","right-3","-translate-y-2/4","place-items-center","text-blue-gray-500"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke-width","1.5","stroke","currentColor","aria-hidden","true",1,"w-5","h-5",3,"click"],["stroke-linecap","round","stroke-linejoin","round","d","M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"],["placeholder"," ",1,"peer","h-full","w-full","rounded-[7px]","border","border-blue-gray-200","border-t-transparent","bg-transparent","px-3","py-2.5","!pr-9","font-sans","text-sm","font-normal","text-blue-gray-700","outline","outline-0","transition-all","placeholder-shown:border","placeholder-shown:border-blue-gray-200","placeholder-shown:border-t-blue-gray-200","focus:border-2","focus:border-gray-900","focus:border-t-transparent","focus:outline-0","disabled:border-0","disabled:bg-blue-gray-50",3,"keyup.enter","ngModelChange","ngModel"],[1,"before:content['","']","after:content['","']","pointer-events-none","absolute","left-0","-top-1.5","flex","h-full","w-full","select-none","!overflow-visible","truncate","text-[11px]","font-normal","leading-tight","text-gray-500","transition-all","before:pointer-events-none","before:mt-[6.5px]","before:mr-1","before:box-border","before:block","before:h-1.5","before:w-2.5","before:rounded-tl-md","before:border-t","before:border-l","before:border-blue-gray-200","before:transition-all","after:pointer-events-none","after:mt-[6.5px]","after:ml-1","after:box-border","after:block","after:h-1.5","after:w-2.5","after:flex-grow","after:rounded-tr-md","after:border-t","after:border-r","after:border-blue-gray-200","after:transition-all","peer-placeholder-shown:text-sm","peer-placeholder-shown:leading-[3.75]","peer-placeholder-shown:text-blue-gray-500","peer-placeholder-shown:before:border-transparent","peer-placeholder-shown:after:border-transparent","peer-focus:text-[11px]","peer-focus:leading-tight","peer-focus:text-gray-900","peer-focus:before:border-t-2","peer-focus:before:border-l-2","peer-focus:before:!border-gray-900","peer-focus:after:border-t-2","peer-focus:after:border-r-2","peer-focus:after:!border-gray-900","peer-disabled:text-transparent","peer-disabled:before:border-transparent","peer-disabled:after:border-transparent","peer-disabled:peer-placeholder-shown:text-blue-gray-500"],[1,"p-2","m-2","px-0","overflow-hidden"],[3,"blockStatusChange","viewUserInDetail","header","rows","headerMapping"],[3,"prevPage","nextPage","goToPage","currentPage","totalPages","totalCount","pageSize"],[3,"value"]],template:function(r,e){r&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h2",4),g(5," Users list "),i()(),c(6,"div",5),i(),n(7,"div",6)(8,"div",7)(9,"div",8)(10,"select",9),_("ngModelChange",function(a){return w(e.selectedTab,a)||(e.selectedTab=a),a}),p("change",function(a){return e.selectTab(a)}),x(11,F,2,2,"option",10),i(),n(12,"div",11),f(),n(13,"svg",12),c(14,"path",13),i()()()(),h(),n(15,"div",14)(16,"div",15)(17,"div",16),f(),n(18,"svg",17),p("click",function(){return e.fetchData()}),c(19,"path",18),i()(),h(),n(20,"input",19),p("keyup.enter",function(){return e.fetchData()}),_("ngModelChange",function(a){return w(e.searchQuery,a)||(e.searchQuery=a),a}),i(),n(21,"label",20),g(22," Search "),i()()()()(),n(23,"div",21)(24,"app-Table",22),p("blockStatusChange",function(a){return e.onBlockStatusChange(a)})("viewUserInDetail",function(a){return e.ViewUser(a)}),i()(),n(25,"app-admin-pagination",23),p("prevPage",function(){return e.onPreviousPage()})("nextPage",function(){return e.onNextPage()})("goToPage",function(a){return e.onPageChange(a)}),i()()),r&2&&(s(10),b("ngModel",e.selectedTab),s(),u("ngForOf",e.TabContents),s(9),b("ngModel",e.searchQuery),s(4),u("header",e.userHeader)("rows",e.userRows)("headerMapping",e.headerMapping),s(),u("currentPage",e.currentPage)("totalPages",e.totalPages)("totalCount",e.totalCount)("pageSize",e.pageSize))},dependencies:[z,N,V,B,E,M,D,U,L,I,k,S]});let d=l;return d})();export{X as UserListComponent};
