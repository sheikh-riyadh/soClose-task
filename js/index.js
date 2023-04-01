const countdown = new Date("April 30, 2023 23:59:59").getTime();

const x = setInterval(function () {

    const now = new Date().getTime();

    const distance = countdown - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days < 10 ? `0${days}` : days;
    document.getElementById("hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.getElementById("minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.getElementById("seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);







const timelines = document.querySelectorAll(".timeline__right");

const trackers = document.querySelectorAll(".timeline__tracker");
// console.log(bullet.offsetParent);

window.addEventListener(
    "scroll",
    (e) => {
        timelines.forEach((timeline, i) => {
            //  Animate on scroll
            if (trackers[i].offsetTop > 0) {
                timeline
                    .querySelector(".timeline__content")
                    .classList.add("animate-on-scroll");
            } else {
                timeline
                    .querySelector(".timeline__content")
                    .classList.remove("animate-on-scroll");
            }

            //       Timeline progress
            timeline.style.background = `linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) ${trackers[i].offsetTop + 5
                }px, var(--color-grey) ${trackers[i].offsetTop + 5
                }px, var(--color-grey) 100%)`;
        });
    },
    { passive: true }
);
