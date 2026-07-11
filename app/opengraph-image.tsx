import { ImageResponse } from "next/og";

export const alt = "Feras Harah — Software Engineering student";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "stretch",
        background: "#0b0d12",
        color: "#f3f4f6",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Arial, sans-serif",
        height: "100%",
        justifyContent: "space-between",
        padding: "70px 76px",
        position: "relative",
        width: "100%",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span
          style={{
            border: "1px solid #38405c",
            borderRadius: 99,
            color: "#8994ff",
            fontSize: 21,
            letterSpacing: "0.12em",
            padding: "12px 20px",
            textTransform: "uppercase",
          }}
        >
          Software Engineering · QUB
        </span>
        <span style={{ color: "#8994ff", fontSize: 34 }}>FH.</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ fontSize: 112, fontWeight: 700, letterSpacing: "-0.07em", lineHeight: 0.92 }}>
          Feras Harah.
        </span>
        <span style={{ color: "#a5aab5", fontSize: 28, marginTop: 32 }}>
          Building skills, useful software, and a space to share the journey.
        </span>
      </div>
      <div style={{ background: "#8994ff", height: 5, width: 130 }} />
    </div>,
    size,
  );
}
