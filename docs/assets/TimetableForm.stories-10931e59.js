import{h as m,F as p}from"./hooks.module-10a4f742.js";import{o as e}from"./jsxRuntime.module-8e7d8b33.js";import"./preact.module-4f38c496.js";const b=()=>e("div",{children:[e("label",{children:["Day",e("input",{type:"text",className:"border-2 border-black w-10"})]}),e("label",{children:["Month",e("input",{type:"text",className:"border-2 border-black w-10"})]}),e("label",{children:["Year",e("input",{type:"text",className:"border-2 border-black w-20"})]})]}),d=({value:t,onChange:a,maxLength:r})=>e("div",{children:[e("textarea",{value:t,onChange:n=>a(n.currentTarget.value),maxLength:r,className:"border-2 border-black"}),r&&e("p",{children:["You have ",r-t.length," characters remaining"]})]}),u=()=>e("div",{className:"flex flex-col",children:[e("h1",{className:"my-2 text-4xl font-bold",children:"Summary text"}),e("p",{children:"Keep this specific to your own Local Plan"}),e(d,{value:"",onChange:()=>{},maxLength:400})]}),g=()=>e("div",{className:"flex flex-col",children:[e("h1",{className:"my-2 text-4xl font-bold",children:"Timetable published date"}),e("p",{children:"This is the date this version of your timetable will be published publicly online"}),e("p",{children:"For example, 21 3 2025"}),e(b,{})]}),x=()=>e("div",{className:"flex flex-col",children:[e("h1",{className:"my-2 text-4xl font-bold",children:"Local Plan title"}),e("p",{children:"Such as Birmingham City 2025-2040 Local Plan timetable"}),e(d,{value:"",onChange:()=>{},maxLength:100})]}),o=[{id:"title",component:x},{id:"description",component:u},{id:"publishedDate",component:g}],f=()=>{const[t,a]=m(0),r=p(()=>o[t],[t]),n=()=>{t!==0&&a(t-1)},h=()=>{t<o.length-1&&a(t+1)};return e("div",{children:[e("button",{className:"bg-gray-200 hover:bg-gray-300 py-1 px-2",onClick:n,children:"Back"}),e("div",{children:r&&e(r.component,{})}),e("button",{className:"bg-green-700 hover:bg-green-800 text-white py-1 px-2",onClick:h,children:"Continue"})]})},y=f,T={component:y,title:"SOW14/Timetable Form",tags:["autodocs"]},l={args:{}};var c,i,s;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {}
}`,...(s=(i=l.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const k=["Default"];export{l as Default,k as __namedExportsOrder,T as default};
//# sourceMappingURL=TimetableForm.stories-10931e59.js.map
