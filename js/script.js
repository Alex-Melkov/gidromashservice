window.addEventListener("load",(function(){const e=document.querySelector("body"),t=document.querySelector(".menu-wrapper"),i=document.querySelector(".menu-sidebar"),n=document.querySelector(".menu-sidebar__btn-toggle"),s=window.innerWidth-i.offsetWidth+"px";n.addEventListener("click",(function(o){t.classList.toggle("open"),e.classList.toggle("lock"),n.classList.toggle("open"),window.innerWidth<991&&(t.classList.contains("open")?i.style.paddingRight=s:i.style.paddingRight="0px")}));const o=document.querySelector(".catalog-select"),r=document.querySelector(".catalog-select__default");o&&r.addEventListener("click",(function(e){o.classList.toggle("open-select")}));new Swiper(".index-about-swiper",{direction:"horizontal",slidesPerView:1,spaceBetween:30,navigation:{nextEl:".index-about-swiper-button-next",prevEl:".index-about-swiper-button-prev"},pagination:{el:".index-about-swiper-pagination",clickable:!0}}),new Swiper(".partners-swiper",{direction:"horizontal",loop:!0,breakpoints:{320:{spaceBetween:10,slidesPerView:1},576:{spaceBetween:10,slidesPerView:2},991:{spaceBetween:30,slidesPerView:3},1921:{spaceBetween:30,slidesPerView:4}},navigation:{nextEl:".partners-swiper-button-next",prevEl:".partners-swiper-button-prev"}}),new Swiper(".product-bottom-swiper",{direction:"horizontal",loop:!0,breakpoints:{320:{spaceBetween:10,slidesPerView:1},390:{spaceBetween:10,slidesPerView:2},576:{spaceBetween:20,slidesPerView:2},768:{spaceBetween:20,slidesPerView:3},991:{spaceBetween:20,slidesPerView:4},1440:{spaceBetween:20,slidesPerView:6},1921:{spaceBetween:20,slidesPerView:8}},navigation:{nextEl:".product-bottom-swiper-button-next",prevEl:".product-bottom-swiper-button-prev"}}),new Swiper(".article-bottom-swiper",{direction:"horizontal",loop:!0,breakpoints:{320:{spaceBetween:10,slidesPerView:1},576:{spaceBetween:10,slidesPerView:2},1200:{spaceBetween:20,slidesPerView:3},1921:{spaceBetween:30,slidesPerView:4}},navigation:{nextEl:".article-bottom-swiper-button-next",prevEl:".article-bottom-swiper-button-prev"}})}));