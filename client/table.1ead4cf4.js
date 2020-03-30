import{c as t,d as a,b as s,o as e,i as n,B as r,l as c,y as i,w as l,C as o,j as u,z as h,e as f,f as d,g as p,h as m,k as g,m as v,n as b,u as E,q as $,$ as T,M as y,a as z}from"./chunk.0fbbf14e.js";import"./chunk.f6eddce5.js";import"./chunk.0a41e55b.js";import{a as N}from"./chunk.890edef0.js";import"./chunk.0f6c9b9d.js";import{a as k}from"./chunk.c2965650.js";function w(t,a,s){const e=Object.create(t);return e.user=a[s],e}function D(t){var a,s=!t.loading&&j(t);return{c(){s&&s.c(),a=E()},l(t){s&&s.l(t),a=E()},m(t,e){s&&s.m(t,e),c(t,a,e)},p(t,e){e.loading?s&&(s.d(1),s=null):s||((s=j(e)).c(),s.m(a.parentNode,a))},d(t){s&&s.d(t),t&&u(a)}}}function j(t){var a,s,r,i,l,o,h,b,E,$;return{c(){a=f("tr"),s=f("td"),r=f("section"),i=f("div"),l=f("p"),o=f("i"),h=e(),b=f("p"),E=d("No data"),$=e(),this.h()},l(t){a=p(t,"TR",{},!1);var e=m(a);s=p(e,"TD",{colspan:!0},!1);var c=m(s);r=p(c,"SECTION",{class:!0},!1);var f=m(r);i=p(f,"DIV",{class:!0},!1);var d=m(i);l=p(d,"P",{},!1);var g=m(l);o=p(g,"I",{class:!0},!1),m(o).forEach(u),g.forEach(u),h=n(d,"\n                    "),b=p(d,"P",{},!1);var v=m(b);E=n(v,"No data"),v.forEach(u),d.forEach(u),f.forEach(u),c.forEach(u),$=n(e,"\n            "),e.forEach(u),this.h()},h(){g(o,"class","far fa-3x fa-frown"),g(i,"class","content has-text-grey has-text-centered"),g(r,"class","section"),g(s,"colspan","5")},m(t,e){c(t,a,e),v(a,s),v(s,r),v(r,i),v(i,l),v(l,o),v(i,h),v(i,b),v(b,E),v(a,$)},d(t){t&&u(a)}}}function x(t){var a,s,r,i,l,o,h,E,$,T,y,z,N,k,w,D,j,x,U=t.titleize(t.user.name.first)+"",B=t.titleize(t.user.name.last)+"",C=t.titleize(t.user.location.city)+"",H=t.titleize(t.user.location.state)+"";return{c(){a=f("tr"),s=f("td"),r=f("figure"),i=f("img"),o=e(),h=f("td"),E=d(U),$=e(),T=f("td"),y=d(B),z=e(),N=f("td"),k=d(C),w=e(),D=f("td"),j=d(H),x=e(),this.h()},l(t){a=p(t,"TR",{},!1);var e=m(a);s=p(e,"TD",{},!1);var c=m(s);r=p(c,"FIGURE",{class:!0},!1);var l=m(r);i=p(l,"IMG",{class:!0,src:!0,alt:!0},!1),m(i).forEach(u),l.forEach(u),c.forEach(u),o=n(e,"\n            "),h=p(e,"TD",{},!1);var f=m(h);E=n(f,U),f.forEach(u),$=n(e,"\n            "),T=p(e,"TD",{},!1);var d=m(T);y=n(d,B),d.forEach(u),z=n(e,"\n            "),N=p(e,"TD",{},!1);var g=m(N);k=n(g,C),g.forEach(u),w=n(e,"\n            "),D=p(e,"TD",{},!1);var v=m(D);j=n(v,H),v.forEach(u),x=n(e,"\n          "),e.forEach(u),this.h()},h(){g(i,"class","is-rounded"),g(i,"src",l=t.user.picture.thumbnail),g(i,"alt",""),g(r,"class","image")},m(t,e){c(t,a,e),v(a,s),v(s,r),v(r,i),v(a,o),v(a,h),v(h,E),v(a,$),v(a,T),v(T,y),v(a,z),v(a,N),v(N,k),v(a,w),v(a,D),v(D,j),v(a,x)},p(t,a){t.users&&l!==(l=a.user.picture.thumbnail)&&g(i,"src",l),t.users&&U!==(U=a.titleize(a.user.name.first)+"")&&b(E,U),t.users&&B!==(B=a.titleize(a.user.name.last)+"")&&b(y,B),t.users&&C!==(C=a.titleize(a.user.location.city)+"")&&b(k,C),t.users&&H!==(H=a.titleize(a.user.location.state)+"")&&b(j,H)},d(t){t&&u(a)}}}function U(t){for(var a,s,r,i,l,o,h,b,E,z,N,k,j,U,B,C,H,I,R,L,O,F,M,S,P,_,A,G,V,q,Y=t.users,J=[],K=0;K<Y.length;K+=1)J[K]=x(w(t,Y,K));var Q=null;return Y.length||(Q=D(t)).c(),{c(){a=f("div"),s=f("button"),r=d("Update"),i=e(),l=f("button"),o=d("No Data"),h=e(),b=f("br"),E=e(),z=f("br"),N=e(),k=f("table"),j=f("thead"),U=f("tr"),B=f("th"),C=e(),H=f("th"),I=d("First Name"),R=e(),L=f("th"),O=d("Last Name"),F=e(),M=f("th"),S=d("City"),P=e(),_=f("th"),A=d("State"),G=e(),V=f("tbody");for(var t=0;t<J.length;t+=1)J[t].c();this.h()},l(t){a=p(t,"DIV",{slot:!0},!1);var e=m(a);s=p(e,"BUTTON",{class:!0},!1);var c=m(s);r=n(c,"Update"),c.forEach(u),i=n(e,"\n    "),l=p(e,"BUTTON",{class:!0},!1);var f=m(l);o=n(f,"No Data"),f.forEach(u),h=n(e,"\n\n    "),b=p(e,"BR",{},!1),m(b).forEach(u),E=n(e,"\n    "),z=p(e,"BR",{},!1),m(z).forEach(u),N=n(e,"\n\n    "),k=p(e,"TABLE",{class:!0},!1);var d=m(k);j=p(d,"THEAD",{},!1);var g=m(j);U=p(g,"TR",{},!1);var v=m(U);B=p(v,"TH",{},!1),m(B).forEach(u),C=n(v,"\n          "),H=p(v,"TH",{},!1);var $=m(H);I=n($,"First Name"),$.forEach(u),R=n(v,"\n          "),L=p(v,"TH",{},!1);var T=m(L);O=n(T,"Last Name"),T.forEach(u),F=n(v,"\n          "),M=p(v,"TH",{},!1);var y=m(M);S=n(y,"City"),y.forEach(u),P=n(v,"\n          "),_=p(v,"TH",{},!1);var w=m(_);A=n(w,"State"),w.forEach(u),v.forEach(u),g.forEach(u),G=n(d,"\n      "),V=p(d,"TBODY",{},!1);for(var D=m(V),x=0;x<J.length;x+=1)J[x].l(D);D.forEach(u),d.forEach(u),e.forEach(u),this.h()},h(){g(s,"class","button is-primary"),g(l,"class","button is-primary"),g(k,"class","table is-fullwidth"),g(a,"slot","preview"),q=[$(s,"click",t.update),$(l,"click",t.click_handler)]},m(t,e){c(t,a,e),v(a,s),v(s,r),v(a,i),v(a,l),v(l,o),v(a,h),v(a,b),v(a,E),v(a,z),v(a,N),v(a,k),v(k,j),v(j,U),v(U,B),v(U,C),v(U,H),v(H,I),v(U,R),v(U,L),v(L,O),v(U,F),v(U,M),v(M,S),v(U,P),v(U,_),v(_,A),v(k,G),v(k,V);for(var n=0;n<J.length;n+=1)J[n].m(V,null);Q&&Q.m(V,null)},p(t,a){if(t.titleize||t.users||t.loading){Y=a.users;for(var s=0;s<Y.length;s+=1){const e=w(a,Y,s);J[s]?J[s].p(t,e):(J[s]=x(e),J[s].c(),J[s].m(V,null))}for(;s<J.length;s+=1)J[s].d(1);J.length=Y.length}!Y.length&&Q?Q.p(t,a):Y.length?Q&&(Q.d(1),Q=null):((Q=D(a)).c(),Q.m(V,null))},d(t){t&&u(a),T(J,t),Q&&Q.d(),y(q)}}}function B(t){return{c:z,l:z,m:z,p:z,d:z}}function C(t){var a,s,h=new N({props:{title:"Tables",subtitle:"Pretty HTML tables"}}),f=new k({props:{code:'<script>\n  let loading = false\n  let users = []\n\n  const titleize = s => s.replace(/^([a-z])/, (_, r) => r.toUpperCase())\n\n  async function update() {\n    loading = true\n\n    users = []\n    users = (await (await fetch(\'https://randomuser.me/api/?results=10\')).json()).results\n\n    loading = false\n  }\n\n  onMount(() => update())\n<\/script>\n\n<button class="button is-primary" on:click={update}>Update</button>\n<button class="button is-primary" on:click={() => users = []}>No Data</button>\n\n<br>\n<br>\n\n<table class="table is-fullwidth">\n  <thead>\n    <tr>\n      <th></th>\n      <th>First Name</th>\n      <th>Last Name</th>\n      <th>City</th>\n      <th>State</th>\n    </tr>\n  </thead>\n  <tbody>\n    {#each users as user}\n      <tr>\n        <td><figure class="image"><img class="is-rounded" src="{user.picture.thumbnail}" alt=""></figure></td>\n        <td>{titleize(user.name.first)}</td>\n        <td>{titleize(user.name.last)}</td>\n        <td>{titleize(user.location.city)}</td>\n        <td>{titleize(user.location.state)}</td>\n      </tr>\n    {:else}\n      {#if !loading}\n        <tr>\n          <td colspan="5">\n            <section class="section">\n              <div class="content has-text-grey has-text-centered">\n                <p><i class="far fa-3x fa-frown"></i></p>\n                <p>No data</p>\n              </div>\n            </section>\n          </td>\n        </tr>\n      {/if}\n    {/each}\n  </tbody>\n</table>',$$slots:{default:[B],preview:[U]},$$scope:{ctx:t}}});return{c(){h.$$.fragment.c(),a=e(),f.$$.fragment.c()},l(t){h.$$.fragment.l(t),a=n(t,"\n\n"),f.$$.fragment.l(t)},m(t,e){r(h,t,e),c(t,a,e),r(f,t,e),s=!0},p(t,a){var s={};(t.$$scope||t.users||t.loading)&&(s.$$scope={changed:t,ctx:a}),f.$set(s)},i(t){s||(i(h.$$.fragment,t),i(f.$$.fragment,t),s=!0)},o(t){l(h.$$.fragment,t),l(f.$$.fragment,t),s=!1},d(t){o(h,t),t&&u(a),o(f,t)}}}function H(t,a,s){let e=!1,n=[];async function r(){s("loading",e=!0),s("users",n=[]),s("users",n=(await(await fetch("https://randomuser.me/api/?results=10")).json()).results),s("loading",e=!1)}return h(()=>r()),{loading:e,users:n,titleize:t=>t.replace(/^([a-z])/,(t,a)=>a.toUpperCase()),update:r,click_handler:function(){const t=n=[];return s("users",n),t}}}export default class extends t{constructor(t){super(),a(this,t,H,C,s,[])}}
//# sourceMappingURL=table.1ead4cf4.js.map