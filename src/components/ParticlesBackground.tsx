'use client';
import { useCallback, useEffect, useState } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine } from 'tsparticles-engine';

export const ParticlesBackground = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Initialize particles
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
    setIsLoaded(true);
  }, []);

  // Ensure particles only load on the client side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsLoaded(true);
    }
  }, []);

  if (!isLoaded) {
    return (
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800 -z-10" />
    );
  }

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: 'transparent',
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'repulse',
            },
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: '#60a5fa', // Tailwind blue-400
          },
          links: {
            color: '#60a5fa',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: true,
            speed: 1.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 50,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: 3,
          },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 -z-10"
    />
  );
};