import{i as W,a as z,r as J,n as b,t as X,g as Y,c as N,b as p,d as T,e as j,S as _,h as B,p as D,m as K,f as E,j as I,o as H,k as Q,l as Z,q as A,s as G}from"./MapComponent-fa6d55dc.js";const U=console;class L{destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),W(this.cacheTime)&&(this.gcTimeout=setTimeout(()=>{this.optionalRemove()},this.cacheTime))}updateCacheTime(t){this.cacheTime=Math.max(this.cacheTime||0,t??(z?1/0:5*60*1e3))}clearGcTimeout(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)}}class $ extends L{constructor(t){super(),this.abortSignalConsumed=!1,this.defaultOptions=t.defaultOptions,this.setOptions(t.options),this.observers=[],this.cache=t.cache,this.logger=t.logger||U,this.queryKey=t.queryKey,this.queryHash=t.queryHash,this.initialState=t.state||tt(this.options),this.state=this.initialState,this.scheduleGc()}get meta(){return this.options.meta}setOptions(t){this.options={...this.defaultOptions,...t},this.updateCacheTime(this.options.cacheTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&this.cache.remove(this)}setData(t,e){const s=J(this.state.data,t,this.options);return this.dispatch({data:s,type:"success",dataUpdatedAt:e==null?void 0:e.updatedAt,manual:e==null?void 0:e.manual}),s}setState(t,e){this.dispatch({type:"setState",state:t,setStateOptions:e})}cancel(t){var e;const s=this.promise;return(e=this.retryer)==null||e.cancel(t),s?s.then(b).catch(b):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.initialState)}isActive(){return this.observers.some(t=>t.options.enabled!==!1)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(t=>t.getCurrentResult().isStale)}isStaleByTime(t=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!X(this.state.dataUpdatedAt,t)}onFocus(){var t;const e=this.observers.find(s=>s.shouldFetchOnWindowFocus());e&&e.refetch({cancelRefetch:!1}),(t=this.retryer)==null||t.continue()}onOnline(){var t;const e=this.observers.find(s=>s.shouldFetchOnReconnect());e&&e.refetch({cancelRefetch:!1}),(t=this.retryer)==null||t.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(e=>e!==t),this.observers.length||(this.retryer&&(this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.scheduleGc()),this.cache.notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.dispatch({type:"invalidate"})}fetch(t,e){var s,i;if(this.state.fetchStatus!=="idle"){if(this.state.dataUpdatedAt&&e!=null&&e.cancelRefetch)this.cancel({silent:!0});else if(this.promise){var r;return(r=this.retryer)==null||r.continueRetry(),this.promise}}if(t&&this.setOptions(t),!this.options.queryFn){const h=this.observers.find(y=>y.options.queryFn);h&&this.setOptions(h.options)}Array.isArray(this.options.queryKey);const n=Y(),o={queryKey:this.queryKey,pageParam:void 0,meta:this.meta},d=h=>{Object.defineProperty(h,"signal",{enumerable:!0,get:()=>{if(n)return this.abortSignalConsumed=!0,n.signal}})};d(o);const m=()=>this.options.queryFn?(this.abortSignalConsumed=!1,this.options.queryFn(o)):Promise.reject("Missing queryFn for queryKey '"+this.options.queryHash+"'"),v={fetchOptions:e,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:m};if(d(v),(s=this.options.behavior)==null||s.onFetch(v),this.revertState=this.state,this.state.fetchStatus==="idle"||this.state.fetchMeta!==((i=v.fetchOptions)==null?void 0:i.meta)){var M;this.dispatch({type:"fetch",meta:(M=v.fetchOptions)==null?void 0:M.meta})}const f=h=>{if(T(h)&&h.silent||this.dispatch({type:"error",error:h}),!T(h)){var y,g,q,C;(y=(g=this.cache.config).onError)==null||y.call(g,h,this),(q=(C=this.cache.config).onSettled)==null||q.call(C,this.state.data,h,this)}this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.retryer=N({fn:v.fetchFn,abort:n==null?void 0:n.abort.bind(n),onSuccess:h=>{var y,g,q,C;if(typeof h>"u"){f(new Error(this.queryHash+" data is undefined"));return}this.setData(h),(y=(g=this.cache.config).onSuccess)==null||y.call(g,h,this),(q=(C=this.cache.config).onSettled)==null||q.call(C,h,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:f,onFail:(h,y)=>{this.dispatch({type:"failed",failureCount:h,error:y})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:v.options.retry,retryDelay:v.options.retryDelay,networkMode:v.options.networkMode}),this.promise=this.retryer.promise,this.promise}dispatch(t){const e=s=>{var i,r;switch(t.type){case"failed":return{...s,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...s,fetchStatus:"paused"};case"continue":return{...s,fetchStatus:"fetching"};case"fetch":return{...s,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:(i=t.meta)!=null?i:null,fetchStatus:j(this.options.networkMode)?"fetching":"paused",...!s.dataUpdatedAt&&{error:null,status:"loading"}};case"success":return{...s,data:t.data,dataUpdateCount:s.dataUpdateCount+1,dataUpdatedAt:(r=t.dataUpdatedAt)!=null?r:Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const n=t.error;return T(n)&&n.revert&&this.revertState?{...this.revertState}:{...s,error:n,errorUpdateCount:s.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:s.fetchFailureCount+1,fetchFailureReason:n,fetchStatus:"idle",status:"error"};case"invalidate":return{...s,isInvalidated:!0};case"setState":return{...s,...t.state}}};this.state=e(this.state),p.batch(()=>{this.observers.forEach(s=>{s.onQueryUpdate(t)}),this.cache.notify({query:this,type:"updated",action:t})})}}function tt(a){const t=typeof a.initialData=="function"?a.initialData():a.initialData,e=typeof t<"u",s=e?typeof a.initialDataUpdatedAt=="function"?a.initialDataUpdatedAt():a.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:e?s??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:e?"success":"loading",fetchStatus:"idle"}}class et extends _{constructor(t){super(),this.config=t||{},this.queries=[],this.queriesMap={}}build(t,e,s){var i;const r=e.queryKey,n=(i=e.queryHash)!=null?i:B(r,e);let o=this.get(n);return o||(o=new $({cache:this,logger:t.getLogger(),queryKey:r,queryHash:n,options:t.defaultQueryOptions(e),state:s,defaultOptions:t.getQueryDefaults(r)}),this.add(o)),o}add(t){this.queriesMap[t.queryHash]||(this.queriesMap[t.queryHash]=t,this.queries.push(t),this.notify({type:"added",query:t}))}remove(t){const e=this.queriesMap[t.queryHash];e&&(t.destroy(),this.queries=this.queries.filter(s=>s!==t),e===t&&delete this.queriesMap[t.queryHash],this.notify({type:"removed",query:t}))}clear(){p.batch(()=>{this.queries.forEach(t=>{this.remove(t)})})}get(t){return this.queriesMap[t]}getAll(){return this.queries}find(t,e){const[s]=D(t,e);return typeof s.exact>"u"&&(s.exact=!0),this.queries.find(i=>K(s,i))}findAll(t,e){const[s]=D(t,e);return Object.keys(s).length>0?this.queries.filter(i=>K(s,i)):this.queries}notify(t){p.batch(()=>{this.listeners.forEach(({listener:e})=>{e(t)})})}onFocus(){p.batch(()=>{this.queries.forEach(t=>{t.onFocus()})})}onOnline(){p.batch(()=>{this.queries.forEach(t=>{t.onOnline()})})}}class st extends L{constructor(t){super(),this.defaultOptions=t.defaultOptions,this.mutationId=t.mutationId,this.mutationCache=t.mutationCache,this.logger=t.logger||U,this.observers=[],this.state=t.state||it(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options={...this.defaultOptions,...t},this.updateCacheTime(this.options.cacheTime)}get meta(){return this.options.meta}setState(t){this.dispatch({type:"setState",state:t})}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),this.mutationCache.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.observers=this.observers.filter(e=>e!==t),this.scheduleGc(),this.mutationCache.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.observers.length||(this.state.status==="loading"?this.scheduleGc():this.mutationCache.remove(this))}continue(){var t,e;return(t=(e=this.retryer)==null?void 0:e.continue())!=null?t:this.execute()}async execute(){const t=()=>{var u;return this.retryer=N({fn:()=>this.options.mutationFn?this.options.mutationFn(this.state.variables):Promise.reject("No mutationFn found"),onFail:(c,O)=>{this.dispatch({type:"failed",failureCount:c,error:O})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:(u=this.options.retry)!=null?u:0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.retryer.promise},e=this.state.status==="loading";try{var s,i,r,n,o,d,m,v;if(!e){var M,f,h,y;this.dispatch({type:"loading",variables:this.options.variables}),await((M=(f=this.mutationCache.config).onMutate)==null?void 0:M.call(f,this.state.variables,this));const c=await((h=(y=this.options).onMutate)==null?void 0:h.call(y,this.state.variables));c!==this.state.context&&this.dispatch({type:"loading",context:c,variables:this.state.variables})}const u=await t();return await((s=(i=this.mutationCache.config).onSuccess)==null?void 0:s.call(i,u,this.state.variables,this.state.context,this)),await((r=(n=this.options).onSuccess)==null?void 0:r.call(n,u,this.state.variables,this.state.context)),await((o=(d=this.mutationCache.config).onSettled)==null?void 0:o.call(d,u,null,this.state.variables,this.state.context,this)),await((m=(v=this.options).onSettled)==null?void 0:m.call(v,u,null,this.state.variables,this.state.context)),this.dispatch({type:"success",data:u}),u}catch(u){try{var g,q,C,S,F,P,w,l;throw await((g=(q=this.mutationCache.config).onError)==null?void 0:g.call(q,u,this.state.variables,this.state.context,this)),await((C=(S=this.options).onError)==null?void 0:C.call(S,u,this.state.variables,this.state.context)),await((F=(P=this.mutationCache.config).onSettled)==null?void 0:F.call(P,void 0,u,this.state.variables,this.state.context,this)),await((w=(l=this.options).onSettled)==null?void 0:w.call(l,void 0,u,this.state.variables,this.state.context)),u}finally{this.dispatch({type:"error",error:u})}}}dispatch(t){const e=s=>{switch(t.type){case"failed":return{...s,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...s,isPaused:!0};case"continue":return{...s,isPaused:!1};case"loading":return{...s,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!j(this.options.networkMode),status:"loading",variables:t.variables};case"success":return{...s,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...s,data:void 0,error:t.error,failureCount:s.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"};case"setState":return{...s,...t.state}}};this.state=e(this.state),p.batch(()=>{this.observers.forEach(s=>{s.onMutationUpdate(t)}),this.mutationCache.notify({mutation:this,type:"updated",action:t})})}}function it(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0}}class rt extends _{constructor(t){super(),this.config=t||{},this.mutations=[],this.mutationId=0}build(t,e,s){const i=new st({mutationCache:this,logger:t.getLogger(),mutationId:++this.mutationId,options:t.defaultMutationOptions(e),state:s,defaultOptions:e.mutationKey?t.getMutationDefaults(e.mutationKey):void 0});return this.add(i),i}add(t){this.mutations.push(t),this.notify({type:"added",mutation:t})}remove(t){this.mutations=this.mutations.filter(e=>e!==t),this.notify({type:"removed",mutation:t})}clear(){p.batch(()=>{this.mutations.forEach(t=>{this.remove(t)})})}getAll(){return this.mutations}find(t){return typeof t.exact>"u"&&(t.exact=!0),this.mutations.find(e=>E(t,e))}findAll(t){return this.mutations.filter(e=>E(t,e))}notify(t){p.batch(()=>{this.listeners.forEach(({listener:e})=>{e(t)})})}resumePausedMutations(){var t;return this.resuming=((t=this.resuming)!=null?t:Promise.resolve()).then(()=>{const e=this.mutations.filter(s=>s.state.isPaused);return p.batch(()=>e.reduce((s,i)=>s.then(()=>i.continue().catch(b)),Promise.resolve()))}).then(()=>{this.resuming=void 0}),this.resuming}}function at(){return{onFetch:a=>{a.fetchFn=()=>{var t,e,s,i,r,n;const o=(t=a.fetchOptions)==null||(e=t.meta)==null?void 0:e.refetchPage,d=(s=a.fetchOptions)==null||(i=s.meta)==null?void 0:i.fetchMore,m=d==null?void 0:d.pageParam,v=(d==null?void 0:d.direction)==="forward",M=(d==null?void 0:d.direction)==="backward",f=((r=a.state.data)==null?void 0:r.pages)||[],h=((n=a.state.data)==null?void 0:n.pageParams)||[];let y=h,g=!1;const q=l=>{Object.defineProperty(l,"signal",{enumerable:!0,get:()=>{var u;if((u=a.signal)!=null&&u.aborted)g=!0;else{var c;(c=a.signal)==null||c.addEventListener("abort",()=>{g=!0})}return a.signal}})},C=a.options.queryFn||(()=>Promise.reject("Missing queryFn for queryKey '"+a.options.queryHash+"'")),S=(l,u,c,O)=>(y=O?[u,...y]:[...y,u],O?[c,...l]:[...l,c]),F=(l,u,c,O)=>{if(g)return Promise.reject("Cancelled");if(typeof c>"u"&&!u&&l.length)return Promise.resolve(l);const R={queryKey:a.queryKey,pageParam:c,meta:a.options.meta};q(R);const x=C(R);return Promise.resolve(x).then(V=>S(l,c,V,O))};let P;if(!f.length)P=F([]);else if(v){const l=typeof m<"u",u=l?m:k(a.options,f);P=F(f,l,u)}else if(M){const l=typeof m<"u",u=l?m:nt(a.options,f);P=F(f,l,u,!0)}else{y=[];const l=typeof a.options.getNextPageParam>"u";P=(o&&f[0]?o(f[0],0,f):!0)?F([],l,h[0]):Promise.resolve(S([],h[0],f[0]));for(let c=1;c<f.length;c++)P=P.then(O=>{if(o&&f[c]?o(f[c],c,f):!0){const x=l?h[c]:k(a.options,O);return F(O,l,x)}return Promise.resolve(S(O,h[c],f[c]))})}return P.then(l=>({pages:l,pageParams:y}))}}}}function k(a,t){return a.getNextPageParam==null?void 0:a.getNextPageParam(t[t.length-1],t)}function nt(a,t){return a.getPreviousPageParam==null?void 0:a.getPreviousPageParam(t[0],t)}class ht{constructor(t={}){this.queryCache=t.queryCache||new et,this.mutationCache=t.mutationCache||new rt,this.logger=t.logger||U,this.defaultOptions=t.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[],this.mountCount=0}mount(){this.mountCount++,this.mountCount===1&&(this.unsubscribeFocus=I.subscribe(()=>{I.isFocused()&&(this.resumePausedMutations(),this.queryCache.onFocus())}),this.unsubscribeOnline=H.subscribe(()=>{H.isOnline()&&(this.resumePausedMutations(),this.queryCache.onOnline())}))}unmount(){var t,e;this.mountCount--,this.mountCount===0&&((t=this.unsubscribeFocus)==null||t.call(this),this.unsubscribeFocus=void 0,(e=this.unsubscribeOnline)==null||e.call(this),this.unsubscribeOnline=void 0)}isFetching(t,e){const[s]=D(t,e);return s.fetchStatus="fetching",this.queryCache.findAll(s).length}isMutating(t){return this.mutationCache.findAll({...t,fetching:!0}).length}getQueryData(t,e){var s;return(s=this.queryCache.find(t,e))==null?void 0:s.state.data}ensureQueryData(t,e,s){const i=Q(t,e,s),r=this.getQueryData(i.queryKey);return r?Promise.resolve(r):this.fetchQuery(i)}getQueriesData(t){return this.getQueryCache().findAll(t).map(({queryKey:e,state:s})=>{const i=s.data;return[e,i]})}setQueryData(t,e,s){const i=this.queryCache.find(t),r=i==null?void 0:i.state.data,n=Z(e,r);if(typeof n>"u")return;const o=Q(t),d=this.defaultQueryOptions(o);return this.queryCache.build(this,d).setData(n,{...s,manual:!0})}setQueriesData(t,e,s){return p.batch(()=>this.getQueryCache().findAll(t).map(({queryKey:i})=>[i,this.setQueryData(i,e,s)]))}getQueryState(t,e){var s;return(s=this.queryCache.find(t,e))==null?void 0:s.state}removeQueries(t,e){const[s]=D(t,e),i=this.queryCache;p.batch(()=>{i.findAll(s).forEach(r=>{i.remove(r)})})}resetQueries(t,e,s){const[i,r]=D(t,e,s),n=this.queryCache,o={type:"active",...i};return p.batch(()=>(n.findAll(i).forEach(d=>{d.reset()}),this.refetchQueries(o,r)))}cancelQueries(t,e,s){const[i,r={}]=D(t,e,s);typeof r.revert>"u"&&(r.revert=!0);const n=p.batch(()=>this.queryCache.findAll(i).map(o=>o.cancel(r)));return Promise.all(n).then(b).catch(b)}invalidateQueries(t,e,s){const[i,r]=D(t,e,s);return p.batch(()=>{var n,o;if(this.queryCache.findAll(i).forEach(m=>{m.invalidate()}),i.refetchType==="none")return Promise.resolve();const d={...i,type:(n=(o=i.refetchType)!=null?o:i.type)!=null?n:"active"};return this.refetchQueries(d,r)})}refetchQueries(t,e,s){const[i,r]=D(t,e,s),n=p.batch(()=>this.queryCache.findAll(i).filter(d=>!d.isDisabled()).map(d=>{var m;return d.fetch(void 0,{...r,cancelRefetch:(m=r==null?void 0:r.cancelRefetch)!=null?m:!0,meta:{refetchPage:i.refetchPage}})}));let o=Promise.all(n).then(b);return r!=null&&r.throwOnError||(o=o.catch(b)),o}fetchQuery(t,e,s){const i=Q(t,e,s),r=this.defaultQueryOptions(i);typeof r.retry>"u"&&(r.retry=!1);const n=this.queryCache.build(this,r);return n.isStaleByTime(r.staleTime)?n.fetch(r):Promise.resolve(n.state.data)}prefetchQuery(t,e,s){return this.fetchQuery(t,e,s).then(b).catch(b)}fetchInfiniteQuery(t,e,s){const i=Q(t,e,s);return i.behavior=at(),this.fetchQuery(i)}prefetchInfiniteQuery(t,e,s){return this.fetchInfiniteQuery(t,e,s).then(b).catch(b)}resumePausedMutations(){return this.mutationCache.resumePausedMutations()}getQueryCache(){return this.queryCache}getMutationCache(){return this.mutationCache}getLogger(){return this.logger}getDefaultOptions(){return this.defaultOptions}setDefaultOptions(t){this.defaultOptions=t}setQueryDefaults(t,e){const s=this.queryDefaults.find(i=>A(t)===A(i.queryKey));s?s.defaultOptions=e:this.queryDefaults.push({queryKey:t,defaultOptions:e})}getQueryDefaults(t){if(!t)return;const e=this.queryDefaults.find(s=>G(t,s.queryKey));return e==null?void 0:e.defaultOptions}setMutationDefaults(t,e){const s=this.mutationDefaults.find(i=>A(t)===A(i.mutationKey));s?s.defaultOptions=e:this.mutationDefaults.push({mutationKey:t,defaultOptions:e})}getMutationDefaults(t){if(!t)return;const e=this.mutationDefaults.find(s=>G(t,s.mutationKey));return e==null?void 0:e.defaultOptions}defaultQueryOptions(t){if(t!=null&&t._defaulted)return t;const e={...this.defaultOptions.queries,...this.getQueryDefaults(t==null?void 0:t.queryKey),...t,_defaulted:!0};return!e.queryHash&&e.queryKey&&(e.queryHash=B(e.queryKey,e)),typeof e.refetchOnReconnect>"u"&&(e.refetchOnReconnect=e.networkMode!=="always"),typeof e.useErrorBoundary>"u"&&(e.useErrorBoundary=!!e.suspense),e}defaultMutationOptions(t){return t!=null&&t._defaulted?t:{...this.defaultOptions.mutations,...this.getMutationDefaults(t==null?void 0:t.mutationKey),...t,_defaulted:!0}}clear(){this.queryCache.clear(),this.mutationCache.clear()}}export{ht as Q};
//# sourceMappingURL=queryClient-b1087e12.js.map
