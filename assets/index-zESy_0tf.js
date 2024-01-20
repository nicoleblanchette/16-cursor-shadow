(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const f=document.querySelector(".hero"),l=document.querySelector("h1"),c=100,a=r=>{const{offsetWidth:o,offsetHeight:s}=f;let{offsetX:n,offsetY:e}=r;r.target.matches(".hero")||(e=e+r.target.offsetTop,n=n+r.target.offsetLeft);const t=n/o*c-c/2,i=e/s*c-c/2;l.style.textShadow=`
    ${t}px ${i}px 0 chartreuse,
    ${t*-1}px ${i}px 0 violet,
    ${t}px ${i*-1}px 0 turquoise
  `},u=r=>{let o=r.beta,s=r.gamma;o>90&&(o=90),o<-90&&(o=-90),l.style.textShadow=`${s*2-10}px ${o*2-10}px 0 chartreuse,
  ${-s}px ${o}px 0 violet,
  ${s}px ${-o}px 0 turquoise`},d=()=>{window.addEventListener("deviceorientation",u),f.addEventListener("mousemove",a)};d();
