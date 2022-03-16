export const ParticlesOptions = {
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
        value_area: 1500,
      },
    },
    color: {
      value: "#ffe25d",
    },
    line_linked: {
      enable: true,
      opacity: 0.04,
    },
    move: {
      direction: "random",
      speed: 0.8,
    },
    size: {
      value: 3,
    },
    opacity: {
      anim: {
        enable: true,
        speed: 3,
        opacity_min: 0.05,
      },
    },
  },
  interactivity: {
    events: {
      onclick: {
        enable: true,
        mode: "push",
      },
    },
    modes: {
      push: {
        particles_nb: 1,
      },
    },
  },
  retina_detect: true,
};
