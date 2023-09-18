import"../sb-preview/runtime.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(r){if(r.ep)return;r.ep=!0;const t=n(r);fetch(r.href,t)}})();const E="modulepreload",d=function(_,i){return new URL(_,i).href},u={},e=function(i,n,c){if(!n||n.length===0)return i();const r=document.getElementsByTagName("link");return Promise.all(n.map(t=>{if(t=d(t,c),t in u)return;u[t]=!0;const o=t.endsWith(".css"),O=o?'[rel="stylesheet"]':"";if(!!c)for(let a=r.length-1;a>=0;a--){const l=r[a];if(l.href===t&&(!o||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${O}`))return;const s=document.createElement("link");if(s.rel=o?"stylesheet":E,o||(s.as="script",s.crossOrigin=""),s.href=t,document.head.appendChild(s),o)return new Promise((a,l)=>{s.addEventListener("load",a),s.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>i()).catch(t=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=t,window.dispatchEvent(o),!o.defaultPrevented)throw t})},{createBrowserChannel:p}=__STORYBOOK_MODULE_CHANNELS__,{addons:R}=__STORYBOOK_MODULE_PREVIEW_API__,m=p({page:"preview"});R.setChannel(m);window.__STORYBOOK_ADDONS_CHANNEL__=m;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=m);const P={"./src/stories/TimetablePage.stories.tsx":async()=>e(()=>import("./TimetablePage.stories-2a496789.js"),["./TimetablePage.stories-2a496789.js","./_commonjsHelpers-de833af9.js","./hooks.module-10a4f742.js","./preact.module-4f38c496.js","./index-c8e80f7e.js","./jsxRuntime.module-8e7d8b33.js","./compat.module-b1a3416f.js","./utils-3cc51d2a.js","./constants-6ab425e5.js","./TimetablePage.stories-809bcbdb.css","./MultiSelect-96b4ce34.css"],import.meta.url),"./src/stories/TimetableForm.stories.tsx":async()=>e(()=>import("./TimetableForm.stories-973a7bf7.js"),["./TimetableForm.stories-973a7bf7.js","./hooks.module-10a4f742.js","./preact.module-4f38c496.js","./jsxRuntime.module-8e7d8b33.js","./Textarea-3ea8ae58.js","./constants-6ab425e5.js","./utils-3cc51d2a.js","./RadioButtons-900e0ac3.js","./MultiSelect-96b4ce34.css"],import.meta.url),"./src/stories/SiteSelection.stories.tsx":async()=>e(()=>import("./SiteSelection.stories-b661b093.js"),["./SiteSelection.stories-b661b093.js","./hooks.module-10a4f742.js","./preact.module-4f38c496.js","./utils-3cc51d2a.js","./jsxRuntime.module-8e7d8b33.js","./MultiSelect-a009f75d.js","./MultiSelect-96b4ce34.css","./RadioButtons-900e0ac3.js","./_commonjsHelpers-de833af9.js","./MapComponent-204bfc1e.js","./compat.module-b1a3416f.js","./MapComponent-686dac5e.css","./index-c8e80f7e.js","./queryClient-2e984a22.js","./SiteSelection.stories-61cb9754.css"],import.meta.url),"./src/stories/PolicyPage.stories.tsx":async()=>e(()=>import("./PolicyPage.stories-772b6a28.js"),["./PolicyPage.stories-772b6a28.js","./compat.module-b1a3416f.js","./preact.module-4f38c496.js","./hooks.module-10a4f742.js","./utils-3cc51d2a.js","./constants-cef07a36.js","./jsxRuntime.module-8e7d8b33.js"],import.meta.url),"./src/stories/PolicyForm.stories.tsx":async()=>e(()=>import("./PolicyForm.stories-ec8f913d.js"),["./PolicyForm.stories-ec8f913d.js","./hooks.module-10a4f742.js","./preact.module-4f38c496.js","./jsxRuntime.module-8e7d8b33.js","./MultiSelect-a009f75d.js","./MultiSelect-96b4ce34.css","./Textarea-3ea8ae58.js","./MapComponent-204bfc1e.js","./compat.module-b1a3416f.js","./_commonjsHelpers-de833af9.js","./MapComponent-686dac5e.css","./constants-cef07a36.js"],import.meta.url),"./src/stories/MapLayer.stories.tsx":async()=>e(()=>import("./MapLayer.stories-705dfb99.js"),["./MapLayer.stories-705dfb99.js","./compat.module-b1a3416f.js","./preact.module-4f38c496.js","./hooks.module-10a4f742.js","./MapComponent-204bfc1e.js","./jsxRuntime.module-8e7d8b33.js","./_commonjsHelpers-de833af9.js","./MapComponent-686dac5e.css","./queryClient-2e984a22.js"],import.meta.url),"./src/stories/Map.stories.tsx":async()=>e(()=>import("./Map.stories-ea13b72d.js"),["./Map.stories-ea13b72d.js","./MapComponent-204bfc1e.js","./compat.module-b1a3416f.js","./preact.module-4f38c496.js","./hooks.module-10a4f742.js","./jsxRuntime.module-8e7d8b33.js","./_commonjsHelpers-de833af9.js","./MapComponent-686dac5e.css","./queryClient-2e984a22.js"],import.meta.url),"./src/stories/DrawingLayer.stories.tsx":async()=>e(()=>import("./DrawingLayer.stories-4abdfae1.js"),["./DrawingLayer.stories-4abdfae1.js","./compat.module-b1a3416f.js","./preact.module-4f38c496.js","./hooks.module-10a4f742.js","./MapComponent-204bfc1e.js","./jsxRuntime.module-8e7d8b33.js","./_commonjsHelpers-de833af9.js","./MapComponent-686dac5e.css","./queryClient-2e984a22.js"],import.meta.url),"./src/stories/DatasetSelection.stories.tsx":async()=>e(()=>import("./DatasetSelection.stories-6e3c8542.js"),["./DatasetSelection.stories-6e3c8542.js","./MapComponent-204bfc1e.js","./compat.module-b1a3416f.js","./preact.module-4f38c496.js","./hooks.module-10a4f742.js","./jsxRuntime.module-8e7d8b33.js","./_commonjsHelpers-de833af9.js","./MapComponent-686dac5e.css","./queryClient-2e984a22.js"],import.meta.url)};async function f(_){return P[_]()}const{composeConfigs:T,PreviewWeb:w,ClientApi:L}=__STORYBOOK_MODULE_PREVIEW_API__,y=async()=>{const _=await Promise.all([e(()=>import("./config-d209f86b.js"),["./config-d209f86b.js","./preact.module-4f38c496.js","./index-356e4a49.js"],import.meta.url),e(()=>import("./preview-5ef354f3.js"),["./preview-5ef354f3.js","./index-d475d2ea.js","./index-d37d4223.js"],import.meta.url),e(()=>import("./preview-ff3b6ac1.js"),[],import.meta.url),e(()=>import("./preview-a60aa466.js"),[],import.meta.url),e(()=>import("./preview-770cc08b.js"),["./preview-770cc08b.js","./index-d475d2ea.js","./index-356e4a49.js"],import.meta.url),e(()=>import("./preview-25cb0eda.js"),["./preview-25cb0eda.js","./index-d475d2ea.js"],import.meta.url),e(()=>import("./preview-d8c963a4.js"),["./preview-d8c963a4.js","./index-d475d2ea.js","./index-356e4a49.js"],import.meta.url),e(()=>import("./preview-b79ea209.js"),["./preview-b79ea209.js","./index-d475d2ea.js"],import.meta.url),e(()=>import("./preview-d06fc6bf.js"),["./preview-d06fc6bf.js","./index-d475d2ea.js","./_commonjsHelpers-de833af9.js"],import.meta.url),e(()=>import("./preview-4fc39603.js"),["./preview-4fc39603.js","./preview-dad28714.css"],import.meta.url)]);return T(_)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new w;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new L({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:f,getProjectAnnotations:y});export{e as _};
//# sourceMappingURL=iframe-b6796cbd.js.map
