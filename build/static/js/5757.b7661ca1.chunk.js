"use strict";(self.webpackChunkHexaDash=self.webpackChunkHexaDash||[]).push([[5757],{3284:function(n,e,t){t.r(e),t.d(e,{BtnGroup:function(){return u},Button:function(){return d}});var o=t(1413),a=t(29439),c=t(45987),i=t(47313),r=t(71128),s=t(46417),l=["type","shape","icon","size","outlined","ghost","transparented","raised","squared","color","social","load","children"];function d(n){var e=n.type,t=n.shape,d=n.icon,u=n.size,h=n.outlined,f=n.ghost,p=n.transparented,x=n.raised,m=n.squared,g=n.color,y=n.social,b=n.load,j=n.children,v=(0,c.Z)(n,l),N=(0,i.useState)({loading:!1}),C=(0,a.Z)(N,2),w=C[0],k=C[1];return(0,s.jsx)(r.ButtonStyled,(0,o.Z)((0,o.Z)({squared:m,outlined:h?1:0,ghost:f,transparent:p?1:0,raised:x?1:0,data:e,size:u,shape:t,type:e,icon:d,color:g,social:y,onClick:b&&function(){k({loading:!0})},loading:w.loading},v),{},{children:j}))}function u(n){var e=n.children;return(0,s.jsx)(r.ButtonStyledGroup,{children:e})}d.defaultProps={type:"default"}},71128:function(n,e,t){t.r(e),t.d(e,{ButtonStyled:function(){return l},ButtonStyledGroup:function(){return d}});var o,a,c=t(30168),i=t(59491),r=t(70244),s=i.Z.Group,l=(0,r.ZP)(i.Z)(o||(o=(0,c.Z)(["\n    font-size: 14px;\n    background: ",";\n    border-width: 0px;\n    border-style: ",";\n    color: ",";\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: ",";\n    padding: 0px 20.5px;\n    height: ",";\n    font-weight: 600;\n    box-shadow: 0 0;\n    &:hover, &:focus {\n        color: ",";\n        background: ","};\n    }\n    i,\n    svg,\n    img{\n    width: 14px;\n    height: 14px;\n    +span{\n        ",": 6px;\n    }\n}\n\n",";\n",";\n",";\n",";\n",";\n",";\n",";\n"])),(function(n){var e=n.type,t=n.theme;return"default"!==e&&t["".concat(e,"-color")]}),(function(n){return"dashed"!==n.type?"solid":"dashed"}),(function(n){var e=n.theme;return"default"!==n.type?"#ffffff":e[e.mainContent]["gray-text"]}),(function(n){return n.shape?"40px":"4px"}),(function(n){var e=n.size,t=n.theme;return"default"!==e?t["btn-height-".concat(e)]:"44px"}),(function(n){var e=n.type,t=n.theme;return"default"!==e?t["white-color"]:t["light-color"]}),(function(n){var e=n.type,t=n.theme;return"default"!==e&&t["".concat(e,"-hover")]}),(function(n){return n.theme.rtl?"margin-right":"margin-left"}),(function(n){var e=n.transparent,t=n.theme,o=n.type;return e&&function(n,e){return"\n        background: ".concat(n["".concat(e,"-color")],"15;\n        border-width: 0px;\n        color: ").concat(n["".concat(e,"-color")],";\n        &:hover, &:focus {\n            background: ").concat("default"!==e&&n["".concat(e,"-hover")],"15;\n            border-width: 0px;\n            color: ").concat("default"!==e&&n["".concat(e,"-hover")],"; \n        }\n    ")}(t,o)}),(function(n){var e=n.outlined,t=n.theme,o=n.type;return e&&function(n,e){return"\n        background: transparent;\n        border: 1px solid ".concat("light"!==e?n["".concat(e,"-color")]:n[n.mainContent]["border-color-secondary"],";\n        color: ").concat("light"!==e?n["".concat(e,"-color")]:n["gray-color"],";\n        &:hover, &:focus {\n          background: transparent;\n          border: 1px solid ").concat("light"!==e?n["".concat(e,"-hover")]:n["primary-color"],";\n          color: ").concat("light"!==e?n["".concat(e,"-color")]:n["primary-color"],";\n          svg{\n            transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n            color: ").concat("light"!==e?n["".concat(e,"-color")]:n["primary-color"],";\n          }\n        }\n    ")}(t,o)}),(function(n){var e=n.ghost,t=n.theme;return e&&function(n){return"\n          background: transparent;\n          border: 1px solid ".concat(n["border-color-normal"]," !important;\n          color: ").concat(n["border-color-normal"]," !important;\n          &:hover, &:focus {\n            background: ").concat(n["border-color-normal"],"50 !important;\n            border: 1px solid transparent !important;\n            color: ").concat(n["border-color-normal"]," !important;\n        }\n    ")}(t)}),(function(n){var e=n.raised,t=n.theme,o=n.type;return e&&function(n,e){return"\n        box-shadow: 0 8px 13px ".concat("white"!==e?n["".concat(e,"-color")]:n["light-color"],"20;\n    ")}(t,o)}),(function(n){var e=n.squared,t=n.theme,o=n.type;return e&&function(n,e){return"\n    background: ".concat("default"!==e&&n["".concat(e,"-color")],";\n    border: 1px solid ").concat("default"!==e?n["".concat(e,"-color")]:n["disabled-color"],";\n    color: ").concat("default"!==e&&"#ffffff",";\n    border-radius: 0px;\n    padding: 0px 15px;\n\n    &:hover, &:focus {\n        background: ").concat("default"!==e&&n["".concat(e,"-hover")],";\n        border: 1px solid ").concat("default"!==e&&n["".concat(e,"-hover")],";\n        color: ").concat("default"!==e&&"#ffffff",";\n    }\n")}(t,o)}),(function(n){var e=n.squared,t=n.outlined,o=n.theme,a=n.type;return e&&t&&function(n,e){return"\n    background: transparent;\n    border: 1px solid ".concat("default"!==e?n["".concat(e,"-color")]:n["disabled-color"],";\n    color: ").concat("default"!==e&&n["".concat(e,"-color")],";\n    border-radius: 0px;\n    padding: 0px 15px;\n    &:hover, &:focus {\n        background: ").concat("default"!==e&&n["".concat(e,"-hover")],";\n        border: 1px solid ").concat("default"!==e&&n["".concat(e,"-hover")],";\n        color: ").concat((function(n){var e=n.theme;return"default"!==n.type&&e["white-color"]}),";\n    }\n")}(o,a)}),(function(n){var e=n.social,t=n.color,o=n.shape;return e&&function(n,e){return"\n    background: ".concat(n,";\n    background: ").concat(n,";\n    border: 1px solid ").concat(n,";\n    color: ").concat((function(n){return n.theme["white-color"]}),";\n    border-radius: ").concat(e?"40px":"4px",";\n    padding: 0px 12px;\n    display: inline-flex;\n    align-items: center;\n    span {\n        padding-left: 5px;\n    }\n    &:hover, &:focus {\n        background: ").concat(n,"90;\n        border: 1px solid ").concat(n,"90;\n        color: ").concat((function(n){return n.theme["white-color"]}),";\n    }\n")}(t,o)})),d=(0,r.ZP)(s)(a||(a=(0,c.Z)(["\n    >.ant-btn:first-child{\n    border-top-left-radius: 3px!important;\n    border-bottom-left-radius: 3px!important;\n}\nbutton {\n    margin: 0px;\n    padding: 0 10.75px;\n    height: 30px;\n    font - size: 12px;\n    font - weight: 500;\n}\n.ant-btn-light:hover{\n    background: ",";\n}\n"])),(function(n){var e=n.theme;return e[e.mainContent].bgNormal}))},75757:function(n,e,t){t.r(e);t(47313);var o=t(68197),a=t(59624),c=t(86345),i=t(2135),r=t(15158),s=t(54987),l=t(3284),d=t(33464),u=t(46417),h={display:"flex",justifyContent:"space-between",alignItems:"center",margin:0,padding:0};e.default=function(){return(0,u.jsx)(r.NotificationWrapper,{children:(0,u.jsxs)(s.Cards,{title:(0,u.jsxs)("div",{className:"setting-card-title",children:[(0,u.jsx)(d.default,{as:"h4",children:"Notifications"}),(0,u.jsx)("span",{children:"Choose What Notification you will Receive"})]}),children:[(0,u.jsxs)(o.Z,{gutter:15,children:[(0,u.jsx)(a.Z,{xs:24,children:(0,u.jsx)("div",{className:"notification-box-single",children:(0,u.jsxs)(s.Cards,{headless:!0,bodyStyle:{borderRadius:10},children:[(0,u.jsxs)("div",{style:{height:"50px",display:"flex",justifyContent:"space-between",alignItems:"center"},className:"notification-header",children:[(0,u.jsx)(d.default,{className:"notification-header__text",as:"h4",children:"Notifications"}),(0,u.jsx)(i.rU,{className:"btn-toggle",to:"#",children:"Toggle all"})]}),(0,u.jsx)("div",{className:"notification-body",children:(0,u.jsx)(s.Cards,{headless:!0,children:(0,u.jsx)("nav",{children:(0,u.jsxs)("ul",{style:{margin:0,padding:0},children:[(0,u.jsxs)("li",{style:h,children:[(0,u.jsxs)("div",{className:"notification-list-single",children:[(0,u.jsx)(d.default,{className:"notification-list-single__title",as:"h4",children:"Company News"}),(0,u.jsx)("p",{children:"Get Company News, announcements, and product updates"})]}),(0,u.jsx)(c.Z,{defaultChecked:!1})]}),(0,u.jsxs)("li",{style:h,children:[(0,u.jsxs)("div",{className:"notification-list-single",children:[(0,u.jsx)(d.default,{className:"notification-list-single__title",as:"h4",children:"Meetups Near you"}),(0,u.jsx)("p",{children:"Get Company News, announcements, and product updates"})]}),(0,u.jsx)(c.Z,{defaultChecked:!0})]}),(0,u.jsxs)("li",{style:h,children:[(0,u.jsxs)("div",{className:"notification-list-single",children:[(0,u.jsx)(d.default,{className:"notification-list-single__title",as:"h4",children:"Opportunities"}),(0,u.jsx)("p",{children:"Get Company News, announcements, and product updates"})]}),(0,u.jsx)(c.Z,{defaultChecked:!1})]}),(0,u.jsxs)("li",{style:h,children:[(0,u.jsxs)("div",{className:"notification-list-single",children:[(0,u.jsx)(d.default,{className:"notification-list-single__title",as:"h4",children:"Weekly News Letters"}),(0,u.jsx)("p",{children:"Get Company News, announcements, and product updates"})]}),(0,u.jsx)(c.Z,{defaultChecked:!0})]})]})})})})]})})}),(0,u.jsx)(a.Z,{xs:24,children:(0,u.jsx)("div",{className:"notification-box-single",children:(0,u.jsxs)(s.Cards,{headless:!0,bodyStyle:{borderRadius:10},children:[(0,u.jsxs)("div",{style:{height:"50px",display:"flex",justifyContent:"space-between",alignItems:"center"},className:"notification-header",children:[(0,u.jsx)(d.default,{className:"notification-header__text",as:"h4",children:"Account Activity"}),(0,u.jsx)(i.rU,{className:"btn-toggle",to:"#",children:"Toggle all"})]}),(0,u.jsx)("div",{className:"notification-body",children:(0,u.jsx)(s.Cards,{headless:!0,children:(0,u.jsx)("nav",{children:(0,u.jsxs)("ul",{style:{margin:0,padding:0},children:[(0,u.jsxs)("li",{style:h,children:[(0,u.jsxs)("div",{className:"notification-list-single",children:[(0,u.jsx)(d.default,{className:"notification-list-single__title",as:"h4",children:"Company News"}),(0,u.jsx)("p",{children:"Get Company News, announcements, and product updates"})]}),(0,u.jsx)(c.Z,{defaultChecked:!1})]}),(0,u.jsxs)("li",{style:h,children:[(0,u.jsxs)("div",{className:"notification-list-single",children:[(0,u.jsx)(d.default,{className:"notification-list-single__title",as:"h4",children:"Meetups Near you"}),(0,u.jsx)("p",{children:"Get Company News, announcements, and product updates"})]}),(0,u.jsx)(c.Z,{defaultChecked:!0})]}),(0,u.jsxs)("li",{style:h,children:[(0,u.jsxs)("div",{className:"notification-list-single",children:[(0,u.jsx)(d.default,{className:"notification-list-single__title",as:"h4",children:"Opportunities"}),(0,u.jsx)("p",{children:"Get Company News, announcements, and product updates"})]}),(0,u.jsx)(c.Z,{defaultChecked:!1})]}),(0,u.jsxs)("li",{style:h,children:[(0,u.jsxs)("div",{className:"notification-list-single",children:[(0,u.jsx)(d.default,{className:"notification-list-single__title",as:"h4",children:"Weekly News Letters"}),(0,u.jsx)("p",{children:"Get Company News, announcements, and product updates"})]}),(0,u.jsx)(c.Z,{defaultChecked:!0})]})]})})})})]})})})]}),(0,u.jsxs)("div",{className:"notification-actions",children:[(0,u.jsx)(l.Button,{size:"default",type:"primary",children:"Update Email Notifications"}),"\xa0 \xa0",(0,u.jsx)(l.Button,{size:"default",type:"extra-light",children:"Cancel"})]})]})})}},86345:function(n,e,t){t.d(e,{Z:function(){return v}});var o=t(87462),a=t(4942),c=t(82508),i=t(46123),r=t.n(i),s=t(29439),l=t(45987),d=t(47313),u=t(10288),h=t(49242),f=d.forwardRef((function(n,e){var t,o=n.prefixCls,c=void 0===o?"rc-switch":o,i=n.className,f=n.checked,p=n.defaultChecked,x=n.disabled,m=n.loadingIcon,g=n.checkedChildren,y=n.unCheckedChildren,b=n.onClick,j=n.onChange,v=n.onKeyDown,N=(0,l.Z)(n,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),C=(0,u.Z)(!1,{value:f,defaultValue:p}),w=(0,s.Z)(C,2),k=w[0],Z=w[1];function _(n,e){var t=k;return x||(Z(t=n),null===j||void 0===j||j(t,e)),t}var G=r()(c,i,(t={},(0,a.Z)(t,"".concat(c,"-checked"),k),(0,a.Z)(t,"".concat(c,"-disabled"),x),t));return d.createElement("button",Object.assign({},N,{type:"button",role:"switch","aria-checked":k,disabled:x,className:G,ref:e,onKeyDown:function(n){n.which===h.Z.LEFT?_(!1,n):n.which===h.Z.RIGHT&&_(!0,n),null===v||void 0===v||v(n)},onClick:function(n){var e=_(!k,n);null===b||void 0===b||b(e,n)}}),m,d.createElement("span",{className:"".concat(c,"-inner")},k?g:y))}));f.displayName="Switch";var p=f,x=t(74714),m=t(98438),g=t(21631),y=t(46479),b=function(n,e){var t={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&e.indexOf(o)<0&&(t[o]=n[o]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(n);a<o.length;a++)e.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(n,o[a])&&(t[o[a]]=n[o[a]])}return t},j=d.forwardRef((function(n,e){var t,i=n.prefixCls,s=n.size,l=n.disabled,u=n.loading,h=n.className,f=void 0===h?"":h,j=b(n,["prefixCls","size","disabled","loading","className"]),v=d.useContext(x.E_),N=v.getPrefixCls,C=v.direction,w=d.useContext(g.Z),k=d.useContext(m.Z),Z=(null!==l&&void 0!==l?l:k)||u,_=N("switch",i),G=d.createElement("div",{className:"".concat(_,"-handle")},u&&d.createElement(c.Z,{className:"".concat(_,"-loading-icon")})),O=r()((t={},(0,a.Z)(t,"".concat(_,"-small"),"small"===(s||w)),(0,a.Z)(t,"".concat(_,"-loading"),u),(0,a.Z)(t,"".concat(_,"-rtl"),"rtl"===C),t),f);return d.createElement(y.Z,{insertExtraNode:!0},d.createElement(p,(0,o.Z)({},j,{prefixCls:_,className:O,disabled:Z,ref:e,loadingIcon:G})))}));j.__ANT_SWITCH=!0;var v=j}}]);