(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const a=document.querySelector(".hero"),d=document.querySelector("h1"),i=100,p=document.createElement("p");document.body.append(p);const m=r=>{const{offsetWidth:o,offsetHeight:n}=a;let{offsetX:s,offsetY:e}=r;r.target.matches(".hero")||(e=e+r.target.offsetTop,s=s+r.target.offsetLeft);const t=s/o*i-i/2,c=e/n*i-i/2;d.style.textShadow=`
    ${t}px ${c}px 0 chartreuse,
    ${t*-1}px ${c}px 0 violet,
    ${t}px ${c*-1}px 0 turquoise
  `},l=document.querySelector(".ball"),f=document.querySelector(".garden"),u=document.querySelector(".output"),h=f.clientWidth-l.clientWidth,y=f.clientHeight-l.clientHeight;function g(r){let o=r.beta,n=r.gamma;u.textContent=`beta: ${o}
`,u.textContent+=`gamma: ${n}
`,o>90&&(o=90),o<-90&&(o=-90),o+=90,n+=90,l.style.left=`${y*n/180-10}`,l.style.top=`${h*o/180-10}`,d.style.textShadow=`
  ${o}px ${n}px 0 chartreuse,
`}window.addEventListener("deviceorientation",g);a.addEventListener("mousemove",m);
