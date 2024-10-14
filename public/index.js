

// register plugin
gsap.registerPlugin(SplitType, ScrollTrigger);

// navbar
document.getElementById('nav-button').addEventListener('click', function() {
  const navbar = document.getElementById('navbar-hamburger');
  navbar.classList.toggle('hidden');
});

// carousel auto play

document.addEventListener('DOMContentLoaded', function() {
  let currentSlide = 0;
  const slides = document.querySelectorAll('.carousel-item');
  const totalSlides = slides.length;
  
  const showSlide = (index) => {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? 'block' : 'none';
    });
  };

  const nextSlide = () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  };
  
  showSlide(currentSlide); // Initialize with the first slide
  setInterval(nextSlide, 3000); // Change slide every 3 seconds
});



//text animation
document.addEventListener('DOMContentLoaded', () => {
  let splitTextClasses = [".split-1", ".split-2", ".split-3", ".split-4", ".split-5", ".split-6", ".split-7"];

splitTextClasses.forEach((splitClass, index) => {
  let mySplitText = new SplitType(splitClass, {type: "chars"});
  let chars = mySplitText.chars;
  gsap.from(chars, {
  // yPercent: 130,
  // stagger: 0.05,
  // ease: "back.out",
  // duration: 1,
  // scrollTrigger: {
  //   trigger: splitClass,
  //   start: "top 80%",   
  // },
 
  xPercent: -100,
  opacity: 0,
 stagger: 0.1,
 ease:"power2.out",
 duration:0.3,
 scrollTrigger: {
  trigger: splitClass,
  start: "top 80%",
 }
});
});
});