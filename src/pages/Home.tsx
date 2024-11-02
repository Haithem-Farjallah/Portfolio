import React from "react";
import Intro from "../components/Home/Intro";
import { ReactLenis } from "lenis/react";
import Curve from "../components/shared/curve/Curve";
import Projects from "../components/Home/Projects";
import Experience from "../components/Home/Experience";
import LineSeparator from "../components/shared/LineSeparator";
import Education from "../components/Home/Education";

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
        <LineSeparator />
        <Experience />
        <LineSeparator />
        <Education />
        <Intro />
      </ReactLenis>
    </React.Fragment>
  );
};

export default Home;
