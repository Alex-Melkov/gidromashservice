window.addEventListener("load",(function(){const e=document.querySelector("body"),t=document.querySelector(".menu-wrapper"),i=document.querySelector(".menu-sidebar"),n=document.querySelector(".menu-sidebar__btn-toggle"),o=window.matchMedia("(max-width: 575px)");function s(e,n){e&&(t.classList.contains("open")?i.style.paddingRight=n:i.style.paddingRight="0px")}o.addEventListener("change",(function(e){s(e.matches,lockPaddingValue=0)})),n.addEventListener("click",(function(n){let r=window.innerWidth-i.offsetWidth+"px";e.classList.toggle("lock"),t.classList.toggle("open"),i.classList.toggle("open"),s(o.matches,r)}));new Swiper(".index-about-swiper",{direction:"horizontal",slidesPerView:1,spaceBetween:30,navigation:{nextEl:".index-about-swiper-button-next",prevEl:".index-about-swiper-button-prev"},pagination:{el:".index-about-swiper-pagination",clickable:!0}}),new Swiper(".partners-swiper",{direction:"horizontal",loop:!0,breakpoints:{320:{spaceBetween:10,slidesPerView:1},390:{spaceBetween:10,slidesPerView:2},768:{spaceBetween:20,slidesPerView:3},1200:{spaceBetween:20,slidesPerView:4}},navigation:{nextEl:".partners-swiper-button-next",prevEl:".partners-swiper-button-prev"}}),new Swiper(".product-bottom-swiper",{direction:"horizontal",loop:!0,autoplay:{delay:5e3},breakpoints:{320:{spaceBetween:10,slidesPerView:1},390:{spaceBetween:10,slidesPerView:2},576:{spaceBetween:20,slidesPerView:2},768:{spaceBetween:20,slidesPerView:3},991:{spaceBetween:20,slidesPerView:4},1440:{spaceBetween:20,slidesPerView:6},1921:{spaceBetween:20,slidesPerView:8}},navigation:{nextEl:".product-bottom-swiper-button-next",prevEl:".product-bottom-swiper-button-prev"}}),new Swiper(".article-bottom-swiper",{direction:"horizontal",loop:!0,breakpoints:{320:{spaceBetween:10,slidesPerView:1},576:{spaceBetween:10,slidesPerView:2},1200:{spaceBetween:20,slidesPerView:3},1921:{spaceBetween:30,slidesPerView:4}},navigation:{nextEl:".article-bottom-swiper-button-next",prevEl:".article-bottom-swiper-button-prev"}});let r=document.getElementById("map");r&&DG.then((function(){r=DG.map("map",{center:[55.314218,86.146675],zoom:17}),mapicon=DG.icon({iconUrl:"img/pin.svg",iconAnchor:[31,63],popupAnchor:[0,20],className:"map-icon",iconSize:[62,63]}),DG.marker([55.314218,86.146675],{icon:mapicon}).addTo(r)}))}));