import { Icon } from "@iconify/react";
import downIcon from "@iconify/icons-icon-park-outline/down";
import { useState, useEffect } from "react";

// r is used to control the distance scrolled needed to make the indicator invisible
// See the onScroll function
const r = 3;

function ScrollIndicator() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    function onScroll() {
      // scrollFrac is the distance scrolled as a fraction of the window height
      const scrollFrac = window.scrollY / window.innerHeight;
      
      // Once the screen has been scrolled by 1/r of it's height, opacity <= 0
      setOpacity(1 - r * scrollFrac);
    }

    window.addEventListener('scroll', onScroll, { passive: true });

  }, [setOpacity]);

  return <Icon icon={downIcon} width={100} opacity={opacity} />;
}

export default ScrollIndicator;
