import mobileNav from "./modules/mobile-nav.js";
mobileNav();
//========================================================================================================================================================
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

gsap.from(".logo", { duration: 2, y: -100, opacity: 0, delay: 1 });
gsap.from(".header__item", {
  opacity: 0,
  y: -50,
  stagger: 0.5
});
const title = document.querySelector(".info__text-title");
title.innerHTML = title.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

gsap.from(".letter", {
  opacity: 0,
  y: 50,
  stagger: 0.3,
  duration: 2,
  delay: 2
});
gsap.from(".info__small-fog", { opacity: 0, x: 200, duration: 3, delay: 3 });

const aboutTitle = document.querySelector(".about__title");

const word = "About Me";
const letters = word.split("");

aboutTitle.innerHTML = "";

letters.forEach((letter, index) => {
  const span = document.createElement("span");
  span.textContent = letter;
  span.style.opacity = 0;
  aboutTitle.appendChild(span);

  gsap.to(span, {
    opacity: 1,
    duration: 0.5, // Adjust the duration for a slower appearance
    scrollTrigger: {
      trigger: aboutTitle,
      start: `top center+=${index * 0.2}`, // Stagger the appearance of each letter
      end: `top center+=${index * 0.2}`
    }
  });
});

gsap.set(aboutTitle, {
  opacity: 0,
  x: -100
});

// Анімація при появі
gsap.to(aboutTitle, {
  opacity: 1,
  x: 0, // Змінено на 0, щоб встановити елемент на своє місце
  duration: 1.5,
  scrollTrigger: {
    trigger: aboutTitle,
    start: "top center",
    end: "+=500"
  }
});
