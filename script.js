document.addEventListener("DOMContentLoaded", function () {
  // 1. Get elements once at the top level
  const audio = document.getElementById("music");
  const musicBtn = document.getElementById("musicBtn");
  const openBtn = document.getElementById("openBtn");
  const opening = document.getElementById("opening");

  // 2. Create star background animation
  const stars = document.getElementById("stars");
  if (stars) {
    for (let i = 0; i < 90; i++) {
      const s = document.createElement("span");
      s.className = "star";
      s.style.left = Math.random() * 100 + "%";
      s.style.top = Math.random() * 100 + "%";
      s.style.animationDelay = Math.random() * 3 + "s";
      s.style.animationDuration = (2 + Math.random() * 3) + "s";
      stars.appendChild(s);
    }
  }

  // 3. Tap to open button logic + Start playing audio on user tap
  if (openBtn && opening) {
    openBtn.addEventListener("click", function () {
      opening.classList.add("hide");

      const letter = document.getElementById("letter");
      if (letter) {
        setTimeout(function () {
          letter.scrollIntoView({ behavior: "smooth" });
        }, 500);
      }

      // Play audio when user taps the open button
      if (audio) {
        audio.play().then(function () {
          if (musicBtn) musicBtn.textContent = "⏸";
        }).catch(function (error) {
          console.log("Autoplay blocked:", error);
        });
      }
    });
  }

  // 4. Navigation buttons scrolling
  const navButtons = document.querySelectorAll("[data-target]");
  navButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const targetId = btn.getAttribute("data-target");
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // 5. Dedicated Music Toggle Button
  if (musicBtn && audio) {
    musicBtn.addEventListener("click", function () {
      if (audio.paused) {
        audio.play().then(function () {
          musicBtn.textContent = "⏸";
        }).catch(function () {
          alert("Tap again to play the music");
        });
      } else {
        audio.pause();
        musicBtn.textContent = "🎵";
      }
    });
  }
});
