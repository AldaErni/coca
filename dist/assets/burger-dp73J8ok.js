(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const l=()=>{const c=document.querySelector("[data-theme]"),o=document.querySelector("[data-theme-switcher]"),r=c.dataset,s=localStorage.getItem("theme")||"light";r.theme=s,s==="dark"&&(o.checked=!0),o.addEventListener("click",()=>{r.theme==="light"?(r.theme="dark",localStorage.setItem("theme","dark")):(r.theme="light",localStorage.setItem("theme","light"))})},a=()=>{const c=document.querySelector('[data-burger="btn"]'),o=document.querySelector('[data-burger="menu"]'),r=document.querySelector('[data-burger="overlay"]'),s=document.body,e=()=>{c.classList.remove("burger--active"),o.classList.remove("header__right--visible"),r.classList.remove("overlay--visible")};c.addEventListener("click",()=>{c.classList.toggle("burger--active"),o.classList.toggle("header__right--visible"),r.classList.toggle("overlay--visible"),s.classList.toggle("body--fixed")}),r.addEventListener("click",e)};export{a,l as u};