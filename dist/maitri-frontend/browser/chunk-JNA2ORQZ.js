import{a as L}from"./chunk-AJCFBXF2.js";import{a as M,b as A}from"./chunk-63APZDV3.js";import{a as P}from"./chunk-35SNKNNU.js";import{B as T,D as k,c as F,e as h,g as U,h as C,m as j,p as D,s as E}from"./chunk-IWUKBY46.js";import{Db as g,Fb as a,Ga as x,Ha as y,Pb as t,Qb as i,Rb as p,Yb as f,_b as w,fb as b,gd as _,ic as l,lb as c,mb as d,pd as I,sc as S,ta as v}from"./chunk-PWWHKO4X.js";function G(o,n){if(o&1&&p(0,"img",21),o&2){let N=w();a("src",N.previewUrl,b)}}function R(o,n){o&1&&(t(0,"div",22),p(1,"div",23),t(2,"p",24)(3,"span",25),l(4,"Drag and drop"),i(),l(5," files here "),p(6,"br"),i()())}function V(o,n){o&1&&p(0,"i",26)}var W=(()=>{let n=class n{constructor(s,r,e,u,m){this.formBuilder=s,this.dialogRef=r,this.doctorService=e,this.toastr=u,this.data=m,this.isLoading=!1,this.previewUrl=null,this.appointmentId=null,console.log("data",m),this.appointmentId=m.appoinmentId}ngOnInit(){this.prescriptionForm=this.formBuilder.group({title:["",h.required],prescription:[null,h.required]})}closeDialog(){this.dialogRef.close()}onSubmit(){console.log(this.prescriptionForm.value,this.appointmentId),this.prescriptionForm.valid&&this.appointmentId&&(this.isLoading=!0,this.doctorService.savePrescription(this.prescriptionForm.value,this.appointmentId).subscribe({next:s=>{this.isLoading=!1,this.toastr.success("Prescription uploaded Successfully"),this.closeDialog()},error:s=>{this.isLoading=!1,this.toastr.error(s)}}))}onFileSelected(s){let r=s.target.files[0];if(console.log(r),r){this.prescriptionForm.get("prescription")?.setValue(r);let e=new FileReader;e.readAsDataURL(r),e.onload=()=>{console.log(e.result),this.previewUrl=e.result}}}};n.\u0275fac=function(r){return new(r||n)(d(T),d(M),d(L),d(P),d(A))},n.\u0275cmp=v({type:n,selectors:[["app-upload-prescription"]],standalone:!0,features:[S],decls:30,vars:5,consts:[[1,"sm:max-w-lg","w-full","p-5","bg-white","rounded-xl","z-10","relative"],[1,"absolute","top-0","right-0","mr-4","mt-2","z-20","cursor-pointer",3,"click"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor",1,"h-6","w-6","text-gray-600","hover:text-gray-800"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M6 18L18 6M6 6l12 12"],[1,"text-center"],[1,"mt-5","text-3xl","font-bold","text-gray-900"],[1,"mt-2","text-sm","text-gray-400"],[1,"mt-8","space-y-3",3,"ngSubmit","formGroup"],[1,"grid","grid-cols-1","space-y-2"],[1,"text-sm","font-bold","text-gray-500","tracking-wide"],["formControlName","title","type","text","placeholder","Enter title",1,"text-base","p-2","border","border-gray-300","rounded-lg","focus:outline-none","focus:border-indigo-500"],[1,"grid","grid-cols-1","space-y-1"],[1,"flex","items-center","justify-center","w-full"],[1,"flex","flex-col","rounded-lg","border-4","border-dashed","w-full","h-44","p-1","group","text-center"],[1,"h-full","w-full","text-center","flex","flex-col","justify-center","items-center","p-1"],["alt","Uploaded Image","class","h-full w-full object-contain",3,"src",4,"ngIf"],["class","h-full w-full flex flex-col justify-center items-center",4,"ngIf"],["type","file",1,"hidden",3,"change"],[1,"text-sm","text-gray-300"],["type","submit",1,"my-3","w-full","flex","gap-2","justify-center","bg-blue-500","text-gray-100","p-4","rounded-full","tracking-wide","font-semibold","focus:outline-none","focus:shadow-outline","hover:bg-blue-600","shadow-lg","cursor-pointer","transition","ease-in","duration-300",3,"disabled"],["class","fas fa-spinner fa-spin mr-1",4,"ngIf"],["alt","Uploaded Image",1,"h-full","w-full","object-contain",3,"src"],[1,"h-full","w-full","flex","flex-col","justify-center","items-center"],[1,"flex","flex-auto","max-h-36","w-2/5","mx-auto","-mt-10"],[1,"pointer-none","text-gray-500"],[1,"text-sm"],[1,"fas","fa-spinner","fa-spin","mr-1"]],template:function(r,e){r&1&&(t(0,"div",0)(1,"div",1),f("click",function(){return e.closeDialog()}),x(),t(2,"svg",2),p(3,"path",3),i()(),y(),t(4,"div",4)(5,"h2",5),l(6," Upload Prescription "),i(),t(7,"p",6),l(8,"Please upload any prescriptions or documents related to the consultation. This will help us keep a record of your treatment plan and ensure continuity of care. Your uploaded documents are securely stored and accessible only to authorized medical personnel."),i()(),t(9,"form",7),f("ngSubmit",function(){return e.onSubmit()}),t(10,"div",8)(11,"label",9),l(12,"Title of prescription"),i(),p(13,"input",10),i(),t(14,"div",11)(15,"label",9),l(16,"Attach Document"),i(),t(17,"div",12)(18,"label",13)(19,"div",14),g(20,G,1,1,"img",15)(21,R,7,0,"div",16),i(),t(22,"input",17),f("change",function(m){return e.onFileSelected(m)}),i()()()(),t(23,"p",18)(24,"span"),l(25,"File type: doc, pdf, types of images"),i()(),t(26,"div")(27,"button",19),g(28,V,1,0,"i",20),l(29," Upload "),i()()()()),r&2&&(c(9),a("formGroup",e.prescriptionForm),c(11),a("ngIf",e.previewUrl),c(),a("ngIf",!e.previewUrl),c(6),a("disabled",e.prescriptionForm.invalid),c(),a("ngIf",e.isLoading))},dependencies:[k,j,F,U,C,D,E,I,_]});let o=n;return o})();export{W as a};
