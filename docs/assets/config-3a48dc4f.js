import{y as m,p as c,k as f,D as s}from"./preact.module-d1801ce4.js";import{d as l}from"./index-356e4a49.js";var{h:u}=c,v=(e,r)=>{let{id:n,component:t}=r;if(!t)throw new Error(`Unable to render story ${n} as the component annotation is missing from the default export`);return u(t,{...e})},p;function d(e,r){f?s(e,r):p=s(e,r,p)}var h=({showError:e,name:r,title:n,storyFn:t,canvasElement:a})=>m(t,null)||(e({title:`Expecting a Preact element from the story: "${r}" of "${n}".`,description:l`
        Did you forget to return the Preact element from the story?
        Use "() => (<MyComp/>)" or "() => { return <MyComp/>; }" when defining the story.
      `}),null);function w({storyFn:e,title:r,name:n,showMain:t,showError:a,forceRemount:i},o){i&&d(null,o),t(),d(m(h,{name:n,title:r,showError:a,storyFn:e,canvasElement:o}),o)}var y={docs:{story:{inline:!0}}},x={renderer:"preact",...y};export{x as parameters,v as render,w as renderToCanvas};
//# sourceMappingURL=config-3a48dc4f.js.map
