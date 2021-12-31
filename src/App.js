import './App.css';
import Particles from 'react-tsparticles';
// import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from './components/Home'
// import About from './components/About'
// import Experience from './components/Experience'


function App() {

  return (
    <>
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 20,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
          },
          particles: {
            color: {
              value: "#FFA500",
            },
            links: {
              color: "#FFA500",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 0.5,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 60,
            },
            opacity: {
              value: 1,
            },
            shape: {
              type: "star",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      <Home />
    </>

  );
}

export default App;
