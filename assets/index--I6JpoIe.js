(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const u=document.querySelector(".hero"),a=document.querySelector("h1"),i=100,f=document.createElement("p");document.body.append(f);const m=n=>{const{offsetWidth:t,offsetHeight:r}=u;let{offsetX:c,offsetY:e}=n;n.target.matches(".hero")||(e=e+n.target.offsetTop,c=c+n.target.offsetLeft);const o=c/t*i-i/2,s=e/r*i-i/2;a.style.textShadow=`
    ${o}px ${s}px 0 chartreuse,
    ${o*-1}px ${s}px 0 violet,
    ${o}px ${s*-1}px 0 turquoise
  `},l=document.querySelector(".ball"),p=document.querySelector(".garden"),d=document.querySelector(".output"),h=p.clientWidth-l.clientWidth,x=p.clientHeight-l.clientHeight;function y(n){let t=n.beta,r=n.gamma;d.textContent=`beta: ${t}
`,d.textContent+=`gamma: ${r}
`,t>90&&(t=90),t<-90&&(t=-90),l.style.left=`${x*r/180-10}px`,l.style.top=`${h*t/180-10}px`,a.style.textShadow=`${r*2-10}px ${t*2-10}px 0 chartreuse,
  ${-r}px ${t}px 0 red,
  ${r}px ${-t}px 0 yellow`,f.textContent="mousemove disabled because of gyroscope detection"}window.addEventListener("deviceorientation",y);u.addEventListener("mousemove",m);
