import{ma as a,pa as d,ra as c}from"./chunk-VIIRXEWM.js";var u=new d("JWT_OPTIONS"),x=(()=>{class o{constructor(e=null){this.tokenGetter=e&&e.tokenGetter||function(){}}urlBase64Decode(e){let t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:{t+="==";break}case 3:{t+="=";break}default:throw new Error("Illegal base64url string!")}return this.b64DecodeUnicode(t)}b64decode(e){let t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",r="";if(e=String(e).replace(/=+$/,""),e.length%4===1)throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");for(let i=0,s,n,h=0;n=e.charAt(h++);~n&&(s=i%4?s*64+n:n,i++%4)?r+=String.fromCharCode(255&s>>(-2*i&6)):0)n=t.indexOf(n);return r}b64DecodeUnicode(e){return decodeURIComponent(Array.prototype.map.call(this.b64decode(e),t=>"%"+("00"+t.charCodeAt(0).toString(16)).slice(-2)).join(""))}decodeToken(e=this.tokenGetter()){return e instanceof Promise?e.then(t=>this._decodeToken(t)):this._decodeToken(e)}_decodeToken(e){if(!e||e==="")return null;let t=e.split(".");if(t.length!==3)throw new Error("The inspected token doesn't appear to be a JWT. Check to make sure it has three parts and see https://jwt.io for more.");let r=this.urlBase64Decode(t[1]);if(!r)throw new Error("Cannot decode the token.");return JSON.parse(r)}getTokenExpirationDate(e=this.tokenGetter()){return e instanceof Promise?e.then(t=>this._getTokenExpirationDate(t)):this._getTokenExpirationDate(e)}_getTokenExpirationDate(e){let t;if(t=this.decodeToken(e),!t||!t.hasOwnProperty("exp"))return null;let r=new Date(0);return r.setUTCSeconds(t.exp),r}isTokenExpired(e=this.tokenGetter(),t){return e instanceof Promise?e.then(r=>this._isTokenExpired(r,t)):this._isTokenExpired(e,t)}_isTokenExpired(e,t){if(!e||e==="")return!0;let r=this.getTokenExpirationDate(e);return t=t||0,r===null?!1:!(r.valueOf()>new Date().valueOf()+t*1e3)}getAuthScheme(e,t){return typeof e=="function"?e(t):e}}return o.\u0275fac=function(e){return new(e||o)(c(u))},o.\u0275prov=a({token:o,factory:o.\u0275fac}),o})();export{u as a,x as b};