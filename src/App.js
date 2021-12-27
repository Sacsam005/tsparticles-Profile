import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Particles from 'react-tsparticles';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

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
            // modes: {
            //   bubble: {
            //     distance: 400,
            //     duration: 2,
            //     opacity: 0.8,
            //     size: 40,
            //   },
            //   push: {
            //     quantity: 4,
            //   },
            //   repulse: {
            //     distance: 200,
            //     duration: 1,
            //   },
            // },
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

      <Navbar />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
