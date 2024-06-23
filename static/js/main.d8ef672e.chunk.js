(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{28:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var c,a,r=n(0),o=n.n(r),s=n(19),i=n.n(s),l=(n(28),n(3)),d=n(4),j=n(6),b=n.n(j),h=n(1);const x=d.a.div(c||(c=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),g=d.a.div(a||(a=Object(l.a)(["\n  font-size: 2.5rem;\n  font-weight: bold;\n  margin-top: 10px;\n"])));var O=()=>{const[e,t]=Object(r.useState)(null);return Object(r.useEffect)((()=>{const e=async()=>{try{const e=await b.a.get("http://localhost:3000/api/block-height");console.log("Fetched block height response:",e.data),t(e.data.block_height)}catch(e){console.error("Error fetching block height:",e)}};e();const n=setInterval(e,1e4);return()=>clearInterval(n)}),[]),Object(h.jsx)(x,{children:null!==e?Object(h.jsx)(g,{children:e}):Object(h.jsx)("div",{children:"Loading..."})})},f=n(22);var p,u,m=()=>{const[e,t]=Object(r.useState)([]),[n,c]=Object(r.useState)([]);Object(r.useEffect)((()=>{const e=async()=>{try{const e=await b.a.get("http://localhost:3000/api/market-price");t((t=>[...t,e.data.market_price])),c((e=>[...e,(new Date).toLocaleTimeString()]))}catch(e){console.error("Error fetching market price:",e)}},n=setInterval(e,5e3);return e(),()=>clearInterval(n)}),[]);const a={labels:n,datasets:[{label:"Market Price (USD)",data:e,borderColor:"rgba(75,192,192,1)",backgroundColor:"rgba(75,192,192,0.2)"}]};return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Market Price"}),Object(h.jsx)(f.a,{data:a})]})};const v=d.a.div(p||(p=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),k=d.a.div(u||(u=Object(l.a)(["\n  font-size: 2.5rem;\n  font-weight: bold;\n  margin-top: 10px;\n"])));var w,y,E,F=()=>{const[e,t]=Object(r.useState)(null);return Object(r.useEffect)((()=>{const e=async()=>{try{const e=await b.a.get("http://localhost:3000/api/transaction-count");t(e.data.transaction_count)}catch(e){console.error("Error fetching transaction count:",e)}};e();const n=setInterval(e,1e4);return()=>clearInterval(n)}),[]),Object(h.jsx)(v,{children:null!==e?Object(h.jsx)(k,{children:e}):Object(h.jsx)("div",{children:"Loading..."})})};const I=d.a.div(w||(w=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #1e1e1e;\n  padding: 20px;\n  border-radius: 8px;\n  margin-bottom: 20px;\n"]))),S=d.a.div(y||(y=Object(l.a)(["\n  font-size: 2.5rem;\n  font-weight: bold;\n  color: #00ff00;\n  margin-top: 10px;\n"]))),H=d.a.h2(E||(E=Object(l.a)(["\n  color: #ffffff;\n  font-size: 1.5rem;\n"]))),C=e=>e>=1e18?"".concat((e/1e18).toFixed(2)," EH/s"):e>=1e12?"".concat((e/1e12).toFixed(2)," TH/s"):e>=1e9?"".concat((e/1e9).toFixed(2)," GH/s"):e>=1e6?"".concat((e/1e6).toFixed(2)," MH/s"):"".concat(e," H/s");var z,L,M,P,T,B=()=>{const[e,t]=Object(r.useState)(null);return Object(r.useEffect)((()=>{const e=async()=>{try{const e=await b.a.get("http://localhost:3000/api/hash-rate");console.log("Fetched hash rate response:",e.data),t(e.data.hash_rate)}catch(e){console.error("Error fetching hash rate:",e)}};e();const n=setInterval(e,1e4);return()=>clearInterval(n)}),[]),Object(h.jsxs)(I,{children:[Object(h.jsx)(H,{children:"Hash Rate"}),null!==e?Object(h.jsx)(S,{children:C(e)}):Object(h.jsx)("div",{children:"Loading..."})]})};const _=d.a.div(z||(z=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px;\n  background-color: #1a1a1a;\n  color: #fff;\n  min-height: 100vh;\n"]))),D=d.a.h1(L||(L=Object(l.a)(["\n  font-size: 3rem;\n  margin-bottom: 20px;\n"]))),J=d.a.div(M||(M=Object(l.a)(["\n  width: 80%;\n  max-width: 1200px;\n  margin-bottom: 40px;\n"]))),R=d.a.div(P||(P=Object(l.a)(["\n  background: #2c2c2c;\n  border-radius: 10px;\n  padding: 20px;\n  margin-bottom: 20px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n"]))),G=d.a.h2(T||(T=Object(l.a)(["\n  font-size: 2rem;\n  margin-bottom: 10px;\n"])));var U=()=>Object(h.jsxs)(_,{children:[Object(h.jsx)(D,{children:"Bitcoin Explorer"}),Object(h.jsxs)(J,{children:[Object(h.jsxs)(R,{children:[Object(h.jsx)(G,{children:"Current Block Height"}),Object(h.jsx)(O,{})]}),Object(h.jsxs)(R,{children:[Object(h.jsx)(G,{children:"Market Price"}),Object(h.jsx)(m,{})]}),Object(h.jsxs)(R,{children:[Object(h.jsx)(G,{children:"Transaction Count"}),Object(h.jsx)(F,{})]}),Object(h.jsxs)(R,{children:[Object(h.jsx)(G,{children:"Hash Rate"}),Object(h.jsx)(B,{})]})]})]});var q=e=>{e&&e instanceof Function&&n.e(3).then(n.bind(null,49)).then((t=>{let{getCLS:n,getFID:c,getFCP:a,getLCP:r,getTTFB:o}=t;n(e),c(e),a(e),r(e),o(e)}))};i.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(U,{})}),document.getElementById("root")),q()}},[[48,1,2]]]);
//# sourceMappingURL=main.d8ef672e.chunk.js.map