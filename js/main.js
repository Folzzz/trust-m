// page loader section
window.addEventListener('load', () => {
    const pageLoader = document.querySelector('.page-loader');
    pageLoader.classList.add('hidden');    
})

// animation on scroll

const fadeIns = document.querySelectorAll(".fadein-onscroll")

// intersection observer function

const appearOptions = {
    threshold: 0.5
};

const appearOnScroll = new IntersectionObserver
(function(entries, appearOnScroll) {

    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions);

fadeIns.forEach(fadeIn => {
    appearOnScroll.observe(fadeIn)
})
