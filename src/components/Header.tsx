import { Icon } from "@iconify/react";
import linkedinIcon from "@iconify/icons-mdi/linkedin";
import githubIcon from "@iconify/icons-mdi/github";
import Logo from "./Logo";

const iconSize = 40;

function Header() {
  return (
    <header className="flex items-center m-4 drop-shadow-md text-zinc-100">
      <Logo
        width={iconSize}
        height={iconSize}
        className="fill-zinc-100 mr-auto"
      />
      <Icon icon={githubIcon} width={iconSize} height={iconSize} />
      <Icon
        icon={linkedinIcon}
        width={iconSize}
        height={iconSize}
        className="ml-2"
      />
    </header>
  );
}

export default Header;
