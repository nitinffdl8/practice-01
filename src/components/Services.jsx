import { Box, Container, Grid, Typography, Stack, Chip } from "@mui/material";
import { motion } from "framer-motion";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ShareIcon from "@mui/icons-material/Share";
import SpeedIcon from "@mui/icons-material/Speed";
import DiamondIcon from "@mui/icons-material/Diamond";
import ArticleIcon from "@mui/icons-material/Article";
import CodeIcon from "@mui/icons-material/Code";
import PaletteIcon from "@mui/icons-material/Palette";
import MovieIcon from "@mui/icons-material/Movie";
import ServiceCard from "./ServiceCard.jsx";

export const SERVICES = [
  {
    icon: TrendingUpIcon,
    title: "SEO",
    description: "Climb the rankings with technical, content, and authority strategies built to compound.",
  },
  {
    icon: ShareIcon,
    title: "Social Media Marketing",
    description: "Scroll-stopping content and community strategy that turns followers into customers.",
  },
  {
    icon: SpeedIcon,
    title: "Performance Marketing",
    description: "Paid media engineered around ROI — every rupee tracked, tested, and optimized.",
  },
  {
    icon: DiamondIcon,
    title: "Brand Strategy",
    description: "Positioning, voice, and identity systems that make your brand impossible to ignore.",
  },
  {
    icon: ArticleIcon,
    title: "Content Marketing",
    description: "Editorial and storytelling that builds trust long before the first sales call.",
  },
  {
    icon: CodeIcon,
    title: "Website Development",
    description: "Fast, conversion-first websites built on modern stacks — like the one you're on.",
  },
  {
    icon: PaletteIcon,
    title: "Graphic Design",
    description: "Visual systems — from social kits to campaign art — that carry your brand consistently.",
  },
  {
    icon: MovieIcon,
    title: "Video Editing",
    description: "Cinematic edits for ads, reels, and brand films that hold attention and drive action.",
  },
];

export default function Services({ limit, showHeader = true, columns = 4 }) {
  const list = limit ? SERVICES.slice(0, limit) : SERVICES;

  return (
    <Box component="section" sx={{ py: { xs: 10, md: 14 }, background: "#fbfcfe" }}>
      <Container maxWidth="lg">
        {showHeader && (
          <Stack spacing={2} alignItems="center" textAlign="center" sx={{ mb: 8 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Chip
                label="WHAT WE DO"
                sx={{
                  background: "rgba(34,211,238,0.12)",
                  color: "#0e7a91",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  mb: 2,
                }}
              />
              <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "2.6rem" }, color: "primary.main" }}>
                Full-stack growth,{" "}
                <Box component="span" sx={{ color: "#22d3ee" }}>
                  one launchpad
                </Box>
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", maxWidth: 600, mx: "Auto", mt: 2 }}
              >
                Every discipline your brand needs to leave the ground and stay airborne —
                under one roof, one team, one strategy.
              </Typography>
            </motion.div>
          </Stack>
        )}

        <Grid container spacing={3}>
          {list.map((service, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 12 / columns }} key={service.title}>
              <ServiceCard {...service} index={i} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}