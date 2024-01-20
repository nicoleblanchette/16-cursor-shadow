(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const l=document.querySelector(".hero"),a=document.querySelector("h1"),i=100,d=o=>{const{offsetWidth:s,offsetHeight:n}=l;let{offsetX:c,offsetY:e}=o;o.target.matches(".hero")||(e=e+o.target.offsetTop,c=c+o.target.offsetLeft);const t=c/s*i-i/2,r=e/n*i-i/2;a.style.textShadow=`
  ${t}px ${r}px 0 chartreuse,
  ${t*-1}px ${r}px 0 violet,
  ${t}px ${r*-1}px 0 turquoise
  `};window.DeviceMotionEvent&&typeof DeviceMotionEvent.requestPermission=="function"?DeviceMotionEvent.requestPermission().then(o=>{if(o==="granted"){const s=new Gyroscope({frequency:60});s.addEventListener("reading",u),s.start()}}).catch(console.error):console.log("Gyroscope not supported");const u=o=>{document.querySelector(".hero");const s=document.querySelector("h1"),n=100,c=o.angularVelocity.x||0,e=o.angularVelocity.y||0;o.angularVelocity.z;const t=c/60*n-n/2,r=e/60*n-n/2;s.style.textShadow=`
    ${t}px ${r}px 0 chartreuse,
    ${t*-1}px ${r}px 0 violet,
    ${t}px ${r*-1}px 0 turquoise
  `};l.addEventListener("mousemove",d);window.addEventListener("deviceorientation",u);
