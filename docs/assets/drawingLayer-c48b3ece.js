import{B as X,C as $,V as O,F as k,L,M as K,a as N,b as q,c as Y,G as Z,f as J}from"./api-a5ac36e6.js";import"./compat.module-b1a3416f.js";import{S as Q,c as z,i as tt,f as et,d as st,r as it,P as nt,F as ot,T as rt,a as R,s as at,n as ht,b as G,e as ct,I as dt,E as lt,g as C,h as ft,j as ut,k as A,l as M,m as v,o as _t,p as V,t as gt,q as U,u as Ct,v as yt,w as pt,x as mt}from"./mapContainer-b5ef120c.js";import{o as kt}from"./jsxRuntime.module-8e7d8b33.js";import{_ as wt,p as Pt}from"./hooks.module-10a4f742.js";class Tt extends X{constructor(t){super(t)}createRenderer(){return new $(this)}}const j=Tt;class F extends Q{constructor(t,e,s){super(),s!==void 0&&e===void 0?this.setFlatCoordinates(s,t):(e=e||0,this.setCenterAndRadius(t,e,s))}clone(){const t=new F(this.flatCoordinates.slice(),void 0,this.layout);return t.applyProperties(this),t}closestPointXY(t,e,s,i){const n=this.flatCoordinates,o=t-n[0],r=e-n[1],a=o*o+r*r;if(a<i){if(a===0)for(let c=0;c<this.stride;++c)s[c]=n[c];else{const c=this.getRadius()/Math.sqrt(a);s[0]=n[0]+c*o,s[1]=n[1]+c*r;for(let l=2;l<this.stride;++l)s[l]=n[l]}return s.length=this.stride,a}return i}containsXY(t,e){const s=this.flatCoordinates,i=t-s[0],n=e-s[1];return i*i+n*n<=this.getRadiusSquared_()}getCenter(){return this.flatCoordinates.slice(0,this.stride)}computeExtent(t){const e=this.flatCoordinates,s=e[this.stride]-e[0];return z(e[0]-s,e[1]-s,e[0]+s,e[1]+s,t)}getRadius(){return Math.sqrt(this.getRadiusSquared_())}getRadiusSquared_(){const t=this.flatCoordinates[this.stride]-this.flatCoordinates[0],e=this.flatCoordinates[this.stride+1]-this.flatCoordinates[1];return t*t+e*e}getType(){return"Circle"}intersectsExtent(t){const e=this.getExtent();if(tt(t,e)){const s=this.getCenter();return t[0]<=s[0]&&t[2]>=s[0]||t[1]<=s[1]&&t[3]>=s[1]?!0:et(t,this.intersectsCoordinate.bind(this))}return!1}setCenter(t){const e=this.stride,s=this.flatCoordinates[e]-this.flatCoordinates[0],i=t.slice();i[e]=i[0]+s;for(let n=1;n<e;++n)i[e+n]=t[n];this.setFlatCoordinates(this.layout,i),this.changed()}setCenterAndRadius(t,e,s){this.setLayout(s,t,0),this.flatCoordinates||(this.flatCoordinates=[]);const i=this.flatCoordinates;let n=st(i,0,t,this.stride);i[n++]=i[0]+e;for(let o=1,r=this.stride;o<r;++o)i[n++]=i[o];i.length=n,this.changed()}getCoordinates(){return null}setCoordinates(t,e){}setRadius(t){this.flatCoordinates[this.stride]=this.flatCoordinates[0]+t,this.changed()}rotate(t,e){const s=this.getCenter(),i=this.getStride();this.setCenter(it(s,0,s.length,i,t,e,s)),this.changed()}}F.prototype.transform;const xt=F,w={DRAWSTART:"drawstart",DRAWEND:"drawend",DRAWABORT:"drawabort"};class P extends _t{constructor(t,e){super(t),this.feature=e}}function Dt(h,t){const e=[];for(let s=0;s<t.length;++s){const n=t[s].getGeometry();b(h,n,e)}return e}function T(h,t){return U(h[0],h[1],t[0],t[1])}function p(h,t){const e=h.length;return t<0?h[t+e]:t>=e?h[t-e]:h[t]}function x(h,t,e){let s,i;t<e?(s=t,i=e):(s=e,i=t);const n=Math.ceil(s),o=Math.floor(i);if(n>o){const a=m(h,s),c=m(h,i);return T(a,c)}let r=0;if(s<n){const a=m(h,s),c=p(h,n);r+=T(a,c)}if(o<i){const a=p(h,o),c=m(h,i);r+=T(a,c)}for(let a=n;a<o-1;++a){const c=p(h,a),l=p(h,a+1);r+=T(c,l)}return r}function b(h,t,e){if(t instanceof L){D(h,t.getCoordinates(),!1,e);return}if(t instanceof N){const s=t.getCoordinates();for(let i=0,n=s.length;i<n;++i)D(h,s[i],!1,e);return}if(t instanceof V){const s=t.getCoordinates();for(let i=0,n=s.length;i<n;++i)D(h,s[i],!0,e);return}if(t instanceof q){const s=t.getCoordinates();for(let i=0,n=s.length;i<n;++i){const o=s[i];for(let r=0,a=o.length;r<a;++r)D(h,o[r],!0,e)}return}if(t instanceof Z){const s=t.getGeometries();for(let i=0;i<s.length;++i)b(h,s[i],e);return}}const E={index:-1,endIndex:NaN};function Lt(h,t,e,s){const i=h[0],n=h[1];let o=1/0,r=-1,a=NaN;for(let d=0;d<t.targets.length;++d){const f=t.targets[d],u=f.coordinates;let _=1/0,g;for(let y=0;y<u.length-1;++y){const H=u[y],B=u[y+1],S=W(i,n,H,B);S.squaredDistance<_&&(_=S.squaredDistance,g=y+S.along)}_<o&&(o=_,f.ring&&t.targetIndex===d&&(f.endIndex>f.startIndex?g<f.startIndex&&(g+=u.length):f.endIndex<f.startIndex&&g>f.startIndex&&(g-=u.length)),a=g,r=d)}const c=t.targets[r];let l=c.ring;if(t.targetIndex===r&&l){const d=m(c.coordinates,a),f=e.getPixelFromCoordinate(d);A(f,t.startPx)>s&&(l=!1)}if(l){const d=c.coordinates,f=d.length,u=c.startIndex,_=a;if(u<_){const g=x(d,u,_);x(d,u,_-f)<g&&(a-=f)}else{const g=x(d,u,_);x(d,u,_+f)<g&&(a+=f)}}return E.index=r,E.endIndex=a,E}function D(h,t,e,s){const i=h[0],n=h[1];for(let o=0,r=t.length-1;o<r;++o){const a=t[o],c=t[o+1],l=W(i,n,a,c);if(l.squaredDistance===0){const d=o+l.along;s.push({coordinates:t,ring:e,startIndex:d,endIndex:d});return}}}const I={along:0,squaredDistance:0};function W(h,t,e,s){const i=e[0],n=e[1],o=s[0],r=s[1],a=o-i,c=r-n;let l=0,d=i,f=n;return(a!==0||c!==0)&&(l=pt(((h-i)*a+(t-n)*c)/(a*a+c*c),0,1),d+=a*l,f+=c*l),I.along=l,I.squaredDistance=gt(U(h,t,d,f),10),I}function m(h,t){const e=h.length;let s=Math.floor(t);const i=t-s;s>=e?s-=e:s<0&&(s+=e);let n=s+1;n>=e&&(n-=e);const o=h[s],r=o[0],a=o[1],c=h[n],l=c[0]-r,d=c[1]-a;return[r+l*i,a+d*i]}class Ft extends nt{constructor(t){const e=t;e.stopDown||(e.stopDown=ot),super(e),this.on,this.once,this.un,this.shouldHandle_=!1,this.downPx_=null,this.downTimeout_,this.lastDragTime_,this.pointerType_,this.freehand_=!1,this.source_=t.source?t.source:null,this.features_=t.features?t.features:null,this.snapTolerance_=t.snapTolerance?t.snapTolerance:12,this.type_=t.type,this.mode_=Mt(this.type_),this.stopClick_=!!t.stopClick,this.minPoints_=t.minPoints?t.minPoints:this.mode_==="Polygon"?3:2,this.maxPoints_=this.mode_==="Circle"?2:t.maxPoints?t.maxPoints:1/0,this.finishCondition_=t.finishCondition?t.finishCondition:rt,this.geometryLayout_=t.geometryLayout?t.geometryLayout:"XY";let s=t.geometryFunction;if(!s){const i=this.mode_;if(i==="Circle")s=function(n,o,r){const a=o||new xt([NaN,NaN]),c=R(n[0],r),l=at(c,R(n[n.length-1],r));a.setCenterAndRadius(c,Math.sqrt(l),this.geometryLayout_);const d=Ct();return d&&a.transform(r,d),a};else{let n;i==="Point"?n=M:i==="LineString"?n=L:i==="Polygon"&&(n=V),s=function(o,r,a){return r?i==="Polygon"?o[0].length?r.setCoordinates([o[0].concat([o[0][0]])],this.geometryLayout_):r.setCoordinates([],this.geometryLayout_):r.setCoordinates(o,this.geometryLayout_):r=new n(o,this.geometryLayout_),r}}}this.geometryFunction_=s,this.dragVertexDelay_=t.dragVertexDelay!==void 0?t.dragVertexDelay:500,this.finishCoordinate_=null,this.sketchFeature_=null,this.sketchPoint_=null,this.sketchCoords_=null,this.sketchLine_=null,this.sketchLineCoords_=null,this.squaredClickTolerance_=t.clickTolerance?t.clickTolerance*t.clickTolerance:36,this.overlay_=new j({source:new O({useSpatialIndex:!1,wrapX:t.wrapX?t.wrapX:!1}),style:t.style?t.style:St(),updateWhileInteracting:!0}),this.geometryName_=t.geometryName,this.condition_=t.condition?t.condition:ht,this.freehandCondition_,t.freehand?this.freehandCondition_=G:this.freehandCondition_=t.freehandCondition?t.freehandCondition:ct,this.traceCondition_,this.setTrace(t.trace||!1),this.traceState_={active:!1},this.traceSource_=t.traceSource||t.source||null,this.addChangeListener(dt.ACTIVE,this.updateState_)}setTrace(t){let e;t?t===!0?e=G:e=t:e=yt,this.traceCondition_=e}setMap(t){super.setMap(t),this.updateState_()}getOverlay(){return this.overlay_}handleEvent(t){t.originalEvent.type===lt.CONTEXTMENU&&t.originalEvent.preventDefault(),this.freehand_=this.mode_!=="Point"&&this.freehandCondition_(t);let e=t.type===C.POINTERMOVE,s=!0;return!this.freehand_&&this.lastDragTime_&&t.type===C.POINTERDRAG&&(Date.now()-this.lastDragTime_>=this.dragVertexDelay_?(this.downPx_=t.pixel,this.shouldHandle_=!this.freehand_,e=!0):this.lastDragTime_=void 0,this.shouldHandle_&&this.downTimeout_!==void 0&&(clearTimeout(this.downTimeout_),this.downTimeout_=void 0)),this.freehand_&&t.type===C.POINTERDRAG&&this.sketchFeature_!==null?(this.addToDrawing_(t.coordinate),s=!1):this.freehand_&&t.type===C.POINTERDOWN?s=!1:e&&this.getPointerCount()<2?(s=t.type===C.POINTERMOVE,s&&this.freehand_?(this.handlePointerMove_(t),this.shouldHandle_&&t.originalEvent.preventDefault()):(t.originalEvent.pointerType==="mouse"||t.type===C.POINTERDRAG&&this.downTimeout_===void 0)&&this.handlePointerMove_(t)):t.type===C.DBLCLICK&&(s=!1),super.handleEvent(t)&&s}handleDownEvent(t){return this.shouldHandle_=!this.freehand_,this.freehand_?(this.downPx_=t.pixel,this.finishCoordinate_||this.startDrawing_(t.coordinate),!0):this.condition_(t)?(this.lastDragTime_=Date.now(),this.downTimeout_=setTimeout(()=>{this.handlePointerMove_(new ft(C.POINTERMOVE,t.map,t.originalEvent,!1,t.frameState))},this.dragVertexDelay_),this.downPx_=t.pixel,!0):(this.lastDragTime_=void 0,!1)}deactivateTrace_(){this.traceState_={active:!1}}toggleTraceState_(t){if(!this.traceSource_||!this.traceCondition_(t))return;if(this.traceState_.active){this.deactivateTrace_();return}const e=this.getMap(),s=e.getCoordinateFromPixel([t.pixel[0]-this.snapTolerance_,t.pixel[1]+this.snapTolerance_]),i=e.getCoordinateFromPixel([t.pixel[0]+this.snapTolerance_,t.pixel[1]-this.snapTolerance_]),n=ut([s,i]),o=this.traceSource_.getFeaturesInExtent(n);if(o.length===0)return;const r=Dt(t.coordinate,o);r.length&&(this.traceState_={active:!0,startPx:t.pixel.slice(),targets:r,targetIndex:-1})}addOrRemoveTracedCoordinates_(t,e){const s=t.startIndex<=t.endIndex,i=t.startIndex<=e;s===i?s&&e>t.endIndex||!s&&e<t.endIndex?this.addTracedCoordinates_(t,t.endIndex,e):(s&&e<t.endIndex||!s&&e>t.endIndex)&&this.removeTracedCoordinates_(e,t.endIndex):(this.removeTracedCoordinates_(t.startIndex,t.endIndex),this.addTracedCoordinates_(t,t.startIndex,e))}removeTracedCoordinates_(t,e){if(t===e)return;let s=0;if(t<e){const i=Math.ceil(t);let n=Math.floor(e);n===e&&(n-=1),s=n-i+1}else{const i=Math.floor(t);let n=Math.ceil(e);n===e&&(n+=1),s=i-n+1}s>0&&this.removeLastPoints_(s)}addTracedCoordinates_(t,e,s){if(e===s)return;const i=[];if(e<s){const n=Math.ceil(e);let o=Math.floor(s);o===s&&(o-=1);for(let r=n;r<=o;++r)i.push(p(t.coordinates,r))}else{const n=Math.floor(e);let o=Math.ceil(s);o===s&&(o+=1);for(let r=n;r>=o;--r)i.push(p(t.coordinates,r))}i.length&&this.appendCoordinates(i)}updateTrace_(t){const e=this.traceState_;if(!e.active||e.targetIndex===-1&&A(e.startPx,t.pixel)<this.snapTolerance_)return;const s=Lt(t.coordinate,e,this.getMap(),this.snapTolerance_);if(e.targetIndex!==s.index){if(e.targetIndex!==-1){const a=e.targets[e.targetIndex];this.removeTracedCoordinates_(a.startIndex,a.endIndex)}const r=e.targets[s.index];this.addTracedCoordinates_(r,r.startIndex,s.endIndex)}else{const r=e.targets[e.targetIndex];this.addOrRemoveTracedCoordinates_(r,s.endIndex)}e.targetIndex=s.index;const i=e.targets[e.targetIndex];i.endIndex=s.endIndex;const n=m(i.coordinates,i.endIndex),o=this.getMap().getPixelFromCoordinate(n);t.coordinate=n,t.pixel=[Math.round(o[0]),Math.round(o[1])]}handleUpEvent(t){let e=!0;if(this.getPointerCount()===0){this.downTimeout_&&(clearTimeout(this.downTimeout_),this.downTimeout_=void 0),this.handlePointerMove_(t);const s=this.traceState_.active;if(this.toggleTraceState_(t),this.shouldHandle_){const i=!this.finishCoordinate_;i&&this.startDrawing_(t.coordinate),!i&&this.freehand_?this.finishDrawing():!this.freehand_&&(!i||this.mode_==="Point")&&(this.atFinish_(t.pixel,s)?this.finishCondition_(t)&&this.finishDrawing():this.addToDrawing_(t.coordinate)),e=!1}else this.freehand_&&this.abortDrawing()}return!e&&this.stopClick_&&t.preventDefault(),e}handlePointerMove_(t){if(this.pointerType_=t.originalEvent.pointerType,this.downPx_&&(!this.freehand_&&this.shouldHandle_||this.freehand_&&!this.shouldHandle_)){const e=this.downPx_,s=t.pixel,i=e[0]-s[0],n=e[1]-s[1],o=i*i+n*n;if(this.shouldHandle_=this.freehand_?o>this.squaredClickTolerance_:o<=this.squaredClickTolerance_,!this.shouldHandle_)return}if(!this.finishCoordinate_){this.createOrUpdateSketchPoint_(t.coordinate.slice());return}this.updateTrace_(t),this.modifyDrawing_(t.coordinate)}atFinish_(t,e){let s=!1;if(this.sketchFeature_){let i=!1,n=[this.finishCoordinate_];const o=this.mode_;if(o==="Point")s=!0;else if(o==="Circle")s=this.sketchCoords_.length===2;else if(o==="LineString")i=!e&&this.sketchCoords_.length>this.minPoints_;else if(o==="Polygon"){const r=this.sketchCoords_;i=r[0].length>this.minPoints_,n=[r[0][0],r[0][r[0].length-2]],e?n=[r[0][0]]:n=[r[0][0],r[0][r[0].length-2]]}if(i){const r=this.getMap();for(let a=0,c=n.length;a<c;a++){const l=n[a],d=r.getPixelFromCoordinate(l),f=t[0]-d[0],u=t[1]-d[1],_=this.freehand_?1:this.snapTolerance_;if(s=Math.sqrt(f*f+u*u)<=_,s){this.finishCoordinate_=l;break}}}}return s}createOrUpdateSketchPoint_(t){this.sketchPoint_?this.sketchPoint_.getGeometry().setCoordinates(t):(this.sketchPoint_=new k(new M(t)),this.updateSketchFeatures_())}createOrUpdateCustomSketchLine_(t){this.sketchLine_||(this.sketchLine_=new k);const e=t.getLinearRing(0);let s=this.sketchLine_.getGeometry();s?(s.setFlatCoordinates(e.getLayout(),e.getFlatCoordinates()),s.changed()):(s=new L(e.getFlatCoordinates(),e.getLayout()),this.sketchLine_.setGeometry(s))}startDrawing_(t){const e=this.getMap().getView().getProjection(),s=v(this.geometryLayout_);for(;t.length<s;)t.push(0);this.finishCoordinate_=t,this.mode_==="Point"?this.sketchCoords_=t.slice():this.mode_==="Polygon"?(this.sketchCoords_=[[t.slice(),t.slice()]],this.sketchLineCoords_=this.sketchCoords_[0]):this.sketchCoords_=[t.slice(),t.slice()],this.sketchLineCoords_&&(this.sketchLine_=new k(new L(this.sketchLineCoords_)));const i=this.geometryFunction_(this.sketchCoords_,void 0,e);this.sketchFeature_=new k,this.geometryName_&&this.sketchFeature_.setGeometryName(this.geometryName_),this.sketchFeature_.setGeometry(i),this.updateSketchFeatures_(),this.dispatchEvent(new P(w.DRAWSTART,this.sketchFeature_))}modifyDrawing_(t){const e=this.getMap(),s=this.sketchFeature_.getGeometry(),i=e.getView().getProjection(),n=v(this.geometryLayout_);let o,r;for(;t.length<n;)t.push(0);this.mode_==="Point"?r=this.sketchCoords_:this.mode_==="Polygon"?(o=this.sketchCoords_[0],r=o[o.length-1],this.atFinish_(e.getPixelFromCoordinate(t))&&(t=this.finishCoordinate_.slice())):(o=this.sketchCoords_,r=o[o.length-1]),r[0]=t[0],r[1]=t[1],this.geometryFunction_(this.sketchCoords_,s,i),this.sketchPoint_&&this.sketchPoint_.getGeometry().setCoordinates(t),s.getType()==="Polygon"&&this.mode_!=="Polygon"?this.createOrUpdateCustomSketchLine_(s):this.sketchLineCoords_&&this.sketchLine_.getGeometry().setCoordinates(this.sketchLineCoords_),this.updateSketchFeatures_()}addToDrawing_(t){const e=this.sketchFeature_.getGeometry(),s=this.getMap().getView().getProjection();let i,n;const o=this.mode_;o==="LineString"||o==="Circle"?(this.finishCoordinate_=t.slice(),n=this.sketchCoords_,n.length>=this.maxPoints_&&(this.freehand_?n.pop():i=!0),n.push(t.slice()),this.geometryFunction_(n,e,s)):o==="Polygon"&&(n=this.sketchCoords_[0],n.length>=this.maxPoints_&&(this.freehand_?n.pop():i=!0),n.push(t.slice()),i&&(this.finishCoordinate_=n[0]),this.geometryFunction_(this.sketchCoords_,e,s)),this.createOrUpdateSketchPoint_(t.slice()),this.updateSketchFeatures_(),i&&this.finishDrawing()}removeLastPoints_(t){if(!this.sketchFeature_)return;const e=this.sketchFeature_.getGeometry(),s=this.getMap().getView().getProjection(),i=this.mode_;for(let n=0;n<t;++n){let o;if(i==="LineString"||i==="Circle"){if(o=this.sketchCoords_,o.splice(-2,1),o.length>=2){this.finishCoordinate_=o[o.length-2].slice();const r=this.finishCoordinate_.slice();o[o.length-1]=r,this.createOrUpdateSketchPoint_(r)}this.geometryFunction_(o,e,s),e.getType()==="Polygon"&&this.sketchLine_&&this.createOrUpdateCustomSketchLine_(e)}else if(i==="Polygon"){o=this.sketchCoords_[0],o.splice(-2,1);const r=this.sketchLine_.getGeometry();if(o.length>=2){const a=o[o.length-2].slice();o[o.length-1]=a,this.createOrUpdateSketchPoint_(a)}r.setCoordinates(o),this.geometryFunction_(this.sketchCoords_,e,s)}if(o.length===1){this.abortDrawing();break}}this.updateSketchFeatures_()}removeLastPoint(){this.removeLastPoints_(1)}finishDrawing(){const t=this.abortDrawing_();if(!t)return;let e=this.sketchCoords_;const s=t.getGeometry(),i=this.getMap().getView().getProjection();this.mode_==="LineString"?(e.pop(),this.geometryFunction_(e,s,i)):this.mode_==="Polygon"&&(e[0].pop(),this.geometryFunction_(e,s,i),e=s.getCoordinates()),this.type_==="MultiPoint"?t.setGeometry(new K([e])):this.type_==="MultiLineString"?t.setGeometry(new N([e])):this.type_==="MultiPolygon"&&t.setGeometry(new q([e])),this.dispatchEvent(new P(w.DRAWEND,t)),this.features_&&this.features_.push(t),this.source_&&this.source_.addFeature(t)}abortDrawing_(){this.finishCoordinate_=null;const t=this.sketchFeature_;return this.sketchFeature_=null,this.sketchPoint_=null,this.sketchLine_=null,this.overlay_.getSource().clear(!0),this.deactivateTrace_(),t}abortDrawing(){const t=this.abortDrawing_();t&&this.dispatchEvent(new P(w.DRAWABORT,t))}appendCoordinates(t){const e=this.mode_,s=!this.sketchFeature_;s&&this.startDrawing_(t[0]);let i;if(e==="LineString"||e==="Circle")i=this.sketchCoords_;else if(e==="Polygon")i=this.sketchCoords_&&this.sketchCoords_.length?this.sketchCoords_[0]:[];else return;s&&i.shift(),i.pop();for(let o=0;o<t.length;o++)this.addToDrawing_(t[o]);const n=t[t.length-1];this.addToDrawing_(n),this.modifyDrawing_(n)}extend(t){const s=t.getGeometry();this.sketchFeature_=t,this.sketchCoords_=s.getCoordinates();const i=this.sketchCoords_[this.sketchCoords_.length-1];this.finishCoordinate_=i.slice(),this.sketchCoords_.push(i.slice()),this.sketchPoint_=new k(new M(i)),this.updateSketchFeatures_(),this.dispatchEvent(new P(w.DRAWSTART,this.sketchFeature_))}updateSketchFeatures_(){const t=[];this.sketchFeature_&&t.push(this.sketchFeature_),this.sketchLine_&&t.push(this.sketchLine_),this.sketchPoint_&&t.push(this.sketchPoint_);const e=this.overlay_.getSource();e.clear(!0),e.addFeatures(t)}updateState_(){const t=this.getMap(),e=this.getActive();(!t||!e)&&this.abortDrawing(),this.overlay_.setMap(e?t:null)}}function St(){const h=Y();return function(t,e){return h[t.getGeometry().getType()]}}function Mt(h){switch(h){case"Point":case"MultiPoint":return"Point";case"LineString":case"MultiLineString":return"LineString";case"Polygon":case"MultiPolygon":return"Polygon";case"Circle":return"Circle";default:throw new Error("Invalid type: "+h)}}const Et=Ft,Nt=({zIndex:h=2,strokeColor:t="#ffcc33",fillcolor:e="rgba(255, 255, 255, 0.2)",strokeWidth:s=2,circleRadius:i=7,circleFillColor:n="#ffcc33"})=>{const o=mt(),r=new O,a=new j({source:r,style:{"fill-color":e,"stroke-color":t,"stroke-width":s,"circle-radius":i,"circle-fill-color":n}}),c=wt(null);return Pt(()=>{c.current&&(o.addInteraction(new Et({source:r,type:"Polygon"})),a.setZIndex(h),o.addLayer(a),r.on("addfeature",async function(l){let d=l.feature,f=d==null?void 0:d.getGeometry();await J(f)}))},[c,h]),kt("div",{ref:c})};export{Nt as D};
//# sourceMappingURL=drawingLayer-c48b3ece.js.map
