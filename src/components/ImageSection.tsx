import Div100vh from "react-div-100vh";
import Header from "./Header";
import TypedTitle from "./TypedTitle";
import beach_mobile from "../assets/beach_mobile.png";

function ImageSection() {
  return (
    <Div100vh className="flex flex-col">
      <picture className="absolute -z-10">
        <source media="(min-width:1536px)" srcSet="" /> {/* Extra-Extra Large (2xl) */}
        <source media="(min-width:1024px)" srcSet="" /> {/* Extra Large (xl) */}
        <source media="(min-width:768px)" srcSet="" /> {/* Large (lg) */}
        <source media="(min-width:640px)" srcSet="" /> {/* Medium (md) */}
        <img src={beach_mobile} alt="Alt Text" className="w-auto" /> {/* Small (sm) */}
      </picture>
      <Header />
      <TypedTitle className="flex flex-col drop-shadow-md flex-auto items-center text-center mt-14" />
    </Div100vh>
  );
}

export default ImageSection;
