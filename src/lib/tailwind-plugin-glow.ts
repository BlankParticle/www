import plugin from "tailwindcss/plugin";

const applyGlowStyles = plugin.withOptions(
  () =>
    ({ matchUtilities, theme }) => (
      matchUtilities(
        {
          drama: (value) => ({
            "--tw-drop-shadow": `drop-shadow(0px 0px var(--drama-spread) ${value})`,
            filter: "var(--tw-drop-shadow)",
          }),
          "border-glow": (value) => ({
            "border-color": value,
            "box-shadow": `inset 0px 0px 0.5em 0px ${value}, 0px 0px 0.5em 0px ${value}`,
          }),
          "text-glow": (value) => ({
            "text-shadow": `0 0 0.125em ${value}, 0 0 0.45em ${value}`,
          }),
        },
        {
          values: theme("color"),
          type: "color",
        },
      ),
      matchUtilities(
        {
          drama: (spread) => {
            const spreadNumber = Number(spread.replace("rem", "")) || 0;
            const blur =
              spreadNumber <= 0.25
                ? `${spreadNumber * 15}rem`
                : spreadNumber <= 1
                  ? `${spreadNumber * 10}rem`
                  : `${spreadNumber * 7}rem`;

            return {
              "--drama-spread": spread,
              "--drama-blur": blur,
            };
          },
        },
        {
          values: theme("spacing"),
        },
      )
    ),
);

export default applyGlowStyles;
