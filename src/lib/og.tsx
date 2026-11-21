import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

// Read once at module scope (static asset, same for every request).
const logoDataUrl = `data:image/png;base64,${readFileSync(join(process.cwd(), "public/brand/logo-og-light.png")).toString("base64")}`;

/** Branded social share card: official logo on graphite with the theme's orange glow. */
export function renderOgImage({ title, eyebrow }: { title: string; eyebrow?: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 72px",
          backgroundColor: "#0f0f0f",
          backgroundImage:
            "radial-gradient(circle at 88% 10%, rgba(240,70,14,0.85) 0%, rgba(240,70,14,0) 45%), radial-gradient(circle at 0% 100%, rgba(255,122,69,0.35) 0%, rgba(255,122,69,0) 40%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoDataUrl} alt="" height={78} style={{ height: 78 }} />
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {eyebrow ? <div style={{ fontSize: 28, color: "#ff7a45" }}>{eyebrow}</div> : null}
          <div style={{ fontSize: title.length > 60 ? 58 : 74, fontWeight: 700, lineHeight: 1.02, letterSpacing: -3, maxWidth: 1040 }}>
            {title}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, opacity: 0.85 }}>
          <span>{siteConfig.tagline}</span>
          <span>{siteConfig.contact.phoneDisplay}</span>
        </div>
      </div>
    ),
    ogSize,
  );
}
