const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){
        navbar.classList.add("active");
    }
    else{
        navbar.classList.remove("active");
    }

});

/* SCROLL ANIMATION */

const sections = document.querySelectorAll(".fade-section");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){
            entry.target.classList.add("visible");
        }

    });

},{
    threshold:0.15
});

sections.forEach((section)=>{
    observer.observe(section);
});