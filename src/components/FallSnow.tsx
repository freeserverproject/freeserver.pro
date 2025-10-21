import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import './FallSnow.scss';

export default function FallSnow() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <div id="fall-snow">
      <Particles
        id="fall-snow-particles"
        init={particlesInit}
        options={{
          particles: {
            number: {
              value: 200,
            },
            shape: {
              type: 'circle',
            },
            move: {
              enable: true,
              direction: 'bottom',
              outModes: 'out',
              random: false,
              speed: 6,
              straight: false,
            },
            size: {
              value: { min: 3, max: 9 },
            },
          },
        }}
      />
    </div>
  );
}
