import"./chunk-SZGE7K7A.js";import{a as O}from"./chunk-2ZPOVI2V.js";import{a as B,z as R}from"./chunk-H4JCRTWG.js";import"./chunk-VOEKKMOV.js";import{a as N}from"./chunk-7AG6UC3F.js";import{a as D}from"./chunk-XDNE7C6I.js";import{a as V}from"./chunk-OQKLRLHO.js";import{a as A}from"./chunk-6CS5MZYZ.js";import"./chunk-7B4WEPGY.js";import{n as z}from"./chunk-B63CGU3U.js";import{c as E,d as L}from"./chunk-FX3PANRP.js";import{B as M,D as U,c as _,e as g,g as I,h as F,m as j,p as G,s as T}from"./chunk-YKYY62M2.js";import"./chunk-3UF7QMRJ.js";import"./chunk-Y6YHTU6Y.js";import{Ib as x,Kb as s,La as h,Ma as b,Ub as e,Vb as t,Wb as m,bc as y,jd as C,nc as i,qb as a,rb as u,sd as k,xc as S,ya as w}from"./chunk-7CRQF3FF.js";function W(o,r){o&1&&(e(0,"p",36),i(1,"Please enter a valid email address."),t())}function q(o,r){o&1&&(e(0,"p",37),h(),e(1,"svg",38),m(2,"path",39),t(),i(3," Use at least 8 characters, one uppercase, one lowercase and one number. "),t())}function Z(o,r){o&1&&(h(),e(0,"svg",40),m(1,"path",41)(2,"path",42),t())}var pe=(()=>{let r=class r{constructor(d,c,n,l,p,P){this.fb=d,this.router=c,this.tokenService=n,this.store=l,this.toastr=p,this.userService=P,this.clientId=A.Google_Client_Id,this.show=!1,this.passwordError=!1,this.emailError=!1,this.isLoading=!1,this.loginWithGoogle=v=>{console.log("Crenditail",v),this.userService.loginWithGoogle(v).subscribe({next:f=>{this.tokenService.setToken(f.data.token),this.isLoading=!1,this.tokenService.setAccessToken(f.data.revokeAccessToken),this.router.navigate(["/"])},error:f=>{this.toastr.error(f)}})}}ngOnInit(){this.store.select(R).subscribe(d=>{this.isLoading=d}),this.loginForm=this.fb.group({email:["",[g.required,g.email]],password:["",[g.required,g.minLength(8),g.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/)]]})}showPassword(){this.show=!this.show}loginSubmit(){if(this.loginForm.invalid)return;let d={email:this.loginForm.get("email")?.value,password:this.loginForm.get("password")?.value};console.log("User Data : ",d),this.store.dispatch(B(d))}};r.\u0275fac=function(c){return new(c||r)(u(M),u(E),u(N),u(z),u(V),u(D))},r.\u0275cmp=w({type:r,selectors:[["app-user-login"]],standalone:!0,features:[S],decls:57,vars:11,consts:[[1,"flex","items-center","min-h-screen","bg-gray-100","lg:justify-center","border-slate-950"],[1,"flex","flex-col","overflow-hidden","bg-white","rounded-md","shadow-lg","max","md:flex-row","md:flex-1","lg:max-w-screen-md"],[1,"p-4","py-6","text-white","bg-blue-500","md:w-80","md:flex-shrink-0","md:flex","md:flex-col","md:items-center","md:justify-evenly"],[1,"my-3","text-4xl","font-bold","tracking-wider","text-center"],["href","#"],[1,"mt-6","font-normal","text-center","text-gray-300","md:mt-0"],[1,"flex","flex-col","items-center","justify-center","mt-10","text-center"],[1,"underline",3,"routerLink"],[1,"mt-6","text-sm","text-center","text-gray-300"],["href","#",1,"underline"],[1,"p-5","bg-white","md:flex-1"],[1,"my-4","text-2xl","font-semibold","text-gray-700"],[1,"flex","flex-col","space-y-5",3,"ngSubmit","formGroup"],[1,"flex","flex-col","space-y-1"],["for","email",1,"text-sm","font-semibold","text-gray-500"],["type","email","id","email","formControlName","email","autofocus","",1,"px-4","py-2","transition","duration-300","border","border-gray-300","rounded","focus:border-transparent","focus:outline-none","focus:ring-4","focus:ring-blue-200"],["class","text-red-500",4,"ngIf"],[1,"flex","items-center","justify-between"],["for","password",1,"text-sm","font-semibold","text-gray-500"],["href","#",1,"text-sm","text-blue-600","hover:underline","focus:text-blue-800"],["type","password","formControlName","password","id","password",1,"px-4","py-2","transition","duration-300","border","border-gray-300","rounded","focus:border-transparent","focus:outline-none","focus:ring-4","focus:ring-blue-200"],["class","flex items-center gap-1 mt-0 font-sans text-sm antialiased font-normal text-red-500",4,"ngIf"],["type","submit",1,"w-full","px-4","py-2","text-lg","font-semibold","text-white","transition-colors","duration-300","bg-blue-500","rounded-md","shadow","hover:bg-blue-600","focus:outline-none","focus:ring-blue-200","focus:ring-4","relative",3,"disabled"],[1,"flex","gap-2","justify-center"],["class","text-gray-300 animate-spin","viewBox","0 0 64 64","fill","none","xmlns","http://www.w3.org/2000/svg","width","24","height","24",4,"ngIf"],[1,"flex","flex-col","space-y-5"],[1,"flex","items-center","justify-center","space-x-2"],[1,"h-px","bg-gray-400","w-14"],[1,"font-normal","text-gray-500"],[1,"flex","flex-col","space-y-4"],[1,"flex","justify-center"],["locale","en","shape","pill","size","large","text","signin_with","theme","outline","type","standard",3,"callback","clientId","width","displayOneTapDialog"],[1,"flex","items-center","justify-center","px-4","py-2","space-x-2","transition-colors","duration-300","border","border-blue-500","rounded-md","group","hover:bg-blue-500","focus:outline-none",3,"routerLink"],["width","20","height","20","fill","currentColor",1,"text-blue-500","group-hover:text-white"],["d","M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"],[1,"text-sm","font-medium","text-blue-500","group-hover:text-white"],[1,"text-red-500"],[1,"flex","items-center","gap-1","mt-0","font-sans","text-sm","antialiased","font-normal","text-red-500"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 24 24","fill","currentColor",1,"w-4","h-4","-mt-px"],["fill-rule","evenodd","d","M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z","clip-rule","evenodd",1,"h-2"],["viewBox","0 0 64 64","fill","none","xmlns","http://www.w3.org/2000/svg","width","24","height","24",1,"text-gray-300","animate-spin"],["d","M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z","stroke","currentColor","stroke-width","5","stroke-linecap","round","stroke-linejoin","round"],["d","M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762","stroke","currentColor","stroke-width","5","stroke-linecap","round","stroke-linejoin","round",1,"text-gray-900"]],template:function(c,n){if(c&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"a",4),i(5,"Maitri"),t()(),e(6,"p",5),i(7," With the power of Maitri, you can now focus only on functionaries for your digital products, while leaving the UI design on us! "),t(),e(8,"p",6)(9,"span"),i(10,"Don't have an account?"),t(),e(11,"a",7),i(12,"Get Started!"),t()(),e(13,"p",8),i(14," Read our "),e(15,"a",9),i(16,"terms"),t(),i(17," and "),e(18,"a",9),i(19,"conditions"),t()()(),e(20,"div",10)(21,"h3",11),i(22,"Account Login"),t(),e(23,"form",12),y("ngSubmit",function(){return n.loginSubmit()}),e(24,"div",13)(25,"label",14),i(26,"Email address"),t(),m(27,"input",15),x(28,W,2,0,"p",16),t(),e(29,"div",13)(30,"div",17)(31,"label",18),i(32,"Password"),t(),e(33,"a",19),i(34,"Forgot Password?"),t()(),m(35,"input",20),x(36,q,4,0,"p",21),t(),e(37,"div")(38,"button",22)(39,"span",23),x(40,Z,3,0,"svg",24),i(41,"Login "),t()()(),e(42,"div",25)(43,"span",26),m(44,"span",27),e(45,"span",28),i(46,"or login with"),t(),m(47,"span",27),t(),e(48,"div",29)(49,"div",30),m(50,"google-login-button",31),t(),e(51,"a",32)(52,"span"),h(),e(53,"svg",33),m(54,"path",34),t()(),b(),e(55,"span",35),i(56,"Are You A Doctor"),t()()()()()()()()),c&2){let l,p;a(11),s("routerLink","/register"),a(12),s("formGroup",n.loginForm),a(5),s("ngIf",((l=n.loginForm.get("email"))==null?null:l.invalid)&&(((l=n.loginForm.get("email"))==null?null:l.dirty)||((l=n.loginForm.get("email"))==null?null:l.touched))),a(8),s("ngIf",((p=n.loginForm.get("password"))==null?null:p.invalid)&&(((p=n.loginForm.get("password"))==null?null:p.dirty)||((p=n.loginForm.get("password"))==null?null:p.touched))),a(2),s("disabled",n.isLoading),a(2),s("ngIf",n.isLoading),a(10),s("callback",n.loginWithGoogle)("clientId",n.clientId)("width",250)("displayOneTapDialog",!0),a(),s("routerLink","/doctor/login")}},dependencies:[U,j,_,I,F,G,T,k,C,L,O]});let o=r;return o})();export{pe as UserLoginComponent};
