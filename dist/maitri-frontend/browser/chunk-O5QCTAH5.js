import{a as V}from"./chunk-EO3Y4BDF.js";import{a as R}from"./chunk-MGEDXSFK.js";import{a as P}from"./chunk-HPB4V32M.js";import"./chunk-RUFCWFVQ.js";import{a as E}from"./chunk-6SCAOAVA.js";import{a as F}from"./chunk-VJIANO3L.js";import"./chunk-5BLQ6IMQ.js";import{a as I,b as j,c as T}from"./chunk-N7UIUSV4.js";import{C as D}from"./chunk-H56WTM6A.js";import"./chunk-DHV3KFP7.js";import"./chunk-VNHCDGQ4.js";import{$b as x,Gc as C,Hc as U,Jb as g,Ka as f,La as b,Lb as m,Vb as s,Wb as n,Xb as d,cc as S,ec as h,jd as _,lb as v,oc as u,pc as w,rb as l,rc as k,rd as O,sb as i,td as M,yc as y,za as p}from"./chunk-VIIRXEWM.js";function B(c,r){if(c&1){let a=x();s(0,"div",8),S("click",function(){let t=f(a).$implicit,o=h();return b(o.navigateChat(t._id))}),s(1,"div",9),d(2,"img",10),n(),s(3,"div",11)(4,"div",12),u(5),n(),s(6,"span",13),u(7),C(8,"date"),n()()()}if(c&2){let a=r.$implicit,e=h();l(2),m("src",e.getOtherMember(a).profilePic,v),l(3),w(e.getOtherMember(a).firstName),l(2),k("",e.getOtherMember(a).username," - ",U(8,4,a.lastUpdate),"")}}var te=(()=>{let r=class r{constructor(e,t,o,N,$,z,A){this.webSocketService=e,this.route=t,this.tokenService=o,this.messagService=N,this.userService=$,this.doctorService=z,this.router=A,this.conversations=[],this.messages=[],this.messageInput="",this.newMessage=""}ngOnInit(){this.userType=this.route.snapshot.data.expectedRole,this.fetchCurrentUser();let e=this.tokenService.getToken();e&&this.webSocketService.setToken(e)}loadChatsOfUser(){this.messagService.getChatsOfUSer().subscribe({next:e=>{this.conversations=e.data,console.log(" this.consversations",this.conversations)},error:e=>{console.log(e)}})}fetchCurrentUser(){this.userType==="Doctor"?this.doctorService.getDoctor().subscribe({next:e=>{this.currentUser=e.data,this.webSocketService.addUser(this.currentUser._id),console.log("currentUser",this.currentUser),this.loadChatsOfUser()},error:e=>{}}):this.userType==="User"&&this.userService.getCurrentUser().subscribe({next:e=>{this.currentUser=e.data,this.webSocketService.addUser(this.currentUser._id),console.log("currentUser",this.currentUser),this.loadChatsOfUser()},error:e=>{}})}ngOnDestroy(){this.messageSubscription&&this.messageSubscription.unsubscribe(),this.webSocketService.disconnectSocket()}getOtherMember(e){return e.members.find(o=>o._id.toString()!==this.currentUser._id).member}navigateChat(e){this.userType==="Doctor"?this.router.navigate(["/doctor/chats",e]):this.router.navigate(["/chats/",e])}};r.\u0275fac=function(t){return new(t||r)(i(R),i(I),i(E),i(V),i(F),i(P),i(T))},r.\u0275cmp=p({type:r,selectors:[["app-chat-component"]],standalone:!0,features:[y],decls:9,vars:1,consts:[[1,"flex","w-full","h-screen","mt-1","antialiased","text-gray-800"],[1,"flex","flex-row","h-full","w-full","overflow-hidden"],[1,"flex","flex-col","py-3","pl-6","pr-2","w-1/3","bg-white","flex-shrink-0","h-screen","overflow-hidden"],[1,"flex","flex-col","w-full","border-r-2","overflow-y-hidden"],[1,"border-b-2","py-4","px-2"],["type","text","placeholder","search chatting",1,"py-2","px-2","border-2","border-gray-200","rounded-2xl","w-full"],["class","flex flex-row py-4 px-2 justify-center items-center border-b-2 cursor-pointer",3,"click",4,"ngFor","ngForOf"],[1,"w-2/3"],[1,"flex","flex-row","py-4","px-2","justify-center","items-center","border-b-2","cursor-pointer",3,"click"],[1,"w-1/4"],["alt","",1,"object-cover","h-12","w-12","rounded-full",3,"src"],[1,"w-full"],[1,"text-lg","font-semibold"],[1,"text-gray-500"]],template:function(t,o){t&1&&(s(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),d(5,"input",5),n(),g(6,B,9,6,"div",6),n()(),s(7,"div",7),d(8,"router-outlet"),n()()()),t&2&&(l(6),m("ngForOf",o.conversations))},dependencies:[D,j,M,_,O],styles:[".scrollbar-w-2[_ngcontent-%COMP%]::-webkit-scrollbar{width:.25rem;height:.25rem}.scrollbar-track-blue-lighter[_ngcontent-%COMP%]::-webkit-scrollbar-track{--bg-opacity: 1;background-color:#f7fafc;background-color:rgba(247,250,252,var(--bg-opacity))}.scrollbar-thumb-blue[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{--bg-opacity: 1;background-color:#edf2f7;background-color:rgba(237,242,247,var(--bg-opacity))}.scrollbar-thumb-rounded[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-radius:.25rem}"]});let c=r;return c})();export{te as ChatComponent};