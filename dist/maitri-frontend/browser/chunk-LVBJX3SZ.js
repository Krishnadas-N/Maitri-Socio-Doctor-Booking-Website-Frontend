import{a as te}from"./chunk-AJCFBXF2.js";import{a as ee}from"./chunk-35SNKNNU.js";import{a as Z}from"./chunk-3P62YLH5.js";import"./chunk-NKMITRER.js";import"./chunk-7B4WEPGY.js";import{a as J,c as K,d as Q}from"./chunk-ONIKTDMA.js";import{B as X,e as E}from"./chunk-IWUKBY46.js";import"./chunk-7ZKIOEOA.js";import"./chunk-Y5BMXVS7.js";import{Ac as k,B as V,Bc as R,Cc as I,Db as u,Dc as A,Ea as x,Fa as S,Fb as c,Ga as $,Gb as B,Ha as j,Pb as n,Qb as l,Rb as f,Sa as O,Sb as h,Tb as v,Vb as D,Yb as y,_b as m,ca as N,ed as z,f as F,fb as L,fd as Y,gd as q,hc as M,ic as s,jc as w,kc as b,lb as r,lc as T,mb as _,md as U,nd as W,pd as G,sc as H,ta as P,vc as C}from"./chunk-PWWHKO4X.js";import"./chunk-4LMIJWLY.js";var re=(t,a)=>({"bg-blue-500 text-white":t,"bg-white":a}),ae=(t,a)=>({"text-blue-500":t,"bg-blue-500 text-white":a}),ie=(t,a)=>({"bg-blue-500 text-white":t,"bg-white text-black":a});function le(t,a){if(t&1&&(h(0),f(1,"i",40),s(2),v()),t&2){let i=m().$implicit;r(2),b(" Video: \u20B9",i.fee," ")}}function se(t,a){if(t&1&&(h(0),f(1,"i",41),s(2),v()),t&2){let i=m().$implicit;r(2),b(" Chat: \u20B9",i.fee," ")}}function pe(t,a){if(t&1&&(n(0,"span"),u(1,le,3,1,"ng-container",39)(2,se,3,1,"ng-container",39),l()),t&2){let i=a.$implicit;r(),c("ngIf",i.type==="video"),r(),c("ngIf",i.type==="chat")}}function ce(t,a){if(t&1&&(h(0),f(1,"i",42),s(2),v()),t&2){let i=m().$implicit;r(2),b(" Clinic: \u20B9",i.fee," ")}}function de(t,a){if(t&1&&(n(0,"span"),u(1,ce,3,1,"ng-container",39),l()),t&2){let i=a.$implicit;r(),c("ngIf",i.type==="clinic")}}function me(t,a){if(t&1){let i=D();h(0),n(1,"button",43),y("click",function(){let p=x(i).$implicit,o=m();return S(o.selectConsultation(p))}),n(2,"span"),f(3,"i",44),l(),s(4),k(5,"titlecase"),l(),v()}if(t&2){let i=a.$implicit,e=m();r(),c("ngClass",C(5,re,e.appoinMentDetail.typeofConsultaion===i,e.appoinMentDetail.typeofConsultaion!==i)),r(2),c("ngClass",e.getIconClass(i)),r(),b(" ",R(5,3,i)," Consultation ")}}function ge(t,a){if(t&1){let i=D();n(0,"div",45)(1,"div",46),y("click",function(){let p=x(i).$implicit,o=m();return S(o.selectDate(p))}),n(2,"div",47),s(3),k(4,"date"),l(),n(5,"div",48),s(6),k(7,"date"),l(),n(8,"div",49),s(9),k(10,"date"),l()()()}if(t&2){let i=a.$implicit,e=m();r(),c("ngClass",C(13,ae,e.appoinMentDetail.bookingDate!==i,e.appoinMentDetail.bookingDate===i)),r(2),w(I(4,4,i,"MMMM yyyy")),r(3),w(I(7,7,i,"dd")),r(3),w(I(10,10,i,"EEEE"))}}function ue(t,a){if(t&1){let i=D();n(0,"div")(1,"button",50),y("click",function(){let p=x(i).$implicit,o=m(2);return S(o.selectSlot(p))}),s(2),l()()}if(t&2){let i=a.$implicit,e=m(2);r(),B("opacity",e.isSlotBooked(i)?"0.5":"1"),c("disabled",e.isSlotBooked(i))("ngClass",C(5,ie,e.appoinMentDetail.slotTime===i,e.appoinMentDetail.slotTime!==i)),r(),b("",i," ")}}function fe(t,a){if(t&1&&(h(0),u(1,ue,3,8,"div",12),v()),t&2){let i=m();r(),c("ngForOf",i.getMorningSlots())}}function be(t,a){t&1&&(n(0,"div",51),s(1," Not Available "),l())}function _e(t,a){if(t&1){let i=D();n(0,"div")(1,"button",52),y("click",function(){let p=x(i).$implicit,o=m(2);return S(o.selectSlot(p))}),s(2),l()()}if(t&2){let i=a.$implicit,e=m(2);r(),B("opacity",e.isSlotBooked(i)?"0.5":"1"),c("disabled",e.isSlotBooked(i))("ngClass",C(5,ie,e.appoinMentDetail.slotTime===i,e.appoinMentDetail.slotTime!==i)),r(),b("",i," ")}}function he(t,a){if(t&1&&(h(0),u(1,_e,3,8,"div",12),v()),t&2){let i=m();r(),c("ngForOf",i.getAfternoonSlots())}}function ve(t,a){t&1&&(n(0,"div",51),s(1," Not Available "),l())}function xe(t,a){t&1&&f(0,"i",53)}function Se(t,a){t&1&&f(0,"i",54)}var $e=(()=>{let a=class a{constructor(e,p,o,d,g,ne,oe){this.route=e,this.router=p,this.doctorService=o,this.toastr=d,this.platformId=g,this.fb=ne,this.userService=oe,this.destroy$=new F,this.dates=[],this.isLoading=!1,this.slotsDetails=[],this.appoinMentDetail={typeofConsultaion:"",bookingDate:new Date,slotTime:""},this.bookedSlots=[],this.loadDates()}ngOnInit(){this.appointmentForm=this.fb.group({typeofConsultaion:[this.appoinMentDetail.typeofConsultaion,E.required],bookingDate:[this.appoinMentDetail.bookingDate,E.required],slotTime:[this.appoinMentDetail.slotTime,E.required]}),this.route.params.subscribe(e=>{console.log("Doctor Profile Page Params",e),e&&e.id?(this.doctorId=e.id,this.findDoctor()):this.router.navigate(["/find-doctors"])}),V(1e4).pipe(N(this.destroy$)).subscribe(()=>{this.getBookedSlots()})}loadDates(){let e=new Date;for(let p=0;p<7;p++){let o=new Date(e.getTime()+p*24*60*60*1e3);this.dates.push(o)}this.selectedDate=this.dates[0]}selectDate(e){this.selectedDate=e,this.appoinMentDetail.bookingDate=e,this.appointmentForm.get("bookingDate")?.setValue(e),this.getBookedSlots()}findDoctor(){this._doctorSubscription=this.doctorService.getDoctorById(this.doctorId).subscribe({next:e=>{console.log(e.data),this.doctorDetails=e.data.doctor,this.doctorDetails.selectedSlots&&(this.slotsDetails=this.doctorDetails.selectedSlots,console.log(this.slotsDetails),this.getBookedSlots())},error:e=>{this.toastr.error(e),this.router.navigate(["/find-doctors"])}})}getBookedSlots(){this.getBookedSubscription=this.userService.getBookedSlots(this.doctorId,this.selectedDate).subscribe({next:e=>{console.log("booked slots",e.data),this.bookedSlots=e.data},error:e=>{this.toastr.error(e)}})}getSpecializationName(e){return typeof e=="object"&&e!==null?e.name:e||"Not available"}getIconClass(e){switch(e){case"video":return"fas fa-video text-blue-500 mr-2";case"chat":return"fas fa-comment text-blue-500 mr-2";case"clinic":return"fas fa-hospital text-blue-500 mr-2";default:return""}}selectConsultation(e){this.appoinMentDetail.typeofConsultaion=e,this.appointmentForm.get("typeofConsultaion")?.setValue(e)}selectSlot(e){this.appoinMentDetail.slotTime=e,this.appointmentForm.get("slotTime")?.setValue(e)}getMorningSlots(){if(this.slotsDetails.length>0){let e=this.slotsDetails?.find(d=>{let g=new Date(d.date);return g.getFullYear()===this.selectedDate.getFullYear()&&g.getMonth()===this.selectedDate.getMonth()&&g.getDate()===this.selectedDate.getDate()}),p=new Date().getHours();return new Date().getDate()===this.selectedDate.getDate()?e?e.slots.filter(d=>d.split(" ")[1]==="AM"&&parseInt(d.split(" ")[0].split(":")[0])>=p):[]:e?e.slots.filter(d=>d.split(" ")[1]==="AM"):[]}else return[]}getAfternoonSlots(){if(this.slotsDetails.length>0){let e=this.slotsDetails?.find(d=>{let g=new Date(d.date);return g.getFullYear()===this.selectedDate.getFullYear()&&g.getMonth()===this.selectedDate.getMonth()&&g.getDate()===this.selectedDate.getDate()}),p=new Date().getHours();return new Date().getDate()===this.selectedDate.getDate()?e?e.slots.filter(d=>d.split(" ")[1]==="PM"&&parseInt(d.split(" ")[0].split(":")[0])>=p):[]:e?e.slots.filter(d=>d.split(" ")[1]==="PM"):[]}else return[]}saveAppoinmentDetails(){this.appointmentForm.valid?(this.isLoading=!0,console.log("Form values:",this.appointmentForm.value),this.userService.saveAppointment(this.appointmentForm.value,this.doctorId).subscribe({next:e=>{console.log("response from slotbokking user",e),this.isLoading=!1,this.router.navigate(["/checkout",e.data])},error:e=>{this.isLoading=!1,console.log("response from slotbokking user",e),this.toastr.error(e)}})):this.toastr.warning("Please select all details")}isSlotBooked(e){return console.log(e,this.bookedSlots.includes(e)),this.bookedSlots.includes(e)}ngOnDestroy(){this._doctorSubscription?.unsubscribe(),this.getBookedSubscription?.unsubscribe(),this.destroy$.next(),this.destroy$.complete()}};a.\u0275fac=function(p){return new(p||a)(_(J),_(K),_(te),_(ee),_(O),_(X),_(Z))},a.\u0275cmp=P({type:a,selectors:[["app-appoinment-slot-booking"]],standalone:!0,features:[H],decls:64,vars:18,consts:[["morningNotAvailable",""],["afternoonNotAvailable",""],[1,"mb-6"],[1,"relative","w-full","my-2","md:my-8","flex","flex-col","items-start","space-y-4","sm:flex-row","sm:space-y-0","sm:space-x-6","px-4","py-8","border-2","border-gray-400","dark:border-gray-400","shadow-lg","rounded-lg"],[1,"absolute","text-xs","font-medium","top-0","left-0","rounded-br-lg","rounded-tl-lg","px-2","py-1","bg-primary-100","dark:bg-gray-900","dark:text-gray-300","border-gray-400","dark:border-gray-400","border-b-2","border-r-2","border-dashed"],[1,"w-full","flex","justify-center","sm:justify-start","sm:w-auto"],[1,"object-cover","w-20","h-20","mt-3","mr-3","rounded-full",3,"src"],[1,"w-full","sm:w-auto","flex","flex-col","items-center","sm:items-start"],["itemprop","author",1,"font-display","mb-2","text-lg","font-semibold","dark:text-gray-500"],[1,"text-black","mb-2"],[1,"flex","gap-4"],[1,"text-black","text-center","sm:text-left"],[4,"ngFor","ngForOf"],[1,"p-3","bg-gray-100"],[1,"grid","grid-cols-1","md:grid-cols-3","gap-4"],[1,"col-md-3","col-sm-12","mt-3","info-part","border-r","border-gray-200"],[1,"py-2","border-b","border-gray-200","font-semibold"],[1,"icon-box"],[1,"flex","gap-3",3,"routerLink"],["stroke","currentColor","fill","currentColor","stroke-width","0","viewBox","0 0 512 512","height","1em","width","1em","xmlns","http://www.w3.org/2000/svg",1,"icon"],["d","M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"],[1,"flex","gap-3","mt-5"],[1,"text-lg","font-semibold"],[1,"flex","flex-col","gap-3","mt-3","p-2"],[1,"col-md-5","col-sm-12","mt-3","border-r","border-gray-200"],[1,"info-date-card","grid","grid-cols-2","gap-4","p-3"],["class","mb-3",4,"ngFor","ngForOf"],[1,"col-md-4","col-sm-12","mt-3"],[1,"py-2","border-b","border-gray-200","info-head-date"],[1,"select-time-div"],[1,"text-xl","font-semibold","mb-2"],[1,"text-secondary","text-sm"],[1,"grid","grid-cols-2","gap-4","text-center"],[4,"ngIf","ngIfElse"],[1,"select-time-div","mt-6"],[1,"flex","justify-end","mt-5"],[1,"flex","items-center","bg-blue-500","text-white","px-4","py-2","rounded-md",3,"click"],["class","fas fa-arrow-right ml-2",4,"ngIf"],["class","fas fa-spinner fa-spin",4,"ngIf"],[4,"ngIf"],[1,"fas","fa-video","mr-1"],[1,"fas","fa-comment","mr-1","ml-2"],[1,"fas","fa-hospital","mr-1"],[1,"w-ful","text-blue-500","border","border-blue-500","py-2","px-4","rounded-lg","hover:bg-blue-500","hover:text-white","hover:border-transparent","transition","duration-300",3,"click","ngClass"],[3,"ngClass"],[1,"mb-3"],[1,"p-3","mb-3","rounded-lg","text-center","border","border-blue-500","hover:cursor-pointer",3,"click","ngClass"],[1,"select-month","text-lg"],[1,"select-day-num","text-3xl","font-bold"],[1,"select-month"],["type","button",1,"ant-btn","ant-btn-default","ant-btn-sm","mb-3","border","border-blue-500","hover:text-blue-400","px-3","py-2","rounded-lg",3,"click","disabled","ngClass"],[1,"text-red-600","font-semibold","bg-red-100","p-3","rounded-md"],["type","button",1,"ant-btn","ant-btn-default","ant-btn-sm","mb-3","border","border-blue-500","px-3","py-2","rounded-lg",3,"click","disabled","ngClass"],[1,"fas","fa-arrow-right","ml-2"],[1,"fas","fa-spinner","fa-spin"]],template:function(p,o){if(p&1){let d=D();n(0,"div",2)(1,"div",3)(2,"span",4),s(3,` Doctor
`),l(),n(4,"div",5),f(5,"img",6),l(),n(6,"div",7)(7,"p",8),s(8),l(),n(9,"p",9),s(10),l(),n(11,"div",10)(12,"p",11),u(13,pe,3,2,"span",12),l(),n(14,"p",11),u(15,de,2,1,"span",12),l()()()(),n(16,"div",13)(17,"div",14)(18,"div",15)(19,"p",16),s(20,"Would you like to schedule an Interview? Pick a Type of consultation"),l(),n(21,"div",17)(22,"div",18),$(),n(23,"svg",19),f(24,"path",20),l(),j(),n(25,"p"),s(26),l()(),n(27,"div",21)(28,"p",22),s(29,"Select the Consultaion Type"),l()(),n(30,"div",23),u(31,me,6,8,"ng-container",12),l()()(),n(32,"div",24)(33,"p",16),s(34,"Pick a Time "),l(),n(35,"div",25),u(36,ge,11,16,"div",26),l()(),n(37,"div",27)(38,"p",28),s(39),l(),n(40,"div",29)(41,"h4",30),s(42,"Morning Time "),n(43,"span",31),s(44,"(8AM - 12PM)"),l()(),n(45,"div",32),u(46,fe,2,1,"ng-container",33)(47,be,2,0,"ng-template",null,0,A),l(),n(49,"div",34)(50,"h4",30),s(51,"After Noon Time "),n(52,"span",31),s(53,"(1PM - 5PM)"),l()(),n(54,"div",32),u(55,he,2,1,"ng-container",33)(56,ve,2,0,"ng-template",null,1,A),l()()()()()(),n(58,"div",35),f(59,"div"),n(60,"button",36),y("click",function(){return x(d),S(o.saveAppoinmentDetails())}),s(61," Next "),u(62,xe,1,0,"i",37)(63,Se,1,0,"i",38),l()()()}if(p&2){let d=M(48),g=M(57);r(5),c("src",o.doctorDetails&&o.doctorDetails.profilePic?o.doctorDetails.profilePic:"",L),r(3),T(" ",o.doctorDetails.firstName," ",o.doctorDetails.lastName," "),r(2),b(" ",o.getSpecializationName(o.doctorDetails.specialization)," "),r(3),c("ngForOf",o.doctorDetails.consultationFee),r(2),c("ngForOf",o.doctorDetails.consultationFee),r(7),c("routerLink","/get-doctor/"+o.doctorDetails._id),r(4),T("With Doctor ",o.doctorDetails.firstName," ",o.doctorDetails.lastName,""),r(5),c("ngForOf",o.doctorDetails.typesOfConsultation),r(5),c("ngForOf",o.dates),r(3),b("Selected - ",o.appoinMentDetail.slotTime," "),r(7),c("ngIf",o.getMorningSlots().length>0)("ngIfElse",d),r(9),c("ngIf",o.getAfternoonSlots().length>0)("ngIfElse",g),r(7),c("ngIf",!o.isLoading),r(),c("ngIf",o.isLoading)}},dependencies:[G,z,Y,q,U,W,Q]});let t=a;return t})();export{$e as AppoinmentSlotBookingComponent};
