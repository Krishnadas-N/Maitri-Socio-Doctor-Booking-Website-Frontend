import{b as c}from"./chunk-VOEKKMOV.js";import{a}from"./chunk-7AG6UC3F.js";import{ma as s,ra as n}from"./chunk-7CRQF3FF.js";var p=(()=>{let e=class e{constructor(t,i){this.jwtHelper=t,this.tokenService=i}isAuthenticated(){let t=this.tokenService.getToken();return!this.jwtHelper.isTokenExpired(t)}hasRole(t){let i=this.tokenService.getToken();if(i){let r=this.jwtHelper.decodeToken(i);if(r&&r.roles)return r.roles.includes(t)}return!1}};e.\u0275fac=function(i){return new(i||e)(n(c),n(a))},e.\u0275prov=s({token:e,factory:e.\u0275fac,providedIn:"root"});let o=e;return o})();export{p as a};