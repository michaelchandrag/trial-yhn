(()=>{var e={16:e=>{function t(){const e=document.body.clientWidth,t=document.querySelectorAll(".layout-full-width");return t.forEach((t=>{t.style.width=`${e}px`})),t.length>0}const o=e=>{const t=e.currentTarget.children[0],o=e.currentTarget.children[1],{parentNode:n}=e.currentTarget.parentNode;"More"===o.innerHTML?(o.innerHTML="Less",t.classList.remove("icon-plus"),t.classList.add("icon-minus")):(o.innerHTML="More",t.classList.remove("icon-minus"),t.classList.add("icon-plus")),n.querySelector(".show-hide-more").classList.toggle("hide")};(()=>{const e=document.getElementsByClassName("show-hide-btn");if(e.length)for(let t=0;t<e.length;t++)""!==e[t].parentNode.querySelector(".show-hide-more").innerHTML.trim()&&e[t].classList.toggle("hide"),e[t].addEventListener("click",o)})(),e.exports={setUpEmbeds:function(){t()&&window.addEventListener("resize",(()=>t()))}}},480:e=>{e.exports={setUpReaderID:function(){if(localStorage.getItem("STrecommendationUUID"))return;const e=self.crypto.randomUUID();localStorage.setItem("STrecommendationUUID",e)},setUpSessionID:function(){if(sessionStorage.getItem("STrecommendationSessionID"))return;const e=self.crypto.randomUUID();sessionStorage.setItem("STrecommendationSessionID",e)},sendReaderDataToAWS:async function(){const e={Data:{recommendationUserId:localStorage.getItem("STrecommendationUUID"),recommendationSessionId:sessionStorage.getItem("STrecommendationSessionID"),articleId:window.SEATIMESCO.contentInfo.post_id,sentAt:Date.now()},PartitionKey:"readerData",SessionId:sessionStorage.getItem("STrecommendationSessionID"),SentAt:Date.now()};try{const t=await fetch(window.SEATIMESCO.article.userBehaviorDataUrl,{method:"PUT",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});if(!t.ok)throw new Error(`User Behavior API Response status: ${t.status}`);const o=await t.json();console.log("requestBody sent to AWS: ",e),console.log("AWS Response: ",o)}catch(e){console.error(e.message)}}}}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,o),a.exports}(()=>{"use strict";var e=o(16),t=o(480);const n=e=>{if(e.key&&"Enter"!==e.key)return;e.preventDefault();const t=e.currentTarget.firstElementChild;if(!t.attributes.href)return;const o="undefined"!=typeof sitewideJSDomain,n=t.firstElementChild.classList[0].replace(/^icon-/,""),r="mail"===n?"email":n,a=Object.prototype.hasOwnProperty.call(window.SEATIMESCO.contentInfo,"section_tier1")?`/${window.SEATIMESCO.contentInfo.section_tier1}`:"",i=o?window.SEATIMESCO.contentInfo.canonicalURL:`https://${window.location.hostname}${document.location.pathname}`,s={currentContext:e,parentSection:a,shareChoice:r,socialCardTarget:t.attributes.href.nodeValue,title:encodeURIComponent(document.querySelector('meta[property="og:title"]').content.trim().replace("&amp;","&")),url:encodeURIComponent(i),utmMedium:"email"===r?"email":"social"};c(s)},r=(e,t)=>{e.preventDefault();const o=e.target.classList[0].replace(/^icon-/,""),n={shareChoice:"mail"===o?"email":o,utmLocation:"gallery_poly_1.1",utmMedium:"",currentSlide:`-${document.querySelector(".image-slide.active").id}`,galleryID:encodeURIComponent(`#${t.id}`),url:encodeURIComponent(`${document.location.protocol}//${document.location.hostname}${document.location.pathname}`)};n.utmMedium="email"===n.shareChoice?"email":"social",i(n)},a=e=>{let t;e.preventDefault();const o=e.currentTarget.firstChild.classList[0].replace(/^icon-/,""),n=e.currentTarget.parentElement,r={shareChoice:"mail"===o?"email":o,utmLocation:n.getAttribute("data-utm"),utmMedium:""};r.utmMedium="email"===r.shareChoice?"email":"social",n.classList.contains("article-pull")?t=`"${n.text().replace("” -",'" -')}`:n.classList.contains("factoid-body")&&(t=`${document.querySelector(".article-factoid .header").innerHTML.trim()} ${n.text().trim()}`),s(t,r)},c=e=>{const t=document.querySelector('meta[property="og:type"]').content,o=e.currentContext.currentTarget.parentElement,n=`%3Futm_source=${e.shareChoice}%26utm_medium=${e.utmMedium}`;switch(e.shareChoice){case"link":u(n,o,e);break;case"email":S(o.classList),p(n,t,e);break;case"facebook":S(o.classList),h(n,e);break;case"twitter":S(o.classList),y(n,e)}},i=e=>{let t=document.querySelector('meta[property="og:title"]').content;const o=Object.prototype.hasOwnProperty.call(window.SEATIMESCO.contentInfo,"section_tier1")?`/${window.SEATIMESCO.contentInfo.section_tier1}`:"";let n="";"/sponsored"!==o&&"/explore"!==o||(n="%26_native"),t=t.trim(),t=t.replace("&amp;","&"),t=encodeURIComponent(t),e.title=t;const r=`%3Futm_source=${e.shareChoice}%26utm_medium=${e.utmMedium}%26utm_campaign=${e.utmLocation}${n}`,a=`${e.url}${e.galleryID}${e.currentSlide}`;switch(e.shareChoice){case"facebook":l(r,e);break;case"twitter":d(r,e.title,a,n);break;case"email":m(r,e.title,a)}},s=(e,t)=>{let o=document.querySelector('meta[property="og:title"]').content;const n=document.querySelector('meta[property="og:type"]').content,r=Object.prototype.hasOwnProperty.call(window.SEATIMESCO.contentInfo,"section_tier1")?`/${window.SEATIMESCO.contentInfo.section_tier1}`:"",a=encodeURIComponent(`${document.location.protocol}//${document.location.hostname}${document.location.pathname}`),c=`%3Futm_source=${t.shareChoice}%26utm_medium=${t.utmMedium}%26utm_campaign=${t.utmLocation}`;let i="";switch("/sponsored"!==r&&"/explore"!==r||(i="%26_native"),void 0!==e&&""!==e&&(o=e),o=o.trim(),o=o.replace("&amp;","&"),o=encodeURIComponent(o),t.title=o,t.url=a,t.native=i,t.shareChoice){case"email":p(c,n,t);break;case"facebook":h(c,t);break;case"twitter":y(c,t)}},l=(e,t)=>{let o="https://www.facebook.com/dialog/feed";const n=document.querySelector(".image-slide.active").querySelector("img").attributes["data-src-facebook"].value;o+=`?app_id=2618768518177469&link=${t.url}${t.galleryID}${t.currentSlide}${e}&picture=${encodeURIComponent(n)}&name=${encodeURIComponent(document.querySelector('meta[property="og:title"]').content)}&description=${encodeURIComponent(document.querySelector('meta[property="og:description"]').content)}&redirect_uri=${t.url}${encodeURIComponent("#close_window")}&display=popup`,dataLayer.push({event:"social",socialNetwork:"facebook",socialAction:"gallery-share"}),window.open(o,"sharer","top=80,left=20,toolbar=0,status=0,width=600,height=500")},d=(e,t,o,n)=>{t=w(t),dataLayer.push({event:"social",socialNetwork:"twitter",socialAction:"gallery-share"}),window.open(`https://twitter.com/intent/tweet?url=${o}${e}${n}&via=seattletimes&text=${encodeURIComponent(t)}`,"twitter","top=80,left=20,toolbar=0,status=0,width=550,height=420")},m=(e,t,o)=>{const n=Object.prototype.hasOwnProperty.call(window.SEATIMESCO.contentInfo,"section_tier1")?`/${window.SEATIMESCO.contentInfo.section_tier1}`:"";let r=encodeURIComponent("Hey, here’s a Seattle Times photo & gallery that might interest you");const a=encodeURIComponent('I just saw this photo and gallery on seattletimes.com, "'),c=encodeURIComponent('," and I think it might interest you, too. You can see it here:\r\n\r\n'),i=encodeURIComponent("If you don't already subscribe to The Seattle Times, consider supporting independent journalism today.\r\n\r\n"),s=encodeURIComponent("Thank you!"),l=encodeURIComponent("\r\n\r\n");let d="Seattle Times Marketing",m=a+t+c+o+e+l+i+s;const u=r;if("/sponsored"===n||"/explore"===n){const n=document.querySelector(".name.vcard .advertiser_name span"),p="on"===window.SEATIMESCO.article.disableExploreLabel?"":" | Produced by Seattle Times Marketing";d=n?" | Provided by "+n.innerHTML.trim():p,r=encodeURIComponent(decodeURIComponent(u)+d),m=a+t+c+o+e+l+i+s}o=`mailto:?subject=${r}&body=${m}`,dataLayer.push({event:"social",socialNetwork:"email",socialAction:"gallery-share"}),document.location.href=o},u=(e,t,o)=>{let{url:n,socialCardTarget:r}=o;const a=navigator.clipboard.writeText(decodeURIComponent(n+e+r)),c=document.createElement("span"),i=document.createTextNode("Link copied");c.appendChild(i),c.className="clipboard-success-element st-button button--small u-bg-navy mr-2",a.then((()=>{t.previousElementSibling.insertAdjacentElement("beforebegin",c)})).then((()=>{S(t.classList),dataLayer.push({event:"social",socialNetwork:"copy"}),setTimeout((()=>{c.remove()}),1500)})).catch((()=>{console.log("Failed to copy link")}))},p=(e,t,o)=>{let{title:n,url:r,native:a="",socialCardTarget:c=""}=o,i="";const s=encodeURIComponent("Thank you!"),l=encodeURIComponent("Hello,"),d=encodeURIComponent("\r\n\r\n"),m=encodeURIComponent("If you don't already subscribe to The Seattle Times, consider supporting independent journalism today.");""===n?i=l+d+encodeURIComponent("I just read this Seattle Times article, and I think it might interest you, too. You can read the full article here:")+d+r+e+a+c+d+m+d+s:""!==n&&"video.other"!==t&&(i=l+d+encodeURIComponent("I just read The Seattle Times' article, \"")+n+encodeURIComponent('", and I think it might interest you, too. You can read the full article here:')+d+r+e+a+c+d+m+d+s),dataLayer.push({event:"social",socialNetwork:"email",socialAction:"share"}),document.location.href=`mailto:?subject=${encodeURIComponent("Here's a Seattle Times article that might interest you")}&body=${i}`},h=(e,t)=>{let{url:o,native:n="",socialCardTarget:r=""}=t;dataLayer.push({event:"social",socialNetwork:"facebook",socialAction:"share"}),window.open(`https://www.facebook.com/sharer.php?u=${o}${e}${n}${encodeURIComponent(r)}`,"sharer","top=80,left=20,toolbar=0,status=0,width=600,height=500")},y=(e,t)=>{let{title:o,url:n,native:r="",socialCardTarget:a=""}=t;o=w(o),dataLayer.push({event:"social",socialNetwork:"twitter",socialAction:"share"}),window.open(`https://twitter.com/intent/tweet?url=${n}${e}${r}${encodeURIComponent(a)}&via=seattletimes&text=${encodeURIComponent(o)}`,"twitter","top=80,left=20,toolbar=0,status=0,width=550,height=420")},S=e=>{e.contains("open")?e.remove("open"):e.add("open")},w=e=>{if((e=decodeURIComponent(e)).length>=278){let t=e.substr(0,278).substr(0,Math.min(t.length,t.lastIndexOf(" ")));t.length>275&&(t=t.substr(0,t.length-3).substr(0,Math.min(t.length,t.lastIndexOf(" ")))+"..."),e=t}return e};var I,g;(0,e.setUpEmbeds)(),(()=>{const e=document.querySelector(".immersive-template"),t=document.querySelector("article > .article-header"),o=document.querySelector(".article-figure-caption")||{},n=document.querySelector(".article-dateline"),r=document.querySelector("#content > .wrapper"),a=window.SEATIMESCO.contentInfo.articleBackgroundColor,c=document.querySelector(".article-comments-bar"),i=document.querySelector("#article-footer");e&&a&&(o.style?(o.style.margin="0",o.style.padding="20px 10px 27px"):(document.querySelector(".content-well").classList.add("pt-0"),t.classList.add("pt-4")),c&&c.classList.add("article-content","mv-4"),i.classList.add("article-content"),r.classList.add("custom-bg-layout"),n.classList.add("wrapper"),t.lastElementChild.classList.add("mb-0","pb-4"),""!==a&&(()=>{const e=`${window.SEATIMESCO.contentInfo.post_id}`,t=window.STEventManager.returnEventObject("analyticsEvent","article",'page_layout_meta: {"bg_color":1}',e,null,!0);window.STEventManager.eventPush(t)})())})(),I=document.querySelector(".gallery-wrapper"),g=document.querySelectorAll(".social-share"),document.querySelector(".update-card")&&(()=>{const e=document.querySelectorAll(".update-card-share-button"),t=document.querySelectorAll(".update-card-social-options-li");e.forEach((e=>{e.addEventListener("click",(e=>S(e.currentTarget.parentElement.lastElementChild.classList)))})),t.forEach((e=>{e.addEventListener("click",n),e.addEventListener("keydown",n)}))})(),I&&(e=>{new MutationObserver((()=>{const t=document.querySelector(".caption-meta");t&&[...t.querySelectorAll(".social-share")].forEach((t=>{t.addEventListener("click",(t=>r(t,e)))}))})).observe(document,{childList:!0,subtree:!0})})(I),(e=>{[...e].forEach((e=>{e.addEventListener("click",(e=>a(e)))}))})(g),window.SEATIMESCO.article.userBehaviorDataUrl&&((0,t.setUpReaderID)(),(0,t.setUpSessionID)(),(0,t.sendReaderDataToAWS)()),document.body.classList.contains("single-format-video")&&(()=>{const e=document.querySelector(".featured-media"),t=document.querySelector(".youtube-embed-container"),o=document.querySelector(".article-dateline");e.classList.contains("full-width")&&t&&(t.classList.add("mb-3"),t.insertAdjacentElement("afterend",o),document.querySelector(".article-body").remove(),document.querySelector(".article-comments-bar").remove())})()})()})();