gsap.from(".container", {
    duration: 1,
    opacity: 0,
    y: 100,
    ease: "power1.inOut"
});

gsap.from("input", {
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "power1.inOut",
    stagger: 0.2
});

gsap.from("button", {
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "power1.inOut"
});