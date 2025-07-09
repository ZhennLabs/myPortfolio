// Typewriter effect for role
const roles = [
  'Web Developer',
  'Frontend Engineer',
  'Backend Developer',
  'UI/UX Enthusiast',
  'Problem Solver'
];
let roleIdx = 0;
let charIdx = 0;
let isDeleting = false;
const typewriter = document.getElementById('typewriter-role');
function typeRole() {
  if (!typewriter) return;
  const currentRole = roles[roleIdx];
  if (isDeleting) {
    typewriter.textContent = currentRole.substring(0, charIdx--);
    if (charIdx < 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      setTimeout(typeRole, 500);
    } else {
      setTimeout(typeRole, 50);
    }
  } else {
    typewriter.textContent = currentRole.substring(0, charIdx++);
    if (charIdx > currentRole.length) {
      isDeleting = true;
      setTimeout(typeRole, 1200);
    } else {
      setTimeout(typeRole, 80);
    }
  }
}
typeRole();

// Dropdown menu
const dropdownBtn = document.getElementById('dropdownButton');
const dropdownMenu = document.getElementById('dropdownMenu');
const dropdownContainer = document.getElementById('dropdownContainer');
if (dropdownBtn && dropdownMenu && dropdownContainer) {
  dropdownBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    dropdownMenu.classList.toggle('hidden');
    dropdownContainer.classList.toggle('dropdown-open');
  });
  document.addEventListener('click', function(e) {
    if (!dropdownContainer.contains(e.target)) {
      dropdownMenu.classList.add('hidden');
      dropdownContainer.classList.remove('dropdown-open');
    }
  });
}

function toggleModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.toggle('hidden');
    modal.classList.toggle('flex');
  }
}

// Section fade-in on scroll
window.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section-fade');
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = parseInt(entry.target.getAttribute('data-delay')) || 0;
        setTimeout(() => {
          entry.target.classList.add('opacity-100', 'translate-y-0');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });
  sections.forEach(section => {
    observer.observe(section);
  });
});
