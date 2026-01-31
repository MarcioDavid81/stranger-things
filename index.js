gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

ScrollSmoother.create({
  smooth: 3,
  effects: true,
});

function animaPage() {
  gsap.from(".hero", {
    opacity: 0,
    duration: 1,
  });
  gsap.from("picture:nth-child(1)", {
    y: -60,
    duration: 1,
  });
  gsap.from("picture:nth-child(2)", {
    y: 60,
    duration: 1,
  });

  gsap.from(".card", {
    opacity: 0,
    y: 30,
    filter: "blur(10px)",
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".cards",
      start: "0% 70%",
      end: "100% 70%",
      scrub: true,
    },
  });

  gsap.from(".secaoObrigado ul li", {
    opacity: 0,
    x: 40,
    filter: "blur(10px)",
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".secaoObrigado ul",
      start: "0% 80%",
      end: "100% 50%",
      scrub: true,
    },
  });

  gsap.from("footer", {
    y: "-30%",
    immediateRender: false,
    scrollTrigger: {
      trigger: "footer",
      scrub: true,
      invalidateOnRefresh: true,
      start: "0% 100%",
      end: "100% 100%",
    },
  });

  const grupoTextoSplit = document.querySelectorAll(".textoSplit");

  grupoTextoSplit.forEach((elemento) => {
    SplitText.create(elemento, {
      type: "lines, words, chars",
      mask: "lines",
      onSplit(self) {
        return gsap.from(self.chars, {
          y: 40,
          opacity: 0,
          duration: 0.3,
          stagger: 0.05,
          scrollTrigger: {
            trigger: elemento,
          },
        });
      },
    });
  });
}

// Preloader - Timeline
const tl = gsap.timeline({
  onComplete() {
    animaPage();
    gsap.to("#preloader", {
      opacity: 0,
      display: "none",
    });
  },
});

tl.to("#preloader path", {
  strokeDashoffset: 0,
  duration: 1,
});
tl.to("#preloader path", {
  fill: "rgb(168, 19, 19)",
  duration: 0.5,
});
