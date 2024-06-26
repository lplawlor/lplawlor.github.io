import { useState, useEffect } from "react";
import { cover } from "intrinsic-scale";
import Div100vh from "react-div-100vh";

import Header from "./Header";
import TypedTitle from "./TypedTitle";
import Footer from "./Footer";

import beach_sm from "../assets/beach_sm.jpg";
//const smW = 1712;
//const smH = 3704;
import beach_md from "../assets/beach_md.jpg";
const mdW = 4320;
const mdH = 3240;
import beach_lg from "../assets/beach_lg.jpg";
const lgW = 4902;
const lgH = 3244;

import resume from "../files/LiamLawlorResume.pdf";

function ImageSection() {
  // titleHeight and titleWidth are the dimensions of the TypedTitle component
  const [titleHeight, setTitleHeight] = useState("30%");
  const [titleWidth, setTitleWidth] = useState("100%");

  // lineGap is the gap between the two lines of text in the TypedTitle component
  const [lineGap, setLineGap] = useState("1rem");

  // useEffect will be used to correctly position the TypedTitle based on the screen size
  useEffect(() => {
    function onResize() {
      // Get the viewport dimensions
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      if (vw < 768) {
        // < md breakpoint
        // Center the text in the viewport and place it near the top of the screen
        setTitleHeight(0.425 * vh + "px");
        setTitleWidth("100%");
        setLineGap("1rem");
      } else if (vw < 1024) {
        // < lg breakpoint
        // Center the text between the left edge and where I am standing in the photo
        // Place the text such that Bell island seperates the two lines

        // The cover function is used to determine the height and vertical shift of the photo in the viewport
        const { height, y } = cover(vw, vh, mdW, mdH);

        // Note that the vertical shift (y) is doubled, as we are trying to position the center of the div, not the top
        setTitleHeight(0.77 * height + 2 * y + "px");
        setTitleWidth(0.6 * vw + "px");
        setLineGap(0.04 * height + "px");
      } else {
        // >= lg breakpoint
        // As above, with slight adjustments to compensate for the different photo used
        const { height, y } = cover(vw, vh, lgW, lgH);
        setTitleHeight(0.76 * height + 2 * y + "px");
        setTitleWidth(0.6 * vw + "px");
        setLineGap(0.04 * height + "px");
      }
    }

    // Make the site reactive when the viewport changes sizes
    window.addEventListener("resize", onResize);

    // Run the positioning function once on load
    onResize();
  }, [setTitleHeight, setTitleWidth, setLineGap]);

  return (
    <Div100vh className="flex flex-col items-center md:items-start">
      <picture className="absolute -z-10 w-full h-full">
        {/* lg breakpoint */}
        <source media="(min-width:1024px)" srcSet={beach_lg} />
        {/* md breakpoint */}
        <source media="(min-width:768px)" srcSet={beach_md} />
        <img
          src={beach_sm}
          alt="Photo of Liam Lawlor on Topsail Beach in Conception Bay South, Newfoundland and Labrador."
          className="object-cover object-center w-full h-full"
        />
      </picture>
      <Header />
      <TypedTitle height={titleHeight} width={titleWidth} lineGap={lineGap} />
      <div
        className="z-10 absolute flex justify-center items-end h-2/3"
        style={{ width: titleWidth }}
      >
        <a
          href={resume}
          target="_blank"
          className="bg-sea-blue md:bg-scarf-blue text-zinc-100 drop-shadow-md rounded-full p-3 font-semibold text-xl md:text-2xl md:p-4 lg:text-3xl lg:p-5 2xl:text-4xl 2xl:p-6"
        >
          View Résumé
        </a>
      </div>
      <Footer />
    </Div100vh>
  );
}

export default ImageSection;
