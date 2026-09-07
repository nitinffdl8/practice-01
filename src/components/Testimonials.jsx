import { useEffect, useState } from "react";
import { Box, Container, Typography, Stack, Avatar, Rating } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import CloudField from "./CloudField.jsx";

const TESTIMONIALS = [
  {
    name: "Ritika Sharma",
    role: "Founder, Aurora Skincare",
    rating: 5,
    review: "KLOUTZ didn't just run our ads — they rebuilt how we think about growth. Our ROAS tripled in one quarter.",
  },
  {
    name: "Devraj Malhotra",
    role: "CEO, Nimbus Fintech",
    rating: 5,
    review: "The rebrand gave us a voice our category didn't have yet. Every touchpoint finally feels like one company.",
  },
  {
    name: "Ananya Rao",
    role: "Marketing Head, Verdant Foods",
    rating: 5,
    review: "Transparent reporting, sharp creative, and a team that treats our budget like their own. Rare combination.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const t = TESTIMONIALS[index];

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        py: { xs: 10, md: 14 },
        background: "linear-gradient(180deg, #16284b, #0b1730)",
        overflow: "hidden",
      }}
    >
      <CloudField variant="dark" />
      <Container maxWidth="sm" sx={{ position: "relative", zIndex: 1 }}>
        <Stack alignItems="center" textalign="center" spacing={1} sx={{ mb: 6 }}>
          <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "2.6rem" }, color: "#fff" }}>
            Trusted by brands that fly
          </Typography>
        </Stack>

        <Box sx={{ minHeight: 260, position: "relative" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5 }}
            >
              <Box
                className="glass"
                sx={{
                  borderRadius: 5,
                  p: { xs: 4, md: 5 },
                  textalign: "center",
                }}
              >
                <FormatQuoteIcon sx={{ color: "#22d3ee", fontSize: 36, mb: 1 }} />
                <Typography variant="h6" sx={{ color: "#fff", fontWeight: 400, mb: 3 }}>
                  “{t.review}”
                </Typography>
                <Stack alignItems="center" spacing={1}>
                  <Avatar sx={{ width: 52, height: 52, bgcolor: "#22d3ee", color: "#0a1220", fontWeight: 700 }}>
                    {t.name.charAt(0)}
                  </Avatar>
                  <Typography sx={{ color: "#fff", fontWeight: 600 }}>{t.name}</Typography>
                  <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.6)" }}>
                    {t.role}
                  </Typography>
                  <Rating value={t.rating} readOnly size="small" sx={{ color: "#22d3ee" }} />
                </Stack>
              </Box>
            </motion.div>
          </AnimatePresence>
        </Box>

        <Stack direction="row" justifyContent="center" spacing={1} sx={{ mt: 4 }}>
          {TESTIMONIALS.map((_, i) => (
            <Box
              key={i}
              onClick={() => setIndex(i)}
              sx={{
                width: i === index ? 22 : 8,
                height: 8,
                borderRadius: 999,
                cursor: "pointer",
                background: i === index ? "#22d3ee" : "rgba(255,255,255,0.3)",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
