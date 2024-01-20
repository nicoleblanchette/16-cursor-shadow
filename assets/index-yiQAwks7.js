(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const l=document.querySelector(".hero"),a=document.querySelector("h1"),n=100,u=document.createElement("p");document.body.append(u);const f=o=>{const{offsetWidth:r,offsetHeight:i}=l;let{offsetX:s,offsetY:e}=o;o.target.matches(".hero")||(e=e+o.target.offsetTop,s=s+o.target.offsetLeft);const t=s/r*n-n/2,c=e/i*n-n/2;a.style.textShadow=`
    ${t}px ${c}px 0 chartreuse,
    ${t*-1}px ${c}px 0 violet,
    ${t}px ${c*-1}px 0 turquoise
  `},d=o=>{const r=o.angularVelocity.x||0,i=o.angularVelocity.y||0,s=o.angularVelocity.z||0,e=r/60*n-n/2,t=i/60*n-n/2;a.style.textShadow=`
    ${e}px ${t}px 0 chartreuse,
    ${e*-1}px ${t}px 0 violet,
    ${e}px ${t*-1}px 0 turquoise
  `,u.textContent=`
  x: ${r} | y: ${i} | z: ${s}
  `};l.addEventListener("mousemove",f);window.DeviceMotionEvent&&typeof DeviceMotionEvent.requestPermission=="function"?DeviceMotionEvent.requestPermission().then(o=>{if(o==="granted"){const r=new Gyroscope({frequency:60});r.addEventListener("reading",d),r.start(),l.removeEventListener("mousemove",f)}}).catch(console.error):(console.log("Gyroscope not supported"),u.textContent="gyroscope error");
