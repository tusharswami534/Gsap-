gsap.registerPlugin(ScrollTrigger);

gsap.to(".box", {
  x: -700,
  duration: 3,
    scrollTrigger: {
    trigger: ".box",
    start: "10%",
    scrub: 2
  }
});
gsap.to(".text-gsap", {
  y: -300,
  scrollTrigger: {
    trigger: ".text-gsap",
    start: "0%",
    scrub: true
  }
});
gsap.from(".tree", {
  bottom: '-20px',
  opacity : 0,
  Stagger : true ,
  scrollTrigger: {
    trigger: ".tree",
    start: "0%",
    scrub: true
  }
});
