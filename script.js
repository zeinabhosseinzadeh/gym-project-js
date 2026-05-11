"use strict";
// start header and slider////////
window.addEventListener("scroll", () => {
  const header = document.querySelector('header');
  if (header) {
    header.classList.toggle("sticky", window.scrollY > 0);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = createMenuToggle();
  const nav = document.querySelector('header nav');
  const ul = nav.querySelector('ul');

  nav.insertBefore(menuToggle, ul);

  menuToggle.addEventListener('click', () => {
    ul.classList.toggle('show');
    menuToggle.classList.toggle('active');
  });

  addNavLinkClickListener(ul, menuToggle);
});

function createMenuToggle() {
  const menuToggle = document.createElement('div');
  menuToggle.classList.add('menu-toggle');
  menuToggle.innerHTML = '<span></span><span></span><span></span>';
  return menuToggle;
}

function addNavLinkClickListener(ul, menuToggle) {
  const navLinks = ul.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      ul.classList.remove('show');
      menuToggle.classList.remove('active');
    });
  });

}
///////////////////////////start slider//////////////////////////
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides-fade");
  const dots = document.getElementsByClassName("dot");

  if (slides.length === 0) return;

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  hideSlides(slides);
  activateDot(dots);

  slides[slideIndex - 1].style.display = "block";
  if (dots[slideIndex - 1]) {
    dots[slideIndex - 1].classList.add("active");
  }
}

function hideSlides(slides) {
  Array.from(slides).forEach(slide => slide.style.display = "none");
}

function activateDot(dots) {
  Array.from(dots).forEach(dot => dot.classList.remove("active"));
}

setInterval(() => {
  plusSlides(1);
}, 4000);

// end header and slider///////

// ----start about---/////
document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('modal-open');
  const modalContainer = document.getElementById('modal-container');
  const closeBtn = document.getElementById('close-modal');

  const toggleModal = () => modalContainer.classList.toggle('show');

  if (openBtn && modalContainer && closeBtn) {
    openBtn.addEventListener('click', toggleModal);
    closeBtn.addEventListener('click', toggleModal);

    window.addEventListener('click', (e) => {
      if (e.target === modalContainer) {
        toggleModal();
      }
    });
  }
});
//end about////

////----start discount-----////
window.addEventListener("scroll", () => {
  const section = document.getElementById("discounts");
  const trigger = window.innerHeight - 100;

  if (section && section.getBoundingClientRect().top < trigger) {
    section.classList.add("visible");
  }
});

const modal = document.getElementById("modal-discounts");
const modalText = document.getElementById("modal-discounts-text");
const closeBtn = document.getElementById("Close-2");

if (modal && modalText && closeBtn) {
  document.querySelectorAll(".read-more").forEach(button => {
    button.addEventListener("click", () => {
      modalText.textContent = button.dataset.content || '';
      modal.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
}
//------end discount-----////

/////---------- start working hours-----////
const weekdays = document.querySelectorAll('.weekdays');
const times = document.querySelectorAll('.box-p');

if (weekdays.length && times.length) {
  weekdays.forEach(day => {
    day.addEventListener('click', () => {
      weekdays.forEach(d => d.classList.remove('active'));
      day.classList.add('active');
      times.forEach(box => {
        box.style.display = 'none';
        setTimeout(() => {
          box.style.display = 'block';
        }, 150);
      });
    });
  });
}

/////---------- finish working hours-----////
//////---------start counter-----////
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll('.counter');
  const speed = 30;

  const updateCount = (counter) => {
    const target = +counter.getAttribute('data-target');
    let count = 0;

    const animate = () => {
      const increment = Math.ceil(target / speed);
      if (count < target) {
        count += increment;
        counter.innerText = count;
        requestAnimationFrame(animate);
      } else {
        counter.innerText = target;
      }
    };

    animate();
  };

  const inViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  const checkCounters = () => {
    counters.forEach(counter => {
      if (inViewport(counter)) {
        updateCount(counter);
      }
    });
  };

  window.addEventListener("scroll", checkCounters);
  checkCounters();
});

// //////////// end counter//////////////////////////

// //////////// start team//////////////////////////
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("socialModal");
  const modalText = document.getElementById("socialText");
  const closeBtn = document.querySelector(".close-social");
  const socialIcons = document.querySelectorAll(".social");

  const setModalContent = (platform) => {
    modalText.textContent = `Social ID: ${platform}`;
    modal.style.display = "flex";
  };

  socialIcons.forEach(icon => {
    icon.addEventListener("click", (e) => {
      e.stopPropagation();

      let platform = "";
      if (icon.classList.contains("fa-facebook-f")) {
        platform = "This is our trainer's Facebook ID you can click";
      } else if (icon.classList.contains("fa-twitter")) {
        platform = "This is our trainer's Twitter ID you can click";
      } else if (icon.classList.contains("fa-instagram")) {
        platform = "This is our trainer's Instagram ID you can click";
      }

      setModalContent(platform);
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
// //////////// end team//////////////////////////

// //////////// start blog//////////////////////////


const toggleDescription = (description) => {
  const isOpen = description.style.maxHeight;
  document.querySelectorAll('.card-blog .blog-description').forEach(desc => {
    desc.style.maxHeight = null;
  });
  if (!isOpen) {
    description.style.maxHeight = description.scrollHeight + "px";
  }
};
document.querySelectorAll('.card-blog').forEach(card => {
  card.addEventListener('click', () => {
    const description = card.querySelector('.blog-description');
    toggleDescription(description);
  });
});
/* <!-- ////// end blog////// --> */

/* <!-- ////// start testimonial////// --> */

const track = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slide2');
const slideWidth = 320;
const totalSlides = slides.length;
const visibleSlides = 3;
const maxIndex = totalSlides - visibleSlides;
let currentIndex = 0;
const updateSlider = () => {
  const offset = currentIndex * slideWidth;
  track.style.transform = `translateX(-${offset}px)`;
  slides.forEach(slide => slide.classList.remove('active'));

  const middleIndex = currentIndex + Math.floor(visibleSlides / 2);
  const middleSlide = slides[middleIndex];

  if (middleSlide) middleSlide.classList.add('active');
};

const nextSlide = () => {
  currentIndex = (currentIndex >= maxIndex) ? 0 : currentIndex + 1;
  updateSlider();
};

const prevSlide = () => {
  currentIndex = (currentIndex <= 0) ? maxIndex : currentIndex - 1;
  updateSlider();
};

setInterval(nextSlide, 4000);
/* <!-- ////// end testimonial////// --> */

// -- ////// start contact us////// -->
document.querySelector("form").addEventListener("submit", handleFormSubmit);

async function handleFormSubmit(event) {
  event.preventDefault();

  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const formData = { firstName, lastName, email, password };

  try {
    const response = await registerUser(formData);

    if (response.ok) {
      const result = await response.json();
      showToast("Account created successfully! Redirecting...");
      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 2000);
    } else {
      const errorData = await response.json();
      showToast`(Registration failed: ${errorData.message || "Please try again."})`;
    }
  } catch (error) {
    showToast("Server error. Please try again later.");
  }
}

async function registerUser(formData) {
  try {
    const response = await fetch("https://example.com/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    return response;
  } catch (error) {
    throw new Error("Server error");
  }
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

// -- ////// end contact us////// -->

// -- ////// start back button////// -->
const backToTopBtn = document.getElementById("backToTop");
window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};
backToTopBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
// -- ////// end back button////// -->