import{R as e}from"./index-Dnp4WS5M.js";import"./index-DjXIRphR.js";const o={},c=e.createContext(o);function u(n){const t=e.useContext(c);return e.useMemo(function(){return typeof n=="function"?n(t):{...t,...n}},[t,n])}function r(n){let t;return n.disableParentContext?t=typeof n.components=="function"?n.components(o):n.components||o:t=u(n.components),e.createElement(c.Provider,{value:t},n.children)}export{r as MDXProvider,u as useMDXComponents};
