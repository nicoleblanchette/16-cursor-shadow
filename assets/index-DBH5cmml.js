(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const u=document.querySelector(".hero"),l=document.querySelector("h1"),r=100,h=document.createElement("p");document.body.append(h);const f=i=>{const{offsetWidth:t,offsetHeight:n}=u;let{offsetX:c,offsetY:e}=i;i.target.matches(".hero")||(e=e+i.target.offsetTop,c=c+i.target.offsetLeft);const o=c/t*r-r/2,s=e/n*r-r/2;l.style.textShadow=`
    ${o}px ${s}px 0 chartreuse,
    ${o*-1}px ${s}px 0 violet,
    ${o}px ${s*-1}px 0 turquoise
  `},d=document.querySelector(".ball"),p=document.querySelector(".garden"),a=document.querySelector(".output"),m=p.clientWidth-d.clientWidth,y=p.clientHeight-d.clientHeight;function x(i){u.removeEventListener("mousemove",f);let t=i.beta,n=i.gamma;a.textContent=`beta: ${t}
`,a.textContent+=`gamma: ${n}
`,t>90&&(t=90),t<-90&&(t=-90),t+=90,n+=90,d.style.left=`${y*n/180-10}px`,d.style.top=`${m*t/180-10}px`,t/width*r-r/2,n/height*r-r/2,l.style.textShadow=`${n*2/180-10}px ${t*2/180-10}px 0 chartreuse`,l.style.textShadow=`${n/window.height*r-r/2}px ${t/window.width*r-r/2}px 0 red`}window.addEventListener("deviceorientation",x);u.addEventListener("mousemove",f);