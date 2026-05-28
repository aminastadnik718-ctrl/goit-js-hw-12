/* empty css                      */import{a as b,S as L,i as l}from"./assets/vendor-DcHCnVjq.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const v="https://pixabay.com/api/",w="26672793-f78110632b955fd042ce618ae";async function d(o,t=1){return(await b.get(v,{params:{key:w,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}const u=document.querySelector(".gallery"),f=document.querySelector(".loader"),m=document.querySelector(".load-more"),S=new L(".gallery a");function p(o){const t=o.map(r=>`
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
    `).join("");u.insertAdjacentHTML("beforeend",t),S.refresh()}function q(){u.innerHTML=""}function y(){f.classList.add("is-visible")}function h(){f.classList.remove("is-visible")}function B(){m.classList.remove("hidden")}function g(){m.classList.add("hidden")}const M=document.querySelector(".form"),$=document.querySelector(".load-more");let n=1,i="";M.addEventListener("submit",async o=>{if(o.preventDefault(),i=o.target.elements.searchText.value.trim(),n=1,q(),g(),!!i)try{y();const t=await d(i,n);if(t.hits.length===0){l.error({message:"No images found"});return}p(t.hits),B()}catch(t){console.log(t)}finally{h()}});$.addEventListener("click",async()=>{n+=1;try{y();const o=await d(i,n);p(o.hits);const t=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:t.height*2,behavior:"smooth"});const r=Math.ceil(o.totalHits/15);n>=r&&(g(),l.info({message:"We're sorry, but you've reached the end of search results."}))}catch(o){console.log(o)}finally{h()}});
//# sourceMappingURL=index.js.map
