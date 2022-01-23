import Particles from "react-tsparticles"

const CustomParticles = () => {

  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: {
            value: "#041562",
          },
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 0.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
        style: {
          position: 'absolute',
          'z-index': '-1'
        }
      }}
    />
  )
}

export default CustomParticles;
