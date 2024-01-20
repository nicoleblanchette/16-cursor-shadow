(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const a=document.querySelector(".hero"),f=document.querySelector("h1"),c=100,d=r=>{const{offsetWidth:o,offsetHeight:s}=a;let{offsetX:i,offsetY:e}=r;r.target.matches(".hero")||(e=e+r.target.offsetTop,i=i+r.target.offsetLeft);const t=i/o*c-c/2,n=e/s*c-c/2;f.style.textShadow=`
    ${t}px ${n}px 0 rgba(127, 255, 0, .8),
    ${t*-1}px ${n}px 0 rgba(238, 130, 238, .8),
    ${t}px ${n*-1}px 0 rgba(64, 224, 208, .8)
  `},l=r=>{let o=r.beta,s=r.gamma;o>90&&(o=90),o<-90&&(o=-90),f.style.textShadow=`
  ${s*2-10}px ${o*2-10}px 0 rgba(127, 255, 0, .8),
  ${-s}px ${o}px 0 rgba(238, 130, 238, .8),
  ${s}px ${-o}px 0 rgba(64, 224, 208, .8)`},u=()=>{window.addEventListener("deviceorientation",l),a.addEventListener("mousemove",d)};u();
