/* =====================================
   BIRTHDAY WEBSITE JAVASCRIPT
===================================== */


/* =========================
   SMOOTH SCROLL
========================= */

function scrollToWishes() {

    const wishes = document.getElementById("wishes");

    wishes.scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================
   MUSIC
========================= */

const music = document.getElementById("birthdayMusic");
const musicButton = document.getElementById("musicButton");

let musicPlaying = false;

musicButton.addEventListener("click", function () {

    if (!musicPlaying) {

        music.play()
            .then(() => {

                musicPlaying = true;

                musicButton.textContent = "🔊";

            })
            .catch(() => {

                alert(
                    "Please add your birthday music to the music folder first."
                );

            });

    } else {

        music.pause();

        musicPlaying = false;

        musicButton.textContent = "🎵";

    }

});


/* =========================
   CONFETTI
========================= */

function createConfetti() {

    const container =
        document.getElementById("confetti-container");

    const symbols = [
        "✦",
        "♥",
        "✧",
        "•"
    ];

    for (let i = 0; i < 100; i++) {

        const piece =
            document.createElement("div");

        piece.classList.add("confetti");

        piece.textContent =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];

        piece.style.left =
            Math.random() * 100 + "%";

        piece.style.fontSize =
            Math.random() * 10 + 6 + "px";

        piece.style.animationDuration =
            Math.random() * 4 + 3 + "s";

        piece.style.animationDelay =
            Math.random() * 2 + "s";

        container.appendChild(piece);

    }

}


/* =========================
   INITIAL CELEBRATION
========================= */

window.addEventListener("load", function () {

    setTimeout(() => {

        createConfetti();

    }, 700);

});


/* =========================
   INTERSECTION ANIMATION
========================= */

const cards =
    document.querySelectorAll(".wish-card");

const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.1
        }
    );


cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(30px)";

    card.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(card);

});
