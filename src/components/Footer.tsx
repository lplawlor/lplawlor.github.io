function Footer() {
  return (
    <footer className="z-20 bottom-0 flex items-center w-full p-2 drop-shadow-md text-xs md:text-sm font-light text-zinc-100 bg-zinc-900">
      <div className="text-left">
        <span className="inline-block">Photo by&nbsp;</span>
        <a
          href="https://www.linkedin.com/in/a-chaulk/"
          className="inline-block underline text-blue-400"
        >
          Alexander Chaulk
        </a>
        .
      </div>
      <div className="text-right ml-auto">
        <span className="inline-block">
          Made with Vite, React and TailwindCSS.&nbsp;
        </span>
        <a
          href="https://github.com/lplawlor/lplawlor.github.io"
          className="inline-block underline text-blue-400"
        >
          View source code
        </a>
        .
      </div>
    </footer>
  );
}

export default Footer;
