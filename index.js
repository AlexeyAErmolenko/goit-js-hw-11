import{a as n,S as h,i as u}from"./assets/vendor-Bz4lgVUE.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const y=r=>{n.defaults.baseURL="https://pixabay.com/api/";const a="50578368-dd70245762fcec5298974d7f8",s=new URLSearchParams({key:a,image_type:"photo",orientation:"horizontal",safesearch:!0,q:r});return n.get(`?${s}`).then(o=>o.data.hits)},b={gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")},{gallery:d,loader:m}=b,L=new h(".gallery a",{overlay:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:100}),D=r=>{const a=r.map(({webformatURL:s,largeImageURL:o,tags:e,likes:t,views:i,comments:g,downloads:f})=>`<a href="${o}">
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
            <p class="pImageData">${f}</p>
          </li>
        </ul>
      </a>`).join("");d.insertAdjacentHTML("beforeend",a),L.refresh()},I=()=>{d.innerHTML=""},S=()=>{m.classList.remove("isHiddenLoader")},v=()=>{m.classList.add("isHiddenLoader")},$={input:document.querySelector("input"),button:document.querySelector("button"),form:document.querySelector(".form"),gallery:document.querySelector(".gallery")},{input:q,button:c,form:p,gallery:E}=$;let l="";function P(r){l=r.target.value,l.trim()?c.removeAttribute("disabled"):c.setAttribute("disabled"," ")}q.addEventListener("input",P);function O(r){S(),r.preventDefault(),y(l).then(a=>{a.length||w(),I(),D(a)}).catch(a=>u.error({title:"Error",message:"❌ Rejected "+a,position:"topRight"})).finally(()=>{p.reset(),v()})}p.addEventListener("submit",O);function w(){u.error({message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}
//# sourceMappingURL=index.js.map
