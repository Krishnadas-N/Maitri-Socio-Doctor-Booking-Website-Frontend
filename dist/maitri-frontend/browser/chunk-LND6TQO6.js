import{b as $}from"./chunk-4YYND6ZR.js";import{n as W}from"./chunk-AA2U36RO.js";import{a as B}from"./chunk-AJCFBXF2.js";import{a as H}from"./chunk-35SNKNNU.js";import"./chunk-NKMITRER.js";import"./chunk-7B4WEPGY.js";import{n as N}from"./chunk-UC2OFU5X.js";import"./chunk-7ZKIOEOA.js";import"./chunk-Y5BMXVS7.js";import{Db as S,Ea as v,Fa as _,Fb as u,Ga as w,Gb as C,Ha as E,Hb as D,Pb as s,Qb as n,Rb as m,Sa as I,Sb as k,Tb as M,Vb as x,Yb as f,_b as p,ed as O,fd as L,gd as j,ib as T,ic as a,jc as g,kc as P,lb as l,mb as b,nc as V,pd as z,sc as F,ta as y,uc as A}from"./chunk-PWWHKO4X.js";import"./chunk-4LMIJWLY.js";var R=r=>({"bg-blue-500":r});function G(r,c){if(r&1){let o=x();s(0,"div",34),f("click",function(){let i=v(o).$implicit,t=p(2);return _(t.selectDate(i))}),s(1,"div",19),a(2),n(),s(3,"div",20)(4,"span",21),a(5),n()(),s(6,"div",22)(7,"span",23),a(8),n(),s(9,"span",23),a(10),n()(),m(11,"div",24),n()}if(r&2){let o=c.$implicit,e=p(2);l(2),g(o.name),l(),D("bg-blue-500",e.currentDate===o),l(),D("bg-blue-500",e.currentDate===o),l(),g(o.date),l(),D("bg-blue-500",e.currentDate===o),l(2),g(o.day),l(2),g(o.year)}}function U(r,c){if(r&1&&(k(0,32),S(1,G,12,10,"div",33),M()),r&2){let o=p();l(),u("ngForOf",o.days)}}function Y(r,c){if(r&1){let o=x();s(0,"button",35),f("click",function(){v(o);let i=p();return _(i.toggleIsEdit())}),a(1,"Edit slots"),n()}}function q(r,c){r&1&&m(0,"i",37)}function J(r,c){if(r&1){let o=x();s(0,"button",35),f("click",function(){v(o);let i=p();return _(i.saveSlots())}),S(1,q,1,0,"i",36),a(2,"Save slots "),n()}if(r&2){let o=p();l(),u("ngIf",o.isLoading)}}function K(r,c){r&1&&(s(0,"span",41),m(1,"i",42),n())}function Q(r,c){if(r&1){let o=x();s(0,"div",38)(1,"div",39),f("click",function(){let i=v(o).$implicit,t=p();return _(t.toggleSlotSelection(i))}),a(2),S(3,K,2,0,"span",40),n()()}if(r&2){let o=c.$implicit,e=p();l(),C("pointer-events",e.isEdit?"auto":"none"),u("ngClass",A(5,R,e.isSlotSelected(o))),l(),P(" ",o," "),l(),u("ngIf",e.isSlotSelected(o))}}var de=(()=>{let c=class c{constructor(e,i,t,d){this.doctorService=e,this.store=i,this.toastr=t,this.platformId=d,this.days=[],this.availableSlots=[],this.selectedSlots=[],this.currentDateIndex=0,this.isSmallScreen=!1,this.isEdit=!1,this.isLoading=!1}ngOnInit(){this.store.dispatch(W()),this.fetchDoctorSubscritpion=this.store.select($).subscribe(e=>{console.log(e),this.currentDoctorDetails=e,this.selectedSlots=e.selectedSlots,console.log(this.selectedSlots)}),this.fetchAvailableSlots(),this.selectedDate=new Date,this.generateDays()}onResize(e){this.isSmallScreen=e.target.innerWidth<=640}generateDays(){let e=new Date;for(let i=0;i<7;i++){let t=new Date(e);t.setDate(e.getDate()+i),this.days.push({fullDate:t,name:this.getDayName(t.getDay()),date:t.getDate(),day:this.getDayOfWeek(t),year:t.getFullYear()})}this.currentDate=this.days[0]}fetchAvailableSlots(){this.availableSlots=["6 AM","7 AM","8 AM","9 AM","10 AM","11 AM","12 PM","1 PM","2 PM","3 PM","4 PM","5 PM","6 PM","7 PM","8 PM","9 PM","10 PM","11 PM"]}getDayName(e){return["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][e]}getDayOfWeek(e){let i={weekday:"short"};return new Intl.DateTimeFormat("en-US",i).format(e)}prevDate(){this.isEdit?this.toastr.warning("Please ensure to save the selected day's slots before proceeding."):this.currentDateIndex>0&&(this.currentDateIndex--,this.currentDate=this.days[this.currentDateIndex])}nextDate(){this.isEdit?this.toastr.warning("Please ensure to save the selected day's slots before proceeding."):this.currentDateIndex<this.days.length-1&&(this.currentDateIndex++,this.currentDate=this.days[this.currentDateIndex])}saveSlots(){console.log("Selected Slots:",this.selectedSlots),this.isLoading=!0,this.doctorService.saveSlots(this.selectedSlots).subscribe(e=>{console.log("Slots saved successfully:",e),this.isEdit=!1,this.isLoading=!1,console.log("response",e),this.selectedSlots=e.data.selectedSlots},e=>{this.isLoading=!1,this.isEdit=!1,console.error("Error saving slots:",e)})}selectDate(e){this.isEdit?this.toastr.warning("Please ensure to save the selected day's slots before proceeding."):this.currentDate=e}toggleIsEdit(){this.isEdit=!0}isSlotSelected(e){let i=this.selectedSlots?.find(t=>new Date(t.date).toDateString()===new Date(this.currentDate.fullDate).toDateString());return console.log("selectedDateSlots",i),i?i.slots.includes(e):!1}toggleSlotSelection(e){if(console.log(e,"clicket to add new"),!Array.isArray(this.selectedSlots)){console.error("Error: this.selectedSlots is not an array!");return}let i=new Date(this.currentDate.fullDate);console.log("Selected slots:",this.selectedSlots);let t=this.selectedSlots.findIndex(d=>new Date(d.date).getTime()===i.getTime());console.log("Existing date index:",t);try{if(t!==-1){let d=t!==-1?this.selectedSlots[t].slots:[],h=d.indexOf(e);console.log("selectedSlotsArray,slotIndex",d,h),h===-1?d.push(e):d.splice(h,1)}else{let d={date:i,slots:[e]},h=[...this.selectedSlots,d];this.selectedSlots=h}}catch(d){console.error("Error occurred during slot selection:",d)}}ngOnDestroy(){this.fetchDoctorSubscritpion&&this.fetchDoctorSubscritpion.unsubscribe()}};c.\u0275fac=function(i){return new(i||c)(b(B),b(N),b(H),b(I))},c.\u0275cmp=y({type:c,selectors:[["app-schedule-timings"]],hostBindings:function(i,t){i&1&&f("resize",function(h){return t.onResize(h)},!1,T)},standalone:!0,features:[F],decls:45,vars:12,consts:[[1,"flex-1","flex-col","gap-4","p-4","shadow-lg"],[1,"bg-white","m-1","rounded-sm","p-4"],[1,"flex","justify-between","mt-2","mb-2"],[1,"flex","gap-2"],[1,"fas","fa-clock","text-lg","mr-2"],[1,"text-lg","font-bold"],[1,"mb-2"],[1,"relative","inline-block","w-40"],[1,"block","appearance-none","w-full","bg-white","border","border-gray-300","text-gray-700","py-2","px-4","pr-8","rounded","leading-tight","focus:outline-none","focus:bg-white","focus:border-gray-500"],["value","1"],[1,"pointer-events-none","absolute","inset-y-0","right-0","flex","items-center","px-2","text-gray-700"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 20 20",1,"fill-current","h-4","w-4"],["fill","none","d","M0 0h20v20H0V0z"],["d","M9.293 13.707a1 1 0 001.414 0L14 10.414V13a1 1 0 102 0V9a1 1 0 00-1-1h-4a1 1 0 100 2h2.586l-3.293 3.293a1 1 0 000 1.414z"],[1,"grid","grid-cols-1","sm:grid-cols-7","gap-4"],[1,"relative","sm:hidden"],[1,"absolute","left-0","top-1/2","transform","-translate-y-1/2","bg-gray-200","p-2","rounded-full",3,"click"],[1,"fas","fa-chevron-left"],[1,"block","rounded-t","overflow-hidden","bg-white","text-center","hover:cursor-pointer","w-full"],[1,"bg-red-500","text-white","py-1"],[1,"pt-1","border-l","border-r"],[1,"text-4xl","font-bold"],[1,"pb-2","px-2","border-l","border-r","border-b","rounded-b","flex","justify-between"],[1,"text-xs","font-bold"],[1,"mt-2"],[1,"absolute","right-0","top-1/2","transform","-translate-y-1/2","bg-gray-200","p-2","rounded-full",3,"click"],[1,"fas","fa-chevron-right"],["class","sm:ms-5",4,"ngIf"],[1,"flex","justify-between","mt-1","mb-2"],["class","bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600",3,"click",4,"ngIf"],[1,"grid","grid-cols-3","gap-2"],["class","col-span-1",4,"ngFor","ngForOf"],[1,"sm:ms-5"],["class","block rounded-t overflow-hidden  bg-white text-center hover:cursor-pointer w-24",3,"click",4,"ngFor","ngForOf"],[1,"block","rounded-t","overflow-hidden","bg-white","text-center","hover:cursor-pointer","w-24",3,"click"],[1,"bg-blue-500","text-white","px-4","py-2","rounded-md","hover:bg-blue-600",3,"click"],["class","fas fa-spinner fa-spin",4,"ngIf"],[1,"fas","fa-spinner","fa-spin"],[1,"col-span-1"],[1,"text-center","bg-blue-500","border","rounded-md","p-2","cursor-pointer",3,"click","ngClass"],["class","tick-icon",4,"ngIf"],[1,"tick-icon"],[1,"fas","fa-check"]],template:function(i,t){i&1&&(s(0,"main",0)(1,"div",1)(2,"div",2)(3,"div",3),m(4,"i",4),s(5,"div",5),a(6,"Schedule Timings For Seven Days"),n()(),s(7,"div",6)(8,"p"),a(9,"Time Duration"),n(),s(10,"div",7)(11,"select",8)(12,"option",9),a(13,"1 hour"),n()(),s(14,"div",10),w(),s(15,"svg",11),m(16,"path",12)(17,"path",13),n()()()()(),E(),s(18,"div",14)(19,"div",15)(20,"button",16),f("click",function(){return t.prevDate()}),m(21,"i",17),n(),s(22,"div",18)(23,"div",19),a(24),n(),s(25,"div",20)(26,"span",21),a(27),n()(),s(28,"div",22)(29,"span",23),a(30),n(),s(31,"span",23),a(32),n()(),m(33,"div",24),n(),s(34,"button",25),f("click",function(){return t.nextDate()}),m(35,"i",26),n()(),S(36,U,2,1,"ng-container",27),n()(),s(37,"div",1)(38,"div",28)(39,"p"),a(40),n(),S(41,Y,2,0,"button",29)(42,J,3,1,"button",29),n(),s(43,"div",30),S(44,Q,4,7,"div",31),n()()()),i&2&&(l(24),g(t.currentDate==null?null:t.currentDate.name),l(3),g(t.currentDate==null?null:t.currentDate.date),l(3),g(t.currentDate==null?null:t.currentDate.day),l(2),g(t.currentDate==null?null:t.currentDate.year),l(4),u("ngIf",!t.isSmallScreen),l(4),V("Select slot for ",t.currentDate==null?null:t.currentDate.name," ",t.currentDate==null?null:t.currentDate.date," ",t.currentDate==null?null:t.currentDate.day," ",t.currentDate==null?null:t.currentDate.year,""),l(),u("ngIf",!t.isEdit),l(),u("ngIf",t.isEdit),l(2),u("ngForOf",t.availableSlots))},dependencies:[z,O,L,j]});let r=c;return r})();export{de as ScheduleTimingsComponent};
