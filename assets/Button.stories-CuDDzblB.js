import{j as x}from"./jsx-runtime-DjgmBYnU.js";import{g as h}from"./index-DjXIRphR.js";var l={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var p;function w(){return p||(p=1,function(s){(function(){var c={}.hasOwnProperty;function t(){for(var e="",r=0;r<arguments.length;r++){var a=arguments[r];a&&(e=o(e,n(a)))}return e}function n(e){if(typeof e=="string"||typeof e=="number")return e;if(typeof e!="object")return"";if(Array.isArray(e))return t.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var r="";for(var a in e)c.call(e,a)&&e[a]&&(r=o(r,a));return r}function o(e,r){return r?e?e+" "+r:e+r:e}s.exports?(t.default=t,s.exports=t):window.classNames=t})()}(l)),l.exports}var B=w();const N=h(B),g=({children:s,onClick:c,disabled:t=!1,variant:n="primary"})=>{const o=N("px-4 py-2 rounded font-semibold",{"bg-blue-500 text-white hover:bg-blue-600":n==="primary","bg-gray-500 text-white hover:bg-gray-600":n==="secondary","opacity-50 cursor-not-allowed":t});return x.jsx("button",{className:o,onClick:c,disabled:t,children:s})};g.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}}}};const q={title:"Example/Button",component:g,tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary"]},disabled:{control:{type:"boolean"}}}},i={args:{children:"Primary Button",variant:"primary"}},u={args:{children:"Disabled Button",disabled:!0}};var d,m,f;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: "Primary Button",
    variant: "primary"
  }
}`,...(f=(m=i.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var y,b,v;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: "Disabled Button",
    disabled: true
  }
}`,...(v=(b=u.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const R=["Primary","Disabled"];export{u as Disabled,i as Primary,R as __namedExportsOrder,q as default};
