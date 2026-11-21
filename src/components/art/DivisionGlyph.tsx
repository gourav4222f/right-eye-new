import type { DivisionSlug } from "@/data/services";
import { cn } from "@/lib/utils";

/**
 * Original geometric illustrations, one per service division.
 * `tone="dark"` draws on an ink background, `tone="light"` on mist.
 */
export function DivisionGlyph({
  slug,
  tone = "dark",
  className,
}: {
  slug: DivisionSlug;
  tone?: "dark" | "light";
  className?: string;
}) {
  const fg = tone === "dark" ? "#fefefe" : "#1d1d1d";
  const soft = tone === "dark" ? "rgb(254 254 254 / 0.16)" : "rgb(29 29 29 / 0.12)";
  const bg = tone === "dark" ? "#1d1d1d" : "#f2f2f2";
  const accent = "#f0460e";

  return (
    <svg viewBox="0 0 240 240" className={cn("block", className)} aria-hidden="true">
      <rect width="240" height="240" rx="28" fill={bg} />
      {slug === "digital-product-development" && (
        <g>
          <rect x="34" y="52" width="140" height="96" rx="10" fill="none" stroke={soft} strokeWidth="2" />
          <rect x="50" y="68" width="140" height="96" rx="10" fill={bg} stroke={fg} strokeWidth="2.5" />
          <line x1="50" y1="86" x2="190" y2="86" stroke={fg} strokeWidth="2" />
          <circle cx="62" cy="77" r="3" fill={accent} />
          <circle cx="72" cy="77" r="3" fill={soft} />
          <rect x="64" y="100" width="56" height="8" rx="4" fill={fg} />
          <rect x="64" y="116" width="84" height="6" rx="3" fill={soft} />
          <rect x="64" y="130" width="70" height="6" rx="3" fill={soft} />
          <rect x="150" y="120" width="52" height="88" rx="12" fill={accent} />
          <rect x="158" y="132" width="36" height="52" rx="5" fill={bg} />
          <circle cx="176" cy="196" r="4" fill={bg} />
        </g>
      )}
      {slug === "business-software-crm" && (
        <g>
          {[0, 1, 2, 3].map((col) => (
            <g key={col}>
              <rect x={34 + col * 46} y="46" width="38" height="8" rx="4" fill={col === 2 ? accent : fg} />
              {Array.from({ length: 4 - (col === 3 ? 2 : col === 2 ? 1 : 0) }, (_, row) => (
                <rect
                  key={row}
                  x={34 + col * 46}
                  y={66 + row * 34}
                  width="38"
                  height="26"
                  rx="6"
                  fill={col === 2 && row === 0 ? accent : "none"}
                  stroke={col === 2 && row === 0 ? accent : soft}
                  strokeWidth="2"
                />
              ))}
            </g>
          ))}
          <path d="M72 79 C 86 79, 84 79, 98 79" stroke={fg} strokeWidth="2" fill="none" strokeDasharray="3 4" />
          <path d="M118 79 C 132 79, 130 79, 144 79" stroke={fg} strokeWidth="2" fill="none" strokeDasharray="3 4" />
          <rect x="34" y="200" width="172" height="6" rx="3" fill={soft} />
          <rect x="34" y="200" width="108" height="6" rx="3" fill={accent} />
        </g>
      )}
      {slug === "digital-growth-marketing" && (
        <g>
          {[40, 70, 100, 130, 160].map((x, i) => (
            <rect key={x} x={x} y={190 - (i + 1) * 24} width="22" height={(i + 1) * 24} rx="5" fill={i === 4 ? accent : soft} />
          ))}
          <path d="M44 150 L80 124 L112 132 L150 90 L190 60" stroke={fg} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M174 58 L192 58 L192 76" stroke={fg} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="150" cy="90" r="6" fill={accent} />
          <line x1="34" y1="198" x2="206" y2="198" stroke={fg} strokeWidth="2" />
        </g>
      )}
      {slug === "cloud-hosting" && (
        <g>
          <path d="M70 92 a30 30 0 0 1 56 -14 a24 24 0 0 1 44 14 a20 20 0 0 1 -2 40 H76 a20 20 0 0 1 -6 -40Z" fill="none" stroke={fg} strokeWidth="2.5" />
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <rect x="56" y={146 + i * 24} width="128" height="18" rx="5" fill={i === 0 ? accent : "none"} stroke={i === 0 ? accent : soft} strokeWidth="2" />
              <circle cx="70" cy={155 + i * 24} r="3" fill={i === 0 ? bg : fg} />
              <rect x="82" y={153 + i * 24} width="40" height="4" rx="2" fill={i === 0 ? bg : soft} />
            </g>
          ))}
          <line x1="120" y1="132" x2="120" y2="146" stroke={fg} strokeWidth="2" strokeDasharray="3 3" />
        </g>
      )}
      {slug === "saas-development" && (
        <g>
          {Array.from({ length: 9 }, (_, i) => {
            const x = 48 + (i % 3) * 50;
            const y = 48 + Math.floor(i / 3) * 50;
            const on = i === 4;
            return (
              <rect key={i} x={x} y={y} width="40" height="40" rx="10" fill={on ? accent : "none"} stroke={on ? accent : i % 2 ? soft : fg} strokeWidth="2.5" />
            );
          })}
          <circle cx="120" cy="120" r="70" fill="none" stroke={soft} strokeWidth="1.5" strokeDasharray="2 6" />
        </g>
      )}
      {slug === "ai-automation" && (
        <g>
          {(
            [
              [60, 70], [60, 120], [60, 170],
              [120, 95], [120, 145],
              [180, 120],
            ] as const
          ).map(([x, y], i, arr) => (
            <g key={i}>
              {i < 3 &&
                [3, 4].map((j) => (
                  <line key={j} x1={x} y1={y} x2={arr[j]![0]} y2={arr[j]![1]} stroke={soft} strokeWidth="2" />
                ))}
              {(i === 3 || i === 4) && <line x1={x} y1={y} x2={180} y2={120} stroke={fg} strokeWidth="2" />}
            </g>
          ))}
          {(
            [
              [60, 70], [60, 120], [60, 170], [120, 95], [120, 145],
            ] as const
          ).map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="11" fill={bg} stroke={fg} strokeWidth="2.5" />
          ))}
          <circle cx="180" cy="120" r="20" fill={accent} />
          <path d="M180 108 l3 9 l9 3 l-9 3 l-3 9 l-3 -9 l-9 -3 l9 -3z" fill={bg} />
        </g>
      )}
    </svg>
  );
}
