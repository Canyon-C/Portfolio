document.addEventListener('DOMContentLoaded', function () {
    var border = document.querySelector('.cards1');
    var under = document.querySelector('.dynamic');


    border.addEventListener('mouseover', function () {
        under.classList.add('underline');
    })
    border.addEventListener('mouseout', function () {
        under.classList.remove('underline')
    })
})

var trans = document.querySelector('.cards1');
4
trans.addEventListener('mouseout', function () {
    trans.classList.add('off');
})

// Scroll Animation
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.cards1',
        start: "center bottom",
    }
});


tl.from("#under", { x: 200, opacity: 0, duration: 1.4 })

tl.from(".cards1", { x: 200, opacity: 0, duration: 1.1 }, "-=1")

tl.from(".cards", { x: 200, opacity: 0, duration: 1.1 }, "-=1")

tl.from(".cards2", { x: 200, opacity: 0, duration: 1.1 }, "-=1")

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.viewport3',
        start: "center bottom"

    }
})

tl2.from(".fredd", { x: 200, opacity: 0, duration: 1.4 })

tl2.from(".shifttt", { x: 200, opacity: 0, duration: 1.1 }, "-=1")

tl2.from(".working", { x: 200, opacity: 0, duration: 1.1 }, "-=1")

tl2.from(".building", { x: 200, opacity: 0, duration: 1.1 }, "-=1")

tl2.from(".logos", { x: 200, opacity: 0, duration: 1.1 }, "-=1")

let button = document.getElementById('tab').addEventListener('click', () => {
    window.location.href = 'C:/Users/canman/Documents/Portfolio/project.html';
});

var btn = document.querySelector('#redirect');
var btn2 = document.querySelector('#redirect2');

btn.addEventListener("click", () => {
    gsap.to(window, { scrollTo: '.viewport2' });
});

btn2.addEventListener("click", () => {
    gsap.to(window, { scrollTo: '.viewport3' });
});
