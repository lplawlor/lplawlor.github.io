import { Typed } from "typed.ts";
import { useEffect, useState } from "react";

const typeOptions = {
  eraseDelay: { min: 75, max: 100 },
  perLetterDelay: { min: 70, max: 75 },
  errorMultiplier: 0,
  noSpecialCharErrors: true,
  locale: "en",
};

function TypedTitle({ className }: { className?: string }) {
  const [name, setName] = useState(" ");
  const [summary, setSummary] = useState(" ");

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
    <div className={className}>
      <span className="font-bold text-3xl md:text-4xl mb-2 md:mb-8 text-scarf-blue">
        {name}
      </span>
      <span className="font-bold text-2xl md:text-3xl text-zinc-100">
        {summary}
      </span>
    </div>
  );
}

export default TypedTitle;
