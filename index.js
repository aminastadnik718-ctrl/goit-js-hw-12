/* empty css                      */import{a as L,S as w,i as a}from"./assets/vendor-DcHCnVjq.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&d(l)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const v="https://pixabay.com/api/",S="26672793-f78110632b955fd042ce618ae";async function u(o,e=1){return(await L.get(v,{params:{key:S,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}})).data}const f=document.querySelector(".gallery"),m=document.querySelector(".loader"),y=document.querySelector(".load-more"),M=new w(".gallery a");function h(o){const e=o.map(r=>`
      <li class="gallery-item">
        <a href="${r.largeImageURL}">
          <img
            src="${r.webformatURL}"
            alt="${r.tags}"
          />
        </a>

        <div class="info">
          <p>
            <b>Likes</b>
            ${r.likes}
          </p>

          <p>
            <b>Views</b>
            ${r.views}
          </p>

          <p>
            <b>Comments</b>
            ${r.comments}
          </p>

          <p>
            <b>Downloads</b>
            ${r.downloads}
          </p>
        </div>
      </li>
    `).join("");f.insertAdjacentHTML("beforeend",e),M.refresh()}function P(){f.innerHTML=""}function p(){m.classList.add("is-visible")}function g(){m.classList.remove("is-visible")}function b(){y.classList.remove("hidden")}function c(){y.classList.add("hidden")}const q=document.querySelector(".form"),B=document.querySelector(".load-more");let n=1,i="";q.addEventListener("submit",async o=>{if(o.preventDefault(),i=o.target.elements.searchText.value.trim(),n=1,P(),c(),!!i)try{p();const e=await u(i,n);if(e.hits.length===0){a.error({message:"No images found"});return}h(e.hits);const r=Math.ceil(e.totalHits/15);n<r?b():(c(),a.info({message:"We're sorry, but you've reached the end of search results."}))}catch(e){a.error({message:"Something went wrong. Please try again later."}),console.log(e)}finally{g()}});B.addEventListener("click",async()=>{n+=1,c();try{p();const o=await u(i,n);h(o.hits);const e=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:e.height*2,behavior:"smooth"});const r=Math.ceil(o.totalHits/15);n<r?b():(c(),a.info({message:"We're sorry, but you've reached the end of search results."}))}catch(o){a.error({message:"Something went wrong. Please try again later."}),console.log(o)}finally{g()}});
//# sourceMappingURL=index.js.map
