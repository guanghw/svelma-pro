import{c as t,d as s,b as a,D as e,o as c,E as n,p as o,F as r,l as $,A as i,y as l,G as m,j as f,e as p,g as u,h as d,k as g,m as h,f as v,i as j,S as b,a9 as k,aa as x}from"./chunk.88cd124b.js";import{g as w,C as y}from"./chunk.fbb36b96.js";import"./chunk.466273fa.js";import{a as M}from"./chunk.1eafa91d.js";import"./chunk.c200edc7.js";import{a as T}from"./chunk.8178f684.js";import{a as E}from"./chunk.64fb850a.js";function B(t){let s;return{c(){s=v("Toggle")},l(t){s=j(t,"Toggle")},m(t,a){$(t,s,a)},d(t){t&&f(s)}}}function D(t){let s,a,e;return{c(){s=p("p"),a=p("img"),this.h()},l(t){s=u(t,"P",{class:!0});var e=d(s);a=u(e,"IMG",{alt:!0,src:!0}),e.forEach(f),this.h()},h(){g(a,"alt","Test image"),a.src!==(e="https://via.placeholder.com/1280x920")&&g(a,"src","https://via.placeholder.com/1280x920"),g(s,"class","image is-4by3")},m(t,e){$(t,s,e),h(s,a)},d(t){t&&f(s)}}}function G(t){let s,a,v,j;const M=new w({props:{class:"block",$$slots:{default:[B]},$$scope:{ctx:t}}});function T(s){t[3].call(null,s)}M.$on("click",t[2]);let E={$$slots:{default:[D]},$$scope:{ctx:t}};void 0!==t[1]&&(E.active=t[1]);const G=new y({props:E});return b.push(()=>k(G,"active",T)),{c(){s=p("div"),e(M.$$.fragment),a=c(),e(G.$$.fragment),this.h()},l(t){s=u(t,"DIV",{slot:!0});var e=d(s);n(M.$$.fragment,e),a=o(e),n(G.$$.fragment,e),e.forEach(f),this.h()},h(){g(s,"slot","preview")},m(t,e){$(t,s,e),r(M,s,null),h(s,a),r(G,s,null),j=!0},p(t,s){const a={};16&s&&(a.$$scope={dirty:s,ctx:t}),M.$set(a);const e={};16&s&&(e.$$scope={dirty:s,ctx:t}),!v&&2&s&&(v=!0,e.active=t[1],x(()=>v=!1)),G.$set(e)},i(t){j||(i(M.$$.fragment,t),i(G.$$.fragment,t),j=!0)},o(t){l(M.$$.fragment,t),l(G.$$.fragment,t),j=!1},d(t){t&&f(s),m(M),m(G)}}}function I(t){let s,a,p;const u=new M({props:{title:"Modal",subtitle:"模态框"}}),d=new T({props:{code:'<script>\n  import { Button, Modal } from \'svelma-pro\'\n  \n  let active = false\n<\/script>\n\n<Button class="block" on:click={() => active = !active}>Toggle</Button>\n<Modal bind:active={active}>\n  <p class="image is-4by3">\n    <img alt="Test image" src="https://via.placeholder.com/1280x920"/>\n  </p>\n</Modal>',$$slots:{preview:[G]},$$scope:{ctx:t}}}),g=new E({props:{jsdoc:t[0],showEvent:"true"}});return{c(){e(u.$$.fragment),s=c(),e(d.$$.fragment),a=c(),e(g.$$.fragment)},l(t){n(u.$$.fragment,t),s=o(t),n(d.$$.fragment,t),a=o(t),n(g.$$.fragment,t)},m(t,e){r(u,t,e),$(t,s,e),r(d,t,e),$(t,a,e),r(g,t,e),p=!0},p(t,[s]){const a={};18&s&&(a.$$scope={dirty:s,ctx:t}),d.$set(a);const e={};1&s&&(e.jsdoc=t[0]),g.$set(e)},i(t){p||(i(u.$$.fragment,t),i(d.$$.fragment,t),i(g.$$.fragment,t),p=!0)},o(t){l(u.$$.fragment,t),l(d.$$.fragment,t),l(g.$$.fragment,t),p=!1},d(t){m(u,t),t&&f(s),m(d,t),t&&f(a),m(g,t)}}}async function A(){const t=await this.fetch("components/modal.json");return{jsdoc:await t.json()}}function C(t,s,a){let{jsdoc:e}=s,c=!1;return t.$set=(t=>{"jsdoc"in t&&a(0,e=t.jsdoc)}),[e,c,()=>a(1,c=!c),function(t){a(1,c=t)}]}export default class extends t{constructor(t){super(),s(this,t,C,I,a,{jsdoc:0})}}export{A as preload};
//# sourceMappingURL=modal.22ece3ed.js.map