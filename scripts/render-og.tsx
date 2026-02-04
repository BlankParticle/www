import fs from "node:fs";
import React from "react";
import { ImageResponse } from "@takumi-rs/image-response";

const DOMAIN = "blankparticle.com";
const EMAIL = `hello@${DOMAIN}`;
const PROFILE_PATH = new URL("../static/me.png", import.meta.url);
const profileDataUrl = `data:image/png;base64,${fs.readFileSync(PROFILE_PATH).toString("base64")}`;

const DEVICE_PIXEL_RATIO = 2.5;
const WIDTH = 1200;
const HEIGHT = 630;

const readFont = (relativePath: string) => fs.readFileSync(new URL(relativePath, import.meta.url));

const fonts = [
  {
    name: "STIX Two Text",
    data: readFont("../node_modules/@fontsource/stix-two-text/files/stix-two-text-latin-700-normal.woff2"),
    style: "normal" as const,
    weight: 700,
  },
  {
    name: "STIX Two Text",
    data: readFont("../node_modules/@fontsource/stix-two-text/files/stix-two-text-latin-600-normal.woff2"),
    style: "normal" as const,
    weight: 600,
  },
  {
    name: "Source Sans 3",
    data: readFont("../node_modules/@fontsource/source-sans-3/files/source-sans-3-latin-400-normal.woff2"),
    style: "normal" as const,
    weight: 400,
  },
  {
    name: "Source Sans 3",
    data: readFont("../node_modules/@fontsource/source-sans-3/files/source-sans-3-latin-600-normal.woff2"),
    style: "normal" as const,
    weight: 600,
  },
  {
    name: "Caveat",
    data: readFont("../node_modules/@fontsource/caveat/files/caveat-latin-500-normal.woff2"),
    style: "normal" as const,
    weight: 500,
  },
];

const OgImage = () => (
  <div
    style={{
      width: WIDTH,
      height: HEIGHT,
      position: "relative",
      overflow: "hidden",
      boxSizing: "border-box",
      color: "#2a2a2a",
      backgroundColor: "#f7f0e8",
      backgroundImage:
        "radial-gradient(circle at 0% 0%, rgba(230, 211, 177, 0.6), transparent 58%), radial-gradient(circle at 100% 100%, rgba(125, 154, 124, 0.45), transparent 60%), linear-gradient(180deg, rgba(247, 240, 232, 1), rgba(239, 230, 218, 0.94))",
    }}
  >
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundImage:
          "linear-gradient(to bottom, rgba(42, 42, 42, 0.08) 0, rgba(42, 42, 42, 0.08) 2px, rgba(42, 42, 42, 0) 2px, rgba(42, 42, 42, 0) 34px)",
        backgroundSize: "100% 34px",
        backgroundRepeat: "repeat",
        opacity: 0.7,
      }}
    />

    <div
      style={{
        position: "relative",
        zIndex: 2,
        display: "flex",
        gap: 70,
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "70px 84px",
        boxSizing: "border-box",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 640 }}>
        <div
          style={{
            fontFamily: "Source Sans 3",
            fontSize: 24,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#6b645c",
          }}
        >
          {DOMAIN.toUpperCase()}
        </div>
        <div
          style={{
            fontFamily: "STIX Two Text",
            fontSize: 84,
            fontWeight: 700,
            lineHeight: 1.02,
            marginTop: 6,
          }}
        >
          Rahul Mishra
        </div>
        <div
          style={{
            fontFamily: "Source Sans 3",
            fontSize: 30,
            fontWeight: 600,
            color: "#6b645c",
          }}
        >
          Software Developer at Iterate
        </div>
        <div
          style={{
            fontFamily: "Source Sans 3",
            fontSize: 24,
            color: "#6b645c",
          }}
        >
          also known as @blankparticle
        </div>
        <div
          style={{
            fontFamily: "Caveat",
            fontSize: 36,
            fontWeight: 500,
            color: "#5f7d63",
            marginTop: 10,
          }}
        >
          {EMAIL}
        </div>
      </div>

      <div
        style={{
          width: 300,
          height: 360,
          background: "#ffffff",
          borderRadius: 24,
          border: "1px solid rgba(42, 42, 42, 0.12)",
          boxShadow: "0 20px 40px rgba(42, 42, 42, 0.2)",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: "rotate(-2deg)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -12,
            left: 60,
            right: 60,
            height: 22,
            borderRadius: 8,
            background: "rgba(230, 211, 177, 0.7)",
            border: "1px solid rgba(42, 42, 42, 0.12)",
          }}
        />
        <div
          style={{
            width: 210,
            height: 210,
            borderRadius: 999,
            background: "rgba(125, 154, 124, 0.12)",
            border: "3px solid rgba(95, 125, 99, 0.65)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <img
            src={profileDataUrl}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
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
