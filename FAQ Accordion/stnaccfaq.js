document.addEventListener("DOMContentLoaded",function(e){for(var t=document.getElementsByClassName("emaccordion"),n=document.getElementsByClassName("empanel"),s=0;s<t.length;s++)t[s].onclick=function(){var e=!this.classList.contains("active");o(t,"active","remove"),o(n,"show","remove"),e&&(this.classList.toggle("active"),this.nextElementSibling.classList.toggle("show"))};function o(e,t,n){for(var s=0;s<e.length;s++)e[s].classList[n](t)}});