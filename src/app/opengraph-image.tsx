import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const dynamic = "force-static";
export const alt = `${site.name} | ${site.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** 1200×630 share card (Google Discover, WhatsApp, LinkedIn, X). */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 90px",
          color: "#f8f8f2",
          background: "linear-gradient(135deg, #1e1f29 0%, #282a36 55%, #3b2d5c 100%)",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#ff79c6" }}>ziadhosny.com</div>
        <div style={{ display: "flex", fontSize: 130, fontWeight: 900, lineHeight: 1, marginTop: 20, letterSpacing: -4 }}>
          {site.name}
        </div>
        <div style={{ display: "flex", fontSize: 48, color: "#bd93f9", marginTop: 24 }}>{site.title}</div>
        <div style={{ display: "flex", fontSize: 30, color: "#a9b0d4", marginTop: 28 }}>
          Node.js · NestJS · PostgreSQL · React · Next.js
        </div>
      </div>
    ),
    size,
  );
}
