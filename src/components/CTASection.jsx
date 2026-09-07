import { Box, Container, Typography, Button, Stack } from "@mui/material";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloudField from "./CloudField.jsx";

export default function CTASection() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        py: { xs: 10, md: 14 },
        overflow: "hidden",
        background: "linear-gradient(120deg, #0b1730 0%, #16284b 45%, #0c4f63 100%)",
        backgroundSize: "200% 200%",
        animation: "gradientShift 12s ease infinite",
      }}
    >
      <CloudField variant="dark" />

      {/* rocket silhouette */}
      <Box
        aria-hidden
        className="animate-float-slow"
        sx={{
          position: "absolute",
          right: { xs: "5%", md: "10%" },
          bottom: { xs: "-6%", md: "-10%" },
          fontSize: { xs: 120, md: 200 },
          opacity: 0.18,
          transform: "rotate(35deg)",
        }}
      >
        🚀
      </Box>

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1, textalign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            sx={{ color: "#fff", fontSize: { xs: "2.1rem", md: "3rem" }, mb: 2 }}
          >
            Ready to launch your brand
            <Box component="span" sx={{ color: "#22d3ee" }}>
              {" "}
              beyond limits?
            </Box>
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "rgba(255,255,255,0.72)", maxWidth: 520, mx: "auto", mb: 5 }}
          >
            Tell us where your brand is today. We'll show you the flight path to where it could be.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
            <Button variant="contained" color="primary" size="large" endIcon={<ArrowForwardIcon />}>
              Start Your Launch
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{ color: "#fff", borderColor: "rgba(255,255,255,0.4)" }}
            >
              Book a Strategy Call
            </Button>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
}
