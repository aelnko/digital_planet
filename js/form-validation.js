document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelector(".connection-inputs");function t(e,t){e.parentElement.classList.add("_error"),e.classList.add("_error"),t.classList.add("_error")}function n(e,t){e.parentElement.classList.remove("_error"),e.classList.remove("_error"),t.classList.remove("_error")}function r(e){return!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value)}e.addEventListener("submit",(async function(e){e.preventDefault(),0!==function(e){let o=document.querySelectorAll("._req"),s=document.querySelectorAll(".error-message");for(let e=0;e<o.length;e++){const c=s[e],l=o[e];n(l,c),l.classList.contains("email-input__input")?r(l)&&(t(l,c),console.log("a")):l.classList.contains("name-input__input")&&""===l.value&&(t(l,c))}}()&&console.log("Заполните поля")}))}));