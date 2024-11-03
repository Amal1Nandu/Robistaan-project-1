

// register plugin
gsap.registerPlugin(SplitType, ScrollTrigger);

// navbar
document.getElementById('nav-button').addEventListener('click', function() {
  const navbar = document.getElementById('navbar-hamburger');
  
  if (navbar?.classList.contains('hidden')) {
    navbar.classList.remove('hidden');
    navbar.classList.add('flex');
  } else {
    navbar.classList.remove('flex');
    navbar.classList.add('hidden');
  }
 
});

// carousel auto play

document.addEventListener('DOMContentLoaded', function() {
 
    const carouselContainer = document.querySelector('.carousel-container');
  const slides = document.querySelectorAll('.carousel-item');
  
  if (carouselContainer && slides.length > 0) {
   let currentSlide = 0;
  const totalSlides = slides.length;


  const showSlide = (index) => {
    const offset = -index * 100; // Calculate the offset for the slide
    carouselContainer.style.transform = `translateX(${offset}%)`;
  };

  const nextSlide = () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  };

  showSlide(currentSlide); // Initialize with the first slide
  setInterval(nextSlide, 3000); // Change slide every 3 seconds
}
});

// text animation

document.addEventListener('DOMContentLoaded', () => {
  // Define the elements to animate
  const splitTextClasses = [".split-1", ".split-2", ".split-3", ".split-4", ".split-5", ".split-6", ".split-7"];

  splitTextClasses.forEach((splitClass) => {
    // Initialize SplitType for each class
    const mySplitText = new SplitType(splitClass, { type: "chars" });
    const chars = mySplitText.chars;

    // Intersection Observer options
    const observerOptions = {
      threshold: 0.5 // Adjust the threshold as needed
    };

    // Observer to trigger animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Trigger GSAP animation on the characters when they are in view
          gsap.fromTo(chars, {
            xPercent: -100,
            opacity: 0,
          }, {
            xPercent: 0,
            opacity: 1,
            stagger: 0.1,
            ease: "power2.out",
            duration: 0.3,
          });
          // Optional: unobserve after animation to prevent re-triggering
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe each text section
    document.querySelectorAll(splitClass).forEach((element) => {
      observer.observe(element);
    });
  });
});

// navbar hidden in video section

document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.getElementById('navbar');
  const videoSection = document.getElementById('video-section');

  if (videoSection) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navbar.style.display = 'none'; // Hide navbar
      } else {
        navbar.style.display = 'block'; // Show navbar
      }
    });
  }, { threshold: 0.5 }); // Adjust threshold as needed

  observer.observe(videoSection);
}
});
