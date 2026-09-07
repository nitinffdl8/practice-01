import { Box, Container, Grid, Typography, Stack, Button } from "@mui/material";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Banner from "../components/Banner.jsx";
import Services from "../components/Services.jsx";
import WhyKloutz from "../components/WhyKloutz.jsx";
import ProcessTimeline from "../components/ProcessTimeline.jsx";
import Portfolio from "../components/Portfolio.jsx";
import Testimonials from "../components/Testimonials.jsx";
import BlogCard from "../components/BlogCard.jsx";
import CTASection from "../components/CTASection.jsx";
import { POSTS } from "./Blog.jsx";

const STATS = [
  { value: 180, suffix: "+", label: "Clients" },
  { value: 340, suffix: "+", label: "Projects" },
  { value: 6, suffix: "x", label: "Avg ROI" },
  { value: 9, suffix: "+", label: "Years" },
];

export default function Home() {
  return (
    <Box>
      <Banner
        variant="home"
        eyebrow="KLOUTZ DIGITAL MARKETING"
        title="Launch Your Brand Beyond Limits"
        subtitle="We combine strategy, creative, and performance marketing to send ambitious brands past the atmosphere — and keep them there."
        primaryCta="Start Your Launch"
        secondaryCta="Watch Showreel"
        stats={STATS}
      />

      <Services limit={6} columns={2} />
      <WhyKloutz />
      <ProcessTimeline />
      <Portfolio />
      <Testimonials />

      {/* Blog preview */}
      <Box component="section" sx={{ py: { xs: 10, md: 14 }, background: "#fff" }}>
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", sm: "flex-end" }}
            spacing={3}
            sx={{ mb: 6 }}
          >
            <Box>
              <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "2.6rem" }, color: "primary.main" }}>
                From the flight log
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary", mt: 1 }}>
                Insights, playbooks, and lessons from the campaigns we run.
              </Typography>
            </Box>
            <Button variant="text" endIcon={<ArrowForwardIcon />} sx={{ color: "#0e7a91", fontWeight: 600 }}>
              Visit the Blog
            </Button>
          </Stack>

          <Grid container spacing={3}>
            {POSTS.slice(0, 3).map((post, i) => (
              <Grid item xs={12} sm={6} md={12} key={post.title}>
                <BlogCard post={post} index={i} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <CTASection />
    </Box>
  );
}
