// const nav = document.querySelector("nav ul");
// const toggleButton = document.createElement("button");
// toggleButton.textContent = "menu";
// document.querySelector("header").appendChild(toggleButton);

// toggleButton.addEventListener("click", () => {
//   nav.classList.toggle("show");
// });

const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('click', () => {
  alert('Quote form coming soon!');
});


const links = document.querySelectorAll('nav a');

links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    const trigger = window.innerHeight / 1.2;

    if(top < trigger) {
      section.classList.add('visible');
    }
  });
});


const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields');
    e.preventDefault();
  } else {
    alert('Form submitted successfully!');
  }
});


const testimonials = document.querySelectorAll('.testimonial');
let current = 0;

function showTestimonial(index) {
  testimonials.forEach((t, i) => {
    t.style.display = i === index ? 'block' : 'none';
  });
}

showTestimonial(current);

setInterval(() => {
  current = (current + 1) % testimonials.length;
  showTestimonial(current);
}, 3000);
