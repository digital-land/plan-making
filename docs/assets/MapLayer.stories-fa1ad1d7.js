import{T as Q,E as W,a as l,I as p,C as X,g as Z,f as $,V as v,i as q,b as T,c as ee,d as S,e as N,h as A,m as te,t as re,j as ne,k as oe,l as y,n as ie,F as ae,o as se,p as ce,G as ue,P as le,L as de,q as ge,r as he,s as me,u as pe,v as ye,w as fe,x as xe,R as Pe,y as we,z as Fe,A as Re,S as je,D as Oe,H as Ge,B as _e,M as be}from"./mapContainer-ce727b13.js";import"./compat.module-775fbf94.js";import{_ as Ce,p as ve}from"./hooks.module-92d23998.js";import{o as M}from"./jsxRuntime.module-c0cd5f4d.js";import"./preact.module-d1801ce4.js";class Ie extends Q{constructor(e,t,r,o){super(),this.extent=e,this.pixelRatio_=r,this.resolution=t,this.state=o}changed(){this.dispatchEvent(W.CHANGE)}getExtent(){return this.extent}getImage(){return l()}getPixelRatio(){return this.pixelRatio_}getResolution(){return this.resolution}getState(){return this.state}load(){l()}}const Ee=Ie;class Le extends Ee{constructor(e,t,r,o,i){const a=i!==void 0?p.IDLE:p.LOADED;super(e,t,r,a),this.loader_=i!==void 0?i:null,this.canvas_=o,this.error_=null}getError(){return this.error_}handleLoad_(e){e?(this.error_=e,this.state=p.ERROR):this.state=p.LOADED,this.changed()}load(){this.state==p.IDLE&&(this.state=p.LOADING,this.changed(),this.loader_(this.handleLoad_.bind(this)))}getImage(){return this.canvas_}}const Me=Le;class Te extends X{constructor(e){super(e),this.image_=null}getImage(){return this.image_?this.image_.getImage():null}prepareFrame(e){const t=e.layerStatesArray[e.layerIndex],r=e.pixelRatio,o=e.viewState,i=o.resolution,a=this.getLayer().getSource(),s=e.viewHints;let c=e.extent;if(t.extent!==void 0&&(c=Z(c,$(t.extent,o.projection))),!s[v.ANIMATING]&&!s[v.INTERACTING]&&!q(c))if(a){const u=o.projection,d=a.getImage(c,i,r,u);d&&(this.loadImage(d)?this.image_=d:d.getState()===p.EMPTY&&(this.image_=null))}else this.image_=null;return!!this.image_}getData(e){const t=this.frameState;if(!t)return null;const r=this.getLayer(),o=T(t.pixelToCoordinateTransform,e.slice()),i=r.getExtent();if(i&&!ee(i,o))return null;const a=this.image_.getExtent(),s=this.getImage(),c=S(a),u=Math.floor(s.width*((o[0]-a[0])/c));if(u<0||u>=s.width)return null;const d=N(a),f=Math.floor(s.height*((a[3]-o[1])/d));return f<0||f>=s.height?null:this.getImageData(s,u,f)}renderFrame(e,t){const r=this.image_,o=r.getExtent(),i=r.getResolution(),a=r.getPixelRatio(),s=e.layerStatesArray[e.layerIndex],c=e.pixelRatio,u=e.viewState,d=u.center,f=u.resolution,G=c*i/(f*a),w=e.extent,R=u.resolution,m=u.rotation,h=Math.round(S(w)/R*c),x=Math.round(N(w)/R*c);A(this.pixelTransform,e.size[0]/2,e.size[1]/2,1/c,1/c,m,-h/2,-x/2),te(this.inversePixelTransform,this.pixelTransform);const P=re(this.pixelTransform);this.useContainer(t,P,this.getBackground(e));const g=this.context,F=g.canvas;F.width!=h||F.height!=x?(F.width=h,F.height=x):this.containerReused||g.clearRect(0,0,h,x);let I=!1,E=!0;if(s.extent){const O=$(s.extent,u.projection);E=ne(O,e.extent),I=E&&!oe(O,e.extent),I&&this.clipUnrotated(g,e,O)}const j=this.getImage(),_=A(this.tempTransform,h/2,x/2,G,G,0,a*(o[0]-d[0])/i,a*(d[1]-o[3])/i);this.renderedResolution=i*c/a;const J=j.width*_[0],V=j.height*_[3];if(this.getLayer().getSource().getInterpolate()||(g.imageSmoothingEnabled=!1),this.preRender(g,e),E&&J>=.5&&V>=.5){const O=_[4],K=_[5],L=s.opacity;let H;L!==1&&(H=g.globalAlpha,g.globalAlpha=L),g.drawImage(j,0,0,+j.width,+j.height,O,K,J,V),L!==1&&(g.globalAlpha=H)}return this.postRender(g,e),I&&g.restore(),g.imageSmoothingEnabled=!0,P!==F.style.transform&&(F.style.transform=P),this.container}}const Se=Te;class Ne{constructor(){this.dataProjection=void 0,this.defaultFeatureProjection=void 0,this.supportedMediaTypes=null}getReadOptions(e,t){if(t){let r=t.dataProjection?y(t.dataProjection):this.readProjection(e);t.extent&&r&&r.getUnits()==="tile-pixels"&&(r=y(r),r.setWorldExtent(t.extent)),t={dataProjection:r,featureProjection:t.featureProjection}}return this.adaptOptions(t)}adaptOptions(e){return Object.assign({dataProjection:this.dataProjection,featureProjection:this.defaultFeatureProjection},e)}getType(){return l()}readFeature(e,t){return l()}readFeatures(e,t){return l()}readGeometry(e,t){return l()}readProjection(e){return l()}writeFeature(e,t){return l()}writeFeatures(e,t){return l()}writeGeometry(e,t){return l()}}function Y(n,e,t){const r=t?y(t.featureProjection):null,o=t?y(t.dataProjection):null;let i;if(r&&o&&!ie(r,o)?i=(e?n.clone():n).transform(e?r:o,e?o:r):i=n,e&&t&&t.decimals!==void 0){const a=Math.pow(10,t.decimals),s=function(c){for(let u=0,d=c.length;u<d;++u)c[u]=Math.round(c[u]*a)/a;return c};i===n&&(i=n.clone()),i.applyTransform(s)}return i}class Ae extends Ne{constructor(){super()}getType(){return"json"}readFeature(e,t){return this.readFeatureFromObject(b(e),this.getReadOptions(e,t))}readFeatures(e,t){return this.readFeaturesFromObject(b(e),this.getReadOptions(e,t))}readFeatureFromObject(e,t){return l()}readFeaturesFromObject(e,t){return l()}readGeometry(e,t){return this.readGeometryFromObject(b(e),this.getReadOptions(e,t))}readGeometryFromObject(e,t){return l()}readProjection(e){return this.readProjectionFromObject(b(e))}readProjectionFromObject(e){return l()}writeFeature(e,t){return JSON.stringify(this.writeFeatureObject(e,t))}writeFeatureObject(e,t){return l()}writeFeatures(e,t){return JSON.stringify(this.writeFeaturesObject(e,t))}writeFeaturesObject(e,t){return l()}writeGeometry(e,t){return JSON.stringify(this.writeGeometryObject(e,t))}writeGeometryObject(e,t){return l()}}function b(n){if(typeof n=="string"){const e=JSON.parse(n);return e||null}return n!==null?n:null}const ke=Ae;class De extends ke{constructor(e){e=e||{},super(),this.dataProjection=y(e.dataProjection?e.dataProjection:"EPSG:4326"),e.featureProjection&&(this.defaultFeatureProjection=y(e.featureProjection)),this.geometryName_=e.geometryName,this.extractGeometryName_=e.extractGeometryName,this.supportedMediaTypes=["application/geo+json","application/vnd.geo+json"]}readFeatureFromObject(e,t){let r=null;e.type==="Feature"?r=e:r={type:"Feature",geometry:e,properties:null};const o=k(r.geometry,t),i=new ae;return this.geometryName_?i.setGeometryName(this.geometryName_):this.extractGeometryName_&&"geometry_name"in r!==void 0&&i.setGeometryName(r.geometry_name),i.setGeometry(o),"id"in r&&i.setId(r.id),r.properties&&i.setProperties(r.properties,!0),i}readFeaturesFromObject(e,t){const r=e;let o=null;if(r.type==="FeatureCollection"){const i=e;o=[];const a=i.features;for(let s=0,c=a.length;s<c;++s)o.push(this.readFeatureFromObject(a[s],t))}else o=[this.readFeatureFromObject(e,t)];return o}readGeometryFromObject(e,t){return k(e,t)}readProjectionFromObject(e){const t=e.crs;let r;return t?t.type=="name"?r=y(t.properties.name):t.type==="EPSG"?r=y("EPSG:"+t.properties.code):se(!1,36):r=this.dataProjection,r}writeFeatureObject(e,t){t=this.adaptOptions(t);const r={type:"Feature",geometry:null,properties:null},o=e.getId();if(o!==void 0&&(r.id=o),!e.hasProperties())return r;const i=e.getProperties(),a=e.getGeometry();return a&&(r.geometry=D(a,t),delete i[e.getGeometryName()]),ce(i)||(r.properties=i),r}writeFeaturesObject(e,t){t=this.adaptOptions(t);const r=[];for(let o=0,i=e.length;o<i;++o)r.push(this.writeFeatureObject(e[o],t));return{type:"FeatureCollection",features:r}}writeGeometryObject(e,t){return D(e,this.adaptOptions(t))}}function k(n,e){if(!n)return null;let t;switch(n.type){case"Point":{t=Ve(n);break}case"LineString":{t=He(n);break}case"Polygon":{t=Ue(n);break}case"MultiPoint":{t=Be(n);break}case"MultiLineString":{t=$e(n);break}case"MultiPolygon":{t=ze(n);break}case"GeometryCollection":{t=Je(n);break}default:throw new Error("Unsupported GeoJSON type: "+n.type)}return Y(t,!1,e)}function Je(n,e){const t=n.geometries.map(function(r){return k(r,e)});return new ue(t)}function Ve(n){return new le(n.coordinates)}function He(n){return new de(n.coordinates)}function $e(n){return new ge(n.coordinates)}function Be(n){return new he(n.coordinates)}function ze(n){return new me(n.coordinates)}function Ue(n){return new pe(n.coordinates)}function D(n,e){n=Y(n,!0,e);const t=n.getType();let r;switch(t){case"Point":{r=Xe(n);break}case"LineString":{r=qe(n);break}case"Polygon":{r=Ze(n,e);break}case"MultiPoint":{r=Ke(n);break}case"MultiLineString":{r=Ye(n);break}case"MultiPolygon":{r=Qe(n,e);break}case"GeometryCollection":{r=We(n,e);break}case"Circle":{r={type:"GeometryCollection",geometries:[]};break}default:throw new Error("Unsupported geometry type: "+t)}return r}function We(n,e){return e=Object.assign({},e),delete e.featureProjection,{type:"GeometryCollection",geometries:n.getGeometriesArray().map(function(r){return D(r,e)})}}function qe(n,e){return{type:"LineString",coordinates:n.getCoordinates()}}function Ye(n,e){return{type:"MultiLineString",coordinates:n.getCoordinates()}}function Ke(n,e){return{type:"MultiPoint",coordinates:n.getCoordinates()}}function Qe(n,e){let t;return e&&(t=e.rightHanded),{type:"MultiPolygon",coordinates:n.getCoordinates(t)}}function Xe(n,e){return{type:"Point",coordinates:n.getCoordinates()}}function Ze(n,e){let t;return e&&(t=e.rightHanded),{type:"Polygon",coordinates:n.getCoordinates(t)}}const et=De;class tt extends Se{constructor(e){super(e),this.vectorRenderer_=new ye(e),this.layerImageRatio_=e.getImageRatio(),this.coordinateToVectorPixelTransform_=fe(),this.renderedPixelToCoordinateTransform_=null}disposeInternal(){this.vectorRenderer_.dispose(),super.disposeInternal()}getFeatures(e){if(!this.vectorRenderer_)return Promise.resolve([]);const t=T(this.coordinateToVectorPixelTransform_,T(this.renderedPixelToCoordinateTransform_,e.slice()));return this.vectorRenderer_.getFeatures(t)}handleFontsChanged(){this.vectorRenderer_.handleFontsChanged()}prepareFrame(e){const t=e.pixelRatio,r=e.viewState,o=r.resolution,i=e.viewHints,a=this.vectorRenderer_;let s=e.extent;this.layerImageRatio_!==1&&(s=s.slice(0),xe(s,this.layerImageRatio_));const c=S(s)/o,u=N(s)/o;if(!i[v.ANIMATING]&&!i[v.INTERACTING]&&!q(s)){a.useContainer(null,null);const d=a.context,f=e.layerStatesArray[e.layerIndex],G=Object.assign({},f,{opacity:1}),w=Object.assign({},e,{declutterTree:new Pe(9),extent:s,size:[c,u],viewState:Object.assign({},e.viewState,{rotation:0}),layerStatesArray:[G],layerIndex:0});let R=!0;const m=new Me(s,o,t,d.canvas,function(h){a.prepareFrame(w)&&a.replayGroupChanged&&(a.clipping=!1,a.renderFrame(w,null)&&(a.renderDeclutter(w),R=!1),h())});m.addEventListener(W.CHANGE,()=>{if(m.getState()!==p.LOADED)return;this.image_=R?null:m;const h=m.getResolution(),x=m.getPixelRatio(),P=h*t/x;this.renderedResolution=P,this.coordinateToVectorPixelTransform_=A(this.coordinateToVectorPixelTransform_,c/2,u/2,1/P,-1/P,0,-r.center[0],-r.center[1])}),m.load()}return this.image_&&(this.renderedPixelToCoordinateTransform_=e.pixelToCoordinateTransform.slice()),!!this.image_}preRender(){}postRender(){}renderDeclutter(){}forEachFeatureAtCoordinate(e,t,r,o,i){return this.vectorRenderer_?this.vectorRenderer_.forEachFeatureAtCoordinate(e,t,r,o,i):super.forEachFeatureAtCoordinate(e,t,r,o,i)}}const rt=tt;class nt extends we{constructor(e){e=e||{};const t=Object.assign({},e);delete t.imageRatio,super(t),this.imageRatio_=e.imageRatio!==void 0?e.imageRatio:1}getImageRatio(){return this.imageRatio_}createRenderer(){return new rt(this)}}const ot=nt,it=({features:n,stroke:e,fill:t})=>{const r=Fe(),o=Ce(null);return ve(()=>{o.current&&(r.removeLayer(o.current),o.current=null);const i=new Re({features:new et().readFeatures(n)});return o.current=new ot({source:i,style:new je({fill:new Oe(t),stroke:new Ge(e)})}),r.addLayer(o.current),()=>{o.current&&(r==null||r.removeLayer(o.current))}},[n,r,o,e,t]),null},at=({features:n,stroke:e,fill:t})=>M(be,{children:[M(_e,{lat:54.97,lng:-1.627,zoom:15.5,style:{height:"500px",width:"500px"}}),M(it,{features:n,stroke:e,fill:t})]}),gt={component:at,title:"Components/Map/Map Layer",tags:["autodocs"]},C={args:{stroke:{color:"#003078",width:2},fill:{color:"rgba(0, 48, 120, 0.2)"},features:{type:"FeatureCollection",features:[{geometry:{type:"MultiPolygon",coordinates:[[[[-1.62581,54.969804],[-1.625196,54.96974],[-1.625058,54.970268],[-1.625068,54.970562],[-1.625283,54.970584],[-1.625293,54.970553],[-1.625331,54.97052],[-1.625371,54.9705],[-1.62542,54.970487],[-1.625592,54.970487],[-1.625627,54.970475],[-1.625663,54.970449],[-1.625809,54.969894],[-1.62581,54.969804]]],[[[-1.625786,54.971015],[-1.625776,54.971043],[-1.626438,54.971144],[-1.626601,54.970767],[-1.625944,54.97068],[-1.625793,54.971011],[-1.625786,54.971015]]],[[[-1.625186,54.971047],[-1.625334,54.971068],[-1.625378,54.970951],[-1.62579,54.97101],[-1.625942,54.97068],[-1.625378,54.970602],[-1.62534,54.97067],[-1.625186,54.971047]]],[[[-1.628544,54.970167],[-1.628629,54.969963],[-1.628349,54.969759],[-1.627934,54.969428],[-1.627838,54.969442],[-1.627826,54.969456],[-1.627803,54.969461],[-1.627765,54.969461],[-1.627703,54.969431],[-1.627298,54.969398],[-1.627255,54.969421],[-1.627216,54.969418],[-1.627205,54.969391],[-1.627141,54.969386],[-1.627048,54.969616],[-1.626742,54.969581],[-1.626693,54.969697],[-1.626407,54.969662],[-1.626421,54.969618],[-1.62593,54.96957],[-1.625878,54.969791],[-1.625945,54.969854],[-1.628482,54.970185],[-1.628544,54.970167]]],[[[-1.627112,54.970841],[-1.626924,54.971221],[-1.627029,54.971238],[-1.627015,54.971267],[-1.627088,54.971275],[-1.627097,54.971263],[-1.627085,54.97126],[-1.627099,54.971241],[-1.62713,54.971234],[-1.627715,54.971326],[-1.627899,54.970945],[-1.627478,54.97089],[-1.627112,54.970841]]],[[[-1.626846,54.971211],[-1.627022,54.970824],[-1.626604,54.970767],[-1.626424,54.971187],[-1.626578,54.971208],[-1.626585,54.971191],[-1.62674,54.971212],[-1.626748,54.971194],[-1.626846,54.971211]]],[[[-1.628261,54.970992],[-1.628273,54.970994],[-1.627903,54.970945],[-1.627677,54.97141],[-1.628319,54.971497],[-1.628473,54.9713],[-1.628487,54.971261],[-1.628502,54.971263],[-1.628584,54.971037],[-1.628274,54.970994],[-1.628573,54.971033],[-1.628862,54.971073],[-1.62911,54.970334],[-1.628635,54.970283],[-1.62845,54.970891],[-1.628302,54.970877],[-1.628261,54.970992]]]]},type:"Feature",properties:{}}]}}};var B,z,U;C.parameters={...C.parameters,docs:{...(B=C.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(U=(z=C.parameters)==null?void 0:z.docs)==null?void 0:U.source}}};const ht=["Default"];export{C as Default,ht as __namedExportsOrder,gt as default};
//# sourceMappingURL=MapLayer.stories-fa1ad1d7.js.map
