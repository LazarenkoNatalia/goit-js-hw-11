import{i as u,S as m}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();async function f(o,s={}){const i=await fetch(o,s);if(!i.ok)throw new Error(i.statusText);return await i.json()}function h(o){return o.map(({id:s,largeImageURL:i,webformatURL:r,tags:e,likes:t,views:a,comments:d,downloads:p})=>`
        <li class="list-card">
        <a class="gallery-link" href="${i}">
            <img src="${r}" alt="${e}" class="short-card" >
            <ul class="list-item" >
            <li class="card-foot">
            <div class="item" >
            <p class="item-div">Likes</p>
            <p class="item-div">${t}</p>
            </div> 
            </li>
            <li class="card-foot">
            <div class="item" >
            <p class="item-div">Views</p>
            <p class="item-div">${a}</p>
            </div> 
            </li>
            <li class="card-foot">
            <div class="item" >
            <p class="item-div">Comments</p>
            <p class="item-div">${d}</p>
            </div> 
            </li>
  
            <li class="card-foot">
            <div class="item" >
            <p class="item-div">Downloads</p>
            <p class="item-div">${p}</p>
            </div> 
            </li>
            
            </ul>
            </a>
        </li>
    `).join("")}const y="https://pixabay.com/api/",l=document.querySelector(".ask-form"),n=document.querySelector(".container"),c=document.querySelector(".loader");c.style.display="none";l.addEventListener("submit",g);function g(o){o.preventDefault(),n.innerHTML="";let s;c.style.display="flex";const r=o.target.elements.askChoice.value,e=new URLSearchParams({key:"43258927-612e11e8a955b04f9334ad244",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});f(`${y}?${e}`).then(t=>{c.style.display="none",t.total||u.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"yellow",color:"white",position:"topRight",close:!0,timeout:5e3}),n.insertAdjacentHTML("beforeend",h(t.hits)),s=new m(".container a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}),s.refresh()}).catch(t=>alert(t)).finally(()=>{c.style.display="none",l.reset()})}
//# sourceMappingURL=commonHelpers.js.map
