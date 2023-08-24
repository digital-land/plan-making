import{F as h,h as m,p as w}from"./hooks.module-10a4f742.js";import{l as T}from"./utils-3cc51d2a.js";import{o as e}from"./jsxRuntime.module-8e7d8b33.js";import"./preact.module-4f38c496.js";const S=({options:s,values:t={},onChange:n})=>{if(!s.length)return null;const l=(i,o)=>{n({...t,[i]:o})},r=s.map(i=>e("div",{className:"flex items-center mb-4",children:e("label",{className:"font-semibold flex",children:[e("input",{type:"checkbox",class:"checkbox mr-2",checked:t[i],onClick:()=>l(i,!t[i])}),e("span",{children:i})]})},i));return e("div",{children:r})},g=({value:s,type:t,step:n,min:l,max:r,onChange:i})=>{const o=e("div",{className:"flex items-center mb-4",children:e("label",{className:"font-semibold flex",children:e("input",{type:t,class:"text mr-2",value:s,onChange:a=>i(a.currentTarget.value),step:n,min:l,max:r})})});return e("div",{children:o})},F=({name:s,options:t,value:n,onChange:l})=>{if(!t.length)return null;const r=t.map(i=>e("div",{className:"flex items-center mb-4",children:e("label",{className:"font-semibold flex",children:[e("input",{type:"radio",class:"radio mr-2",name:s,checked:n===i,onClick:()=>l(i)}),e("span",{children:i})]})},i));return e("div",{children:r})},B=s=>s.type==="string"?s.enum?3:0:s.type==="number"?1:s.type==="radio"?2:4,I=({id:s,formPageSchema:t,value:n,onFormValueChange:l})=>{let r=null;const i=h(()=>B(t),[t]),o=a=>{l(s,a)};switch(i){case 3:r=e(S,{options:t.enum,values:n,onChange:o});break;case 0:r=e(g,{type:t.type,value:n??"",onChange:o});break;case 1:r=e(g,{type:t.type,value:n??0,step:t.step,min:t.min,max:t.max,onChange:o});break;case 2:r=e(F,{name:t.title,options:t.enum,value:n,onChange:o});break}return e("form",{children:r})};const Y=({children:s,title:t,subtitle:n,onBackClicked:l,onContinueClicked:r})=>e("div",{children:[e("div",{className:"form-page-header mb-4",children:[e("h1",{className:"my-2 text-4xl font-bold",children:t}),n&&e("p",{children:n})]}),e("div",{className:"form-page-body mb-4",children:s}),e("div",{className:"form-page-footer mt-10 flex space-x-6",children:[e("button",{className:"bg-gray-200 hover:bg-gray-300 text-black py-1 px-2",onClick:l,children:"Back"}),e("button",{className:"bg-green-700 hover:bg-green-800 text-white py-1 px-2",onClick:r,children:"Save and continue"})]})]}),D=({filepath:s,data:t})=>{const[n,l]=m(),[r,i]=m({}),[o,a]=m(0);if(w(()=>{t?l(t):s?T(s).then(p=>{l(p)}):l(null)},[l,s,t]),!n)return null;const d=h(()=>Object.keys(n.properties),[n]),c=h(()=>d[o],[d,o]),x=()=>{!n||o<=0||a(o-1)},C=()=>{!n||o>=d.length-1||a(o+1)},v=(p,k)=>{const N={...r,[p]:k};i(N)};return e(Y,{title:n.properties[c].title,subtitle:n.properties[c].subtitle,onBackClicked:x,onContinueClicked:C,children:e(I,{id:c,formPageSchema:n.properties[c],value:r[c],onFormValueChange:v})})},O=D,E={component:O,title:"SOW13/Site Selection Form",tags:["autodocs"]},u={args:{data:{required:["siteUse","relationshipTo","address","name"],type:"object",properties:{siteUse:{type:"string",title:"What use or uses do you think should be considered for this site?",subtitle:"You can choose as many uses as you'd like.",enum:["Housing","Industry - including distribution or logistics uses","Commercial uses - office, retails, leisure, hotel or mixed","Community uses","Minerals - extracting, processing , and so on","Waste - recycling or processing","Tourism","Gypsy and Traveller site","Travelling Show-people site","New public green space","Renewable energy","Energy storage","Other"]},relationshipTo:{type:"string",title:"Your relationship to the site",enum:["landowner","developer","local-authority","planning-agent","none"]},isBrownfieldSite:{type:"radio",title:"Is this a Brownfield Site? ",enum:["Yes","No"]},address:{type:"string",title:"Please provide the fullest postal address you can"},name:{type:"string",title:"Your name"},age:{type:"number",title:"Age in years",step:1,min:18,max:35}}}}};var y,b,f;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
        isBrownfieldSite: {
          type: "radio",
          title: "Is this a Brownfield Site? ",
          enum: ["Yes", "No"]
        },
        address: {
          type: "string",
          title: "Please provide the fullest postal address you can"
        },
        name: {
          type: "string",
          title: "Your name"
        },
        age: {
          type: "number",
          title: "Age in years",
          step: 1,
          min: 18,
          max: 35
        }
      }
    }
  }
}`,...(f=(b=u.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const M=["Default"];export{u as Default,M as __namedExportsOrder,E as default};
//# sourceMappingURL=SiteSelection.stories-6d23fe95.js.map
