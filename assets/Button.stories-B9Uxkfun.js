import{j as w}from"./jsx-runtime-DjgmBYnU.js";import{g as N}from"./index-DjXIRphR.js";var l={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var p;function j(){return p||(p=1,function(n){(function(){var d={}.hasOwnProperty;function t(){for(var e="",r=0;r<arguments.length;r++){var a=arguments[r];a&&(e=o(e,s(a)))}return e}function s(e){if(typeof e=="string"||typeof e=="number")return e;if(typeof e!="object")return"";if(Array.isArray(e))return t.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var r="";for(var a in e)d.call(e,a)&&e[a]&&(r=o(r,a));return r}function o(e,r){return r?e?e+" "+r:e+r:e}n.exports?(t.default=t,n.exports=t):window.classNames=t})()}(l)),l.exports}var q=j();const R=N(q),B=({children:n,onClick:d,disabled:t=!1,variant:s="primary"})=>{const o=R("px-4 py-2 rounded font-semibold",{"bg-blue-500 text-white hover:bg-blue-600":s==="primary","bg-gray-500 text-white hover:bg-gray-600":s==="secondary","opacity-50 cursor-not-allowed":t});return w.jsx("button",{className:o,onClick:d,disabled:t,children:n})};B.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}}}};const P={title:"Example/Button",component:B,tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary"]},disabled:{control:{type:"boolean"}}}},i={args:{children:"Primary Button",variant:"primary"}},c={args:{children:"Secondary Button",variant:"secondary"}},u={args:{children:"Disabled Button",disabled:!0}};var m,y,f;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: "Primary Button",
    variant: "primary"
  }
}`,...(f=(y=i.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var b,g,v;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: "Secondary Button",
    variant: "secondary"
  }
}`,...(v=(g=c.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var h,x,S;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: "Disabled Button",
    disabled: true
  }
}`,...(S=(x=u.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};const T=["Primary","Secondary","Disabled"];export{u as Disabled,i as Primary,c as Secondary,T as __namedExportsOrder,P as default};
