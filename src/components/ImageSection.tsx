import { useState, useEffect } from "react";
import { cover } from "intrinsic-scale";
import Div100vh from "react-div-100vh";

import Header from "./Header";
import TypedTitle from "./TypedTitle";

import beach_sm from "../assets/beach_sm.png";
//const smW = 1712;
//const smH = 3704;
import beach_md from "../assets/beach_md.png";
const mdW = 4320;
const mdH = 3240;
import beach_lg from "../assets/beach_lg.png";
const lgW = 4902;
const lgH = 3244;

function ImageSection() {
  const [topMargin, setTopMargin] = useState("30%");
  const [titleWidth, setTitleWidth] = useState("100%");

  useEffect(() => {
    function onResize() {
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      if (vw < 768) {
        // Small
        //const { width, height, x, y } = cover(vw, vh, smW, smH);
        setTopMargin(0.15 * vh + "px");
        setTitleWidth("100%")
      } else if (vw < 1024) {
        // Medium
        const { height } = cover(vw, vh, mdW, mdH);
        setTopMargin(0.33 * height + "px")
        setTitleWidth(0.60 * vw + "px")
      } else {
        // Large
        const { height } = cover(vw, vh, lgW, lgH);
        setTopMargin(0.33 * height + "px")
        setTitleWidth(0.60 * vw + "px")
      }
    }

    window.addEventListener("resize", onResize);

    onResize();

  }, [setTopMargin, setTitleWidth])

  return (
    <Div100vh className="flex flex-col items-center md:items-start">
      <picture className="absolute -z-10 w-full h-full">
        <source media="(min-width:1536px)" srcSet="" /> {/* 2xl breakpoint */}
        <source media="(min-width:1280px)" srcSet="" /> {/* xl breakpoint */}
        <source media="(min-width:1024px)" srcSet={beach_lg} />{" "}
        {/* lg breakpoint */}
        <source media="(min-width:768px)" srcSet={beach_md} />{" "}
        {/* md breakpoint */}
        <source media="(min-width:640px)" srcSet="" /> {/* sm breakpoint */}
        <img
          src={beach_sm}
          alt="Alt Text"
          className="object-cover object-center md:object-top w-screen h-screen"
        />
      </picture>
      <Header />
      <TypedTitle className="absolute flex flex-col drop-shadow-md items-center text-center" style={{ "margin-top": topMargin, "width": titleWidth }} />
    </Div100vh>
  );
}

export default ImageSection;
