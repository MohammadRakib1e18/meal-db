import React from "react";
import './Header.css';
import headerMeal from "../../Images/meal-icon.png";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Header = () => {
  let api = "https://www.themealdb.com/api.php";
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
  }, []);
  return (
    <div className="banner">
      <Particles
        width="300"
        height="500"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 120,

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
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
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
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <img
        src={headerMeal}
        alt=""
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="banner-img-1"
      />
      <div className="header-text">
        <h2>
          <span>W</span>ELCOM<span>E</span> To The <span>M</span>ealD
          <span>B</span>
        </h2>

        <p>
          Welcome to TheMealDB: An open, crowd-sourced database of Recipes from
          around the world.
          <br className="banner-text-break"/> We also offer a<a href={api}> free JSON API</a> for anyone
          wanting to use it, with additional features for subscribers.
        </p>
      </div>
      <img
        src={headerMeal}
        alt=""
        className="banner-img-2"
      />
    </div>
  );
};

export default Header;
