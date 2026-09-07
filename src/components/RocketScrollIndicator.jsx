import { Box } from "@mui/material";
import { motion, useScroll, useSpring } from "framer-motion";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

/**
 * RocketScrollIndicator — KLOUTZ's signature element.
 * A fixed flight-path rail on the right edge of the viewport (desktop only).
 * A rocket climbs the dotted trail as the visitor scrolls the page,
 * literalising the brand promise: "we launch businesses into the sky."
 */
export default function RocketScrollIndicator() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    mass: 0.4,
  });

  return (
    <Box
      aria-hidden
      sx={{
        display: { xs: "none", md: "block" },
        position: "fixed",
        right: 22,
        top: "50%",
        transform: "translateY(-50%)",
        height: "46vh",
        width: 28,
        zIndex: 1200,
      }}
    >
      {/* dotted flight path */}
      <Box
        sx={{
          position: "absolute",
          left: "50%",
          top: 0,
          bottom: 0,
          width: 2,
          transform: "translateX(-50%)",
          background:
            "repeating-linear-gradient(180deg, rgba(22,40,75,0.35) 0px, rgba(22,40,75,0.35) 4px, transparent 4px, transparent 12px)",
        }}
      />

      {/* rocket, bottom = start (0%), top = finish (100%) */}
      <RocketRider progress={smoothProgress} />
    </Box>
  );
}

function RocketRider({ progress }) {
  return (
    <motion.div
      style={{
        position: "absolute",
        left: "50%",
        bottom: 0,
        translateX: "-50%",
        // progress 0 -> bottom (0%), progress 1 -> top (100%)
        y: progress.to ? progress.to((v) => `-${v * 100}%`) : 0,
      }}
    >
      <Box
        sx={{
          width: 30,
          height: 30,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #22d3ee, #16284b)",
          boxShadow: "0 0 18px rgba(34,211,238,0.7)",
          transform: "rotate(-45deg)",
        }}
      >
        <RocketLaunchIcon sx={{ color: "#fff", fontSize: 16 }} />
      </Box>
    </motion.div>
  );
}
