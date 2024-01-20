(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const u=document.querySelector(".hero"),d=document.querySelector("h1"),l=100,p=document.createElement("p");document.body.append(p);const m=r=>{const{offsetWidth:o,offsetHeight:s}=u;let{offsetX:n,offsetY:e}=r;r.target.matches(".hero")||(e=e+r.target.offsetTop,n=n+r.target.offsetLeft);const t=n/o*l-l/2,c=e/s*l-l/2;d.style.textShadow=`
    ${t}px ${c}px 0 chartreuse,
    ${t*-1}px ${c}px 0 violet,
    ${t}px ${c*-1}px 0 turquoise
  `},i=document.querySelector(".ball"),f=document.querySelector(".garden"),a=document.querySelector(".output"),h=f.clientWidth-i.clientWidth,y=f.clientHeight-i.clientHeight;function g(r){let o=r.beta,s=r.gamma;a.textContent=`beta: ${o}
`,a.textContent+=`gamma: ${s}
`,o>90&&(o=90),o<-90&&(o=-90),o+=90,s+=90,i.style.left=`${y*s/180-10}`,i.style.top=`${h*o/180-10}`;const n=i.style.left,e=i.style.left;d.style.textShadow=`
  ${n}px ${e}px 0 chartreuse,
`}window.addEventListener("deviceorientation",g);u.addEventListener("mousemove",m);
