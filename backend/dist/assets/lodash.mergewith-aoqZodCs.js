import{c as M,g as _n}from"./copy-to-clipboard-5-cIlDoe.js";var F={exports:{}};F.exports;(function(w,U){var Ot=200,J="__lodash_hash_undefined__",wt=800,Ct=16,X=9007199254740991,Y="[object Arguments]",jt="[object Array]",xt="[object AsyncFunction]",St="[object Boolean]",It="[object Date]",Et="[object Error]",Z="[object Function]",Pt="[object GeneratorFunction]",zt="[object Map]",Mt="[object Number]",Ft="[object Null]",Q="[object Object]",Ut="[object Proxy]",Dt="[object RegExp]",Nt="[object Set]",Gt="[object String]",Rt="[object Undefined]",Ht="[object WeakMap]",Lt="[object ArrayBuffer]",Bt="[object DataView]",$t="[object Float32Array]",Kt="[object Float64Array]",qt="[object Int8Array]",Vt="[object Int16Array]",Wt="[object Int32Array]",Jt="[object Uint8Array]",Xt="[object Uint8ClampedArray]",Yt="[object Uint16Array]",Zt="[object Uint32Array]",Qt=/[\\^$.*+?()[\]{}|]/g,kt=/^\[object .+?Constructor\]$/,te=/^(?:0|[1-9]\d*)$/,u={};u[$t]=u[Kt]=u[qt]=u[Vt]=u[Wt]=u[Jt]=u[Xt]=u[Yt]=u[Zt]=!0,u[Y]=u[jt]=u[Lt]=u[St]=u[Bt]=u[It]=u[Et]=u[Z]=u[zt]=u[Mt]=u[Q]=u[Dt]=u[Nt]=u[Gt]=u[Ht]=!1;var k=typeof M=="object"&&M&&M.Object===Object&&M,ee=typeof self=="object"&&self&&self.Object===Object&&self,y=k||ee||Function("return this")(),tt=U&&!U.nodeType&&U,T=tt&&!0&&w&&!w.nodeType&&w,et=T&&T.exports===tt,D=et&&k.process,nt=function(){try{var t=T&&T.require&&T.require("util").types;return t||D&&D.binding&&D.binding("util")}catch{}}(),rt=nt&&nt.isTypedArray;function ne(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}function re(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}function ie(t){return function(e){return t(e)}}function ae(t,e){return t==null?void 0:t[e]}function oe(t,e){return function(n){return t(e(n))}}var ue=Array.prototype,se=Function.prototype,C=Object.prototype,N=y["__core-js_shared__"],j=se.toString,h=C.hasOwnProperty,it=function(){var t=/[^.]+$/.exec(N&&N.keys&&N.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),at=C.toString,fe=j.call(Object),ce=RegExp("^"+j.call(h).replace(Qt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),x=et?y.Buffer:void 0,ot=y.Symbol,ut=y.Uint8Array,st=x?x.allocUnsafe:void 0,ft=oe(Object.getPrototypeOf,Object),ct=Object.create,le=C.propertyIsEnumerable,he=ue.splice,d=ot?ot.toStringTag:void 0,S=function(){try{var t=H(Object,"defineProperty");return t({},"",{}),t}catch{}}(),pe=x?x.isBuffer:void 0,lt=Math.max,de=Date.now,ht=H(y,"Map"),m=H(Object,"create"),ge=function(){function t(){}return function(e){if(!_(e))return{};if(ct)return ct(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();function g(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function _e(){this.__data__=m?m(null):{},this.size=0}function be(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}function ve(t){var e=this.__data__;if(m){var n=e[t];return n===J?void 0:n}return h.call(e,t)?e[t]:void 0}function ye(t){var e=this.__data__;return m?e[t]!==void 0:h.call(e,t)}function Te(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=m&&e===void 0?J:e,this}g.prototype.clear=_e,g.prototype.delete=be,g.prototype.get=ve,g.prototype.has=ye,g.prototype.set=Te;function p(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function me(){this.__data__=[],this.size=0}function Ae(t){var e=this.__data__,n=I(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():he.call(e,n,1),--this.size,!0}function Oe(t){var e=this.__data__,n=I(e,t);return n<0?void 0:e[n][1]}function we(t){return I(this.__data__,t)>-1}function Ce(t,e){var n=this.__data__,r=I(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}p.prototype.clear=me,p.prototype.delete=Ae,p.prototype.get=Oe,p.prototype.has=we,p.prototype.set=Ce;function b(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function je(){this.size=0,this.__data__={hash:new g,map:new(ht||p),string:new g}}function xe(t){var e=P(this,t).delete(t);return this.size-=e?1:0,e}function Se(t){return P(this,t).get(t)}function Ie(t){return P(this,t).has(t)}function Ee(t,e){var n=P(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}b.prototype.clear=je,b.prototype.delete=xe,b.prototype.get=Se,b.prototype.has=Ie,b.prototype.set=Ee;function v(t){var e=this.__data__=new p(t);this.size=e.size}function Pe(){this.__data__=new p,this.size=0}function ze(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}function Me(t){return this.__data__.get(t)}function Fe(t){return this.__data__.has(t)}function Ue(t,e){var n=this.__data__;if(n instanceof p){var r=n.__data__;if(!ht||r.length<Ot-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new b(r)}return n.set(t,e),this.size=n.size,this}v.prototype.clear=Pe,v.prototype.delete=ze,v.prototype.get=Me,v.prototype.has=Fe,v.prototype.set=Ue;function De(t,e){var n=$(t),r=!n&&B(t),a=!n&&!r&&bt(t),o=!n&&!r&&!a&&yt(t),s=n||r||a||o,i=s?re(t.length,String):[],f=i.length;for(var l in t)(e||h.call(t,l))&&!(s&&(l=="length"||a&&(l=="offset"||l=="parent")||o&&(l=="buffer"||l=="byteLength"||l=="byteOffset")||gt(l,f)))&&i.push(l);return i}function G(t,e,n){(n!==void 0&&!z(t[e],n)||n===void 0&&!(e in t))&&R(t,e,n)}function Ne(t,e,n){var r=t[e];(!(h.call(t,e)&&z(r,n))||n===void 0&&!(e in t))&&R(t,e,n)}function I(t,e){for(var n=t.length;n--;)if(z(t[n][0],e))return n;return-1}function R(t,e,n){e=="__proto__"&&S?S(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}var Ge=Ze();function E(t){return t==null?t===void 0?Rt:Ft:d&&d in Object(t)?Qe(t):an(t)}function pt(t){return A(t)&&E(t)==Y}function Re(t){if(!_(t)||nn(t))return!1;var e=q(t)?ce:kt;return e.test(fn(t))}function He(t){return A(t)&&vt(t.length)&&!!u[E(t)]}function Le(t){if(!_(t))return rn(t);var e=_t(t),n=[];for(var r in t)r=="constructor"&&(e||!h.call(t,r))||n.push(r);return n}function dt(t,e,n,r,a){t!==e&&Ge(e,function(o,s){if(a||(a=new v),_(o))Be(t,e,s,n,dt,r,a);else{var i=r?r(L(t,s),o,s+"",t,e,a):void 0;i===void 0&&(i=o),G(t,s,i)}},Tt)}function Be(t,e,n,r,a,o,s){var i=L(t,n),f=L(e,n),l=s.get(f);if(l){G(t,n,l);return}var c=o?o(i,f,n+"",t,e,s):void 0,O=c===void 0;if(O){var V=$(f),W=!V&&bt(f),At=!V&&!W&&yt(f);c=f,V||W||At?$(i)?c=i:cn(i)?c=Je(i):W?(O=!1,c=qe(f,!0)):At?(O=!1,c=We(f,!0)):c=[]:ln(f)||B(f)?(c=i,B(i)?c=hn(i):(!_(i)||q(i))&&(c=ke(f))):O=!1}O&&(s.set(f,c),a(c,f,r,o,s),s.delete(f)),G(t,n,c)}function $e(t,e){return un(on(t,e,mt),t+"")}var Ke=S?function(t,e){return S(t,"toString",{configurable:!0,enumerable:!1,value:dn(e),writable:!0})}:mt;function qe(t,e){if(e)return t.slice();var n=t.length,r=st?st(n):new t.constructor(n);return t.copy(r),r}function Ve(t){var e=new t.constructor(t.byteLength);return new ut(e).set(new ut(t)),e}function We(t,e){var n=e?Ve(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}function Je(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}function Xe(t,e,n,r){var a=!n;n||(n={});for(var o=-1,s=e.length;++o<s;){var i=e[o],f=r?r(n[i],t[i],i,n,t):void 0;f===void 0&&(f=t[i]),a?R(n,i,f):Ne(n,i,f)}return n}function Ye(t){return $e(function(e,n){var r=-1,a=n.length,o=a>1?n[a-1]:void 0,s=a>2?n[2]:void 0;for(o=t.length>3&&typeof o=="function"?(a--,o):void 0,s&&tn(n[0],n[1],s)&&(o=a<3?void 0:o,a=1),e=Object(e);++r<a;){var i=n[r];i&&t(e,i,r,o)}return e})}function Ze(t){return function(e,n,r){for(var a=-1,o=Object(e),s=r(e),i=s.length;i--;){var f=s[t?i:++a];if(n(o[f],f,o)===!1)break}return e}}function P(t,e){var n=t.__data__;return en(e)?n[typeof e=="string"?"string":"hash"]:n.map}function H(t,e){var n=ae(t,e);return Re(n)?n:void 0}function Qe(t){var e=h.call(t,d),n=t[d];try{t[d]=void 0;var r=!0}catch{}var a=at.call(t);return r&&(e?t[d]=n:delete t[d]),a}function ke(t){return typeof t.constructor=="function"&&!_t(t)?ge(ft(t)):{}}function gt(t,e){var n=typeof t;return e=e??X,!!e&&(n=="number"||n!="symbol"&&te.test(t))&&t>-1&&t%1==0&&t<e}function tn(t,e,n){if(!_(n))return!1;var r=typeof e;return(r=="number"?K(n)&&gt(e,n.length):r=="string"&&e in n)?z(n[e],t):!1}function en(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function nn(t){return!!it&&it in t}function _t(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||C;return t===n}function rn(t){var e=[];if(t!=null)for(var n in Object(t))e.push(n);return e}function an(t){return at.call(t)}function on(t,e,n){return e=lt(e===void 0?t.length-1:e,0),function(){for(var r=arguments,a=-1,o=lt(r.length-e,0),s=Array(o);++a<o;)s[a]=r[e+a];a=-1;for(var i=Array(e+1);++a<e;)i[a]=r[a];return i[e]=n(s),ne(t,this,i)}}function L(t,e){if(!(e==="constructor"&&typeof t[e]=="function")&&e!="__proto__")return t[e]}var un=sn(Ke);function sn(t){var e=0,n=0;return function(){var r=de(),a=Ct-(r-n);if(n=r,a>0){if(++e>=wt)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}function fn(t){if(t!=null){try{return j.call(t)}catch{}try{return t+""}catch{}}return""}function z(t,e){return t===e||t!==t&&e!==e}var B=pt(function(){return arguments}())?pt:function(t){return A(t)&&h.call(t,"callee")&&!le.call(t,"callee")},$=Array.isArray;function K(t){return t!=null&&vt(t.length)&&!q(t)}function cn(t){return A(t)&&K(t)}var bt=pe||gn;function q(t){if(!_(t))return!1;var e=E(t);return e==Z||e==Pt||e==xt||e==Ut}function vt(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=X}function _(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}function A(t){return t!=null&&typeof t=="object"}function ln(t){if(!A(t)||E(t)!=Q)return!1;var e=ft(t);if(e===null)return!0;var n=h.call(e,"constructor")&&e.constructor;return typeof n=="function"&&n instanceof n&&j.call(n)==fe}var yt=rt?ie(rt):He;function hn(t){return Xe(t,Tt(t))}function Tt(t){return K(t)?De(t,!0):Le(t)}var pn=Ye(function(t,e,n,r){dt(t,e,n,r)});function dn(t){return function(){return t}}function mt(t){return t}function gn(){return!1}w.exports=pn})(F,F.exports);var bn=F.exports;const yn=_n(bn);export{yn as m};
