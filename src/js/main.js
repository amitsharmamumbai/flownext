 

document.addEventListener("DOMContentLoaded", () => {
 
 const navToggle = document.getElementById('nav-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  navToggle.addEventListener('click', () => {
    if (mobileMenu.classList.contains('hidden')) {
      // Show menu smoothly
      mobileMenu.classList.remove('hidden');
      setTimeout(() => {
        mobileMenu.classList.remove('opacity-0', '-translate-y-5');
        mobileMenu.classList.add('opacity-100', 'translate-y-0');
      }, 10);
    } else {
      // Hide menu smoothly
      mobileMenu.classList.add('opacity-0', '-translate-y-5');
      mobileMenu.classList.remove('opacity-100', 'translate-y-0');
      setTimeout(() => {
        mobileMenu.classList.add('hidden');
      }, 300);
    }
  });


  // Hover Intent Fix: Keeps dropdown open when hovering into it
  const menuButton = document.getElementById("menu-button");
  const dropdown = document.getElementById("dropdown-menu");

  let timeoutId;

  menuButton.addEventListener("mouseenter", () => {
    clearTimeout(timeoutId);
    dropdown.classList.remove("opacity-0", "invisible");
  });

  menuButton.addEventListener("mouseleave", () => {
    timeoutId = setTimeout(() => {
      dropdown.classList.add("opacity-0", "invisible");
    }, 150);
  });

  dropdown.addEventListener("mouseenter", () => {
    clearTimeout(timeoutId);
    dropdown.classList.remove("opacity-0", "invisible");
  });

  dropdown.addEventListener("mouseleave", () => {
    dropdown.classList.add("opacity-0", "invisible");
  });

    //counters logic
    const page = document.body.dataset.page;
    if (page === "home-saas") {

      const counters = document.querySelectorAll(".counter");
      let started = false;

        const startCounting = () => {
          counters.forEach(counter => {
            const target = +counter.getAttribute("data-target");
            const duration = 2000; // in ms
            const stepTime = Math.abs(Math.floor(duration / target));
            let count = 0;

            const timer = setInterval(() => {
              count++;
              counter.textContent = count + "+";
              if (count >= target) {
                clearInterval(timer);
                counter.textContent = target + "+";
              }
            }, stepTime);
          });
        };

        // Trigger when section enters view
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting && !started) {
              startCounting();
              started = true;
            }
          });
        }, { threshold: 0.5 });

        const section = document.querySelector("#stats");
        observer.observe(section);

    }

  });

  document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('contactForm');
  if (!form) return; // nothing to do on pages without the contact form

  var successBox = document.getElementById('cf-success');
  var submitBtn = document.getElementById('cf-submit') || form.querySelector('button[type="submit"]');

  // If cf-success is missing, create a simple accessible fallback and insert before submit button
  if (!successBox) {
    successBox = document.createElement('div');
    successBox.id = 'cf-success';
    successBox.className = 'hidden p-4 rounded-lg bg-green-50 text-green-600 border border-green-200 text-center';
    successBox.setAttribute('role', 'status');
    successBox.setAttribute('aria-live', 'polite');
    successBox.textContent = 'Your message has been sent successfully! (Demo only)';
    if (submitBtn && submitBtn.parentNode) submitBtn.parentNode.insertBefore(successBox, submitBtn);
    else form.appendChild(successBox);
  }

  // ensure we have a submit button reference
  if (!submitBtn) submitBtn = form.querySelector('button[type="submit"]');

  // final safety: if no submit button, create invisible fallback so disable won't throw
  if (!submitBtn) {
    submitBtn = document.createElement('button');
    submitBtn.type = 'button';
    submitBtn.style.display = 'none';
    form.appendChild(submitBtn);
  }

  (function () {

    var form = document.getElementById('contactForm');
    if (!form) return;  // <-- IMPORTANT: prevents errors on other pages

    var successBox = document.getElementById('cf-success');
    var submitBtn = document.getElementById('cf-submit');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // honeypot
      var honey = form.querySelector('input[name="_honey"]');
      if (honey && honey.value.trim() !== '') return;

      // validation
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      successBox.classList.remove('hidden');
      submitBtn.disabled = true;
      submitBtn.classList.add('opacity-60', 'cursor-not-allowed');

      form.reset();

      setTimeout(function () {
        successBox.classList.add('hidden');
        submitBtn.disabled = false;
        submitBtn.classList.remove('opacity-60', 'cursor-not-allowed');
      }, 5000);
    });

  })();

});
