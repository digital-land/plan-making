import"../sb-preview/runtime.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function n(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=n(t);fetch(t.href,e)}})();const E="modulepreload",d=function(_,i){return new URL(_,i).href},m={},r=function(i,n,c){if(!n||n.length===0)return i();const t=document.getElementsByTagName("link");return Promise.all(n.map(e=>{if(e=d(e,c),e in m)return;m[e]=!0;const o=e.endsWith(".css"),O=o?'[rel="stylesheet"]':"";if(!!c)for(let a=t.length-1;a>=0;a--){const l=t[a];if(l.href===e&&(!o||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${O}`))return;const s=document.createElement("link");if(s.rel=o?"stylesheet":E,o||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),o)return new Promise((a,l)=>{s.addEventListener("load",a),s.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>i()).catch(e=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=e,window.dispatchEvent(o),!o.defaultPrevented)throw e})},{createBrowserChannel:p}=__STORYBOOK_MODULE_CHANNELS__,{addons:R}=__STORYBOOK_MODULE_PREVIEW_API__,u=p({page:"preview"});R.setChannel(u);window.__STORYBOOK_ADDONS_CHANNEL__=u;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=u);const f={"./src/stories/TimetablePage.stories.tsx":async()=>r(()=>import("./TimetablePage.stories-7d65585c.js"),["./TimetablePage.stories-7d65585c.js","./compat.module-ddc61323.js","./preact.module-4f38c496.js","./_commonjsHelpers-de833af9.js","./AccordionDropdown-ed182870.js","./jsxRuntime.module-8e7d8b33.js","./TimetablePage.stories-809bcbdb.css"],import.meta.url),"./src/stories/SiteSelection.stories.tsx":async()=>r(()=>import("./SiteSelection.stories-8b81163a.js"),["./SiteSelection.stories-8b81163a.js","./compat.module-ddc61323.js","./preact.module-4f38c496.js","./_commonjsHelpers-de833af9.js","./AccordionDropdown-ed182870.js","./jsxRuntime.module-8e7d8b33.js","./MapComponent-1e05941e.js","./MapContainer-db993d88.js","./MapContainer-102dace4.css","./MapComponent-52ff7870.css","./SiteSelection.stories-96b4ce34.css"],import.meta.url),"./src/stories/MapLayer.stories.tsx":async()=>r(()=>import("./MapLayer.stories-c8305c3f.js"),["./MapLayer.stories-c8305c3f.js","./MapContainer-db993d88.js","./compat.module-ddc61323.js","./preact.module-4f38c496.js","./jsxRuntime.module-8e7d8b33.js","./MapContainer-102dace4.css"],import.meta.url),"./src/stories/Map.stories.tsx":async()=>r(()=>import("./Map.stories-10f0bfa8.js"),["./Map.stories-10f0bfa8.js","./MapComponent-1e05941e.js","./compat.module-ddc61323.js","./preact.module-4f38c496.js","./MapContainer-db993d88.js","./jsxRuntime.module-8e7d8b33.js","./MapContainer-102dace4.css","./_commonjsHelpers-de833af9.js","./MapComponent-52ff7870.css"],import.meta.url),"./src/stories/DrawingLayer.stories.tsx":async()=>r(()=>import("./DrawingLayer.stories-29f0a981.js"),["./DrawingLayer.stories-29f0a981.js","./compat.module-ddc61323.js","./preact.module-4f38c496.js","./MapComponent-1e05941e.js","./MapContainer-db993d88.js","./jsxRuntime.module-8e7d8b33.js","./MapContainer-102dace4.css","./_commonjsHelpers-de833af9.js","./MapComponent-52ff7870.css"],import.meta.url),"./src/stories/DatasetSelection.stories.tsx":async()=>r(()=>import("./DatasetSelection.stories-18e46662.js"),["./DatasetSelection.stories-18e46662.js","./MapComponent-1e05941e.js","./compat.module-ddc61323.js","./preact.module-4f38c496.js","./MapContainer-db993d88.js","./jsxRuntime.module-8e7d8b33.js","./MapContainer-102dace4.css","./_commonjsHelpers-de833af9.js","./MapComponent-52ff7870.css"],import.meta.url)};async function P(_){return f[_]()}const{composeConfigs:T,PreviewWeb:w,ClientApi:L}=__STORYBOOK_MODULE_PREVIEW_API__,S=async()=>{const _=await Promise.all([r(()=>import("./config-d209f86b.js"),["./config-d209f86b.js","./preact.module-4f38c496.js","./index-356e4a49.js"],import.meta.url),r(()=>import("./preview-5ef354f3.js"),["./preview-5ef354f3.js","./index-d475d2ea.js","./index-d37d4223.js"],import.meta.url),r(()=>import("./preview-a0e26d05.js"),[],import.meta.url),r(()=>import("./preview-a60aa466.js"),[],import.meta.url),r(()=>import("./preview-770cc08b.js"),["./preview-770cc08b.js","./index-d475d2ea.js","./index-356e4a49.js"],import.meta.url),r(()=>import("./preview-25cb0eda.js"),["./preview-25cb0eda.js","./index-d475d2ea.js"],import.meta.url),r(()=>import("./preview-d8c963a4.js"),["./preview-d8c963a4.js","./index-d475d2ea.js","./index-356e4a49.js"],import.meta.url),r(()=>import("./preview-b79ea209.js"),["./preview-b79ea209.js","./index-d475d2ea.js"],import.meta.url),r(()=>import("./preview-d06fc6bf.js"),["./preview-d06fc6bf.js","./index-d475d2ea.js","./_commonjsHelpers-de833af9.js"],import.meta.url),r(()=>import("./preview-914f9037.js"),["./preview-914f9037.js","./preview-586cd56b.css"],import.meta.url)]);return T(_)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new w;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new L({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:P,getProjectAnnotations:S});export{r as _};
//# sourceMappingURL=iframe-ee8947c0.js.map
