
let links = document.querySelectorAll('.menu-item');
for(let i=0; i < links.length; i++){
    links[i].onclick = function(){
        document.getElementById(links[i].getAttribute('data-link')).scrollIntoView({behavior:'smooth'});
    }
}

gsap.from('header', {y:-100, ease:'bounce', duration: 1})

gsap.from('.skill-item', {
    scrollTrigger: {
        trigger: ".skill-item",
        start: "top 70%",
        toggleActions: "restart reset restart reset"
      },
    x: -100,
    rotation: -360,
    duration: 2,
    stagger: 1,
    opacity: 0})