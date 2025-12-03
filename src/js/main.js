 

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

     (function () {
    var form = document.getElementById('contactForm');
    var successBox = document.getElementById('cf-success');
    var submitBtn = document.getElementById('cf-submit');

    form.addEventListener('submit', function (e) {
      e.preventDefault(); // prevent real submission (demo-safe)

      // Honeypot check: if filled, silently ignore (likely bot)
      var honey = form.querySelector('input[name="_honey"]');
      if (honey && honey.value.trim() !== '') {
        // Optionally, you can log or ignore silently
        return;
      }

      // Basic HTML5 validation: if browser marks form invalid, stop
      if (!form.checkValidity()) {
        // Let the browser show native validation UI
        form.reportValidity();
        return;
      }

      // Simulate a successful send
      successBox.classList.remove('hidden');

      // Optional: disable submit button briefly to prevent double-click
      submitBtn.disabled = true;
      submitBtn.classList.add('opacity-60', 'cursor-not-allowed');

      // Reset form fields
      form.reset();

      // After 5 seconds, hide success and re-enable button
      setTimeout(function () {
        successBox.classList.add('hidden');
        submitBtn.disabled = false;
        submitBtn.classList.remove('opacity-60', 'cursor-not-allowed');
      }, 5000);
    });
  })();

  });