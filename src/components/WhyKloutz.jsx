import { Box, Container, Grid, Typography, Stack } from "@mui/material";
import { motion } from "framer-motion";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import InsightsIcon from "@mui/icons-material/Insights";
import VerifiedIcon from "@mui/icons-material/Verified";

const REASONS = [
  {
    icon: RocketLaunchIcon,
    title: "Rocket Powered Growth",
    description: "Aggressive, momentum-first execution — we don't wait for perfect, we launch and iterate in orbit.",
  },
  {
    icon: LightbulbIcon,
    title: "Creative Thinking",
    description: "Ideas that break pattern. Campaigns built to be noticed, shared, and remembered.",
  },
  {
    icon: InsightsIcon,
    title: "Data Driven Marketing",
    description: "Every decision traced back to a number. Instinct informs, data decides.",
  },
  {
    icon: VerifiedIcon,
    title: "Transparent Reporting",
    description: "Real-time dashboards, no vanity metrics. You always know exactly where your budget flies.",
  },
];

export default function WhyKloutz() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 14 },
        background: "linear-gradient(180deg, #ffffff 0%, #f4f8fb 100%)",
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={2} alignItems="center" textAlign="center" sx={{ mb: 8 }}>
          <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "2.6rem" }, color: "primary.main" }}>
            Why{" "}
            <Box component="span" sx={{ color: "#22d3ee" }}>
              KLOUTZ
            </Box>
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", maxWidth: 560 }}>
            Four principles that separate a launch from a lift-off.
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {REASONS.map((r, i) => (
            <Grid size={{ xs: 12, sm: 6 }} key={r.title}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                style={{ height: "100%" }}
              >
                <Box
                  sx={{
                    height: "100%",
                    p: 4,
                    borderRadius: 5,
                    textAlign: "center",
                    background: "linear-gradient(155deg, #16284b, #0b1730)",
                    color: "#fff",
                    boxShadow: "0 15px 40px rgba(22,40,75,0.18)",
                  }}
                >
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      mx: "auto",
                      mb: 3,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "linear-gradient(135deg, rgba(34,211,238,0.25), rgba(255,255,255,0.05))",
                    }}
                  >
                    <r.icon sx={{ fontSize: 28, color: "#22d3ee" }} />
                  </Box>
                  <Typography variant="h6" sx={{ mb: 1.5 }}>
                    {r.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.65)" }}>
                    {r.description}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}