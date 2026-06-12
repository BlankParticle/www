import fs from "node:fs";
import React from "react";
import { ImageResponse } from "@takumi-rs/image-response";

const DOMAIN = "blankparticle.com";
const PROFILE_PATH = new URL("../static/me.png", import.meta.url);
const profileDataUrl = `data:image/png;base64,${fs.readFileSync(PROFILE_PATH).toString("base64")}`;

const DEVICE_PIXEL_RATIO = 2.5;
const WIDTH = 1200;
const HEIGHT = 630;

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

const OgImage = () => (
  <div
    style={{
      width: WIDTH,
      height: HEIGHT,
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      color: ink.text,
      backgroundColor: ink.paper,
      fontFamily: "Karla",
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "0 64px",
        padding: "26px 0",
        borderBottom: `3px dashed rgba(104, 45, 172, 0.35)`,
        fontSize: 22,
        fontWeight: 700,
        letterSpacing: 4,
        color: ink.violet,
      }}
    >
      <div>{DOMAIN.toUpperCase()}</div>
      <div style={{ color: ink.orangeDeep }}>EST. 2005 · 100% HANDMADE</div>
    </div>

    <div
      style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 64px",
        gap: 60,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 680 }}>
        <div style={{ fontSize: 30, fontWeight: 700, color: ink.muted, letterSpacing: 1 }}>Hello, I'm</div>
        <div
          style={{
            fontFamily: "Bricolage Grotesque",
            fontSize: 110,
            fontWeight: 800,
            lineHeight: 0.95,
            letterSpacing: -2,
            color: ink.violet,
          }}
        >
          Rahul Mishra
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 30, color: ink.muted }}>
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
        <div style={{ fontSize: 30, color: ink.muted }}>
          software developer at <span style={{ fontWeight: 700, color: ink.orangeDeep }}>Iterate</span>
        </div>
      </div>

      <div style={{ position: "relative", display: "flex", transform: "rotate(2deg)" }}>
        <img
          src={profileDataUrl}
          style={{
            width: 300,
            height: 300,
            objectFit: "cover",
            borderRadius: 32,
            border: `10px solid ${ink.paper}`,
            boxShadow: `0 0 0 4px ${ink.text}`,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -18,
            left: 70,
            backgroundColor: ink.lime,
            border: `4px solid ${ink.text}`,
            padding: "4px 14px",
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: 3,
            transform: "rotate(-3deg)",
          }}
        >
          THAT'S ME
        </div>
      </div>
    </div>
  </div>
);

const response = new ImageResponse(<OgImage />, {
  width: WIDTH * DEVICE_PIXEL_RATIO,
  height: HEIGHT * DEVICE_PIXEL_RATIO,
  format: "webp",
  fonts,
  headers: {
    "Content-Type": "image/webp",
  },
  devicePixelRatio: DEVICE_PIXEL_RATIO,
});

const arrayBuffer = await response.arrayBuffer();
const outputPath = new URL("../static/og-image.webp", import.meta.url);
fs.writeFileSync(outputPath, Buffer.from(arrayBuffer));
console.log(outputPath.pathname);
