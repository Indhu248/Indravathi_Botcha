import React, { useState } from "react";
import clsx from "clsx"; // Optional for handling classNames

const ColorPicker = () => {
  const color_list = [
    { color: "red", name: "Red" },
    { color: "orange", name: "Orange" },
    { color: "amber", name: "Amber" },
    { color: "yellow", name: "Yellow" },
    { color: "lime", name: "Lime" },
    { color: "green", name: "Green" },
    { color: "emerald", name: "Emerald" },
    { color: "teal", name: "Teal" },
    { color: "cyan", name: "Cyan" },
    { color: "sky", name: "Sky" },
    { color: "blue", name: "Blue" },
    { color: "indigo", name: "Indigo" },
    { color: "violet", name: "Violet" },
    { color: "purple", name: "Purple" },
    { color: "fuchsia", name: "Fuchsia" },
    { color: "pink", name: "Pink" },
    { color: "rose", name: "Rose" },
    { color: "slate", name: "Slate" },
    { color: "gray", name: "Gray" },
    { color: "zinc", name: "Zinc" },
    { color: "neutral", name: "Neutral" },
    { color: "stone", name: "Stone" },
    { color: "black", name: "Black" },
    { color: "white", name: "White" }
  ];

  const [active, setActive] = useState(false);
  const [color, setColor] = useState("red");

  return (
    <div className="relative">
      {/* Main Color Button */}
      <button
        onClick={() => setActive(!active)}
        className={clsx(
          "h-10 w-10 flex justify-center items-center rounded-lg border transition-all",
          `bg-${color}-500`
        )}
      ></button>

      {/* Dropdown */}
      {active && (
        <ul className="absolute mt-2 bg-white border p-2 shadow-md rounded-lg w-40 max-h-60 overflow-y-auto">
          {color_list.map((clr, index) => (
            <li key={index} className="mb-1">
              <button
                onClick={() => {
                  setColor(clr.color);
                  setActive(false); // Close dropdown after selection
                }}
                className={clsx(
                  `px-4 py-1 rounded-md block w-full text-center`,
                  `bg-${clr.color}-500 text-white`
                )}
              >
                {clr.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ColorPicker;

