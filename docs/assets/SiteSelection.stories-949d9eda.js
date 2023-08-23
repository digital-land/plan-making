import{F as g,h as m,p as k}from"./hooks.module-10a4f742.js";import{l as T}from"./utils-3cc51d2a.js";import{o as e}from"./jsxRuntime.module-8e7d8b33.js";import"./preact.module-4f38c496.js";const w=({options:s,values:n={},onChange:t})=>{if(!s.length)return null;const r=(o,i)=>{t({...n,[o]:i})},a=s.map(o=>e("div",{className:"flex items-center mb-4",children:e("label",{className:"font-semibold flex",children:[e("input",{type:"checkbox",class:"checkbox mr-2",checked:n[o],onClick:()=>r(o,!n[o])}),e("span",{children:o})]})},o));return e("div",{children:a})},F=s=>s.type==="string"?s.enum?1:0:2,N=({id:s,formPageSchema:n,value:t,onFormValueChange:r})=>{let a=null;const o=g(()=>F(n),[n]),i=c=>{r(s,c)};switch(o){case 1:a=e(w,{options:n.enum,values:t,onChange:i});break}return e("form",{children:a})};const Y=({children:s,title:n,subtitle:t,onBackClicked:r,onContinueClicked:a})=>e("div",{children:[e("div",{className:"form-page-header mb-4",children:[e("h1",{className:"my-2 text-4xl font-bold",children:n}),t&&e("p",{children:t})]}),e("div",{className:"form-page-body mb-4",children:s}),e("div",{className:"form-page-footer mt-10 flex space-x-6",children:[e("button",{className:"bg-gray-200 hover:bg-gray-300 text-black py-1 px-2",onClick:r,children:"Back"}),e("button",{className:"bg-green-700 hover:bg-green-800 text-white py-1 px-2",onClick:a,children:"Save and continue"})]})]}),D=({filepath:s,data:n})=>{const[t,r]=m(),[a,o]=m({}),[i,c]=m(0);if(k(()=>{n?r(n):s?T(s).then(p=>{r(p)}):r(null)},[r,s,n]),!t)return null;const d=g(()=>Object.keys(t.properties),[t]),l=g(()=>d[i],[d,i]),f=()=>{!t||i<=0||c(i-1)},C=()=>{!t||i>=d.length-1||c(i+1)},x=(p,v)=>{const S={...a,[p]:v};o(S)};return e(Y,{title:t.properties[l].title,subtitle:t.properties[l].subtitle,onBackClicked:f,onContinueClicked:C,children:e(N,{id:l,formPageSchema:t.properties[l],value:a[l],onFormValueChange:x})})},I=D,j={component:I,title:"SOW13/Site Selection Form",tags:["autodocs"]},u={args:{data:{required:["siteUse","relationshipTo","address","name"],type:"object",properties:{siteUse:{type:"string",title:"What use or uses do you think should be considered for this site?",subtitle:"You can choose as many uses as you'd like.",enum:["Housing","Industry - including distribution or logistics uses","Commercial uses - office, retails, leisure, hotel or mixed","Community uses","Minerals - extracting, processing , and so on","Waste - recycling or processing","Tourism","Gypsy and Traveller site","Travelling Show-people site","New public green space","Renewable energy","Energy storage","Other"]},relationshipTo:{type:"string",title:"Your relationship to the site",enum:["landowner","developer","local-authority","planning-agent","none"]},address:{type:"string",title:"Please provide the fullest postal address you can"},name:{type:"string",title:"Your name"}}}}};var h,y,b;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(b=(y=u.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const q=["Default"];export{u as Default,q as __namedExportsOrder,j as default};
//# sourceMappingURL=SiteSelection.stories-949d9eda.js.map
