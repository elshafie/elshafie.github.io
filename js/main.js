window.addEventListener('load',() => {
//swiper js
const swiper = new Swiper('.swiper', {
  // slidesPerView: 3,
  // spaceBetween: 30,
  // slidesPerGroup: 3,
  // loop: true,

// If we need pagination
pagination: {
  el: '.swiper-pagination',
},

// Navigation arrows
navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
},
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  breakpoints: {
    // when window width is >= 600px
    600: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is >= 768px
    769: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});

const menuBtn = document.querySelector('#menu');
const closeBtn = document.querySelector('#close');

const navBar = document.querySelector('header .container nav ul')

menuBtn.addEventListener('click', () => {
  navBar.style.display='flex';
  menuBtn.style.display='none';
  closeBtn.style.display='inline-block';
})

closeBtn.addEventListener('click', () => {
  navBar.style.display='none';
  menuBtn.style.display='inline-block';
  closeBtn.style.display='none';
})


  window.addEventListener('mousedown', (e) => {
      if ( e.clientX > 240 && e.clientY > 75 && window.innerWidth <= 768){
        navBar.style.display='none';
        menuBtn.style.display='inline-block';
        closeBtn.style.display='none';
      }
  })

  window.addEventListener('resize',() => {
    if (window.innerWidth > 768){
      navBar.style.display='flex';
      menuBtn.style.display='none';
      closeBtn.style.display='none';
    }else{
      navBar.style.display='none';
      menuBtn.style.display='inline-block';
      closeBtn.style.display='none';
    }
  })

const navItems = document.querySelectorAll('li');

const changeActiveItem = () => {
  navItems.forEach(item => {
    const link = item.querySelector('a');
    link.classList.remove('active');
  })
}

navItems.forEach(item => {
  const link = item.querySelector('a');
  link.addEventListener('click', () => {
    changeActiveItem();
    link.classList.add('active');
  })
})


// read more btn

const readMore = document.querySelector('.read-more');
const readMoreContent = document.querySelector('.read-more-content');

readMore.addEventListener('click', () => {
  readMoreContent.classList.toggle('show-content');
  if (readMoreContent.classList.contains('show-content')){
    readMore.textContent = "Show Less";
  }else{
    readMore.textContent = "Show More";
  }
})


//show hide skills

const skillItems = document.querySelectorAll('section.skills .container .skill');

skillItems.forEach(skill => {
  skill.querySelector('.container .skill .head').addEventListener("click", () => {
    skill.querySelector('.container .skill .items').classList.toggle('show-items')
  })
})


// add box shadow on scroll

window.addEventListener('scroll', () => {
  document.querySelector('header').classList.toggle('show-shadow',window.scrollY > 0);
})


const logo = document.getElementById('logo')

logo.addEventListener('click', () => {
  changeActiveItem();
  document.querySelector('nav ul li a:nth-of-type(1)').classList.add('active');
})


let headerHeight = 200;
let landing = document.querySelector('.landing').clientHeight;
let about = document.querySelector('.about').clientHeight;
let skills = document.querySelector('.skills').clientHeight;
let services = document.querySelector('.services').clientHeight;
let portfolio = document.querySelector('.portfolio').clientHeight;
let certificates = document.querySelector('.certificates').clientHeight;
let contact = document.querySelector('.contact').clientHeight;


changeActivaCase()

window.addEventListener("scroll", () => {

  skills = document.querySelector('.skills').clientHeight;
  about = document.querySelector('.about').clientHeight;

  changeActivaCase()
  })


  function changeActivaCase(){
    if (window.scrollY < (landing - headerHeight)){
      changeActiveItem();
      document.querySelector('nav ul li:nth-of-type(1) a').classList.add('active');
    }else if (window.scrollY <= (landing + about - headerHeight)){
      changeActiveItem();
      document.querySelector('nav ul li:nth-of-type(2) a').classList.add('active');
    }else if (window.scrollY <= (landing + about + skills - headerHeight)){
      changeActiveItem();
      document.querySelector('nav ul li:nth-of-type(3) a').classList.add('active');
    }else if (window.scrollY <= (landing + about + skills + services - headerHeight)){
      changeActiveItem();
      document.querySelector('nav ul li:nth-of-type(4) a').classList.add('active');
    }else if (window.scrollY <= (landing + about + skills + services + portfolio - headerHeight)){
      changeActiveItem();
      document.querySelector('nav ul li:nth-of-type(5) a').classList.add('active');
    }
    else if (window.scrollY <= (landing + about + skills + services + portfolio + certificates - headerHeight)){
      changeActiveItem();
      document.querySelector('nav ul li:nth-of-type(6) a').classList.add('active');
    }
    else if (window.scrollY <= (landing + about + skills + services + portfolio + certificates + contact - headerHeight)){
      changeActiveItem();
      document.querySelector('nav ul li:nth-of-type(7) a').classList.add('active');
      }
  }















})


