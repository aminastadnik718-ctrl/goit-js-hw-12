/* empty css                      */import{a as b,S as L,i as c}from"./assets/vendor-DcHCnVjq.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const w="https://pixabay.com/api/",v="26672793-f78110632b955fd042ce618ae";async function d(r,t=1){return(await b.get(w,{params:{key:v,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}const u=document.querySelector(".gallery"),f=document.querySelector(".loader"),m=document.querySelector(".load-more"),S=new L(".gallery a");function p(r){const t=r.map(o=>`
      <li class="gallery-item">
        <a href="${o.largeImageURL}">
          <img
            src="${o.webformatURL}"
            alt="${o.tags}"
          />
        </a>

        <div class="info">
          <p>
            <b>Likes</b>
            ${o.likes}
          </p>

          <p>
            <b>Views</b>
            ${o.views}
          </p>

          <p>
            <b>Comments</b>
            ${o.comments}
          </p>

          <p>
            <b>Downloads</b>
            ${o.downloads}
          </p>
        </div>
      </li>
    `).join("");u.insertAdjacentHTML("beforeend",t),S.refresh()}function q(){u.innerHTML=""}function y(){f.classList.add("is-visible")}function B(){f.classList.remove("is-visible")}function h(){m.classList.remove("hidden")}function g(){m.classList.add("hidden")}const M=document.querySelector(".form"),$=document.querySelector(".load-more");let n=1,a="";M.addEventListener("submit",async r=>{if(r.preventDefault(),a=r.target.elements.searchText.value.trim(),n=1,q(),g(),!!a)try{y();const t=await d(a,n);if(t.hits.length===0){c.error({message:"No images found"});return}p(t.hits),h()}catch(t){console.log(t)}finally{B()}});$.addEventListener("click",async()=>{n+=1;try{y();const r=await d(a,n);p(r.hits);const t=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:t.height*2,behavior:"smooth"});const o=Math.ceil(r.totalHits/15);n<o?h():(g(),c.info({message:"We're sorry, but you've reached the end of search results."}))}catch(r){c.error({message:"Something went wrong. Please try again later."}),console.log(r)}});
//# sourceMappingURL=index.js.map
