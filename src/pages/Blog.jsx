import { Box, Container, Grid } from "@mui/material";
import Banner from "../components/Banner.jsx";
import BlogCard from "../components/BlogCard.jsx";
import CTASection from "../components/CTASection.jsx";

export const POSTS = [
  {
    title: "Why Your SEO Strategy Needs a Launch Sequence",
    category: "SEO",
    date: "July 18, 2026",
    color: "#22d3ee",
    excerpt: "Technical fixes are step one. Here's the four-stage sequence that actually compounds rankings.",
  },
  {
    title: "The Anatomy of a Scroll-Stopping Ad Creative",
    category: "Performance Marketing",
    date: "July 9, 2026",
    color: "#7fe8f7",
    excerpt: "We broke down 200 winning ad creatives. Three patterns showed up again and again.",
  },
  {
    title: "Brand Voice: The Most Underrated Growth Lever",
    category: "Brand Strategy",
    date: "June 27, 2026",
    color: "#16284b",
    excerpt: "A distinct voice reduces your cost of attention. Here's how to build one that scales.",
  },
  {
    title: "Content Calendars That Survive Contact With Reality",
    category: "Content Marketing",
    date: "June 14, 2026",
    color: "#22d3ee",
    excerpt: "Most calendars fall apart by week three. This framework is built to bend, not break.",
  },
  {
    title: "Website Speed Is a Marketing Metric Now",
    category: "Website Development",
    date: "May 30, 2026",
    color: "#7fe8f7",
    excerpt: "Every 100ms of load time costs conversion. Here's how we budget performance like a P&L.",
  },
  {
    title: "Social Proof: Designing Testimonials That Convert",
    category: "Social Media Marketing",
    date: "May 12, 2026",
    color: "#16284b",
    excerpt: "Not all reviews are equal. The placement and framing matter as much as the words.",
  },
];

export default function Blog() {
  return (
    <Box>
      <Banner
        variant="inner"
        eyebrow="THE FLIGHT LOG"
        title="Insights From the Launchpad"
        subtitle="Playbooks, breakdowns, and lessons pulled straight from campaigns we run for real clients."
      />

      <Box component="section" sx={{ py: { xs: 8, md: 12 }, background: "#fff" }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {POSTS.map((post, i) => (
              <Grid item xs={12} sm={6} md={4} key={post.title}>
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
