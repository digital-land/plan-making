import{B as l,M as m}from"./mapContainer-b5ef120c.js";import{M as c}from"./mapLayer-31a66076.js";import{D as u}from"./drawingLayer-c48b3ece.js";import{o as e}from"./jsxRuntime.module-8e7d8b33.js";import"./hooks.module-10a4f742.js";import"./preact.module-4f38c496.js";import"./compat.module-b1a3416f.js";import"./api-a5ac36e6.js";const y=({features:n,stroke:s,fill:p,zIndex:i})=>e(m,{children:[e(l,{lat:54.97,lng:-1.627,zoom:15.5,style:{height:"500px",width:"500px"}}),e(c,{features:n,stroke:s,fill:p,zIndex:i}),e(u,{})]}),x={component:y,title:"Components/Map/Map Layer",tags:["autodocs"]},r={args:{stroke:{color:"#003078",width:2},fill:{color:"rgba(0, 48, 120, 0.2)"},features:{type:"FeatureCollection",features:[{geometry:{type:"MultiPolygon",coordinates:[[[[-1.62581,54.969804],[-1.625196,54.96974],[-1.625058,54.970268],[-1.625068,54.970562],[-1.625283,54.970584],[-1.625293,54.970553],[-1.625331,54.97052],[-1.625371,54.9705],[-1.62542,54.970487],[-1.625592,54.970487],[-1.625627,54.970475],[-1.625663,54.970449],[-1.625809,54.969894],[-1.62581,54.969804]]],[[[-1.625786,54.971015],[-1.625776,54.971043],[-1.626438,54.971144],[-1.626601,54.970767],[-1.625944,54.97068],[-1.625793,54.971011],[-1.625786,54.971015]]],[[[-1.625186,54.971047],[-1.625334,54.971068],[-1.625378,54.970951],[-1.62579,54.97101],[-1.625942,54.97068],[-1.625378,54.970602],[-1.62534,54.97067],[-1.625186,54.971047]]],[[[-1.628544,54.970167],[-1.628629,54.969963],[-1.628349,54.969759],[-1.627934,54.969428],[-1.627838,54.969442],[-1.627826,54.969456],[-1.627803,54.969461],[-1.627765,54.969461],[-1.627703,54.969431],[-1.627298,54.969398],[-1.627255,54.969421],[-1.627216,54.969418],[-1.627205,54.969391],[-1.627141,54.969386],[-1.627048,54.969616],[-1.626742,54.969581],[-1.626693,54.969697],[-1.626407,54.969662],[-1.626421,54.969618],[-1.62593,54.96957],[-1.625878,54.969791],[-1.625945,54.969854],[-1.628482,54.970185],[-1.628544,54.970167]]],[[[-1.627112,54.970841],[-1.626924,54.971221],[-1.627029,54.971238],[-1.627015,54.971267],[-1.627088,54.971275],[-1.627097,54.971263],[-1.627085,54.97126],[-1.627099,54.971241],[-1.62713,54.971234],[-1.627715,54.971326],[-1.627899,54.970945],[-1.627478,54.97089],[-1.627112,54.970841]]],[[[-1.626846,54.971211],[-1.627022,54.970824],[-1.626604,54.970767],[-1.626424,54.971187],[-1.626578,54.971208],[-1.626585,54.971191],[-1.62674,54.971212],[-1.626748,54.971194],[-1.626846,54.971211]]],[[[-1.628261,54.970992],[-1.628273,54.970994],[-1.627903,54.970945],[-1.627677,54.97141],[-1.628319,54.971497],[-1.628473,54.9713],[-1.628487,54.971261],[-1.628502,54.971263],[-1.628584,54.971037],[-1.628274,54.970994],[-1.628573,54.971033],[-1.628862,54.971073],[-1.62911,54.970334],[-1.628635,54.970283],[-1.62845,54.970891],[-1.628302,54.970877],[-1.628261,54.970992]]]]},type:"Feature",properties:{}}]}}};var o,t,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    stroke: {
      color: "#003078",
      width: 2
    },
    fill: {
      color: "rgba(0, 48, 120, 0.2)"
    },
    features: {
      type: "FeatureCollection",
      features: [{
        geometry: {
          type: "MultiPolygon",
          coordinates: [[[[-1.62581, 54.969804], [-1.625196, 54.96974], [-1.625058, 54.970268], [-1.625068, 54.970562], [-1.625283, 54.970584], [-1.625293, 54.970553], [-1.625331, 54.97052], [-1.625371, 54.9705], [-1.62542, 54.970487], [-1.625592, 54.970487], [-1.625627, 54.970475], [-1.625663, 54.970449], [-1.625809, 54.969894], [-1.62581, 54.969804]]], [[[-1.625786, 54.971015], [-1.625776, 54.971043], [-1.626438, 54.971144], [-1.626601, 54.970767], [-1.625944, 54.97068], [-1.625793, 54.971011], [-1.625786, 54.971015]]], [[[-1.625186, 54.971047], [-1.625334, 54.971068], [-1.625378, 54.970951], [-1.62579, 54.97101], [-1.625942, 54.97068], [-1.625378, 54.970602], [-1.62534, 54.97067], [-1.625186, 54.971047]]], [[[-1.628544, 54.970167], [-1.628629, 54.969963], [-1.628349, 54.969759], [-1.627934, 54.969428], [-1.627838, 54.969442], [-1.627826, 54.969456], [-1.627803, 54.969461], [-1.627765, 54.969461], [-1.627703, 54.969431], [-1.627298, 54.969398], [-1.627255, 54.969421], [-1.627216, 54.969418], [-1.627205, 54.969391], [-1.627141, 54.969386], [-1.627048, 54.969616], [-1.626742, 54.969581], [-1.626693, 54.969697], [-1.626407, 54.969662], [-1.626421, 54.969618], [-1.62593, 54.96957], [-1.625878, 54.969791], [-1.625945, 54.969854], [-1.628482, 54.970185], [-1.628544, 54.970167]]], [[[-1.627112, 54.970841], [-1.626924, 54.971221], [-1.627029, 54.971238], [-1.627015, 54.971267], [-1.627088, 54.971275], [-1.627097, 54.971263], [-1.627085, 54.97126], [-1.627099, 54.971241], [-1.62713, 54.971234], [-1.627715, 54.971326], [-1.627899, 54.970945], [-1.627478, 54.97089], [-1.627112, 54.970841]]], [[[-1.626846, 54.971211], [-1.627022, 54.970824], [-1.626604, 54.970767], [-1.626424, 54.971187], [-1.626578, 54.971208], [-1.626585, 54.971191], [-1.62674, 54.971212], [-1.626748, 54.971194], [-1.626846, 54.971211]]], [[[-1.628261, 54.970992], [-1.628273, 54.970994], [-1.627903, 54.970945], [-1.627677, 54.97141], [-1.628319, 54.971497], [-1.628473, 54.9713], [-1.628487, 54.971261], [-1.628502, 54.971263], [-1.628584, 54.971037], [-1.628274, 54.970994], [-1.628573, 54.971033], [-1.628862, 54.971073], [-1.62911, 54.970334], [-1.628635, 54.970283], [-1.62845, 54.970891], [-1.628302, 54.970877], [-1.628261, 54.970992]]]]
        },
        type: "Feature",
        properties: {}
      }]
    }
  }
}`,...(a=(t=r.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const D=["Default"];export{r as Default,D as __namedExportsOrder,x as default};
//# sourceMappingURL=MapLayer.stories-27389182.js.map
