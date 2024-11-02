import React from "react";
import Intro from "../components/Home/Intro";
import { ReactLenis } from "lenis/react";
import Curve from "../components/shared/curve/Curve";
import Projects from "../components/Home/Projects";

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Curve />
      <ReactLenis
        root
        options={{
          infinite: true,
          duration: 1.2,
          smoothWheel: true,
        }}
      >
        <Intro />
        <Projects />
        <Intro />
      </ReactLenis>
    </React.Fragment>
  );
};

export default Home;
