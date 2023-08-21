import{h as c,p as y,F as b}from"./hooks.module-92d23998.js";import{l as f}from"./utils-3cc51d2a.js";import{o as t}from"./jsxRuntime.module-c0cd5f4d.js";import"./preact.module-d1801ce4.js";const S=({children:e,title:n,subtitle:s,onBackClicked:r,onContinueClicked:o})=>t("div",{children:[t("div",{className:"form-page-header mb-4",children:[t("h1",{className:"my-2 text-4xl font-bold",children:n}),s&&t("p",{children:s})]}),t("div",{className:"form-page-body mb-4",children:e}),t("div",{className:"form-page-footer mt-10 flex space-x-6",children:[t("button",{className:"bg-gray-200 hover:bg-gray-300 text-black py-1 px-2",onClick:r,children:"Back"}),t("button",{className:"bg-green-700 hover:bg-green-800 text-white py-1 px-2",onClick:o,children:"Save and continue"})]})]}),k=({values:e})=>{if(!e.length)return null;const n=e.map(s=>t("div",{className:"flex items-center mb-4",children:[t("input",{type:"checkbox",class:"checkbox"}),t("label",{className:"ml-2 font-semibold",children:s})]},s));return t("div",{children:n})},v=e=>e.type==="string"?e.enum?1:0:2,x=({data:e,onBackClicked:n,onContinueClicked:s})=>{let r=null;switch(v(e)){case 1:r=t(k,{values:e.enum});break}return t(S,{title:e.title,subtitle:e.subtitle,onBackClicked:n,onContinueClicked:s,children:t("div",{children:r})})};const C=({filepath:e,data:n})=>{const[s,r]=c(),[o,l]=c(0);if(y(()=>{n?r(n):e?f(e).then(h=>{r(h)}):r(null)},[r,e,n]),!s)return null;const a=b(()=>Object.keys(s.properties),[s]),m=()=>{!s||o<=0||l(o-1)},g=()=>{!s||o>=a.length-1||l(o+1)};return t(x,{data:s.properties[a[o]],onBackClicked:m,onContinueClicked:g})},T=C,O={component:T,title:"SOW13/Site Selection Form",tags:["autodocs"]},i={args:{data:{required:["siteUse","relationshipTo","address","name"],type:"object",properties:{siteUse:{type:"string",title:"What use or uses do you think should be considered for this site?",subtitle:"You can choose as many uses as you'd like.",enum:["Housing","Industry - including distribution or logistics uses","Commercial uses - office, retails, leisure, hotel or mixed","Community uses","Minerals - extracting, processing , and so on","Waste - recycling or processing","Tourism","Gypsy and Traveller site","Travelling Show-people site","New public green space","Renewable energy","Energy storage","Other"]},relationshipTo:{type:"string",title:"Your relationship to the site",enum:["landowner","developer","local-authority","planning-agent","none"]},address:{type:"string",title:"Please provide the fullest postal address you can"},name:{type:"string",title:"Your name"}}}}};var u,p,d;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    data: {
      required: ["siteUse", "relationshipTo", "address", "name"],
      type: "object",
      properties: {
        siteUse: {
          type: "string",
          title: "What use or uses do you think should be considered for this site?",
          subtitle: "You can choose as many uses as you'd like.",
          enum: ["Housing", "Industry - including distribution or logistics uses", "Commercial uses - office, retails, leisure, hotel or mixed", "Community uses", "Minerals - extracting, processing , and so on", "Waste - recycling or processing", "Tourism", "Gypsy and Traveller site", "Travelling Show-people site", "New public green space", "Renewable energy", "Energy storage", "Other"]
        },
        relationshipTo: {
          type: "string",
          title: "Your relationship to the site",
          enum: ["landowner", "developer", "local-authority", "planning-agent", "none"]
        },
        address: {
          type: "string",
          title: "Please provide the fullest postal address you can"
        },
        name: {
          type: "string",
          title: "Your name"
        }
      }
    }
  }
}`,...(d=(p=i.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const W=["Default"];export{i as Default,W as __namedExportsOrder,O as default};
//# sourceMappingURL=SiteSelection.stories-dd8ec9e4.js.map
