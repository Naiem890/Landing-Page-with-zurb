$(document).foundation();
gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline();

gsap.from(".hero-content", { x: -700, duration: 1 });
gsap.from(".hero-img", { x: 700, duration: 1 });
gsap.from(".company-logo", {
  y: 100,
  duration: 1,
  opacity: 0.1,
  stagger: 0.15,
  ease: Circ.easeOut,
  scrollTrigger: "#featureSection",
});
