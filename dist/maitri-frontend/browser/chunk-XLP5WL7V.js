import{a as o}from"./chunk-WAWZTAIB.js";import{c as p}from"./chunk-Y5BMXVS7.js";import{ha as n,ma as h}from"./chunk-PWWHKO4X.js";var $=(()=>{let s=class s{constructor(t){this.http=t,this.apiUrl=o.AdminServiceUrl}getAdmins(){return this.http.get(`${this.apiUrl}/admins`)}addAdmin(t){return this.http.post(`${this.apiUrl}/admins`,t)}login(t,e){return console.log(t,e),this.http.post(`${this.apiUrl}/login`,{email:t,password:e})}getDoctors(t=1,e=10,r=""){let i=`${this.apiUrl}/get-doctors`;return t&&e&&(i+=`?page=${t}&pageSize=${e}`,r&&(i+=`&search=${r}`)),this.http.get(i)}blockDoctor(t){let e=`${this.apiUrl}/change-status/${t}`;return this.http.put(e,null)}getAllUsers(t=1,e=10,r=""){let i=`page=${t}&pageSize=${e}&searchQuery=${r}`;return this.http.get(`${this.apiUrl}/get-Users?${i}`)}blockUser(t){return this.http.patch(`${this.apiUrl}/change-status/${t}`,{})}getSpecializedDoctors(t,e){return this.http.get(`${this.apiUrl}/get-specialized-doctors/${t}?search=${e}`)}getDashboardDetails(){return this.http.get(`${this.apiUrl}/get-admin-dashboard`)}getUsersAndDoctorsDashBoardDetails(){return this.http.get(`${this.apiUrl}/dashboard-users-doctors-summary`)}getAppoinmentDetails(t=1,e=5,r=""){let i=`page=${t}&pageSize=${e}&searchQuery=${r}`;return this.http.get(`${this.apiUrl}/get-appointment-details?${i}`)}getAdminTransactionDetails(){return this.http.get(`${this.apiUrl}/get-transaction-graphdetails`)}getAdminWalletDetails(t,e){return this.http.get(`${this.apiUrl}/get-admin-wallet?page=${t}&pageSize=${e}`)}getAppoinmentDetailOfanyAppointment(t){return this.http.get(`${this.apiUrl}/get-appointment/${t}`)}getReviews(t,e,r){let i=`page=${t}&pageSize=${e}&searchQuery=${r}`;return this.http.get(`${this.apiUrl}/get-reviews?${i}`)}deleteReview(t){return this.http.delete(`${this.apiUrl}/delete-review/${t}`)}getNotification(){return this.http.get(`${this.apiUrl}/get-notifications`)}};s.\u0275fac=function(e){return new(e||s)(h(p))},s.\u0275prov=n({token:s,factory:s.\u0275fac,providedIn:"root"});let a=s;return a})();export{$ as a};
