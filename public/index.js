

// register plugin
gsap.registerPlugin(SplitType, ScrollTrigger);

// navbar
document.getElementById('nav-button').addEventListener('click', function() {
  const navbar = document.getElementById('navbar-hamburger');
  navbar.classList.toggle('hidden');
console.log('Navbar toggled');
});

//text animation
document.addEventListener('DOMContentLoaded', () => {
let mySplitText = new SplitType(".split", {type: "chars"});
console.log('SplitText created:', mySplitText);
let chars = mySplitText.chars;
 console.log('Characters:', chars);

gsap.from(chars, {
  yPercent: 130,
  stagger: 0.05,
  ease: "back.out",
  duration: 1,
  scrollTrigger: {
    trigger: '.split',
    start: "top 80%",
    markers: true
  }
})
});