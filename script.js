$('.backToTop').on('click',()=>$("html, body").animate({scrollTop: $(".about-me").offset().top}, 1000));

const sections = document.querySelectorAll('.section');
 
const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        entry.target.classList.toggle("show",entry.isIntersecting)
    })
})
sections.forEach(section=>{
    observer.observe(section);
})