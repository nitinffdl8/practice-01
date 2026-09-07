import { Box, Container, Grid, Typography, Stack, Chip, Button } from "@mui/material";
import { motion } from "framer-motion";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const PROJECTS = [
  { category: "Performance Marketing", title: "Aurora Skincare — 4.2x ROAS in 90 days", color: "#22d3ee" },
  { category: "Brand Strategy", title: "Nimbus Fintech — Full identity relaunch", color: "#7fe8f7" },
  { category: "SEO & Content", title: "Verdant Foods — 310% organic traffic growth", color: "#16284b" },
  { category: "Website Development", title: "Orbit Fitness — Conversion-first rebuild", color: "#22d3ee" },
];

export default function Portfolio() {
  return (
    <Box component="section" sx={{ py: { xs: 10, md: 14 }, background: "#f4f8fb" }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "flex-end" }}
          spacing={3}
          sx={{ mb: 7 }}
        >
          <Box>
            <Chip
              label="SELECTED WORK"
              sx={{ background: "rgba(34,211,238,0.12)", color: "#0e7a91", fontWeight: 700, mb: 2 }}
            />
            <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "2.6rem" }, color: "primary.main" }}>
              Launches that landed
            </Typography>
          </Box>
          <Button variant="outlined" endIcon={<ArrowOutwardIcon />} sx={{ borderColor: "#16284b", color: "#16284b" }}>
            View All Projects
          </Button>
        </Stack>

        <Grid container spacing={3}>
          {PROJECTS.map((p, i) => (
            <Grid item xs={12} sm={6} key={p.title}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Box
                  sx={{
                    position: "relative",
                    borderRadius: 5,
                    overflow: "hidden",
                    height: 320,
                    cursor: "pointer",
                    background: `linear-gradient(150deg, ${p.color}22, #16284b)`,
                    "&:hover .thumb": { transform: "scale(1.08)" },
                    "&:hover .cta": { opacity: 1, transform: "translateY(0)" },
                  }}
                >
                  <Box
                    className="thumb"
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background: `radial-gradient(circle at 70% 20%, ${p.color}55, transparent 60%), linear-gradient(160deg, #0b1730, #16284b)`,
                      transition: "transform 0.6s cubic-bezier(.2,.8,.2,1)",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      p: 4,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      background: "linear-gradient(0deg, rgba(0,0,0,0.55), transparent 60%)",
                    }}
                  >
                    <Typography variant="overline" sx={{ color: "#22d3ee", mb: 1 }}>
                      {p.category}
                    </Typography>
                    <Typography variant="h6" sx={{ color: "#fff", mb: 2, maxWidth: 320 }}>
                      {p.title}
                    </Typography>
                    <Button
                      className="cta"
                      size="small"
                      variant="contained"
                      color="primary"
                      endIcon={<ArrowOutwardIcon fontSize="small" />}
                      sx={{
                        alignSelf: "flex-start",
                        opacity: 0,
                        transform: "translateY(8px)",
                        transition: "all 0.3s ease",
                      }}
                    >
                      View Project
                    </Button>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
