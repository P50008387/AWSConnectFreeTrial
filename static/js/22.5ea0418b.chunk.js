(this.webpackJsonpTranslateBlog=this.webpackJsonpTranslateBlog||[]).push([[22],{282:function(t,e,n){"use strict";n.r(e),n.d(e,"amplify_federated_buttons",(function(){return u})),n.d(e,"amplify_strike",(function(){return c}));var a=n(17),i=n(39),o=n(54),r=n(81),h=(n(11),n(36)),l=n(110),u=function(){function t(t){Object(a.k)(this,t),this.authState=o.a.SignIn,this.federated={},this.handleAuthStateChange=l.d}return t.prototype.componentWillLoad=function(){if(!r.a||"function"!==typeof r.a.configure)throw new Error(h.d);var t=r.a.configure().oauth,e=void 0===t?{}:t;e.domain?this.federated.oauthConfig=Object.assign(Object.assign({},this.federated.oauthConfig),e):e.awsCognito&&(this.federated.oauthConfig=Object.assign(Object.assign({},this.federated.oauthConfig),e.awsCognito)),e.auth0&&(this.federated.auth0Config=Object.assign(Object.assign({},this.federated.auth0Config),e.auth0))},t.prototype.render=function(){if(!Object.values(o.a).includes(this.authState))return null;if(Object(i.d)(this.federated))return null;var t=this.federated,e=t.amazonClientId,n=t.auth0Config,r=t.facebookAppId,h=t.googleClientId,l=t.oauthConfig;return Object(a.i)("div",null,h&&Object(a.i)("div",null,Object(a.i)("amplify-google-button",{clientId:h,handleAuthStateChange:this.handleAuthStateChange})),r&&Object(a.i)("div",null,Object(a.i)("amplify-facebook-button",{appId:r,handleAuthStateChange:this.handleAuthStateChange})),e&&Object(a.i)("div",null,Object(a.i)("amplify-amazon-button",{clientId:e,handleAuthStateChange:this.handleAuthStateChange})),l&&Object(a.i)("div",null,Object(a.i)("amplify-oauth-button",{config:l})),n&&Object(a.i)("div",null,Object(a.i)("amplify-auth0-button",{config:n,handleAuthStateChange:this.handleAuthStateChange})))},t}(),c=function(){function t(t){Object(a.k)(this,t)}return t.prototype.render=function(){return Object(a.i)("span",{class:"strike-content"},Object(a.i)("slot",null))},t}();c.style=".sc-amplify-strike-h{--color:var(--amplify-grey);--border-color:var(--amplify-light-grey);--content-background:var(--amplify-white);display:block;width:100%;text-align:center;border-bottom:1px solid var(--border-color);line-height:0.1em;margin:32px 0;color:var(--color)}.strike-content.sc-amplify-strike{background:var(--content-background);padding:0 25px;font-size:var(--amplify-text-sm);font-weight:500}"}}]);
//# sourceMappingURL=22.5ea0418b.chunk.js.map