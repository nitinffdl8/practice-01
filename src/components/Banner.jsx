import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Container, Typography, Button, Stack, Grid } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloudField from "./CloudField.jsx";
import Counter from "./Counter.jsx";
import TypingText from "./TypingText.jsx";
import VideoModal from "./VideoModal.jsx";

const SERVICE_WORDS = [
  "SEO.",
  "Performance Marketing.",
  "Brand Strategy.",
  "Content.",
  "Web Development.",
];

/**
 * Banner — the shared hero used by every page.
 * variant="home" renders the full launch sequence (rocket, parallax, counters).
 * variant="inner" renders a shorter atmosphere header for About/Services/Blog,
 * each with its own eyebrow/title/subtitle so no two pages read the same.
 */
export default function Banner({
  variant = "inner",
  eyebrow,
  title,
  subtitle,
  primaryCta,
  primaryCtaLink = "/contact",
  secondaryCta,
  stats,
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const rocketY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const cloudY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const [videoOpen, setVideoOpen] = useState(false);

  const isHome = variant === "home";

  // Mouse-move parallax — subtle drift, only meaningful on the home hero
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    if (!isHome) return;
    const { innerWidth, innerHeight } = window;
    setMouse({
      x: (e.clientX / innerWidth - 0.5) * 2,
      y: (e.clientY / innerHeight - 0.5) * 2,
    });
  };

  return (
    <Box
      ref={ref}
      onMouseMove={handleMouseMove}
      sx={{
        position: "relative",
        minHeight: isHome ? { xs: "92vh", md: "100vh" } : { xs: "56vh", md: "64vh" },
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background:
          "linear-gradient(180deg, #0b1730 0%, #16284b 55%, #1c3a63 100%)",
        pt: { xs: 12, md: 10 },
      }}
    >
      <CloudField variant="dark" density={isHome ? "dense" : "normal"} />

      {/* ambient center glow */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(34,211,238,0.22), transparent 60%)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: isHome ? 7 : 12 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {eyebrow && (
                <Typography
                  variant="overline"
                  sx={{ color: "#22d3ee", mb: 2, display: "block" }}
                >
                  {eyebrow}
                </Typography>
              )}
              <Typography
                variant={isHome ? "h1" : "h2"}
                sx={{
                  color: "#fff",
                  mb: 3,
                  fontSize: isHome
                    ? { xs: "2.6rem", sm: "3.4rem", md: "4.2rem" }
                    : { xs: "2.1rem", sm: "2.6rem", md: "3rem" },
                  lineHeight: 1.08,
                }}
              >
                {title}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "rgba(255,255,255,0.72)",
                  maxWidth: 560,
                  mb: 4,
                  fontSize: { xs: "1rem", md: "1.15rem" },
                }}
              >
                {subtitle}
              </Typography>

              {isHome && (
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(255,255,255,0.6)",
                    mb: 4,
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: "0.95rem",
                  }}
                >
                  What we launch: <TypingText words={SERVICE_WORDS} />
                </Typography>
              )}

              {(primaryCta || secondaryCta) && (
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  {primaryCta && (
                    <Button
                      component={Link}
                      to={primaryCtaLink}
                      variant="contained"
                      color="primary"
                      size="large"
                      endIcon={<ArrowForwardIcon />}
                    >
                      {primaryCta}
                    </Button>
                  )}
                  {secondaryCta && (
                    <Button
                      onClick={() => setVideoOpen(true)}
                      variant="outlined"
                      size="large"
                      startIcon={<PlayCircleOutlineIcon />}
                      sx={{ color: "#fff", borderColor: "rgba(255,255,255,0.4)" }}
                    >
                      {secondaryCta}
                    </Button>
                  )}
                </Stack>
              )}
            </motion.div>

            {isHome && stats && (
              <Grid container spacing={3} sx={{ mt: { xs: 4, md: 7 } }}>
                {stats.map((s) => (
                  <Grid size={{ xs: 6, sm: 3 }} key={s.label}>
                    <Counter value={s.value} suffix={s.suffix} label={s.label} />
                  </Grid>
                ))}
              </Grid>
            )}
          </Grid>

          {isHome && (
            <Grid size={{ xs: 12, md: 5 }}>
              <RocketScene rocketY={rocketY} cloudY={cloudY} mouse={mouse} />
            </Grid>
          )}
        </Grid>
      </Container>

      {isHome && (
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          style={{
            position: "absolute",
            bottom: 28,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 2,
          }}
        >
          <KeyboardArrowDownIcon sx={{ color: "rgba(255,255,255,0.5)", fontSize: 34 }} />
        </motion.div>
      )}

      {secondaryCta && (
        <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} src="/showreel.mp4" />
      )}
    </Box>
  );
}

function RocketScene({ rocketY, cloudY, mouse = { x: 0, y: 0 } }) {
  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: 320, md: 460 },
        transition: "transform 0.2s ease-out",
        transform: `translate(${mouse.x * 8}px, ${mouse.y * 8}px)`,
      }}
    >
      {/* orbit ring */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: { xs: 260, md: 380 },
          height: { xs: 260, md: 380 },
          borderRadius: "50%",
          border: "1px dashed rgba(255,255,255,0.18)",
          transform: "translate(-50%, -50%)",
        }}
      />

      <motion.div
        style={{
          y: rocketY,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        animate={{ rotate: [-6, 2, -6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Box sx={{ position: "relative", width: 130, textAlign: "center" }}>
          <Box
            sx={{
              fontSize: { xs: 90, md: 120 },
              filter: "drop-shadow(0 0 30px rgba(34,211,238,0.6))",
              lineHeight: 1,
            }}
          >
            🚀
          </Box>
          {/* smoke trail */}
          {[0, 1, 2].map((i) => (
            <Box
              key={i}
              sx={{
                position: "absolute",
                bottom: -10 - i * 14,
                left: "50%",
                transform: "translateX(-50%)",
                width: 26 - i * 4,
                height: 26 - i * 4,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.35)",
                animation: `smokePuff 2.4s ease-out infinite`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </Box>
      </motion.div>

      {/* floating cloud puffs around rocket */}
      <motion.div
        style={{ y: cloudY, position: "absolute", top: "18%", left: "6%" }}
        className="animate-float"
      >
        <Box sx={{ fontSize: 46, opacity: 0.85 }}>☁️</Box>
      </motion.div>
      <motion.div
        style={{ y: cloudY, position: "absolute", bottom: "12%", right: "4%" }}
        className="animate-float-slow"
      >
        <Box sx={{ fontSize: 60, opacity: 0.7 }}>☁️</Box>
      </motion.div>
      <Box
        className="animate-drift"
        sx={{ position: "absolute", top: "6%", right: "18%", fontSize: 30, opacity: 0.5 }}
      >
        ☁️
      </Box>
    </Box>
  );
}