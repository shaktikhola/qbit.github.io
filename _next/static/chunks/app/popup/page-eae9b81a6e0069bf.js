(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[491],{6461:(e,r,t)=>{Promise.resolve().then(t.bind(t,384))},3568:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>a});var n=t(5155),s=t(2115),o=t(6046),l=t(1169);let a=e=>{let{courseName:r}=e,[t,a]=(0,s.useState)({course:r,username:"",phone:"",email:""}),[i,c]=(0,s.useState)(!1),[u,m]=(0,s.useState)(null),d=(0,o.useRouter)(),h=e=>{let{name:r,value:n}=e.target;a({...t,[r]:n})},p=async e=>{e.preventDefault(),c(!0);let r=new FormData;Object.entries(t).forEach(e=>{let[t,n]=e;r.append(t,n)});try{let e=await fetch("https://script.google.com/macros/s/AKfycbyh4rBkhgXplCS3_8wVtDLXsC5zm1LL7i1uu6euM6zVxkdz0AxEmySY2R8h50fm4XcV/exec",{method:"POST",body:r});if(e.ok)console.log("Success!",e),m(!0);else throw Error("Failed to send")}catch(e){console.error("Error!",e.message),m(!1)}finally{c(!1)}};return!0===u?(0,n.jsxs)("div",{className:"container mt-5 text-center",children:[(0,n.jsx)("h2",{children:"Success!"}),(0,n.jsx)("div",{className:"success-icon",children:(0,n.jsx)(l.jh$,{size:40})}),(0,n.jsx)("p",{children:"Your registration was successful. Thank you!"}),(0,n.jsx)("button",{className:"btn btn-primary",onClick:()=>d.push("/"),children:"Go to Home"})]}):!1===u?(0,n.jsxs)("div",{className:"container mt-5 text-center",children:[(0,n.jsx)("h2",{children:"Error!"}),(0,n.jsx)("p",{children:"There was a problem with your submission. Please try again."}),(0,n.jsx)("button",{className:"btn btn-danger",onClick:()=>d.push("/"),children:"Go to Home"})]}):(0,n.jsxs)("div",{className:"container mt-1",children:[(0,n.jsx)("h2",{className:"text-center",children:"Register Now!"}),(0,n.jsxs)("form",{onSubmit:p,name:"submit-to-google-sheet",className:"needs-validation",noValidate:!0,children:[(0,n.jsx)("div",{className:"form-group",children:(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsx)("label",{htmlFor:"course",children:"Selected Course:"}),(0,n.jsx)("input",{name:"course",type:"text",className:"form-control",placeholder:"course",value:r,onChange:h,required:!0,disabled:!0})]})}),(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsx)("label",{htmlFor:"username",children:"Username:"}),(0,n.jsx)("input",{name:"username",type:"text",className:"form-control",placeholder:"Username",value:t.username,onChange:h,required:!0,disabled:i})]}),(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsx)("label",{htmlFor:"phone",children:"Phone Number:"}),(0,n.jsx)("input",{name:"phone",type:"tel",className:"form-control",placeholder:"Phone Number",value:t.phone,onChange:h,required:!0,disabled:i})]}),(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsx)("label",{htmlFor:"email",children:"Email:"}),(0,n.jsx)("input",{name:"email",type:"email",className:"form-control",placeholder:"Email",value:t.email,onChange:h,required:!0,disabled:i})]}),(0,n.jsx)("button",{type:"submit",className:"btn btn-primary btn-block mt-3",disabled:i,children:i?"Submitting...":"Send"})]})]})}},384:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>l});var n=t(5155);t(2115);var s=t(2671);t(6576);var o=t(3568);let l=()=>(0,n.jsx)(s.A,{trigger:(0,n.jsx)("button",{children:"Open Popup"}),position:"left center",children:(0,n.jsx)("div",{children:(0,n.jsx)(o.default,{})})})},3435:(e,r,t)=>{"use strict";t.d(r,{k5:()=>u});var n=t(2115),s={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(s),l=["attr","size","title"];function a(){return(a=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach(function(r){var n,s;n=r,s=t[r],(n=function(e){var r=function(e,r){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,r||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==typeof r?r:r+""}(n))in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function u(e){return r=>n.createElement(m,a({attr:c({},e.attr)},r),function e(r){return r&&r.map((r,t)=>n.createElement(r.tag,c({key:t},r.attr),e(r.child)))}(e.child))}function m(e){var r=r=>{var t,{attr:s,size:o,title:i}=e,u=function(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(r.indexOf(n)>=0)continue;t[n]=e[n]}return t}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],!(r.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}(e,l),m=o||r.size||"1em";return r.className&&(t=r.className),e.className&&(t=(t?t+" ":"")+e.className),n.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,s,u,{className:t,style:c(c({color:e.color||r.color},r.style),e.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),i&&n.createElement("title",null,i),e.children)};return void 0!==o?n.createElement(o.Consumer,null,e=>r(e)):r(s)}}},e=>{var r=r=>e(e.s=r);e.O(0,[657,380,115,441,517,358],()=>r(6461)),_N_E=e.O()}]);