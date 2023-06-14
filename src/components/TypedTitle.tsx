import { Typed } from "typed.ts";
import { useEffect, useState } from "react";

const typeOptions = {
  eraseDelay: { min: 75, max: 100 },
  perLetterDelay: { min: 70, max: 75 },
  errorMultiplier: 0,
  noSpecialCharErrors: true,
  locale: "en",
};

function TypedTitle({
  height,
  width,
  lineGap,
}: {
  height: string;
  width: string;
  lineGap: string;
}) {
  // Zero-width spaces are used initially, as this keeps the height of the text consistent
  const [name, setName] = useState("​");
  const [summary, setSummary] = useState("​");

  useEffect(() => {
    const nameTyped = new Typed({
      callback: setName,
      ...typeOptions,
    });

    const summaryTyped = new Typed({
      callback: setSummary,
      ...typeOptions,
    });

    nameTyped
      .type("Liam Pad")
      .backspace(2)
      .type("ádraic Lawlp")
      .backspace(1)
      .type("or");

    summaryTyped
      .type("B.Sc. in Combu")
      .backspace(2)
      .type("puter Sciem")
      .backspace(1)
      .type("nce");

    nameTyped.run().then(() => {
      summaryTyped.run();
    });
  }, []);

  return (
    <div
      className="flex flex-col drop-shadow-md items-center justify-center text-center"
      style={{ height: height, width: width }}
    >
      <span className="font-bold text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl text-scarf-blue">
        {name}
      </span>
      <span
        className="font-bold text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl text-zinc-100"
        style={{ marginTop: lineGap }}
      >
        {summary}
      </span>
    </div>
  );
}

export default TypedTitle;
