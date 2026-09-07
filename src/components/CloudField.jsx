import { Box } from "@mui/material";

/**
 * CloudField
 * Purely decorative atmosphere layer — floating cloud blobs, soft stars,
 * and gradient glows. Used behind dark "sky" sections (hero, CTA).
 * variant: "hero" | "dark" | "light"
 */
export default function CloudField({ variant = "dark", density = "normal" }) {
  const stars = density === "dense" ? 26 : 16;

  return (
    <Box
      aria-hidden
      sx={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {/* Soft cyan glow blobs */}
      <Box
        className="animate-float-slow"
        sx={{
          position: "absolute",
          top: "-10%",
          left: "-8%",
          width: 480,
          height: 480,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(34,211,238,0.28) 0%, transparent 70%)",
          filter: "blur(10px)",
        }}
      />
      <Box
        className="animate-drift"
        sx={{
          position: "absolute",
          bottom: "-15%",
          right: "-10%",
          width: 560,
          height: 560,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(34,211,238,0.18) 0%, transparent 70%)",
          filter: "blur(10px)",
        }}
      />

      {/* Cloud blobs (layered ellipses = a soft cloud silhouette) */}
      {variant !== "light" && (
        <>
          <CloudShape top="18%" left="6%" scale={1} opacity={0.1} duration={7} />
          <CloudShape top="62%" left="82%" scale={1.4} opacity={0.08} duration={9} />
          <CloudShape top="8%" left="70%" scale={0.7} opacity={0.12} duration={6.5} />
        </>
      )}

      {/* Twinkling stars */}
      {variant === "dark" &&
        Array.from({ length: stars }).map((_, i) => (
          <Box
            key={i}
            sx={{
              position: "absolute",
              top: `${(i * 37) % 100}%`,
              left: `${(i * 53) % 100}%`,
              width: i % 3 === 0 ? 3 : 2,
              height: i % 3 === 0 ? 3 : 2,
              borderRadius: "50%",
              background: "#fff",
              animation: `twinkle ${3 + (i % 4)}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
    </Box>
  );
}

function CloudShape({ top, left, scale = 1, opacity = 0.1, duration = 7 }) {
  return (
    <Box
      sx={{
        position: "absolute",
        top,
        left,
        width: 220 * scale,
        height: 70 * scale,
        animation: `floatX ${duration}s ease-in-out infinite`,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          borderRadius: "999px",
          background: `rgba(255,255,255,${opacity})`,
          filter: "blur(6px)",
        }}
      />
    </Box>
  );
}
