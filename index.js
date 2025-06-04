import{a as c,S as y,i as d}from"./assets/vendor-Bz4lgVUE.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const b=a=>{c.defaults.baseURL="https://pixabay.com/api/";const r="50578368-dd70245762fcec5298974d7f8",s=new URLSearchParams({key:r,image_type:"photo",orientation:"horizontal",safesearch:!0,q:a});return c.get(`?${s}`).then(o=>o.data.hits)},L={gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")},{gallery:m,loader:p}=L,D=new y(".gallery a",{overlay:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:100}),I=a=>{const r=a.map(({webformatURL:s,largeImageURL:o,tags:e,likes:t,views:i,comments:g,downloads:h})=>`<a href="${o}">
        <img src="${s}" alt="${e}"/>        
        <ul class="imagesData">
          <li class="liImageData">
            <h3 class="h3ImageData">likes</h3>
            <p class="pImageData">${t}</p>
          </li>
          <li class="liImageData">
            <h3 class="h3ImageData">views</h3>
            <p class="pImageData">${i}</p>
          </li>
          <li class="liImageData">
            <h3 class="h3ImageData">comments</h3>
            <p class="pImageData">${g}</p>
          </li>
          <li class="liImageData">
            <h3 class="h3ImageData">downloads</h3>
            <p class="pImageData">${h}</p>
          </li>
        </ul>
      </a>`).join("");m.insertAdjacentHTML("beforeend",r),D.refresh()},S=()=>{m.innerHTML=""},v=()=>{p.classList.remove("isHiddenLoader")},n=()=>{p.classList.add("isHiddenLoader")},$={input:document.querySelector("input"),button:document.querySelector("button"),form:document.querySelector(".form"),gallery:document.querySelector(".gallery")},{input:q,button:u,form:f,gallery:A}=$;let l="";function P(a){return l=a.target.value}q.addEventListener("input",P);function x(a){if(S(),a.preventDefault(),!l.trim()){n();return}v(),u.setAttribute("disabled"," "),b(l).then(r=>{r.length||O(),I(r),n()}).catch(r=>{d.error({title:"Error",message:"❌"+r,position:"topRight",maxWidth:350}),n()}).finally(()=>{f.reset(),u.removeAttribute("disabled")})}f.addEventListener("submit",x);function O(){d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:350})}
//# sourceMappingURL=index.js.map
