document.querySelector(".icon-menu").addEventListener("click", function (event) {
  event.preventDefault();
  document.body.classList.toggle("menu-open");
});

const spollerButtons = document.querySelectorAll("[data-spoller] .spollers-faq__button");

spollerButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const currentItem = button.closest("[data-spoller]");
    const content = currentItem.querySelector(".spollers-faq__text");

    const parent = currentItem.parentNode;
    const isOneSpoller = parent.hasAttribute("data-one-spoller");

    if (isOneSpoller) {
      const allItems = parent.querySelectorAll("[data-spoller]");
      allItems.forEach((item) => {
        if (item !== currentItem) {
          const otherContent = item.querySelector(".spollers-faq__text");
          item.classList.remove("active");
          otherContent.style.maxHeight = null;
        }
      });
    }

    if (currentItem.classList.contains("active")) {
      currentItem.classList.remove("active");
      content.style.maxHeight = null;
    } else {
      currentItem.classList.add("active");
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

// Services section scroll functionality
document.addEventListener('DOMContentLoaded', function() {
  const servicesContainer = document.querySelector('.services__scroll-container');
  const servicesRow = document.querySelector('.services__row');
  const leftArrow = document.querySelector('.services__arrow--left');
  const rightArrow = document.querySelector('.services__arrow--right');
  
  if (servicesContainer && servicesRow && leftArrow && rightArrow) {
    const serviceWidth = 420; // Updated base width of a service card
    const gap = 32; // Updated gap between services (2rem = 32px)
    let servicesPerView = 3; // Default number of services visible
    
    // Function to calculate how many services can be shown based on viewport width
    function updateServicesPerView() {
      const containerWidth = servicesContainer.clientWidth;
      if (containerWidth <= 300) {
        servicesPerView = 1;
      } else if (containerWidth <= 800) {
        servicesPerView = 2;
      } else {
        servicesPerView = 3;
      }
    }
    
    // Calculate scroll amount based on number of visible services
    function getScrollAmount() {
      return (serviceWidth + gap) * servicesPerView;
    }
    
    // Function to check if we can scroll left or right
    function updateArrowStates() {
      const maxScroll = servicesRow.scrollWidth - servicesContainer.clientWidth;
      leftArrow.disabled = servicesContainer.scrollLeft <= 0;
      rightArrow.disabled = servicesContainer.scrollLeft >= maxScroll - 10;
    }
    
    // Initial setup
    updateServicesPerView();
    updateArrowStates();
    
    // Left arrow click handler
    leftArrow.addEventListener('click', function() {
      const currentScroll = servicesContainer.scrollLeft;
      const scrollAmount = getScrollAmount();
      const targetScroll = Math.max(0, currentScroll - scrollAmount);
      
      servicesContainer.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    });
    
    // Right arrow click handler
    rightArrow.addEventListener('click', function() {
      const currentScroll = servicesContainer.scrollLeft;
      const scrollAmount = getScrollAmount();
      const maxScroll = servicesRow.scrollWidth - servicesContainer.clientWidth;
      const targetScroll = Math.min(maxScroll, currentScroll + scrollAmount);
      
      servicesContainer.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    });
    
    // Update states on scroll and resize
    servicesContainer.addEventListener('scroll', updateArrowStates);
    window.addEventListener('resize', () => {
      updateServicesPerView();
      updateArrowStates();
    });
  }
});

// Header scroll effect
const header = document.querySelector('.header');
const aboutSection = document.querySelector('#about');

window.addEventListener('scroll', () => {
  const aboutSectionTop = aboutSection.getBoundingClientRect().top;
  
  if (aboutSectionTop <= 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Prevent right-click on images
document.addEventListener('DOMContentLoaded', function() {
    // Prevent right-click on all images
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            return false;
        });
    });

    // Prevent drag and drop of images
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('dragstart', function(e) {
            e.preventDefault();
            return false;
        });
    });

    // Prevent keyboard shortcuts for saving images
    document.addEventListener('keydown', function(e) {
        // Prevent Ctrl+S, Ctrl+U, and Ctrl+Shift+I
        if ((e.ctrlKey && e.key === 's') || 
            (e.ctrlKey && e.key === 'u') || 
            (e.ctrlKey && e.shiftKey && e.key === 'i')) {
            e.preventDefault();
            return false;
        }
    });
});
