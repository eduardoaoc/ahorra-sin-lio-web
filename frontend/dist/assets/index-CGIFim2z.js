(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){let t=Object.create(null);for(let n of e.split(`,`))t[n]=1;return e=>e in t}var t={},n=[],r=()=>{},i=()=>!1,a=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),o=e=>e.startsWith(`onUpdate:`),s=Object.assign,c=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)},l=Object.prototype.hasOwnProperty,u=(e,t)=>l.call(e,t),d=Array.isArray,f=e=>x(e)===`[object Map]`,p=e=>x(e)===`[object Set]`,m=e=>x(e)===`[object Date]`,h=e=>typeof e==`function`,g=e=>typeof e==`string`,_=e=>typeof e==`symbol`,v=e=>typeof e==`object`&&!!e,y=e=>(v(e)||h(e))&&h(e.then)&&h(e.catch),b=Object.prototype.toString,x=e=>b.call(e),S=e=>x(e).slice(8,-1),C=e=>x(e)===`[object Object]`,w=e=>g(e)&&e!==`NaN`&&e[0]!==`-`&&``+parseInt(e,10)===e,T=e(`,key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`),ee=e=>{let t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},te=/-\w/g,E=ee(e=>e.replace(te,e=>e.slice(1).toUpperCase())),ne=/\B([A-Z])/g,D=ee(e=>e.replace(ne,`-$1`).toLowerCase()),O=ee(e=>e.charAt(0).toUpperCase()+e.slice(1)),re=ee(e=>e?`on${O(e)}`:``),k=(e,t)=>!Object.is(e,t),ie=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},A=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},ae=e=>{let t=parseFloat(e);return isNaN(t)?e:t},oe,se=()=>oe||=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{};function ce(e){if(d(e)){let t={};for(let n=0;n<e.length;n++){let r=e[n],i=g(r)?fe(r):ce(r);if(i)for(let e in i)t[e]=i[e]}return t}else if(g(e)||v(e))return e}var le=/;(?![^(]*\))/g,ue=/:([^]+)/,de=/\/\*[^]*?\*\//g;function fe(e){let t={};return e.replace(de,``).split(le).forEach(e=>{if(e){let n=e.split(ue);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function j(e){let t=``;if(g(e))t=e;else if(d(e))for(let n=0;n<e.length;n++){let r=j(e[n]);r&&(t+=r+` `)}else if(v(e))for(let n in e)e[n]&&(t+=n+` `);return t.trim()}var pe=`itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`,me=e(pe);pe+``;function he(e){return!!e||e===``}function ge(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=_e(e[r],t[r]);return n}function _e(e,t){if(e===t)return!0;let n=m(e),r=m(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=_(e),r=_(t),n||r)return e===t;if(n=d(e),r=d(t),n||r)return n&&r?ge(e,t):!1;if(n=v(e),r=v(t),n||r){if(!n||!r||Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e){let r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!_e(e[n],t[n]))return!1}}return String(e)===String(t)}var M,ve=class{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&M&&(M.active?(this.parent=M,this.index=(M.scopes||=[]).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){let t=M;try{return M=this,e()}finally{M=t}}}on(){++this._on===1&&(this.prevScope=M,M=this)}off(){if(this._on>0&&--this._on===0){if(M===this)M=this.prevScope;else{let e=M;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){let e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}};function ye(e){return new ve(e)}function be(){return M}var N,xe=new WeakSet,Se=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,M&&(M.active?M.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,xe.has(this)&&(xe.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ee(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Re(this),ke(this);let e=N,t=P;N=this,P=!0;try{return this.fn()}finally{Ae(this),N=e,P=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ne(e);this.deps=this.depsTail=void 0,Re(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?xe.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){je(this)&&this.run()}get dirty(){return je(this)}},Ce=0,we,Te;function Ee(e,t=!1){if(e.flags|=8,t){e.next=Te,Te=e;return}e.next=we,we=e}function De(){Ce++}function Oe(){if(--Ce>0)return;if(Te){let e=Te;for(Te=void 0;e;){let t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;for(;we;){let t=we;for(we=void 0;t;){let n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(t){e||=t}t=n}}if(e)throw e}function ke(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ae(e){let t,n=e.depsTail,r=n;for(;r;){let e=r.prevDep;r.version===-1?(r===n&&(n=e),Ne(r),Pe(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function je(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Me(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Me(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===ze)||(e.globalVersion=ze,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!je(e))))return;e.flags|=2;let t=e.dep,n=N,r=P;N=e,P=!0;try{ke(e);let n=e.fn(e._value);(t.version===0||k(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(e){throw t.version++,e}finally{N=n,P=r,Ae(e),e.flags&=-3}}function Ne(e,t=!1){let{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)Ne(e,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Pe(e){let{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}var P=!0,Fe=[];function Ie(){Fe.push(P),P=!1}function Le(){let e=Fe.pop();P=e===void 0?!0:e}function Re(e){let{cleanup:t}=e;if(e.cleanup=void 0,t){let e=N;N=void 0;try{t()}finally{N=e}}}var ze=0,Be=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},Ve=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!N||!P||N===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==N)t=this.activeLink=new Be(N,this),N.deps?(t.prevDep=N.depsTail,N.depsTail.nextDep=t,N.depsTail=t):N.deps=N.depsTail=t,He(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){let e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=N.depsTail,t.nextDep=void 0,N.depsTail.nextDep=t,N.depsTail=t,N.deps===t&&(N.deps=e)}return t}trigger(e){this.version++,ze++,this.notify(e)}notify(e){De();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Oe()}}};function He(e){if(e.dep.sc++,e.sub.flags&4){let t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)He(e)}let n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}var Ue=new WeakMap,We=Symbol(``),Ge=Symbol(``),Ke=Symbol(``);function F(e,t,n){if(P&&N){let t=Ue.get(e);t||Ue.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new Ve),r.map=t,r.key=n),r.track()}}function qe(e,t,n,r,i,a){let o=Ue.get(e);if(!o){ze++;return}let s=e=>{e&&e.trigger()};if(De(),t===`clear`)o.forEach(s);else{let i=d(e),a=i&&w(n);if(i&&n===`length`){let e=Number(r);o.forEach((t,n)=>{(n===`length`||n===Ke||!_(n)&&n>=e)&&s(t)})}else switch((n!==void 0||o.has(void 0))&&s(o.get(n)),a&&s(o.get(Ke)),t){case`add`:i?a&&s(o.get(`length`)):(s(o.get(We)),f(e)&&s(o.get(Ge)));break;case`delete`:i||(s(o.get(We)),f(e)&&s(o.get(Ge)));break;case`set`:f(e)&&s(o.get(We));break}}Oe()}function Je(e){let t=L(e);return t===e?t:(F(t,`iterate`,Ke),I(e)?t:t.map(Ft))}function Ye(e){return F(e=L(e),`iterate`,Ke),e}function Xe(e,t){return Mt(e)?It(jt(e)?Ft(t):t):Ft(t)}var Ze={__proto__:null,[Symbol.iterator](){return Qe(this,Symbol.iterator,e=>Xe(this,e))},concat(...e){return Je(this).concat(...e.map(e=>d(e)?Je(e):e))},entries(){return Qe(this,`entries`,e=>(e[1]=Xe(this,e[1]),e))},every(e,t){return et(this,`every`,e,t,void 0,arguments)},filter(e,t){return et(this,`filter`,e,t,e=>e.map(e=>Xe(this,e)),arguments)},find(e,t){return et(this,`find`,e,t,e=>Xe(this,e),arguments)},findIndex(e,t){return et(this,`findIndex`,e,t,void 0,arguments)},findLast(e,t){return et(this,`findLast`,e,t,e=>Xe(this,e),arguments)},findLastIndex(e,t){return et(this,`findLastIndex`,e,t,void 0,arguments)},forEach(e,t){return et(this,`forEach`,e,t,void 0,arguments)},includes(...e){return nt(this,`includes`,e)},indexOf(...e){return nt(this,`indexOf`,e)},join(e){return Je(this).join(e)},lastIndexOf(...e){return nt(this,`lastIndexOf`,e)},map(e,t){return et(this,`map`,e,t,void 0,arguments)},pop(){return rt(this,`pop`)},push(...e){return rt(this,`push`,e)},reduce(e,...t){return tt(this,`reduce`,e,t)},reduceRight(e,...t){return tt(this,`reduceRight`,e,t)},shift(){return rt(this,`shift`)},some(e,t){return et(this,`some`,e,t,void 0,arguments)},splice(...e){return rt(this,`splice`,e)},toReversed(){return Je(this).toReversed()},toSorted(e){return Je(this).toSorted(e)},toSpliced(...e){return Je(this).toSpliced(...e)},unshift(...e){return rt(this,`unshift`,e)},values(){return Qe(this,`values`,e=>Xe(this,e))}};function Qe(e,t,n){let r=Ye(e),i=r[t]();return r!==e&&!I(e)&&(i._next=i.next,i.next=()=>{let e=i._next();return e.done||(e.value=n(e.value)),e}),i}var $e=Array.prototype;function et(e,t,n,r,i,a){let o=Ye(e),s=o!==e&&!I(e),c=o[t];if(c!==$e[t]){let t=c.apply(e,a);return s?Ft(t):t}let l=n;o!==e&&(s?l=function(t,r){return n.call(this,Xe(e,t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));let u=c.call(o,l,r);return s&&i?i(u):u}function tt(e,t,n,r){let i=Ye(e),a=i!==e&&!I(e),o=n,s=!1;i!==e&&(a?(s=r.length===0,o=function(t,r,i){return s&&(s=!1,t=Xe(e,t)),n.call(this,t,Xe(e,r),i,e)}):n.length>3&&(o=function(t,r,i){return n.call(this,t,r,i,e)}));let c=i[t](o,...r);return s?Xe(e,c):c}function nt(e,t,n){let r=L(e);F(r,`iterate`,Ke);let i=r[t](...n);return(i===-1||i===!1)&&Nt(n[0])?(n[0]=L(n[0]),r[t](...n)):i}function rt(e,t,n=[]){Ie(),De();let r=L(e)[t].apply(e,n);return Oe(),Le(),r}var it=e(`__proto__,__v_isRef,__isVue`),at=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!==`arguments`&&e!==`caller`).map(e=>Symbol[e]).filter(_));function ot(e){_(e)||(e=String(e));let t=L(this);return F(t,`has`,e),t.hasOwnProperty(e)}var st=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t===`__v_skip`)return e.__v_skip;let r=this._isReadonly,i=this._isShallow;if(t===`__v_isReactive`)return!r;if(t===`__v_isReadonly`)return r;if(t===`__v_isShallow`)return i;if(t===`__v_raw`)return n===(r?i?Tt:wt:i?Ct:St).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;let a=d(e);if(!r){let e;if(a&&(e=Ze[t]))return e;if(t===`hasOwnProperty`)return ot}let o=Reflect.get(e,t,R(e)?e:n);if((_(t)?at.has(t):it(t))||(r||F(e,`get`,t),i))return o;if(R(o)){let e=a&&w(t)?o:o.value;return r&&v(e)?kt(e):e}return v(o)?r?kt(o):Dt(o):o}},ct=class extends st{constructor(e=!1){super(!1,e)}set(e,t,n,r){let i=e[t],a=d(e)&&w(t);if(!this._isShallow){let e=Mt(i);if(!I(n)&&!Mt(n)&&(i=L(i),n=L(n)),!a&&R(i)&&!R(n))return e||(i.value=n),!0}let o=a?Number(t)<e.length:u(e,t),s=Reflect.set(e,t,n,R(e)?e:r);return e===L(r)&&(o?k(n,i)&&qe(e,`set`,t,n,i):qe(e,`add`,t,n)),s}deleteProperty(e,t){let n=u(e,t),r=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&qe(e,`delete`,t,void 0,r),i}has(e,t){let n=Reflect.has(e,t);return(!_(t)||!at.has(t))&&F(e,`has`,t),n}ownKeys(e){return F(e,`iterate`,d(e)?`length`:We),Reflect.ownKeys(e)}},lt=class extends st{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}},ut=new ct,dt=new lt,ft=new ct(!0),pt=e=>e,mt=e=>Reflect.getPrototypeOf(e);function ht(e,t,n){return function(...r){let i=this.__v_raw,a=L(i),o=f(a),c=e===`entries`||e===Symbol.iterator&&o,l=e===`keys`&&o,u=i[e](...r),d=n?pt:t?It:Ft;return!t&&F(a,`iterate`,l?Ge:We),s(Object.create(u),{next(){let{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:c?[d(e[0]),d(e[1])]:d(e),done:t}}})}}function gt(e){return function(...t){return e===`delete`?!1:e===`clear`?void 0:this}}function _t(e,t){let n={get(n){let r=this.__v_raw,i=L(r),a=L(n);e||(k(n,a)&&F(i,`get`,n),F(i,`get`,a));let{has:o}=mt(i),s=t?pt:e?It:Ft;if(o.call(i,n))return s(r.get(n));if(o.call(i,a))return s(r.get(a));r!==i&&r.get(n)},get size(){let t=this.__v_raw;return!e&&F(L(t),`iterate`,We),t.size},has(t){let n=this.__v_raw,r=L(n),i=L(t);return e||(k(t,i)&&F(r,`has`,t),F(r,`has`,i)),t===i?n.has(t):n.has(t)||n.has(i)},forEach(n,r){let i=this,a=i.__v_raw,o=L(a),s=t?pt:e?It:Ft;return!e&&F(o,`iterate`,We),a.forEach((e,t)=>n.call(r,s(e),s(t),i))}};return s(n,e?{add:gt(`add`),set:gt(`set`),delete:gt(`delete`),clear:gt(`clear`)}:{add(e){let n=L(this),r=mt(n),i=L(e),a=!t&&!I(e)&&!Mt(e)?i:e;return r.has.call(n,a)||k(e,a)&&r.has.call(n,e)||k(i,a)&&r.has.call(n,i)||(n.add(a),qe(n,`add`,a,a)),this},set(e,n){!t&&!I(n)&&!Mt(n)&&(n=L(n));let r=L(this),{has:i,get:a}=mt(r),o=i.call(r,e);o||=(e=L(e),i.call(r,e));let s=a.call(r,e);return r.set(e,n),o?k(n,s)&&qe(r,`set`,e,n,s):qe(r,`add`,e,n),this},delete(e){let t=L(this),{has:n,get:r}=mt(t),i=n.call(t,e);i||=(e=L(e),n.call(t,e));let a=r?r.call(t,e):void 0,o=t.delete(e);return i&&qe(t,`delete`,e,void 0,a),o},clear(){let e=L(this),t=e.size!==0,n=e.clear();return t&&qe(e,`clear`,void 0,void 0,void 0),n}}),[`keys`,`values`,`entries`,Symbol.iterator].forEach(r=>{n[r]=ht(r,e,t)}),n}function vt(e,t){let n=_t(e,t);return(t,r,i)=>r===`__v_isReactive`?!e:r===`__v_isReadonly`?e:r===`__v_raw`?t:Reflect.get(u(n,r)&&r in t?n:t,r,i)}var yt={get:vt(!1,!1)},bt={get:vt(!1,!0)},xt={get:vt(!0,!1)},St=new WeakMap,Ct=new WeakMap,wt=new WeakMap,Tt=new WeakMap;function Et(e){switch(e){case`Object`:case`Array`:return 1;case`Map`:case`Set`:case`WeakMap`:case`WeakSet`:return 2;default:return 0}}function Dt(e){return Mt(e)?e:At(e,!1,ut,yt,St)}function Ot(e){return At(e,!1,ft,bt,Ct)}function kt(e){return At(e,!0,dt,xt,wt)}function At(e,t,n,r,i){if(!v(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;let a=i.get(e);if(a)return a;let o=Et(S(e));if(o===0)return e;let s=new Proxy(e,o===2?r:n);return i.set(e,s),s}function jt(e){return Mt(e)?jt(e.__v_raw):!!(e&&e.__v_isReactive)}function Mt(e){return!!(e&&e.__v_isReadonly)}function I(e){return!!(e&&e.__v_isShallow)}function Nt(e){return e?!!e.__v_raw:!1}function L(e){let t=e&&e.__v_raw;return t?L(t):e}function Pt(e){return!u(e,`__v_skip`)&&Object.isExtensible(e)&&A(e,`__v_skip`,!0),e}var Ft=e=>v(e)?Dt(e):e,It=e=>v(e)?kt(e):e;function R(e){return e?e.__v_isRef===!0:!1}function Lt(e){return zt(e,!1)}function Rt(e){return zt(e,!0)}function zt(e,t){return R(e)?e:new Bt(e,t)}var Bt=class{constructor(e,t){this.dep=new Ve,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:L(e),this._value=t?e:Ft(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){let t=this._rawValue,n=this.__v_isShallow||I(e)||Mt(e);e=n?e:L(e),k(e,t)&&(this._rawValue=e,this._value=n?e:Ft(e),this.dep.trigger())}};function Vt(e){return R(e)?e.value:e}var Ht={get:(e,t,n)=>t===`__v_raw`?e:Vt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{let i=e[t];return R(i)&&!R(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Ut(e){return jt(e)?e:new Proxy(e,Ht)}var Wt=class{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Ve(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ze-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&N!==this)return Ee(this,!0),!0}get value(){let e=this.dep.track();return Me(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}};function Gt(e,t,n=!1){let r,i;return h(e)?r=e:(r=e.get,i=e.set),new Wt(r,i,n)}var Kt={},qt=new WeakMap,Jt=void 0;function Yt(e,t=!1,n=Jt){if(n){let t=qt.get(n);t||qt.set(n,t=[]),t.push(e)}}function Xt(e,n,i=t){let{immediate:a,deep:o,once:s,scheduler:l,augmentJob:u,call:f}=i,p=e=>o?e:I(e)||o===!1||o===0?Zt(e,1):Zt(e),m,g,_,v,y=!1,b=!1;if(R(e)?(g=()=>e.value,y=I(e)):jt(e)?(g=()=>p(e),y=!0):d(e)?(b=!0,y=e.some(e=>jt(e)||I(e)),g=()=>e.map(e=>{if(R(e))return e.value;if(jt(e))return p(e);if(h(e))return f?f(e,2):e()})):g=h(e)?n?f?()=>f(e,2):e:()=>{if(_){Ie();try{_()}finally{Le()}}let t=Jt;Jt=m;try{return f?f(e,3,[v]):e(v)}finally{Jt=t}}:r,n&&o){let e=g,t=o===!0?1/0:o;g=()=>Zt(e(),t)}let x=be(),S=()=>{m.stop(),x&&x.active&&c(x.effects,m)};if(s&&n){let e=n;n=(...t)=>{e(...t),S()}}let C=b?Array(e.length).fill(Kt):Kt,w=e=>{if(!(!(m.flags&1)||!m.dirty&&!e))if(n){let e=m.run();if(o||y||(b?e.some((e,t)=>k(e,C[t])):k(e,C))){_&&_();let t=Jt;Jt=m;try{let t=[e,C===Kt?void 0:b&&C[0]===Kt?[]:C,v];C=e,f?f(n,3,t):n(...t)}finally{Jt=t}}}else m.run()};return u&&u(w),m=new Se(g),m.scheduler=l?()=>l(w,!1):w,v=e=>Yt(e,!1,m),_=m.onStop=()=>{let e=qt.get(m);if(e){if(f)f(e,4);else for(let t of e)t();qt.delete(m)}},n?a?w(!0):C=m.run():l?l(w.bind(null,!0),!0):m.run(),S.pause=m.pause.bind(m),S.resume=m.resume.bind(m),S.stop=S,S}function Zt(e,t=1/0,n){if(t<=0||!v(e)||e.__v_skip||(n||=new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,R(e))Zt(e.value,t,n);else if(d(e))for(let r=0;r<e.length;r++)Zt(e[r],t,n);else if(p(e)||f(e))e.forEach(e=>{Zt(e,t,n)});else if(C(e)){for(let r in e)Zt(e[r],t,n);for(let r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Zt(e[r],t,n)}return e}function Qt(e,t,n,r){try{return r?e(...r):e()}catch(e){$t(e,t,n)}}function z(e,t,n,r){if(h(e)){let i=Qt(e,t,n,r);return i&&y(i)&&i.catch(e=>{$t(e,t,n)}),i}if(d(e)){let i=[];for(let a=0;a<e.length;a++)i.push(z(e[a],t,n,r));return i}}function $t(e,n,r,i=!0){let a=n?n.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:s}=n&&n.appContext.config||t;if(n){let t=n.parent,i=n.proxy,a=`https://vuejs.org/error-reference/#runtime-${r}`;for(;t;){let n=t.ec;if(n){for(let t=0;t<n.length;t++)if(n[t](e,i,a)===!1)return}t=t.parent}if(o){Ie(),Qt(o,null,10,[e,i,a]),Le();return}}en(e,r,a,i,s)}function en(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}var B=[],V=-1,tn=[],nn=null,rn=0,an=Promise.resolve(),on=null;function sn(e){let t=on||an;return e?t.then(this?e.bind(this):e):t}function cn(e){let t=V+1,n=B.length;for(;t<n;){let r=t+n>>>1,i=B[r],a=mn(i);a<e||a===e&&i.flags&2?t=r+1:n=r}return t}function ln(e){if(!(e.flags&1)){let t=mn(e),n=B[B.length-1];!n||!(e.flags&2)&&t>=mn(n)?B.push(e):B.splice(cn(t),0,e),e.flags|=1,un()}}function un(){on||=an.then(hn)}function dn(e){d(e)?tn.push(...e):nn&&e.id===-1?nn.splice(rn+1,0,e):e.flags&1||(tn.push(e),e.flags|=1),un()}function fn(e,t,n=V+1){for(;n<B.length;n++){let t=B[n];if(t&&t.flags&2){if(e&&t.id!==e.uid)continue;B.splice(n,1),n--,t.flags&4&&(t.flags&=-2),t(),t.flags&4||(t.flags&=-2)}}}function pn(e){if(tn.length){let e=[...new Set(tn)].sort((e,t)=>mn(e)-mn(t));if(tn.length=0,nn){nn.push(...e);return}for(nn=e,rn=0;rn<nn.length;rn++){let e=nn[rn];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}nn=null,rn=0}}var mn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function hn(e){try{for(V=0;V<B.length;V++){let e=B[V];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Qt(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;V<B.length;V++){let e=B[V];e&&(e.flags&=-2)}V=-1,B.length=0,pn(e),on=null,(B.length||tn.length)&&hn(e)}}var H=null,gn=null;function _n(e){let t=H;return H=e,gn=e&&e.type.__scopeId||null,t}function vn(e,t=H,n){if(!t||e._n)return e;let r=(...n)=>{r._d&&Ti(-1);let i=_n(t),a;try{a=e(...n)}finally{_n(i),r._d&&Ti(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function yn(e,t,n,r){let i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){let s=i[o];a&&(s.oldValue=a[o].value);let c=s.dir[r];c&&(Ie(),z(c,n,8,[e.el,s,e,t]),Le())}}function bn(e,t){if(X){let n=X.provides,r=X.parent&&X.parent.provides;r===n&&(n=X.provides=Object.create(r)),n[e]=t}}function xn(e,t,n=!1){let r=Wi();if(r||kr){let i=kr?kr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&h(t)?t.call(r&&r.proxy):t}}var Sn=Symbol.for(`v-scx`),Cn=()=>xn(Sn);function wn(e,t,n){return Tn(e,t,n)}function Tn(e,n,i=t){let{immediate:a,deep:o,flush:c,once:l}=i,u=s({},i),d=n&&a||!n&&c!==`post`,f;if(Xi){if(c===`sync`){let e=Cn();f=e.__watcherHandles||=[]}else if(!d){let e=()=>{};return e.stop=r,e.resume=r,e.pause=r,e}}let p=X;u.call=(e,t,n)=>z(e,p,t,n);let m=!1;c===`post`?u.scheduler=e=>{W(e,p&&p.suspense)}:c!==`sync`&&(m=!0,u.scheduler=(e,t)=>{t?e():ln(e)}),u.augmentJob=e=>{n&&(e.flags|=4),m&&(e.flags|=2,p&&(e.id=p.uid,e.i=p))};let h=Xt(e,n,u);return Xi&&(f?f.push(h):d&&h()),h}function En(e,t,n){let r=this.proxy,i=g(e)?e.includes(`.`)?Dn(r,e):()=>r[e]:e.bind(r,r),a;h(t)?a=t:(a=t.handler,n=t);let o=qi(this),s=Tn(i,a.bind(r),n);return o(),s}function Dn(e,t){let n=t.split(`.`);return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}var On=Symbol(`_vte`),kn=e=>e.__isTeleport,An=Symbol(`_leaveCb`);function jn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,jn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Mn(e,t){return h(e)?s({name:e.name},t,{setup:e}):e}function Nn(e){e.ids=[e.ids[0]+ e.ids[2]+++`-`,0,0]}function Pn(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}var Fn=new WeakMap;function In(e,n,r,a,o=!1){if(d(e)){e.forEach((e,t)=>In(e,n&&(d(n)?n[t]:n),r,a,o));return}if(Rn(a)&&!o){a.shapeFlag&512&&a.type.__asyncResolved&&a.component.subTree.component&&In(e,n,r,a.component.subTree);return}let s=a.shapeFlag&4?aa(a.component):a.el,l=o?null:s,{i:f,r:p}=e,m=n&&n.r,_=f.refs===t?f.refs={}:f.refs,v=f.setupState,y=L(v),b=v===t?i:e=>Pn(_,e)?!1:u(y,e),x=(e,t)=>!(t&&Pn(_,t));if(m!=null&&m!==p){if(Ln(n),g(m))_[m]=null,b(m)&&(v[m]=null);else if(R(m)){let e=n;x(m,e.k)&&(m.value=null),e.k&&(_[e.k]=null)}}if(h(p))Qt(p,f,12,[l,_]);else{let t=g(p),n=R(p);if(t||n){let i=()=>{if(e.f){let n=t?b(p)?v[p]:_[p]:x(p)||!e.k?p.value:_[e.k];if(o)d(n)&&c(n,s);else if(d(n))n.includes(s)||n.push(s);else if(t)_[p]=[s],b(p)&&(v[p]=_[p]);else{let t=[s];x(p,e.k)&&(p.value=t),e.k&&(_[e.k]=t)}}else t?(_[p]=l,b(p)&&(v[p]=l)):n&&(x(p,e.k)&&(p.value=l),e.k&&(_[e.k]=l))};if(l){let t=()=>{i(),Fn.delete(e)};t.id=-1,Fn.set(e,t),W(t,r)}else Ln(e),i()}}}function Ln(e){let t=Fn.get(e);t&&(t.flags|=8,Fn.delete(e))}se().requestIdleCallback,se().cancelIdleCallback;var Rn=e=>!!e.type.__asyncLoader,zn=e=>e.type.__isKeepAlive;function Bn(e,t){Hn(e,`a`,t)}function Vn(e,t){Hn(e,`da`,t)}function Hn(e,t,n=X){let r=e.__wdc||=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()};if(Wn(t,r,n),n){let e=n.parent;for(;e&&e.parent;)zn(e.parent.vnode)&&Un(r,t,n,e),e=e.parent}}function Un(e,t,n,r){let i=Wn(t,e,r,!0);Zn(()=>{c(r[t],i)},n)}function Wn(e,t,n=X,r=!1){if(n){let i=n[e]||(n[e]=[]),a=t.__weh||=(...r)=>{Ie();let i=qi(n),a=z(t,n,e,r);return i(),Le(),a};return r?i.unshift(a):i.push(a),a}}var Gn=e=>(t,n=X)=>{(!Xi||e===`sp`)&&Wn(e,(...e)=>t(...e),n)},Kn=Gn(`bm`),qn=Gn(`m`),Jn=Gn(`bu`),Yn=Gn(`u`),Xn=Gn(`bum`),Zn=Gn(`um`),Qn=Gn(`sp`),$n=Gn(`rtg`),er=Gn(`rtc`);function tr(e,t=X){Wn(`ec`,e,t)}var nr=`components`,rr=Symbol.for(`v-ndc`);function ir(e){return g(e)?ar(nr,e,!1)||e:e||rr}function ar(e,t,n=!0,r=!1){let i=H||X;if(i){let n=i.type;if(e===nr){let e=oa(n,!1);if(e&&(e===t||e===E(t)||e===O(E(t))))return n}let a=or(i[e]||n[e],t)||or(i.appContext[e],t);return!a&&r?n:a}}function or(e,t){return e&&(e[t]||e[E(t)]||e[O(E(t))])}var sr=e=>e?Yi(e)?aa(e):sr(e.parent):null,cr=s(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>sr(e.parent),$root:e=>sr(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>_r(e),$forceUpdate:e=>e.f||=()=>{ln(e.update)},$nextTick:e=>e.n||=sn.bind(e.proxy),$watch:e=>En.bind(e)}),lr=(e,n)=>e!==t&&!e.__isScriptSetup&&u(e,n),ur={get({_:e},n){if(n===`__v_skip`)return!0;let{ctx:r,setupState:i,data:a,props:o,accessCache:s,type:c,appContext:l}=e;if(n[0]!==`$`){let e=s[n];if(e!==void 0)switch(e){case 1:return i[n];case 2:return a[n];case 4:return r[n];case 3:return o[n]}else if(lr(i,n))return s[n]=1,i[n];else if(a!==t&&u(a,n))return s[n]=2,a[n];else if(u(o,n))return s[n]=3,o[n];else if(r!==t&&u(r,n))return s[n]=4,r[n];else fr&&(s[n]=0)}let d=cr[n],f,p;if(d)return n===`$attrs`&&F(e.attrs,`get`,``),d(e);if((f=c.__cssModules)&&(f=f[n]))return f;if(r!==t&&u(r,n))return s[n]=4,r[n];if(p=l.config.globalProperties,u(p,n))return p[n]},set({_:e},n,r){let{data:i,setupState:a,ctx:o}=e;return lr(a,n)?(a[n]=r,!0):i!==t&&u(i,n)?(i[n]=r,!0):u(e.props,n)||n[0]===`$`&&n.slice(1)in e?!1:(o[n]=r,!0)},has({_:{data:e,setupState:n,accessCache:r,ctx:i,appContext:a,props:o,type:s}},c){let l;return!!(r[c]||e!==t&&c[0]!==`$`&&u(e,c)||lr(n,c)||u(o,c)||u(i,c)||u(cr,c)||u(a.config.globalProperties,c)||(l=s.__cssModules)&&l[c])},defineProperty(e,t,n){return n.get==null?u(n,`value`)&&this.set(e,t,n.value,null):e._.accessCache[t]=0,Reflect.defineProperty(e,t,n)}};function dr(e){return d(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}var fr=!0;function pr(e){let t=_r(e),n=e.proxy,i=e.ctx;fr=!1,t.beforeCreate&&hr(t.beforeCreate,e,`bc`);let{data:a,computed:o,methods:s,watch:c,provide:l,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:g,updated:_,activated:y,deactivated:b,beforeDestroy:x,beforeUnmount:S,destroyed:C,unmounted:w,render:T,renderTracked:ee,renderTriggered:te,errorCaptured:E,serverPrefetch:ne,expose:D,inheritAttrs:O,components:re,directives:k,filters:ie}=t;if(u&&mr(u,i,null),s)for(let e in s){let t=s[e];h(t)&&(i[e]=t.bind(n))}if(a){let t=a.call(n,n);v(t)&&(e.data=Dt(t))}if(fr=!0,o)for(let e in o){let t=o[e],a=Z({get:h(t)?t.bind(n,n):h(t.get)?t.get.bind(n,n):r,set:!h(t)&&h(t.set)?t.set.bind(n):r});Object.defineProperty(i,e,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e})}if(c)for(let e in c)gr(c[e],i,n,e);if(l){let e=h(l)?l.call(n):l;Reflect.ownKeys(e).forEach(t=>{bn(t,e[t])})}f&&hr(f,e,`c`);function A(e,t){d(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(A(Kn,p),A(qn,m),A(Jn,g),A(Yn,_),A(Bn,y),A(Vn,b),A(tr,E),A(er,ee),A($n,te),A(Xn,S),A(Zn,w),A(Qn,ne),d(D))if(D.length){let t=e.exposed||={};D.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t,enumerable:!0})})}else e.exposed||={};T&&e.render===r&&(e.render=T),O!=null&&(e.inheritAttrs=O),re&&(e.components=re),k&&(e.directives=k),ne&&Nn(e)}function mr(e,t,n=r){d(e)&&(e=Sr(e));for(let n in e){let r=e[n],i;i=v(r)?`default`in r?xn(r.from||n,r.default,!0):xn(r.from||n):xn(r),R(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e}):t[n]=i}}function hr(e,t,n){z(d(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function gr(e,t,n,r){let i=r.includes(`.`)?Dn(n,r):()=>n[r];if(g(e)){let n=t[e];h(n)&&wn(i,n)}else if(h(e))wn(i,e.bind(n));else if(v(e))if(d(e))e.forEach(e=>gr(e,t,n,r));else{let r=h(e.handler)?e.handler.bind(n):t[e.handler];h(r)&&wn(i,r,e)}}function _r(e){let t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t),c;return s?c=s:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(e=>vr(c,e,o,!0)),vr(c,t,o)),v(t)&&a.set(t,c),c}function vr(e,t,n,r=!1){let{mixins:i,extends:a}=t;a&&vr(e,a,n,!0),i&&i.forEach(t=>vr(e,t,n,!0));for(let i in t)if(!(r&&i===`expose`)){let r=yr[i]||n&&n[i];e[i]=r?r(e[i],t[i]):t[i]}return e}var yr={data:br,props:wr,emits:wr,methods:Cr,computed:Cr,beforeCreate:U,created:U,beforeMount:U,mounted:U,beforeUpdate:U,updated:U,beforeDestroy:U,beforeUnmount:U,destroyed:U,unmounted:U,activated:U,deactivated:U,errorCaptured:U,serverPrefetch:U,components:Cr,directives:Cr,watch:Tr,provide:br,inject:xr};function br(e,t){return t?e?function(){return s(h(e)?e.call(this,this):e,h(t)?t.call(this,this):t)}:t:e}function xr(e,t){return Cr(Sr(e),Sr(t))}function Sr(e){if(d(e)){let t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function U(e,t){return e?[...new Set([].concat(e,t))]:t}function Cr(e,t){return e?s(Object.create(null),e,t):t}function wr(e,t){return e?d(e)&&d(t)?[...new Set([...e,...t])]:s(Object.create(null),dr(e),dr(t??{})):t}function Tr(e,t){if(!e)return t;if(!t)return e;let n=s(Object.create(null),e);for(let r in t)n[r]=U(e[r],t[r]);return n}function Er(){return{app:null,config:{isNativeTag:i,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}var Dr=0;function Or(e,t){return function(n,r=null){h(n)||(n=s({},n)),r!=null&&!v(r)&&(r=null);let i=Er(),a=new WeakSet,o=[],c=!1,l=i.app={_uid:Dr++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:la,get config(){return i.config},set config(e){},use(e,...t){return a.has(e)||(e&&h(e.install)?(a.add(e),e.install(l,...t)):h(e)&&(a.add(e),e(l,...t))),l},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),l},component(e,t){return t?(i.components[e]=t,l):i.components[e]},directive(e,t){return t?(i.directives[e]=t,l):i.directives[e]},mount(a,o,s){if(!c){let u=l._ceVNode||q(n,r);return u.appContext=i,s===!0?s=`svg`:s===!1&&(s=void 0),o&&t?t(u,a):e(u,a,s),c=!0,l._container=a,a.__vue_app__=l,aa(u.component)}},onUnmount(e){o.push(e)},unmount(){c&&(z(o,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(e,t){return i.provides[e]=t,l},runWithContext(e){let t=kr;kr=l;try{return e()}finally{kr=t}}};return l}}var kr=null,Ar=(e,t)=>t===`modelValue`||t===`model-value`?e.modelModifiers:e[`${t}Modifiers`]||e[`${E(t)}Modifiers`]||e[`${D(t)}Modifiers`];function jr(e,n,...r){if(e.isUnmounted)return;let i=e.vnode.props||t,a=r,o=n.startsWith(`update:`),s=o&&Ar(i,n.slice(7));s&&(s.trim&&(a=r.map(e=>g(e)?e.trim():e)),s.number&&(a=r.map(ae)));let c,l=i[c=re(n)]||i[c=re(E(n))];!l&&o&&(l=i[c=re(D(n))]),l&&z(l,e,6,a);let u=i[c+`Once`];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,z(u,e,6,a)}}var Mr=new WeakMap;function Nr(e,t,n=!1){let r=n?Mr:t.emitsCache,i=r.get(e);if(i!==void 0)return i;let a=e.emits,o={},c=!1;if(!h(e)){let r=e=>{let n=Nr(e,t,!0);n&&(c=!0,s(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!a&&!c?(v(e)&&r.set(e,null),null):(d(a)?a.forEach(e=>o[e]=null):s(o,a),v(e)&&r.set(e,o),o)}function Pr(e,t){return!e||!a(t)?!1:(t=t.slice(2).replace(/Once$/,``),u(e,t[0].toLowerCase()+t.slice(1))||u(e,D(t))||u(e,t))}function Fr(e){let{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:s,attrs:c,emit:l,render:u,renderCache:d,props:f,data:p,setupState:m,ctx:h,inheritAttrs:g}=e,_=_n(e),v,y;try{if(n.shapeFlag&4){let e=i||r,t=e;v=J(u.call(t,e,d,f,m,p,h)),y=c}else{let e=t;v=J(e.length>1?e(f,{attrs:c,slots:s,emit:l}):e(f,null)),y=t.props?c:Ir(c)}}catch(t){xi.length=0,$t(t,e,1),v=q(yi)}let b=v;if(y&&g!==!1){let e=Object.keys(y),{shapeFlag:t}=b;e.length&&t&7&&(a&&e.some(o)&&(y=Lr(y,a)),b=Ii(b,y,!1,!0))}return n.dirs&&(b=Ii(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&jn(b,n.transition),v=b,_n(_),v}var Ir=e=>{let t;for(let n in e)(n===`class`||n===`style`||a(n))&&((t||={})[n]=e[n]);return t},Lr=(e,t)=>{let n={};for(let r in e)(!o(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Rr(e,t,n){let{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:c}=t,l=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?zr(r,o,l):!!o;if(c&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t];if(Br(o,r,n)&&!Pr(l,n))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?zr(r,o,l):!0:!!o;return!1}function zr(e,t,n){let r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){let a=r[i];if(Br(t,e,a)&&!Pr(n,a))return!0}return!1}function Br(e,t,n){let r=e[n],i=t[n];return n===`style`&&v(r)&&v(i)?!_e(r,i):r!==i}function Vr({vnode:e,parent:t,suspense:n},r){for(;t;){let n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.suspense.vnode.el=n.el=r,e=n),n===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}var Hr={},Ur=()=>Object.create(Hr),Wr=e=>Object.getPrototypeOf(e)===Hr;function Gr(e,t,n,r=!1){let i={},a=Ur();e.propsDefaults=Object.create(null),qr(e,t,i,a);for(let t in e.propsOptions[0])t in i||(i[t]=void 0);n?e.props=r?i:Ot(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function Kr(e,t,n,r){let{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=L(i),[c]=e.propsOptions,l=!1;if((r||o>0)&&!(o&16)){if(o&8){let n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(Pr(e.emitsOptions,o))continue;let d=t[o];if(c)if(u(a,o))d!==a[o]&&(a[o]=d,l=!0);else{let t=E(o);i[t]=Jr(c,s,t,d,e,!1)}else d!==a[o]&&(a[o]=d,l=!0)}}}else{qr(e,t,i,a)&&(l=!0);let r;for(let a in s)(!t||!u(t,a)&&((r=D(a))===a||!u(t,r)))&&(c?n&&(n[a]!==void 0||n[r]!==void 0)&&(i[a]=Jr(c,s,a,void 0,e,!0)):delete i[a]);if(a!==s)for(let e in a)(!t||!u(t,e))&&(delete a[e],l=!0)}l&&qe(e.attrs,`set`,``)}function qr(e,n,r,i){let[a,o]=e.propsOptions,s=!1,c;if(n)for(let t in n){if(T(t))continue;let l=n[t],d;a&&u(a,d=E(t))?!o||!o.includes(d)?r[d]=l:(c||={})[d]=l:Pr(e.emitsOptions,t)||(!(t in i)||l!==i[t])&&(i[t]=l,s=!0)}if(o){let n=L(r),i=c||t;for(let t=0;t<o.length;t++){let s=o[t];r[s]=Jr(a,n,s,i[s],e,!u(i,s))}}return s}function Jr(e,t,n,r,i,a){let o=e[n];if(o!=null){let e=u(o,`default`);if(e&&r===void 0){let e=o.default;if(o.type!==Function&&!o.skipFactory&&h(e)){let{propsDefaults:a}=i;if(n in a)r=a[n];else{let o=qi(i);r=a[n]=e.call(null,t),o()}}else r=e;i.ce&&i.ce._setProp(n,r)}o[0]&&(a&&!e?r=!1:o[1]&&(r===``||r===D(n))&&(r=!0))}return r}var Yr=new WeakMap;function Xr(e,r,i=!1){let a=i?Yr:r.propsCache,o=a.get(e);if(o)return o;let c=e.props,l={},f=[],p=!1;if(!h(e)){let t=e=>{p=!0;let[t,n]=Xr(e,r,!0);s(l,t),n&&f.push(...n)};!i&&r.mixins.length&&r.mixins.forEach(t),e.extends&&t(e.extends),e.mixins&&e.mixins.forEach(t)}if(!c&&!p)return v(e)&&a.set(e,n),n;if(d(c))for(let e=0;e<c.length;e++){let n=E(c[e]);Zr(n)&&(l[n]=t)}else if(c)for(let e in c){let t=E(e);if(Zr(t)){let n=c[e],r=l[t]=d(n)||h(n)?{type:n}:s({},n),i=r.type,a=!1,o=!0;if(d(i))for(let e=0;e<i.length;++e){let t=i[e],n=h(t)&&t.name;if(n===`Boolean`){a=!0;break}else n===`String`&&(o=!1)}else a=h(i)&&i.name===`Boolean`;r[0]=a,r[1]=o,(a||u(r,`default`))&&f.push(t)}}let m=[l,f];return v(e)&&a.set(e,m),m}function Zr(e){return e[0]!==`$`&&!T(e)}var Qr=e=>e===`_`||e===`_ctx`||e===`$stable`,$r=e=>d(e)?e.map(J):[J(e)],ei=(e,t,n)=>{if(t._n)return t;let r=vn((...e)=>$r(t(...e)),n);return r._c=!1,r},ti=(e,t,n)=>{let r=e._ctx;for(let n in e){if(Qr(n))continue;let i=e[n];if(h(i))t[n]=ei(n,i,r);else if(i!=null){let e=$r(i);t[n]=()=>e}}},ni=(e,t)=>{let n=$r(t);e.slots.default=()=>n},ri=(e,t,n)=>{for(let r in t)(n||!Qr(r))&&(e[r]=t[r])},ii=(e,t,n)=>{let r=e.slots=Ur();if(e.vnode.shapeFlag&32){let e=t._;e?(ri(r,t,n),n&&A(r,`_`,e,!0)):ti(t,r)}else t&&ni(e,t)},ai=(e,n,r)=>{let{vnode:i,slots:a}=e,o=!0,s=t;if(i.shapeFlag&32){let e=n._;e?r&&e===1?o=!1:ri(a,n,r):(o=!n.$stable,ti(n,a)),s=n}else n&&(ni(e,n),s={default:1});if(o)for(let e in a)!Qr(e)&&s[e]==null&&delete a[e]},W=_i;function oi(e){return si(e)}function si(e,i){let a=se();a.__VUE__=!0;let{insert:o,remove:s,patchProp:c,createElement:l,createText:u,createComment:d,setText:f,setElementText:p,parentNode:m,nextSibling:h,setScopeId:g=r,insertStaticContent:_}=e,v=(e,t,n,r=null,i=null,a=null,o=void 0,s=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Ai(e,t)&&(r=_e(e),j(e,i,a,!0),e=null),t.patchFlag===-2&&(c=!1,t.dynamicChildren=null);let{type:l,ref:u,shapeFlag:d}=t;switch(l){case vi:y(e,t,n,r);break;case yi:b(e,t,n,r);break;case bi:e??x(t,n,r,o);break;case G:re(e,t,n,r,i,a,o,s,c);break;default:d&1?w(e,t,n,r,i,a,o,s,c):d&6?k(e,t,n,r,i,a,o,s,c):(d&64||d&128)&&l.process(e,t,n,r,i,a,o,s,c,ye)}u!=null&&i?In(u,e&&e.ref,a,t||e,!t):u==null&&e&&e.ref!=null&&In(e.ref,null,a,e,!0)},y=(e,t,n,r)=>{if(e==null)o(t.el=u(t.children),n,r);else{let n=t.el=e.el;t.children!==e.children&&f(n,t.children)}},b=(e,t,n,r)=>{e==null?o(t.el=d(t.children||``),n,r):t.el=e.el},x=(e,t,n,r)=>{[e.el,e.anchor]=_(e.children,t,n,r,e.el,e.anchor)},S=({el:e,anchor:t},n,r)=>{let i;for(;e&&e!==t;)i=h(e),o(e,n,r),e=i;o(t,n,r)},C=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=h(e),s(e),e=n;s(t)},w=(e,t,n,r,i,a,o,s,c)=>{if(t.type===`svg`?o=`svg`:t.type===`math`&&(o=`mathml`),e==null)ee(t,n,r,i,a,o,s,c);else{let n=e.el&&e.el._isVueCE?e.el:null;try{n&&n._beginPatch(),ne(e,t,i,a,o,s,c)}finally{n&&n._endPatch()}}},ee=(e,t,n,r,i,a,s,u)=>{let d,f,{props:m,shapeFlag:h,transition:g,dirs:_}=e;if(d=e.el=l(e.type,a,m&&m.is,m),h&8?p(d,e.children):h&16&&E(e.children,d,null,r,i,ci(e,a),s,u),_&&yn(e,null,r,`created`),te(d,e,e.scopeId,s,r),m){for(let e in m)e!==`value`&&!T(e)&&c(d,e,null,m[e],a,r);`value`in m&&c(d,`value`,null,m.value,a),(f=m.onVnodeBeforeMount)&&Y(f,r,e)}_&&yn(e,null,r,`beforeMount`);let v=ui(i,g);v&&g.beforeEnter(d),o(d,t,n),((f=m&&m.onVnodeMounted)||v||_)&&W(()=>{try{f&&Y(f,r,e),v&&g.enter(d),_&&yn(e,null,r,`mounted`)}finally{}},i)},te=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let t=0;t<r.length;t++)g(e,r[t]);if(i){let n=i.subTree;if(t===n||gi(n.type)&&(n.ssContent===t||n.ssFallback===t)){let t=i.vnode;te(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},E=(e,t,n,r,i,a,o,s,c=0)=>{for(let l=c;l<e.length;l++)v(null,e[l]=s?Ri(e[l]):J(e[l]),t,n,r,i,a,o,s)},ne=(e,n,r,i,a,o,s)=>{let l=n.el=e.el,{patchFlag:u,dynamicChildren:d,dirs:f}=n;u|=e.patchFlag&16;let m=e.props||t,h=n.props||t,g;if(r&&li(r,!1),(g=h.onVnodeBeforeUpdate)&&Y(g,r,n,e),f&&yn(n,e,r,`beforeUpdate`),r&&li(r,!0),(m.innerHTML&&h.innerHTML==null||m.textContent&&h.textContent==null)&&p(l,``),d?D(e.dynamicChildren,d,l,r,i,ci(n,a),o):s||le(e,n,l,null,r,i,ci(n,a),o,!1),u>0){if(u&16)O(l,m,h,r,a);else if(u&2&&m.class!==h.class&&c(l,`class`,null,h.class,a),u&4&&c(l,`style`,m.style,h.style,a),u&8){let e=n.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t],i=m[n],o=h[n];(o!==i||n===`value`)&&c(l,n,i,o,a,r)}}u&1&&e.children!==n.children&&p(l,n.children)}else !s&&d==null&&O(l,m,h,r,a);((g=h.onVnodeUpdated)||f)&&W(()=>{g&&Y(g,r,n,e),f&&yn(n,e,r,`updated`)},i)},D=(e,t,n,r,i,a,o)=>{for(let s=0;s<t.length;s++){let c=e[s],l=t[s];v(c,l,c.el&&(c.type===G||!Ai(c,l)||c.shapeFlag&198)?m(c.el):n,null,r,i,a,o,!0)}},O=(e,n,r,i,a)=>{if(n!==r){if(n!==t)for(let t in n)!T(t)&&!(t in r)&&c(e,t,n[t],null,a,i);for(let t in r){if(T(t))continue;let o=r[t],s=n[t];o!==s&&t!==`value`&&c(e,t,s,o,a,i)}`value`in r&&c(e,`value`,n.value,r.value,a)}},re=(e,t,n,r,i,a,s,c,l)=>{let d=t.el=e?e.el:u(``),f=t.anchor=e?e.anchor:u(``),{patchFlag:p,dynamicChildren:m,slotScopeIds:h}=t;h&&(c=c?c.concat(h):h),e==null?(o(d,n,r),o(f,n,r),E(t.children||[],n,f,i,a,s,c,l)):p>0&&p&64&&m&&e.dynamicChildren&&e.dynamicChildren.length===m.length?(D(e.dynamicChildren,m,n,i,a,s,c),(t.key!=null||i&&t===i.subTree)&&di(e,t,!0)):le(e,t,n,f,i,a,s,c,l)},k=(e,t,n,r,i,a,o,s,c)=>{t.slotScopeIds=s,e==null?t.shapeFlag&512?i.ctx.activate(t,n,r,o,c):A(t,n,r,i,a,o,c):ae(e,t,c)},A=(e,t,n,r,i,a,o)=>{let s=e.component=Ui(e,r,i);if(zn(e)&&(s.ctx.renderer=ye),Zi(s,!1,o),s.asyncDep){if(i&&i.registerDep(s,oe,o),!e.el){let r=s.subTree=q(yi);b(null,r,t,n),e.placeholder=r.el}}else oe(s,e,t,n,i,a,o)},ae=(e,t,n)=>{let r=t.component=e.component;if(Rr(e,t,n))if(r.asyncDep&&!r.asyncResolved){ce(r,t,n);return}else r.next=t,r.update();else t.el=e.el,r.vnode=t},oe=(e,t,n,r,i,a,o)=>{let s=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:s,vnode:c}=e;{let n=pi(e);if(n){t&&(t.el=c.el,ce(e,t,o)),n.asyncDep.then(()=>{W(()=>{e.isUnmounted||l()},i)});return}}let u=t,d;li(e,!1),t?(t.el=c.el,ce(e,t,o)):t=c,n&&ie(n),(d=t.props&&t.props.onVnodeBeforeUpdate)&&Y(d,s,t,c),li(e,!0);let f=Fr(e),p=e.subTree;e.subTree=f,v(p,f,m(p.el),_e(p),e,i,a),t.el=f.el,u===null&&Vr(e,f.el),r&&W(r,i),(d=t.props&&t.props.onVnodeUpdated)&&W(()=>Y(d,s,t,c),i)}else{let o,{el:s,props:c}=t,{bm:l,m:u,parent:d,root:f,type:p}=e,m=Rn(t);if(li(e,!1),l&&ie(l),!m&&(o=c&&c.onVnodeBeforeMount)&&Y(o,d,t),li(e,!0),s&&N){let t=()=>{e.subTree=Fr(e),N(s,e.subTree,e,i,null)};m&&p.__asyncHydrate?p.__asyncHydrate(s,e,t):t()}else{f.ce&&f.ce._hasShadowRoot()&&f.ce._injectChildStyle(p,e.parent?e.parent.type:void 0);let o=e.subTree=Fr(e);v(null,o,n,r,e,i,a),t.el=o.el}if(u&&W(u,i),!m&&(o=c&&c.onVnodeMounted)){let e=t;W(()=>Y(o,d,e),i)}(t.shapeFlag&256||d&&Rn(d.vnode)&&d.vnode.shapeFlag&256)&&e.a&&W(e.a,i),e.isMounted=!0,t=n=r=null}};e.scope.on();let c=e.effect=new Se(s);e.scope.off();let l=e.update=c.run.bind(c),u=e.job=c.runIfDirty.bind(c);u.i=e,u.id=e.uid,c.scheduler=()=>ln(u),li(e,!0),l()},ce=(e,t,n)=>{t.component=e;let r=e.vnode.props;e.vnode=t,e.next=null,Kr(e,t.props,r,n),ai(e,t.children,n),Ie(),fn(e),Le()},le=(e,t,n,r,i,a,o,s,c=!1)=>{let l=e&&e.children,u=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:m}=t;if(f>0){if(f&128){de(l,d,n,r,i,a,o,s,c);return}else if(f&256){ue(l,d,n,r,i,a,o,s,c);return}}m&8?(u&16&&ge(l,i,a),d!==l&&p(n,d)):u&16?m&16?de(l,d,n,r,i,a,o,s,c):ge(l,i,a,!0):(u&8&&p(n,``),m&16&&E(d,n,r,i,a,o,s,c))},ue=(e,t,r,i,a,o,s,c,l)=>{e||=n,t||=n;let u=e.length,d=t.length,f=Math.min(u,d),p;for(p=0;p<f;p++){let n=t[p]=l?Ri(t[p]):J(t[p]);v(e[p],n,r,null,a,o,s,c,l)}u>d?ge(e,a,o,!0,!1,f):E(t,r,i,a,o,s,c,l,f)},de=(e,t,r,i,a,o,s,c,l)=>{let u=0,d=t.length,f=e.length-1,p=d-1;for(;u<=f&&u<=p;){let n=e[u],i=t[u]=l?Ri(t[u]):J(t[u]);if(Ai(n,i))v(n,i,r,null,a,o,s,c,l);else break;u++}for(;u<=f&&u<=p;){let n=e[f],i=t[p]=l?Ri(t[p]):J(t[p]);if(Ai(n,i))v(n,i,r,null,a,o,s,c,l);else break;f--,p--}if(u>f){if(u<=p){let e=p+1,n=e<d?t[e].el:i;for(;u<=p;)v(null,t[u]=l?Ri(t[u]):J(t[u]),r,n,a,o,s,c,l),u++}}else if(u>p)for(;u<=f;)j(e[u],a,o,!0),u++;else{let m=u,h=u,g=new Map;for(u=h;u<=p;u++){let e=t[u]=l?Ri(t[u]):J(t[u]);e.key!=null&&g.set(e.key,u)}let _,y=0,b=p-h+1,x=!1,S=0,C=Array(b);for(u=0;u<b;u++)C[u]=0;for(u=m;u<=f;u++){let n=e[u];if(y>=b){j(n,a,o,!0);continue}let i;if(n.key!=null)i=g.get(n.key);else for(_=h;_<=p;_++)if(C[_-h]===0&&Ai(n,t[_])){i=_;break}i===void 0?j(n,a,o,!0):(C[i-h]=u+1,i>=S?S=i:x=!0,v(n,t[i],r,null,a,o,s,c,l),y++)}let w=x?fi(C):n;for(_=w.length-1,u=b-1;u>=0;u--){let e=h+u,n=t[e],f=t[e+1],p=e+1<d?f.el||hi(f):i;C[u]===0?v(null,n,r,p,a,o,s,c,l):x&&(_<0||u!==w[_]?fe(n,r,p,2):_--)}}},fe=(e,t,n,r,i=null)=>{let{el:a,type:c,transition:l,children:u,shapeFlag:d}=e;if(d&6){fe(e.component.subTree,t,n,r);return}if(d&128){e.suspense.move(t,n,r);return}if(d&64){c.move(e,t,n,ye);return}if(c===G){o(a,t,n);for(let e=0;e<u.length;e++)fe(u[e],t,n,r);o(e.anchor,t,n);return}if(c===bi){S(e,t,n);return}if(r!==2&&d&1&&l)if(r===0)l.persisted&&!a[An]?o(a,t,n):(l.beforeEnter(a),o(a,t,n),W(()=>l.enter(a),i));else{let{leave:r,delayLeave:i,afterLeave:c}=l,u=()=>{e.ctx.isUnmounted?s(a):o(a,t,n)},d=()=>{let e=a._isLeaving||!!a[An];a._isLeaving&&a[An](!0),l.persisted&&!e?u():r(a,()=>{u(),c&&c()})};i?i(a,u,d):d()}else o(a,t,n)},j=(e,t,n,r=!1,i=!1)=>{let{type:a,props:o,ref:s,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:f,cacheIndex:p,memo:m}=e;if(d===-2&&(i=!1),s!=null&&(Ie(),In(s,null,n,e,!0),Le()),p!=null&&(t.renderCache[p]=void 0),u&256){t.ctx.deactivate(e);return}let h=u&1&&f,g=!Rn(e),_;if(g&&(_=o&&o.onVnodeBeforeUnmount)&&Y(_,t,e),u&6)he(e.component,n,r);else{if(u&128){e.suspense.unmount(n,r);return}h&&yn(e,null,t,`beforeUnmount`),u&64?e.type.remove(e,t,n,ye,r):l&&!l.hasOnce&&(a!==G||d>0&&d&64)?ge(l,t,n,!1,!0):(a===G&&d&384||!i&&u&16)&&ge(c,t,n),r&&pe(e)}let v=m!=null&&p==null;(g&&(_=o&&o.onVnodeUnmounted)||h||v)&&W(()=>{_&&Y(_,t,e),h&&yn(e,null,t,`unmounted`),v&&(e.el=null)},n)},pe=e=>{let{type:t,el:n,anchor:r,transition:i}=e;if(t===G){me(n,r);return}if(t===bi){C(e);return}let a=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(e.shapeFlag&1&&i&&!i.persisted){let{leave:t,delayLeave:r}=i,o=()=>t(n,a);r?r(e.el,a,o):o()}else a()},me=(e,t)=>{let n;for(;e!==t;)n=h(e),s(e),e=n;s(t)},he=(e,t,n)=>{let{bum:r,scope:i,job:a,subTree:o,um:s,m:c,a:l}=e;mi(c),mi(l),r&&ie(r),i.stop(),a&&(a.flags|=8,j(o,e,t,n)),s&&W(s,t),W(()=>{e.isUnmounted=!0},t)},ge=(e,t,n,r=!1,i=!1,a=0)=>{for(let o=a;o<e.length;o++)j(e[o],t,n,r,i)},_e=e=>{if(e.shapeFlag&6)return _e(e.component.subTree);if(e.shapeFlag&128)return e.suspense.next();let t=h(e.anchor||e.el),n=t&&t[On];return n?h(n):t},M=!1,ve=(e,t,n)=>{let r;e==null?t._vnode&&(j(t._vnode,null,null,!0),r=t._vnode.component):v(t._vnode||null,e,t,null,null,null,n),t._vnode=e,M||=(M=!0,fn(r),pn(),!1)},ye={p:v,um:j,m:fe,r:pe,mt:A,mc:E,pc:le,pbc:D,n:_e,o:e},be,N;return i&&([be,N]=i(ye)),{render:ve,hydrate:be,createApp:Or(ve,be)}}function ci({type:e,props:t},n){return n===`svg`&&e===`foreignObject`||n===`mathml`&&e===`annotation-xml`&&t&&t.encoding&&t.encoding.includes(`html`)?void 0:n}function li({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function ui(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function di(e,t,n=!1){let r=e.children,i=t.children;if(d(r)&&d(i))for(let e=0;e<r.length;e++){let t=r[e],a=i[e];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[e]=Ri(i[e]),a.el=t.el),!n&&a.patchFlag!==-2&&di(t,a)),a.type===vi&&(a.patchFlag===-1&&(a=i[e]=Ri(a)),a.el=t.el),a.type===yi&&!a.el&&(a.el=t.el)}}function fi(e){let t=e.slice(),n=[0],r,i,a,o,s,c=e.length;for(r=0;r<c;r++){let c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<c?a=s+1:o=s;c<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-- >0;)n[a]=o,o=t[o];return n}function pi(e){let t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:pi(t)}function mi(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function hi(e){if(e.placeholder)return e.placeholder;let t=e.component;return t?hi(t.subTree):null}var gi=e=>e.__isSuspense;function _i(e,t){t&&t.pendingBranch?d(e)?t.effects.push(...e):t.effects.push(e):dn(e)}var G=Symbol.for(`v-fgt`),vi=Symbol.for(`v-txt`),yi=Symbol.for(`v-cmt`),bi=Symbol.for(`v-stc`),xi=[],K=null;function Si(e=!1){xi.push(K=e?null:[])}function Ci(){xi.pop(),K=xi[xi.length-1]||null}var wi=1;function Ti(e,t=!1){wi+=e,e<0&&K&&t&&(K.hasOnce=!0)}function Ei(e){return e.dynamicChildren=wi>0?K||n:null,Ci(),wi>0&&K&&K.push(e),e}function Di(e,t,n,r,i,a){return Ei(Ni(e,t,n,r,i,a,!0))}function Oi(e,t,n,r,i){return Ei(q(e,t,n,r,i,!0))}function ki(e){return e?e.__v_isVNode===!0:!1}function Ai(e,t){return e.type===t.type&&e.key===t.key}var ji=({key:e})=>e??null,Mi=({ref:e,ref_key:t,ref_for:n})=>(typeof e==`number`&&(e=``+e),e==null?null:g(e)||R(e)||h(e)?{i:H,r:e,k:t,f:!!n}:e);function Ni(e,t=null,n=null,r=0,i=null,a=e===G?0:1,o=!1,s=!1){let c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ji(t),ref:t&&Mi(t),scopeId:gn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:H};return s?(zi(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=g(n)?8:16),wi>0&&!o&&K&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&K.push(c),c}var q=Pi;function Pi(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===rr)&&(e=yi),ki(e)){let r=Ii(e,t,!0);return n&&zi(r,n),wi>0&&!a&&K&&(r.shapeFlag&6?K[K.indexOf(e)]=r:K.push(r)),r.patchFlag=-2,r}if(sa(e)&&(e=e.__vccOpts),t){t=Fi(t);let{class:e,style:n}=t;e&&!g(e)&&(t.class=j(e)),v(n)&&(Nt(n)&&!d(n)&&(n=s({},n)),t.style=ce(n))}let o=g(e)?1:gi(e)?128:kn(e)?64:v(e)?4:h(e)?2:0;return Ni(e,t,n,r,i,o,a,!0)}function Fi(e){return e?Nt(e)||Wr(e)?s({},e):e:null}function Ii(e,t,n=!1,r=!1){let{props:i,ref:a,patchFlag:o,children:s,transition:c}=e,l=t?Bi(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&ji(l),ref:t&&t.ref?n&&a?d(a)?a.concat(Mi(t)):[a,Mi(t)]:Mi(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==G?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ii(e.ssContent),ssFallback:e.ssFallback&&Ii(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&jn(u,c.clone(u)),u}function Li(e=` `,t=0){return q(vi,null,e,t)}function J(e){return e==null||typeof e==`boolean`?q(yi):d(e)?q(G,null,e.slice()):ki(e)?Ri(e):q(vi,null,String(e))}function Ri(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ii(e)}function zi(e,t){let n=0,{shapeFlag:r}=e;if(t==null)t=null;else if(d(t))n=16;else if(typeof t==`object`)if(r&65){let n=t.default;n&&(n._c&&(n._d=!1),zi(e,n()),n._c&&(n._d=!0));return}else{n=32;let r=t._;!r&&!Wr(t)?t._ctx=H:r===3&&H&&(H.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else h(t)?(t={default:t,_ctx:H},n=32):(t=String(t),r&64?(n=16,t=[Li(t)]):n=8);e.children=t,e.shapeFlag|=n}function Bi(...e){let t={};for(let n=0;n<e.length;n++){let r=e[n];for(let e in r)if(e===`class`)t.class!==r.class&&(t.class=j([t.class,r.class]));else if(e===`style`)t.style=ce([t.style,r.style]);else if(a(e)){let n=t[e],i=r[e];i&&n!==i&&!(d(n)&&n.includes(i))?t[e]=n?[].concat(n,i):i:i==null&&n==null&&!o(e)&&(t[e]=i)}else e!==``&&(t[e]=r[e])}return t}function Y(e,t,n,r=null){z(e,t,7,[n,r])}var Vi=Er(),Hi=0;function Ui(e,n,r){let i=e.type,a=(n?n.appContext:e.appContext)||Vi,o={uid:Hi++,vnode:e,type:i,parent:n,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ve(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(a.provides),ids:n?n.ids:[``,0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Xr(i,a),emitsOptions:Nr(i,a),emit:null,emitted:null,propsDefaults:t,inheritAttrs:i.inheritAttrs,ctx:t,data:t,props:t,attrs:t,slots:t,refs:t,setupState:t,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=n?n.root:o,o.emit=jr.bind(null,o),e.ce&&e.ce(o),o}var X=null,Wi=()=>X||H,Gi,Ki;{let e=se(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach(t=>t(e)):r[0](e)}};Gi=t(`__VUE_INSTANCE_SETTERS__`,e=>X=e),Ki=t(`__VUE_SSR_SETTERS__`,e=>Xi=e)}var qi=e=>{let t=X;return Gi(e),e.scope.on(),()=>{e.scope.off(),Gi(t)}},Ji=()=>{X&&X.scope.off(),Gi(null)};function Yi(e){return e.vnode.shapeFlag&4}var Xi=!1;function Zi(e,t=!1,n=!1){t&&Ki(t);let{props:r,children:i}=e.vnode,a=Yi(e);Gr(e,r,a,t),ii(e,i,n||t);let o=a?Qi(e,t):void 0;return t&&Ki(!1),o}function Qi(e,t){let n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,ur);let{setup:r}=n;if(r){Ie();let n=e.setupContext=r.length>1?ia(e):null,i=qi(e),a=Qt(r,e,0,[e.props,n]),o=y(a);if(Le(),i(),(o||e.sp)&&!Rn(e)&&Nn(e),o){if(a.then(Ji,Ji),t)return a.then(n=>{$i(e,n,t)}).catch(t=>{$t(t,e,0)});e.asyncDep=a}else $i(e,a,t)}else na(e,t)}function $i(e,t,n){h(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:v(t)&&(e.setupState=Ut(t)),na(e,n)}var ea,ta;function na(e,t,n){let i=e.type;if(!e.render){if(!t&&ea&&!i.render){let t=i.template||_r(e).template;if(t){let{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:a,compilerOptions:o}=i;i.render=ea(t,s(s({isCustomElement:n,delimiters:a},r),o))}}e.render=i.render||r,ta&&ta(e)}{let t=qi(e);Ie();try{pr(e)}finally{Le(),t()}}}var ra={get(e,t){return F(e,`get`,``),e[t]}};function ia(e){return{attrs:new Proxy(e.attrs,ra),slots:e.slots,emit:e.emit,expose:t=>{e.exposed=t||{}}}}function aa(e){return e.exposed?e.exposeProxy||=new Proxy(Ut(Pt(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in cr)return cr[n](e)},has(e,t){return t in e||t in cr}}):e.proxy}function oa(e,t=!0){return h(e)?e.displayName||e.name:e.name||t&&e.__name}function sa(e){return h(e)&&`__vccOpts`in e}var Z=(e,t)=>Gt(e,t,Xi);function ca(e,t,n){try{Ti(-1);let r=arguments.length;return r===2?v(t)&&!d(t)?ki(t)?q(e,null,[t]):q(e,t):q(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ki(n)&&(n=[n]),q(e,t,n))}finally{Ti(1)}}var la=`3.5.35`,ua=void 0,da=typeof window<`u`&&window.trustedTypes;if(da)try{ua=da.createPolicy(`vue`,{createHTML:e=>e})}catch{}var fa=ua?e=>ua.createHTML(e):e=>e,pa=`http://www.w3.org/2000/svg`,ma=`http://www.w3.org/1998/Math/MathML`,ha=typeof document<`u`?document:null,ga=ha&&ha.createElement(`template`),_a={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i=t===`svg`?ha.createElementNS(pa,e):t===`mathml`?ha.createElementNS(ma,e):n?ha.createElement(e,{is:n}):ha.createElement(e);return e===`select`&&r&&r.multiple!=null&&i.setAttribute(`multiple`,r.multiple),i},createText:e=>ha.createTextNode(e),createComment:e=>ha.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ha.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},insertStaticContent(e,t,n,r,i,a){let o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{ga.innerHTML=fa(r===`svg`?`<svg>${e}</svg>`:r===`mathml`?`<math>${e}</math>`:e);let i=ga.content;if(r===`svg`||r===`mathml`){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},va=Symbol(`_vtc`);function ya(e,t,n){let r=e[va];r&&(t=(t?[t,...r]:[...r]).join(` `)),t==null?e.removeAttribute(`class`):n?e.setAttribute(`class`,t):e.className=t}var ba=Symbol(`_vod`),xa=Symbol(`_vsh`),Sa=Symbol(``),Ca=/(?:^|;)\s*display\s*:/;function wa(e,t,n){let r=e.style,i=g(n),a=!1;if(n&&!i){if(t)if(g(t))for(let e of t.split(`;`)){let t=e.slice(0,e.indexOf(`:`)).trim();n[t]??Ea(r,t,``)}else for(let e in t)n[e]??Ea(r,e,``);for(let i in n){i===`display`&&(a=!0);let o=n[i];o==null?Ea(r,i,``):Aa(e,i,!g(t)&&t?t[i]:void 0,o)||Ea(r,i,o)}}else if(i){if(t!==n){let e=r[Sa];e&&(n+=`;`+e),r.cssText=n,a=Ca.test(n)}}else t&&e.removeAttribute(`style`);ba in e&&(e[ba]=a?r.display:``,e[xa]&&(r.display=`none`))}var Ta=/\s*!important$/;function Ea(e,t,n){if(d(n))n.forEach(n=>Ea(e,t,n));else if(n??=``,t.startsWith(`--`))e.setProperty(t,n);else{let r=ka(e,t);Ta.test(n)?e.setProperty(D(r),n.replace(Ta,``),`important`):e[r]=n}}var Da=[`Webkit`,`Moz`,`ms`],Oa={};function ka(e,t){let n=Oa[t];if(n)return n;let r=E(t);if(r!==`filter`&&r in e)return Oa[t]=r;r=O(r);for(let n=0;n<Da.length;n++){let i=Da[n]+r;if(i in e)return Oa[t]=i}return t}function Aa(e,t,n,r){return e.tagName===`TEXTAREA`&&(t===`width`||t===`height`)&&g(r)&&n===r}var ja=`http://www.w3.org/1999/xlink`;function Ma(e,t,n,r,i,a=me(t)){r&&t.startsWith(`xlink:`)?n==null?e.removeAttributeNS(ja,t.slice(6,t.length)):e.setAttributeNS(ja,t,n):n==null||a&&!he(n)?e.removeAttribute(t):e.setAttribute(t,a?``:_(n)?String(n):n)}function Na(e,t,n,r,i){if(t===`innerHTML`||t===`textContent`){n!=null&&(e[t]=t===`innerHTML`?fa(n):n);return}let a=e.tagName;if(t===`value`&&a!==`PROGRESS`&&!a.includes(`-`)){let r=a===`OPTION`?e.getAttribute(`value`)||``:e.value,i=n==null?e.type===`checkbox`?`on`:``:String(n);(r!==i||!(`_value`in e))&&(e.value=i),n??e.removeAttribute(t),e._value=n;return}let o=!1;if(n===``||n==null){let r=typeof e[t];r===`boolean`?n=he(n):n==null&&r===`string`?(n=``,o=!0):r===`number`&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function Pa(e,t,n,r){e.addEventListener(t,n,r)}function Fa(e,t,n,r){e.removeEventListener(t,n,r)}var Ia=Symbol(`_vei`);function La(e,t,n,r,i=null){let a=e[Ia]||(e[Ia]={}),o=a[t];if(r&&o)o.value=r;else{let[n,s]=za(t);r?Pa(e,n,a[t]=Ua(r,i),s):o&&(Fa(e,n,o,s),a[t]=void 0)}}var Ra=/(?:Once|Passive|Capture)$/;function za(e){let t;if(Ra.test(e)){t={};let n;for(;n=e.match(Ra);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===`:`?e.slice(3):D(e.slice(2)),t]}var Ba=0,Va=Promise.resolve(),Ha=()=>Ba||=(Va.then(()=>Ba=0),Date.now());function Ua(e,t){let n=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=n.attached)return;let r=n.value;if(d(r)){let n=e.stopImmediatePropagation;e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0};let i=r.slice(),a=[e];for(let n=0;n<i.length&&!e._stopped;n++){let e=i[n];e&&z(e,t,5,a)}}else z(r,t,5,[e])};return n.value=e,n.attached=Ha(),n}var Wa=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Ga=(e,t,n,r,i,s)=>{let c=i===`svg`;t===`class`?ya(e,r,c):t===`style`?wa(e,n,r):a(t)?o(t)||La(e,t,n,r,s):(t[0]===`.`?(t=t.slice(1),!0):t[0]===`^`?(t=t.slice(1),!1):Ka(e,t,r,c))?(Na(e,t,r),!e.tagName.includes(`-`)&&(t===`value`||t===`checked`||t===`selected`)&&Ma(e,t,r,c,s,t!==`value`)):e._isVueCE&&(qa(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!g(r)))?Na(e,E(t),r,s,t):(t===`true-value`?e._trueValue=r:t===`false-value`&&(e._falseValue=r),Ma(e,t,r,c))};function Ka(e,t,n,r){if(r)return!!(t===`innerHTML`||t===`textContent`||t in e&&Wa(t)&&h(n));if(t===`spellcheck`||t===`draggable`||t===`translate`||t===`autocorrect`||t===`sandbox`&&e.tagName===`IFRAME`||t===`form`||t===`list`&&e.tagName===`INPUT`||t===`type`&&e.tagName===`TEXTAREA`)return!1;if(t===`width`||t===`height`){let t=e.tagName;if(t===`IMG`||t===`VIDEO`||t===`CANVAS`||t===`SOURCE`)return!1}return Wa(t)&&g(n)?!1:t in e}function qa(e,t){let n=e._def.props;if(!n)return!1;let r=E(t);return Array.isArray(n)?n.some(e=>E(e)===r):Object.keys(n).some(e=>E(e)===r)}var Ja=s({patchProp:Ga},_a),Ya;function Xa(){return Ya||=oi(Ja)}var Za=((...e)=>{let t=Xa().createApp(...e),{mount:n}=t;return t.mount=e=>{let r=$a(e);if(!r)return;let i=t._component;!h(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent=``);let a=n(r,!1,Qa(r));return r instanceof Element&&(r.removeAttribute(`v-cloak`),r.setAttribute(`data-v-app`,``)),a},t});function Qa(e){if(e instanceof SVGElement)return`svg`;if(typeof MathMLElement==`function`&&e instanceof MathMLElement)return`mathml`}function $a(e){return g(e)?document.querySelector(e):e}var eo=typeof window<`u`,to=Symbol(),no;(function(e){e.direct=`direct`,e.patchObject=`patch object`,e.patchFunction=`patch function`})(no||={});var ro=typeof window==`object`&&window.window===window?window:typeof self==`object`&&self.self===self?self:typeof global==`object`&&global.global===global?global:typeof globalThis==`object`?globalThis:{HTMLElement:null};function io(e,{autoBom:t=!1}={}){return t&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob([`﻿`,e],{type:e.type}):e}function ao(e,t,n){let r=new XMLHttpRequest;r.open(`GET`,e),r.responseType=`blob`,r.onload=function(){uo(r.response,t,n)},r.onerror=function(){console.error(`could not download file`)},r.send()}function oo(e){let t=new XMLHttpRequest;t.open(`HEAD`,e,!1);try{t.send()}catch{}return t.status>=200&&t.status<=299}function so(e){try{e.dispatchEvent(new MouseEvent(`click`))}catch{let t=new MouseEvent(`click`,{bubbles:!0,cancelable:!0,view:window,detail:0,screenX:80,screenY:20,clientX:80,clientY:20,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,button:0,relatedTarget:null});e.dispatchEvent(t)}}var co=typeof navigator==`object`?navigator:{userAgent:``},lo=/Macintosh/.test(co.userAgent)&&/AppleWebKit/.test(co.userAgent)&&!/Safari/.test(co.userAgent),uo=eo?typeof HTMLAnchorElement<`u`&&`download`in HTMLAnchorElement.prototype&&!lo?fo:`msSaveOrOpenBlob`in co?po:mo:()=>{};function fo(e,t=`download`,n){let r=document.createElement(`a`);r.download=t,r.rel=`noopener`,typeof e==`string`?(r.href=e,r.origin===location.origin?so(r):oo(r.href)?ao(e,t,n):(r.target=`_blank`,so(r))):(r.href=URL.createObjectURL(e),setTimeout(function(){URL.revokeObjectURL(r.href)},4e4),setTimeout(function(){so(r)},0))}function po(e,t=`download`,n){if(typeof e==`string`)if(oo(e))ao(e,t,n);else{let t=document.createElement(`a`);t.href=e,t.target=`_blank`,setTimeout(function(){so(t)})}else navigator.msSaveOrOpenBlob(io(e,n),t)}function mo(e,t,n,r){if(r||=open(``,`_blank`),r&&(r.document.title=r.document.body.innerText=`downloading...`),typeof e==`string`)return ao(e,t,n);let i=e.type===`application/octet-stream`,a=/constructor/i.test(String(ro.HTMLElement))||`safari`in ro,o=/CriOS\/[\d]+/.test(navigator.userAgent);if((o||i&&a||lo)&&typeof FileReader<`u`){let t=new FileReader;t.onloadend=function(){let e=t.result;if(typeof e!=`string`)throw r=null,Error(`Wrong reader.result type`);e=o?e:e.replace(/^data:[^;]*;/,`data:attachment/file;`),r?r.location.href=e:location.assign(e),r=null},t.readAsDataURL(e)}else{let t=URL.createObjectURL(e);r?r.location.assign(t):location.href=t,r=null,setTimeout(function(){URL.revokeObjectURL(t)},4e4)}}var{assign:ho}=Object;function go(){let e=ye(!0),t=e.run(()=>Lt({})),n=[],r=[],i=Pt({install(e){i._a=e,e.provide(to,i),e.config.globalProperties.$pinia=i,r.forEach(e=>n.push(e)),r=[]},use(e){return this._a?n.push(e):r.push(e),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return i}var{assign:_o}=Object,vo=`/assets/card-image-ahorra-happy-woman-Dv53LTVh.jpg`,yo=`/assets/simple-process-BpPKqJtA.jpg`,bo=`/assets/woman-DFUztWsh.jpg`,xo=`/assets/happy-woman-BkXnq6Iq.png`,So=`.ahorra-scope-hero {
      --deep: #12105a;
      --deep-2: #092f64;
      --blue: #073d73;
      --green: #00e06d;
      --green-soft: #73ffb5;
      --cyan: #18d5e5;
      --white: #ffffff;
      --muted: rgba(255,255,255,.78);
      --line: rgba(255,255,255,.22);
      --glass: rgba(255,255,255,.13);
      --container: 1400px;
      --shadow: 0 30px 90px rgba(0, 16, 60, .32);
    }

    .ahorra-scope-hero, .ahorra-scope-hero * { box-sizing: border-box; margin: 0; padding: 0; }
    .ahorra-scope-hero { scroll-behavior: smooth; }
    .ahorra-scope-hero {
      min-height: 100vh;
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      color: var(--white);
      background: var(--deep);
      overflow-x: hidden;
    }
    .ahorra-scope-hero a { color: inherit; text-decoration: none; }
    .ahorra-scope-hero img { display: block; max-width: 100%; }

    .ahorra-scope-hero .hero {
      position: relative;
      min-height: 100svh;
      overflow: hidden;
      background:
        radial-gradient(circle at 10% 80%, rgba(0,224,109,.92), transparent 30%),
        radial-gradient(circle at 78% 8%, rgba(0,214,101,.84), transparent 23%),
        radial-gradient(circle at 88% 78%, rgba(24,213,229,.78), transparent 28%),
        radial-gradient(circle at 28% 10%, rgba(76,32,148,.76), transparent 32%),
        radial-gradient(circle at 58% 58%, rgba(8,37,101,.95), transparent 38%),
        linear-gradient(135deg, #12105a 0%, #102b68 44%, #052f59 100%);
    }

    .ahorra-scope-hero .hero::before {
      content: "";
      position: absolute;
      inset: 0;
      background-image:
        linear-gradient(rgba(255,255,255,.052) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,.052) 1px, transparent 1px);
      background-size: 56px 56px;
      mask-image: linear-gradient(to bottom, rgba(0,0,0,.76), transparent 90%);
      pointer-events: none;
    }

    .ahorra-scope-hero .hero::after {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(90deg, rgba(6,10,64,.16), transparent 52%);
      pointer-events: none;
    }

    .ahorra-scope-hero .orb { position: absolute; border-radius: 999px; filter: blur(22px); pointer-events: none; opacity: .9; }
    .ahorra-scope-hero .orb.one { width: 420px; height: 420px; left: -150px; top: 150px; background: rgba(0,224,109,.34); }
    .ahorra-scope-hero .orb.two { width: 620px; height: 620px; right: -220px; bottom: -190px; background: rgba(24,213,229,.24); }

    .ahorra-scope-hero .energy-wave {
      position: absolute;
      z-index: 1;
      left: 22%;
      bottom: -24%;
      width: min(980px, 82vw);
      height: 330px;
      border-radius: 999px;
      background: linear-gradient(105deg, rgba(255,255,255,.92), rgba(115,255,181,.54) 48%, rgba(24,213,229,.30));
      transform: rotate(18deg);
      opacity: .62;
      filter: drop-shadow(0 34px 80px rgba(0,0,0,.32));
    }

    .ahorra-scope-hero .energy-wave::after {
      content: "";
      position: absolute;
      inset: 82px;
      border-radius: inherit;
      background: #11135a;
    }

    .ahorra-scope-hero .hero-inner {
      position: relative;
      z-index: 3;
      width: min(100% - 40px, var(--container));
      min-height: 100svh;
      margin-inline: auto;
      display: flex;
      flex-direction: column;
    }

    .ahorra-scope-hero .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 28px;
      padding: 30px 0;
    }

    .ahorra-scope-hero .brand { display: inline-flex; align-items: center; min-width: max-content; }
    .ahorra-scope-hero .brand-logo {
      width: clamp(168px, 16vw, 265px);
      height: auto;
      filter: drop-shadow(0 12px 26px rgba(0,0,0,.20));
    }

    .ahorra-scope-hero .nav {
      display: flex;
      align-items: center;
      gap: clamp(18px, 2.2vw, 38px);
      font-size: 15px;
      font-weight: 720;
      color: rgba(255,255,255,.86);
    }
    .ahorra-scope-hero .nav a { transition: opacity .18s ease, transform .18s ease; }
    .ahorra-scope-hero .nav a:hover { opacity: .72; transform: translateY(-1px); }

    .ahorra-scope-hero .header-actions { display: flex; align-items: center; gap: 18px; min-width: max-content; }
    .ahorra-scope-hero .phone { font-size: 14px; line-height: 1.16; font-weight: 850; }
    .ahorra-scope-hero .phone span { display: block; color: rgba(255,255,255,.64); font-weight: 750; }

    .ahorra-scope-hero .client-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 48px;
      padding: 0 22px;
      border-radius: 14px;
      color: #082c39;
      background: rgba(255,255,255,.92);
      font-weight: 850;
      box-shadow: 0 18px 42px rgba(0,0,0,.22);
      transition: transform .18s ease, box-shadow .18s ease;
    }
    .ahorra-scope-hero .client-btn:hover { transform: translateY(-2px); box-shadow: 0 22px 52px rgba(0,0,0,.3); }

    .ahorra-scope-hero .menu {
      display: none;
      width: 46px;
      height: 46px;
      border: 1px solid rgba(255,255,255,.18);
      border-radius: 14px;
      background: rgba(255,255,255,.12);
      backdrop-filter: blur(16px);
    }
    .ahorra-scope-hero .menu span { display: block; width: 18px; height: 2px; margin: 4px auto; border-radius: 99px; background: #fff; }

    .ahorra-scope-hero .hero-content {
      flex: 1;
      display: grid;
      grid-template-columns: minmax(0, 720px) 1fr;
      align-items: center;
      gap: 40px;
      padding: clamp(52px, 7vw, 112px) 0 36px;
    }

    .ahorra-scope-hero .eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 30px;
      padding: 11px 18px;
      border: 1px solid rgba(255,255,255,.24);
      border-radius: 999px;
      background: rgba(255,255,255,.14);
      backdrop-filter: blur(18px);
      color: rgba(255,255,255,.92);
      font-size: 14px;
      font-weight: 850;
      box-shadow: 0 18px 56px rgba(0,0,0,.18);
    }
    .ahorra-scope-hero .eyebrow::before {
      content: "";
      width: 9px;
      height: 9px;
      border-radius: 50%;
      background: var(--green);
      box-shadow: 0 0 0 6px rgba(0,224,109,.16);
    }

    .ahorra-scope-hero h1 {
      max-width: 760px;
      font-size: clamp(54px, 7.8vw, 116px);
      line-height: .94;
      letter-spacing: -.08em;
      font-weight: 900;
      text-wrap: balance;
    }

    .ahorra-scope-hero .lead {
      max-width: 660px;
      margin-top: 28px;
      color: var(--muted);
      font-size: clamp(21px, 2.4vw, 34px);
      line-height: 1.08;
      letter-spacing: -.045em;
      font-weight: 620;
      text-wrap: balance;
    }

    .ahorra-scope-hero .cta-row {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      margin-top: clamp(42px, 6vw, 78px);
    }

    .ahorra-scope-hero .cta {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 14px;
      min-height: 64px;
      padding: 0 18px 0 30px;
      border-radius: 999px;
      font-size: 16px;
      font-weight: 900;
      letter-spacing: -.03em;
      box-shadow: var(--shadow);
      transition: transform .18s ease, box-shadow .18s ease;
    }
    .ahorra-scope-hero .cta:hover { transform: translateY(-3px); box-shadow: 0 34px 100px rgba(0,0,0,.38); }
    .ahorra-scope-hero .cta.primary { background: linear-gradient(135deg, var(--green), var(--green-soft)); color: #07115a; }
    .ahorra-scope-hero .cta.secondary {
      border: 1px solid rgba(255,255,255,.22);
      background: rgba(255,255,255,.15);
      color: #fff;
      backdrop-filter: blur(18px);
    }
    .ahorra-scope-hero .cta-icon {
      display: inline-grid;
      place-items: center;
      width: 46px;
      height: 46px;
      border-radius: 50%;
      background: rgba(255,255,255,.94);
      color: #07115a;
      flex: 0 0 auto;
    }

    .ahorra-scope-hero .visual {
      position: relative;
      min-height: 520px;
    }

    .ahorra-scope-hero .visual::before {
      content: "";
      position: absolute;
      right: 5%;
      top: 18%;
      width: min(360px, 34vw);
      aspect-ratio: 1;
      border-radius: 42% 58% 52% 48%;
      background: linear-gradient(135deg, rgba(255,255,255,.22), rgba(115,255,181,.18), rgba(24,213,229,.18));
      border: 1px solid rgba(255,255,255,.18);
      backdrop-filter: blur(18px);
      box-shadow: 0 34px 90px rgba(0,0,0,.18);
      opacity: .55;
    }

    .ahorra-scope-hero .visual::after {
      content: "";
      position: absolute;
      right: 20%;
      bottom: 22%;
      width: min(190px, 22vw);
      height: min(190px, 22vw);
      border-radius: 999px;
      background: radial-gradient(circle, rgba(0,224,109,.28), rgba(24,213,229,.12), transparent 72%);
      filter: blur(4px);
      opacity: .75;
    }

    .ahorra-scope-hero .hero-footer {
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: end;
      gap: 24px;
      padding: 24px 0 42px;
      border-top: 1px solid var(--line);
      font-size: 15px;
    }
    .ahorra-scope-hero .hero-footer strong { display: block; margin-bottom: 8px; font-weight: 900; }
    .ahorra-scope-hero .hero-footer a { color: rgba(255,255,255,.82); font-weight: 750; }
    .ahorra-scope-hero .footer-right { text-align: right; }

    @media (max-width: 1180px) {
      .ahorra-scope-hero .nav { display: none; }
      .ahorra-scope-hero .menu { display: inline-block; }
      .ahorra-scope-hero .visual { min-height: 420px; }
    }

    @media (max-width: 920px) {
      .ahorra-scope-hero .hero-inner { width: min(100% - 32px, var(--container)); }
      .ahorra-scope-hero .header { padding: 22px 0; }
      .ahorra-scope-hero .phone, .ahorra-scope-hero .client-btn { display: none; }
      .ahorra-scope-hero .hero-content { grid-template-columns: 1fr; padding: 48px 0 28px; }
      .ahorra-scope-hero .visual { min-height: 220px; }
      .ahorra-scope-hero .visual::before { right: -40px; top: 10px; width: 280px; opacity: .34; }
      .ahorra-scope-hero .visual::after { right: 70px; bottom: 20px; width: 140px; height: 140px; opacity: .42; }
      .ahorra-scope-hero .energy-wave { left: 5%; bottom: 8%; width: 720px; height: 250px; opacity: .42; }
      .ahorra-scope-hero .hero-footer { grid-template-columns: 1fr; align-items: start; }
      .ahorra-scope-hero .footer-right { text-align: left; }
    }

    @media (max-width: 560px) {
      .ahorra-scope-hero .hero-inner { width: min(100% - 24px, var(--container)); }
      .ahorra-scope-hero .brand-logo { width: 175px; }
      .ahorra-scope-hero .eyebrow { margin-bottom: 22px; font-size: 13px; }
      .ahorra-scope-hero h1 { font-size: clamp(46px, 15vw, 72px); letter-spacing: -.075em; }
      .ahorra-scope-hero .lead { margin-top: 22px; font-size: 22px; line-height: 1.12; }
      .ahorra-scope-hero .cta-row { display: grid; grid-template-columns: 1fr; margin-top: 36px; }
      .ahorra-scope-hero .cta { width: 100%; min-height: 60px; justify-content: space-between; }
      .ahorra-scope-hero .visual { min-height: 160px; }
      .ahorra-scope-hero .visual::before { right: -90px; width: 260px; opacity: .26; }
      .ahorra-scope-hero .visual::after { right: 40px; width: 120px; height: 120px; opacity: .34; }
      .ahorra-scope-hero .energy-wave { left: -28%; width: 640px; height: 220px; opacity: .34; }
      .ahorra-scope-hero .hero-footer { padding-bottom: 28px; font-size: 14px; }
    }

    @media (prefers-reduced-motion: reduce) {
      .ahorra-scope-hero, .ahorra-scope-hero *, .ahorra-scope-hero::before, .ahorra-scope-hero *::before, .ahorra-scope-hero::after, .ahorra-scope-hero *::after { scroll-behavior: auto !important; transition: none !important; }
    }

.ahorra-scope-benefits {
      --asl-green: #00b894;
      --asl-green-light: #70edc7;
      --asl-blue: #083a78;
      --asl-blue-soft: #256d9f;
      --asl-cyan: #00b8c8;
      --asl-ink: #071827;
      --asl-text: #4f5d73;
      --asl-muted: #6f7b8f;
      --asl-bg: #f5f8fb;
      --asl-card: #ffffff;
      --asl-line: rgba(8, 58, 120, 0.11);
      --asl-shadow: 0 24px 70px rgba(7, 24, 39, 0.09);
      --asl-radius: 24px;
      --asl-container: 1180px;
    }

    .ahorra-scope-benefits, .ahorra-scope-benefits * { box-sizing: border-box; margin: 0; padding: 0; }
    .ahorra-scope-benefits { scroll-behavior: smooth; }
    .ahorra-scope-benefits {
      min-height: 100vh;
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      color: var(--asl-ink);
      background: #ffffff;
      overflow-x: hidden;
    }

    .ahorra-scope-benefits .benefits-section {
      position: relative;
      overflow: hidden;
      padding: clamp(72px, 8vw, 118px) 20px clamp(80px, 9vw, 130px);
      background:
        radial-gradient(circle at 16% 20%, rgba(0, 184, 148, 0.13), transparent 28%),
        radial-gradient(circle at 82% 8%, rgba(0, 184, 200, 0.11), transparent 25%),
        linear-gradient(180deg, #f8fbff 0%, #f3f8fb 58%, #eef7fb 100%);
    }

    .ahorra-scope-benefits .benefits-section::before {
      content: "";
      position: absolute;
      inset: 0;
      background-image:
        linear-gradient(rgba(8, 58, 120, 0.035) 1px, transparent 1px),
        linear-gradient(90deg, rgba(8, 58, 120, 0.035) 1px, transparent 1px);
      background-size: 48px 48px;
      mask-image: linear-gradient(to bottom, rgba(0,0,0,0.55), transparent 76%);
      pointer-events: none;
    }

    .ahorra-scope-benefits .benefits-container {
      position: relative;
      z-index: 1;
      width: min(100%, var(--asl-container));
      margin-inline: auto;
    }

    .ahorra-scope-benefits .benefits-top {
      display: grid;
      grid-template-columns: minmax(0, 0.86fr) minmax(420px, 1fr);
      gap: clamp(48px, 7vw, 108px);
      align-items: start;
    }

    .ahorra-scope-benefits .benefits-copy { padding-top: clamp(8px, 3vw, 34px); }

    .ahorra-scope-benefits .section-kicker {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 18px;
      color: var(--asl-blue-soft);
      font-size: clamp(14px, 1.3vw, 16px);
      font-weight: 850;
      letter-spacing: -0.02em;
    }

    .ahorra-scope-benefits .section-kicker::before {
      content: "";
      width: 9px;
      height: 9px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--asl-green), var(--asl-cyan));
      box-shadow: 0 0 0 7px rgba(0, 184, 148, 0.12);
    }

    .ahorra-scope-benefits .benefits-title {
      max-width: 540px;
      font-size: clamp(40px, 5.4vw, 66px);
      line-height: 0.98;
      letter-spacing: -0.07em;
      font-weight: 900;
      color: var(--asl-ink);
      text-wrap: balance;
    }

    .ahorra-scope-benefits .benefits-description {
      max-width: 530px;
      margin-top: 24px;
      color: var(--asl-text);
      font-size: clamp(17px, 1.6vw, 21px);
      line-height: 1.42;
      letter-spacing: -0.025em;
      font-weight: 520;
    }

    .ahorra-scope-benefits .benefits-list {
      display: grid;
      gap: clamp(26px, 3.2vw, 42px);
    }

    .ahorra-scope-benefits .benefit-item {
      display: grid;
      grid-template-columns: 54px 1fr;
      gap: 18px;
      align-items: start;
    }

    .ahorra-scope-benefits .benefit-icon {
      display: grid;
      place-items: center;
      width: 54px;
      height: 54px;
      border-radius: 16px;
      color: var(--asl-blue);
      background: linear-gradient(180deg, rgba(255,255,255,0.92), rgba(255,255,255,0.64));
      border: 1px solid var(--asl-line);
      box-shadow: 0 14px 34px rgba(8, 58, 120, 0.08);
      backdrop-filter: blur(12px);
    }

    .ahorra-scope-benefits .benefit-icon svg {
      width: 25px;
      height: 25px;
      stroke: currentColor;
      stroke-width: 2;
      fill: none;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    .ahorra-scope-benefits .benefit-item h3 {
      margin-bottom: 8px;
      color: var(--asl-blue-soft);
      font-size: clamp(20px, 2vw, 24px);
      line-height: 1.15;
      letter-spacing: -0.04em;
      font-weight: 850;
    }

    .ahorra-scope-benefits .benefit-item p {
      max-width: 540px;
      color: var(--asl-text);
      font-size: clamp(16px, 1.45vw, 18px);
      line-height: 1.46;
      letter-spacing: -0.02em;
      font-weight: 500;
    }

    .ahorra-scope-benefits .family-card {
      position: relative;
      margin-top: clamp(56px, 7vw, 86px);
      border-radius: 30px;
      overflow: hidden;
      min-height: clamp(340px, 42vw, 520px);
      background:
        radial-gradient(circle at 18% 18%, rgba(112, 237, 199, 0.55), transparent 28%),
        radial-gradient(circle at 86% 14%, rgba(0, 184, 200, 0.38), transparent 32%),
        linear-gradient(135deg, #eafcf7 0%, #f8fbff 48%, #e8f7ff 100%);
      box-shadow: var(--asl-shadow);
      border: 1px solid rgba(255,255,255,0.74);
      isolation: isolate;
    }

    .ahorra-scope-benefits .family-card::before {
      content: "";
      position: absolute;
      inset: 0;
      background-image:
        linear-gradient(rgba(8, 58, 120, 0.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(8, 58, 120, 0.04) 1px, transparent 1px);
      background-size: 42px 42px;
      opacity: 0.7;
    }

    .ahorra-scope-benefits .family-card::after {
      content: "";
      position: absolute;
      left: 6%;
      right: 6%;
      bottom: 7%;
      height: 32%;
      border-radius: 999px 999px 44px 44px;
      background: linear-gradient(135deg, #0e4c7c, #00b894);
      opacity: 0.14;
      filter: blur(2px);
    }

    .ahorra-scope-benefits .family-illustration {
      position: absolute;
      inset: auto 0 0;
      z-index: 2;
      width: 100%;
      height: 100%;
    }

    .ahorra-scope-benefits .media-badge {
      position: absolute;
      left: clamp(18px, 3vw, 34px);
      bottom: clamp(18px, 3vw, 34px);
      z-index: 4;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 12px 16px;
      border-radius: 999px;
      color: #ffffff;
      font-size: 14px;
      font-weight: 800;
      letter-spacing: -0.02em;
      background: rgba(7, 24, 39, 0.42);
      border: 1px solid rgba(255,255,255,0.22);
      backdrop-filter: blur(16px);
      box-shadow: 0 18px 50px rgba(7,24,39,0.22);
    }

    .ahorra-scope-benefits .media-badge span {
      width: 9px;
      height: 9px;
      border-radius: 50%;
      background: var(--asl-green-light);
      box-shadow: 0 0 0 6px rgba(112,237,199,0.18);
    }

    @media (max-width: 980px) {
      .ahorra-scope-benefits .benefits-top { grid-template-columns: 1fr; gap: 44px; }
      .ahorra-scope-benefits .benefits-copy { padding-top: 0; }
      .ahorra-scope-benefits .benefits-title, .ahorra-scope-benefits .benefits-description { max-width: 720px; }
      .ahorra-scope-benefits .benefits-list { grid-template-columns: 1fr; }
    }

    @media (max-width: 640px) {
      .ahorra-scope-benefits .benefits-section {
        padding: 64px 16px 82px;
        background:
          radial-gradient(circle at 10% 10%, rgba(0, 184, 148, 0.12), transparent 32%),
          linear-gradient(180deg, #f8fbff 0%, #f4f9fb 58%, #eef7fb 100%);
      }
      .ahorra-scope-benefits .benefits-title { font-size: clamp(38px, 12vw, 52px); }
      .ahorra-scope-benefits .benefit-item { grid-template-columns: 46px 1fr; gap: 14px; }
      .ahorra-scope-benefits .benefit-icon { width: 46px; height: 46px; border-radius: 14px; }
      .ahorra-scope-benefits .benefit-icon svg { width: 22px; height: 22px; }
      .ahorra-scope-benefits .family-card { margin-top: 44px; min-height: 420px; border-radius: 24px; }
      .ahorra-scope-benefits .family-illustration { width: 148%; left: -24%; }
      .ahorra-scope-benefits .media-badge { left: 14px; right: 14px; justify-content: center; text-align: center; }
    }

    @media (prefers-reduced-motion: reduce) {
      .ahorra-scope-benefits, .ahorra-scope-benefits *, .ahorra-scope-benefits::before, .ahorra-scope-benefits *::before, .ahorra-scope-benefits::after, .ahorra-scope-benefits *::after { scroll-behavior: auto !important; transition: none !important; }
    }

.ahorra-scope-solutions {
      --primary: #00b894;
      --primary-2: #20e98b;
      --secondary: #0097a7;
      --blue: #102a72;
      --indigo: #27136d;
      --ink: #071426;
      --muted: #5f6b7f;
      --line: rgba(7, 20, 38, 0.10);
      --card: rgba(255, 255, 255, 0.84);
      --soft: #f6faf9;
      --shadow: 0 24px 70px rgba(16, 42, 114, 0.10);
      --radius: 22px;
      --container: 1080px;
    }

    .ahorra-scope-solutions, .ahorra-scope-solutions * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    .ahorra-scope-solutions {
      min-height: 100vh;
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      color: var(--ink);
      background:
        radial-gradient(circle at 12% 8%, rgba(32, 233, 139, .16), transparent 28%),
        radial-gradient(circle at 88% 18%, rgba(0, 151, 167, .14), transparent 30%),
        linear-gradient(180deg, #ffffff 0%, #f7fbfa 100%);
    }

    .ahorra-scope-solutions img,
    .ahorra-scope-solutions svg {
      display: block;
      max-width: 100%;
    }

    .ahorra-scope-solutions a {
      color: inherit;
      text-decoration: none;
    }

    .ahorra-scope-solutions .services-section {
      position: relative;
      overflow: hidden;
      padding: clamp(64px, 8vw, 108px) 20px;
      background:
        linear-gradient(180deg, rgba(255,255,255,.96), rgba(246,250,249,.98));
    }

    .ahorra-scope-solutions .services-section::before {
      content: "";
      position: absolute;
      inset: 0;
      background-image:
        linear-gradient(rgba(0, 151, 167, .045) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 184, 148, .045) 1px, transparent 1px);
      background-size: 54px 54px;
      mask-image: linear-gradient(to bottom, rgba(0,0,0,.55), transparent 78%);
      pointer-events: none;
    }

    .ahorra-scope-solutions .services-section::after {
      content: "";
      position: absolute;
      width: 520px;
      height: 520px;
      right: -180px;
      top: 80px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(32,233,139,.18), rgba(0,151,167,.08) 46%, transparent 70%);
      filter: blur(8px);
      pointer-events: none;
    }

    .ahorra-scope-solutions .container {
      position: relative;
      z-index: 1;
      width: min(100%, var(--container));
      margin-inline: auto;
    }

    .ahorra-scope-solutions .section-header {
      max-width: 830px;
      margin-inline: auto;
      text-align: center;
      margin-bottom: clamp(34px, 5vw, 52px);
    }

    .ahorra-scope-solutions .eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 16px;
      padding: 9px 15px;
      border-radius: 999px;
      background: rgba(255,255,255,.76);
      border: 1px solid rgba(0,184,148,.18);
      box-shadow: 0 12px 36px rgba(0,151,167,.08);
      color: var(--secondary);
      font-size: 14px;
      font-weight: 800;
      letter-spacing: -0.02em;
    }

    .ahorra-scope-solutions .eyebrow span {
      width: 8px;
      height: 8px;
      border-radius: 999px;
      background: linear-gradient(135deg, var(--primary), var(--primary-2));
      box-shadow: 0 0 0 6px rgba(0,184,148,.12);
    }

    .ahorra-scope-solutions h2 {
      font-size: clamp(34px, 5vw, 58px);
      line-height: .98;
      letter-spacing: -0.065em;
      color: #071426;
      font-weight: 900;
      text-wrap: balance;
    }

    .ahorra-scope-solutions .section-header p {
      max-width: 760px;
      margin: 18px auto 0;
      color: var(--muted);
      font-size: clamp(16px, 1.7vw, 20px);
      line-height: 1.5;
      letter-spacing: -0.025em;
      text-wrap: balance;
    }

    .ahorra-scope-solutions .cards-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 28px;
    }

    .ahorra-scope-solutions .service-card {
      position: relative;
      overflow: hidden;
      border-radius: var(--radius);
      background: var(--card);
      border: 1px solid var(--line);
      box-shadow: 0 1px 0 rgba(255,255,255,.9) inset;
      transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease;
      backdrop-filter: blur(16px);
    }

    .ahorra-scope-solutions .service-card:hover {
      transform: translateY(-6px);
      box-shadow: var(--shadow);
      border-color: rgba(0, 184, 148, .24);
    }

    .ahorra-scope-solutions .media {
      position: relative;
      min-height: 178px;
      overflow: hidden;
      background:
        radial-gradient(circle at 18% 24%, rgba(32,233,139,.48), transparent 30%),
        radial-gradient(circle at 78% 16%, rgba(0,151,167,.38), transparent 36%),
        linear-gradient(135deg, var(--indigo), var(--blue) 48%, #0aa278);
    }

    .ahorra-scope-solutions .media::before {
      content: "";
      position: absolute;
      inset: 0;
      background-image:
        linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px);
      background-size: 30px 30px;
      opacity: .5;
    }

    .ahorra-scope-solutions .media::after {
      content: "";
      position: absolute;
      inset: auto -20% -44% -20%;
      height: 100px;
      border-radius: 50%;
      background: rgba(255,255,255,.18);
      filter: blur(16px);
    }

    .ahorra-scope-solutions .service-illustration {
      position: absolute;
      inset: 0;
      display: grid;
      place-items: center;
      padding: 28px;
    }

    .ahorra-scope-solutions .service-illustration svg {
      width: 118px;
      height: 118px;
      filter: drop-shadow(0 24px 38px rgba(0,0,0,.25));
    }

    .ahorra-scope-solutions .card-body {
      padding: 22px 22px 26px;
    }

    .ahorra-scope-solutions .card-title-row {
      display: flex;
      align-items: start;
      justify-content: space-between;
      gap: 12px;
      margin-bottom: 10px;
    }

    .ahorra-scope-solutions h3 {
      color: #0a1829;
      font-size: 22px;
      line-height: 1.1;
      letter-spacing: -0.045em;
      font-weight: 900;
    }

    .ahorra-scope-solutions .arrow {
      display: grid;
      place-items: center;
      width: 34px;
      height: 34px;
      flex: 0 0 auto;
      border-radius: 999px;
      color: #072037;
      background: rgba(0,184,148,.09);
      border: 1px solid rgba(0,184,148,.14);
      font-size: 18px;
      font-weight: 900;
      transition: transform .22s ease, background .22s ease;
    }

    .ahorra-scope-solutions .service-card:hover .arrow {
      transform: translate(2px, -2px);
      background: rgba(0,184,148,.16);
    }

    .ahorra-scope-solutions .card-body p {
      color: var(--muted);
      font-size: 15.5px;
      line-height: 1.48;
      letter-spacing: -0.018em;
    }

    .ahorra-scope-solutions .highlight {
      color: var(--primary);
      font-weight: 850;
    }

    @media (max-width: 980px) {
      .ahorra-scope-solutions .cards-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }

    @media (max-width: 640px) {
      .ahorra-scope-solutions .services-section {
        padding: 56px 16px;
      }

      .ahorra-scope-solutions .section-header {
        text-align: left;
        margin-bottom: 30px;
      }

      .ahorra-scope-solutions .section-header p {
        margin-inline: 0;
      }

      .ahorra-scope-solutions .cards-grid {
        grid-template-columns: 1fr;
        gap: 18px;
      }

      .ahorra-scope-solutions .media {
        min-height: 156px;
      }

      .ahorra-scope-solutions .service-illustration svg {
        width: 96px;
        height: 96px;
      }

      .ahorra-scope-solutions .card-body {
        padding: 20px;
      }

      .ahorra-scope-solutions h3 {
        font-size: 21px;
      }
    }

.ahorra-scope-clientes-faixa{
      --deep:#15145c;
      --blue:#083a78;
      --cyan:#18c9db;
      --green:#19e56f;
      --violet:#37106f;
      --white:#fff;
      --muted:rgba(255,255,255,.78);
    }

    .ahorra-scope-clientes-faixa, .ahorra-scope-clientes-faixa *{box-sizing:border-box;margin:0;padding:0}

    .ahorra-scope-clientes-faixa{
      min-height:100vh;
      display:grid;
      place-items:center;
      background:#f5f8fb;
      font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
    }

    .ahorra-scope-clientes-faixa .logo-marquee-section{
      position:relative;
      width:100%;
      overflow:hidden;
      isolation:isolate;
      padding:clamp(20px,2.6vw,34px) 0;
      color:var(--white);
      background:
        radial-gradient(circle at 12% 84%, rgba(25,229,111,.92), transparent 30%),
        radial-gradient(circle at 80% 18%, rgba(24,201,219,.72), transparent 24%),
        radial-gradient(circle at 52% 8%, rgba(55,16,111,.78), transparent 30%),
        linear-gradient(115deg, #18125f 0%, #0b3772 44%, #0a715f 100%);
      background-size:140% 140%;
      animation:bgMove 16s ease-in-out infinite alternate;
    }

    .ahorra-scope-clientes-faixa .logo-marquee-section::before{
      content:"";
      position:absolute;
      inset:0;
      z-index:-2;
      background:
        linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px),
        linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px);
      background-size:56px 56px;
      opacity:.32;
      mask-image:linear-gradient(90deg, transparent, #000 14%, #000 86%, transparent);
    }

    .ahorra-scope-clientes-faixa .logo-marquee-section::after{
      content:"";
      position:absolute;
      inset:-30%;
      z-index:-1;
      background:
        radial-gradient(circle at 25% 40%, rgba(25,229,111,.24), transparent 22%),
        radial-gradient(circle at 72% 60%, rgba(24,201,219,.22), transparent 20%),
        radial-gradient(circle at 48% 18%, rgba(255,255,255,.12), transparent 18%);
      filter:blur(28px);
      animation:pulseGlow 7s ease-in-out infinite alternate;
      pointer-events:none;
    }

    .ahorra-scope-clientes-faixa .marquee-container{
      width:min(100% - 32px, 1440px);
      margin-inline:auto;
    }

    .ahorra-scope-clientes-faixa .marquee-title{
      margin-bottom:clamp(16px,1.8vw,24px);
      text-align:center;
      color:#fff;
      font-size:clamp(18px,1.7vw,24px);
      line-height:1.1;
      letter-spacing:-.035em;
      font-weight:850;
      white-space:nowrap;
      text-wrap:nowrap;
      text-shadow:0 10px 30px rgba(0,0,0,.18);
    }

    .ahorra-scope-clientes-faixa .marquee-shell{
      position:relative;
      overflow:hidden;
      width:100%;
      mask-image:linear-gradient(90deg, transparent 0%, #000 9%, #000 91%, transparent 100%);
    }

    .ahorra-scope-clientes-faixa .marquee-track{
      display:flex;
      align-items:center;
      gap:clamp(38px,5vw,86px);
      width:max-content;
      animation:scrollLogos 38s linear infinite;
      will-change:transform;
    }

    .ahorra-scope-clientes-faixa .marquee-shell:hover .marquee-track{
      animation-play-state:paused;
    }

    .ahorra-scope-clientes-faixa .logo-item{
      flex:0 0 auto;
      display:flex;
      align-items:center;
      justify-content:center;
      min-width:clamp(150px,16vw,240px);
      min-height:52px;
      padding:6px 6px;
      color:rgba(255,255,255,.9);
      opacity:.88;
      filter:drop-shadow(0 16px 24px rgba(0,0,0,.18));
      transition:opacity .2s ease, transform .2s ease, filter .2s ease;
    }

    .ahorra-scope-clientes-faixa .logo-item:hover{
      opacity:1;
      transform:translateY(-2px) scale(1.015);
      filter:drop-shadow(0 22px 32px rgba(0,0,0,.22));
    }

    .ahorra-scope-clientes-faixa .brand-word{
      display:block;
      font-weight:900;
      letter-spacing:-.06em;
      line-height:.9;
      color:#fff;
      text-align:center;
      white-space:nowrap;
    }

    .ahorra-scope-clientes-faixa .brand-sub{
      display:block;
      margin-top:6px;
      font-size:10px;
      font-weight:700;
      letter-spacing:.12em;
      color:rgba(255,255,255,.68);
      text-align:center;
      text-transform:uppercase;
    }

    .ahorra-scope-clientes-faixa .digitus .brand-word{font-size:32px;filter:blur(.2px)}
    .ahorra-scope-clientes-faixa .balanza .brand-word{font-size:18px;letter-spacing:-.04em;border:1px solid rgba(255,255,255,.72);border-radius:4px;padding:5px 10px;background:rgba(255,255,255,.12)}
    .ahorra-scope-clientes-faixa .marbella .brand-word{font-size:16px;letter-spacing:.12em;line-height:1.05;text-transform:uppercase}
    .ahorra-scope-clientes-faixa .fartons .brand-word{font-size:24px;letter-spacing:-.05em;font-style:italic}
    .ahorra-scope-clientes-faixa .levante .brand-word{font-size:20px;letter-spacing:-.03em;border:2px solid rgba(255,255,255,.72);border-radius:999px;width:52px;height:52px;display:grid;place-items:center;margin:auto}
    .ahorra-scope-clientes-faixa .acuidas .brand-word{font-size:28px;font-weight:500;letter-spacing:-.08em}
    .ahorra-scope-clientes-faixa .veles .brand-word{font-size:28px;letter-spacing:.02em;line-height:.72}
    .ahorra-scope-clientes-faixa .huertana .brand-word{font-size:25px;font-family:Georgia,serif;font-style:italic;font-weight:500;letter-spacing:-.05em}
    .ahorra-scope-clientes-faixa .solar .brand-word{font-size:23px;letter-spacing:-.04em}
    .ahorra-scope-clientes-faixa .nexo .brand-word{font-size:26px;letter-spacing:.02em}

    @keyframes scrollLogos{
      from{transform:translate3d(0,0,0)}
      to{transform:translate3d(-50%,0,0)}
    }

    @keyframes bgMove{
      0%{background-position:0% 40%}
      50%{background-position:70% 30%}
      100%{background-position:100% 80%}
    }

    @keyframes pulseGlow{
      0%{opacity:.58;transform:translate3d(-1.5%,0,0) scale(1)}
      100%{opacity:.9;transform:translate3d(1.5%,1%,0) scale(1.04)}
    }

    @media (max-width:768px){
      .ahorra-scope-clientes-faixa .logo-marquee-section{padding:22px 0}
      .ahorra-scope-clientes-faixa .marquee-title{max-width:none;margin-inline:auto;margin-bottom:18px;white-space:nowrap;font-size:16px}
      .ahorra-scope-clientes-faixa .marquee-track{gap:34px;animation-duration:30s}
      .ahorra-scope-clientes-faixa .logo-item{min-width:132px;min-height:48px}
      .ahorra-scope-clientes-faixa .digitus .brand-word{font-size:27px}
      .ahorra-scope-clientes-faixa .acuidas .brand-word,.ahorra-scope-clientes-faixa .veles .brand-word{font-size:24px}
    }

    @media (max-width:420px){
      .ahorra-scope-clientes-faixa .marquee-title{font-size:13px;letter-spacing:-.025em}
      .ahorra-scope-clientes-faixa .logo-item{min-width:118px}
    }

    @media (prefers-reduced-motion:reduce){
      .ahorra-scope-clientes-faixa .logo-marquee-section,
      .ahorra-scope-clientes-faixa .logo-marquee-section::after,
      .ahorra-scope-clientes-faixa .marquee-track{animation:none!important}
      .ahorra-scope-clientes-faixa .marquee-shell{overflow-x:auto;mask-image:none;padding-bottom:8px}
    }

.ahorra-scope-como-funciona{
      --ink:#071827;
      --muted:#647184;
      --soft:#f6f9fb;
      --line:rgba(7,24,39,.10);
      --blue:#172a78;
      --blue-2:#0b65b8;
      --green:#00d47e;
      --green-2:#00b894;
      --cyan:#12c8d8;
      --white:#fff;
      --radius:34px;
      --shadow:0 28px 90px rgba(15,32,70,.10);
      --max:1180px;
    }

    .ahorra-scope-como-funciona, .ahorra-scope-como-funciona *{box-sizing:border-box;margin:0;padding:0}
    .ahorra-scope-como-funciona{scroll-behavior:smooth}
    .ahorra-scope-como-funciona{
      font-family:-apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",Inter,"Segoe UI",Roboto,Arial,sans-serif;
      background:#fff;
      color:var(--ink);
      -webkit-font-smoothing:antialiased;
      text-rendering:optimizeLegibility;
    }

    .ahorra-scope-como-funciona .asl-process{
      position:relative;
      overflow:hidden;
      padding:clamp(72px,8vw,128px) 20px;
      background:
        radial-gradient(circle at 12% 18%, rgba(0,212,126,.10), transparent 30%),
        radial-gradient(circle at 82% 34%, rgba(18,200,216,.12), transparent 28%),
        linear-gradient(180deg,#fff 0%,#f7fbff 100%);
    }

    .ahorra-scope-como-funciona .asl-process::before{
      content:"";
      position:absolute;
      inset:auto -10% -30% -10%;
      height:55%;
      background:
        radial-gradient(circle at 24% 40%,rgba(0,212,126,.16),transparent 34%),
        radial-gradient(circle at 78% 30%,rgba(23,42,120,.12),transparent 36%);
      filter:blur(22px);
      pointer-events:none;
    }

    .ahorra-scope-como-funciona .wrap{
      position:relative;
      z-index:1;
      width:min(100%,var(--max));
      margin-inline:auto;
      display:grid;
      grid-template-columns:minmax(320px, .92fr) minmax(360px, 1.08fr);
      gap:clamp(44px,7vw,92px);
      align-items:center;
    }

    .ahorra-scope-como-funciona .media{
      position:relative;
      min-height:clamp(390px,45vw,610px);
      display:grid;
      place-items:center;
    }

    .ahorra-scope-como-funciona .blob{
      position:absolute;
      width:min(86%,510px);
      aspect-ratio:1;
      border-radius:38% 62% 56% 44% / 44% 40% 60% 56%;
      background:
        radial-gradient(circle at 28% 18%,rgba(255,255,255,.55),transparent 26%),
        linear-gradient(135deg,var(--green) 0%,var(--cyan) 38%,var(--blue) 100%);
      box-shadow:0 42px 110px rgba(5,64,110,.20);
      transform:rotate(-7deg);
    }

    .ahorra-scope-como-funciona .image-frame{
      position:relative;
      width:min(82%,470px);
      aspect-ratio:4/5;
      border-radius:42px;
      padding:12px;
      background:rgba(255,255,255,.48);
      border:1px solid rgba(255,255,255,.68);
      box-shadow:var(--shadow);
      backdrop-filter:blur(18px);
      overflow:hidden;
    }

    .ahorra-scope-como-funciona .image-placeholder{
      width:100%;
      height:100%;
      border-radius:32px;
      display:grid;
      place-items:center;
      text-align:center;
      padding:32px;
      background:
        linear-gradient(135deg,rgba(255,255,255,.84),rgba(255,255,255,.42)),
        radial-gradient(circle at 25% 20%,rgba(0,212,126,.25),transparent 32%),
        radial-gradient(circle at 75% 72%,rgba(18,200,216,.22),transparent 32%);
      border:1px dashed rgba(7,24,39,.22);
      color:rgba(7,24,39,.58);
    }

    .ahorra-scope-como-funciona .image-placeholder strong{
      display:block;
      margin-bottom:8px;
      font-size:clamp(22px,2.4vw,30px);
      letter-spacing:-.045em;
      color:rgba(7,24,39,.82);
    }

    .ahorra-scope-como-funciona .image-placeholder span{
      display:block;
      max-width:250px;
      margin:auto;
      font-size:15px;
      line-height:1.5;
    }

    .ahorra-scope-como-funciona .content{
      max-width:650px;
    }

    .ahorra-scope-como-funciona .kicker{
      display:inline-flex;
      align-items:center;
      gap:10px;
      margin-bottom:18px;
      color:var(--green-2);
      font-size:14px;
      font-weight:750;
      letter-spacing:-.01em;
    }

    .ahorra-scope-como-funciona .kicker::before{
      content:"";
      width:9px;
      height:9px;
      border-radius:50%;
      background:linear-gradient(135deg,var(--green),var(--cyan));
      box-shadow:0 0 0 7px rgba(0,212,126,.12);
    }

    .ahorra-scope-como-funciona h2{
      max-width:640px;
      font-size:clamp(42px,5vw,72px);
      line-height:.96;
      letter-spacing:-.065em;
      font-weight:850;
      color:var(--ink);
    }

    .ahorra-scope-como-funciona .intro{
      max-width:560px;
      margin-top:22px;
      font-size:clamp(18px,1.8vw,22px);
      line-height:1.36;
      letter-spacing:-.025em;
      color:var(--muted);
      font-weight:450;
    }

    .ahorra-scope-como-funciona .steps{
      margin-top:clamp(34px,4vw,52px);
      display:grid;
      gap:26px;
      list-style:none;
      counter-reset:step;
    }

    .ahorra-scope-como-funciona .step{
      counter-increment:step;
      display:grid;
      grid-template-columns:58px 1fr;
      gap:22px;
      align-items:start;
      padding-bottom:26px;
      border-bottom:1px solid var(--line);
    }

    .ahorra-scope-como-funciona .step:last-child{
      border-bottom:0;
      padding-bottom:0;
    }

    .ahorra-scope-como-funciona .num{
      width:58px;
      height:58px;
      display:grid;
      place-items:center;
      border-radius:999px;
      background:
        linear-gradient(#fff,#fff) padding-box,
        linear-gradient(135deg,var(--green),var(--cyan),var(--blue-2)) border-box;
      border:1.5px solid transparent;
      color:var(--ink);
      font-size:18px;
      font-weight:800;
      letter-spacing:-.04em;
      box-shadow:0 16px 42px rgba(0,184,148,.14);
    }

    .ahorra-scope-como-funciona .step h3{
      font-size:clamp(20px,2vw,26px);
      line-height:1.08;
      letter-spacing:-.045em;
      font-weight:800;
      color:var(--ink);
    }

    .ahorra-scope-como-funciona .step p{
      max-width:520px;
      margin-top:7px;
      color:var(--muted);
      font-size:16px;
      line-height:1.45;
      letter-spacing:-.015em;
    }

    @media(max-width:920px){
      .ahorra-scope-como-funciona .wrap{
        grid-template-columns:1fr;
      }

      .ahorra-scope-como-funciona .media{
        min-height:420px;
        order:2;
      }

      .ahorra-scope-como-funciona .content{
        order:1;
      }

      .ahorra-scope-como-funciona .image-frame{
        width:min(100%,430px);
      }

      .ahorra-scope-como-funciona h2,.ahorra-scope-como-funciona .intro{
        max-width:100%;
      }
    }

    @media(max-width:560px){
      .ahorra-scope-como-funciona .asl-process{
        padding:64px 16px;
      }

      .ahorra-scope-como-funciona .media{
        min-height:330px;
      }

      .ahorra-scope-como-funciona .blob{
        width:92%;
      }

      .ahorra-scope-como-funciona .image-frame{
        width:92%;
        border-radius:30px;
        padding:9px;
      }

      .ahorra-scope-como-funciona .image-placeholder{
        border-radius:23px;
      }

      .ahorra-scope-como-funciona .step{
        grid-template-columns:44px 1fr;
        gap:16px;
      }

      .ahorra-scope-como-funciona .num{
        width:44px;
        height:44px;
        font-size:15px;
      }

      .ahorra-scope-como-funciona .step p{
        font-size:15px;
      }
    }

.ahorra-scope-cta{
      --ink:#071827;
      --muted:#647184;
      --line:rgba(7,24,39,.12);
      --blue:#172a78;
      --blue-2:#0b65b8;
      --green:#00d47e;
      --green-2:#00b894;
      --cyan:#12c8d8;
      --white:#fff;
      --max:1120px;
      --shadow:0 28px 90px rgba(15,32,70,.10);
    }

    .ahorra-scope-cta, .ahorra-scope-cta *{box-sizing:border-box;margin:0;padding:0}

    .ahorra-scope-cta{
      min-height:100vh;
      font-family:-apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",Inter,"Segoe UI",Roboto,Arial,sans-serif;
      color:var(--ink);
      background:#fff;
      -webkit-font-smoothing:antialiased;
      text-rendering:optimizeLegibility;
    }

    .ahorra-scope-cta .newsletter{
      position:relative;
      overflow:hidden;
      padding:clamp(72px,8vw,126px) 20px;
      background:
        radial-gradient(circle at 14% 18%, rgba(0,212,126,.10), transparent 30%),
        radial-gradient(circle at 84% 36%, rgba(18,200,216,.13), transparent 30%),
        linear-gradient(180deg,#fff 0%,#f7fbff 100%);
    }

    .ahorra-scope-cta .newsletter::before{
      content:"";
      position:absolute;
      inset:auto -12% -34% -12%;
      height:58%;
      background:
        radial-gradient(circle at 24% 40%,rgba(0,212,126,.16),transparent 34%),
        radial-gradient(circle at 78% 30%,rgba(23,42,120,.12),transparent 36%);
      filter:blur(22px);
      pointer-events:none;
    }

    .ahorra-scope-cta .wrap{
      position:relative;
      z-index:1;
      width:min(100%,var(--max));
      margin:auto;
      display:grid;
      grid-template-columns:minmax(320px,.92fr) minmax(340px,1fr);
      gap:clamp(48px,8vw,112px);
      align-items:center;
    }

    .ahorra-scope-cta .copy{
      max-width:520px;
    }

    .ahorra-scope-cta .kicker{
      display:inline-flex;
      align-items:center;
      gap:10px;
      margin-bottom:18px;
      color:var(--green-2);
      font-size:14px;
      font-weight:750;
      letter-spacing:-.01em;
    }

    .ahorra-scope-cta .kicker::before{
      content:"";
      width:9px;
      height:9px;
      border-radius:50%;
      background:linear-gradient(135deg,var(--green),var(--cyan));
      box-shadow:0 0 0 7px rgba(0,212,126,.12);
    }

    .ahorra-scope-cta h2{
      font-size:clamp(42px,5vw,68px);
      line-height:.98;
      letter-spacing:-.064em;
      font-weight:850;
      color:var(--ink);
      text-wrap:balance;
    }

    .ahorra-scope-cta .lead{
      margin-top:22px;
      max-width:460px;
      color:var(--muted);
      font-size:clamp(18px,1.8vw,22px);
      line-height:1.38;
      letter-spacing:-.025em;
      font-weight:450;
    }

    .ahorra-scope-cta .form{
      margin-top:36px;
      display:grid;
      gap:12px;
      max-width:440px;
    }

    .ahorra-scope-cta .field{
      width:100%;
      height:54px;
      padding:0 18px;
      border:1px solid var(--line);
      border-radius:16px;
      background:rgba(255,255,255,.78);
      color:var(--ink);
      font:500 15px/1 -apple-system,BlinkMacSystemFont,"SF Pro Text",Inter,sans-serif;
      outline:none;
      box-shadow:0 10px 32px rgba(15,32,70,.04);
      transition:border-color .18s ease, box-shadow .18s ease, background .18s ease;
    }

    .ahorra-scope-cta .field:focus{
      border-color:rgba(0,184,148,.56);
      background:#fff;
      box-shadow:0 0 0 5px rgba(0,212,126,.10),0 16px 42px rgba(15,32,70,.06);
    }

    .ahorra-scope-cta .btn{
      height:56px;
      border:0;
      border-radius:16px;
      cursor:pointer;
      color:#041b25;
      font:800 15px/1 -apple-system,BlinkMacSystemFont,"SF Pro Text",Inter,sans-serif;
      background:linear-gradient(135deg,var(--green) 0%,var(--cyan) 55%,#70e7c7 100%);
      box-shadow:0 18px 48px rgba(0,184,148,.22);
      transition:transform .18s ease, box-shadow .18s ease;
    }

    .ahorra-scope-cta .btn:hover{
      transform:translateY(-2px);
      box-shadow:0 26px 70px rgba(0,184,148,.28);
    }

    .ahorra-scope-cta .consent{
      display:flex;
      align-items:flex-start;
      gap:9px;
      margin-top:2px;
      color:#46566b;
      font-size:12px;
      line-height:1.45;
      letter-spacing:-.01em;
    }

    .ahorra-scope-cta .consent input{
      margin-top:2px;
      accent-color:var(--green-2);
    }

    .ahorra-scope-cta .visual{
      position:relative;
      min-height:clamp(360px,42vw,520px);
      display:grid;
      place-items:center;
    }

    .ahorra-scope-cta .blob{
      position:absolute;
      width:min(92%,520px);
      aspect-ratio:1.14;
      border-radius:42% 58% 50% 50% / 48% 44% 56% 52%;
      background:
        radial-gradient(circle at 28% 18%,rgba(255,255,255,.48),transparent 25%),
        linear-gradient(135deg,var(--blue) 0%,var(--blue-2) 38%,var(--green) 100%);
      box-shadow:0 44px 110px rgba(5,64,110,.20);
      transform:rotate(5deg);
    }

    .ahorra-scope-cta .portrait{
      position:relative;
      width:min(74%,390px);
      aspect-ratio:1;
      display:grid;
      place-items:end center;
      overflow:hidden;
      border-radius:0 0 42% 42%;
      filter:drop-shadow(0 28px 48px rgba(15,32,70,.18));
    }

    .ahorra-scope-cta .person{
      position:relative;
      width:74%;
      height:82%;
    }

    .ahorra-scope-cta .head{
      position:absolute;
      left:50%;
      top:3%;
      width:38%;
      aspect-ratio:1;
      transform:translateX(-50%);
      border-radius:50%;
      background:linear-gradient(135deg,#ffe0c9,#f6b891);
      box-shadow:inset -10px -12px 24px rgba(139,70,40,.14);
      z-index:3;
    }

    .ahorra-scope-cta .hair{
      position:absolute;
      left:50%;
      top:-1%;
      width:48%;
      height:34%;
      transform:translateX(-50%);
      border-radius:48% 48% 42% 42%;
      background:linear-gradient(135deg,#1b2432,#4b285a 70%,#da45a3);
      z-index:2;
    }

    .ahorra-scope-cta .hair::after{
      content:"";
      position:absolute;
      right:2%;
      bottom:-34%;
      width:22%;
      height:70%;
      border-radius:999px;
      background:#d940a3;
      transform:rotate(-8deg);
    }

    .ahorra-scope-cta .smile{
      position:absolute;
      left:50%;
      top:58%;
      width:28%;
      height:10%;
      border-bottom:3px solid rgba(90,45,34,.72);
      border-radius:0 0 999px 999px;
      transform:translateX(-50%);
    }

    .ahorra-scope-cta .eye{
      position:absolute;
      top:42%;
      width:5px;
      height:5px;
      border-radius:50%;
      background:#3b2a25;
    }

    .ahorra-scope-cta .eye.left{left:35%}
    .ahorra-scope-cta .eye.right{right:35%}

    .ahorra-scope-cta .body{
      position:absolute;
      left:50%;
      bottom:0;
      width:82%;
      height:56%;
      transform:translateX(-50%);
      border-radius:40% 40% 0 0;
      background:linear-gradient(180deg,#fff,#eef5f8);
      box-shadow:inset 0 1px 0 rgba(255,255,255,.9);
      z-index:1;
    }

    .ahorra-scope-cta .shoulder{
      position:absolute;
      left:50%;
      bottom:0;
      width:112%;
      height:42%;
      transform:translateX(-50%);
      border-radius:48% 48% 0 0;
      background:linear-gradient(135deg,#f9fbfd,#eaf2f5);
      z-index:0;
    }

    .ahorra-scope-cta .floating-card{
      position:absolute;
      right:2%;
      bottom:10%;
      width:min(240px,48vw);
      padding:16px 18px;
      border-radius:24px;
      background:rgba(255,255,255,.68);
      border:1px solid rgba(255,255,255,.72);
      box-shadow:0 24px 70px rgba(15,32,70,.13);
      backdrop-filter:blur(18px);
    }

    .ahorra-scope-cta .floating-card strong{
      display:block;
      font-size:15px;
      line-height:1.18;
      letter-spacing:-.03em;
    }

    .ahorra-scope-cta .floating-card span{
      display:block;
      margin-top:5px;
      color:var(--muted);
      font-size:13px;
      line-height:1.35;
    }

    @media(max-width:900px){
      .ahorra-scope-cta .wrap{
        grid-template-columns:1fr;
      }

      .ahorra-scope-cta .copy{
        max-width:100%;
      }

      .ahorra-scope-cta .lead,.ahorra-scope-cta .form{
        max-width:560px;
      }

      .ahorra-scope-cta .visual{
        min-height:390px;
      }

      .ahorra-scope-cta .floating-card{
        right:8%;
      }
    }

    @media(max-width:560px){
      .ahorra-scope-cta .newsletter{
        padding:64px 16px;
      }

      .ahorra-scope-cta h2{
        font-size:clamp(40px,13vw,58px);
      }

      .ahorra-scope-cta .lead{
        font-size:18px;
      }

      .ahorra-scope-cta .form{
        margin-top:30px;
      }

      .ahorra-scope-cta .field,.ahorra-scope-cta .btn{
        height:52px;
        border-radius:14px;
      }

      .ahorra-scope-cta .visual{
        min-height:320px;
      }

      .ahorra-scope-cta .blob{
        width:96%;
      }

      .ahorra-scope-cta .portrait{
        width:78%;
      }

      .ahorra-scope-cta .floating-card{
        display:none;
      }
    }

    @media(prefers-reduced-motion:reduce){
      .ahorra-scope-cta, .ahorra-scope-cta *{scroll-behavior:auto!important;transition:none!important}
    }

.ahorra-scope-resenas{
      --ink:#071827;
      --muted:#637084;
      --white:#fff;
      --blue:#172a78;
      --blue-2:#0b65b8;
      --green:#00d47e;
      --green-2:#00b894;
      --cyan:#12c8d8;
      --card:rgba(255,255,255,.76);
      --line:rgba(255,255,255,.36);
      --shadow:0 24px 80px rgba(0,0,0,.18);
      --max:1180px;
    }

    .ahorra-scope-resenas, .ahorra-scope-resenas *{box-sizing:border-box;margin:0;padding:0}

    .ahorra-scope-resenas{
      min-height:100vh;
      font-family:-apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",Inter,"Segoe UI",Roboto,Arial,sans-serif;
      color:var(--ink);
      background:#fff;
      -webkit-font-smoothing:antialiased;
      text-rendering:optimizeLegibility;
      overflow-x:hidden;
    }

    .ahorra-scope-resenas .reviews{
      position:relative;
      overflow:hidden;
      padding:clamp(64px,7vw,104px) 0;
      background:
        radial-gradient(circle at 12% 20%, rgba(0,212,126,.72), transparent 26%),
        radial-gradient(circle at 78% 18%, rgba(0,212,126,.58), transparent 24%),
        radial-gradient(circle at 86% 76%, rgba(18,200,216,.72), transparent 28%),
        radial-gradient(circle at 28% 80%, rgba(0,184,148,.42), transparent 30%),
        linear-gradient(135deg,#201064 0%,#172a78 42%,#073a64 100%);
      isolation:isolate;
    }

    .ahorra-scope-resenas .reviews::before{
      content:"";
      position:absolute;
      inset:-30%;
      background:
        radial-gradient(circle at 34% 24%, rgba(70,28,130,.46), transparent 22%),
        radial-gradient(circle at 72% 64%, rgba(0,212,126,.26), transparent 22%);
      animation:bgMove 14s ease-in-out infinite alternate;
      filter:blur(22px);
      z-index:-2;
    }

    .ahorra-scope-resenas .reviews::after{
      content:"";
      position:absolute;
      inset:0;
      background-image:
        linear-gradient(rgba(255,255,255,.055) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,.055) 1px, transparent 1px);
      background-size:54px 54px;
      mask-image:linear-gradient(to bottom,rgba(0,0,0,.9),rgba(0,0,0,.38));
      z-index:-1;
    }

    @keyframes bgMove{
      0%{transform:translate3d(-2%, -2%,0) scale(1)}
      100%{transform:translate3d(3%, 2%,0) scale(1.08)}
    }

    .ahorra-scope-resenas .head{
      width:min(100% - 32px,var(--max));
      margin:0 auto 28px;
      text-align:center;
      color:#fff;
    }

    .ahorra-scope-resenas .kicker{
      display:inline-flex;
      align-items:center;
      gap:10px;
      margin-bottom:14px;
      padding:9px 15px;
      border-radius:999px;
      background:rgba(255,255,255,.12);
      border:1px solid rgba(255,255,255,.18);
      backdrop-filter:blur(18px);
      font-size:14px;
      font-weight:760;
    }

    .ahorra-scope-resenas .dot{
      width:8px;
      height:8px;
      border-radius:50%;
      background:linear-gradient(135deg,var(--green),var(--cyan));
      box-shadow:0 0 0 6px rgba(0,212,126,.14);
    }

    .ahorra-scope-resenas h2{
      font-size:clamp(34px,4.5vw,58px);
      line-height:1;
      letter-spacing:-.06em;
      font-weight:850;
      text-wrap:balance;
    }

    .ahorra-scope-resenas h2 span{
      text-decoration:underline;
      text-decoration-thickness:3px;
      text-underline-offset:8px;
      text-decoration-color:rgba(0,212,126,.82);
    }

    .ahorra-scope-resenas .summary{
      width:min(100% - 32px,var(--max));
      margin:34px auto 18px;
      border-radius:24px;
      padding:18px 22px;
      background:rgba(255,255,255,.78);
      border:1px solid rgba(255,255,255,.52);
      backdrop-filter:blur(22px);
      box-shadow:var(--shadow);
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:18px;
    }

    .ahorra-scope-resenas .google{
      display:flex;
      align-items:center;
      gap:12px;
      font-weight:760;
      letter-spacing:-.025em;
    }

    .ahorra-scope-resenas .google-mark{
      font-weight:850;
      letter-spacing:-.04em;
    }

    .ahorra-scope-resenas .google-mark .g1{color:#4285f4}
    .ahorra-scope-resenas .google-mark .g2{color:#ea4335}
    .ahorra-scope-resenas .google-mark .g3{color:#fbbc05}
    .ahorra-scope-resenas .google-mark .g4{color:#4285f4}
    .ahorra-scope-resenas .google-mark .g5{color:#34a853}
    .ahorra-scope-resenas .google-mark .g6{color:#ea4335}

    .ahorra-scope-resenas .rating{
      display:flex;
      align-items:center;
      gap:10px;
      color:#172a78;
      font-weight:850;
    }

    .ahorra-scope-resenas .stars{
      color:#00b894;
      letter-spacing:1px;
      font-size:18px;
    }

    .ahorra-scope-resenas .track-wrap{
      position:relative;
      margin-top:18px;
      overflow:hidden;
      padding:8px 0 14px;
    }

    .ahorra-scope-resenas .track-wrap::before,
    .ahorra-scope-resenas .track-wrap::after{
      content:"";
      position:absolute;
      top:0;
      bottom:0;
      width:12vw;
      z-index:2;
      pointer-events:none;
    }

    .ahorra-scope-resenas .track-wrap::before{
      left:0;
      background:linear-gradient(90deg,rgba(23,42,120,.95),transparent);
    }

    .ahorra-scope-resenas .track-wrap::after{
      right:0;
      background:linear-gradient(270deg,rgba(7,58,100,.95),transparent);
    }

    .ahorra-scope-resenas .track{
      display:flex;
      gap:20px;
      width:max-content;
      animation:scrollReviews 42s linear infinite;
      padding-inline:20px;
    }

    .ahorra-scope-resenas .track-wrap:hover .track{
      animation-play-state:paused;
    }

    @keyframes scrollReviews{
      from{transform:translateX(0)}
      to{transform:translateX(-50%)}
    }

    .ahorra-scope-resenas .review{
      width:clamp(280px,29vw,390px);
      min-height:184px;
      padding:22px;
      border-radius:26px;
      background:var(--card);
      border:1px solid var(--line);
      backdrop-filter:blur(22px);
      box-shadow:0 18px 60px rgba(0,0,0,.14);
    }

    .ahorra-scope-resenas .top{
      display:flex;
      align-items:center;
      gap:13px;
      margin-bottom:14px;
    }

    .ahorra-scope-resenas .avatar{
      width:44px;
      height:44px;
      border-radius:50%;
      display:grid;
      place-items:center;
      flex:0 0 auto;
      color:white;
      font-weight:850;
      background:linear-gradient(135deg,var(--green),var(--cyan),var(--blue-2));
      box-shadow:0 12px 26px rgba(0,184,148,.22);
    }

    .ahorra-scope-resenas .name{
      font-size:16px;
      font-weight:820;
      letter-spacing:-.035em;
      color:var(--ink);
    }

    .ahorra-scope-resenas .meta{
      display:flex;
      align-items:center;
      gap:8px;
      margin-top:4px;
      font-size:13px;
      color:var(--muted);
    }

    .ahorra-scope-resenas .review .stars{
      font-size:15px;
      letter-spacing:.5px;
      color:#00b894;
    }

    .ahorra-scope-resenas .text{
      color:#102033;
      font-size:15.5px;
      line-height:1.48;
      letter-spacing:-.012em;
    }

    @media(max-width:700px){
      .ahorra-scope-resenas .reviews{
        padding:56px 0;
      }

      .ahorra-scope-resenas .summary{
        align-items:flex-start;
        flex-direction:column;
        border-radius:22px;
      }

      .ahorra-scope-resenas .track{
        gap:14px;
        animation-duration:36s;
      }

      .ahorra-scope-resenas .review{
        width:82vw;
        min-height:190px;
        border-radius:24px;
      }

      .ahorra-scope-resenas .track-wrap::before,
      .ahorra-scope-resenas .track-wrap::after{
        width:18vw;
      }
    }

    @media(prefers-reduced-motion:reduce){
      .ahorra-scope-resenas .track,.ahorra-scope-resenas .reviews::before{
        animation:none!important;
      }
    }

.ahorra-scope-form{
      --ink:#071827;
      --muted:#677487;
      --line:rgba(7,24,39,.14);
      --soft:#f7fbff;
      --white:#fff;
      --blue:#172a78;
      --blue-2:#0b65b8;
      --green:#00d47e;
      --green-2:#00b894;
      --cyan:#12c8d8;
      --shadow:0 28px 90px rgba(15,32,70,.10);
      --max:1120px;
    }

    .ahorra-scope-form, .ahorra-scope-form *{box-sizing:border-box;margin:0;padding:0}

    .ahorra-scope-form{
      min-height:100vh;
      font-family:-apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",Inter,"Segoe UI",Roboto,Arial,sans-serif;
      color:var(--ink);
      background:#fff;
      -webkit-font-smoothing:antialiased;
      text-rendering:optimizeLegibility;
    }

    .ahorra-scope-form .quote-section{
      position:relative;
      overflow:hidden;
      padding:clamp(70px,8vw,124px) 20px;
      background:
        radial-gradient(circle at 14% 16%, rgba(0,212,126,.10), transparent 30%),
        radial-gradient(circle at 82% 24%, rgba(18,200,216,.12), transparent 30%),
        linear-gradient(180deg,#fff 0%,#f7fbff 100%);
    }

    .ahorra-scope-form .quote-section::before{
      content:"";
      position:absolute;
      inset:auto -12% -34% -12%;
      height:56%;
      background:
        radial-gradient(circle at 28% 42%,rgba(0,212,126,.14),transparent 34%),
        radial-gradient(circle at 76% 30%,rgba(23,42,120,.11),transparent 36%);
      filter:blur(22px);
      pointer-events:none;
    }

    .ahorra-scope-form .wrap{
      position:relative;
      z-index:1;
      width:min(100%,var(--max));
      margin:auto;
      display:grid;
      grid-template-columns:minmax(340px,.95fr) minmax(380px,1.05fr);
      gap:clamp(46px,7vw,92px);
      align-items:center;
    }

    .ahorra-scope-form .left-panel{
      display:grid;
      gap:clamp(34px,4vw,54px);
      align-content:start;
    }

    .ahorra-scope-form .visual{
      position:relative;
      min-height:clamp(330px,34vw,470px);
      display:grid;
      place-items:center;
    }

    .ahorra-scope-form .blob{
      position:absolute;
      width:min(88%,430px);
      aspect-ratio:.88;
      border-radius:48% 52% 43% 57% / 45% 44% 56% 55%;
      background:
        radial-gradient(circle at 28% 18%,rgba(255,255,255,.36),transparent 26%),
        linear-gradient(135deg,var(--blue) 0%,var(--blue-2) 42%,var(--green) 100%);
      box-shadow:0 44px 110px rgba(5,64,110,.18);
      transform:rotate(-5deg);
    }

    .ahorra-scope-form .person{
      position:relative;
      width:min(68%,310px);
      height:clamp(290px,30vw,410px);
      filter:drop-shadow(0 28px 44px rgba(15,32,70,.18));
    }

    .ahorra-scope-form .head{
      position:absolute;
      left:50%;
      top:8%;
      width:31%;
      aspect-ratio:1;
      transform:translateX(-50%);
      border-radius:50%;
      background:linear-gradient(135deg,#ffe3ca,#f3b78c);
      box-shadow:inset -10px -14px 24px rgba(117,58,30,.14);
      z-index:4;
    }

    .ahorra-scope-form .hair{
      position:absolute;
      left:50%;
      top:5%;
      width:37%;
      height:23%;
      transform:translateX(-50%) rotate(-2deg);
      border-radius:48% 52% 45% 45%;
      background:linear-gradient(135deg,#7b4b2d,#2b1c18 78%);
      z-index:5;
    }

    .ahorra-scope-form .ear{
      position:absolute;
      top:45%;
      width:12%;
      height:18%;
      border-radius:50%;
      background:#f1b384;
      z-index:3;
    }

    .ahorra-scope-form .ear.left{left:28%}
    .ahorra-scope-form .ear.right{right:28%}

    .ahorra-scope-form .eye{
      position:absolute;
      top:48%;
      width:5px;
      height:5px;
      border-radius:50%;
      background:#3b2a25;
    }

    .ahorra-scope-form .eye.left{left:36%}
    .ahorra-scope-form .eye.right{right:36%}

    .ahorra-scope-form .smile{
      position:absolute;
      left:50%;
      top:62%;
      width:28%;
      height:10%;
      border-bottom:3px solid rgba(90,45,34,.72);
      border-radius:0 0 999px 999px;
      transform:translateX(-50%);
    }

    .ahorra-scope-form .neck{
      position:absolute;
      left:50%;
      top:32%;
      width:13%;
      height:12%;
      transform:translateX(-50%);
      background:linear-gradient(#f2b88d,#e9a679);
      border-radius:0 0 12px 12px;
      z-index:2;
    }

    .ahorra-scope-form .body{
      position:absolute;
      left:50%;
      bottom:3%;
      width:76%;
      height:57%;
      transform:translateX(-50%);
      border-radius:34% 34% 12% 12%;
      background:linear-gradient(135deg,#f7f8fa,#dfe7ed);
      z-index:1;
      overflow:hidden;
    }

    .ahorra-scope-form .shirt{
      position:absolute;
      inset:0;
      background:
        linear-gradient(90deg,transparent 48%,rgba(120,128,140,.24) 49%,rgba(120,128,140,.24) 51%,transparent 52%),
        repeating-linear-gradient(90deg,rgba(0,0,0,.08) 0 2px,transparent 2px 9px),
        linear-gradient(135deg,#59616b,#2d343d);
      opacity:.86;
    }

    .ahorra-scope-form .phone{
      position:absolute;
      left:48%;
      bottom:9%;
      width:31%;
      aspect-ratio:.62;
      border-radius:17px;
      background:linear-gradient(135deg,#f3f7fb,#aab8c8);
      border:3px solid rgba(255,255,255,.76);
      transform:rotate(-10deg);
      z-index:7;
      box-shadow:0 18px 38px rgba(15,32,70,.22);
    }

    .ahorra-scope-form .phone::after{
      content:"";
      position:absolute;
      top:9px;
      left:50%;
      width:22%;
      height:4px;
      border-radius:999px;
      background:rgba(7,24,39,.24);
      transform:translateX(-50%);
    }

    .ahorra-scope-form .arm{
      position:absolute;
      bottom:10%;
      width:36%;
      height:10%;
      border-radius:999px;
      background:linear-gradient(135deg,#f4bb91,#e4a06f);
      z-index:6;
    }

    .ahorra-scope-form .arm.left{
      left:19%;
      transform:rotate(18deg);
    }

    .ahorra-scope-form .arm.right{
      right:19%;
      transform:rotate(-22deg);
    }

    .ahorra-scope-form .content{
      max-width:620px;
    }

    .ahorra-scope-form .form-panel{
      width:100%;
      align-self:center;
    }

    .ahorra-scope-form .kicker{
      display:inline-flex;
      align-items:center;
      gap:10px;
      margin-bottom:18px;
      color:var(--green-2);
      font-size:14px;
      font-weight:760;
      letter-spacing:-.01em;
    }

    .ahorra-scope-form .kicker::before{
      content:"";
      width:9px;
      height:9px;
      border-radius:50%;
      background:linear-gradient(135deg,var(--green),var(--cyan));
      box-shadow:0 0 0 7px rgba(0,212,126,.12);
    }

    .ahorra-scope-form h2{
      max-width:580px;
      font-size:clamp(42px,5vw,68px);
      line-height:.98;
      letter-spacing:-.064em;
      font-weight:850;
      color:var(--ink);
      text-wrap:balance;
    }

    .ahorra-scope-form .lead{
      max-width:520px;
      margin-top:22px;
      color:var(--muted);
      font-size:clamp(18px,1.8vw,21px);
      line-height:1.38;
      letter-spacing:-.025em;
      font-weight:450;
    }

    .ahorra-scope-form .form{
      margin-top:34px;
      display:grid;
      gap:16px;
    }

    .ahorra-scope-form .grid-2{
      display:grid;
      grid-template-columns:1fr 1fr;
      gap:14px;
    }

    .ahorra-scope-form label{
      display:grid;
      gap:7px;
      color:#586477;
      font-size:13px;
      font-weight:700;
      letter-spacing:-.01em;
    }

    .ahorra-scope-form input,
    .ahorra-scope-form textarea{
      width:100%;
      border:1px solid var(--line);
      border-radius:16px;
      background:rgba(255,255,255,.78);
      color:var(--ink);
      font:500 15px/1.2 -apple-system,BlinkMacSystemFont,"SF Pro Text",Inter,sans-serif;
      outline:none;
      box-shadow:0 10px 32px rgba(15,32,70,.04);
      transition:border-color .18s ease, box-shadow .18s ease, background .18s ease;
    }

    .ahorra-scope-form input{
      height:52px;
      padding:0 16px;
    }

    .ahorra-scope-form textarea{
      min-height:108px;
      padding:15px 16px;
      resize:vertical;
    }

    .ahorra-scope-form input:focus,
    .ahorra-scope-form textarea:focus{
      border-color:rgba(0,184,148,.56);
      background:#fff;
      box-shadow:0 0 0 5px rgba(0,212,126,.10),0 16px 42px rgba(15,32,70,.06);
    }

    .ahorra-scope-form .upload-row{
      display:grid;
      grid-template-columns:minmax(220px,1fr) auto;
      gap:14px;
      align-items:center;
    }

    .ahorra-scope-form .upload{
      position:relative;
      min-height:58px;
      display:flex;
      align-items:center;
      gap:12px;
      padding:14px 16px;
      border:1px dashed rgba(7,24,39,.22);
      border-radius:18px;
      background:rgba(255,255,255,.64);
      box-shadow:0 10px 32px rgba(15,32,70,.04);
      cursor:pointer;
    }

    .ahorra-scope-form .upload input{
      position:absolute;
      inset:0;
      opacity:0;
      cursor:pointer;
    }

    .ahorra-scope-form .upload-icon{
      width:34px;
      height:34px;
      border-radius:12px;
      display:grid;
      place-items:center;
      background:linear-gradient(135deg,var(--green),var(--cyan));
      color:#061923;
      font-weight:900;
      flex:0 0 auto;
    }

    .ahorra-scope-form .upload strong{
      display:block;
      color:var(--ink);
      font-size:14px;
      letter-spacing:-.02em;
    }

    .ahorra-scope-form .upload span{
      display:block;
      margin-top:3px;
      color:var(--muted);
      font-size:13px;
    }

    .ahorra-scope-form .max{
      color:var(--muted);
      font-size:13px;
      font-weight:650;
      white-space:nowrap;
    }

    .ahorra-scope-form .consent{
      display:flex;
      align-items:flex-start;
      gap:9px;
      color:#586477;
      font-size:13px;
      line-height:1.45;
    }

    .ahorra-scope-form .consent input{
      width:auto;
      height:auto;
      margin-top:3px;
      accent-color:var(--green-2);
      box-shadow:none;
    }

    .ahorra-scope-form .btn{
      height:58px;
      border:0;
      border-radius:17px;
      cursor:pointer;
      color:#041b25;
      font:850 15px/1 -apple-system,BlinkMacSystemFont,"SF Pro Text",Inter,sans-serif;
      background:linear-gradient(135deg,var(--green) 0%,var(--cyan) 55%,#70e7c7 100%);
      box-shadow:0 18px 48px rgba(0,184,148,.22);
      transition:transform .18s ease, box-shadow .18s ease;
    }

    .ahorra-scope-form .btn:hover{
      transform:translateY(-2px);
      box-shadow:0 26px 70px rgba(0,184,148,.28);
    }

    @media(max-width:920px){
      .ahorra-scope-form .wrap{
        grid-template-columns:1fr;
      }

      .ahorra-scope-form .left-panel{
        order:1;
      }

      .ahorra-scope-form .form-panel{
        order:2;
      }

      .ahorra-scope-form .visual{
        min-height:360px;
      }

      .ahorra-scope-form .content{
        max-width:100%;
      }

      .ahorra-scope-form h2,.ahorra-scope-form .lead{
        max-width:100%;
      }
    }

    @media(max-width:600px){
      .ahorra-scope-form .quote-section{
        padding:64px 16px;
      }

      .ahorra-scope-form h2{
        font-size:clamp(40px,13vw,58px);
      }

      .ahorra-scope-form .grid-2,
      .ahorra-scope-form .upload-row{
        grid-template-columns:1fr;
      }

      .ahorra-scope-form .max{
        white-space:normal;
      }

      .ahorra-scope-form .visual{
        min-height:300px;
      }

      .ahorra-scope-form .person{
        width:min(72%,270px);
        height:300px;
      }

      .ahorra-scope-form .blob{
        width:92%;
      }

      .ahorra-scope-form input{
        height:50px;
      }
    }

    @media(prefers-reduced-motion:reduce){
      .ahorra-scope-form, .ahorra-scope-form *{scroll-behavior:auto!important;transition:none!important}
    }

.ahorra-scope-footer{
      --ink:#071827;
      --muted:#667386;
      --line:rgba(7,24,39,.12);
      --blue:#172a78;
      --green:#00d47e;
      --green-2:#00b894;
      --cyan:#12c8d8;
      --max:1120px;
    }

    .ahorra-scope-footer, .ahorra-scope-footer *{box-sizing:border-box;margin:0;padding:0}

    .ahorra-scope-footer{
      min-height:100vh;
      font-family:-apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",Inter,"Segoe UI",Roboto,Arial,sans-serif;
      color:var(--ink);
      background:#fff;
      -webkit-font-smoothing:antialiased;
      text-rendering:optimizeLegibility;
    }

    .ahorra-scope-footer a{color:inherit;text-decoration:none}

    .ahorra-scope-footer .footer{
      position:relative;
      overflow:hidden;
      background:
        radial-gradient(circle at 12% 18%, rgba(0,212,126,.10), transparent 30%),
        radial-gradient(circle at 82% 26%, rgba(18,200,216,.10), transparent 28%),
        linear-gradient(180deg,#fff 0%,#f7fbff 100%);
    }

    .ahorra-scope-footer .footer-main{
      width:min(100% - 40px,var(--max));
      margin:auto;
      padding:clamp(54px,6vw,82px) 0;
      display:grid;
      grid-template-columns:minmax(360px,1.4fr) minmax(170px,.55fr) minmax(170px,.55fr);
      gap:clamp(42px,7vw,110px);
      align-items:start;
    }

    .ahorra-scope-footer .brand{max-width:470px}

    .ahorra-scope-footer .logo{
      width:min(245px,72vw);
      height:auto;
      object-fit:contain;
      filter:drop-shadow(0 14px 28px rgba(0,184,148,.13));
    }

    .ahorra-scope-footer .fallback-logo{
      display:inline-flex;
      align-items:center;
      gap:10px;
      font-size:30px;
      line-height:1;
      font-weight:850;
      letter-spacing:-.06em;
    }

    .ahorra-scope-footer .fallback-logo::before{
      content:"";
      width:18px;
      height:18px;
      border-radius:50%;
      background:conic-gradient(from 120deg,var(--green),var(--cyan),var(--blue),var(--green));
      box-shadow:0 0 0 6px rgba(0,212,126,.12);
    }

    .ahorra-scope-footer .brand-text{
      margin-top:22px;
      max-width:380px;
      color:var(--muted);
      font-size:16px;
      line-height:1.5;
      letter-spacing:-.018em;
    }

    .ahorra-scope-footer .subscribe{
      margin-top:26px;
      display:grid;
      gap:12px;
      max-width:440px;
    }

    .ahorra-scope-footer .subscribe-row{
      display:grid;
      grid-template-columns:1fr auto;
      gap:10px;
    }

    .ahorra-scope-footer .input{
      height:52px;
      min-width:0;
      padding:0 16px;
      border:1px solid var(--line);
      border-radius:16px;
      background:rgba(255,255,255,.78);
      color:var(--ink);
      font:500 15px/1 -apple-system,BlinkMacSystemFont,"SF Pro Text",Inter,sans-serif;
      outline:none;
      box-shadow:0 10px 32px rgba(15,32,70,.04);
    }

    .ahorra-scope-footer .input:focus{
      border-color:rgba(0,184,148,.55);
      box-shadow:0 0 0 5px rgba(0,212,126,.10),0 16px 42px rgba(15,32,70,.06);
    }

    .ahorra-scope-footer .btn{
      height:52px;
      padding:0 22px;
      border:0;
      border-radius:16px;
      cursor:pointer;
      color:#041b25;
      font:850 15px/1 -apple-system,BlinkMacSystemFont,"SF Pro Text",Inter,sans-serif;
      background:linear-gradient(135deg,var(--green) 0%,var(--cyan) 58%,#76e9cb 100%);
      box-shadow:0 18px 48px rgba(0,184,148,.20);
      transition:transform .18s ease,box-shadow .18s ease;
      white-space:nowrap;
    }

    .ahorra-scope-footer .btn:hover{
      transform:translateY(-2px);
      box-shadow:0 26px 70px rgba(0,184,148,.26);
    }

    .ahorra-scope-footer .consent{
      display:flex;
      align-items:flex-start;
      gap:8px;
      color:#586477;
      font-size:12px;
      line-height:1.45;
    }

    .ahorra-scope-footer .consent input{
      margin-top:2px;
      accent-color:var(--green-2);
    }

    .ahorra-scope-footer .col h3{
      margin-bottom:18px;
      font-size:14px;
      font-weight:850;
      letter-spacing:-.02em;
      color:var(--ink);
    }

    .ahorra-scope-footer .links{
      display:grid;
      gap:13px;
      list-style:none;
    }

    .ahorra-scope-footer .links a{
      color:var(--muted);
      font-size:14px;
      font-weight:640;
      letter-spacing:-.01em;
      transition:color .18s ease,transform .18s ease;
    }

    .ahorra-scope-footer .links a:hover{
      color:var(--green-2);
      transform:translateX(2px);
    }

    .ahorra-scope-footer .footer-bottom{
      position:relative;
      overflow:hidden;
      background:
        radial-gradient(circle at 12% 12%,rgba(0,212,126,.58),transparent 26%),
        radial-gradient(circle at 86% 20%,rgba(18,200,216,.54),transparent 26%),
        linear-gradient(135deg,#201064 0%,#172a78 45%,#073a64 100%);
      color:#fff;
    }

    .ahorra-scope-footer .footer-bottom::before{
      content:"";
      position:absolute;
      inset:-50%;
      background:
        radial-gradient(circle at 30% 40%,rgba(0,212,126,.20),transparent 22%),
        radial-gradient(circle at 75% 62%,rgba(18,200,216,.24),transparent 24%);
      animation:moveBg 14s ease-in-out infinite alternate;
      filter:blur(24px);
    }

    @keyframes moveBg{
      from{transform:translate3d(-2%,-1%,0) scale(1)}
      to{transform:translate3d(3%,2%,0) scale(1.08)}
    }

    .ahorra-scope-footer .bottom-inner{
      position:relative;
      z-index:1;
      width:min(100% - 40px,var(--max));
      min-height:74px;
      margin:auto;
      display:grid;
      grid-template-columns:1fr auto 1fr;
      align-items:center;
      gap:24px;
    }

    .ahorra-scope-footer .copy{
      font-size:14px;
      font-weight:760;
      color:rgba(255,255,255,.95);
    }

    .ahorra-scope-footer .legal{
      display:flex;
      align-items:center;
      justify-content:center;
      gap:clamp(18px,4vw,46px);
      font-size:13px;
      font-weight:720;
      color:rgba(255,255,255,.68);
    }

    .ahorra-scope-footer .legal a:hover{color:#fff}

    .ahorra-scope-footer .social{
      display:flex;
      justify-content:flex-end;
      gap:12px;
    }

    .ahorra-scope-footer .social a{
      width:34px;
      height:34px;
      display:grid;
      place-items:center;
      border-radius:12px;
      background:rgba(255,255,255,.12);
      border:1px solid rgba(255,255,255,.16);
      color:#fff;
      font-weight:850;
      font-size:14px;
      backdrop-filter:blur(16px);
      transition:transform .18s ease,background .18s ease;
    }

    .ahorra-scope-footer .social a:hover{
      transform:translateY(-2px);
      background:rgba(255,255,255,.20);
    }

    @media(max-width:860px){
      .ahorra-scope-footer .footer-main{
        grid-template-columns:1fr 1fr;
      }

      .ahorra-scope-footer .brand{
        grid-column:1/-1;
      }

      .ahorra-scope-footer .bottom-inner{
        grid-template-columns:1fr;
        justify-items:center;
        text-align:center;
        padding:22px 0;
      }

      .ahorra-scope-footer .social{justify-content:center}
    }

    @media(max-width:560px){
      .ahorra-scope-footer .footer-main{
        width:min(100% - 28px,var(--max));
        grid-template-columns:1fr;
        padding:52px 0;
      }

      .ahorra-scope-footer .subscribe-row{grid-template-columns:1fr}
      .ahorra-scope-footer .btn{width:100%}

      .ahorra-scope-footer .bottom-inner{
        width:min(100% - 28px,var(--max));
      }

      .ahorra-scope-footer .legal{
        flex-wrap:wrap;
        gap:14px 24px;
      }
    }

    @media(prefers-reduced-motion:reduce){
      .ahorra-scope-footer, .ahorra-scope-footer *{scroll-behavior:auto!important;transition:none!important;animation:none!important}
    }`,Co=`
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700;800&display=swap');

html, body, #app, .ahorra-page-host {
  margin: 0 !important;
  padding: 0 !important;
  width: 100%;
  min-height: 100%;
  overflow-x: hidden;
}

body {
  background: #102b68;
}

#app,
.ahorra-page-host,
.ahorra-page,
.ahorra-page > div {
  width: 100%;
  min-height: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

.ahorra-page,
.ahorra-page * {
  font-family: 'Manrope', 'Inter', sans-serif !important;
}

.ahorra-page button,
.ahorra-page input,
.ahorra-page textarea,
.ahorra-page select {
  font-family: 'Manrope', 'Inter', sans-serif !important;
}

.ahorra-scope-hero .nav,
.ahorra-scope-hero .phone,
.ahorra-scope-hero .client-btn,
.ahorra-scope-hero .hero-footer,
.ahorra-scope-solutions .section-header p,
.ahorra-scope-benefits .benefits-description,
.ahorra-scope-benefits .benefit-item p,
.ahorra-scope-como-funciona .intro,
.ahorra-scope-como-funciona .step p,
.ahorra-scope-cta .lead,
.ahorra-scope-resenas .review .text,
.ahorra-scope-form .lead,
.ahorra-scope-footer .brand-text {
  font-size: clamp(15px, 1.2vw, 16px) !important;
  line-height: 1.55 !important;
  font-weight: 400 !important;
  letter-spacing: -0.01em !important;
}

.ahorra-scope-hero h1 {
  font-size: clamp(42px, 5vw, 72px) !important;
  line-height: 0.95 !important;
  letter-spacing: -0.04em !important;
  font-weight: 700 !important;
}

.ahorra-scope-benefits .benefits-title,
.ahorra-scope-solutions .section-header h2,
.ahorra-scope-clientes-faixa .marquee-title,
.ahorra-scope-como-funciona h2,
.ahorra-scope-cta h2,
.ahorra-scope-resenas h2,
.ahorra-scope-form h2 {
  font-size: clamp(32px, 4vw, 56px) !important;
  line-height: 1 !important;
  letter-spacing: -0.035em !important;
  font-weight: 700 !important;
}

.ahorra-scope-form #quote-title {
  max-width: 720px !important;
  font-size: clamp(28px, 3.4vw, 44px) !important;
  line-height: 1.05 !important;
  letter-spacing: -0.045em !important;
  text-wrap: initial !important;
}

.ahorra-scope-hero .lead {
  font-size: clamp(16px, 1.5vw, 18px) !important;
  line-height: 1.55 !important;
  letter-spacing: -0.01em !important;
  font-weight: 400 !important;
}

.ahorra-scope-hero .nav,
.ahorra-scope-footer .links a,
.ahorra-scope-footer .copy,
.ahorra-scope-footer .legal {
  font-size: 14px !important;
  line-height: 1.4 !important;
  font-weight: 600 !important;
  letter-spacing: -0.01em !important;
}

.ahorra-scope-hero .nav a,
.ahorra-scope-hero .hero-footer a,
.ahorra-scope-footer .links a,
.ahorra-scope-footer .legal a {
  font-weight: 600 !important;
}

.ahorra-scope-hero .phone {
  font-size: 14px !important;
  line-height: 1.3 !important;
  font-weight: 700 !important;
  letter-spacing: -0.01em !important;
}

.ahorra-scope-hero .phone span,
.ahorra-scope-form .upload span,
.ahorra-scope-form .consent,
.ahorra-scope-cta .consent,
.ahorra-scope-footer .consent {
  font-size: 13px !important;
  line-height: 1.45 !important;
  font-weight: 400 !important;
  letter-spacing: -0.01em !important;
}

.ahorra-scope-form label,
.ahorra-scope-form .max {
  font-size: 13px !important;
  line-height: 1.45 !important;
  font-weight: 600 !important;
  letter-spacing: -0.01em !important;
}

.ahorra-scope-hero .phone span {
  font-size: 13px !important;
  line-height: 1.45 !important;
  font-weight: 500 !important;
  letter-spacing: -0.01em !important;
}

.ahorra-scope-hero .client-btn,
.ahorra-scope-hero .cta,
.ahorra-scope-cta .btn,
.ahorra-scope-form .btn,
.ahorra-scope-footer .btn {
  font-size: 14px !important;
  line-height: 1 !important;
  font-weight: 700 !important;
  letter-spacing: -0.01em !important;
}

.ahorra-scope-hero .eyebrow,
.ahorra-scope-benefits .section-kicker,
.ahorra-scope-solutions .section-header .eyebrow,
.ahorra-scope-como-funciona .kicker,
.ahorra-scope-cta .kicker,
.ahorra-scope-resenas .kicker,
.ahorra-scope-form .kicker,
.ahorra-scope-benefits .media-badge,
.ahorra-scope-como-funciona .num {
  font-size: 12px !important;
  line-height: 1.2 !important;
  font-weight: 700 !important;
  letter-spacing: 0.02em !important;
}

.ahorra-scope-hero .hero-footer strong,
.ahorra-scope-solutions .service-card h3,
.ahorra-scope-benefits .benefit-item h3,
.ahorra-scope-como-funciona .step h3,
.ahorra-scope-cta .floating-card strong,
.ahorra-scope-resenas .review .name {
  font-size: 18px !important;
  line-height: 1.2 !important;
  font-weight: 700 !important;
  letter-spacing: -0.02em !important;
}

.ahorra-scope-solutions .service-card p,
.ahorra-scope-cta .floating-card span,
.ahorra-scope-footer .col h3,
.ahorra-scope-footer .social a {
  font-size: 14px !important;
  line-height: 1.45 !important;
  font-weight: 400 !important;
  letter-spacing: -0.01em !important;
}

.ahorra-scope-solutions .service-card h3,
.ahorra-scope-footer .col h3 {
  font-weight: 700 !important;
}

.ahorra-scope-resenas .review .meta {
  font-size: 13px !important;
  line-height: 1.4 !important;
  font-weight: 500 !important;
  letter-spacing: -0.01em !important;
}

.ahorra-scope-benefits .media-badge,
.ahorra-scope-como-funciona .num {
  line-height: 1 !important;
}

.ahorra-scope-clientes-faixa .brand-word {
  font-weight: 700 !important;
  letter-spacing: -0.03em !important;
}

.ahorra-scope-clientes-faixa .brand-sub {
  font-size: 12px !important;
  line-height: 1.25 !important;
  font-weight: 600 !important;
  letter-spacing: 0.02em !important;
}

.ahorra-scope-resenas .summary,
.ahorra-scope-resenas .rating,
.ahorra-scope-resenas .google,
.ahorra-scope-form .upload strong {
  font-size: 14px !important;
  line-height: 1.35 !important;
  font-weight: 700 !important;
  letter-spacing: -0.01em !important;
}

.ahorra-scope-form input,
.ahorra-scope-form textarea,
.ahorra-scope-cta .field,
.ahorra-scope-footer .input {
  font-size: 15px !important;
  line-height: 1.5 !important;
  font-weight: 500 !important;
  letter-spacing: -0.01em !important;
}

@media (max-width: 768px) {
  .ahorra-scope-hero h1 {
    font-size: clamp(38px, 12vw, 52px) !important;
    line-height: 0.95 !important;
  }

  .ahorra-scope-benefits .benefits-title,
  .ahorra-scope-solutions .section-header h2,
  .ahorra-scope-clientes-faixa .marquee-title,
  .ahorra-scope-como-funciona h2,
  .ahorra-scope-cta h2,
  .ahorra-scope-resenas h2,
  .ahorra-scope-form h2 {
    font-size: clamp(22px, 7vw, 30px) !important;
    line-height: 1 !important;
  }

  .ahorra-scope-form #quote-title {
    font-size: clamp(30px, 8vw, 38px) !important;
    line-height: 1.05 !important;
  }

  .ahorra-scope-hero .lead,
  .ahorra-scope-solutions .section-header p,
  .ahorra-scope-benefits .benefits-description,
  .ahorra-scope-benefits .benefit-item p,
  .ahorra-scope-como-funciona .intro,
  .ahorra-scope-como-funciona .step p,
  .ahorra-scope-cta .lead,
  .ahorra-scope-resenas .review .text,
  .ahorra-scope-form .lead,
  .ahorra-scope-footer .brand-text {
    font-size: 15px !important;
    line-height: 1.5 !important;
  }
}

.ahorra-page main,
.ahorra-page section,
.ahorra-page footer {
  margin: 0;
}

.ahorra-scope-hero,
.ahorra-scope-hero .hero {
  width: 100%;
  margin: 0;
  min-height: 100svh;
}

.ahorra-scope-hero .hero-inner {
  width: min(100% - 48px, var(--container));
}

.ahorra-scope-benefits,
.ahorra-scope-solutions,
.ahorra-scope-clientes-faixa,
.ahorra-scope-como-funciona,
.ahorra-scope-cta,
.ahorra-scope-resenas,
.ahorra-scope-form,
.ahorra-scope-footer {
  min-height: auto !important;
  width: 100%;
  margin: 0;
  background: transparent !important;
}

.ahorra-scope-clientes-faixa {
  display: block !important;
  place-items: initial !important;
  overflow-y: hidden !important;
}

.ahorra-scope-flow {
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at 12% 18%, rgba(0, 212, 126, 0.10), transparent 30%),
    radial-gradient(circle at 82% 34%, rgba(18, 200, 216, 0.12), transparent 28%),
    linear-gradient(180deg, #fff 0%, #f7fbff 100%) !important;
}

.ahorra-scope-flow::before {
  content: "";
  position: absolute;
  inset: auto -10% -30% -10%;
  height: 55%;
  background:
    radial-gradient(circle at 24% 40%, rgba(0, 212, 126, 0.16), transparent 34%),
    radial-gradient(circle at 78% 30%, rgba(23, 42, 120, 0.12), transparent 36%);
  filter: blur(22px);
  pointer-events: none;
}

.ahorra-scope-benefits .benefits-section,
.ahorra-scope-solutions .services-section,
.ahorra-scope-clientes-faixa .logo-marquee-section,
.ahorra-scope-como-funciona .asl-process,
.ahorra-scope-cta .newsletter,
.ahorra-scope-resenas .reviews,
.ahorra-scope-form .quote-section,
.ahorra-scope-footer .footer {
  margin: 0;
}

.ahorra-scope-benefits .benefits-section,
.ahorra-scope-solutions .services-section,
.ahorra-scope-como-funciona .asl-process,
.ahorra-scope-cta .newsletter,
.ahorra-scope-resenas .reviews,
.ahorra-scope-form .quote-section {
  padding-top: clamp(56px, 7vw, 96px) !important;
  padding-bottom: clamp(56px, 7vw, 96px) !important;
}

.ahorra-scope-flow .asl-process,
.ahorra-scope-flow .newsletter {
  background: transparent !important;
}

.ahorra-scope-flow .asl-process::before,
.ahorra-scope-flow .newsletter::before {
  content: none !important;
  display: none !important;
}

.ahorra-scope-clientes-faixa .logo-marquee-section {
  position: relative;
  padding-top: clamp(20px, 2.4vw, 32px) !important;
  padding-bottom: clamp(20px, 2.4vw, 32px) !important;
  padding-left: 20px;
  padding-right: 20px;
  overflow-y: hidden !important;
  background:
    radial-gradient(circle at 12% 52%, rgba(0, 224, 109, 0.54), transparent 32%),
    radial-gradient(circle at 86% 34%, rgba(24, 213, 229, 0.24), transparent 30%),
    linear-gradient(90deg, #18a86f 0%, #19869a 28%, #203a86 56%, #25509d 76%, #1b8eaf 100%) !important;
  background-repeat: no-repeat !important;
  background-position: center center !important;
  background-size: 100% 100% !important;
}

.ahorra-scope-clientes-faixa .logo-marquee-section::before,
.ahorra-scope-clientes-faixa .logo-marquee-section::after,
.ahorra-scope-clientes-faixa .marquee-container::before,
.ahorra-scope-clientes-faixa .marquee-container::after,
.ahorra-scope-clientes-faixa .marquee-shell::before,
.ahorra-scope-clientes-faixa .marquee-shell::after {
  content: none !important;
  display: none !important;
}

.ahorra-scope-clientes-faixa .marquee-container,
.ahorra-scope-clientes-faixa .marquee-shell {
  overflow: hidden !important;
  overflow-x: hidden !important;
  overflow-y: hidden !important;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.ahorra-scope-clientes-faixa .marquee-shell {
  padding-bottom: 0 !important;
  mask-image: none !important;
  background: transparent !important;
}

.ahorra-scope-clientes-faixa .marquee-container,
.ahorra-scope-clientes-faixa .marquee-track {
  background: transparent !important;
}

.ahorra-scope-clientes-faixa .marquee-title {
  font-size: clamp(20px, 2.2vw, 32px) !important;
  line-height: 1.12 !important;
  letter-spacing: -0.02em !important;
  font-weight: 600 !important;
  position: static !important;
  transform: none !important;
  animation: none !important;
  transition: none !important;
  white-space: normal !important;
}

.ahorra-scope-clientes-faixa .marquee-shell::-webkit-scrollbar {
  display: none;
}

.ahorra-scope-clientes-faixa .balanza .brand-word,
.ahorra-scope-clientes-faixa .levante .brand-word {
  border: 0 !important;
  background: transparent !important;
  box-shadow: none !important;
}

.ahorra-scope-como-funciona .image-frame {
  width: min(100%, 560px) !important;
  min-height: clamp(420px, 48vw, 640px);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.ahorra-scope-como-funciona .image-placeholder {
  aspect-ratio: 0.78;
  min-height: clamp(384px, 44vw, 600px);
  padding: clamp(5px, 0.7vw, 7px);
  display: block;
  background: linear-gradient(135deg, #0b4f8a 0%, #18d5e5 42%, #00e06d 100%);
}

.ahorra-scope-como-funciona .image-placeholder > div[aria-hidden='true'] {
  inset: clamp(5px, 0.7vw, 7px) !important;
  border-radius: 21px;
  pointer-events: none;
}

.ahorra-scope-como-funciona .image-placeholder img {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 21px;
  object-fit: cover;
  object-position: center 18%;
}

@media (max-width: 920px) {
  .ahorra-scope-como-funciona .image-frame {
    margin-inline: auto;
    min-height: clamp(360px, 72vw, 560px);
  }

  .ahorra-scope-como-funciona .image-placeholder {
    min-height: clamp(330px, 68vw, 520px);
  }
}

@media (max-width: 640px) {
  .ahorra-scope-como-funciona .image-frame {
    min-height: clamp(300px, 108vw, 460px);
    border-radius: 26px !important;
    padding: 12px !important;
  }

  .ahorra-scope-como-funciona .image-placeholder {
    min-height: clamp(276px, 96vw, 420px);
    padding: 4px;
    border-radius: 21px !important;
  }

  .ahorra-scope-como-funciona .image-placeholder > div[aria-hidden='true'],
  .ahorra-scope-como-funciona .image-placeholder img {
    border-radius: 19px;
  }

  .ahorra-scope-como-funciona .image-placeholder > div[aria-hidden='true'] {
    inset: 4px !important;
  }
}

.ahorra-scope-footer .footer {
  background:
    radial-gradient(circle at 12% 16%, rgba(0, 127, 115, 0.42), transparent 30%),
    radial-gradient(circle at 86% 20%, rgba(5, 141, 164, 0.34), transparent 28%),
    linear-gradient(135deg, #007f73 0%, #111f67 48%, #058da4 100%);
}

.ahorra-scope-footer .footer::before {
  content: "";
  position: absolute;
  inset: -50%;
  background:
    radial-gradient(circle at 30% 40%, rgba(0, 127, 115, 0.18), transparent 22%),
    radial-gradient(circle at 75% 62%, rgba(5, 141, 164, 0.22), transparent 24%);
  animation: moveBg 14s ease-in-out infinite alternate;
  filter: blur(24px);
  pointer-events: none;
}

.ahorra-scope-footer .footer-main {
  position: relative;
  z-index: 1;
}

.ahorra-scope-footer .footer-bottom {
  background: transparent;
}

.ahorra-scope-footer .brand-text,
.ahorra-scope-footer .col h3,
.ahorra-scope-footer .links a,
.ahorra-scope-footer .consent,
.ahorra-scope-footer .copy,
.ahorra-scope-footer .legal,
.ahorra-scope-footer .legal a {
  color: rgba(255, 255, 255, 0.92) !important;
}

.ahorra-scope-footer .links a:hover,
.ahorra-scope-footer .legal a:hover {
  color: #ffffff !important;
}

@media (max-width: 920px) {
  .ahorra-scope-hero .hero-inner {
    width: min(100% - 32px, var(--container));
  }
}

@media (max-width: 560px) {
  .ahorra-scope-hero .hero-inner {
    width: min(100% - 24px, var(--container));
  }
}
`,wo={__name:`AhorraPage`,setup(e){let t=`${So}\n${Co}`,n=`<div class="ahorra-page">
        <div class="ahorra-scope-hero" style='font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Inter", "Segoe UI", Roboto, Helvetica, Arial, sans-serif'>
          <main class="hero" aria-labelledby="hero-title">
            <div class="orb one" aria-hidden="true"></div>
            <div class="orb two" aria-hidden="true"></div>
            <div class="energy-wave" aria-hidden="true"></div>

            <div class="hero-inner">
              <header class="header">
                <a href="#" class="brand" aria-label="Ahorra Sin Líos">
                  <img
                    class="brand-logo"
                    src="data:image/png;base64,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"
                    alt="Ahorra Sin Líos"
                    width="520"
                    height="140"
                    loading="eager"
                  />
                </a>

                <nav class="nav" aria-label="Navegación principal">
                  <a href="#">Consultoría energética</a>
                  <a href="#">Comparador inteligente</a>
                  <a href="#">Nuestra energía</a>
                  <a href="#">Blog</a>
                  <a href="#">Contacto</a>
                </nav>

                <div class="header-actions">
                  <a class="phone" href="tel:+34900877155">
                    <span>Atención al cliente</span>900 877 155
                  </a>
                  <a class="client-btn" href="#">
                    Área Cliente
                  </a>
                  <button class="menu" type="button" aria-label="Abrir menú">
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </header>

              <section class="hero-content">
                <div class="copy">
                  <p class="eyebrow">Ahorro real en energía</p>
                  <h1 id="hero-title">Ahorra energía sin líos</h1>
                  <p class="lead">
                    Encontramos una tarifa energética más clara y económica para que ahorres de
                    verdad, sin papeleo ni complicaciones.
                  </p>

                  <div class="cta-row" aria-label="Acciones principales">
                    <a class="cta primary" href="#">
                      Comparar mi tarifa <span class="cta-icon">→</span>
                    </a>
                    <a class="cta secondary" href="#">
                      Hablar con un asesor <span class="cta-icon">☎</span>
                    </a>
                  </div>
                </div>

                <div class="visual" aria-hidden="true"></div>
              </section>

              <footer class="hero-footer">
                <div>
                  <strong>¡Habla con un asesor energético hoy!</strong>
                  <a href="mailto:hola@ahorrasinlios.com">hola@ahorrasinlios.com</a>
                </div>
                <div class="footer-right">
                  <strong>Estamos a solo una llamada de distancia</strong>
                  <a href="tel:+34900877155">900 877 155</a>
                </div>
              </footer>
            </div>
          </main>
        </div>

        <div class="ahorra-scope-benefits" style='font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Inter", "Segoe UI", Roboto, Helvetica, Arial, sans-serif'>
          <main>
            <section class="benefits-section" aria-labelledby="benefits-title">
              <div class="benefits-container">
                <div class="benefits-top">
                  <div class="benefits-copy">
                    <span class="section-kicker">Vive la energía que mereces</span>
                    <h1 class="benefits-title" id="benefits-title">
                      ¡Tú eliges, tú ahorras, tú ganas!
                    </h1>
                    <p class="benefits-description">
                      Llevamos más de 15 años en el sector y conocemos todos los secretos para que
                      tu factura de la luz deje de ser un problema en tu vida.
                    </p>
                  </div>

                  <div class="benefits-list" aria-label="Beneficios principales">
                    <article class="benefit-item">
                      <div class="benefit-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24">
                          <path d="M12 3l2 3 3.5.5-2.5 2.4.6 3.5L12 10.8 8.4 12.4 9 8.9 6.5 6.5 10 6l2-3z" />
                          <path d="M4 15.5c2 3.5 4.7 5.2 8 5.2s6-1.7 8-5.2" />
                        </svg>
                      </div>
                      <div>
                        <h3>Ahorro. Un objetivo, con diferentes caminos</h3>
                        <p>
                          Maximizamos tu ahorro energético con soluciones personalizadas, rápidas y
                          eficientes. ¡Análisis de factura gratis!
                        </p>
                      </div>
                    </article>

                    <article class="benefit-item">
                      <div class="benefit-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24">
                          <path d="M4 21h16" />
                          <path d="M6 21V8h6v13" />
                          <path d="M12 21V4h6v17" />
                          <path d="M8.5 11h1" />
                          <path d="M8.5 15h1" />
                          <path d="M14.5 8h1" />
                          <path d="M14.5 12h1" />
                          <path d="M14.5 16h1" />
                        </svg>
                      </div>
                      <div>
                        <h3>Calidad. Las mejores compañías de luz</h3>
                        <p>
                          Trabajamos con comercializadoras del mercado para garantizarte acceso a
                          productos claros, competitivos y adaptados a ti.
                        </p>
                      </div>
                    </article>

                    <article class="benefit-item">
                      <div class="benefit-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24">
                          <path d="M7 11a4 4 0 0 1 4-4h2" />
                          <path d="M13 7l-2-2" />
                          <path d="M13 7l-2 2" />
                          <path d="M17 13a4 4 0 0 1-4 4h-2" />
                          <path d="M11 17l2 2" />
                          <path d="M11 17l2-2" />
                          <path d="M7 15H5a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h2" />
                          <path d="M17 9h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2" />
                        </svg>
                      </div>
                      <div>
                        <h3>Contigo. De principio a fin</h3>
                        <p>
                          Disfruta de un servicio integral y fiable, con un equipo experto
                          disponible para ayudarte en todas tus necesidades y trámites.
                        </p>
                      </div>
                    </article>
                  </div>
                </div>

                <figure
                  class="family-card"
                  aria-label="Familia feliz disfrutando en casa"
                  style='width: 100%; max-width: 1080px; margin: clamp(56px, 7vw, 86px) auto 0; aspect-ratio: 2.3 / 1; min-height: clamp(300px, 36vw, 500px); padding: clamp(10px, 1.4vw, 18px); border-radius: 34px; overflow: hidden; border: 1px solid rgba(255,255,255,.72); background: linear-gradient(145deg, rgba(255,255,255,.56), rgba(255,255,255,.18)); box-shadow: 0 34px 110px rgba(7, 24, 39, 0.16), 0 12px 32px rgba(7, 24, 39, 0.08)'
                >
                  <div
                    aria-hidden="true"
                    style='position: absolute; inset: 10% 12% auto; height: 46%; border-radius: 999px; background: radial-gradient(circle, rgba(0, 184, 148, 0.26) 0%, rgba(0, 184, 200, 0.2) 38%, rgba(255,255,255,0) 74%); filter: blur(26px); opacity: .95'
                  ></div>
                  <div
                    style='position: relative; z-index: 2; width: 100%; height: 100%; border-radius: 28px; overflow: hidden; border: 1px solid rgba(255,255,255,.68); background: linear-gradient(180deg, rgba(255,255,255,.34), rgba(255,255,255,.12)); box-shadow: inset 0 1px 0 rgba(255,255,255,.6), 0 22px 60px rgba(8, 58, 120, 0.12)'
                  >
                    <div
                      aria-hidden="true"
                      style='position: absolute; inset: 0; background: linear-gradient(180deg, rgba(255,255,255,.16), transparent 22%, transparent 66%, rgba(7,24,39,.22) 100%); z-index: 3'
                    ></div>
                    <img
                      class="family-illustration"
                      src="${vo}"
                      alt="Familia feliz en casa"
                      loading="lazy"
                      style='object-fit: cover; object-position: center top; transform: scale(1); transform-origin: center top'
                    />
                  </div>
                  <figcaption
                    class="media-badge"
                    style='left: clamp(24px, 4vw, 36px); bottom: clamp(24px, 4vw, 36px); padding: 12px 18px; background: rgba(7, 24, 39, 0.42); border: 1px solid rgba(255,255,255,.26); box-shadow: 0 18px 44px rgba(7, 24, 39, 0.18), inset 0 1px 0 rgba(255,255,255,.18)'
                  >
                    <span aria-hidden="true"></span>Ahorra sin complicaciones
                  </figcaption>
                </figure>
              </div>
            </section>
          </main>
        </div>

        <div class="ahorra-scope-solutions" style='font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Inter", "Segoe UI", Roboto, Helvetica, Arial, sans-serif'>
          <section class="services-section" aria-labelledby="services-title">
            <div class="container">
              <header class="section-header">
                <div class="eyebrow">
                  <span aria-hidden="true"></span>
                  Soluciones para ahorrar más
                </div>

                <h2 id="services-title">Así conseguimos tu ahorro energético</h2>

                <p>
                  Descubre cómo podemos ayudarte a vivir la energía que mereces: tarifas más claras,
                  mejores decisiones y soluciones pensadas para ahorrar sin complicaciones.
                </p>
              </header>

              <div class="cards-grid">
                <article class="service-card">
                  <div class="media" aria-hidden="true">
                    <div class="service-illustration">
                      <svg viewBox="0 0 120 120" fill="none">
                        <rect
                          x="20"
                          y="24"
                          width="80"
                          height="60"
                          rx="16"
                          fill="rgba(255,255,255,.92)"
                        />
                        <path
                          d="M36 45h48M36 58h34M36 71h22"
                          stroke="#0b2b6f"
                          stroke-width="6"
                          stroke-linecap="round"
                        />
                        <circle cx="88" cy="84" r="16" fill="url(#g1)" />
                        <path
                          d="M82 84l4 4 8-10"
                          stroke="white"
                          stroke-width="5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <defs>
                          <linearGradient id="g1" x1="72" y1="68" x2="104" y2="100">
                            <stop stop-color="#20E98B" />
                            <stop offset="1" stop-color="#0097A7" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>

                  <div class="card-body">
                    <div class="card-title-row">
                      <h3>Asesoría energética</h3>
                      <span class="arrow" aria-hidden="true">
                        ↗
                      </span>
                    </div>
                    <p>
                      Buscamos <span class="highlight">gratis</span> la mejor tarifa para tu
                      factura y te avisamos cuando haya nuevas oportunidades de ahorro.
                    </p>
                  </div>
                </article>

                <article class="service-card">
                  <div class="media" aria-hidden="true">
                    <div class="service-illustration">
                      <svg viewBox="0 0 120 120" fill="none">
                        <circle cx="60" cy="38" r="16" fill="#FFECA8" />
                        <path
                          d="M60 10v12M60 54v12M32 38H20M100 38H88M40 18l-8-8M88 66l-8-8M80 18l8-8M32 66l8-8"
                          stroke="#FFECA8"
                          stroke-width="6"
                          stroke-linecap="round"
                        />
                        <rect
                          x="24"
                          y="72"
                          width="72"
                          height="30"
                          rx="8"
                          fill="rgba(255,255,255,.92)"
                        />
                        <path
                          d="M34 82h52M34 93h52M48 74v26M72 74v26"
                          stroke="#0097A7"
                          stroke-width="4"
                          stroke-linecap="round"
                        />
                      </svg>
                    </div>
                  </div>

                  <div class="card-body">
                    <div class="card-title-row">
                      <h3>Energía solar</h3>
                      <span class="arrow" aria-hidden="true">
                        ↗
                      </span>
                    </div>
                    <p>
                      Instalamos placas solares al mejor precio para hogares y empresas, con
                      proyectos claros y personalizados.
                    </p>
                  </div>
                </article>

                <article class="service-card">
                  <div class="media" aria-hidden="true">
                    <div class="service-illustration">
                      <svg viewBox="0 0 120 120" fill="none">
                        <rect
                          x="18"
                          y="34"
                          width="28"
                          height="56"
                          rx="8"
                          fill="rgba(255,255,255,.9)"
                        />
                        <rect
                          x="50"
                          y="26"
                          width="28"
                          height="64"
                          rx="8"
                          fill="rgba(255,255,255,.9)"
                        />
                        <rect
                          x="82"
                          y="42"
                          width="20"
                          height="48"
                          rx="7"
                          fill="rgba(255,255,255,.82)"
                        />
                        <path
                          d="M28 58h8M60 52h8M89 63h6"
                          stroke="#0b2b6f"
                          stroke-width="5"
                          stroke-linecap="round"
                        />
                        <path
                          d="M30 100h60"
                          stroke="#20E98B"
                          stroke-width="7"
                          stroke-linecap="round"
                        />
                      </svg>
                    </div>
                  </div>

                  <div class="card-body">
                    <div class="card-title-row">
                      <h3>Baterías solares</h3>
                      <span class="arrow" aria-hidden="true">
                        ↗
                      </span>
                    </div>
                    <p>
                      Saca el máximo rendimiento a tu instalación fotovoltaica y aprovecha mejor la
                      energía generada.
                    </p>
                  </div>
                </article>

                <article class="service-card">
                  <div class="media" aria-hidden="true">
                    <div class="service-illustration">
                      <svg viewBox="0 0 120 120" fill="none">
                        <rect
                          x="18"
                          y="62"
                          width="42"
                          height="34"
                          rx="8"
                          fill="rgba(255,255,255,.92)"
                        />
                        <rect
                          x="70"
                          y="24"
                          width="28"
                          height="72"
                          rx="10"
                          fill="rgba(255,255,255,.86)"
                        />
                        <path
                          d="M27 76h24M27 86h16M84 42v28"
                          stroke="#0b2b6f"
                          stroke-width="5"
                          stroke-linecap="round"
                        />
                        <path
                          d="M60 76c8-20 18-20 28-8"
                          stroke="#20E98B"
                          stroke-width="7"
                          stroke-linecap="round"
                        />
                      </svg>
                    </div>
                  </div>

                  <div class="card-body">
                    <div class="card-title-row">
                      <h3>Aerotermia</h3>
                      <span class="arrow" aria-hidden="true">
                        ↗
                      </span>
                    </div>
                    <p>
                      Tecnología eficiente para climatización y agua caliente, pensada para reducir
                      el consumo y mejorar el confort.
                    </p>
                  </div>
                </article>

                <article class="service-card">
                  <div class="media" aria-hidden="true">
                    <div class="service-illustration">
                      <svg viewBox="0 0 120 120" fill="none">
                        <rect
                          x="22"
                          y="24"
                          width="40"
                          height="72"
                          rx="12"
                          fill="rgba(255,255,255,.92)"
                        />
                        <circle cx="42" cy="50" r="13" fill="url(#g5)" />
                        <path
                          d="M62 58h14c10 0 18 8 18 18v18"
                          stroke="#20E98B"
                          stroke-width="8"
                          stroke-linecap="round"
                        />
                        <path d="M42 50h.1" stroke="#fff" stroke-width="8" stroke-linecap="round" />
                        <defs>
                          <linearGradient id="g5" x1="29" y1="37" x2="55" y2="63">
                            <stop stop-color="#20E98B" />
                            <stop offset="1" stop-color="#0097A7" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>

                  <div class="card-body">
                    <div class="card-title-row">
                      <h3>Punto de recarga</h3>
                      <span class="arrow" aria-hidden="true">
                        ↗
                      </span>
                    </div>
                    <p>
                      Instalación rápida de puntos de recarga para adelantarte a la movilidad
                      eléctrica con tranquilidad.
                    </p>
                  </div>
                </article>

                <article class="service-card">
                  <div class="media" aria-hidden="true">
                    <div class="service-illustration">
                      <svg viewBox="0 0 120 120" fill="none">
                        <rect
                          x="26"
                          y="22"
                          width="68"
                          height="78"
                          rx="16"
                          fill="rgba(255,255,255,.92)"
                        />
                        <path
                          d="M42 72V58M60 72V44M78 72V52"
                          stroke="#0b2b6f"
                          stroke-width="7"
                          stroke-linecap="round"
                        />
                        <path
                          d="M40 84h42"
                          stroke="#20E98B"
                          stroke-width="6"
                          stroke-linecap="round"
                        />
                        <circle cx="84" cy="30" r="12" fill="#20E98B" />
                      </svg>
                    </div>
                  </div>

                  <div class="card-body">
                    <div class="card-title-row">
                      <h3>Telemedida</h3>
                      <span class="arrow" aria-hidden="true">
                        ↗
                      </span>
                    </div>
                    <p>
                      Medimos tu consumo con precisión para que tus facturas sean más claras, reales
                      y fáciles de controlar.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </section>
        </div>

        <div
          class="ahorra-scope-clientes-faixa"
          style='min-height: auto; display: block; font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Inter", "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
        >
          <section class="logo-marquee-section" aria-labelledby="logos-title">
            <div class="marquee-container">
              <h2 class="marquee-title" id="logos-title">
                Ellos ya confían en una energía más simple, ¿te unes?
              </h2>

              <div class="marquee-shell" aria-label="Empresas que confían en Ahorra Sin Líos">
                <div class="marquee-track">
                  <div class="logo-item digitus">
                    <span>
                      <strong class="brand-word">digitus</strong>
                      <span class="brand-sub">podología</span>
                    </span>
                  </div>
                  <div class="logo-item balanza">
                    <span>
                      <strong class="brand-word">Balanza &amp; Asociados</strong>
                    </span>
                  </div>
                  <div class="logo-item marbella">
                    <span>
                      <strong class="brand-word">
                        Marbella
                        <br />
                        Banus
                        <br />
                        Suite
                      </strong>
                      <span class="brand-sub">holiday rentals</span>
                    </span>
                  </div>
                  <div class="logo-item fartons">
                    <span>
                      <strong class="brand-word">
                        Fartons
                        <br />
                        Polo
                      </strong>
                    </span>
                  </div>
                  <div class="logo-item levante">
                    <span>
                      <strong class="brand-word">LU</strong>
                      <span class="brand-sub">Levante</span>
                    </span>
                  </div>
                  <div class="logo-item acuidas">
                    <span>
                      <strong class="brand-word">acuidas</strong>
                      <span class="brand-sub">ayuda a domicilio</span>
                    </span>
                  </div>
                  <div class="logo-item veles">
                    <span>
                      <strong class="brand-word">
                        ◰◰◰
                        <br />
                        ◱◱◱
                      </strong>
                      <span class="brand-sub">Veles e Vents</span>
                    </span>
                  </div>
                  <div class="logo-item huertana">
                    <span>
                      <strong class="brand-word">La Huertana</strong>
                      <span class="brand-sub">1960</span>
                    </span>
                  </div>
                  <div class="logo-item solar">
                    <span>
                      <strong class="brand-word">Solaria</strong>
                      <span class="brand-sub">empresa solar</span>
                    </span>
                  </div>
                  <div class="logo-item nexo">
                    <span>
                      <strong class="brand-word">NEXO</strong>
                      <span class="brand-sub">consulting</span>
                    </span>
                  </div>

                  <div class="logo-item digitus" aria-hidden="true">
                    <span>
                      <strong class="brand-word">digitus</strong>
                      <span class="brand-sub">podología</span>
                    </span>
                  </div>
                  <div class="logo-item balanza" aria-hidden="true">
                    <span>
                      <strong class="brand-word">Balanza &amp; Asociados</strong>
                    </span>
                  </div>
                  <div class="logo-item marbella" aria-hidden="true">
                    <span>
                      <strong class="brand-word">
                        Marbella
                        <br />
                        Banus
                        <br />
                        Suite
                      </strong>
                      <span class="brand-sub">holiday rentals</span>
                    </span>
                  </div>
                  <div class="logo-item fartons" aria-hidden="true">
                    <span>
                      <strong class="brand-word">
                        Fartons
                        <br />
                        Polo
                      </strong>
                    </span>
                  </div>
                  <div class="logo-item levante" aria-hidden="true">
                    <span>
                      <strong class="brand-word">LU</strong>
                      <span class="brand-sub">Levante</span>
                    </span>
                  </div>
                  <div class="logo-item acuidas" aria-hidden="true">
                    <span>
                      <strong class="brand-word">acuidas</strong>
                      <span class="brand-sub">ayuda a domicilio</span>
                    </span>
                  </div>
                  <div class="logo-item veles" aria-hidden="true">
                    <span>
                      <strong class="brand-word">
                        ◰◰◰
                        <br />
                        ◱◱◱
                      </strong>
                      <span class="brand-sub">Veles e Vents</span>
                    </span>
                  </div>
                  <div class="logo-item huertana" aria-hidden="true">
                    <span>
                      <strong class="brand-word">La Huertana</strong>
                      <span class="brand-sub">1960</span>
                    </span>
                  </div>
                  <div class="logo-item solar" aria-hidden="true">
                    <span>
                      <strong class="brand-word">Solaria</strong>
                      <span class="brand-sub">empresa solar</span>
                    </span>
                  </div>
                  <div class="logo-item nexo" aria-hidden="true">
                    <span>
                      <strong class="brand-word">NEXO</strong>
                      <span class="brand-sub">consulting</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div class="ahorra-scope-flow">
        <div class="ahorra-scope-como-funciona" style='font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Inter", "Segoe UI", Roboto, Helvetica, Arial, sans-serif'>
          <section class="asl-process" aria-labelledby="process-title">
            <div class="wrap">
              <div
                class="media"
                aria-label="Espacio reservado para imagen"
                style='position: relative; isolation: isolate'
              >
                <div
                  class="blob"
                  aria-hidden="true"
                  style='transform: rotate(-7deg) scale(1.02); opacity: .88; filter: saturate(1.08)'
                ></div>

                <div
                  aria-hidden="true"
                  style='position: absolute; inset: 10% 4% auto; height: 48%; border-radius: 999px; background: radial-gradient(circle, rgba(0, 184, 148, 0.24) 0%, rgba(18, 200, 216, 0.18) 42%, rgba(255,255,255,0) 78%); filter: blur(28px); z-index: 0'
                ></div>

                <div
                  class="image-frame"
                  style='position: relative; z-index: 1; width: min(100%, 560px); padding: clamp(12px, 2vw, 18px); border-radius: 30px; border: 1px solid rgba(255,255,255,.58); background: linear-gradient(180deg, rgba(255,255,255,.32), rgba(255,255,255,.14)); backdrop-filter: blur(18px); box-shadow: 0 34px 100px rgba(8, 58, 120, 0.18), inset 0 1px 0 rgba(255,255,255,.54); overflow: hidden'
                >
                  <div
                    aria-hidden="true"
                    style='position: absolute; top: clamp(12px, 2vw, 18px); left: clamp(12px, 2vw, 18px); display: inline-flex; align-items: center; gap: 8px; padding: 8px 12px; border-radius: 999px; background: rgba(255,255,255,.28); border: 1px solid rgba(255,255,255,.42); backdrop-filter: blur(18px); z-index: 3'
                  >
                    <span style='width: 8px; height: 8px; border-radius: 999px; background: #00b894; box-shadow: 0 0 0 5px rgba(0,184,148,.14)'></span>
                    <span style='width: 38px; height: 2px; border-radius: 999px; background: rgba(7,24,39,.22)'></span>
                  </div>

                  <div
                    class="image-placeholder"
                    style='position: relative; width: 100%; height: 100%; border-radius: 24px; overflow: hidden; border: 1px solid transparent; box-shadow: 0 0 0 1px rgba(255,255,255,.12), 0 0 22px rgba(24,213,229,.16), 0 0 34px rgba(0,224,109,.12), 0 22px 54px rgba(7, 24, 39, 0.16)'
                  >
                    <div
                      aria-hidden="true"
                      style='position: absolute; inset: 0; background: linear-gradient(180deg, rgba(255,255,255,.12), transparent 26%, transparent 68%, rgba(7,24,39,.16) 100%); z-index: 2; pointer-events: none'
                    ></div>
                    <img
                      src="${yo}"
                      alt="Proceso simple de ahorro energético"
                      loading="lazy"
                      style='width: 100%; height: 100%; object-fit: cover; object-position: center 18%; display: block'
                    />
                  </div>
                </div>
              </div>

              <div class="content">
                <p class="kicker">Proceso simple</p>

                <h2 id="process-title">Ahorrar sin líos empieza aquí</h2>

                <p class="intro">
                  Un proceso claro, humano y rápido para encontrar una mejor opción energética sin
                  que tengas que complicarte.
                </p>

                <ol class="steps">
                  <li class="step">
                    <span class="num">1</span>
                    <div>
                      <h3>Nos envías tu factura</h3>
                      <p>
                        Revisamos tu situación actual para entender tu consumo, tarifa y
                        oportunidades de ahorro.
                      </p>
                    </div>
                  </li>

                  <li class="step">
                    <span class="num">2</span>
                    <div>
                      <h3>Analizamos la mejor opción</h3>
                      <p>
                        Comparamos personalmente entre más de 30 compañías de energía para encontrar
                        la opción que más te convenga.
                      </p>
                    </div>
                  </li>

                  <li class="step">
                    <span class="num">3</span>
                    <div>
                      <h3>Te presentamos el estudio</h3>
                      <p>
                        Recibes una propuesta clara, fácil de entender y enfocada en tu ahorro real.
                      </p>
                    </div>
                  </li>

                  <li class="step">
                    <span class="num">4</span>
                    <div>
                      <h3>Gestionamos tu contrato</h3>
                      <p>
                        Nos encargamos del trámite con la compañía para que el cambio sea cómodo y
                        sin complicaciones.
                      </p>
                    </div>
                  </li>

                  <li class="step">
                    <span class="num">5</span>
                    <div>
                      <h3>Ya estás Ahorrando Sin Líos</h3>
                      <p>
                        Empiezas a ahorrar con una tarifa más adecuada y con acompañamiento cuando
                        lo necesites.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </section>
        </div>

        <div class="ahorra-scope-cta" style='font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Inter", "Segoe UI", Roboto, Helvetica, Arial, sans-serif'>
          <section class="newsletter" aria-labelledby="newsletter-title">
            <div class="wrap">
              <div class="copy">
                <p class="kicker">Consejos y ahorro</p>

                <h2 id="newsletter-title">Ahorro, noticias y energía simple</h2>

                <p class="lead">
                  Únete a nuestra comunidad y recibe consejos prácticos, ofertas inteligentes y
                  novedades para pagar menos sin complicarte.
                </p>

                <form class="form" action="#" method="post">
                  <label>
                    <span
                      style='position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0)'
                    >
                      Nombre
                    </span>
                    <input
                      class="field"
                      type="text"
                      name="name"
                      placeholder="Nombre"
                      autocomplete="name"
                    />
                  </label>

                  <label>
                    <span
                      style='position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0)'
                    >
                      Correo electrónico
                    </span>
                    <input
                      class="field"
                      type="email"
                      name="email"
                      placeholder="Tu correo"
                      autocomplete="email"
                      required
                    />
                  </label>

                  <button class="btn" type="submit">
                    Suscribirme
                  </button>

                  <label class="consent">
                    <input type="checkbox" required />
                    <span>
                      He leído y acepto los términos, las condiciones de uso y la Política de
                      Privacidad.
                    </span>
                  </label>
                </form>
              </div>

              <div
                class="visual"
                aria-hidden="true"
                style='position: relative; isolation: isolate'
              >
                <div
                  class="blob"
                  style='transform: rotate(-9deg) scale(1.04); opacity: .82; filter: saturate(1.08)'
                ></div>

                <div
                  aria-hidden="true"
                  style='position: absolute; inset: 11% 6% auto; height: 46%; border-radius: 999px; background: radial-gradient(circle, rgba(0, 184, 148, 0.18) 0%, rgba(18, 200, 216, 0.16) 44%, rgba(255,255,255,0) 80%); filter: blur(30px); z-index: 0'
                ></div>

                <div
                  class="portrait"
                  style='position: relative; z-index: 1; width: min(100%, 390px); aspect-ratio: .92 / 1.08; padding: clamp(5px, 0.75vw, 7px); border-radius: 30px; overflow: hidden; border: 1px solid transparent; background: linear-gradient(180deg, rgba(255,255,255,.3), rgba(255,255,255,.12)) padding-box, linear-gradient(135deg, #0b4f8a 0%, #18d5e5 42%, #00e06d 100%) border-box; backdrop-filter: blur(18px); box-shadow: 0 0 0 1px rgba(255,255,255,.12), 0 0 22px rgba(24, 213, 229, 0.15), 0 0 34px rgba(0, 224, 109, 0.11), 0 32px 88px rgba(8, 58, 120, 0.16)'
                >
                  <div
                    aria-hidden="true"
                    style='position: absolute; inset: clamp(5px, 0.75vw, 7px); border-radius: 24px; overflow: hidden; z-index: 1'
                  >
                    <img
                      src="${bo}"
                      alt=""
                      loading="lazy"
                      style='width: 100%; height: 100%; object-fit: cover; object-position: center 18%; display: block'
                    />
                    <div
                      aria-hidden="true"
                      style='position: absolute; inset: 0; border-radius: inherit; background: linear-gradient(180deg, rgba(255,255,255,.08), transparent 28%, transparent 66%, rgba(7,24,39,.12) 100%); pointer-events: none'
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        </div>

        <div class="ahorra-scope-resenas" style='font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Inter", "Segoe UI", Roboto, Helvetica, Arial, sans-serif'>
          <section class="reviews" aria-labelledby="reviews-title">
            <div class="head">
              <div class="kicker">
                <span class="dot" aria-hidden="true"></span>
                Opiniones reales
              </div>

              <h2 id="reviews-title">
                No lo decimos nosotros, <span>lo dicen ellos</span>
              </h2>
            </div>

            <div class="summary" aria-label="Resumen de reseñas">
              <div class="google">
                <span class="google-mark" aria-label="Google">
                  <span class="g1">G</span>
                  <span class="g2">o</span>
                  <span class="g3">o</span>
                  <span class="g4">g</span>
                  <span class="g5">l</span>
                  <span class="g6">e</span>
                </span>
                <span>My Reviews</span>
              </div>

              <div class="rating">
                <span>5.0</span>
                <span class="stars" aria-label="5 estrellas">
                  ★★★★★
                </span>
              </div>
            </div>

            <div class="track-wrap" aria-label="Carrusel automático de reseñas">
              <div class="track">
                <article class="review">
                  <div class="top">
                    <div class="avatar">R</div>
                    <div>
                      <h3 class="name">Rubén Marín</h3>
                      <div class="meta">
                        <span class="stars">★★★★★</span>
                        <span>hace 2 años</span>
                      </div>
                    </div>
                  </div>
                  <p class="text">
                    Precios claros y trato inmejorable. Todo fue rápido, sencillo y sin
                    complicaciones.
                  </p>
                </article>

                <article class="review">
                  <div class="top">
                    <div class="avatar">S</div>
                    <div>
                      <h3 class="name">Susana Cuevas</h3>
                      <div class="meta">
                        <span class="stars">★★★★★</span>
                        <span>hace 2 años</span>
                      </div>
                    </div>
                  </div>
                  <p class="text">
                    Un asesor muy atento y resolutivo. Servicio 100 % recomendable.
                  </p>
                </article>

                <article class="review">
                  <div class="top">
                    <div class="avatar">J</div>
                    <div>
                      <h3 class="name">Juan Carlos Guerrero Ramos</h3>
                      <div class="meta">
                        <span class="stars">★★★★★</span>
                        <span>hace 2 años</span>
                      </div>
                    </div>
                  </div>
                  <p class="text">
                    Me recomendaron la mejor opción y la verdad es que va muy bien, económica y
                    fiable.
                  </p>
                </article>

                <article class="review">
                  <div class="top">
                    <div class="avatar">C</div>
                    <div>
                      <h3 class="name">Cheky Affinito</h3>
                      <div class="meta">
                        <span class="stars">★★★★★</span>
                        <span>hace 2 años</span>
                      </div>
                    </div>
                  </div>
                  <p class="text">
                    Excelente compañía. Me ayudaron a ahorrar en la factura de mi nueva casa.
                  </p>
                </article>

                <article class="review">
                  <div class="top">
                    <div class="avatar">M</div>
                    <div>
                      <h3 class="name">María López</h3>
                      <div class="meta">
                        <span class="stars">★★★★★</span>
                        <span>hace 1 año</span>
                      </div>
                    </div>
                  </div>
                  <p class="text">
                    Muy buena atención. Me explicaron todo de forma clara y sin letra pequeña.
                  </p>
                </article>

                <article class="review">
                  <div class="top">
                    <div class="avatar">A</div>
                    <div>
                      <h3 class="name">Antonio Ruiz</h3>
                      <div class="meta">
                        <span class="stars">★★★★★</span>
                        <span>hace 1 año</span>
                      </div>
                    </div>
                  </div>
                  <p class="text">
                    El cambio fue rápido. Se encargaron de todo y empecé a pagar menos.
                  </p>
                </article>

                <!--Duplicado para scroll infinito fluido-->
                <article class="review" aria-hidden="true">
                  <div class="top">
                    <div class="avatar">R</div>
                    <div>
                      <h3 class="name">Rubén Marín</h3>
                      <div class="meta">
                        <span class="stars">★★★★★</span>
                        <span>hace 2 años</span>
                      </div>
                    </div>
                  </div>
                  <p class="text">
                    Precios claros y trato inmejorable. Todo fue rápido, sencillo y sin
                    complicaciones.
                  </p>
                </article>

                <article class="review" aria-hidden="true">
                  <div class="top">
                    <div class="avatar">S</div>
                    <div>
                      <h3 class="name">Susana Cuevas</h3>
                      <div class="meta">
                        <span class="stars">★★★★★</span>
                        <span>hace 2 años</span>
                      </div>
                    </div>
                  </div>
                  <p class="text">
                    Un asesor muy atento y resolutivo. Servicio 100 % recomendable.
                  </p>
                </article>

                <article class="review" aria-hidden="true">
                  <div class="top">
                    <div class="avatar">J</div>
                    <div>
                      <h3 class="name">Juan Carlos Guerrero Ramos</h3>
                      <div class="meta">
                        <span class="stars">★★★★★</span>
                        <span>hace 2 años</span>
                      </div>
                    </div>
                  </div>
                  <p class="text">
                    Me recomendaron la mejor opción y la verdad es que va muy bien, económica y
                    fiable.
                  </p>
                </article>

                <article class="review" aria-hidden="true">
                  <div class="top">
                    <div class="avatar">C</div>
                    <div>
                      <h3 class="name">Cheky Affinito</h3>
                      <div class="meta">
                        <span class="stars">★★★★★</span>
                        <span>hace 2 años</span>
                      </div>
                    </div>
                  </div>
                  <p class="text">
                    Excelente compañía. Me ayudaron a ahorrar en la factura de mi nueva casa.
                  </p>
                </article>

                <article class="review" aria-hidden="true">
                  <div class="top">
                    <div class="avatar">M</div>
                    <div>
                      <h3 class="name">María López</h3>
                      <div class="meta">
                        <span class="stars">★★★★★</span>
                        <span>hace 1 año</span>
                      </div>
                    </div>
                  </div>
                  <p class="text">
                    Muy buena atención. Me explicaron todo de forma clara y sin letra pequeña.
                  </p>
                </article>

                <article class="review" aria-hidden="true">
                  <div class="top">
                    <div class="avatar">A</div>
                    <div>
                      <h3 class="name">Antonio Ruiz</h3>
                      <div class="meta">
                        <span class="stars">★★★★★</span>
                        <span>hace 1 año</span>
                      </div>
                    </div>
                  </div>
                  <p class="text">
                    El cambio fue rápido. Se encargaron de todo y empecé a pagar menos.
                  </p>
                </article>
              </div>
            </div>
          </section>
        </div>

        <div class="ahorra-scope-form" style='font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Inter", "Segoe UI", Roboto, Helvetica, Arial, sans-serif'>
          <section
            class="quote-section"
            aria-labelledby="quote-title"
            style='padding-top: clamp(36px, 4vw, 64px)'
          >
            <div class="wrap">
              <div class="left-panel">
                <div class="content">
                  <p class="kicker">Oferta personalizada</p>

                  <h2 id="quote-title">
                    Sube tu factura y recibe
                    <br />
                    una oferta en 24 h
                  </h2>

                  <p class="lead">
                    Rellena el formulario y te diremos cuál es la mejor tarifa para reducir tu
                    factura sin líos.
                  </p>
                </div>

                <div
                  class="visual"
                  aria-hidden="true"
                  style='position: relative; isolation: isolate'
                >
                  <div
                    class="blob"
                    style='transform: rotate(-8deg) scale(1.04); opacity: .84; filter: saturate(1.04)'
                  ></div>

                  <div
                    aria-hidden="true"
                    style='position: absolute; inset: 12% 6% auto; height: 48%; border-radius: 999px; background: radial-gradient(circle, rgba(0, 212, 126, 0.22) 0%, rgba(18, 200, 216, 0.16) 42%, rgba(255,255,255,0) 78%); filter: blur(30px); z-index: 0'
                  ></div>

                  <div
                    style='position: relative; z-index: 1; width: min(100%, 400px); min-height: clamp(320px, 32vw, 430px); padding: clamp(5px, 0.75vw, 7px); border-radius: 30px; overflow: hidden; border: 1px solid transparent; background: linear-gradient(180deg, rgba(255,255,255,.3), rgba(255,255,255,.12)) padding-box, linear-gradient(135deg, #0b4f8a 0%, #18d5e5 42%, #00e06d 100%) border-box; backdrop-filter: blur(18px); box-shadow: 0 0 0 1px rgba(255,255,255,.12), 0 0 22px rgba(24, 213, 229, 0.15), 0 0 34px rgba(0, 224, 109, 0.11), 0 32px 94px rgba(8, 58, 120, 0.16)'
                  >
                    <div
                      aria-hidden="true"
                      style='position: absolute; inset: clamp(5px, 0.75vw, 7px); border-radius: 24px; overflow: hidden; z-index: 1'
                    >
                      <img
                        src="${xo}"
                        alt=""
                        loading="lazy"
                        style='width: 100%; height: 100%; object-fit: cover; object-position: center 28%; display: block; transform: scale(1.03)'
                      />
                      <div
                        aria-hidden="true"
                        style='position: absolute; inset: 0; border-radius: inherit; background: linear-gradient(180deg, rgba(255,255,255,.08), transparent 26%, transparent 68%, rgba(7,24,39,.12) 100%); pointer-events: none'
                      ></div>
                    </div>

                    <div
                      aria-hidden="true"
                      style='position: absolute; top: clamp(14px, 2vw, 20px); left: clamp(14px, 2vw, 20px); display: inline-flex; align-items: center; gap: 8px; padding: 8px 12px; border-radius: 999px; background: rgba(255,255,255,.28); border: 1px solid rgba(255,255,255,.42); backdrop-filter: blur(18px); z-index: 3'
                    >
                      <span style='width: 8px; height: 8px; border-radius: 999px; background: #00d47e; box-shadow: 0 0 0 5px rgba(0,212,126,.14)'></span>
                      <span style='width: 34px; height: 2px; border-radius: 999px; background: rgba(7,24,39,.22)'></span>
                    </div>

                    <div
                      aria-hidden="true"
                      style='position: absolute; top: clamp(18px, 2.2vw, 24px); right: clamp(14px, 2vw, 20px); display: inline-flex; align-items: center; gap: 6px; padding: 8px 10px; border-radius: 999px; background: rgba(7,24,39,.22); border: 1px solid rgba(255,255,255,.26); backdrop-filter: blur(18px); z-index: 3'
                    >
                      <span style='width: 20px; height: 2px; border-radius: 999px; background: rgba(255,255,255,.78)'></span>
                      <span style='width: 8px; height: 8px; border-radius: 999px; background: rgba(255,255,255,.92)'></span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-panel">
                <form class="form" action="#" method="post" enctype="multipart/form-data">
                  <div class="grid-2">
                    <label>
                      Nombre
                      <input type="text" name="name" autocomplete="given-name" />
                    </label>

                    <label>
                      Apellido
                      <input type="text" name="surname" autocomplete="family-name" />
                    </label>
                  </div>

                  <label>
                    Correo
                    <input type="email" name="email" autocomplete="email" required />
                  </label>

                  <label>
                    Móvil
                    <input type="tel" name="phone" autocomplete="tel" />
                  </label>

                  <label>
                    Tu mensaje
                    <textarea name="message"></textarea>
                  </label>

                  <div class="upload-row">
                    <label class="upload">
                      <input type="file" name="bill" accept=".pdf,.jpg,.jpeg,.png" />
                      <span class="upload-icon">↑</span>
                      <span>
                        <strong>Subir factura</strong>
                        <span>Comparte tu factura más reciente</span>
                      </span>
                    </label>

                    <p class="max">Máx. 10 MB</p>
                  </div>

                  <label class="consent">
                    <input type="checkbox" required />
                    <span>
                      He leído y acepto los términos, las condiciones de uso y la Política de
                      Privacidad.
                    </span>
                  </label>

                  <button class="btn" type="submit">
                    Hablar con Ahorra Sin Líos
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>

        <div
          class="ahorra-scope-footer"
          style='min-height: auto; font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Inter", "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
        >
          <footer class="footer" aria-label="Pie de página">
            <div class="footer-main" style='padding-bottom: clamp(20px, 3vw, 36px)'>
              <div class="brand">
                <a href="#" aria-label="Ahorra Sin Líos">
                  <img
                    class="logo"
                    src="data:image/png;base64,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"
                    alt="Ahorra Sin Líos"
                    width="520"
                    height="140"
                  />
                </a>

                <p class="brand-text">
                  Consejos claros para ahorrar en luz y energía sin complicaciones.
                </p>

                <form class="subscribe" action="#" method="post">
                  <div class="subscribe-row">
                    <label>
                      <span
                        style='position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0)'
                      >
                        Correo
                      </span>
                      <input
                        class="input"
                        type="email"
                        name="email"
                        placeholder="Tu correo"
                        autocomplete="email"
                        required
                      />
                    </label>

                    <button class="btn" type="submit">
                      Suscribirme
                    </button>
                  </div>

                  <label class="consent">
                    <input type="checkbox" required />
                    <span>Acepto la Política de Privacidad.</span>
                  </label>
                </form>
              </div>

              <nav class="col" aria-label="Empresa">
                <h3>Empresa</h3>
                <ul class="links">
                  <li>
                    <a href="#">Nuestra energía</a>
                  </li>
                  <li>
                    <a href="#">Comparador inteligente</a>
                  </li>
                  <li>
                    <a href="#">Casos de ahorro</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                </ul>
              </nav>

              <nav class="col" aria-label="Soporte">
                <h3>Soporte</h3>
                <ul class="links">
                  <li>
                    <a href="#">Área cliente</a>
                  </li>
                  <li>
                    <a href="#">Contacto</a>
                  </li>
                  <li>
                    <a href="#">Aviso legal</a>
                  </li>
                  <li>
                    <a href="#">Cookies</a>
                  </li>
                </ul>
              </nav>
            </div>

            <div class="footer-bottom">
              <div class="bottom-inner">
                <p class="copy">© 2024 Ahorra Sin Líos</p>

                <nav class="legal" aria-label="Legal">
                  <a href="#">Privacidad</a>
                  <a href="#">Términos</a>
                  <a href="#">Cookies</a>
                </nav>

                <div class="social" aria-label="Redes sociales">
                  <a href="#" aria-label="LinkedIn">
                    in
                  </a>
                  <a href="#" aria-label="Instagram">
                    ◎
                  </a>
                  <a href="#" aria-label="YouTube">
                    ▶
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>`;return(e,r)=>(Si(),Di(G,null,[(Si(),Oi(ir(`style`),{textContent:t})),Ni(`div`,{class:`ahorra-page-host`,innerHTML:n})],64))}},To={__name:`App`,setup(e){return(e,t)=>(Si(),Oi(wo))}},Eo=typeof document<`u`;function Do(e){return typeof e==`object`||`displayName`in e||`props`in e||`__vccOpts`in e}function Oo(e){return e.__esModule||e[Symbol.toStringTag]===`Module`||e.default&&Do(e.default)}var Q=Object.assign;function ko(e,t){let n={};for(let r in t){let i=t[r];n[r]=$(i)?i.map(e):e(i)}return n}var Ao=()=>{},$=Array.isArray;function jo(e,t){let n={};for(let r in e)n[r]=r in t?t[r]:e[r];return n}var Mo=Symbol(``);function No(e,t){return Q(Error(),{type:e,[Mo]:!0},t)}function Po(e,t){return e instanceof Error&&Mo in e&&(t==null||!!(e.type&t))}var Fo=Symbol(``),Io=Symbol(``),Lo=Symbol(``),Ro=Symbol(``),zo=Symbol(``),Bo=/#/g,Vo=/&/g,Ho=/\//g,Uo=/=/g,Wo=/\?/g,Go=/\+/g,Ko=/%5B/g,qo=/%5D/g,Jo=/%5E/g,Yo=/%60/g,Xo=/%7B/g,Zo=/%7C/g,Qo=/%7D/g,$o=/%20/g;function es(e){return e==null?``:encodeURI(``+e).replace(Zo,`|`).replace(Ko,`[`).replace(qo,`]`)}function ts(e){return es(e).replace(Xo,`{`).replace(Qo,`}`).replace(Jo,`^`)}function ns(e){return es(e).replace(Go,`%2B`).replace($o,`+`).replace(Bo,`%23`).replace(Vo,`%26`).replace(Yo,"`").replace(Xo,`{`).replace(Qo,`}`).replace(Jo,`^`)}function rs(e){return ns(e).replace(Uo,`%3D`)}function is(e){return es(e).replace(Bo,`%23`).replace(Wo,`%3F`)}function as(e){return is(e).replace(Ho,`%2F`)}function os(e){if(e==null)return null;try{return decodeURIComponent(``+e)}catch{}return``+e}var ss=/\/$/,cs=e=>e.replace(ss,``);function ls(e,t,n=`/`){let r,i={},a=``,o=``,s=t.indexOf(`#`),c=t.indexOf(`?`);return c=s>=0&&c>s?-1:c,c>=0&&(r=t.slice(0,c),a=t.slice(c,s>0?s:t.length),i=e(a.slice(1))),s>=0&&(r||=t.slice(0,s),o=t.slice(s,t.length)),r=_s(r??t,n),{fullPath:r+a+o,path:r,query:i,hash:os(o)}}function us(e,t){let n=t.query?e(t.query):``;return t.path+(n&&`?`)+n+(t.hash||``)}function ds(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||`/`}function fs(e,t,n){let r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&ps(t.matched[r],n.matched[i])&&ms(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function ps(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ms(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!hs(e[n],t[n]))return!1;return!0}function hs(e,t){return $(e)?gs(e,t):$(t)?gs(t,e):(e&&e.valueOf())===(t&&t.valueOf())}function gs(e,t){return $(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):e.length===1&&e[0]===t}function _s(e,t){if(e.startsWith(`/`))return e;if(!e)return t;let n=t.split(`/`),r=e.split(`/`),i=r[r.length-1];(i===`..`||i===`.`)&&r.push(``);let a=n.length-1,o,s;for(o=0;o<r.length;o++)if(s=r[o],s!==`.`)if(s===`..`)a>1&&a--;else break;return n.slice(0,a).join(`/`)+`/`+r.slice(o).join(`/`)}var vs={path:`/`,name:void 0,params:{},query:{},hash:``,fullPath:`/`,matched:[],meta:{},redirectedFrom:void 0};function ys(e){if(!e)if(Eo){let t=document.querySelector(`base`);e=t&&t.getAttribute(`href`)||`/`,e=e.replace(/^\w+:\/\/[^/]+/,``)}else e=`/`;return e[0]!==`/`&&e[0]!==`#`&&(e=`/`+e),cs(e)}var bs=/^[^#]+#/;function xs(e,t){return e.replace(bs,`#`)+t}function Ss(e,t){let n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}var Cs=()=>({left:window.scrollX,top:window.scrollY});function ws(e){let t;if(`el`in e){let n=e.el,r=typeof n==`string`&&n.startsWith(`#`),i=typeof n==`string`?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=Ss(i,e)}else t=e;`scrollBehavior`in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left==null?window.scrollX:t.left,t.top==null?window.scrollY:t.top)}function Ts(e,t){return(history.state?history.state.position-t:-1)+e}var Es=new Map;function Ds(e,t){Es.set(e,t)}function Os(e){let t=Es.get(e);return Es.delete(e),t}function ks(e){return typeof e==`string`||e&&typeof e==`object`}function As(e){return typeof e==`string`||typeof e==`symbol`}function js(e){let t={};if(e===``||e===`?`)return t;let n=(e[0]===`?`?e.slice(1):e).split(`&`);for(let e=0;e<n.length;++e){let r=n[e].replace(Go,` `),i=r.indexOf(`=`),a=os(i<0?r:r.slice(0,i)),o=i<0?null:os(r.slice(i+1));if(a in t){let e=t[a];$(e)||(e=t[a]=[e]),e.push(o)}else t[a]=o}return t}function Ms(e){let t=``;for(let n in e){let r=e[n];if(n=rs(n),r==null){r!==void 0&&(t+=(t.length?`&`:``)+n);continue}($(r)?r.map(e=>e&&ns(e)):[r&&ns(r)]).forEach(e=>{e!==void 0&&(t+=(t.length?`&`:``)+n,e!=null&&(t+=`=`+e))})}return t}function Ns(e){let t={};for(let n in e){let r=e[n];r!==void 0&&(t[n]=$(r)?r.map(e=>e==null?null:``+e):r==null?r:``+r)}return t}function Ps(){let e=[];function t(t){return e.push(t),()=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Fs(e,t,n,r,i,a=e=>e()){let o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((s,c)=>{let l=e=>{e===!1?c(No(4,{from:n,to:t})):e instanceof Error?c(e):ks(e)?c(No(2,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&typeof e==`function`&&o.push(e),s())},u=a(()=>e.call(r&&r.instances[i],t,n,l)),d=Promise.resolve(u);e.length<3&&(d=d.then(l)),d.catch(e=>c(e))})}function Is(e,t,n,r,i=e=>e()){let a=[];for(let o of e)for(let e in o.components){let s=o.components[e];if(!(t!==`beforeRouteEnter`&&!o.instances[e]))if(Do(s)){let c=(s.__vccOpts||s)[t];c&&a.push(Fs(c,n,r,o,e,i))}else{let c=s();a.push(()=>c.then(a=>{if(!a)throw Error(`Couldn't resolve component "${e}" at "${o.path}"`);let s=Oo(a)?a.default:a;o.mods[e]=a,o.components[e]=s;let c=(s.__vccOpts||s)[t];return c&&Fs(c,n,r,o,e,i)()}))}}return a}function Ls(e,t){let n=[],r=[],i=[],a=Math.max(t.matched.length,e.matched.length);for(let o=0;o<a;o++){let a=t.matched[o];a&&(e.matched.find(e=>ps(e,a))?r.push(a):n.push(a));let s=e.matched[o];s&&(t.matched.find(e=>ps(e,s))||i.push(s))}return[n,r,i]}var Rs=()=>location.protocol+`//`+location.host;function zs(e,t){let{pathname:n,search:r,hash:i}=t,a=e.indexOf(`#`);if(a>-1){let t=i.includes(e.slice(a))?e.slice(a).length:1,n=i.slice(t);return n[0]!==`/`&&(n=`/`+n),ds(n,``)}return ds(n,e)+r+i}function Bs(e,t,n,r){let i=[],a=[],o=null,s=({state:a})=>{let s=zs(e,location),c=n.value,l=t.value,u=0;if(a){if(n.value=s,t.value=a,o&&o===c){o=null;return}u=l?a.position-l.position:0}else r(s);i.forEach(e=>{e(n.value,c,{delta:u,type:`pop`,direction:u?u>0?`forward`:`back`:``})})};function c(){o=n.value}function l(e){i.push(e);let t=()=>{let t=i.indexOf(e);t>-1&&i.splice(t,1)};return a.push(t),t}function u(){if(document.visibilityState===`hidden`){let{history:e}=window;if(!e.state)return;e.replaceState(Q({},e.state,{scroll:Cs()}),``)}}function d(){for(let e of a)e();a=[],window.removeEventListener(`popstate`,s),window.removeEventListener(`pagehide`,u),document.removeEventListener(`visibilitychange`,u)}return window.addEventListener(`popstate`,s),window.addEventListener(`pagehide`,u),document.addEventListener(`visibilitychange`,u),{pauseListeners:c,listen:l,destroy:d}}function Vs(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?Cs():null}}function Hs(e){let{history:t,location:n}=window,r={value:zs(e,n)},i={value:t.state};i.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(r,a,o){let s=e.indexOf(`#`),c=s>-1?(n.host&&document.querySelector(`base`)?e:e.slice(s))+r:Rs()+e+r;try{t[o?`replaceState`:`pushState`](a,``,c),i.value=a}catch(e){console.error(e),n[o?`replace`:`assign`](c)}}function o(e,n){a(e,Q({},t.state,Vs(i.value.back,e,i.value.forward,!0),n,{position:i.value.position}),!0),r.value=e}function s(e,n){let o=Q({},i.value,t.state,{forward:e,scroll:Cs()});a(o.current,o,!0),a(e,Q({},Vs(r.value,e,null),{position:o.position+1},n),!1),r.value=e}return{location:r,state:i,push:s,replace:o}}function Us(e){e=ys(e);let t=Hs(e),n=Bs(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}let i=Q({location:``,base:e,go:r,createHref:xs.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}var Ws={type:0,value:``},Gs=/[a-zA-Z0-9_]/;function Ks(e){if(!e)return[[]];if(e===`/`)return[[Ws]];if(!e.startsWith(`/`))throw Error(`Invalid path "${e}"`);function t(e){throw Error(`ERR (${n})/"${l}": ${e}`)}let n=0,r=n,i=[],a;function o(){a&&i.push(a),a=[]}let s=0,c,l=``,u=``;function d(){l&&=(n===0?a.push({type:0,value:l}):n===1||n===2||n===3?(a.length>1&&(c===`*`||c===`+`)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:l,regexp:u,repeatable:c===`*`||c===`+`,optional:c===`*`||c===`?`})):t(`Invalid state to consume buffer`),``)}function f(){l+=c}for(;s<e.length;)switch(c=e[s++],n){case 0:c===`\\`?(r=n,n=4):c===`/`?(l&&d(),o()):c===`:`?(d(),n=1):f();break;case 4:f(),n=r;break;case 1:c===`(`?n=2:Gs.test(c)?f():(d(),n=0,c!==`*`&&c!==`?`&&c!==`+`&&s--);break;case 2:c===`)`?u[u.length-1]==`\\`?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:d(),n=0,c!==`*`&&c!==`?`&&c!==`+`&&s--,u=``;break;default:t(`Unknown state`);break}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),d(),o(),i}var qs=`[^/]+?`,Js={sensitive:!1,strict:!1,start:!0,end:!0},Ys=/[.+*?^${}()[\]/\\]/g;function Xs(e,t){let n=Q({},Js,t),r=[],i=n.start?`^`:``,a=[];for(let t of e){let e=t.length?[]:[90];n.strict&&!t.length&&(i+=`/`);for(let r=0;r<t.length;r++){let o=t[r],s=40+(n.sensitive?.25:0);if(o.type===0)r||(i+=`/`),i+=o.value.replace(Ys,`\\$&`),s+=40;else if(o.type===1){let{value:e,repeatable:n,optional:c,regexp:l}=o;a.push({name:e,repeatable:n,optional:c});let u=l||qs;if(u!==qs){s+=10;try{RegExp(`(${u})`)}catch(t){throw Error(`Invalid custom RegExp for param "${e}" (${u}): `+t.message)}}let d=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;r||(d=c&&t.length<2?`(?:/${d})`:`/`+d),c&&(d+=`?`),i+=d,s+=20,c&&(s+=-8),n&&(s+=-20),u===`.*`&&(s+=-50)}e.push(s)}r.push(e)}if(n.strict&&n.end){let e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+=`/?`),n.end?i+=`$`:n.strict&&!i.endsWith(`/`)&&(i+=`(?:/|$)`);let o=new RegExp(i,n.sensitive?``:`i`);function s(e){let t=e.match(o),n={};if(!t)return null;for(let e=1;e<t.length;e++){let r=t[e]||``,i=a[e-1];n[i.name]=r&&i.repeatable?r.split(`/`):r}return n}function c(t){let n=``,r=!1;for(let i of e){(!r||!n.endsWith(`/`))&&(n+=`/`),r=!1;for(let e of i)if(e.type===0)n+=e.value;else if(e.type===1){let{value:a,repeatable:o,optional:s}=e,c=a in t?t[a]:``;if($(c)&&!o)throw Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);let l=$(c)?c.join(`/`):c;if(!l)if(s)i.length<2&&(n.endsWith(`/`)?n=n.slice(0,-1):r=!0);else throw Error(`Missing required param "${a}"`);n+=l}}return n||`/`}return{re:o,score:r,keys:a,parse:s,stringify:c}}function Zs(e,t){let n=0;for(;n<e.length&&n<t.length;){let r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Qs(e,t){let n=0,r=e.score,i=t.score;for(;n<r.length&&n<i.length;){let e=Zs(r[n],i[n]);if(e)return e;n++}if(Math.abs(i.length-r.length)===1){if($s(r))return 1;if($s(i))return-1}return i.length-r.length}function $s(e){let t=e[e.length-1];return e.length>0&&t[t.length-1]<0}var ec={strict:!1,end:!0,sensitive:!1};function tc(e,t,n){let r=Q(Xs(Ks(e.path),n),{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function nc(e,t){let n=[],r=new Map;t=jo(ec,t);function i(e){return r.get(e)}function a(e,n,r){let i=!r,s=ic(e);s.aliasOf=r&&r.record;let l=jo(t,e),u=[s];if(`alias`in e){let t=typeof e.alias==`string`?[e.alias]:e.alias;for(let e of t)u.push(ic(Q({},s,{components:r?r.record.components:s.components,path:e,aliasOf:r?r.record:s})))}let d,f;for(let t of u){let{path:u}=t;if(n&&u[0]!==`/`){let e=n.record.path,r=e[e.length-1]===`/`?``:`/`;t.path=n.record.path+(u&&r+u)}if(d=tc(t,n,l),r?r.alias.push(d):(f||=d,f!==d&&f.alias.push(d),i&&e.name&&!oc(d)&&o(e.name)),uc(d)&&c(d),s.children){let e=s.children;for(let t=0;t<e.length;t++)a(e[t],d,r&&r.children[t])}r||=d}return f?()=>{o(f)}:Ao}function o(e){if(As(e)){let t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{let t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function s(){return n}function c(e){let t=cc(e,n);n.splice(t,0,e),e.record.name&&!oc(e)&&r.set(e.record.name,e)}function l(e,t){let i,a={},o,s;if(`name`in e&&e.name){if(i=r.get(e.name),!i)throw No(1,{location:e});s=i.record.name,a=Q(rc(t.params,i.keys.filter(e=>!e.optional).concat(i.parent?i.parent.keys.filter(e=>e.optional):[]).map(e=>e.name)),e.params&&rc(e.params,i.keys.map(e=>e.name))),o=i.stringify(a)}else if(e.path!=null)o=e.path,i=n.find(e=>e.re.test(o)),i&&(a=i.parse(o),s=i.record.name,i.keys.forEach(e=>{e.optional&&!a[e.name]&&delete a[e.name]}));else{if(i=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!i)throw No(1,{location:e,currentLocation:t});s=i.record.name,a=Q({},t.params,e.params),o=i.stringify(a)}let c=[],l=i;for(;l;)c.unshift(l.record),l=l.parent;return{name:s,path:o,params:a,matched:c,meta:sc(c)}}e.forEach(e=>a(e));function u(){n.length=0,r.clear()}return{addRoute:a,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:s,getRecordMatcher:i}}function rc(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}function ic(e){let t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:ac(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:`components`in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function ac(e){let t={},n=e.props||!1;if(`component`in e)t.default=n;else for(let r in e.components)t[r]=typeof n==`object`?n[r]:n;return t}function oc(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function sc(e){return e.reduce((e,t)=>Q(e,t.meta),{})}function cc(e,t){let n=0,r=t.length;for(;n!==r;){let i=n+r>>1;Qs(e,t[i])<0?r=i:n=i+1}let i=lc(e);return i&&(r=t.lastIndexOf(i,r-1)),r}function lc(e){let t=e;for(;t=t.parent;)if(uc(t)&&Qs(e,t)===0)return t}function uc({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function dc(e){let t=xn(Lo),n=xn(Ro),r=Z(()=>{let n=Vt(e.to);return t.resolve(n)}),i=Z(()=>{let{matched:e}=r.value,{length:t}=e,i=e[t-1],a=n.matched;if(!i||!a.length)return-1;let o=a.findIndex(ps.bind(null,i));if(o>-1)return o;let s=gc(e[t-2]);return t>1&&gc(i)===s&&a[a.length-1].path!==s?a.findIndex(ps.bind(null,e[t-2])):o}),a=Z(()=>i.value>-1&&hc(n.params,r.value.params)),o=Z(()=>i.value>-1&&i.value===n.matched.length-1&&ms(n.params,r.value.params));function s(n={}){if(mc(n)){let n=t[Vt(e.replace)?`replace`:`push`](Vt(e.to)).catch(Ao);return e.viewTransition&&typeof document<`u`&&`startViewTransition`in document&&document.startViewTransition(()=>n),n}return Promise.resolve()}return{route:r,href:Z(()=>r.value.href),isActive:a,isExactActive:o,navigate:s}}function fc(e){return e.length===1?e[0]:e}var pc=Mn({name:`RouterLink`,compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:`page`},viewTransition:Boolean},useLink:dc,setup(e,{slots:t}){let n=Dt(dc(e)),{options:r}=xn(Lo),i=Z(()=>({[_c(e.activeClass,r.linkActiveClass,`router-link-active`)]:n.isActive,[_c(e.exactActiveClass,r.linkExactActiveClass,`router-link-exact-active`)]:n.isExactActive}));return()=>{let r=t.default&&fc(t.default(n));return e.custom?r:ca(`a`,{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}});function mc(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){let t=e.currentTarget.getAttribute(`target`);if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function hc(e,t){for(let n in t){let r=t[n],i=e[n];if(typeof r==`string`){if(r!==i)return!1}else if(!$(i)||i.length!==r.length||r.some((e,t)=>e.valueOf()!==i[t].valueOf()))return!1}return!0}function gc(e){return e?e.aliasOf?e.aliasOf.path:e.path:``}var _c=(e,t,n)=>e??t??n,vc=Mn({name:`RouterView`,inheritAttrs:!1,props:{name:{type:String,default:`default`},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){let r=xn(zo),i=Z(()=>e.route||r.value),a=xn(Io,0),o=Z(()=>{let e=Vt(a),{matched:t}=i.value,n;for(;(n=t[e])&&!n.components;)e++;return e}),s=Z(()=>i.value.matched[o.value]);bn(Io,Z(()=>o.value+1)),bn(Fo,s),bn(zo,i);let c=Lt();return wn(()=>[c.value,s.value,e.name],([e,t,n],[r,i,a])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),e&&t&&(!i||!ps(t,i)||!r)&&(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:`post`}),()=>{let r=i.value,a=e.name,o=s.value,l=o&&o.components[a];if(!l)return yc(n.default,{Component:l,route:r});let u=o.props[a],d=ca(l,Q({},u?u===!0?r.params:typeof u==`function`?u(r):u:null,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(o.instances[a]=null)},ref:c}));return yc(n.default,{Component:d,route:r})||d}}});function yc(e,t){if(!e)return null;let n=e(t);return n.length===1?n[0]:n}var bc=vc;function xc(e){let t=nc(e.routes,e),n=e.parseQuery||js,r=e.stringifyQuery||Ms,i=e.history,a=Ps(),o=Ps(),s=Ps(),c=Rt(vs),l=vs;Eo&&e.scrollBehavior&&`scrollRestoration`in history&&(history.scrollRestoration=`manual`);let u=ko.bind(null,e=>``+e),d=ko.bind(null,as),f=ko.bind(null,os);function p(e,n){let r,i;return As(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function m(e){let n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function h(){return t.getRoutes().map(e=>e.record)}function g(e){return!!t.getRecordMatcher(e)}function _(e,a){if(a=Q({},a||c.value),typeof e==`string`){let r=ls(n,e,a.path),o=t.resolve({path:r.path},a),s=i.createHref(r.fullPath);return Q(r,o,{params:f(o.params),redirectedFrom:void 0,href:s})}let o;if(e.path!=null)o=Q({},e,{path:ls(n,e.path,a.path).path});else{let t=Q({},e.params);for(let e in t)t[e]??delete t[e];o=Q({},e,{params:d(t)}),a.params=d(a.params)}let s=t.resolve(o,a),l=e.hash||``;s.params=u(f(s.params));let p=us(r,Q({},e,{hash:ts(l),path:s.path})),m=i.createHref(p);return Q({fullPath:p,hash:l,query:r===Ms?Ns(e.query):e.query||{}},s,{redirectedFrom:void 0,href:m})}function v(e){return typeof e==`string`?ls(n,e,c.value.path):Q({},e)}function y(e,t){if(l!==e)return No(8,{from:t,to:e})}function b(e){return C(e)}function x(e){return b(Q(v(e),{replace:!0}))}function S(e,t){let n=e.matched[e.matched.length-1];if(n&&n.redirect){let{redirect:r}=n,i=typeof r==`function`?r(e,t):r;return typeof i==`string`&&(i=i.includes(`?`)||i.includes(`#`)?i=v(i):{path:i},i.params={}),Q({query:e.query,hash:e.hash,params:i.path==null?e.params:{}},i)}}function C(e,t){let n=l=_(e),i=c.value,a=e.state,o=e.force,s=e.replace===!0,u=S(n,i);if(u)return C(Q(v(u),{state:typeof u==`object`?Q({},a,u.state):a,force:o,replace:s}),t||n);let d=n;d.redirectedFrom=t;let f;return!o&&fs(r,i,n)&&(f=No(16,{to:d,from:i}),oe(i,i,!0,!1)),(f?Promise.resolve(f):ee(d,i)).catch(e=>Po(e)?Po(e,2)?e:ae(e):ie(e,d,i)).then(e=>{if(e){if(Po(e,2))return C(Q({replace:s},v(e.to),{state:typeof e.to==`object`?Q({},a,e.to.state):a,force:o}),t||d)}else e=E(d,i,!0,s,a);return te(d,i,e),e})}function w(e,t){let n=y(e,t);return n?Promise.reject(n):Promise.resolve()}function T(e){let t=le.values().next().value;return t&&typeof t.runWithContext==`function`?t.runWithContext(e):e()}function ee(e,t){let n,[r,i,s]=Ls(e,t);n=Is(r.reverse(),`beforeRouteLeave`,e,t);for(let i of r)i.leaveGuards.forEach(r=>{n.push(Fs(r,e,t))});let c=w.bind(null,e,t);return n.push(c),de(n).then(()=>{n=[];for(let r of a.list())n.push(Fs(r,e,t));return n.push(c),de(n)}).then(()=>{n=Is(i,`beforeRouteUpdate`,e,t);for(let r of i)r.updateGuards.forEach(r=>{n.push(Fs(r,e,t))});return n.push(c),de(n)}).then(()=>{n=[];for(let r of s)if(r.beforeEnter)if($(r.beforeEnter))for(let i of r.beforeEnter)n.push(Fs(i,e,t));else n.push(Fs(r.beforeEnter,e,t));return n.push(c),de(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=Is(s,`beforeRouteEnter`,e,t,T),n.push(c),de(n))).then(()=>{n=[];for(let r of o.list())n.push(Fs(r,e,t));return n.push(c),de(n)}).catch(e=>Po(e,8)?e:Promise.reject(e))}function te(e,t,n){s.list().forEach(r=>T(()=>r(e,t,n)))}function E(e,t,n,r,a){let o=y(e,t);if(o)return o;let s=t===vs,l=Eo?history.state:{};n&&(r||s?i.replace(e.fullPath,Q({scroll:s&&l&&l.scroll},a)):i.push(e.fullPath,a)),c.value=e,oe(e,t,n,s),ae()}let ne;function D(){ne||=i.listen((e,t,n)=>{if(!ue.listening)return;let r=_(e),a=S(r,ue.currentRoute.value);if(a){C(Q(a,{replace:!0,force:!0}),r).catch(Ao);return}l=r;let o=c.value;Eo&&Ds(Ts(o.fullPath,n.delta),Cs()),ee(r,o).catch(e=>Po(e,12)?e:Po(e,2)?(C(Q(v(e.to),{force:!0}),r).then(e=>{Po(e,20)&&!n.delta&&n.type===`pop`&&i.go(-1,!1)}).catch(Ao),Promise.reject()):(n.delta&&i.go(-n.delta,!1),ie(e,r,o))).then(e=>{e||=E(r,o,!1),e&&(n.delta&&!Po(e,8)?i.go(-n.delta,!1):n.type===`pop`&&Po(e,20)&&i.go(-1,!1)),te(r,o,e)}).catch(Ao)})}let O=Ps(),re=Ps(),k;function ie(e,t,n){ae(e);let r=re.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function A(){return k&&c.value!==vs?Promise.resolve():new Promise((e,t)=>{O.add([e,t])})}function ae(e){return k||(k=!e,D(),O.list().forEach(([t,n])=>e?n(e):t()),O.reset()),e}function oe(t,n,r,i){let{scrollBehavior:a}=e;if(!Eo||!a)return Promise.resolve();let o=!r&&Os(Ts(t.fullPath,0))||(i||!r)&&history.state&&history.state.scroll||null;return sn().then(()=>a(t,n,o)).then(e=>e&&ws(e)).catch(e=>ie(e,t,n))}let se=e=>i.go(e),ce,le=new Set,ue={currentRoute:c,listening:!0,addRoute:p,removeRoute:m,clearRoutes:t.clearRoutes,hasRoute:g,getRoutes:h,resolve:_,options:e,push:b,replace:x,go:se,back:()=>se(-1),forward:()=>se(1),beforeEach:a.add,beforeResolve:o.add,afterEach:s.add,onError:re.add,isReady:A,install(e){e.component(`RouterLink`,pc),e.component(`RouterView`,bc),e.config.globalProperties.$router=ue,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>Vt(c)}),Eo&&!ce&&c.value===vs&&(ce=!0,b(i.location).catch(e=>{}));let t={};for(let e in vs)Object.defineProperty(t,e,{get:()=>c.value[e],enumerable:!0});e.provide(Lo,ue),e.provide(Ro,Ot(t)),e.provide(zo,c);let n=e.unmount;le.add(e),e.unmount=function(){le.delete(e),le.size<1&&(l=vs,ne&&ne(),ne=null,c.value=vs,ce=!1,k=!1),n()}}};function de(e){return e.reduce((e,t)=>e.then(()=>T(t)),Promise.resolve())}return ue}var Sc=xc({history:Us(`/`),routes:[]}),Cc=Za(To);Cc.use(go()),Cc.use(Sc),Cc.mount(`#app`);