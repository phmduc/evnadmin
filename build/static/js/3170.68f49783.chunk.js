"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[3170],{77055:function(e,n,t){t(47313);n.Z=t.p+"static/media/google-plus.ff5ae61510aa58cedbe9855922094f21.svg"},82514:function(e,n,t){t.r(n),t.d(n,{Checkbox:function(){return o},CheckboxGroup:function(){return i}});var a=t(29439),r=t(47313),l=t(63242),c=t(46417),i=l.CheckboxStyle.Group;function o(e){var n=e.item,t=e.defaultSelect,o=e.checked,s=e.multiple,u=e.onChange,d=e.onChangeTriger,h=e.defaultChecked,f=e.disabled,p=e.children,v=n,m=(0,r.useState)({checkedList:t,indeterminate:!0,checkAll:!1}),x=(0,a.Z)(m,2),g=x[0],b=x[1];(0,r.useEffect)((function(){d&&d(g.checkedList)}),[g]);return s?(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{style:{borderBottom:"1px solid #E9E9E9"},children:(0,c.jsx)(l.CheckboxStyle,{indeterminate:g.indeterminate,onChange:function(e){b({checkedList:e.target.checked?v:[],indeterminate:!1,checkAll:e.target.checked})},checked:g.checkAll,children:"Check all"})}),(0,c.jsx)("br",{}),(0,c.jsx)(i,{options:v,value:g.checkedList,onChange:function(e){b({checkedList:e,indeterminate:!!e.length&&e.length<v.length,checkAll:e.length===v.length})}})]}):(0,c.jsx)(l.CheckboxStyle,{checked:o,onChange:function(e){return u(e.target.checked,e.target.value)},defaultChecked:h,disabled:f,children:p})}o.defaultProps={checked:!1}},63242:function(e,n,t){t.r(n),t.d(n,{CheckboxStyle:function(){return c}});var a,r=t(30168),l=t(32697),c=(0,t(70244).ZP)(l.Z)(a||(a=(0,r.Z)(["\n\n"])))},12578:function(e,n,t){t.r(n);var a=t(1413),r=t(29439),l=t(47313),c=t(2135),i=t(79585),o=t(68197),s=t(59624),u=t(12008),d=t(66672),h=t(59491),f=t(15486),p=t(63451),v=t(88276),m=t(1084),x=t(41116),g=t(82514),b=t(47542),y=t(46417);n.default=function(){var e=(0,m.I0)(),n=(0,l.useState)({values:null,checked:null}),k=(0,r.Z)(n,2),Z=k[0],j=k[1];return(0,y.jsx)(o.Z,{justify:"center",children:(0,y.jsx)(s.Z,{xxl:6,xl:8,md:12,sm:18,xs:24,children:(0,y.jsxs)(x.AuthFormWrap,{children:[(0,y.jsx)("div",{className:"ninjadash-authentication-top",children:(0,y.jsx)("h2",{className:"ninjadash-authentication-top__title",children:"Sign Up HexaDash"})}),(0,y.jsx)("div",{className:"ninjadash-authentication-content",children:(0,y.jsxs)(u.Z,{name:"register",onFinish:function(n){e((0,b.register)(n))},layout:"vertical",children:[(0,y.jsx)(u.Z.Item,{label:"Name",name:"name",rules:[{required:!0,message:"Please input your Full name!"}],children:(0,y.jsx)(d.Z,{placeholder:"Full name"})}),(0,y.jsx)(u.Z.Item,{name:"email",label:"Email Address",rules:[{required:!0,message:"Please input your email!",type:"email"}],children:(0,y.jsx)(d.Z,{placeholder:"name@example.com"})}),(0,y.jsx)(u.Z.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:(0,y.jsx)(d.Z.Password,{placeholder:"Password"})}),(0,y.jsx)("div",{className:"ninjadash-auth-extra-links",children:(0,y.jsx)(g.Checkbox,{onChange:function(e){j((0,a.Z)((0,a.Z)({},Z),{},{checked:e}))},checked:Z.checked,children:"Creating an account means you\u2019re okay with our Terms of Service and Privacy Policy"})}),(0,y.jsx)(u.Z.Item,{children:(0,y.jsx)(h.Z,{className:"btn-create",htmlType:"submit",type:"primary",size:"large",children:"Create Account"})}),(0,y.jsx)("p",{className:"ninjadash-form-divider",children:(0,y.jsx)("span",{children:"Or"})}),(0,y.jsxs)("ul",{className:"ninjadash-social-login",children:[(0,y.jsx)("li",{children:(0,y.jsx)(c.rU,{className:"google-social",to:"#",children:(0,y.jsx)(i.Q,{src:t(77055).Z})})}),(0,y.jsx)("li",{children:(0,y.jsx)(c.rU,{className:"facebook-social",to:"#",children:(0,y.jsx)(f.Z,{})})}),(0,y.jsx)("li",{children:(0,y.jsx)(c.rU,{className:"twitter-social",to:"#",children:(0,y.jsx)(p.Z,{})})}),(0,y.jsx)("li",{children:(0,y.jsx)(c.rU,{className:"github-social",to:"#",children:(0,y.jsx)(v.Z,{})})})]})]})}),(0,y.jsx)("div",{className:"ninjadash-authentication-bottom",children:(0,y.jsxs)("p",{children:["Already have an account?",(0,y.jsx)(c.rU,{to:"/",children:"Sign In"})]})})]})})})}},15486:function(e,n,t){var a=t(1413),r=t(45987),l=t(61962),c=t(75192),i=t.n(c),o=["color","size"],s=function(e){var n=e.color,t=e.size,c=(0,r.Z)(e,o);return l.createElement("svg",(0,a.Z)({xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:n},c),l.createElement("path",{d:"M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z"}))};s.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},s.defaultProps={color:"currentColor",size:"24"},n.Z=s},88276:function(e,n,t){var a=t(1413),r=t(45987),l=t(61962),c=t(75192),i=t.n(c),o=["color","size"],s=function(e){var n=e.color,t=e.size,c=(0,r.Z)(e,o);return l.createElement("svg",(0,a.Z)({xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:n},c),l.createElement("path",{d:"M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"}))};s.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},s.defaultProps={color:"currentColor",size:"24"},n.Z=s},63451:function(e,n,t){var a=t(1413),r=t(45987),l=t(61962),c=t(75192),i=t.n(c),o=["color","size"],s=function(e){var n=e.color,t=e.size,c=(0,r.Z)(e,o);return l.createElement("svg",(0,a.Z)({xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:n},c),l.createElement("path",{d:"M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z"}))};s.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},s.defaultProps={color:"currentColor",size:"24"},n.Z=s},32697:function(e,n,t){t.d(n,{Z:function(){return C}});var a=t(4942),r=t(87462),l=t(46123),c=t.n(l),i=t(56482),o=t(47313),s=t(74714),u=t(4431),d=t(93433),h=t(29439),f=t(205),p=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]])}return t},v=o.createContext(null),m=function(e,n){var t=e.defaultValue,l=e.children,i=e.options,u=void 0===i?[]:i,m=e.prefixCls,x=e.className,g=e.style,b=e.onChange,y=p(e,["defaultValue","children","options","prefixCls","className","style","onChange"]),k=o.useContext(s.E_),j=k.getPrefixCls,C=k.direction,w=o.useState(y.value||t||[]),E=(0,h.Z)(w,2),N=E[0],O=E[1],P=o.useState([]),A=(0,h.Z)(P,2),S=A[0],z=A[1];o.useEffect((function(){"value"in y&&O(y.value||[])}),[y.value]);var I=function(){return u.map((function(e){return"string"===typeof e||"number"===typeof e?{label:e,value:e}:e}))},V=j("checkbox",m),M="".concat(V,"-group"),T=(0,f.Z)(y,["value","disabled"]);u&&u.length>0&&(l=I().map((function(e){return o.createElement(Z,{prefixCls:V,key:e.value.toString(),disabled:"disabled"in e?e.disabled:y.disabled,value:e.value,checked:N.includes(e.value),onChange:e.onChange,className:"".concat(M,"-item"),style:e.style},e.label)})));var H={toggleOption:function(e){var n=N.indexOf(e.value),t=(0,d.Z)(N);-1===n?t.push(e.value):t.splice(n,1),"value"in y||O(t);var a=I();null===b||void 0===b||b(t.filter((function(e){return S.includes(e)})).sort((function(e,n){return a.findIndex((function(n){return n.value===e}))-a.findIndex((function(e){return e.value===n}))})))},value:N,disabled:y.disabled,name:y.name,registerValue:function(e){z((function(n){return[].concat((0,d.Z)(n),[e])}))},cancelValue:function(e){z((function(n){return n.filter((function(n){return n!==e}))}))}},L=c()(M,(0,a.Z)({},"".concat(M,"-rtl"),"rtl"===C),x);return o.createElement("div",(0,r.Z)({className:L,style:g},T,{ref:n}),o.createElement(v.Provider,{value:H},l))},x=o.forwardRef(m),g=o.memo(x),b=t(98438),y=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]])}return t},k=function(e,n){var t,l,d=e.prefixCls,h=e.className,f=e.children,p=e.indeterminate,m=void 0!==p&&p,x=e.style,g=e.onMouseEnter,k=e.onMouseLeave,Z=e.skipGroup,j=void 0!==Z&&Z,C=e.disabled,w=y(e,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),E=o.useContext(s.E_),N=E.getPrefixCls,O=E.direction,P=o.useContext(v),A=(0,o.useContext)(u.aM).isFormItemInput,S=(0,o.useContext)(b.Z),z=null!==(l=(null===P||void 0===P?void 0:P.disabled)||C)&&void 0!==l?l:S,I=o.useRef(w.value);o.useEffect((function(){null===P||void 0===P||P.registerValue(w.value)}),[]),o.useEffect((function(){if(!j)return w.value!==I.current&&(null===P||void 0===P||P.cancelValue(I.current),null===P||void 0===P||P.registerValue(w.value),I.current=w.value),function(){return null===P||void 0===P?void 0:P.cancelValue(w.value)}}),[w.value]);var V=N("checkbox",d),M=(0,r.Z)({},w);P&&!j&&(M.onChange=function(){w.onChange&&w.onChange.apply(w,arguments),P.toggleOption&&P.toggleOption({label:f,value:w.value})},M.name=P.name,M.checked=P.value.includes(w.value));var T=c()((t={},(0,a.Z)(t,"".concat(V,"-wrapper"),!0),(0,a.Z)(t,"".concat(V,"-rtl"),"rtl"===O),(0,a.Z)(t,"".concat(V,"-wrapper-checked"),M.checked),(0,a.Z)(t,"".concat(V,"-wrapper-disabled"),z),(0,a.Z)(t,"".concat(V,"-wrapper-in-form-item"),A),t),h),H=c()((0,a.Z)({},"".concat(V,"-indeterminate"),m)),L=m?"mixed":void 0;return o.createElement("label",{className:T,style:x,onMouseEnter:g,onMouseLeave:k},o.createElement(i.default,(0,r.Z)({"aria-checked":L},M,{prefixCls:V,className:H,disabled:z,ref:n})),void 0!==f&&o.createElement("span",null,f))};var Z=o.forwardRef(k),j=Z;j.Group=g,j.__ANT_CHECKBOX=!0;var C=j},56482:function(e,n,t){t.r(n),t.d(n,{Checkbox:function(){return f}});var a=t(87462),r=t(1413),l=t(4942),c=t(29439),i=t(45987),o=t(46123),s=t.n(o),u=t(10288),d=t(47313),h=["prefixCls","className","style","checked","disabled","defaultChecked","type","onChange"],f=(0,d.forwardRef)((function(e,n){var t,o=e.prefixCls,f=void 0===o?"rc-checkbox":o,p=e.className,v=e.style,m=e.checked,x=e.disabled,g=e.defaultChecked,b=void 0!==g&&g,y=e.type,k=void 0===y?"checkbox":y,Z=e.onChange,j=(0,i.Z)(e,h),C=(0,d.useRef)(null),w=(0,u.Z)(b,{value:m}),E=(0,c.Z)(w,2),N=E[0],O=E[1];(0,d.useImperativeHandle)(n,(function(){return{focus:function(){var e;null===(e=C.current)||void 0===e||e.focus()},blur:function(){var e;null===(e=C.current)||void 0===e||e.blur()},input:C.current}}));var P=s()(f,p,(t={},(0,l.Z)(t,"".concat(f,"-checked"),N),(0,l.Z)(t,"".concat(f,"-disabled"),x),t));return d.createElement("span",{className:P,style:v},d.createElement("input",(0,a.Z)({},j,{className:"".concat(f,"-input"),ref:C,onChange:function(n){x||("checked"in e||O(n.target.checked),null===Z||void 0===Z||Z({target:(0,r.Z)((0,r.Z)({},e),{},{type:k,checked:n.target.checked}),stopPropagation:function(){n.stopPropagation()},preventDefault:function(){n.preventDefault()},nativeEvent:n.nativeEvent}))},disabled:x,checked:!!N,type:k})),d.createElement("span",{className:"".concat(f,"-inner")}))}));n.default=f}}]);