import{F as h,h as m,p as N}from"./hooks.module-10a4f742.js";import{l as w}from"./utils-3cc51d2a.js";import{o as e}from"./jsxRuntime.module-8e7d8b33.js";import"./preact.module-4f38c496.js";const F=({options:s,values:t={},onChange:n})=>{if(!s.length)return null;const l=(i,r)=>{n({...t,[i]:r})},o=s.map(i=>e("div",{className:"flex items-center mb-4",children:e("label",{className:"font-semibold flex",children:[e("input",{type:"checkbox",class:"checkbox mr-2",checked:t[i],onClick:()=>l(i,!t[i])}),e("span",{children:i})]})},i));return e("div",{children:o})},g=({value:s,type:t,step:n,min:l,max:o,onChange:i})=>{const r=e("div",{className:"flex items-center mb-4",children:e("label",{className:"font-semibold flex",children:e("input",{type:t,class:"text mr-2",value:s,onChange:a=>i(a.currentTarget.value),step:n,min:l,max:o})})});return e("div",{children:r})},S=s=>s.type==="string"?s.enum?2:0:s.type==="number"?1:3,I=({id:s,formPageSchema:t,value:n,onFormValueChange:l})=>{let o=null;const i=h(()=>S(t),[t]),r=a=>{l(s,a)};switch(i){case 2:o=e(F,{options:t.enum,values:n,onChange:r});break;case 0:o=e(g,{type:t.type,value:n??"",onChange:r});break;case 1:o=e(g,{type:t.type,value:n??0,step:t.step,min:t.min,max:t.max,onChange:r});break}return e("form",{children:o})};const Y=({children:s,title:t,subtitle:n,onBackClicked:l,onContinueClicked:o})=>e("div",{children:[e("div",{className:"form-page-header mb-4",children:[e("h1",{className:"my-2 text-4xl font-bold",children:t}),n&&e("p",{children:n})]}),e("div",{className:"form-page-body mb-4",children:s}),e("div",{className:"form-page-footer mt-10 flex space-x-6",children:[e("button",{className:"bg-gray-200 hover:bg-gray-300 text-black py-1 px-2",onClick:l,children:"Back"}),e("button",{className:"bg-green-700 hover:bg-green-800 text-white py-1 px-2",onClick:o,children:"Save and continue"})]})]}),D=({filepath:s,data:t})=>{const[n,l]=m(),[o,i]=m({}),[r,a]=m(0);if(N(()=>{t?l(t):s?w(s).then(d=>{l(d)}):l(null)},[l,s,t]),!n)return null;const p=h(()=>Object.keys(n.properties),[n]),c=h(()=>p[r],[p,r]),x=()=>{!n||r<=0||a(r-1)},C=()=>{!n||r>=p.length-1||a(r+1)},v=(d,k)=>{const T={...o,[d]:k};i(T)};return e(Y,{title:n.properties[c].title,subtitle:n.properties[c].subtitle,onBackClicked:x,onContinueClicked:C,children:e(I,{id:c,formPageSchema:n.properties[c],value:o[c],onFormValueChange:v})})},O=D,j={component:O,title:"SOW13/Site Selection Form",tags:["autodocs"]},u={args:{data:{required:["siteUse","relationshipTo","address","name"],type:"object",properties:{siteUse:{type:"string",title:"What use or uses do you think should be considered for this site?",subtitle:"You can choose as many uses as you'd like.",enum:["Housing","Industry - including distribution or logistics uses","Commercial uses - office, retails, leisure, hotel or mixed","Community uses","Minerals - extracting, processing , and so on","Waste - recycling or processing","Tourism","Gypsy and Traveller site","Travelling Show-people site","New public green space","Renewable energy","Energy storage","Other"]},relationshipTo:{type:"string",title:"Your relationship to the site",enum:["landowner","developer","local-authority","planning-agent","none"]},address:{type:"string",title:"Please provide the fullest postal address you can"},name:{type:"string",title:"Your name"},age:{type:"number",title:"Age in years",step:1,min:18,max:35},another:{type:"number",title:"Another"}}}}};var y,b,f;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
        },
        age: {
          type: "number",
          title: "Age in years",
          step: 1,
          min: 18,
          max: 35
        },
        another: {
          type: "number",
          title: "Another"
        }
      }
    }
  }
}`,...(f=(b=u.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const q=["Default"];export{u as Default,q as __namedExportsOrder,j as default};
//# sourceMappingURL=SiteSelection.stories-a61126bb.js.map
