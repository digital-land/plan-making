import"./compat.module-b1a3416f.js";import{y as z,E as H,z as h,A as y,C as W,D as Y,G as V,V as v,H as $,J as L,K as Z,L as N,N as S,O as T,Q as K,R as Q,i as X,U as q,W as I,X as ee,Y as te,l as re,p as ne,Z as ie,_ as oe,x as se}from"./mapContainer-b5ef120c.js";import{d as ae,F as ce,t as B,G as le,L as ue,a as de,M as ge,b as he,C as me,R as ye,B as pe,V as fe,S as xe,e as we,g as Re}from"./api-a5ac36e6.js";import{_ as Fe,p as Oe}from"./hooks.module-10a4f742.js";class Pe extends z{constructor(e,t,n,o){super(),this.extent=e,this.pixelRatio_=n,this.resolution=t,this.state=o}changed(){this.dispatchEvent(H.CHANGE)}getExtent(){return this.extent}getImage(){return h()}getPixelRatio(){return this.pixelRatio_}getResolution(){return this.resolution}getState(){return this.state}load(){h()}}const Ge=Pe;class _e extends Ge{constructor(e,t,n,o,i){const s=i!==void 0?y.IDLE:y.LOADED;super(e,t,n,s),this.loader_=i!==void 0?i:null,this.canvas_=o,this.error_=null}getError(){return this.error_}handleLoad_(e){e?(this.error_=e,this.state=y.ERROR):this.state=y.LOADED,this.changed()}load(){this.state==y.IDLE&&(this.state=y.LOADING,this.changed(),this.loader_(this.handleLoad_.bind(this)))}getImage(){return this.canvas_}}const Ie=_e;class be extends W{constructor(e){super(e),this.image_=null}getImage(){return this.image_?this.image_.getImage():null}prepareFrame(e){const t=e.layerStatesArray[e.layerIndex],n=e.pixelRatio,o=e.viewState,i=o.resolution,s=this.getLayer().getSource(),a=e.viewHints;let c=e.extent;if(t.extent!==void 0&&(c=Y(c,V(t.extent,o.projection))),!a[v.ANIMATING]&&!a[v.INTERACTING]&&!$(c))if(s){const l=o.projection,d=s.getImage(c,i,n,l);d&&(this.loadImage(d)?this.image_=d:d.getState()===y.EMPTY&&(this.image_=null))}else this.image_=null;return!!this.image_}getData(e){const t=this.frameState;if(!t)return null;const n=this.getLayer(),o=L(t.pixelToCoordinateTransform,e.slice()),i=n.getExtent();if(i&&!Z(i,o))return null;const s=this.image_.getExtent(),a=this.getImage(),c=N(s),l=Math.floor(a.width*((o[0]-s[0])/c));if(l<0||l>=a.width)return null;const d=S(s),p=Math.floor(a.height*((s[3]-o[1])/d));return p<0||p>=a.height?null:this.getImageData(a,l,p)}renderFrame(e,t){const n=this.image_,o=n.getExtent(),i=n.getResolution(),s=n.getPixelRatio(),a=e.layerStatesArray[e.layerIndex],c=e.pixelRatio,l=e.viewState,d=l.center,p=l.resolution,G=c*i/(p*s),w=e.extent,F=l.resolution,m=l.rotation,g=Math.round(N(w)/F*c),f=Math.round(S(w)/F*c);T(this.pixelTransform,e.size[0]/2,e.size[1]/2,1/c,1/c,m,-g/2,-f/2),K(this.inversePixelTransform,this.pixelTransform);const x=Q(this.pixelTransform);this.useContainer(t,x,this.getBackground(e));const u=this.context,R=u.canvas;R.width!=g||R.height!=f?(R.width=g,R.height=f):this.containerReused||u.clearRect(0,0,g,f);let C=!1,j=!0;if(a.extent){const P=V(a.extent,l.projection);j=X(P,e.extent),C=j&&!q(P,e.extent),C&&this.clipUnrotated(u,e,P)}const O=this.getImage(),_=T(this.tempTransform,g/2,f/2,G,G,0,s*(o[0]-d[0])/i,s*(d[1]-o[3])/i);this.renderedResolution=i*c/s;const k=O.width*_[0],J=O.height*_[3];if(this.getLayer().getSource().getInterpolate()||(u.imageSmoothingEnabled=!1),this.preRender(u,e),j&&k>=.5&&J>=.5){const P=_[4],U=_[5],E=a.opacity;let D;E!==1&&(D=u.globalAlpha,u.globalAlpha=E),u.drawImage(O,0,0,+O.width,+O.height,P,U,k,J),E!==1&&(u.globalAlpha=D)}return this.postRender(u,e),C&&u.restore(),u.imageSmoothingEnabled=!0,x!==R.style.transform&&(R.style.transform=x),this.container}}const ve=be;class Ce extends ae{constructor(){super()}getType(){return"json"}readFeature(e,t){return this.readFeatureFromObject(b(e),this.getReadOptions(e,t))}readFeatures(e,t){return this.readFeaturesFromObject(b(e),this.getReadOptions(e,t))}readFeatureFromObject(e,t){return h()}readFeaturesFromObject(e,t){return h()}readGeometry(e,t){return this.readGeometryFromObject(b(e),this.getReadOptions(e,t))}readGeometryFromObject(e,t){return h()}readProjection(e){return this.readProjectionFromObject(b(e))}readProjectionFromObject(e){return h()}writeFeature(e,t){return JSON.stringify(this.writeFeatureObject(e,t))}writeFeatureObject(e,t){return h()}writeFeatures(e,t){return JSON.stringify(this.writeFeaturesObject(e,t))}writeFeaturesObject(e,t){return h()}writeGeometry(e,t){return JSON.stringify(this.writeGeometryObject(e,t))}writeGeometryObject(e,t){return h()}}function b(r){if(typeof r=="string"){const e=JSON.parse(r);return e||null}return r!==null?r:null}const je=Ce;class Ee extends je{constructor(e){e=e||{},super(),this.dataProjection=I(e.dataProjection?e.dataProjection:"EPSG:4326"),e.featureProjection&&(this.defaultFeatureProjection=I(e.featureProjection)),this.geometryName_=e.geometryName,this.extractGeometryName_=e.extractGeometryName,this.supportedMediaTypes=["application/geo+json","application/vnd.geo+json"]}readFeatureFromObject(e,t){let n=null;e.type==="Feature"?n=e:n={type:"Feature",geometry:e,properties:null};const o=M(n.geometry,t),i=new ce;return this.geometryName_?i.setGeometryName(this.geometryName_):this.extractGeometryName_&&"geometry_name"in n!==void 0&&i.setGeometryName(n.geometry_name),i.setGeometry(o),"id"in n&&i.setId(n.id),n.properties&&i.setProperties(n.properties,!0),i}readFeaturesFromObject(e,t){const n=e;let o=null;if(n.type==="FeatureCollection"){const i=e;o=[];const s=i.features;for(let a=0,c=s.length;a<c;++a)o.push(this.readFeatureFromObject(s[a],t))}else o=[this.readFeatureFromObject(e,t)];return o}readGeometryFromObject(e,t){return M(e,t)}readProjectionFromObject(e){const t=e.crs;let n;return t?t.type=="name"?n=I(t.properties.name):t.type==="EPSG"?n=I("EPSG:"+t.properties.code):ee(!1,36):n=this.dataProjection,n}writeFeatureObject(e,t){t=this.adaptOptions(t);const n={type:"Feature",geometry:null,properties:null},o=e.getId();if(o!==void 0&&(n.id=o),!e.hasProperties())return n;const i=e.getProperties(),s=e.getGeometry();return s&&(n.geometry=A(s,t),delete i[e.getGeometryName()]),te(i)||(n.properties=i),n}writeFeaturesObject(e,t){t=this.adaptOptions(t);const n=[];for(let o=0,i=e.length;o<i;++o)n.push(this.writeFeatureObject(e[o],t));return{type:"FeatureCollection",features:n}}writeGeometryObject(e,t){return A(e,this.adaptOptions(t))}}function M(r,e){if(!r)return null;let t;switch(r.type){case"Point":{t=Ne(r);break}case"LineString":{t=Se(r);break}case"Polygon":{t=ke(r);break}case"MultiPoint":{t=Me(r);break}case"MultiLineString":{t=Te(r);break}case"MultiPolygon":{t=Ae(r);break}case"GeometryCollection":{t=Le(r);break}default:throw new Error("Unsupported GeoJSON type: "+r.type)}return B(t,!1,e)}function Le(r,e){const t=r.geometries.map(function(n){return M(n,e)});return new le(t)}function Ne(r){return new re(r.coordinates)}function Se(r){return new ue(r.coordinates)}function Te(r){return new de(r.coordinates)}function Me(r){return new ge(r.coordinates)}function Ae(r){return new he(r.coordinates)}function ke(r){return new ne(r.coordinates)}function A(r,e){r=B(r,!0,e);const t=r.getType();let n;switch(t){case"Point":{n=Be(r);break}case"LineString":{n=De(r);break}case"Polygon":{n=Ue(r,e);break}case"MultiPoint":{n=He(r);break}case"MultiLineString":{n=Ve(r);break}case"MultiPolygon":{n=$e(r,e);break}case"GeometryCollection":{n=Je(r,e);break}case"Circle":{n={type:"GeometryCollection",geometries:[]};break}default:throw new Error("Unsupported geometry type: "+t)}return n}function Je(r,e){return e=Object.assign({},e),delete e.featureProjection,{type:"GeometryCollection",geometries:r.getGeometriesArray().map(function(n){return A(n,e)})}}function De(r,e){return{type:"LineString",coordinates:r.getCoordinates()}}function Ve(r,e){return{type:"MultiLineString",coordinates:r.getCoordinates()}}function He(r,e){return{type:"MultiPoint",coordinates:r.getCoordinates()}}function $e(r,e){let t;return e&&(t=e.rightHanded),{type:"MultiPolygon",coordinates:r.getCoordinates(t)}}function Be(r,e){return{type:"Point",coordinates:r.getCoordinates()}}function Ue(r,e){let t;return e&&(t=e.rightHanded),{type:"Polygon",coordinates:r.getCoordinates(t)}}const ze=Ee;class We extends ve{constructor(e){super(e),this.vectorRenderer_=new me(e),this.layerImageRatio_=e.getImageRatio(),this.coordinateToVectorPixelTransform_=ie(),this.renderedPixelToCoordinateTransform_=null}disposeInternal(){this.vectorRenderer_.dispose(),super.disposeInternal()}getFeatures(e){if(!this.vectorRenderer_)return Promise.resolve([]);const t=L(this.coordinateToVectorPixelTransform_,L(this.renderedPixelToCoordinateTransform_,e.slice()));return this.vectorRenderer_.getFeatures(t)}handleFontsChanged(){this.vectorRenderer_.handleFontsChanged()}prepareFrame(e){const t=e.pixelRatio,n=e.viewState,o=n.resolution,i=e.viewHints,s=this.vectorRenderer_;let a=e.extent;this.layerImageRatio_!==1&&(a=a.slice(0),oe(a,this.layerImageRatio_));const c=N(a)/o,l=S(a)/o;if(!i[v.ANIMATING]&&!i[v.INTERACTING]&&!$(a)){s.useContainer(null,null);const d=s.context,p=e.layerStatesArray[e.layerIndex],G=Object.assign({},p,{opacity:1}),w=Object.assign({},e,{declutterTree:new ye(9),extent:a,size:[c,l],viewState:Object.assign({},e.viewState,{rotation:0}),layerStatesArray:[G],layerIndex:0});let F=!0;const m=new Ie(a,o,t,d.canvas,function(g){s.prepareFrame(w)&&s.replayGroupChanged&&(s.clipping=!1,s.renderFrame(w,null)&&(s.renderDeclutter(w),F=!1),g())});m.addEventListener(H.CHANGE,()=>{if(m.getState()!==y.LOADED)return;this.image_=F?null:m;const g=m.getResolution(),f=m.getPixelRatio(),x=g*t/f;this.renderedResolution=x,this.coordinateToVectorPixelTransform_=T(this.coordinateToVectorPixelTransform_,c/2,l/2,1/x,-1/x,0,-n.center[0],-n.center[1])}),m.load()}return this.image_&&(this.renderedPixelToCoordinateTransform_=e.pixelToCoordinateTransform.slice()),!!this.image_}preRender(){}postRender(){}renderDeclutter(){}forEachFeatureAtCoordinate(e,t,n,o,i){return this.vectorRenderer_?this.vectorRenderer_.forEachFeatureAtCoordinate(e,t,n,o,i):super.forEachFeatureAtCoordinate(e,t,n,o,i)}}const Ye=We;class Ze extends pe{constructor(e){e=e||{};const t=Object.assign({},e);delete t.imageRatio,super(t),this.imageRatio_=e.imageRatio!==void 0?e.imageRatio:1}getImageRatio(){return this.imageRatio_}createRenderer(){return new Ye(this)}}const Ke=Ze,tt=({features:r,stroke:e,fill:t,zIndex:n=1})=>{const o=se(),i=Fe(null);return Oe(()=>{i.current&&(o.removeLayer(i.current),i.current=null);const s=new fe({features:new ze().readFeatures(r)});return i.current=new Ke({source:s,style:new xe({fill:new we(t),stroke:new Re(e)})}),i.current.setZIndex(n),o.addLayer(i.current),()=>{i.current&&(o==null||o.removeLayer(i.current))}},[r,o,i,e,t]),null};export{tt as M};
//# sourceMappingURL=mapLayer-31a66076.js.map
