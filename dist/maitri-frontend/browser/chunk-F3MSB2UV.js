import{a as u}from"./chunk-WAWZTAIB.js";import{a as c,c as g}from"./chunk-Y5BMXVS7.js";import{da as a,ha as p,ma as l}from"./chunk-PWWHKO4X.js";import{a as n,b as h}from"./chunk-4LMIJWLY.js";var y=(()=>{let i=class i{constructor(t){this.http=t,this.baseUrl=u.UserServiceUrl}login(t,e){let s={email:t,password:e};return this.http.post(`${this.baseUrl}/login`,s)}loginWithGoogle(t){let e=new c({"X-Social-Login":"google"});return this.http.post(`${this.baseUrl}/social-login`,t,{headers:e})}register(t,e,s){let r=h(n({},t),{password:e,confirmPassword:s});return this.http.post(`${this.baseUrl}/register`,r)}getCurrentUser(){return this.http.get(`${this.baseUrl}/profile`)}blockUser(t){return this.http.patch(`${this.baseUrl}/change-status/${t}`,{})}getUserById(t){return this.http.get(`${this.baseUrl}/get-byId/${t}`)}editUserProfile(t){return this.http.put(`${this.baseUrl}/edit-profile`,t)}changeProfilePic(t){return console.log(t.get("profilePic")),this.http.patch(`${this.baseUrl}/change-profilePic`,t)}changePassword(){return this.http.get(`${this.baseUrl}/change-password`,{})}saveNewPassword(t,e,s){return this.http.post(`${this.baseUrl}/reset-password/${t}`,{newPassword:e,confirmNewPassword:s})}addInterestedDoctor(t){return this.http.post(`${this.baseUrl}/addToInterest/${t}`,{})}getInterestedDoctors(){return this.http.get(`${this.baseUrl}/get-doctor-interests`)}removeFromInterestedDoctors(t){return this.http.delete(`${this.baseUrl}/removeInterest/${t}`)}saveAppointment(t,e){return this.http.post(`${this.baseUrl}/make-appointment/${e}`,{appoinmentData:t})}GetAppointmentDetails(t){return this.http.get(`${this.baseUrl}/get-appoinment/${t}`)}makePayment(t,e,s){return this.http.post(`${this.baseUrl}/make-payment/${e}`,{paymentMethod:t,token:s||null})}verifyPayment(t,e,s,r){let d={orderId:t,paymentId:e,razorpaySignature:s};return this.http.post(`${this.baseUrl}/verify-payment/${r}`,d)}getUserAppoinments(t,e){return this.http.get(`${this.baseUrl}/get-appoinments?page=${t}&pageSize=${e}`)}requestTochangeAppoinmentStatus(t,e,s){return this.http.put(`${this.baseUrl}/cancel-appoinment/${t}`,{reason:e})}getBookedSlots(t,e){return this.http.get(`${this.baseUrl}/get-booked-slots/${t}?date=${e}`)}getAvailableDoctors(t){return console.log("request sent to server to get data ",t),this.http.get(`${this.baseUrl}/get-doctors`,{params:t})}getWalletOfUser(t,e){return this.http.get(`${this.baseUrl}/get-wallet?page=${t}&pageSize=${e}`)}uploadMedicalRecords(t,e,s){let r=new FormData;return r.append("file",t),r.append("title",e),r.append("description",s),this.http.post(`${this.baseUrl}/medical-records`,r)}getMedicalRecords(){return this.http.get(`${this.baseUrl}/medical-records`)}revokeRefreshToken(t){return this.http.post(`${this.baseUrl}/refresh-token`,{refreshToken:t})}getNotifications(){return this.http.get(`${this.baseUrl}/get-notifications`).pipe(a(t=>console.log("Hello test type",t)))}deleteMedicalRecord(t){return this.http.delete(`${this.baseUrl}/delete-medical-record/${t}`)}getPrescritpionsOfUser(){return this.http.get(`${this.baseUrl}/get-userPrescriptions`)}signOut(){google.accounts.id.disableAutoSelect()}submitSurvey(t){return this.http.post(`${this.baseUrl}/submit-survey`,t).pipe(a(e=>console.log("Data from submit surevy",e)))}getWalletBalance(){return this.http.get(`${this.baseUrl}/get-wallet-balance`)}getDoctorsByCategory(){return this.http.get(`${this.baseUrl}/get-category-doctors`)}};i.\u0275fac=function(e){return new(e||i)(l(g))},i.\u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"});let o=i;return o})();export{y as a};
