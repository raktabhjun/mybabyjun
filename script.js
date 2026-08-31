document.addEventListener("DOMContentLoaded", function () {

    // create stars
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


    // tap to open
    const opening = document.getElementById("opening");
    const openBtn = document.getElementById("openBtn");

    if (openBtn && opening) {
        openBtn.addEventListener("click", function () {

            opening.classList.add("hide");

            setTimeout(function () {
                const letter = document.getElementById("letter");

                if (letter) {
                    letter.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }, 500);

            const audio = document.getElementById("music");

            if (audio) {
                audio.play().catch(function () {
                    // phone may block automatic music
                });
            }

        });
    }


    // navigation buttons
    const navButtons = document.querySelectorAll(".nav button");

    navButtons.forEach(function (btn) {

        btn.addEventListener("click", function () {

            const targetId = btn.getAttribute("data-target");
            const target = document.getElementById(targetId);

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });

    });


    // music button
    const audio = document.getElementById("music");
    const musicBtn = document.getElementById("musicBtn");

    if (musicBtn && audio) {

        musicBtn.addEventListener("click", function () {

            if (audio.paused) {

                audio.play().then(function () {
                    musicBtn.textContent = "Ⅱ";
                }).catch(function () {
                    alert("tap again to play the music");
                });

            } else {

                audio.pause();
                musicBtn.textContent = "♪";

            }

        });

    }

});
