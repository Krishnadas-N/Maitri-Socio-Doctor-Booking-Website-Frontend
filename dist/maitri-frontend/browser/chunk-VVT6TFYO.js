import{a as y}from"./chunk-ZBJY7VNS.js";import"./chunk-6SCAOAVA.js";import{b as v}from"./chunk-N7UIUSV4.js";import"./chunk-DHV3KFP7.js";import"./chunk-VNHCDGQ4.js";import{Jb as g,Lb as u,Mb as b,Vb as t,Wb as n,Xb as r,cc as x,ec as h,kd as C,oc as s,qc as w,rb as p,td as k,yc as d,za as m}from"./chunk-VIIRXEWM.js";var I=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=m({type:e,selectors:[["app-header-component"]],standalone:!0,features:[d],decls:15,vars:0,consts:[[1,"container","mx-auto","p-2","flex","justify-between","items-center","border-emerald-200"],[1,"flex","gap-2","items-center"],[1,"px-1","cursor-pointer","hover:text-gray-700"],[1,"w-8","fas","fa-search","p-2","bg-gray-200","rounded-full"],[1,"w-8","fas","fa-calendar-alt","p-2","bg-gray-200","rounded-full"],[1,"flex","gap-3","items-center"],[1,"relative","cursor-pointer","hover:text-gray-700"],[1,"w-8","fas","fa-bell","p-2","bg-gray-200","rounded-full"],[1,"absolute","top-0","right-0","-mt-2","-mr-1","text-xs","bg-red-500","text-white","font-medium","px-2","shadow-lg","rounded-full"],[1,"w-8","fas","fa-user","p-2","bg-gray-200","rounded-full"],[1,"absolute","top-0","right-0","-mt-1","-mr-1","text-xs","bg-yellow-500","text-black","font-medium","px-2","rounded-full"]],template:function(i,l){i&1&&(t(0,"div",0)(1,"div",1)(2,"span",2),r(3,"i",3),n(),t(4,"span",2),r(5,"i",4),n()(),t(6,"div",5)(7,"span",6),r(8,"i",7),t(9,"span",8),s(10,"3"),n()(),t(11,"span",6),r(12,"i",9),t(13,"span",10),s(14,"3"),n()()()())}});let o=e;return o})();function _(o,e){if(o&1&&(t(0,"div",5),s(1),n()),o&2){let f=h();b("top",f.tooltipTop+"px")("left",f.tooltipLeft+"px"),p(),w(" ",f.tooltipText," ")}}var P=(()=>{let e=class e{constructor(){this.backgroundColor="bg-black",this.showTooltip=!1,this.tooltipTop=0,this.tooltipLeft=0,this.tooltipText="",this.profileImage="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",this.navItems=[{iconClasses:"fas fa-tachometer-alt fa-sm text-white",backgroundColor:"bg-blue-400",tooltip:"Dashboard",link:"/admin/"},{iconClasses:"fas fa-users fa-sm text-white",backgroundColor:"bg-green-400",tooltip:"User Management",link:"/admin/users"},{iconClasses:"fas fa-user-md fa-sm text-white",backgroundColor:"bg-indigo-400",tooltip:"Doctor Management",link:"/admin/doctors"},{iconClasses:"fas fa-stethoscope fa-sm text-white",backgroundColor:"bg-purple-400",tooltip:"Doctor Specialization",link:"/admin/specializations"},{iconClasses:"fas fa-calendar-alt fa-sm text-white",backgroundColor:"bg-yellow-400",tooltip:"Appointments",link:"/admin/appointments"},{iconClasses:"fas fa-file-invoice-dollar fa-sm text-white",backgroundColor:"bg-teal-400",tooltip:"Transactions",link:"/admin/transactions"},{iconClasses:"fas fa-star fa-sm text-white",backgroundColor:"bg-orange-400",tooltip:"Reviews and Ratings",link:"/admin/reviews"},{iconClasses:"fas fa-bell fa-sm text-white",backgroundColor:"bg-orange-400",tooltip:"Notifications",link:"/admin/notifications"}]}ngOnInit(){}handleSidebarItemClick(a){console.log("Item Clicked:",a)}handleItemHover(a){if(a&&a.item.tooltip){let{item:i,index:l}=a;this.tooltipText=i.tooltip,this.tooltipTop=70+l*60,this.tooltipLeft=60,this.showTooltip=!0}else this.showTooltip=!1}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=m({type:e,selectors:[["app-Admin-Page-Component"]],standalone:!0,features:[d],decls:6,vars:4,consts:[["x-data","{openMenu:1}",1,"flex","h-screen","w-full","bg-blue-50"],[1,"w-20","relative","z-20","flex-shrink-0","px-2","overflow-y-auto","bg-black","sm:block",3,"itemClick","itemHover","backgroundColor","profileImage","navItems"],[1,"flex","flex-col","flex-1","w-full","overflow-y-auto"],[1,"p-2","bg-fixed","text-gray-900","bg-white","mb-3","shadow-lg","font-medium","capitalize","border-b","border-gray-200","flex","justify-between","items-center"],["class","absolute z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none",3,"top","left",4,"ngIf"],[1,"absolute","z-50","whitespace-normal","break-words","rounded-lg","bg-black","py-1.5","px-3","font-sans","text-sm","font-normal","text-white","focus:outline-none"]],template:function(i,l){i&1&&(t(0,"div",0)(1,"app-sidebar",1),x("itemClick",function(c){return l.handleSidebarItemClick(c)})("itemHover",function(c){return l.handleItemHover(c)}),n(),t(2,"div",2),r(3,"app-header-component",3)(4,"router-outlet"),n(),g(5,_,2,5,"div",4),n()),i&2&&(p(),u("backgroundColor",l.backgroundColor)("profileImage",l.profileImage)("navItems",l.navItems),p(4),u("ngIf",l.showTooltip))},dependencies:[k,C,v,y,I]});let o=e;return o})();export{P as AdminPageComponentComponent};