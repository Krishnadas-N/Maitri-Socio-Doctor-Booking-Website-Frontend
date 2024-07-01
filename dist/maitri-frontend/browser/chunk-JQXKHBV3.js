import{a as ae}from"./chunk-OMDYQEF5.js";import{a as se}from"./chunk-6DWR73P4.js";import{a as oe}from"./chunk-UOCIQOZY.js";import{a as re}from"./chunk-MWTIUON7.js";import"./chunk-3RJVMK53.js";import"./chunk-66G5UFEZ.js";import{a as ie}from"./chunk-A2DM27PQ.js";import"./chunk-OUAMXWST.js";import{c as ne}from"./chunk-63APZDV3.js";import"./chunk-LFVSKKQO.js";import"./chunk-SXFKYE6F.js";import"./chunk-XVPSVN7Z.js";import{a as ee}from"./chunk-KTKKQ74Q.js";import{a as te}from"./chunk-35SNKNNU.js";import{a as X}from"./chunk-F3MSB2UV.js";import"./chunk-WAWZTAIB.js";import"./chunk-7B4WEPGY.js";import{a as Q,c as Y}from"./chunk-ONIKTDMA.js";import{C as K,c as Z,g as q,l as J}from"./chunk-IWUKBY46.js";import"./chunk-7ZKIOEOA.js";import"./chunk-Y5BMXVS7.js";import{Ac as H,Cc as G,Db as f,Dc as $,Ea as u,Fa as _,Fb as m,Ga as g,Ha as x,Lb as k,Pb as o,Qb as r,Rb as d,Sb as w,Tb as y,Vb as S,Yb as C,_b as s,ec as V,fb as b,fc as j,fd as F,gb as I,gc as O,gd as A,hc as P,ic as p,jc as D,kc as z,lb as l,lc as L,mb as h,nd as N,oc as T,pc as M,pd as W,qc as U,sb as E,sc as B,ta as R}from"./chunk-PWWHKO4X.js";import"./chunk-4LMIJWLY.js";var _e=["chatContainer"];function ge(t,a){if(t&1){let i=S();o(0,"button",36),C("click",function(){u(i);let n=s(3);return _(n.toggleConsultation())}),p(1," Finish Consultation "),r()}}function he(t,a){if(t&1&&(o(0,"div",32)(1,"div",33),f(2,ge,2,0,"button",34),o(3,"button",35),p(4," Edit "),r(),o(5,"button",35),p(6," Archive "),r()()()),t&2){let i=s(2);l(2),m("ngIf",!i.conversationalData.isClosed&&i.userType==="Doctor")}}function fe(t,a){if(t&1&&(o(0,"video",45),d(1,"source",48),p(2," Your browser does not support the video tag. "),r()),t&2){let i=s(2).$implicit;l(),m("src",i.content.fileUrl,b)}}function ve(t,a){if(t&1&&(o(0,"audio",46),d(1,"source",49),p(2," Your browser does not support the audio tag. "),r()),t&2){let i=s(2).$implicit;l(),m("src",i.content.fileUrl,b)}}function xe(t,a){if(t&1&&d(0,"iframe",47),t&2){let i=s(2).$implicit;m("src",i.content.fileUrl,I)}}function Ce(t,a){if(t&1&&(o(0,"div"),p(1),r()),t&2){let i=s(2).$implicit;l(),D(i.content.text)}}function be(t,a){if(t&1&&(w(0),o(1,"div",38)(2,"div",39)(3,"div",40),d(4,"img",41),r(),o(5,"div",42)(6,"div",43),p(7),o(8,"span",44),p(9),H(10,"date"),r()(),f(11,fe,3,1,"video",45)(12,ve,3,1,"audio",46)(13,xe,1,1,"iframe",47)(14,Ce,2,1,"div"),r()()(),y()),t&2){let i,e,n,c=s().$implicit,v=s(2);l(4),m("src",(i=v.getUserDetails(c.senderId))==null?null:i.profilePic,b),l(3),z(" ",(e=v.getUserDetails(c.senderId))==null?null:e.firstName," "),l(2),D(G(10,4,c.createdAt,"shortTime")),l(2),k((n=c.messageType)==="video"?11:n==="audio"?12:n==="document"?13:14)}}function we(t,a){if(t&1&&(w(0),o(1,"div"),p(2),r(),y()),t&2){let i=s(2).$implicit;l(2),D(i.content.text)}}function ye(t,a){if(t&1&&(w(0),o(1,"video",45),d(2,"source",48),p(3," Your browser does not support the video tag. "),r(),y()),t&2){let i=s(2).$implicit;l(2),m("src",i.content.fileUrl,b)}}function Se(t,a){if(t&1&&(w(0),o(1,"audio",46),d(2,"source",49),p(3," Your browser does not support the audio tag. "),r(),y()),t&2){let i=s(2).$implicit;l(2),m("src",i.content.fileUrl,b)}}function ke(t,a){if(t&1&&(w(0),d(1,"iframe",47),y()),t&2){let i=s(2).$implicit;l(),m("src",i.content.fileUrl,I)}}function De(t,a){if(t&1&&(o(0,"div",50)(1,"div",51)(2,"div",40),d(3,"img",41),r(),o(4,"div",52),f(5,we,3,1,"ng-container",53)(6,ye,4,1,"ng-container",53)(7,Se,4,1,"ng-container",53)(8,ke,2,1,"ng-container",53),r()()()),t&2){let i,e=s().$implicit,n=s(2);l(3),m("src",(i=n.getUserDetails(e.senderId))==null?null:i.profilePic,b),l(2),m("ngIf",e.messageType==="text"),l(),m("ngIf",e.messageType==="video"),l(),m("ngIf",e.messageType==="audio"),l(),m("ngIf",e.messageType==="document")}}function Ie(t,a){if(t&1&&(w(0),f(1,be,15,7,"ng-container",37)(2,De,9,5,"ng-template",null,1,$),y()),t&2){let i=a.$implicit,e=P(3),n=s(2);l(),m("ngIf",!n.isCurrentLoggedUser(i.senderId))("ngIfElse",e)}}function Te(t,a){if(t&1){let i=S();o(0,"div")(1,"button",55),g(),o(2,"svg",56),d(3,"path",57),r()()(),x(),o(4,"div",58)(5,"div",59)(6,"input",60),U("ngModelChange",function(n){u(i);let c=s(3);return M(c.message,n)||(c.message=n),_(n)}),C("keyup.enter",function(){u(i);let n=s(3);return _(n.sendMessage(n.message))}),r(),o(7,"button",61),g(),o(8,"svg",62),d(9,"path",63),r()()()(),x(),o(10,"div",64)(11,"button",65),C("click",function(){u(i);let n=s(3);return _(n.sendMessage(n.message))}),o(12,"span"),p(13,"Send"),r(),o(14,"span",66),g(),o(15,"svg",67),d(16,"path",68),r()()()()}if(t&2){let i=s(3);l(6),T("ngModel",i.message)}}function Me(t,a){if(t&1){let i=S();o(0,"div",69),C("click",function(){u(i);let n=s(3);return _(n.toggleConsultation())}),p(1," Start Consultation "),r()}}function Ue(t,a){if(t&1&&f(0,Te,17,1)(1,Me,2,0,"div",54),t&2){let i=s(2);k(i.conversationalData.isClosed?1:0)}}function Re(t,a){if(t&1){let i=S();o(0,"div")(1,"button",55),g(),o(2,"svg",56),d(3,"path",57),r()()(),x(),o(4,"div",58)(5,"div",59)(6,"input",60),U("ngModelChange",function(n){u(i);let c=s(3);return M(c.message,n)||(c.message=n),_(n)}),C("keyup.enter",function(){u(i);let n=s(3);return _(n.sendMessage(n.message))}),r(),o(7,"button",61),g(),o(8,"svg",62),d(9,"path",63),r()()()(),x(),o(10,"div",64)(11,"button",65),C("click",function(){u(i);let n=s(3);return _(n.sendMessage(n.message))}),o(12,"span"),p(13,"Send"),r(),o(14,"span",66),g(),o(15,"svg",67),d(16,"path",68),r()()()()}if(t&2){let i=s(3);l(6),T("ngModel",i.message)}}function Ee(t,a){if(t&1){let i=S();o(0,"div",69),C("click",function(){u(i);let n=s(3);return _(n.navigateDoctorPage())}),p(1," Click here to Schedule an Appointment "),r()}}function Ve(t,a){if(t&1&&f(0,Re,17,1)(1,Ee,2,0,"div",54),t&2){let i=s(2);k(i.conversationalData.isClosed?1:0)}}function je(t,a){if(t&1){let i=S();o(0,"div",5)(1,"div",6)(2,"div",7)(3,"div",8)(4,"span",9),g(),o(5,"svg",10),d(6,"circle",11),r()(),x(),d(7,"img",12),r(),o(8,"div",13)(9,"div",14)(10,"span",15),p(11),r()()()(),o(12,"div",16)(13,"div",17),g(),o(14,"svg",18),d(15,"path",19),r()(),x(),o(16,"div",20),g(),o(17,"svg",18),d(18,"path",21),r()(),x(),o(19,"div",22)(20,"button",23),C("click",function(){u(i);let n=s();return _(n.isOptionsModalOpen=!n.isOptionsModalOpen)}),g(),o(21,"svg",24),d(22,"path",25),r()(),f(23,he,7,1,"div",26),r()()(),x(),o(24,"div",27)(25,"div",28,0)(27,"div",29),f(28,Ie,4,2,"ng-container",30),r()()(),o(29,"div",31),f(30,Ue,2,1)(31,Ve,2,1),r()()}if(t&2){let i=s();l(7),m("src",i.getUserDetails(i.recipientId).profilePic,b),l(4),L("",i.getUserDetails(i.recipientId).firstName," ",i.getUserDetails(i.recipientId).lastName,""),l(12),m("ngIf",i.isOptionsModalOpen),l(5),m("ngForOf",i.messages),l(2),k(i.userType==="Doctor"?30:31)}}function Oe(t,a){t&1&&(o(0,"div",70)(1,"div",71),d(2,"div",72)(3,"img",73),r()())}var it=(()=>{let a=class a{constructor(e,n,c,v,le,ce,de,me,pe,ue){this.webSocketService=e,this.router=n,this.route=c,this.messageService=v,this.userService=le,this.doctorService=ce,this.toastr=de,this.tokenService=me,this.renderer=pe,this.dialog=ue,this.message="",this.isDisplayDummy=!1,this.messages=[],this.isOptionsModalOpen=!1,this.appointmentId=null,this.messageInput="",this.newMessage=""}ngAfterViewInit(){this.scrollToBottom()}ngOnInit(){this.userType=this.route.snapshot.data.expectedRole,this.route.queryParams.subscribe(e=>{this.appointmentId=e.apppoinmentId||null,console.log("Appointment ID:",this.appointmentId)}),this.route.params.subscribe(e=>{if(e.id)if(this.conversationId=e.id,console.log("id is ",this.conversationId),this.conversationId==="inbox")this.isDisplayDummy=!0,console.log("Display default screen for inbox");else{this.isDisplayDummy=!1,this.fetchCurrentUser();let n=this.tokenService.getToken();n&&(this.webSocketService.setToken(n),this.webSocketService.emitGetMessages(this.conversationId),this.subscribeToMessages(),this.webSocketService.getnewMessages().subscribe(c=>{console.log(c),this.messages.push(c),this.scrollToBottom()}))}}),this.userType==="User"&&(this.subCloseConverstation(),this.subOpeningRatingModal())}subCloseConverstation(){this.webSocketService.getCloseConversation().subscribe(e=>{console.log("Received open_rating_modal event with data:",e),this.conversationalData.isClosed=e.status})}subOpeningRatingModal(){this.webSocketService.getRatingModalOpen().subscribe(e=>{console.log("Received open_rating_modal event with data:",e),this.openRatingDialog(e)})}scrollToBottom(){this.chatContainer&&(console.log(this.chatContainer),this.chatContainer.nativeElement.scrollTop=this.chatContainer.nativeElement.scrollHeight)}subscribeToMessages(){this.messageSubscription=this.webSocketService.getMessages().subscribe(e=>{this.messages=e,this.isDisplayDummy=!1,console.log("Messgaess already have",this.messages),this.scrollToBottom()})}sendMessage(e){console.log(e),e.trim()!==""&&(console.log("send message",this.senderId,this.recipientId,this.conversationId,e,this.userType),this.webSocketService.sendMessage("send message",this.senderId,this.recipientId,this.conversationId,e,this.userType),this.message="")}fetchConversationDetails(e){this.messageService.getConversationDetails(e).subscribe({next:n=>{console.log("converstaion Date",n),this.conversationalData=n.data;let c=this.conversationalData.members.find(v=>v.member._id.toString()!==this.senderId);this.recipientId=c.member._id,console.log(c,"this.conversationalData",this.conversationalData),console.log("Recipient and sender IDs:",this.recipientId,this.senderId)},error:n=>{this.userType==="Doctor"&&this.router.navigate(["/doctor/chats/inbox"])}})}fetchCurrentUser(){this.userType==="Doctor"?this.doctorService.getDoctor().subscribe({next:e=>{this.currentUserData=e.data,this.currentUserData&&this.currentUserData._id&&(this.senderId=this.currentUserData._id,this.webSocketService.addUser(this.currentUserData._id),this.fetchConversationDetails(this.conversationId),console.log("currentUserData",this.currentUserData))},error:e=>{this.toastr.error(e),this.router.navigate(["/doctor/chats/inbox"])}}):this.userType==="User"&&this.userService.getCurrentUser().subscribe({next:e=>{this.currentUserData=e.data,this.currentUserData&&this.currentUserData._id&&(this.senderId=this.currentUserData._id,this.webSocketService.addUser(this.currentUserData._id),this.fetchConversationDetails(this.conversationId),console.log("currentUserData",this.currentUserData))},error:e=>{this.toastr.error(e)}})}isCurrentLoggedUser(e){return this.currentUserData&&this.currentUserData._id?this.currentUserData?._id.toString()===e:!1}getUserDetails(e){if(this.conversationalData)return this.conversationalData.members.find(n=>n.member._id.toString()===e).member}ngOnDestroy(){this.messageSubscription&&this.messageSubscription.unsubscribe()}toggleConsultation(){this.userType==="Doctor"&&this.appointmentId&&this.doctorService.changeStatus("Completed",this.appointmentId).subscribe({next:e=>{this.messageService.toggleConsultation(this.conversationId).subscribe({next:n=>{this.conversationalData.isClosed=!this.conversationalData.isClosed,this.webSocketService.emitCloseConversation(this.appointmentId,this.recipientId,this.conversationalData.isClosed),this.conversationalData.isClosed&&this.appointmentId&&(this.webSocketService.emitOpenRatingModal(this.appointmentId,this.recipientId),this.openUploadPrescription())},error:n=>{this.toastr.error("Error toggling consultation: "+n)}})},error:e=>{this.toastr.error("Error changing appointment status: "+e)}})}navigateDoctorPage(){let e=this.conversationalData.members.find(n=>n.memberType==="Doctor");console.log(e),this.router.navigate(["/get-doctor",e.member._id])}openUploadPrescription(){this.dialog.open(ae,{data:{appoinmentId:this.appointmentId}})}openRatingDialog(e){console.log(e),console.log(e),this.dialog.open(oe,{width:"50%",data:{appoinmentId:e}})}};a.\u0275fac=function(n){return new(n||a)(h(re),h(Y),h(Q),h(se),h(X),h(ie),h(te),h(ee),h(E),h(ne))},a.\u0275cmp=R({type:a,selectors:[["app-chat-room"]],viewQuery:function(n,c){if(n&1&&V(_e,5),n&2){let v;j(v=O())&&(c.chatContainer=v.first)}},standalone:!0,features:[B],decls:3,vars:2,consts:[["chatContainer",""],["currentUserTemplate",""],[1,"flex","flex-col","w-full","flex-auto","h-screen","px-4","pb-4","pt-2"],["class","flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-50 h-full border-1 border-black",4,"ngIf"],["class","flex flex-col flex-auto items-center justify-center flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4",4,"ngIf"],[1,"flex","flex-col","flex-auto","flex-shrink-0","rounded-2xl","bg-gray-50","h-full","border-1","border-black"],[1,"py-2","px-3","bg-grey-lighter","flex","flex-row","justify-between","rounded-t-lg","items-center","bg-blue-500"],[1,"relative","flex","items-center","space-x-4"],[1,"relative"],[1,"absolute","text-green-500","right-0","bottom-0"],["width","20","height","20"],["cx","8","cy","8","r","8","fill","currentColor"],["alt","",1,"w-9","sm:w-10","h-9","sm:h-10","rounded-full",3,"src"],[1,"flex","flex-col","leading-tight"],[1,"text-2xl","mt-1","flex","gap-1","items-center"],[1,"text-gray-700","mr-3"],[1,"flex"],[1,"inline-flex","items-center","justify-center","rounded-lg","h-10","w-10","transition","duration-500","ease-in-out","hover:bg-blue-600","focus:outline-none"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 24 24","width","24","height","24"],["fill","black","fill-opacity",".5","d","M15.9 14.3H15l-.3-.3c1-1.1 1.6-2.7 1.6-4.3 0-3.7-3-6.7-6.7-6.7S3 6 3 9.7s3 6.7 6.7 6.7c1.6 0 3.2-.6 4.3-1.6l.3.3v.8l5.1 5.1 1.5-1.5-5-5.2zm-6.2 0c-2.6 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2 4.6-4.6 4.6z"],[1,"ml-6","inline-flex","items-center","justify-center","rounded-lg","h-10","w-10","transition","duration-500","ease-in-out","hover:bg-blue-600","focus:outline-none"],["fill","black","fill-opacity",".5","d","M1.816 15.556v.002c0 1.502.584 2.912 1.646 3.972s2.472 1.647 3.974 1.647a5.58 5.58 0 0 0 3.972-1.645l9.547-9.548c.769-.768 1.147-1.767 1.058-2.817-.079-.968-.548-1.927-1.319-2.698-1.594-1.592-4.068-1.711-5.517-.262l-7.916 7.915c-.881.881-.792 2.25.214 3.261.959.958 2.423 1.053 3.263.215l5.511-5.512c.28-.28.267-.722.053-.936l-.244-.244c-.191-.191-.567-.349-.957.04l-5.506 5.506c-.18.18-.635.127-.976-.214-.098-.097-.576-.613-.213-.973l7.915-7.917c.818-.817 2.267-.699 3.23.262.5.501.802 1.1.849 1.685.051.573-.156 1.111-.589 1.543l-9.547 9.549a3.97 3.97 0 0 1-2.829 1.171 3.975 3.975 0 0 1-2.83-1.173 3.973 3.973 0 0 1-1.172-2.828c0-1.071.415-2.076 1.172-2.83l7.209-7.211c.157-.157.264-.579.028-.814L11.5 4.36a.572.572 0 0 0-.834.018l-7.205 7.207a5.577 5.577 0 0 0-1.645 3.971z"],[1,"ml-6","inline-flex","items-center","justify-center","rounded-lg","relative","h-10","w-10","transition","duration-500","ease-in-out","hover:bg-blue-600","focus:outline-none"],["id","dropdownMenuIconButton","data-dropdown-toggle","dropdownDots","type","button",1,"inline-flex","items-center","p-2","text-sm","font-medium","text-center","rounded-lg","focus:ring-4","focus:outline-none","dark:text-white",3,"click"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","black","viewBox","0 0 4 15",1,"w-5","h-5"],["d","M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"],["class","absolute z-40 right-0 mt-44 w-48 bg-white rounded-lg shadow-lg",4,"ngIf"],[1,"flex","m-2","flex-col","h-full","overflow-x-auto","overflow-y-auto","mb-4"],[1,"flex","flex-col","h-full","overflow-y-scroll"],[1,"grid","grid-cols-12","gap-y-2"],[4,"ngFor","ngForOf"],[1,"flex","m-2","flex-row","items-center","h-16","rounded-xl","bg-white","w-full","px-4"],[1,"absolute","z-40","right-0","mt-44","w-48","bg-white","rounded-lg","shadow-lg"],[1,"py-1"],["class","block w-full text-center py-2 px-4 text-red-600 hover:text-red-900 border-b border-gray-200",3,"click",4,"ngIf"],[1,"block","w-full","text-center","py-2","px-4","hover:text-blue-600","border-b","border-gray-200"],[1,"block","w-full","text-center","py-2","px-4","text-red-600","hover:text-red-900","border-b","border-gray-200",3,"click"],[4,"ngIf","ngIfElse"],[1,"col-start-1","col-end-8","p-3","rounded-lg"],[1,"flex","flex-row","items-center"],[1,"flex","items-center","justify-center","h-10","w-10","rounded-full","bg-sky-500","flex-shrink-0"],["alt","userProfileHere",1,"object-cover","w-full","h-full","rounded-full","shadow",3,"src"],[1,"relative","ml-3","text-sm","bg-white","py-2","px-2","shadow","rounded-xl"],[1,"font-semibold","flex","justify-between"],[1,"text-black","font-thin","font-size","ml-2"],["controls","","width","200"],["controls",""],["width","100%","height","400",3,"src"],["type","video/mp4",3,"src"],["type","audio/mpeg",3,"src"],[1,"col-start-6","col-end-13","p-3","rounded-lg"],[1,"flex","items-center","justify-start","flex-row-reverse"],[1,"relative","mr-2","text-sm","bg-white","py-2","px-4","shadow","rounded-xl"],[4,"ngIf"],[1,"bg-gradient-to-br","from-blue-500","w-full","to-blue-600","font-serif","text-center","hover:from-blue-600","hover:to-blue-700","text-white","font-bold","py-3","px-6","rounded-md","shadow-lg","cursor-pointer","transition","duration-300","ease-in-out"],[1,"flex","items-center","justify-center","text-gray-400","hover:text-gray-600"],["fill","none","stroke","currentColor","viewBox","0 0 24 24","xmlns","http://www.w3.org/2000/svg",1,"w-5","h-5"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"],[1,"flex-grow","ml-4"],[1,"relative","w-full"],["type","text",1,"flex","w-full","border","rounded-xl","focus:outline-none","focus:border-indigo-300","pl-4","h-10",3,"ngModelChange","keyup.enter","ngModel"],[1,"absolute","flex","items-center","justify-center","h-full","w-12","right-0","top-0","text-gray-400","hover:text-gray-600"],["fill","none","stroke","currentColor","viewBox","0 0 24 24","xmlns","http://www.w3.org/2000/svg",1,"w-6","h-6"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"],[1,"ml-4"],[1,"flex","items-center","justify-center","bg-sky-500","hover:bg-sky-600","rounded-xl","text-white","px-4","py-1","flex-shrink-0",3,"click"],[1,"ml-2"],["fill","none","stroke","currentColor","viewBox","0 0 24 24","xmlns","http://www.w3.org/2000/svg",1,"w-4","h-4","transform","rotate-45","-mt-px"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M12 19l9 2-9-18-9 18 9-2zm0 0v-8"],[1,"bg-gradient-to-br","from-blue-500","w-full","to-blue-600","font-serif","text-center","hover:from-blue-600","hover:to-blue-700","text-white","font-bold","py-3","px-6","rounded-md","shadow-lg","cursor-pointer","transition","duration-300","ease-in-out",3,"click"],[1,"flex","flex-col","flex-auto","items-center","justify-center","flex-shrink-0","rounded-2xl","bg-gray-100","h-full","p-4"],[1,"relative","flex","justify-center","items-center"],[1,"absolute","animate-spin","rounded-full","h-32","w-32","border-t-4","border-b-4","border-purple-500"],["src","https://www.svgrepo.com/show/509001/avatar-thinking-9.svg",1,"rounded-full","h-28","w-28"]],template:function(n,c){n&1&&(o(0,"div",2),f(1,je,32,6,"div",3)(2,Oe,4,0,"div",4),r()),n&2&&(l(),m("ngIf",!c.isDisplayDummy),l(),m("ngIf",c.isDisplayDummy))},dependencies:[W,F,A,N,K,Z,q,J],styles:["[_ngcontent-%COMP%]::-webkit-scrollbar{width:0px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#bed4f1;border-radius:4px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{background-color:#cbd5e0;border-radius:4px}.font-size[_ngcontent-%COMP%]{font-size:9px}"]});let t=a;return t})();export{it as ChatRoomComponent};
