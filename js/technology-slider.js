const technologyScrollButton=document.querySelector(".technology__scroll-button"),faqNavItem=document.querySelector(".nav-item:nth-of-type(5)");function scrollClickTechnology(o){o===mediaQuery2&&(technologyScrollButton.onclick=()=>{window.scrollTo(0,3072)})}mediaQuery2.addListener(scrollClickTechnology),scrollClickTechnology(mediaQuery2);