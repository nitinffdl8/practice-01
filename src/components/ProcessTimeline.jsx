import { Box, Container, Grid, Typography, Stack } from "@mui/material";
import { motion } from "framer-motion";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import EditNoteIcon from "@mui/icons-material/EditNote";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const STEPS = [
  { icon: TravelExploreIcon, title: "Discover", description: "We study your market, audience, and competitors to find the real opportunity." },
  { icon: EditNoteIcon, title: "Plan", description: "A launch strategy with clear channels, timelines, and measurable targets." },
  { icon: RocketLaunchIcon, title: "Launch", description: "Campaigns, creative, and code go live — built to perform from day one." },
  { icon: TrendingUpIcon, title: "Scale", description: "We double down on what works and compound your growth month over month." },
];

export default function ProcessTimeline() {
  return (
    <Box component="section" sx={{ py: { xs: 10, md: 14 }, background: "#fff" }}>
      <Container maxWidth="lg">
        <Stack spacing={2} alignItems="center" textalign="center" sx={{ mb: 9 }}>
          <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "2.6rem" }, color: "primary.main" }}>
            Our Flight Plan
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", maxWidth: 560 }}>
            A four-stage process, refined across every launch — because the sequence matters as much as the strategy.
          </Typography>
        </Stack>

        <Box sx={{ position: "relative" }}>
          {/* connecting line */}
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              position: "absolute",
              top: 34,
              left: "12%",
              right: "12%",
              height: 2,
              background: "repeating-linear-gradient(90deg, #22d3ee 0 8px, transparent 8px 16px)",
            }}
          />

          <Grid container spacing={5}>
            {STEPS.map((step, i) => (
              <Grid item xs={12} sm={6} md={3} key={step.title}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Stack alignItems="center" textalign="center" spacing={2}>
                    <Box
                      sx={{
                        position: "relative",
                        zIndex: 1,
                        width: 68,
                        height: 68,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "linear-gradient(135deg, #22d3ee, #16284b)",
                        boxShadow: "0 10px 30px rgba(34,211,238,0.35)",
                      }}
                    >
                      <step.icon sx={{ color: "#fff", fontSize: 28 }} />
                    </Box>
                    <Typography
                      variant="overline"
                      sx={{ color: "#22d3ee", fontWeight: 700 }}
                    >
                      Stage {i + 1}
                    </Typography>
                    <Typography variant="h6" sx={{ color: "primary.main" }}>
                      {step.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      {step.description}
                    </Typography>
                  </Stack>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
