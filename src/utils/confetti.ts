import confetti from 'canvas-confetti';

export function fireGlowConfetti() {
  const count = 70;
  const defaults = {
    origin: { y: 0.7 },
    colors: ['#F472B6', '#EC4899', '#C084FC', '#FED7AA', '#FBCFE8', '#F3E8FF', '#F43F5E']
  };

  function fire(particleRatio: number, opts: confetti.Options) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio)
    });
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
}

export function fireHeartSparkles() {
  confetti({
    particleCount: 40,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#FB7185', '#F43F5E', '#E879F9', '#FBCFE8'],
    scalar: 1.1,
    ticks: 150
  });
}
