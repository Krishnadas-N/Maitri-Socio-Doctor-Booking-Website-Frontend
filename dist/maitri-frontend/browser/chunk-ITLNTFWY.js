import{a as he}from"./chunk-66G5UFEZ.js";import{a as _e,b as xe}from"./chunk-4XTAZTIE.js";import{a as G}from"./chunk-BL5NSSXW.js";import{a as ue,b as fe}from"./chunk-63APZDV3.js";import{j as ge}from"./chunk-FEXZKP3R.js";import{a as z}from"./chunk-35SNKNNU.js";import{n as pe}from"./chunk-UC2OFU5X.js";import{c as oe}from"./chunk-ONIKTDMA.js";import{B as de,C as B,D as ce,c as W,e as j,g as A,h as re,l as le,m as se,p as ae,s as me}from"./chunk-IWUKBY46.js";import{Ac as $,Bc as Y,Db as u,Dc as ie,Ea as g,Eb as J,Fa as _,Fb as d,Ga as b,Ha as k,Hb as K,Ib as Q,Jb as X,Oa as q,Pb as i,Qb as o,Rb as c,Sb as S,Tb as E,Vb as y,Yb as f,_b as p,bc as D,bd as ne,fb as w,fd as R,gd as M,hc as Z,ic as m,jc as P,kc as H,lb as s,lc as F,mb as h,oc as L,pc as N,pd as V,qc as O,sc as T,ta as I,tc as ee,vc as te}from"./chunk-PWWHKO4X.js";var we=(t,l)=>({"w-3 h-3 rounded-full":!0,"bg-blue-500":t,"bg-gray-300":l});function ke(t,l){if(t&1&&(S(0),c(1,"img",15),E()),t&2){let e=p().$implicit;s(),d("src",e.url,w)}}function Se(t,l){if(t&1&&(S(0),i(1,"video",16),c(2,"source",17),m(3," Your browser does not support the video tag. "),o(),E()),t&2){let e=p().$implicit;s(2),d("src",e.url,w)}}function Ee(t,l){if(t&1&&(S(0),i(1,"div",13),u(2,ke,2,1,"ng-container",14)(3,Se,4,1,"ng-container",14),o(),E()),t&2){let e=l.$implicit,n=l.index,r=p();s(),K("hidden",n!==r.currentIndex),s(),d("ngIf",e.url.endsWith(".jpg")||e.url.endsWith(".jpeg")||e.url.endsWith(".png")||e.url.endsWith(".gif")||e.url.endsWith(".webp")),s(),d("ngIf",!(e.url.endsWith(".jpg")||e.url.endsWith(".jpeg")||e.url.endsWith(".png")||e.url.endsWith(".gif")||e.url.endsWith(".webp")))}}function Ie(t,l){if(t&1&&c(0,"button",18),t&2){let e=l.index,n=p();X(te(5,we,e===n.currentIndex,e!==n.currentIndex)),J("aria-current",e===n.currentIndex?"true":"false")("aria-label","Slide "+(e+1))("data-carousel-slide-to",e)}}var U=(()=>{let l=class l{prevSlide(){this.currentIndex=this.currentIndex===0?this.slides.length-1:this.currentIndex-1}nextSlide(){this.currentIndex=this.currentIndex===this.slides.length-1?0:this.currentIndex+1}ngOnInit(){console.log(this.slides,"Log from  post carousel")}constructor(){this.slides=[],this.currentIndex=0}};l.\u0275fac=function(r){return new(r||l)},l.\u0275cmp=I({type:l,selectors:[["app-post-carousel"]],inputs:{slides:"slides"},standalone:!0,features:[T],decls:18,vars:2,consts:[[1,"text-gray-400","font-medium","text-sm","mb-7","mt-6","mx-3","px-2"],["id","indicators-carousel","data-carousel","static",1,"relative","w-full"],[1,"relative","h-56","overflow-hidden","rounded-lg","md:h-96"],[4,"ngFor","ngForOf"],[1,"absolute","z-15","flex","-translate-x-1/2","space-x-3","rtl:space-x-reverse","bottom-5","left-1/2"],["type","button",3,"class",4,"ngFor","ngForOf"],["type","button",1,"absolute","top-0","start-0","z-15","flex","items-center","justify-center","h-full","px-4","cursor-pointer","group","focus:outline-none",3,"click"],[1,"inline-flex","items-center","justify-center","w-10","h-10","rounded-full","bg-white/30","dark:bg-gray-800/30","group-hover:bg-white/50","dark:group-hover:bg-gray-800/60","group-focus:ring-4","group-focus:ring-white","dark:group-focus:ring-gray-800/70","group-focus:outline-none"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 6 10",1,"w-4","h-4","text-white","dark:text-gray-800","rtl:rotate-180"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M5 1 1 5l4 4"],[1,"sr-only"],["type","button",1,"absolute","top-0","end-0","z-15","flex","items-center","justify-center","h-full","px-4","cursor-pointer","group","focus:outline-none",3,"click"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","m1 9 4-4-4-4"],["data-carousel-item","active",1,"duration-700","ease-in-out"],[4,"ngIf"],["alt","Image",1,"absolute","block","w-full","-translate-x-1/2","-translate-y-1/2","top-1/2","left-1/2",3,"src"],["controls","","loop","",1,"object-cover","absolute","block","w-full","-translate-x-1/2","-translate-y-1/2","top-1/2","left-1/2","border","border-gray-200","rounded-lg","dark:border-gray-700"],["type","video/mp4",3,"src"],["type","button"]],template:function(r,a){r&1&&(i(0,"div",0)(1,"div",1)(2,"div",2),u(3,Ee,4,4,"ng-container",3),o(),i(4,"div",4),u(5,Ie,1,8,"button",5),o(),i(6,"button",6),f("click",function(){return a.prevSlide()}),i(7,"span",7),b(),i(8,"svg",8),c(9,"path",9),o(),k(),i(10,"span",10),m(11,"Previous"),o()()(),i(12,"button",11),f("click",function(){return a.nextSlide()}),i(13,"span",7),b(),i(14,"svg",8),c(15,"path",12),o(),k(),i(16,"span",10),m(17,"Next"),o()()()()()),r&2&&(s(3),d("ngForOf",a.slides),s(2),d("ngForOf",a.slides))},dependencies:[V,R,M]});let t=l;return t})();var Ve=()=>({width:"40vw","max-width":"1195px","min-width":"688px"});function je(t,l){t&1&&c(0,"i",28)}function De(t,l){if(t&1){let e=y();i(0,"button",29),f("click",function(){g(e);let r=p(2);return _(r.onUpdateSubmit())}),m(1,"Done"),o()}}function Fe(t,l){if(t&1&&c(0,"app-post-carousel",30),t&2){let e=p(2);d("slides",e.post.media)}}function Le(t,l){t&1&&(i(0,"div"),m(1,"Title is required"),o())}function Ne(t,l){t&1&&(i(0,"div"),m(1,"Title must be at least 3 characters long"),o())}function Oe(t,l){if(t&1&&(i(0,"div",31),u(1,Le,2,0,"div",32)(2,Ne,2,0,"div",32),o()),t&2){let e=p(2);s(),d("ngIf",e.f.title.errors.required),s(),d("ngIf",e.f.title.errors.minlength)}}function Re(t,l){t&1&&(i(0,"div"),m(1,"Content is required"),o())}function We(t,l){t&1&&(i(0,"div"),m(1,"Content must be at least 3 characters long"),o())}function Ae(t,l){if(t&1&&(i(0,"div",31),u(1,Re,2,0,"div",32)(2,We,2,0,"div",32),o()),t&2){let e=p(2);s(),d("ngIf",e.f.content.errors.required),s(),d("ngIf",e.f.content.errors.minlength)}}function Be(t,l){if(t&1){let e=y();i(0,"div",2)(1,"div",3)(2,"button",4),f("click",function(){g(e);let r=p();return _(r.visible=!1)}),m(3,"Cancel"),o(),i(4,"h2",5),m(5,"Edit Info"),o(),u(6,je,1,0,"i",6)(7,De,2,0,"button",7),o(),i(8,"div",8)(9,"div",9),u(10,Fe,1,1,"app-post-carousel",10),o(),i(11,"div",11)(12,"div",12)(13,"div",13)(14,"div"),c(15,"img",14),o(),i(16,"div")(17,"span",15),m(18),o(),i(19,"span",16),m(20,"Asheville, North Carolina"),o()()()(),i(21,"div",17)(22,"form",18)(23,"div",19)(24,"label",20),m(25,"Title"),o(),c(26,"input",21),u(27,Oe,3,2,"div",22),o(),i(28,"div",19)(29,"label",23),m(30,"Content"),o(),c(31,"textarea",24),u(32,Ae,3,2,"div",22),o(),i(33,"div",19)(34,"label",25),m(35,"Tags"),o(),c(36,"input",26),o()()(),c(37,"div",27),o()()()}if(t&2){let e=p();s(6),d("ngIf",e.isLoading),s(),d("ngIf",!e.isLoading),s(3),d("ngIf",e.post.media&&e.post.media.length>0),s(5),D("src",e.post.doctorId.profilePic,w),s(3),P(e.post.doctorId.firstName),s(4),d("formGroup",e.editPostForm),s(5),d("ngIf",e.f.title.errors&&(e.f.title.dirty||e.f.title.touched)),s(5),d("ngIf",e.f.content.errors&&(e.f.content.dirty||e.f.content.touched))}}var ye=(()=>{let l=class l{constructor(n,r,a){this.formBuilder=n,this.feedService=r,this.toastr=a,this.isLoading=!1,this.updatedPostData=new q,this.closeEditModal=new q(!1)}ngOnInit(){this.editPostForm=this.formBuilder.group({title:[this.post?.title||"",[j.required,j.minLength(3)]],content:[this.post?.content||"",[j.required,j.minLength(3)]],tags:[this.post?.tags?this.post.tags.join(""):""]})}get f(){return this.editPostForm.controls}onUpdateSubmit(){if(this.editPostForm.valid){console.log(this.editPostForm.value),this.isLoading=!0;let n={title:this.editPostForm.value.title,content:this.editPostForm.value.content,tags:this.convertTagsToArray(this.editPostForm.value.tags)};console.log("Updated post:",n),this.feedService.editPost(this.post._id,n).subscribe({next:r=>{this.closeEditModal.emit(!0),this.isLoading=!1,this.updatedPostData.emit(r.data)},error:r=>{this.isLoading=!1,this.closeEditModal.emit(!0),this.toastr.error(r)}})}else this.toastr.error("please fill all fields correctly")}convertTagsToArray(n){return console.log(n),typeof n=="string"?n.split(" ").map(r=>r.trim()):Array.isArray(n)?n.map(r=>r&&r?.value?r?.value:""):[]}};l.\u0275fac=function(r){return new(r||l)(h(de),h(G),h(z))},l.\u0275cmp=I({type:l,selectors:[["app-edit-post"]],inputs:{post:"post",visible:"visible"},outputs:{updatedPostData:"updatedPostData",closeEditModal:"closeEditModal"},standalone:!0,features:[T],decls:2,vars:6,consts:[[3,"visibleChange","visible","modal","styleClass"],["pTemplate","headless"],[1,"w-full","bg-white","shadow-lg","rounded-lg"],[1,"w-full","px-3","py-1","bg-black","text-white","flex","justify-between","items-center"],[3,"click"],[1,"text-xl","font-bold"],["class","fas fa-spinner fa-spin",4,"ngIf"],["class","text-blue-500",3,"click",4,"ngIf"],[1,"flex","justify-between"],[1,"w-1/2"],["class","h-full",3,"slides",4,"ngIf"],[1,"w-1/2","flex","flex-col"],[1,"flex-gro","p-4"],[1,"flex","gap-1"],[1,"h-8","w-8","rounded-full",3,"src"],[1,"text-sm","font-semibold","antialiased","block","leading-tight"],[1,"text-gray-600","text-xs","block"],[1,"flex-grow-2","p-4"],[3,"formGroup"],[1,"mb-6"],["for","title",1,"block","text-gray-700","font-bold","mb-2"],["type","text","id","title","formControlName","title",1,"w-full","text-sm","px-3","py-2","border","rounded-md","focus:outline-none","focus:border-blue-500"],["class","text-red-500 text-xs mt-1",4,"ngIf"],["for","content",1,"block","text-gray-700","font-bold","mb-2"],["id","content","formControlName","content","rows","4","placeholder","Enter your content here...",1,"w-full","px-3","py-2","border","rounded-md","focus:outline-none","focus:border-blue-500","resize-none","text-sm","text-gray-800","placeholder-gray-400","bg-gray-100","focus:ring-2","focus:ring-blue-200"],["for","tags",1,"block","text-gray-700","font-bold","mb-2"],["type","text","id","tags","formControlName","tags",1,"w-full","text-sm","px-3","py-2","border","rounded-md","focus:outline-none","focus:border-blue-500"],[1,"flex-grow","p-4"],[1,"fas","fa-spinner","fa-spin"],[1,"text-blue-500",3,"click"],[1,"h-full",3,"slides"],[1,"text-red-500","text-xs","mt-1"],[4,"ngIf"]],template:function(r,a){r&1&&(i(0,"p-dialog",0),O("visibleChange",function(v){return N(a.visible,v)||(a.visible=v),v}),u(1,Be,38,8,"ng-template",1),o()),r&2&&(Q(ee(5,Ve)),L("visible",a.visible),d("modal",!0)("styleClass","custom-dialog"))},dependencies:[U,xe,_e,ge,V,M,ce,se,W,A,re,ae,me,B]});let t=l;return t})();function ze(t,l){if(t&1&&c(0,"app-post-carousel",34),t&2){let e=p();d("slides",e.postData.post.media)}}function Ge(t,l){t&1&&(i(0,"div",35),b(),i(1,"svg",36),c(2,"line",37)(3,"line",38)(4,"line",39)(5,"line",40)(6,"line",41)(7,"line",42)(8,"line",43)(9,"line",44),o()())}function Ue(t,l){if(t&1){let e=y();i(0,"button",51),f("click",function(){g(e);let r=p(2);return _(r.deleteItem())}),m(1,"Delete"),o()}}function qe(t,l){if(t&1){let e=y();i(0,"button",49),f("click",function(){g(e);let r=p(2);return _(r.editItem())}),m(1,"Edit"),o()}}function He(t,l){if(t&1){let e=y();i(0,"div",45)(1,"div",46),u(2,Ue,2,0,"button",47)(3,qe,2,0,"button",48),i(4,"button",49),f("click",function(){g(e);let r=p();return _(r.archiveItem())}),m(5,"Archive"),o(),i(6,"button",50),f("click",function(){g(e);let r=p();return _(r.closeModal())}),m(7,"Cancel"),o()()()}if(t&2){let e=p();s(2),d("ngIf",e.postData.isPermissionToCrud),s(),d("ngIf",e.postData.isPermissionToCrud)}}function $e(t,l){if(t&1){let e=y();i(0,"button",77),f("click",function(){g(e);let r=p().$implicit,a=p(2);return _(a.toggleRepliesVisibility(r))}),i(1,"small"),m(2),o()()}if(t&2){let e=p().$implicit,n=p(2);s(2),F(" ---- ",n.commentRepliesVisibility[e._id]?"Hide Replies":"View Replies"," (",e.replies.length,")")}}function Ye(t,l){if(t&1&&(i(0,"div",79)(1,"div",80),c(2,"img",55),o(),i(3,"div",56)(4,"div",57)(5,"div",59)(6,"div",60)(7,"a",61)(8,"small"),m(9),o()()(),i(10,"div",62),m(11),o()(),i(12,"div",68)(13,"div",69)(14,"a",81)(15,"small"),m(16,"Like"),o()(),i(17,"small",71),m(18,"."),o(),i(19,"a",81)(20,"small"),m(21),$(22,"timeDiff"),o()()()()()(),i(23,"div",82)(24,"a",64)(25,"div",65),b(),i(26,"svg",66),c(27,"path",67),o()()()()()),t&2){let e=l.$implicit;s(2),d("src",e.userId.profilePic,w),s(7),F("",e.userId.firstName," ",e.userId.lastName,""),s(2),H(" ",e.content," "),s(10),P(Y(22,5,e.timestamp))}}function Je(t,l){if(t&1&&(S(0),u(1,Ye,28,7,"div",78),E()),t&2){let e=p().$implicit;s(),d("ngForOf",e.replies)}}function Ke(t,l){if(t&1){let e=y();i(0,"div",53)(1,"div",54),c(2,"img",55),o(),i(3,"div",56)(4,"div",57)(5,"div",58)(6,"div",59)(7,"div",60)(8,"a",61)(9,"small"),m(10),o()()(),i(11,"div",62),m(12),o()(),i(13,"div",63)(14,"a",64)(15,"div",65),b(),i(16,"svg",66),c(17,"path",67),o()()()()(),k(),i(18,"div",68)(19,"div",69)(20,"a",70)(21,"small"),m(22,"Like"),o()(),i(23,"small",71),m(24,"."),o(),i(25,"a",72),f("click",function(){let r=g(e).$implicit,a=p(2);return _(a.replyToComment(r))}),i(26,"small"),m(27,"Reply"),o()(),i(28,"small",71),m(29,"."),o(),i(30,"a",73)(31,"small"),m(32),$(33,"timeDiff"),o()(),b(),i(34,"svg",74),c(35,"circle",22)(36,"circle",23)(37,"circle",24),o()()(),u(38,$e,3,2,"button",75)(39,Je,2,1,"ng-container",76),o()()()}if(t&2){let e=l.$implicit,n=p(2);s(2),d("src",e.userId.profilePic,w),s(8),F("",e.userId.firstName," ",e.userId.lastName,""),s(2),H(" ",e.content," "),s(20),P(Y(33,7,e.timestamp)),s(6),d("ngIf",e.replies.length>0),s(),d("ngIf",n.commentRepliesVisibility[e._id]&&e.replies.length>0)}}function Qe(t,l){if(t&1&&(S(0),u(1,Ke,40,9,"div",52),E()),t&2){let e=p();s(),d("ngForOf",e.postData.post.comments)}}function Xe(t,l){t&1&&(i(0,"div",83)(1,"div",84),b(),i(2,"svg",85),c(3,"path",86),o(),k(),i(4,"p",87),m(5,"No comments yet"),o()()())}function Ze(t,l){t&1&&c(0,"i",88)}var Ct=(()=>{let l=class l{constructor(n,r,a,x,v,C,Ce){this.store=n,this.feedService=r,this.toastr=a,this.data=x,this.dialogRef=v,this.router=C,this.location=Ce,this.isLoading=!1,this.replyAuthor="",this.commentText="",this.commentRepliesVisibility={},this.isOptionsModalOpen=!1,this.isEditPost=!1}ngOnInit(){this.loadPost(),console.log("Comment Component ",this.data.postId,this.postData)}loadPost(){this.feedService.getPostById(this.data.postId).subscribe(n=>{console.log(n.data),this.postData=n.data},n=>{console.error(n),this.toastr.error(n)})}postComment(){this.targetComment&&this.hasMention(this.commentText)?this.replyToTargetComment(this.targetComment,this.commentText):this.postNewComment(this.commentText),this.commentText="",this.targetComment=null}replyToTargetComment(n,r){this.isLoading=!0,r=this.removeMention(r),console.log(r),this.feedService.replyToComment(this.postData.post._id,n._id,r).subscribe({next:a=>{this.isLoading=!1,console.log(a),console.log(n),this.postData.post.comments.find(x=>x._id.toString()===n._id.toString()).replies.push(a.data)},error:a=>{this.isLoading=!1,this.toastr.error(a)}})}postNewComment(n){n.trim()!==""&&this.postData.post._id&&(console.log(n),this.isLoading=!0,this.feedService.commentOnPost(this.postData.post._id,n.trim()).subscribe({next:r=>{this.isLoading=!1,console.log(r),this.postData.post.comments.push(r.data)},error:r=>{this.isLoading=!1,this.toastr.error(r)}}))}replyToComment(n){this.targetComment=n,this.commentText=`@${n.userId.firstName} `}closeModal(){this.dialogRef.close();let n=this.location.path();n.includes("/doctor/feed")?this.router.navigate(["/doctor/feed"]):n.includes("/doctor/feed/my-feed")?this.router.navigate(["/doctor/feed/my-feed"]):this.router.navigate(["/"])}removeMention(n){return n.replace(/@\w+\s?/,"")}hasMention(n){return/@\w+/.test(n)}toggleRepliesVisibility(n){n._id in this.commentRepliesVisibility?this.commentRepliesVisibility[n._id]=!this.commentRepliesVisibility[n._id]:this.commentRepliesVisibility[n._id]=!0}openOptions(){this.isOptionsModalOpen=!this.isOptionsModalOpen}updatePost(n){this.postData.post.title=n.title,this.postData.post.content=n.content,this.postData.post.tags=n.tags}deleteItem(){console.log("Delete item"),this.isLoading=!0,this.feedService.deletePost(this.postData.post._id).subscribe(n=>{this.isLoading=!1,this.closeModal()},n=>{this.isLoading=!1,this.toastr.error(n)})}editItem(){console.log("Edit item"),this.isEditPost=!0}archiveItem(){console.log("Archive item")}closeEditDialog(n){this.isEditPost=!1}};l.\u0275fac=function(r){return new(r||l)(h(pe),h(G),h(z),h(fe),h(ue),h(oe),h(ne))},l.\u0275cmp=I({type:l,selectors:[["app-postComment"]],standalone:!0,features:[T],decls:40,vars:11,consts:[["noComments",""],[1,"fixed","top-0","left-0","w-full","h-full","flex","justify-center","items-center","bg-black","bg-opacity-50","z-50"],[1,"bg-white","w-full","md:w-3/4","lg:w-2/3","xl:w-3/4","rounded-lg","p-4","flex","flex-col","relative"],[1,"absolute","top-0","right-0","p-2",3,"click"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor",1,"h-6","w-6","text-gray-500","hover:text-gray-700"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M6 18L18 6M6 6l12 12"],[1,"grid","grid-cols-12","gap-4","h-full"],[1,"col-span-12","md:col-span-6","xl:col-span-6"],["class","w-full carousel",3,"slides",4,"ngIf"],[1,"flex","items-center","justify-between","mx-4","mt-3","mb-2"],[1,"flex","gap-5"],[1,"flex"],[1,"col-span-12","md:col-span-6","xl:col-span-6",2,"max-height","500px"],["aria-label","Loading...","role","status","class","flex justify-center items-center absolute inset-0",4,"ngIf"],[1,"flex","flex-col","h-full"],[1,"flex","items-center","px-4","py-3","border-b","justify-between","border-gray-300"],[1,"flex","gap-1"],[1,"h-8","w-8","rounded-full",3,"src"],[1,"text-sm","font-semibold","antialiased","block","leading-tight"],[1,"text-gray-600","text-xs","block"],["title","More options",1,"hover:cursor-pointer","hover:text-gray-500",3,"click"],["aria-label","More options","fill","currentColor","height","24","role","img","viewBox","0 0 24 24","width","24",1,"x1lliihq","x1n2onr6","x5n08af"],["cx","12","cy","12","r","1.5"],["cx","6","cy","12","r","1.5"],["cx","18","cy","12","r","1.5"],["class","absolute right-0 mt-10 w-48 bg-white rounded-lg shadow-lg",4,"ngIf"],[1,"flex-grow","overflow-y-auto","border-b-2","border-gray-300"],[1,"bg-white","w-full","h-auto","shadow","px-3","py-2","flex","flex-col","space-y-2","overflow-y-auto"],[4,"ngIf","ngIfElse"],[1,"bg-gray-200","py-4","mt-4","p-4","flex","items-center"],["placeholder","Write your comment here...",1,"flex-grow","h-12","border-gray-300","rounded-md","p-2",3,"ngModelChange","ngModel"],["type","submit",1,"px-4","py-2","ml-4","bg-black","text-white","rounded-md","hover:bg-black",3,"click"],["class","fas fa-spinner fa-spin",4,"ngIf"],[3,"updatedPostData","closeEditModal","visible","post"],[1,"w-full","carousel",3,"slides"],["aria-label","Loading...","role","status",1,"flex","justify-center","items-center","absolute","inset-0"],["viewBox","0 0 256 256",1,"h-12","w-12","animate-spin","stroke-gray-500"],["x1","128","y1","32","x2","128","y2","64","stroke-linecap","round","stroke-linejoin","round","stroke-width","24"],["x1","195.9","y1","60.1","x2","173.3","y2","82.7","stroke-linecap","round","stroke-linejoin","round","stroke-width","24"],["x1","224","y1","128","x2","192","y2","128","stroke-linecap","round","stroke-linejoin","round","stroke-width","24"],["x1","195.9","y1","195.9","x2","173.3","y2","173.3","stroke-linecap","round","stroke-linejoin","round","stroke-width","24"],["x1","128","y1","224","x2","128","y2","192","stroke-linecap","round","stroke-linejoin","round","stroke-width","24"],["x1","60.1","y1","195.9","x2","82.7","y2","173.3","stroke-linecap","round","stroke-linejoin","round","stroke-width","24"],["x1","32","y1","128","x2","64","y2","128","stroke-linecap","round","stroke-linejoin","round","stroke-width","24"],["x1","60.1","y1","60.1","x2","82.7","y2","82.7","stroke-linecap","round","stroke-linejoin","round","stroke-width","24"],[1,"absolute","right-0","mt-10","w-48","bg-white","rounded-lg","shadow-lg"],[1,"py-1"],["class","block w-full text-center py-2 px-4 text-red-600 hover:text-red-900 border-b border-gray-200",3,"click",4,"ngIf"],["class","block w-full text-center py-2 px-4 hover:text-blue-600 border-b border-gray-200",3,"click",4,"ngIf"],[1,"block","w-full","text-center","py-2","px-4","hover:text-blue-600","border-b","border-gray-200",3,"click"],[1,"block","w-full","text-center","py-2","px-4","hover:text-blue-600","text-gray-800",3,"click"],[1,"block","w-full","text-center","py-2","px-4","text-red-600","hover:text-red-900","border-b","border-gray-200",3,"click"],["class","flex items-center space-x-2",4,"ngFor","ngForOf"],[1,"flex","items-center","space-x-2"],[1,"group","relative","flex","flex-shrink-0","self-start","cursor-pointer"],["alt","",1,"h-8","w-8","object-fill","rounded-full",3,"src"],[1,"flex","items-center","justify-center","space-x-2"],[1,"block"],[1,"flex","justify-start","items-center","space-x-2"],[1,"bg-gray-100","w-auto","rounded-xl","px-2","pb-2"],[1,"font-medium"],["href","#",1,"hover:underline","text-sm"],[1,"text-xs"],[1,"self-stretch","flex","justify-center","items-center","transform","transition-opacity","duration-200","opacity-0","hover:opacity-100"],["href","#",1,""],[1,"text-xs","cursor-pointer","flex","h-6","w-6","transform","transition-colors","duration-200","hover:bg-gray-100","rounded-full","items-center","justify-center"],["fill","none","stroke","currentColor","viewBox","0 0 24 24","xmlns","http://www.w3.org/2000/svg",1,"w-4","h-6"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"],[1,"flex","justify-start","items-center","text-xs","w-full"],[1,"font-semibold","text-gray-700","px-2","flex","items-center","justify-center","space-x-1"],["href","#",1,"hover:underline","hover:cursor-pointer"],[1,"self-center"],[1,"hover:underline","hover:cursor-pointer",3,"click"],["aria-disabled","true",1,"hover:underline","hover:cursor-pointer"],["fill","currentColor","height","24","role","img","viewBox","0 0 24 24","width","24",1,"hover:block","hover:cursor-pointer","x1lliihq","x1n2onr6","x5n08af"],["class","text-black hover:underline hover:cursor-pointer",3,"click",4,"ngIf"],[4,"ngIf"],[1,"text-black","hover:underline","hover:cursor-pointer",3,"click"],["class","flex items-center space-x-2 space-y-2",4,"ngFor","ngForOf"],[1,"flex","items-center","space-x-2","space-y-2"],[1,"group","relative","flex","flex-shrink-0","self-start","cursor-pointer","pt-2"],["href","#",1,"hover:underline"],[1,"self-stretch","flex","justify-center","items-center","transform","transition-opacity","duration-200","opacity-0","translate","-translate-y-2","hover:opacity-100"],[1,"flex","flex-col","items-center","justify-center"],[1,"text-gray-500","text-center"],["fill","none","stroke","currentColor","viewBox","0 0 24 24","xmlns","http://www.w3.org/2000/svg",1,"w-12","h-12","mx-auto"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M12 5v14m0 0l-3-3m3 3l3-3M12 5l3 3m-3-3l-3 3"],[1,"text-sm"],[1,"fas","fa-spinner","fa-spin"]],template:function(r,a){if(r&1){let x=y();i(0,"div",1)(1,"div",2)(2,"button",3),f("click",function(){return g(x),_(a.closeModal())}),b(),i(3,"svg",4),c(4,"path",5),o()(),k(),i(5,"div",6)(6,"div",7),u(7,ze,1,1,"app-post-carousel",8),i(8,"div",9),c(9,"div",10)(10,"div",11),o()(),i(11,"div",12),u(12,Ge,10,0,"div",13),i(13,"div",14)(14,"div",15)(15,"div",16)(16,"div"),c(17,"img",17),o(),i(18,"div")(19,"span",18),m(20),o(),i(21,"span",19),m(22,"Asheville, North Carolina"),o()()(),i(23,"div",20),f("click",function(){return g(x),_(a.openOptions())}),b(),i(24,"svg",21),c(25,"circle",22)(26,"circle",23)(27,"circle",24),o()()(),u(28,He,8,2,"div",25),k(),i(29,"div",26)(30,"div",27),u(31,Qe,2,1,"ng-container",28)(32,Xe,6,0,"ng-template",null,0,ie),o()(),i(34,"div",29)(35,"textarea",30),O("ngModelChange",function(C){return g(x),N(a.commentText,C)||(a.commentText=C),_(C)}),o(),i(36,"button",31),f("click",function(){return g(x),_(a.postComment())}),u(37,Ze,1,0,"i",32),m(38," Post "),o()()()()()(),i(39,"app-edit-post",33),f("updatedPostData",function(C){return g(x),_(a.updatePost(C))})("closeEditModal",function(C){return g(x),_(a.closeEditDialog(C))}),o()()}if(r&2){let x=Z(33);s(7),d("ngIf",a.postData.post.media&&a.postData.post.media.length>0),s(5),d("ngIf",a.isLoading),s(5),D("src",a.postData.post.doctorId.profilePic,w),s(3),P(a.postData.post.doctorId.firstName),s(8),d("ngIf",a.isOptionsModalOpen),s(3),d("ngIf",a.postData.post.comments.length>0)("ngIfElse",x),s(4),L("ngModel",a.commentText),s(2),d("ngIf",a.isLoading),s(2),d("visible",a.isEditPost)("post",a.postData.post)}},dependencies:[V,R,M,U,B,W,A,le,he,ye],styles:[".carousel[_ngcontent-%COMP%]{width:100%;height:100vh}"]});let t=l;return t})();export{U as a,Ct as b};
