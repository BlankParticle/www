import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
import springPlugin from "tailwindcss-spring";

const applyGlowStyles = plugin.withOptions(
  () =>
    ({ matchUtilities, theme }) => (
      matchUtilities(
        {
          drama: (value) => ({
            "--tw-drop-shadow": `drop-shadow(0px 0px var(--drama-spread) ${value})`,
            filter:
              "var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)",
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
          values: flattenColorPalette(theme("colors")),
          type: "color",
        },
      ),
      matchUtilities(
        {
          drama: (spread) => {
            const spreadNumber = Number(spread.replace("rem", ""));
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
          values: theme("margin"),
        },
      )
    ),
);

export default {
  darkMode: "class",
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["JetBrains Mono Variable", ...fontFamily.mono],
      },
    },
  },
  plugins: [applyGlowStyles, springPlugin],
} satisfies Config;
