import { useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useInView } from "framer-motion";

export default function Counter({ value, suffix = "", label, light = true }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <Box ref={ref} sx={{ textalign: "center" }}>
      <Typography
        variant="h3"
        sx={{
          color: light ? "#fff" : "primary.main",
          fontWeight: 800,
        }}
      >
        {display}
        <Box component="span" sx={{ color: "#22d3ee" }}>
          {suffix}
        </Box>
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: light ? "rgba(255,255,255,0.65)" : "text.secondary",
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          mt: 0.5,
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}
