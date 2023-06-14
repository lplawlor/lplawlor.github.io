import { Icon } from "@iconify/react";
import linkedinIcon from "@iconify/icons-mdi/linkedin";
import githubIcon from "@iconify/icons-mdi/github";
import Logo from "./Logo";

const iconSize = 50;

function Header() {
  return (
    <header className="absolute flex items-center w-full p-5 drop-shadow-md text-zinc-100">
      <Logo
        width={iconSize}
        height={iconSize}
        className="fill-zinc-100 mr-auto"
      />
      {/* Color changing logo for device size testing */}
      {/*<Logo
        width={iconSize}
        height={iconSize}
        className="fill-red-800 sm:fill-lime-800 md:fill-blue-800 lg:fill-purple-800 xl:fill-yellow-400 2xl:fill-rose-700 mr-auto"
      />*/}
      <a
        href="https://github.com/lplawlor"
        title="GitHub"
        className="hover:text-zinc-300 mr-2"
      >
        <Icon icon={githubIcon} width={iconSize} height={iconSize} />
      </a>
      <a
        href="https://linkedin.com/in/liamplawlor"
        title="LinkedIn"
        className="hover:text-zinc-300"
      >
        <Icon icon={linkedinIcon} width={iconSize} height={iconSize} />
      </a>
    </header>
  );
}

export default Header;
