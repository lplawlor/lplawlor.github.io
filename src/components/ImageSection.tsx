import Div100vh from "react-div-100vh";
import Header from "./Header";
import TypedTitle from "./TypedTitle";
import beach_sm from "../assets/beach_sm.png";
import beach_md from "../assets/beach_md.png";
import beach_lg from "../assets/beach_lg.png";

function ImageSection() {
  return (
    <Div100vh className="flex flex-col items-center md:items-start">
      <picture className="absolute -z-10">
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
      <TypedTitle className="flex flex-col drop-shadow-md items-center md:ml-10 text-center mt-14 md:mt-72" />
    </Div100vh>
  );
}

export default ImageSection;
