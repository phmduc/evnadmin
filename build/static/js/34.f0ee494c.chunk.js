(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[34],{5810:function(e,n,a){"use strict";a.r(n);var t=a(1413),o=a(29439),r=a(47313),i=a(80506),s=a(2135),g=a(54987),c=a(23008),l=a(35399),u=a(46417),m=l.bestSeller,p=[{title:"Seller Name",dataIndex:"sellerName",key:"sellerName"},{title:"Company",dataIndex:"company",key:"company"},{title:"Product",dataIndex:"product",key:"product"},{title:"Revenue",dataIndex:"revenue",key:"revenue"},{title:"Status",dataIndex:"status",key:"status"}],A=r.memo((function(){var e=(0,r.useState)({sellerTab:"today"}),n=(0,o.Z)(e,2),l=n[0],A=n[1],d=l.sellerTab,h=[];null!==m&&m[d].map((function(e){var n=e.key,t=e.img,o=e.name,r=e.company,i=e.product,s=e.revenue,g=e.status;return h.push({key:n,sellerName:(0,u.jsxs)("div",{className:"ninjadash-info-element align-center-v",children:[(0,u.jsx)("div",{className:"ninjadash-info-element__media",children:(0,u.jsx)("img",{src:a(89228)("./".concat(t)),alt:"ninjadash Product"})}),(0,u.jsx)("div",{className:"ninjadash-info-element__content",children:(0,u.jsx)("span",{className:"ninjadash-info-element__text",children:o})})]}),company:r,product:i,revenue:s,status:g})}));var y=function(e,n){n.preventDefault(),A((0,t.Z)((0,t.Z)({},l),{},{sellerTab:e}))};return(0,u.jsx)("div",{className:"full-width-table",children:(0,u.jsx)(c.BorderLessHeading,{children:(0,u.jsx)(g.Cards,{isbutton:(0,u.jsx)("div",{className:"ninjadash-card-nav",children:(0,u.jsxs)("ul",{children:[(0,u.jsx)("li",{className:"today"===d?"ninjadash-active":"ninjadash-today",children:(0,u.jsx)(s.rU,{onClick:function(e){return y("today",e)},to:"#",children:"Today"})}),(0,u.jsx)("li",{className:"week"===d?"ninjadash-active":"ninjadash-week",children:(0,u.jsx)(s.rU,{onClick:function(e){return y("week",e)},to:"#",children:"Week"})}),(0,u.jsx)("li",{className:"month"===d?"ninjadash-active":"ninjadash-month",children:(0,u.jsx)(s.rU,{onClick:function(e){return y("month",e)},to:"#",children:"Month"})})]})}),title:"Best Seller",size:"large",children:(0,u.jsx)(c.TableDefaultStyle,{className:"ninjadash-having-header-bg",children:(0,u.jsx)("div",{className:"table-responsive",children:(0,u.jsx)(i.Z,{columns:p,dataSource:h,pagination:!1})})})})})})}));n.default=A},43681:function(e,n,a){"use strict";a.d(n,{Z:function(){return g}});var t=a(1413),o=a(47313),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"},i=a(6476),s=function(e,n){return o.createElement(i.Z,(0,t.Z)((0,t.Z)({},e),{},{ref:n,icon:r}))};s.displayName="CheckOutlined";var g=o.forwardRef(s)},32697:function(e,n,a){"use strict";a.d(n,{Z:function(){return b}});var t=a(4942),o=a(87462),r=a(46123),i=a.n(r),s=a(56482),g=a(47313),c=a(74714),l=a(4431),u=a(93433),m=a(29439),p=a(205),A=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]])}return a},d=g.createContext(null),h=function(e,n){var a=e.defaultValue,r=e.children,s=e.options,l=void 0===s?[]:s,h=e.prefixCls,y=e.className,k=e.style,v=e.onChange,f=A(e,["defaultValue","children","options","prefixCls","className","style","onChange"]),B=g.useContext(c.E_),C=B.getPrefixCls,b=B.direction,E=g.useState(f.value||a||[]),G=(0,m.Z)(E,2),x=G[0],$=G[1],w=g.useState([]),M=(0,m.Z)(w,2),R=M[0],D=M[1];g.useEffect((function(){"value"in f&&$(f.value||[])}),[f.value]);var I=function(){return l.map((function(e){return"string"===typeof e||"number"===typeof e?{label:e,value:e}:e}))},O=C("checkbox",h),P="".concat(O,"-group"),Q=(0,p.Z)(f,["value","disabled"]);l&&l.length>0&&(r=I().map((function(e){return g.createElement(S,{prefixCls:O,key:e.value.toString(),disabled:"disabled"in e?e.disabled:f.disabled,value:e.value,checked:x.includes(e.value),onChange:e.onChange,className:"".concat(P,"-item"),style:e.style},e.label)})));var j={toggleOption:function(e){var n=x.indexOf(e.value),a=(0,u.Z)(x);-1===n?a.push(e.value):a.splice(n,1),"value"in f||$(a);var t=I();null===v||void 0===v||v(a.filter((function(e){return R.includes(e)})).sort((function(e,n){return t.findIndex((function(n){return n.value===e}))-t.findIndex((function(e){return e.value===n}))})))},value:x,disabled:f.disabled,name:f.name,registerValue:function(e){D((function(n){return[].concat((0,u.Z)(n),[e])}))},cancelValue:function(e){D((function(n){return n.filter((function(n){return n!==e}))}))}},N=i()(P,(0,t.Z)({},"".concat(P,"-rtl"),"rtl"===b),y);return g.createElement("div",(0,o.Z)({className:N,style:k},Q,{ref:n}),g.createElement(d.Provider,{value:j},r))},y=g.forwardRef(h),k=g.memo(y),v=a(98438),f=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]])}return a},B=function(e,n){var a,r,u=e.prefixCls,m=e.className,p=e.children,A=e.indeterminate,h=void 0!==A&&A,y=e.style,k=e.onMouseEnter,B=e.onMouseLeave,S=e.skipGroup,C=void 0!==S&&S,b=e.disabled,E=f(e,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),G=g.useContext(c.E_),x=G.getPrefixCls,$=G.direction,w=g.useContext(d),M=(0,g.useContext)(l.aM).isFormItemInput,R=(0,g.useContext)(v.Z),D=null!==(r=(null===w||void 0===w?void 0:w.disabled)||b)&&void 0!==r?r:R,I=g.useRef(E.value);g.useEffect((function(){null===w||void 0===w||w.registerValue(E.value)}),[]),g.useEffect((function(){if(!C)return E.value!==I.current&&(null===w||void 0===w||w.cancelValue(I.current),null===w||void 0===w||w.registerValue(E.value),I.current=E.value),function(){return null===w||void 0===w?void 0:w.cancelValue(E.value)}}),[E.value]);var O=x("checkbox",u),P=(0,o.Z)({},E);w&&!C&&(P.onChange=function(){E.onChange&&E.onChange.apply(E,arguments),w.toggleOption&&w.toggleOption({label:p,value:E.value})},P.name=w.name,P.checked=w.value.includes(E.value));var Q=i()((a={},(0,t.Z)(a,"".concat(O,"-wrapper"),!0),(0,t.Z)(a,"".concat(O,"-rtl"),"rtl"===$),(0,t.Z)(a,"".concat(O,"-wrapper-checked"),P.checked),(0,t.Z)(a,"".concat(O,"-wrapper-disabled"),D),(0,t.Z)(a,"".concat(O,"-wrapper-in-form-item"),M),a),m),j=i()((0,t.Z)({},"".concat(O,"-indeterminate"),h)),N=h?"mixed":void 0;return g.createElement("label",{className:Q,style:y,onMouseEnter:k,onMouseLeave:B},g.createElement(s.default,(0,o.Z)({"aria-checked":N},P,{prefixCls:O,className:j,disabled:D,ref:n})),void 0!==p&&g.createElement("span",null,p))};var S=g.forwardRef(B),C=S;C.Group=k,C.__ANT_CHECKBOX=!0;var b=C},74294:function(e,n,a){"use strict";var t=a(4942),o=a(87462),r=a(46123),i=a.n(r),s=a(61310),g=a(205),c=a(47313),l=a(74714),u=a(82926),m=a(98438),p=a(21631),A=a(4431),d=a(53553),h=a(55681),y=a(87632),k=a(45531),v=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]])}return a},f="SECRET_COMBOBOX_MODE_DO_NOT_USE",B=function(e,n){var a,r,B=e.prefixCls,S=e.bordered,C=void 0===S||S,b=e.className,E=e.getPopupContainer,G=e.dropdownClassName,x=e.popupClassName,$=e.listHeight,w=void 0===$?256:$,M=e.placement,R=e.listItemHeight,D=void 0===R?24:R,I=e.size,O=e.disabled,P=e.notFoundContent,Q=e.status,j=e.showArrow,N=v(e,["prefixCls","bordered","className","getPopupContainer","dropdownClassName","popupClassName","listHeight","placement","listItemHeight","size","disabled","notFoundContent","status","showArrow"]),Y=c.useContext(l.E_),Z=Y.getPopupContainer,U=Y.getPrefixCls,J=Y.renderEmpty,V=Y.direction,W=Y.virtual,T=Y.dropdownMatchSelectWidth,H=c.useContext(p.Z),L=U("select",B),z=U(),K=(0,k.ri)(L,V),_=K.compactSize,X=K.compactItemClassnames,q=c.useMemo((function(){var e=N.mode;if("combobox"!==e)return e===f?"combobox":e}),[N.mode]),F="multiple"===q||"tags"===q,ee=void 0!==j?j:N.loading||!(F||"combobox"===q),ne=(0,c.useContext)(A.aM),ae=ne.status,te=ne.hasFeedback,oe=ne.isFormItemInput,re=ne.feedbackIcon,ie=(0,h.F)(ae,Q);r=void 0!==P?P:"combobox"===q?null:(J||u.Z)("Select");var se=(0,y.Z)((0,o.Z)((0,o.Z)({},N),{multiple:F,hasFeedback:te,feedbackIcon:re,showArrow:ee,prefixCls:L})),ge=se.suffixIcon,ce=se.itemIcon,le=se.removeIcon,ue=se.clearIcon,me=(0,g.Z)(N,["suffixIcon","itemIcon"]),pe=i()(x||G,(0,t.Z)({},"".concat(L,"-dropdown-").concat(V),"rtl"===V)),Ae=_||I||H,de=c.useContext(m.Z),he=null!==O&&void 0!==O?O:de,ye=i()((a={},(0,t.Z)(a,"".concat(L,"-lg"),"large"===Ae),(0,t.Z)(a,"".concat(L,"-sm"),"small"===Ae),(0,t.Z)(a,"".concat(L,"-rtl"),"rtl"===V),(0,t.Z)(a,"".concat(L,"-borderless"),!C),(0,t.Z)(a,"".concat(L,"-in-form-item"),oe),a),(0,h.Z)(L,ie,te),X,b);return c.createElement(s.ZP,(0,o.Z)({ref:n,virtual:W,dropdownMatchSelectWidth:T},me,{transitionName:(0,d.mL)(z,(0,d.q0)(M),N.transitionName),listHeight:w,listItemHeight:D,mode:q,prefixCls:L,placement:void 0!==M?M:"rtl"===V?"bottomRight":"bottomLeft",direction:V,inputIcon:ge,menuItemSelectedIcon:ce,removeIcon:le,clearIcon:ue,notFoundContent:r,className:ye,getPopupContainer:E||Z,dropdownClassName:pe,showArrow:te||j,disabled:he}))},S=c.forwardRef(B);S.SECRET_COMBOBOX_MODE_DO_NOT_USE=f,S.Option=s.Wx,S.OptGroup=s.Xo,n.Z=S},56482:function(e,n,a){"use strict";a.r(n),a.d(n,{Checkbox:function(){return p}});var t=a(87462),o=a(1413),r=a(4942),i=a(29439),s=a(45987),g=a(46123),c=a.n(g),l=a(10288),u=a(47313),m=["prefixCls","className","style","checked","disabled","defaultChecked","type","onChange"],p=(0,u.forwardRef)((function(e,n){var a,g=e.prefixCls,p=void 0===g?"rc-checkbox":g,A=e.className,d=e.style,h=e.checked,y=e.disabled,k=e.defaultChecked,v=void 0!==k&&k,f=e.type,B=void 0===f?"checkbox":f,S=e.onChange,C=(0,s.Z)(e,m),b=(0,u.useRef)(null),E=(0,l.Z)(v,{value:h}),G=(0,i.Z)(E,2),x=G[0],$=G[1];(0,u.useImperativeHandle)(n,(function(){return{focus:function(){var e;null===(e=b.current)||void 0===e||e.focus()},blur:function(){var e;null===(e=b.current)||void 0===e||e.blur()},input:b.current}}));var w=c()(p,A,(a={},(0,r.Z)(a,"".concat(p,"-checked"),x),(0,r.Z)(a,"".concat(p,"-disabled"),y),a));return u.createElement("span",{className:w,style:d},u.createElement("input",(0,t.Z)({},C,{className:"".concat(p,"-input"),ref:b,onChange:function(n){y||("checked"in e||$(n.target.checked),null===S||void 0===S||S({target:(0,o.Z)((0,o.Z)({},e),{},{type:B,checked:n.target.checked}),stopPropagation:function(){n.stopPropagation()},preventDefault:function(){n.preventDefault()},nativeEvent:n.nativeEvent}))},disabled:y,checked:!!x,type:B})),u.createElement("span",{className:"".concat(p,"-inner")}))}));n.default=p},42386:function(e,n,a){"use strict";var t;function o(e){if("undefined"===typeof document)return 0;if(e||void 0===t){var n=document.createElement("div");n.style.width="100%",n.style.height="200px";var a=document.createElement("div"),o=a.style;o.position="absolute",o.top="0",o.left="0",o.pointerEvents="none",o.visibility="hidden",o.width="200px",o.height="150px",o.overflow="hidden",a.appendChild(n),document.body.appendChild(a);var r=n.offsetWidth;a.style.overflow="scroll";var i=n.offsetWidth;r===i&&(i=a.clientWidth),document.body.removeChild(a),t=r-i}return t}function r(e){var n=e.match(/^(.*)px$/),a=Number(null===n||void 0===n?void 0:n[1]);return Number.isNaN(a)?o():a}function i(e){if("undefined"===typeof document||!e||!(e instanceof Element))return{width:0,height:0};var n=getComputedStyle(e,"::-webkit-scrollbar"),a=n.width,t=n.height;return{width:r(a),height:r(t)}}a.d(n,{Z:function(){return o},o:function(){return i}})},89228:function(e,n,a){var t={"./1.png":6040,"./10.png":3134,"./11.png":19577,"./12.png":9835,"./13.png":38011,"./14.png":77912,"./2.png":66735,"./3.png":38934,"./4.png":38892,"./5.png":92001,"./6.png":98294,"./7.png":87685,"./8.png":34234,"./9.png":14105};function o(e){var n=r(e);return a(n)}function r(e){if(!a.o(t,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t[e]}o.keys=function(){return Object.keys(t)},o.resolve=r,e.exports=o,o.id=89228},6040:function(e){"use strict";e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAMUlEQVRYR+3QQREAAAjDMOZfz/SBDD6pgl7SduexGCBAgAABAgQIECBAgAABAgS+BQ6hY2PhKtYb2gAAAABJRU5ErkJggg=="},3134:function(e){"use strict";e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAgklEQVR4Xu3XAREAMAgDMfCvB32bkM8k9EZz3bt7E34rAD/ACeiAcAeOEqQABShAAQqEE8AgBjGIQQyGETCGMIhBDGIQgxgMJ4BBDGIQgxgMI2ANYhCDGMQgBjEYTgCDGMQgBjEYRsAaxCAGMYhBDGIwnAAGMYhBDGIwjIA1iME6gx/rbMfBEWSCtwAAAABJRU5ErkJggg=="},19577:function(e){"use strict";e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAgklEQVR4Xu3XAREAMAgDMfCvB32bkM8k9EZz3bt7E34rAD/ACeiAcAeOEqQABShAAQqEE8AgBjGIQQyGETCGMIhBDGIQgxgMJ4BBDGIQgxgMI2ANYhCDGMQgBjEYTgCDGMQgBjEYRsAaxCAGMYhBDGIwnAAGMYhBDGIwjIA1iME6gx/rbMfBEWSCtwAAAABJRU5ErkJggg=="},9835:function(e){"use strict";e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAgklEQVR4Xu3XAREAMAgDMfCvB32bkM8k9EZz3bt7E34rAD/ACeiAcAeOEqQABShAAQqEE8AgBjGIQQyGETCGMIhBDGIQgxgMJ4BBDGIQgxgMI2ANYhCDGMQgBjEYTgCDGMQgBjEYRsAaxCAGMYhBDGIwnAAGMYhBDGIwjIA1iME6gx/rbMfBEWSCtwAAAABJRU5ErkJggg=="},38011:function(e){"use strict";e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAgklEQVR4Xu3XAREAMAgDMfCvB32bkM8k9EZz3bt7E34rAD/ACeiAcAeOEqQABShAAQqEE8AgBjGIQQyGETCGMIhBDGIQgxgMJ4BBDGIQgxgMI2ANYhCDGMQgBjEYTgCDGMQgBjEYRsAaxCAGMYhBDGIwnAAGMYhBDGIwjIA1iME6gx/rbMfBEWSCtwAAAABJRU5ErkJggg=="},77912:function(e){"use strict";e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAgklEQVR4Xu3XAREAMAgDMfCvB32bkM8k9EZz3bt7E34rAD/ACeiAcAeOEqQABShAAQqEE8AgBjGIQQyGETCGMIhBDGIQgxgMJ4BBDGIQgxgMI2ANYhCDGMQgBjEYTgCDGMQgBjEYRsAaxCAGMYhBDGIwnAAGMYhBDGIwjIA1iME6gx/rbMfBEWSCtwAAAABJRU5ErkJggg=="},66735:function(e){"use strict";e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAMUlEQVRYR+3QQREAAAjDMOZfz/SBDD6pgl7SduexGCBAgAABAgQIECBAgAABAgS+BQ6hY2PhKtYb2gAAAABJRU5ErkJggg=="},38934:function(e){"use strict";e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAMUlEQVRYR+3QQREAAAjDMOZfz/SBDD6pgl7SduexGCBAgAABAgQIECBAgAABAgS+BQ6hY2PhKtYb2gAAAABJRU5ErkJggg=="},38892:function(e){"use strict";e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAMUlEQVRYR+3QQREAAAjDMOZfz/SBDD6pgl7SduexGCBAgAABAgQIECBAgAABAgS+BQ6hY2PhKtYb2gAAAABJRU5ErkJggg=="},92001:function(e){"use strict";e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAMUlEQVRYR+3QQREAAAjDMOZfz/SBDD6pgl7SduexGCBAgAABAgQIECBAgAABAgS+BQ6hY2PhKtYb2gAAAABJRU5ErkJggg=="},98294:function(e){"use strict";e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAMUlEQVRYR+3QQREAAAjDMOZfz/SBDD6pgl7SduexGCBAgAABAgQIECBAgAABAgS+BQ6hY2PhKtYb2gAAAABJRU5ErkJggg=="},87685:function(e){"use strict";e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAMUlEQVRYR+3QQREAAAjDMOZfz/SBDD6pgl7SduexGCBAgAABAgQIECBAgAABAgS+BQ6hY2PhKtYb2gAAAABJRU5ErkJggg=="},34234:function(e){"use strict";e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAMUlEQVRYR+3QQREAAAjDMOZfz/SBDD6pgl7SduexGCBAgAABAgQIECBAgAABAgS+BQ6hY2PhKtYb2gAAAABJRU5ErkJggg=="},14105:function(e){"use strict";e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAMUlEQVRYR+3QQREAAAjDMOZfz/SBDD6pgl7SduexGCBAgAABAgQIECBAgAABAgS+BQ6hY2PhKtYb2gAAAABJRU5ErkJggg=="},35399:function(e){"use strict";e.exports=JSON.parse('{"salesLocation":{"today":[["United states","90","$536"],["United kingdom","70","$573"],["Canada","70","$457"],["Japan","30","$524"],["Bangladesh","50","$354"],["India","60","$654"]],"week":[["Japan","90","$336"],["United kingdom","70","$873"],["Canada","70","$557"],["Japan","30","$525"],["Bangladesh","50","$352"],["Pakistan","60","$658"]],"month":[["Russia","90","$534"],["Germany","70","$573"],["Canada","70","$487"],["Japan","30","$514"],["Bangladesh","50","$394"],["Vutan","60","$354"]]},"topSaleProduct":{"today":[{"key":"1","img":"1.png","name":"Samsung Galaxy S8 256GB","price":"$280","sold":"126","revenue":"$38,536"},{"key":"2","img":"2.png","name":"Half Sleeve Shirt","price":"$39","sold":"180","revenue":"$20,573"},{"key":"3","img":"3.png","name":"Marco Shoes","price":"$89","sold":"581","revenue":"$170,758"},{"key":"4","img":"5.png","name":"Marco Shoes","price":"$32","sold":"451","revenue":"$258,105"},{"key":"5","img":"4.png","name":"15\\" MackBook Pro","price":"$950","sold":"745","revenue":"$745,154"}],"week":[{"key":"1","img":"1.png","name":"Samsung Note 10 256GB","price":"$450","sold":"300","revenue":"$43060"},{"key":"2","img":"2.png","name":"Full Sleeve Shirt","price":"$49","sold":"300","revenue":"$3178"},{"key":"3","img":"3.png","name":"Nike Shoes","price":"$89","sold":"581","revenue":"$170,758"},{"key":"4","img":"5.png","name":"Bata Shoes","price":"$32","sold":"451","revenue":"$258,105"},{"key":"5","img":"4.png","name":"15\\" MackBook Pro","price":"$950","sold":"745","revenue":"$745,154"}],"month":[{"key":"1","img":"1.png","name":"Samsung Galaxy Premio 256GB","price":"$670","sold":"126","revenue":"$40,988"},{"key":"2","img":"2.png","name":"Half Sleeve Shirt","price":"$39","sold":"180","revenue":"$20,573"},{"key":"3","img":"3.png","name":"Marco Shoes","price":"$89","sold":"581","revenue":"$170,758"},{"key":"4","img":"5.png","name":"Marco Shoes","price":"$32","sold":"451","revenue":"$258,105"},{"key":"5","img":"4.png","name":"15\\" MackBook Pro","price":"$950","sold":"745","revenue":"$745,154"}]},"browserState":{"today":[{"key":"1","img":"chrome.png","name":"Google Chrome","session":"92,345","bounceRate":"5.5%","cte":"12025","goalRate":"90%"},{"key":"2","img":"firefox.png","name":"Google Chrome","session":"92,345","bounceRate":"1.5%","cte":"12025","goalRate":"90%"},{"key":"3","img":"internet-explorer.png","name":"Google Chrome","session":"92,345","bounceRate":"5.5%","cte":"12025","goalRate":"90%"},{"key":"4","img":"opera.png","name":"Google Chrome","session":"92,345","bounceRate":"0.5%","cte":"12025","goalRate":"90%"},{"key":"5","img":"safari.png","name":"Google Chrome","session":"92,345","bounceRate":"8.5%","cte":"12025","goalRate":"90%"}],"week":[{"key":"1","img":"chrome.png","name":"Google Chrome","session":"92,345","bounceRate":"4.5%","cte":"12025","goalRate":"90%"},{"key":"2","img":"firefox.png","name":"Google Chrome","session":"92,345","bounceRate":"8.5%","cte":"12025","goalRate":"90%"},{"key":"3","img":"internet-explorer.png","name":"Google Chrome","session":"92,345","bounceRate":"7.5%","cte":"12025","goalRate":"90%"},{"key":"4","img":"opera.png","name":"Google Chrome","session":"92,345","bounceRate":"0.5%","cte":"12025","goalRate":"90%"},{"key":"5","img":"safari.png","name":"Google Chrome","session":"92,345","bounceRate":"1.5%","cte":"12025","goalRate":"90%"}],"month":[{"key":"1","img":"chrome.png","name":"Google Chrome","session":"92,345","bounceRate":"4.5%","cte":"13025","goalRate":"90%"},{"key":"2","img":"firefox.png","name":"Google Chrome","session":"92,345","bounceRate":"7.5%","cte":"13025","goalRate":"90%"},{"key":"3","img":"internet-explorer.png","name":"Google Chrome","session":"92,345","bounceRate":"2.5%","cte":"14025","goalRate":"90%"},{"key":"4","img":"opera.png","name":"Google Chrome","session":"92,345","bounceRate":"4.5%","cte":"16025","goalRate":"90%"},{"key":"5","img":"safari.png","name":"Google Chrome","session":"92,345","bounceRate":"5.5%","cte":"11025","goalRate":"90%"}]},"revenueGenerated":{"today":[{"key":"1","icon":"google","name":"Google","visitors":"23,397","pageView":"17,201","revenue":"$5,536","trend":"90","type":"primary"},{"key":"2","icon":"facebook","name":"Facebook","visitors":"23,397","pageView":"14,201","revenue":"$5,536","trend":"57","type":"info"},{"key":"3","icon":"twitter","name":"Twitter","visitors":"23,397","pageView":"16,201","revenue":"$5,536","trend":"78","type":"success"},{"key":"4","icon":"linkedin","name":"Linkedin","visitors":"23,397","pageView":"13,201","revenue":"$5,536","trend":"96","type":"violet"},{"key":"5","icon":"instagram","name":"Instagram","visitors":"23,397","pageView":"16,201","revenue":"$5,536","trend":"21","type":"warning"}],"week":[{"key":"1","icon":"google","name":"Google","visitors":"26,397","pageView":"53,465","revenue":"$4,617","trend":"70","type":"primary"},{"key":"2","icon":"facebook","name":"Facebook","visitors":"22,454","pageView":"83,734","revenue":"$4,328","trend":"53","type":"info"},{"key":"3","icon":"twitter","name":"Twitter","visitors":"29,364","pageView":"74,345","revenue":"$6,438","trend":"86","type":"success"},{"key":"4","icon":"linkedin","name":"Linkedin","visitors":"24,565","pageView":"24,572","revenue":"$4,257","trend":"98","type":"violet"},{"key":"5","icon":"instagram","name":"Instagram","visitors":"16,637","pageView":"30,234","revenue":"$8,559","trend":"20","type":"warning"}],"month":[{"key":"1","icon":"google","name":"Google","visitors":"29,575","pageView":"11,317","revenue":"$8,472","trend":"60","type":"primary"},{"key":"2","icon":"facebook","name":"Facebook","visitors":"11,159","pageView":"10,470","revenue":"$6,538","trend":"54","type":"info"},{"key":"3","icon":"twitter","name":"Twitter","visitors":"21,341","pageView":"22,010","revenue":"$6,017","trend":"71","type":"success"},{"key":"4","icon":"linkedin","name":"Linkedin","visitors":"23,258","pageView":"11,184","revenue":"$6,368","trend":"92","type":"violet"},{"key":"5","icon":"instagram","name":"Instagram","visitors":"22,249","pageView":"10,151","revenue":"$5,536","trend":"20","type":"warning"}]},"trafficChannel":[{"icon":"facebook","name":"Facebook","user":"3,397","session":"123","bounce":"2,584","duration":"00:01:05"},{"icon":"twitter","name":"Twitter","user":"2,397","session":"433","bounce":"2,024","duration":"00:02:35"},{"icon":"instagram","name":"Instagram","user":"6,397","session":"234","bounce":"2,404","duration":"00:01:65"},{"icon":"youtube","name":"Youtube","user":"1,397","session":"678","bounce":"2,681","duration":"00:04:05"}],"newProduct":{"today":[{"key":"1","img":"6.png","name":"UV Protected Sunglass","price":"$38,536"},{"key":"2","img":"7.png","name":"Black Headphone","price":"$38,536"},{"key":"3","img":"8.png","name":"Nike Shoes","price":"$38,536"},{"key":"4","img":"9.png","name":"Women Bag","price":"$38,536"},{"key":"5","img":"4.png","name":"15`` Mackbook Pro","price":"$38,536"}],"week":[{"key":"1","img":"6.png","name":"New Model Sunglass","price":"$38,536"},{"key":"2","img":"7.png","name":"Smart Headphone","price":"$38,536"},{"key":"3","img":"8.png","name":"Nike Shoes","price":"$38,536"},{"key":"4","img":"9.png","name":"Men Bag","price":"$38,536"},{"key":"5","img":"4.png","name":"15`` Toshiba Pro","price":"$38,536"}],"month":[{"key":"1","img":"6.png","name":"Computer Light Sunglass","price":"$38,536"},{"key":"2","img":"7.png","name":"Large Headphone","price":"$38,536"},{"key":"3","img":"8.png","name":"Nike Shoes","price":"$38,536"},{"key":"4","img":"9.png","name":"High Quality Bag","price":"$38,536"},{"key":"5","img":"4.png","name":"15`` Lenovo Pro","price":"$38,536"}]},"bestSeller":{"today":[{"key":"1","img":"10.png","name":"Robert Clinton","company":"Samsung","product":"Smart Phone","revenue":"$38,536","status":"Done"},{"key":"2","img":"11.png","name":"Michael Johnson  ","company":"Asus","product":"Laptop","revenue":"$20,573","status":"On Process"},{"key":"3","img":"12.png","name":"Daniel White","company":"Google","product":"Watch","revenue":"$17,457","status":"Pending"},{"key":"4","img":"13.png","name":"Chris Barin ","company":"Apple","product":"Computer","revenue":"$15,354","status":"Done"},{"key":"5","img":"14.png","name":"Daniel Pink","company":"Panasonic","product":"Sunglass","revenue":"$12,354","status":"Done"}],"week":[{"key":"1","img":"10.png","name":"Richard Clinton","company":"Samsung","product":"Smart Phone","revenue":"$38,536","status":"Pending"},{"key":"2","img":"11.png","name":"Jhon Johnson  ","company":"Asus","product":"Laptop","revenue":"$20,573","status":"Done"},{"key":"3","img":"12.png","name":"Daniel White","company":"Google","product":"Watch","revenue":"$17,457","status":"Pending"},{"key":"4","img":"13.png","name":"David Barin ","company":"Apple","product":"Computer","revenue":"$15,354","status":"Pending"},{"key":"5","img":"14.png","name":"Daniel Pink","company":"Panasonic","product":"Sunglass","revenue":"$12,354","status":"Done"}],"month":[{"key":"1","img":"10.png","name":"Michel Clinton","company":"Samsung","product":"Smart Phone","revenue":"$38,536","status":"On Process"},{"key":"2","img":"11.png","name":"Christopher Johnson  ","company":"Asus","product":"Laptop","revenue":"$20,573","status":"Done"},{"key":"3","img":"12.png","name":"Joseph White","company":"Google","product":"Watch","revenue":"$17,457","status":"Pending"},{"key":"4","img":"13.png","name":"Richard Barin ","company":"Apple","product":"Computer","revenue":"$15,354","status":"Done"},{"key":"5","img":"14.png","name":"Daniel Pink","company":"Panasonic","product":"Sunglass","revenue":"$12,354","status":"Done"}]},"activeUserData":{"today":[{"key":"1","img":"10.png","name":"Robert Clinton","company":"Samsung","product":"Smart Phone","revenue":"$38,536","status":"Done"},{"key":"2","img":"11.png","name":"Michael Johnson  ","company":"Asus","product":"Laptop","revenue":"$20,573","status":"Done"},{"key":"3","img":"12.png","name":"Daniel White","company":"Google","product":"Watch","revenue":"$17,457","status":"Pending"},{"key":"4","img":"13.png","name":"Chris Barin ","company":"Apple","product":"Computer","revenue":"$15,354","status":"Done"},{"key":"5","img":"14.png","name":"Daniel Pink","company":"Panasonic","product":"Sunglass","revenue":"$12,354","status":"Done"}],"week":[{"key":"1","img":"10.png","name":"Theme Jhone","company":"Daraz","product":"Cool watch","revenue":"$28,336","status":"Done"},{"key":"2","img":"11.png","name":"Elon Mask","company":"Picaboo","product":"Tea Cup","revenue":"$22","status":"Pensing"},{"key":"3","img":"12.png","name":"Shamim Ahmed","company":"Yahoo","product":"Rocking Chair","revenue":"$1,007","status":"Pending"},{"key":"4","img":"13.png","name":"Tanjim Hasan","company":"Sovware","product":"DSLR Camera","revenue":"$1,354","status":"Done"},{"key":"5","img":"14.png","name":"Daniel Pink","company":"Panasonic","product":"Sunglass","revenue":"$12,354","status":"Done"}],"month":[{"key":"1","img":"10.png","name":"Robert Clinton","company":"Samsung","product":"Smart Phone","revenue":"$38,536","status":"Done"},{"key":"2","img":"11.png","name":"Michael Johnson  ","company":"Asus","product":"Laptop","revenue":"$20,573","status":"Done"},{"key":"3","img":"12.png","name":"Daniel White","company":"Google","product":"Watch","revenue":"$17,457","status":"Pending"},{"key":"4","img":"13.png","name":"Chris Barin ","company":"Apple","product":"Computer","revenue":"$15,354","status":"Done"},{"key":"5","img":"14.png","name":"Daniel Pink","company":"Panasonic","product":"Sunglass","revenue":"$12,354","status":"Done"}]},"topProduct":{"today":[{"key":"1","img":"1.png","name":"Samsung Galaxy S8 256GB","deals":"$280","amount":"126"},{"key":"2","img":"2.png","name":"Half Sleeve Shirt","deals":"$60","amount":"454"},{"key":"3","img":"3.png","name":"Marco Shoes","deals":"$80","amount":"7898"},{"key":"4","img":"5.png","name":"Apple Mobile Phone","deals":"$480","amount":"21"},{"key":"5","img":"4.png","name":"Microlab Headphone","deals":"$10","amount":"56446"},{"key":"6","img":"7.png","name":"Women Bag","deals":"$100","amount":"11046"}],"week":[{"key":"1","img":"1.png","name":"Samsung Galaxy S8 256GB","deals":"$280","amount":"126"},{"key":"2","img":"2.png","name":"Samsung Galaxy S8 256GB","deals":"$280","amount":"126"},{"key":"3","img":"3.png","name":"Samsung Galaxy S8 256GB","deals":"$280","amount":"126"},{"key":"4","img":"5.png","name":"Samsung Galaxy S8 256GB","deals":"$280","amount":"126"},{"key":"5","img":"4.png","name":"Samsung Galaxy S8 256GB","deals":"$280","amount":"126"},{"key":"6","img":"7.png","name":"Women Bag","deals":"$100","amount":"11046"}],"month":[{"key":"1","img":"1.png","name":"Samsung Galaxy S8 256GB","deals":"$280","amount":"126"},{"key":"2","img":"2.png","name":"Samsung Galaxy S8 256GB","deals":"$280","amount":"126"},{"key":"3","img":"3.png","name":"Samsung Galaxy S8 256GB","deals":"$280","amount":"126"},{"key":"4","img":"5.png","name":"Samsung Galaxy S8 256GB","deals":"$280","amount":"126"},{"key":"5","img":"4.png","name":"Samsung Galaxy S8 256GB","deals":"$280","amount":"126"},{"key":"6","img":"7.png","name":"Women Bag","deals":"$100","amount":"11046"}]},"recentDeal":{"today":[{"key":"1","img":"1.png","name":"Samsung Galaxy S8 256GB","price":"$280"},{"key":"2","img":"2.png","name":"Half Sleeve Shirt","price":"$280"},{"key":"3","img":"3.png","name":"Marco Shoes","price":"$280"},{"key":"4","img":"5.png","name":"Apple Mobile Phone","price":"$280"},{"key":"5","img":"4.png","name":"Microlab Headphone","price":"$280"},{"key":"6","img":"7.png","name":"Women Bag","price":"$280"}],"week":[{"key":"1","img":"1.png","name":"Samsung Galaxy S8 256GB","price":"$280"},{"key":"2","img":"2.png","name":"Samsung Galaxy S8 256GB","price":"$280"},{"key":"3","img":"3.png","name":"Samsung Galaxy S8 256GB","price":"$280"},{"key":"4","img":"5.png","name":"Samsung Galaxy S8 256GB","price":"$280"},{"key":"5","img":"4.png","name":"Samsung Galaxy S8 256GB","price":"$280"},{"key":"6","img":"7.png","name":"Women Bag","price":"$280"}],"month":[{"key":"1","img":"1.png","name":"Samsung Galaxy S8 256GB","price":"$280"},{"key":"2","img":"2.png","name":"Samsung Galaxy S8 256GB","price":"$280"},{"key":"3","img":"3.png","name":"Samsung Galaxy S8 256GB","price":"$280"},{"key":"4","img":"5.png","name":"Samsung Galaxy S8 256GB","price":"$280"},{"key":"5","img":"4.png","name":"Samsung Galaxy S8 256GB","price":"$280"},{"key":"6","img":"7.png","name":"Women Bag","price":"$280"}]},"memberProgressData":{"today":[{"id":1,"title":"Robert Clinton","workOn":"ReactJs, HTML","userImg":"10.png","salary":"108,536","status":"75","progress":"primary"},{"id":2,"title":"Michael Johnson","workOn":"Laravel, Angular","userImg":"11.png","salary":"1038,536","status":"65","progress":"info"},{"id":3,"title":"Daniel White","workOn":"Python,MySQL","userImg":"12.png","salary":"11,536","status":"95","progress":"success"},{"id":4,"title":"Chris Barin","workOn":"Wordpress","userImg":"13.png","salary":"11,536","status":"65","progress":"secondary"},{"id":5,"title":"Daniel Pink","workOn":"Photoshop","userImg":"14.png","salary":"11,236","status":"50","progress":"warning"},{"id":6,"title":"Shane Pollard","workOn":"Illustrator","userImg":"10.png","salary":"10536","status":"55","progress":"warning"}],"week":[{"id":1,"title":"Robert Clinton","workOn":"ReactJs, HTML","userImg":"10.png","salary":"108,536","status":"75","progress":"primary"},{"id":2,"title":"Michael Johnson","workOn":"Laravel, Angular","userImg":"11.png","salary":"1038,536","status":"65","progress":"info"},{"id":3,"title":"Daniel White","workOn":"Python,MySQL","userImg":"12.png","salary":"11,536","status":"95","progress":"success"},{"id":4,"title":"Chris Barin","workOn":"Wordpress","userImg":"13.png","salary":"11,536","status":"65","progress":"secondary"},{"id":5,"title":"Daniel Pink","workOn":"Photoshop","userImg":"14.png","salary":"11,236","status":"50","progress":"warning"},{"id":6,"title":"Shane Pollard","workOn":"Illustrator","userImg":"10.png","salary":"10536","status":"55","progress":"warning"}],"month":[{"id":1,"title":"Robert Clinton","workOn":"ReactJs, HTML","userImg":"10.png","salary":"108,536","status":"75","progress":"primary"},{"id":2,"title":"Michael Johnson","workOn":"Laravel, Angular","userImg":"11.png","salary":"1038,536","status":"65","progress":"info"},{"id":3,"title":"Daniel White","workOn":"Python,MySQL","userImg":"12.png","salary":"11,536","status":"95","progress":"success"},{"id":4,"title":"Chris Barin","workOn":"Wordpress","userImg":"13.png","salary":"11,536","status":"65","progress":"secondary"},{"id":5,"title":"Daniel Pink","workOn":"Photoshop","userImg":"14.png","salary":"11,236","status":"50","progress":"warning"},{"id":6,"title":"Shane Pollard","workOn":"Illustrator","userImg":"10.png","salary":"10536","status":"55","progress":"warning"}]},"resentSeller":{"all":[{"id":"1","title":"Robert Clinton","company":"Samsung","device":"Smart Phone","userImg":"10.png","price":"38,536","status":"done"},{"id":"2","title":"Michael Johnson","company":"Samsung","device":"Smart Phone","userImg":"11.png","price":"38,536","status":"done"},{"id":"3","title":"Daniel White","company":"Samsung","device":"Smart Phone","userImg":"12.png","price":"38,536","status":"pending"},{"id":"4","title":"Chris Barin","company":"Samsung","device":"Smart Phone","userImg":"13.png","price":"38,536","status":"done"}],"pending":[{"id":"1","title":"Robert Clinton","company":"Samsung","device":"Smart Phone","userImg":"10.png","price":"38,536","status":"done"},{"id":"2","title":"Michael Johnson","company":"Samsung","device":"Smart Phone","userImg":"11.png","price":"38,536","status":"done"},{"id":"3","title":"Daniel White","company":"Samsung","device":"Smart Phone","userImg":"12.png","price":"38,536","status":"pending"},{"id":"4","title":"Chris Barin","company":"Samsung","device":"Smart Phone","userImg":"13.png","price":"38,536","status":"done"}],"done":[{"id":"1","title":"Robert Clinton","company":"Samsung","device":"Smart Phone","userImg":"10.png","price":"38,536","status":"done"},{"id":"2","title":"Michael Johnson","company":"Samsung","device":"Smart Phone","userImg":"11.png","price":"38,536","status":"done"},{"id":"3","title":"Daniel White","company":"Samsung","device":"Smart Phone","userImg":"12.png","price":"38,536","status":"pending"},{"id":"4","title":"Chris Barin","company":"Samsung","device":"Smart Phone","userImg":"13.png","price":"38,536","status":"done"}]}}')}}]);