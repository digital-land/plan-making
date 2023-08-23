import"../sb-preview/runtime.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const E="modulepreload",d=function(_,i){return new URL(_,i).href},O={},r=function(i,s,c){if(!s||s.length===0)return i();const t=document.getElementsByTagName("link");return Promise.all(s.map(e=>{if(e=d(e,c),e in O)return;O[e]=!0;const o=e.endsWith(".css"),m=o?'[rel="stylesheet"]':"";if(!!c)for(let a=t.length-1;a>=0;a--){const l=t[a];if(l.href===e&&(!o||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${m}`))return;const n=document.createElement("link");if(n.rel=o?"stylesheet":E,o||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),o)return new Promise((a,l)=>{n.addEventListener("load",a),n.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>i()).catch(e=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=e,window.dispatchEvent(o),!o.defaultPrevented)throw e})},{createBrowserChannel:p}=__STORYBOOK_MODULE_CHANNELS__,{addons:R}=__STORYBOOK_MODULE_PREVIEW_API__,u=p({page:"preview"});R.setChannel(u);window.__STORYBOOK_ADDONS_CHANNEL__=u;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=u);const f={"./src/stories/TimetablePage.stories.tsx":async()=>r(()=>import("./TimetablePage.stories-1760b557.js"),["./TimetablePage.stories-1760b557.js","./hooks.module-10a4f742.js","./preact.module-4f38c496.js","./_commonjsHelpers-725317a4.js","./utils-3cc51d2a.js","./compat.module-b1a3416f.js","./jsxRuntime.module-8e7d8b33.js","./TimetablePage.stories-809bcbdb.css"],import.meta.url),"./src/stories/SiteSelection.stories.tsx":async()=>r(()=>import("./SiteSelection.stories-949d9eda.js"),["./SiteSelection.stories-949d9eda.js","./hooks.module-10a4f742.js","./preact.module-4f38c496.js","./utils-3cc51d2a.js","./jsxRuntime.module-8e7d8b33.js","./SiteSelection.stories-96b4ce34.css"],import.meta.url),"./src/stories/MapLayer.stories.tsx":async()=>r(()=>import("./MapLayer.stories-9b67b1a1.js"),["./MapLayer.stories-9b67b1a1.js","./mapContainer-cb3be453.js","./hooks.module-10a4f742.js","./preact.module-4f38c496.js","./jsxRuntime.module-8e7d8b33.js","./compat.module-b1a3416f.js","./mapContainer-102dace4.css","./drawingLayer-ee4f469e.js"],import.meta.url),"./src/stories/Map.stories.tsx":async()=>r(()=>import("./Map.stories-f079b504.js"),["./Map.stories-f079b504.js","./mapContainer-cb3be453.js","./hooks.module-10a4f742.js","./preact.module-4f38c496.js","./jsxRuntime.module-8e7d8b33.js","./compat.module-b1a3416f.js","./mapContainer-102dace4.css"],import.meta.url),"./src/stories/DrawingLayer.stories.tsx":async()=>r(()=>import("./DrawingLayer.stories-385f0ed9.js"),["./DrawingLayer.stories-385f0ed9.js","./drawingLayer-ee4f469e.js","./mapContainer-cb3be453.js","./hooks.module-10a4f742.js","./preact.module-4f38c496.js","./jsxRuntime.module-8e7d8b33.js","./compat.module-b1a3416f.js","./mapContainer-102dace4.css"],import.meta.url)};async function P(_){return f[_]()}const{composeConfigs:w,PreviewWeb:T,ClientApi:L}=__STORYBOOK_MODULE_PREVIEW_API__,S=async()=>{const _=await Promise.all([r(()=>import("./config-d209f86b.js"),["./config-d209f86b.js","./preact.module-4f38c496.js","./index-356e4a49.js"],import.meta.url),r(()=>import("./preview-5ef354f3.js"),["./preview-5ef354f3.js","./index-d475d2ea.js","./index-d37d4223.js"],import.meta.url),r(()=>import("./preview-4d17742e.js"),[],import.meta.url),r(()=>import("./preview-a60aa466.js"),[],import.meta.url),r(()=>import("./preview-770cc08b.js"),["./preview-770cc08b.js","./index-d475d2ea.js","./index-356e4a49.js"],import.meta.url),r(()=>import("./preview-25cb0eda.js"),["./preview-25cb0eda.js","./index-d475d2ea.js"],import.meta.url),r(()=>import("./preview-d8c963a4.js"),["./preview-d8c963a4.js","./index-d475d2ea.js","./index-356e4a49.js"],import.meta.url),r(()=>import("./preview-b79ea209.js"),["./preview-b79ea209.js","./index-d475d2ea.js"],import.meta.url),r(()=>import("./preview-187be37d.js"),["./preview-187be37d.js","./index-d475d2ea.js","./_commonjsHelpers-725317a4.js"],import.meta.url),r(()=>import("./preview-f51f761e.js"),["./preview-f51f761e.js","./preview-35d3c080.css"],import.meta.url)]);return w(_)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new T;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new L({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:P,getProjectAnnotations:S});export{r as _};
//# sourceMappingURL=iframe-622b2d92.js.map
