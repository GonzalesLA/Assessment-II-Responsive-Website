// Zoom effect
window.addEventListener('scroll', function() {
    var image = document.getElementById('zoomedImage');
    var scrollPosition = window.scrollY;
   
    var scale = 1 + scrollPosition / 500;
   
    image.style.transform = `scale(${scale})`;
  });
   
  // Slideshow (1967 model)
  let slideIndex1967 = 1;
  showSlides1967(slideIndex1967);
   
  function plusSlides1967(n) {
    showSlides1967(slideIndex1967 += n);
  }
   
  function showSlides1967(n) {
    const slides1967 = document.querySelectorAll('.vintage.classic img');
   
    if (n > slides1967.length) {
        slideIndex1967 = 1;
    }
    if (n < 1) {
        slideIndex1967 = slides1967.length;
    }
   
    for (let i = 0; i < slides1967.length; i++) {
        slides1967[i].style.display = 'none';
    }
   
    slides1967[slideIndex1967 - 1].style.display = 'block';
  }
   
  // Slideshow (2014 model)
  let slideIndex2014 = 1;
  showSlides2014(slideIndex2014);
   
  function plusSlides2014(n) {
    showSlides2014(slideIndex2014 += n);
  }
   
  function showSlides2014(n) {
    const slides2014 = document.querySelectorAll('.vintage.shelby img');
   
    if (n > slides2014.length) {
        slideIndex2014 = 1;
    }
    if (n < 1) {
        slideIndex2014 = slides2014.length;
    }
   
    for (let i = 0; i < slides2014.length; i++) {
        slides2014[i].style.display = 'none';
    }
   
    slides2014[slideIndex2014 - 1].style.display = 'block';
  }
   
  // Slideshow (2022 model)
  let slideIndex2022 = 1;
  showSlides2022(slideIndex2022);
   
  function plusSlides2022(n) {
    showSlides2022(slideIndex2022 += n);
  }
   
  function showSlides2022(n) {
    const slides2022 = document.querySelectorAll('.modern img');
   
    if (n > slides2022.length) {
        slideIndex2022 = 1;
    }
    if (n < 1) {
        slideIndex2022 = slides2022.length;
    }
   
    for (let i = 0; i < slides2022.length; i++) {
        slides2022[i].style.display = 'none';
    }
   
    slides2022[slideIndex2022 - 1].style.display = 'block';
  }
   
  // Slideshow (2024 model)
  let slideIndex2024 = 1;
  showSlides2024(slideIndex2024);
   
  function plusSlides2024(n) {
    showSlides2024(slideIndex2024 += n);
  }
   
  function showSlides2024(n) {
    const slides2024 = document.querySelectorAll('.future img');
   
    if (n > slides2024.length) {
        slideIndex2024 = 1;
    }
    if (n < 1) {
        slideIndex2024 = slides2024.length;
    }
   
    for (let i = 0; i < slides2024.length; i++) {
        slides2024[i].style.display = 'none';
    }
   
    slides2024[slideIndex2024 - 1].style.display = 'block';
  }
   
  // Fade animation for everything inside the "information" div
  function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }
  const slideInElements = document.querySelectorAll('.information .slide-in');
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  const observer = new IntersectionObserver(handleIntersection, options);
  slideInElements.forEach(element => {
    observer.observe(element);
  })