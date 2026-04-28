const items = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio >= 0.25) {
        entry.target.classList.add("active");

        setTimeout(() => {
          entry.target.classList.add("dot");
        }, 600);
      }

      if (entry.intersectionRatio <= 0.02) {
        entry.target.classList.remove("active");
        entry.target.classList.remove("dot");
      }
    });
  },
  {
    threshold: [0, 0.02, 0.25],
  },
);

items.forEach((item) => observer.observe(item));
