const navbar = document.getElementById("navbar");
const navlist = document.querySelectorAll(".nav-list");

window.addEventListener("scroll", () =>{
    if(window.scrollY > 1){
        navbar.classList.add("activate");
        navlist.forEach(el =>{
            el.classList.add("scrolled");
        });
    }else{
        navbar.classList.remove("activate");
        navlist.forEach(el =>{
            el.classList.remove("scrolled");
        });
    };
});


const galleryImages = document.querySelectorAll(".gallery-imgs");

galleryImages.addEventListener()