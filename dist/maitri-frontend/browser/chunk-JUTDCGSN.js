import{b as c}from"./chunk-66GKV65L.js";import{a}from"./chunk-KTKKQ74Q.js";import{ha as s,ma as n}from"./chunk-PWWHKO4X.js";var p=(()=>{let e=class e{constructor(t,i){this.jwtHelper=t,this.tokenService=i}isAuthenticated(){let t=this.tokenService.getToken();return!this.jwtHelper.isTokenExpired(t)}hasRole(t){let i=this.tokenService.getToken();if(i){let r=this.jwtHelper.decodeToken(i);if(r&&r.roles)return r.roles.includes(t)}return!1}};e.\u0275fac=function(i){return new(i||e)(n(c),n(a))},e.\u0275prov=s({token:e,factory:e.\u0275fac,providedIn:"root"});let o=e;return o})();export{p as a};
