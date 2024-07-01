import{a as l}from"./chunk-OUAMXWST.js";import{a}from"./chunk-NKMITRER.js";import{c as s,ha as c}from"./chunk-PWWHKO4X.js";var u=(()=>{let o=class o{constructor(){this.URL=a.SOCKET_URL,this.token=null}setToken(e){this.token=e,this.connect()}connect(){this.token?(this.webSocket=new l({url:`${this.URL}/chats`,options:{transports:["polling","websocket","webtransport"],extraHeaders:{Authorization:`Bearer ${this.token}`}}}),this.webSocket.on("connect_error",e=>{throw console.error("Error connecting to Socket.IO server:",e),new Error("Connection failed")})):console.error("Missing JWT token for Socket.IO connection")}on(e,t){this.webSocket&&this.webSocket.on(e,t)}sendMessage(e,t,n,k,g,h){let i={senderId:t,recipientId:n,conversationId:k,message:g,userType:h};console.log("messageData",e,i),this.webSocket?this.webSocket.emit(e,i):console.error("WebSocket not connected, cannot send message")}emitGetMessages(e){return this.webSocket.emit("getMessages",e)}getChats(e){return this.webSocket.fromEvent(e)}getnewMessages(){return new s(e=>{this.webSocket.on("new message",t=>{e.next(t)})})}getMessages(){return new s(t=>(this.webSocket.on("get-messages",n=>{console.log("get-messages",n),t.next(n)}),()=>{this.webSocket.disconnect()}))}addUser(e){console.log("Current user added to scoker",e),this.webSocket.emit("add users",e)}getError(){return new s(e=>{this.webSocket.on("error",t=>{e.next(t)})})}sendConsultationLink(e,t){this.webSocket.emit("consultation-link",{userId:e,consultationLink:t})}receiveConsultationLink(){return this.webSocket.fromEvent("consultation-link")}emitOpenRatingModal(e,t){this.webSocket.emit("open_rating_modal",{appointmentId:e,userId:t})}getRatingModalOpen(){return this.webSocket.fromEvent("open_rating_modal")}emitCloseConversation(e,t,n){this.webSocket.emit("toggle consultation",{appointmentId:e,userId:t,status:n})}getCloseConversation(){return this.webSocket.fromEvent("toggle consultation")}disconnectSocket(){this.webSocket&&this.webSocket.disconnect()}};o.\u0275fac=function(t){return new(t||o)},o.\u0275prov=c({token:o,factory:o.\u0275fac,providedIn:"root"});let r=o;return r})();export{u as a};
