import{j}from"./jsx-runtime-DjgmBYnU.js";import{g as w}from"./index-DjXIRphR.js";var d={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var p;function D(){return p||(p=1,function(s){(function(){var l={}.hasOwnProperty;function t(){for(var r="",e=0;e<arguments.length;e++){var a=arguments[e];a&&(r=o(r,n(a)))}return r}function n(r){if(typeof r=="string"||typeof r=="number")return r;if(typeof r!="object")return"";if(Array.isArray(r))return t.apply(null,r);if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]"))return r.toString();var e="";for(var a in r)l.call(r,a)&&r[a]&&(e=o(e,a));return e}function o(r,e){return e?r?r+" "+e:r+e:r}s.exports?(t.default=t,s.exports=t):window.classNames=t})()}(d)),d.exports}var E=D();const N=w(E),B=({children:s,onClick:l,disabled:t=!1,variant:n="primary"})=>{const o=N("px-4 py-2 rounded font-semibold",{"bg-blue-500 text-white hover:bg-blue-600":n==="primary","bg-gray-500 text-white hover:bg-gray-600":n==="secondary","opacity-50 cursor-not-allowed":t});return j.jsx("button",{className:o,style:{fontSize:"2em"},onClick:l,disabled:t,children:s})};B.__docgenInfo={description:"",methods:[],displayName:"Button",props:{disabled:{defaultValue:{value:"false",computed:!1},required:!1},variant:{defaultValue:{value:'"primary"',computed:!1},required:!1}}};const O={title:"Example/Button",component:B,tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary"]},disabled:{control:{type:"boolean"}}}},i={args:{children:"Primary Button",variant:"primary"}},c={args:{children:"Secondary Button",variant:"secondary"}},u={args:{children:"Disabled Button",disabled:!0}};var m,f,y;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: "Primary Button",
    variant: "primary"
  }
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var b,g,v;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: "Secondary Button",
    variant: "secondary"
  }
}`,...(v=(g=c.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var x,h,S;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: "Disabled Button",
    disabled: true
  }
}`,...(S=(h=u.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};const _=["Primary","Secondary","Disabled"];export{u as Disabled,i as Primary,c as Secondary,_ as __namedExportsOrder,O as default};
