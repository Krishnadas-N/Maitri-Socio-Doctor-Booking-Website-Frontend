import{a as i}from"./chunk-6CS5MZYZ.js";import{b as c}from"./chunk-Y6YHTU6Y.js";import{ma as s,ra as l}from"./chunk-7CRQF3FF.js";var f=(()=>{let r=class r{constructor(t){this.http=t,this.userUrl=i.UserServiceUrl,this.DoctorUrl=i.DoctorServiceUrl}getSimilarProfiles(t){return this.http.get(`${this.DoctorUrl}/get-similar-profiles/${t}`)}toggleFollowDoctors(t){return this.http.get(`${this.DoctorUrl}/toggle-follow/${t}`)}addReview(t,o,n){return this.http.post(`${this.DoctorUrl}/add-review-rating/${n}`,{rating:t,review:o})}getReviews(t){return this.http.get(`${this.DoctorUrl}/get-reviews-doctor/${t}`)}};r.\u0275fac=function(o){return new(o||r)(l(c))},r.\u0275prov=s({token:r,factory:r.\u0275fac,providedIn:"root"});let e=r;return e})();export{f as a};