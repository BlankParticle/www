import fs from "node:fs";
import React from "react";
import { ImageResponse } from "@takumi-rs/image-response";

const PROFILE_PATH = new URL("../static/me.png", import.meta.url);
const profileDataUrl = `data:image/png;base64,${fs.readFileSync(PROFILE_PATH).toString("base64")}`;

const DEVICE_PIXEL_RATIO = 2.5;
// 3:1, matching the previous Banner.png aspect ratio
const WIDTH = 1280;
const HEIGHT = 426;

// hex versions of the OKLCH tokens in app.css
const ink = {
  paper: "#f8f9f5",
  text: "#292333",
  muted: "#5a5467",
  violet: "#682dac",
  orange: "#f3680f",
  orangeDeep: "#ae3200",
  lime: "#ccf77a",
};

const noiseSvg = `<svg xmlns='http://www.w3.org/2000/svg' width='${WIDTH}' height='${HEIGHT}'>
  <rect width='100%' height='100%' fill='${ink.paper}'/>
  <filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/></filter>
  <rect width='100%' height='100%' filter='url(#n)' opacity='0.07'/>
</svg>`;
const noiseDataUrl = `data:image/svg+xml;base64,${Buffer.from(noiseSvg).toString("base64")}`;

const readFont = (relativePath: string) => fs.readFileSync(new URL(relativePath, import.meta.url));

const fonts = [
  {
    name: "Bricolage Grotesque",
    data: readFont("../node_modules/@fontsource/bricolage-grotesque/files/bricolage-grotesque-latin-800-normal.woff2"),
    style: "normal" as const,
    weight: 800,
  },
  {
    name: "Karla",
    data: readFont("../node_modules/@fontsource/karla/files/karla-latin-400-normal.woff2"),
    style: "normal" as const,
    weight: 400,
  },
  {
    name: "Karla",
    data: readFont("../node_modules/@fontsource/karla/files/karla-latin-700-normal.woff2"),
    style: "normal" as const,
    weight: 700,
  },
];

const Tag = ({ label, color }: { label: string; color: string }) => (
  <span
    style={{
      backgroundColor: color,
      color: ink.text,
      fontWeight: 700,
      fontSize: 24,
      padding: "4px 14px",
      border: `3px solid ${ink.text}`,
    }}
  >
    {label}
  </span>
);

const Banner = () => (
  <div
    style={{
      width: WIDTH,
      height: HEIGHT,
      position: "relative",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 80px",
      gap: 48,
      color: ink.text,
      backgroundColor: ink.paper,
      backgroundImage: `url("${noiseDataUrl}")`,
      backgroundSize: `${WIDTH}px ${HEIGHT}px`,
      fontFamily: "Karla",
    }}
  >
    <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 760 }}>
      <div style={{ fontSize: 26, fontWeight: 700, color: ink.muted, letterSpacing: 1 }}>Hello, I'm</div>
      <div
        style={{
          fontFamily: "Bricolage Grotesque",
          fontSize: 92,
          fontWeight: 800,
          lineHeight: 0.95,
          letterSpacing: -2,
          color: ink.violet,
        }}
      >
        Rahul Mishra
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 26, color: ink.muted }}>
        <span>also known as</span>
        <span
          style={{
            backgroundColor: ink.lime,
            color: ink.text,
            fontWeight: 700,
            padding: "2px 10px",
            transform: "rotate(-1deg)",
          }}
        >
          @blankparticle
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 12 }}>
        <Tag label="TypeScript" color={ink.lime} />
        <Tag label="Cloudflare" color="#ffffff" />
        <Tag label="AI" color={ink.lime} />
      </div>
    </div>

    <div style={{ position: "relative", display: "flex", transform: "rotate(2deg)", marginRight: 8 }}>
      <img
        src={profileDataUrl}
        style={{
          width: 240,
          height: 240,
          objectFit: "cover",
          borderRadius: 28,
          border: `8px solid ${ink.paper}`,
          boxShadow: `0 0 0 4px ${ink.text}`,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -16,
          left: 58,
          backgroundColor: ink.lime,
          border: `4px solid ${ink.text}`,
          padding: "4px 14px",
          fontSize: 20,
          fontWeight: 700,
          letterSpacing: 3,
          transform: "rotate(-3deg)",
        }}
      >
        THAT'S ME
      </div>
    </div>
  </div>
);

const response = new ImageResponse(<Banner />, {
  width: WIDTH * DEVICE_PIXEL_RATIO,
  height: HEIGHT * DEVICE_PIXEL_RATIO,
  format: "png",
  fonts,
  headers: {
    "Content-Type": "image/png",
  },
  devicePixelRatio: DEVICE_PIXEL_RATIO,
});

const arrayBuffer = await response.arrayBuffer();
const outputPath = new URL("../../BlankParticle/Banner.png", import.meta.url);
fs.writeFileSync(outputPath, Buffer.from(arrayBuffer));
console.log(outputPath.pathname);
