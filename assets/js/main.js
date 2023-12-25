gsap.registerPlugin(ScrollTrigger);

// main animations

let tl = gsap.timeline()

if (window.innerWidth <= 768){
  let body = document.querySelector('.body')
  gsap.from('.portfolio-draia', {
    scrollTrigger: {
      trigger: '.main-img',
      start: 'center top',
      end: 'bottom',
      scrub: true
    },
    x: -100,
    opacity: 0,
    transformOrigin: '100% 100%',
  })
  gsap.from('.portfolio-upsc', {
    scrollTrigger: {
      trigger: '.portfolio-draia',
      start: '+15% center',
      end: 'bottom',
      scrub: true
    },
    x: 100,
      opacity: 0,
      transformOrigin: '100% 100%',
    })
  gsap.from('.portfolio-mazer', {
    scrollTrigger: {
      trigger: '.portfolio-upsc',
      start: '+10% center',
      end: 'bottom',
      scrub: true
    },
    y: -200,
    x: -200,
    opacity: 0,
    transformOrigin: '100% 100%',
    })
  gsap.from('.portfolio-wsh', {
    scrollTrigger: {
      trigger: '.portfolio-mazer',
      start: '+40% center',
      end: 'bottom',
      scrub: true
    },
    x: 200,
    opacity: 0,
    transformOrigin: '100% 100%',
    })
  gsap.from('.portfolio-xenaex', {
    scrollTrigger: {
      trigger: '.portfolio-wsh',
      start: '+40% center',
      end: 'bottom',
      scrub: true
    },
    x: -100,
    opacity: 0,
    transformOrigin: '100% 100%',
    })
}
else{
  gsap.to('.portfolio-draia', {
    scrollTrigger: {
      trigger: '.portfolio-draia',
      start: 'top',
      end: '',
      scrub: true
    },
    yPercent: 100,
  })
  gsap.to('.portfolio-upsc', {
    scrollTrigger: {
      trigger: '.portfolio-upsc',
      start: 'top',
      end: 'bottom',
      scrub: true
    },
    yPercent: 100,
  })
  gsap.to('.portfolio-mazer', {
    scrollTrigger: {
      trigger: '.portfolio-mazer',
      start: 'top',
      end: 'bottom',
      scrub: true
    },
    yPercent: 100,
    xPercent: -10,
  })
  gsap.to('.portfolio-wsh', {
    scrollTrigger: {
      trigger: '.portfolio-wsh',
      start: 'top',
      end: 'bottom',
      scrub: true
    },
    yPercent: 100,
  })
}
tl.fromTo(
  '.logo',
  {
    x: -100,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    duration: 0.5
  },
  0
).fromTo(
  '.header-nav div, .header-nav ul',
  {
    x: -100,
    opacity: 0
  },
  {
    x: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.1
  },
  0
).fromTo(
  '.main-desc',
  {
    rotate: 5,
    x: -200,
    opacity: 0
  },
  {
    rotate: 0,
    x: 0,
    opacity: 1,
    duration: 1.5
  },
  0
).fromTo(
  '.main-img',
  {
    rotate: -5,
    x: 200,
    opacity: 0
  },
  {
    rotate: 0,
    x: 0,
    opacity: 1,
    duration: 1.5
  },
  0
).fromTo(
  '.main-next',
  {
    y: 100
  },
  {
    y: 0,
    duration: 1
  },
  0
).fromTo(
  '.toggle-menu',
  {
    x: 100,
    opacity: 0
  },
  {
    x: 0,
    opacity: 1,
    duration: 0.8
  },
  0
)
gsap.from('.portfolio-title', {
    scrollTrigger: {
      trigger: '.main-img',
      start: 'top',
    },
    opacity: 0,
    transformOrigin: 'left center',
    ease: 'none',
    duration: 0.5,
  }
)
gsap.from('.portfolio-stay', {
  scrollTrigger: {
    trigger: '.main-img',
    start: 'top',
  },
  x: -100,
  opacity: 0,
  transformOrigin: 'left center',
  ease: 'none',
  duration: 0.5,
})
gsap.from('.portfolio-next', {
  scrollTrigger: {
    trigger: '.portfolio-xenaex',
    start: 'top',
  },
  x: -100,
  opacity: 0,
  transformOrigin: 'left center',
  ease: 'none',
  duration: 0.5,
})
gsap.from('.about-desc-grid div', {
  scrollTrigger: {
    trigger: '.about-image',
    start: '+40% center',
  },
  x: -100,
  opacity: 0,
  transformOrigin: 'left center',
  duration: 1,
})
gsap.from('.services-title h1', {
  scrollTrigger: {
    trigger: '.about-image',
    start: 'center center',
  },
  x: -100,
  opacity: 0,
  duration: 1.5,
})  
gsap.from('.services-desc-cont', {
  scrollTrigger: {
    trigger: '.about-desc-grid',
    start: 'bottom bottom',
  },
  x: -50,
  opacity: 0,
  duration: 1.5,
  stagger: 0.5
})  
gsap.from('.services-dates-cont', {
  scrollTrigger: {
    trigger: '.about-desc-grid',
    start: 'bottom bottom',
  },
  x: 50,
  opacity: 0,
  duration: 1.5,
  stagger: 0.5
}) 
gsap.from('.gallery-title', {
  scrollTrigger: {
    trigger: '.services-nude',
    start: 'bottom center',
  },
  x: -100,
  opacity: 0,
  duration: 1,
}) 
gsap.from('.gallery-nav div', {
  scrollTrigger: {
    trigger: '.services-nude',
    start: 'bottom center',
  },
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.5
}) 
gsap.from('.form-left-pic', {
  scrollTrigger: {
    trigger: '.gallery-cards',
    start: 'center top',
  },
  x: -100,
  rotate: 10,
  opacity: 0,
  duration: 1,
  stagger: 0.5
}) 
gsap.from('.form-right-pic', {
  scrollTrigger: {
    trigger: '.gallery-cards',
    start: 'center top',
  },
  x: 100,
  rotate: -10,
  opacity: 0,
  duration: 1,
  stagger: 0.5
}) 
gsap.from('.form-conect', {
  scrollTrigger: {
    trigger: '.gallery-cards',
    start: 'center top',
  },
  y: 300,
  opacity: 0,
  duration: 1.5,
})
 
