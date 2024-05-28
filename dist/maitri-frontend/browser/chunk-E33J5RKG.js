import{a as J}from"./chunk-NKTAOUUJ.js";import{a as U,b as j,c as G}from"./chunk-VJKUCSBB.js";import{a as L,b as H}from"./chunk-7V6IRT4D.js";import{a as F}from"./chunk-GIIXZKBG.js";import"./chunk-5BLQ6IMQ.js";import{c as _}from"./chunk-N7UIUSV4.js";import"./chunk-DHV3KFP7.js";import"./chunk-VNHCDGQ4.js";import{Ac as N,Gc as I,Hc as R,Ja as M,Jb as C,Lb as m,Ma as v,Na as f,Vb as e,Wb as t,Xb as p,cc as B,gd as T,hc as P,jd as z,lb as w,nd as O,oc as n,pc as h,qc as x,rb as o,rd as V,sb as D,td as y,yc as b,za as u}from"./chunk-VIIRXEWM.js";var Y=l=>({"width.px":l}),$=(()=>{let r=class r{constructor(){this.rating=0,this.starWidth=0}ngOnInit(){}ngOnChanges(){this.rating!==null?this.starWidth=this.rating*75/5:this.starWidth=0}};r.\u0275fac=function(d){return new(d||r)},r.\u0275cmp=u({type:r,selectors:[["app-star-rating"]],inputs:{rating:"rating"},standalone:!0,features:[M,b],decls:3,vars:3,consts:[[1,"star-rating",3,"ngStyle"],[1,"star-outer"],[1,"star-inner"]],template:function(d,a){d&1&&(e(0,"div",0)(1,"div",1),p(2,"div",2),t()()),d&2&&m("ngStyle",N(1,Y,a.starWidth))},dependencies:[y,O],styles:[`.star-outer[_ngcontent-%COMP%]{width:75px;height:15px;display:inline-block;position:relative;background:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="%23ffd700" fill="none"/></svg>') repeat-x}.star-inner[_ngcontent-%COMP%]{height:15px;display:inline-block;position:absolute;top:0;left:0;background:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23ffd700"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="%23ffd700" fill="%23ffd700"/></svg>') repeat-x}`]});let l=r;return l})();function Z(l,r){if(l&1&&(e(0,"tr")(1,"td",39)(2,"div",40)(3,"div",41),p(4,"img",42),t(),e(5,"div",43)(6,"div",44),n(7),t()()()(),e(8,"td",39)(9,"p"),n(10),t()(),e(11,"td",39)(12,"p"),n(13),t()(),e(14,"td",39),p(15,"app-star-rating",45),t()()),l&2){let s=r.$implicit;o(4),P("alt",s.fullName),m("src",s.profilePic,w),o(3),x(" ",s.fullName," "),o(3),h(s.specialization),o(3),x("\u20B9 ",s.totalEarnings,""),o(2),m("rating",s.averageRating)}}function ee(l,r){if(l&1&&(e(0,"tr")(1,"td",39),n(2),t(),e(3,"td",39),p(4,"img",46),t(),e(5,"td",39),n(6),I(7,"date"),t(),e(8,"td",39),n(9),t()()),l&2){let s=r.$implicit;o(2),h(s.fullName),o(2),m("src",s.profilePic,w),o(2),h(s.lastAppointmentDate?R(7,4,s.lastAppointmentDate):"N/A"),o(3),h(s.totalPaid)}}L.register(...H);var ce=(()=>{let r=class r{constructor(i,d){this.adminService=i,this.router=d,this.eventDate=T(new Date,"MMM dd, yyyy","en"),this.tableHeaders=[{text:"Doctor Name",key:"doctorName"},{text:"Speciality",key:"speciality"},{text:"Patient Name",key:"patientName"},{text:"Appointment Time",key:"appointmentTime"},{text:"Status",key:"status"},{text:"Amount",key:"amount"}],this.config={showViewButton:!0,showDeleteButton:!1},this.tableRows=[{productName:"Apple MacBook Pro 13",stock:77,status:"Active"}]}ngOnInit(){this.fetchDasboardDetails(),this.getUserAndDoctorDashboardDetails(),this.getAppoinmentDetails()}fetchDasboardDetails(){this.adminService.getDashboardDetails().subscribe({next:i=>{console.log("DashBoard Data",i),this.dashBoardData=i.data,this.intiateRevenueGraph(),this.intiateAppoinmentStatusGraph()},error:i=>{console.log(i)}})}intiateRevenueGraph(){let i=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],d=this.dashBoardData.monthlyRevenue.map(c=>`${i[c.month-1]} ${c.year}`),a=this.dashBoardData.monthlyRevenue.map(c=>c.monthlyRevenue);this.lineChartData={datasets:[{data:a,label:"Revenue",backgroundColor:"rgba(148,159,177,0.2)",borderColor:"rgba(70, 130, 180, 0.7)",pointBackgroundColor:"rgba(70, 130, 180, 0.7)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(60, 179, 113, 0.7)",fill:"origin"}],labels:d},this.lineChartOptions={maintainAspectRatio:!1,aspectRatio:.6,elements:{line:{tension:.5}},scales:{y:{position:"left"},y1:{position:"right",grid:{color:"rgba(255,0,0,0.3)"},ticks:{color:"red"}}},plugins:{legend:{labels:{usePointStyle:!0,color:"rgba(255,0,0,0.3)"}}}}}intiateAppoinmentStatusGraph(){let i=getComputedStyle(document.documentElement),d=i.getPropertyValue("--text-color"),a=i.getPropertyValue("--text-color-secondary"),c=i.getPropertyValue("--surface-border"),g=[],E=[],k=[],A=[],W=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];this.dashBoardData.monthlyStats.forEach(({year:q,month:K,stats:S})=>{g.push(`${W[K-1]} ${q}`),E.push(S.Completed||0),k.push(S.Cancelled||0),A.push(S.Pending||0)}),this.appoinmentStatusdata={labels:g,datasets:[{label:"Completed Appointments",data:E,fill:!1,tension:.4,borderColor:i.getPropertyValue("--blue-500")},{label:"Cancelled Appointments",data:k,fill:!1,borderDash:[5,5],tension:.4,borderColor:i.getPropertyValue("--teal-500")},{label:"Pending Appointments",data:A,fill:!0,borderColor:i.getPropertyValue("--orange-500"),tension:.4,backgroundColor:"rgba(255,167,38,0.2)"}]},this.appoinmentStatusoptions={maintainAspectRatio:!1,aspectRatio:.6,plugins:{legend:{labels:{color:d}}},scales:{x:{ticks:{color:a},grid:{color:c}},y:{ticks:{color:a},grid:{color:c}}}}}getUserAndDoctorDashboardDetails(){this.adminService.getUsersAndDoctorsDashBoardDetails().subscribe({next:i=>{console.log("getUsersAndDoctorsDashBoardDetails",i),this.doctorAndUserDetails=i.data},error:()=>{}})}getAppoinmentDetails(){this.adminService.getAppoinmentDetails().subscribe({next:i=>{console.log("response from appoinmentListing",i),this.appoinmentDetails=i.data.appointments},error:i=>{console.log(i)}})}viewAppoinment(i){this.router.navigate(["/admin/appointments",i])}};r.\u0275fac=function(d){return new(d||r)(D(F),D(_))},r.\u0275cmp=u({type:r,selectors:[["app-admin-dashboard"]],standalone:!0,features:[b],decls:121,vars:14,consts:[[1,"m-3","rounded-xl","p-3","h-full","w-[98%]"],[1,"grid","grid-cols-12","gap-3"],[1,"grid","grid-cols-12","col-span-12","gap-3","xxl:col-span-9"],[1,"col-span-12","mt-1"],[1,"transform","hover:scale-105","transition","duration-300","shadow-xl","rounded-lg","col-span-12","sm:col-span-6","xl:col-span-3","intro-y","bg-white"],[1,"bg-white","shadow-lg","rounded-lg","p-6","flex","items-center","space-x-4"],[1,"bg-blue-500","text-white","rounded-full","p-3"],["fill","none","stroke","currentColor","viewBox","0 0 24 24","xmlns","http://www.w3.org/2000/svg",1,"w-6","h-6"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M17 20h5v-2a4 4 0 00-4-4h-5a4 4 0 00-4 4v2h5zM9 20H4v-2a4 4 0 014-4h5a4 4 0 014 4v2H9zM12 12a4 4 0 100-8 4 4 0 000 8zM18 8a4 4 0 100-8 4 4 0 000 8z"],[1,"text-lg","font-semibold","text-gray-800"],[1,"text-2xl","font-bold","text-gray-900"],[1,"fa-solid","fa-bed-pulse","w-6","h-6",2,"color","#ffff","font-size","x-large"],["id","patients-count",1,"text-2xl","font-bold","text-gray-900"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M8 7V3m8 4V3m-5 9h6m-6 4h6M3 21h18M3 5h18a2 2 0 012 2v14a2 2 0 01-2 2H3a2 2 0 01-2-2V7a2 2 0 012-2z"],["id","appointments-count",1,"text-2xl","font-bold","text-gray-900"],[1,"bg-yellow-500","text-white","rounded-full","p-3"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 4a2 2 0 100-4 2 2 0 000 4zm0-4V3m0 7v4m-6 4h12m-3 4H9m3-4a6 6 0 100-12 6 6 0 000 12z"],["id","revenue",1,"text-2xl","font-bold","text-gray-900"],[1,"col-span-12","mt-5"],[1,"grid","gap-2","grid-cols-1","lg:grid-cols-2"],[1,"bg-white","shadow-lg","p-4"],["height","70",3,"data","options"],[1,"bg-white","shadow-lg"],["type","line",3,"data","options"],[1,"bg-white","p-4","shadow-lg","rounded-lg"],[1,"font-bold","text-base"],[1,"mt-4"],[1,"flex","flex-col"],[1,"-my-2","overflow-x-auto"],[1,"py-2","align-middle","inline-block","min-w-full"],[1,"shadow","overflow-hidden","border-b","border-gray-200","sm:rounded-lg","bg-white"],[1,"min-w-full","divide-y","divide-gray-200"],[1,"px-6","py-3","bg-gray-50","text-xs","leading-4","font-medium","text-gray-500","uppercase","tracking-wider"],[1,"flex","cursor-pointer"],[1,"mr-2"],[1,"bg-white","divide-y","divide-gray-200"],[4,"ngFor","ngForOf"],[1,"grid","gap-2","grid-cols-1","lg:grid-cols-1"],[3,"viewAppoinment","config","headers","rows","actions"],[1,"px-6","py-4","whitespace-no-wrap","text-sm","leading-5"],[1,"flex","items-center"],[1,"flex-shrink-0","h-10","w-10"],[1,"h-10","w-10","rounded-full",3,"src","alt"],[1,"ml-4"],[1,"text-sm","font-medium","text-gray-900"],[3,"rating"],["alt","Profile Picture",1,"h-10","w-10","rounded-full",3,"src"]],template:function(d,a){d&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",1)(5,"a",4)(6,"div",5)(7,"div",6),v(),e(8,"svg",7),p(9,"path",8),t()(),f(),e(10,"div")(11,"h2",9),n(12,"Total Doctors"),t(),e(13,"div",10),n(14),t()()()(),e(15,"a",4)(16,"div",5)(17,"div",6),p(18,"i",11),t(),e(19,"div")(20,"h2",9),n(21,"Total Patients"),t(),e(22,"div",12),n(23),t()()()(),e(24,"a",4)(25,"div",5)(26,"div",6),v(),e(27,"svg",7),p(28,"path",13),t()(),f(),e(29,"div")(30,"h2",9),n(31,"Appointments"),t(),e(32,"div",14),n(33),t()()()(),e(34,"a",4)(35,"div",5)(36,"div",15),v(),e(37,"svg",7),p(38,"path",16),t()(),f(),e(39,"div")(40,"h2",9),n(41,"Total Revenue"),t(),e(42,"div",17),n(43),t()()()()()(),e(44,"div",18)(45,"div",19)(46,"div",20),p(47,"app-line-chart",21),t(),e(48,"div",22),p(49,"p-chart",23),t()()(),e(50,"div",18)(51,"div",19)(52,"div",24)(53,"h1",25),n(54,"Doctors"),t(),e(55,"div",26)(56,"div",27)(57,"div",28)(58,"div",29)(59,"div",30)(60,"table",31)(61,"thead")(62,"tr")(63,"th",32)(64,"div",33)(65,"span",34),n(66,"Doctor Name"),t()()(),e(67,"th",32)(68,"div",33)(69,"span",34),n(70,"Speciality"),t()()(),e(71,"th",32)(72,"div",33)(73,"span",34),n(74,"Earned"),t()()(),e(75,"th",32)(76,"div",33)(77,"span",34),n(78,"Reviews"),t()()()()(),e(79,"tbody",35),C(80,Z,16,6,"tr",36),t()()()()()()()(),e(81,"div",24)(82,"h1",25),n(83,"Patients"),t(),e(84,"div",26)(85,"div",27)(86,"div",28)(87,"div",29)(88,"div",30)(89,"table",31)(90,"thead")(91,"tr")(92,"th",32)(93,"div",33)(94,"span",34),n(95,"Patient Name"),t()()(),e(96,"th",32)(97,"div",33)(98,"span",34),n(99,"Email"),t()()(),e(100,"th",32)(101,"div",33)(102,"span",34),n(103,"Last Appoimnent"),t()()(),e(104,"th",32)(105,"div",33)(106,"span",34),n(107,"Total Paid"),t()()()()(),e(108,"tbody",35),C(109,ee,10,6,"tr",36),t()()()()()()()()()(),e(110,"div",18)(111,"div",37)(112,"div",24)(113,"h1",25),n(114,"Appointments"),t(),e(115,"div",26)(116,"div",27)(117,"div",28)(118,"div",29)(119,"div",30)(120,"app-appoinment-table",38),B("viewAppoinment",function(g){return a.viewAppoinment(g)}),t()()()()()()()()()()()()),d&2&&(o(14),h(a.dashBoardData.doctorsCount),o(9),h(a.dashBoardData.patientsCount),o(10),h(a.dashBoardData.totalCompleted),o(10),x("\u20B9 ",a.dashBoardData.totalRevenue,""),o(4),m("data",a.lineChartData)("options",a.lineChartOptions),o(2),m("data",a.appoinmentStatusdata)("options",a.appoinmentStatusoptions),o(31),m("ngForOf",a.doctorAndUserDetails.doctors),o(29),m("ngForOf",a.doctorAndUserDetails.patients),o(11),m("config",a.config)("headers",a.tableHeaders)("rows",a.appoinmentDetails)("actions",!0))},dependencies:[y,z,V,G,j,U,$,J]});let l=r;return l})();export{ce as AdminDashboardComponent};