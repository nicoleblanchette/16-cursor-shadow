(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const u=document.querySelector(".hero"),l=document.querySelector("h1"),i=100,m=document.createElement("p");document.body.append(m);const f=r=>{const{offsetWidth:o,offsetHeight:n}=u;let{offsetX:c,offsetY:e}=r;r.target.matches(".hero")||(e=e+r.target.offsetTop,c=c+r.target.offsetLeft);const t=c/o*i-i/2,s=e/n*i-i/2;l.style.textShadow=`
    ${t}px ${s}px 0 chartreuse,
    ${t*-1}px ${s}px 0 violet,
    ${t}px ${s*-1}px 0 turquoise
  `},d=document.querySelector(".ball"),p=document.querySelector(".garden"),a=document.querySelector(".output"),h=p.clientWidth-d.clientWidth,y=p.clientHeight-d.clientHeight;function x(r){u.removeEventListener("mousemove",f);let o=r.beta,n=r.gamma;a.textContent=`beta: ${o}
`,a.textContent+=`gamma: ${n}
`,o>90&&(o=90),o<-90&&(o=-90),o+=90,n+=90,d.style.left=`${y*n/180-10}px`,d.style.top=`${h*o/180-10}px`,l.textContent="i did it!",l.style.color="yellow",l.style.textShadow=`${o+30}px ${n+30}px chartreuse`}window.addEventListener("deviceorientation",x);u.addEventListener("mousemove",f);