// main animations

// toggle

let dis = document.querySelector('.top-menu-dis');
let en = document.querySelector('.top-menu-en');
let links = Array.from(document.querySelectorAll('.toggle-menu-en__links ul li'))

links.forEach((button) => {
  function link_click(el){
    en.style.display = 'none'
  } 
  button.addEventListener('click', link_click)
})

const toggle = document.querySelector('.toggle-menu').addEventListener('click', () => {
  en.style.display = 'flex'
  dis.style.display = 'none'
})
const en_toggle = document.querySelector('.toggle-menu-enabled').addEventListener('click', () => {
  en.style.display = 'none'
  dis.style.display = 'flex'
})

// toggle

// filter

function toggleFilter(el){
  let allFilters = document.querySelectorAll('.gallery-nav-filter-btn');
  allFilters.forEach(function (filter) {
    filter.classList.remove('selected');
  });
  el.classList.add('selected');
}
document.addEventListener('DOMContentLoaded', function () {
  showPhotos("all");

  let filterButtons = document.querySelectorAll('.gallery-nav-filter-btn');

  filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      let category = button.getAttribute('data-category-btn');
      showPhotos(category);
    });
  });

  function showPhotos(category) {
    let photoSlides = document.querySelectorAll('.gallery-card');

    photoSlides.forEach(function (slide) {
      let slideCategory = slide.getAttribute('data-category');
      if (!slideCategory || category === "all" || slideCategory === category) {
        slide.style.display = 'block';
      } else {
        slide.style.display = 'none';
      }
    });
  }
});

let swiper = new Swiper(".mySwiper", {
  speed: 650,
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// filter

// slider buttons

let prev = document.querySelector('.gallery-nav-slider-previous');
let next = document.querySelector('.gallery-nav-slider-next');

prev.addEventListener('click', () => {
  prev.style.opacity = '.7'
  next.style.opacity = '1'
})
next.addEventListener('click', () => {
  next.style.opacity = '.7'
  prev.style.opacity = '1'
})

// slider buttons