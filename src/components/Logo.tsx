function Logo({
  width,
  height,
  className,
}: {
  width: number;
  height: number;
  className?: string;
}) {
  return (
    <svg
      viewBox={"0 0 " + 1000 + " " + 1000}
      width={width}
      height={height}
      className={className}
    >
      <path
        fillRule="evenodd"
        d="M1000 50c0-27.614-22.386-50-50-50H425c-27.614 0-50 22.386-50 50v150c0 27.614 22.386 50 50 50h275c27.614 0 50 22.386 50 50v650c0 27.614 22.386 50 50 50h150c27.614 0 50-22.386 50-50V50Zm-425 950c27.614 0 50-22.386 50-50V800c0-27.614-22.386-50-50-50H300c-27.614 0-50-22.386-50-50V50c0-27.614-22.386-50-50-50H50C22.386 0 0 22.386 0 50v900c0 27.614 22.386 50 50 50h525Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default Logo;
