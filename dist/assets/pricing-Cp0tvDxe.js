import{u as s,a as o}from"./burger-dp73J8ok.js";const u=()=>{const t=document.querySelector('[data-price="switcher"]'),r=document.querySelector('[data-price="starter"]'),a=document.querySelector('[data-price="popular"]'),c=document.querySelector('[data-price="enterprise"]'),e={starter:{default:125,withSale:100},popular:{default:1750,withSale:1400},enterprise:{default:2625,withSale:2100}},i=()=>{r.textContent=e.starter.withSale,a.textContent=e.popular.withSale,c.textContent=e.enterprise.withSale},n=()=>{r.textContent=e.starter.default,a.textContent=e.popular.default,c.textContent=e.enterprise.default};t.checked=!0,i(),t.addEventListener("click",()=>{t.checked?i():n()})};u();s();o();
