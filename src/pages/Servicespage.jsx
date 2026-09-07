import {
  Box,
  Container,
  Typography,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Banner from "../components/Banner.jsx";
import Services from "../components/Services.jsx";
import ProcessTimeline from "../components/ProcessTimeline.jsx";
import CTASection from "../components/CTASection.jsx";

const FAQS = [
  {
    q: "How do you decide which services a brand needs?",
    a: "We start with a discovery audit — your funnel, market, and current channels — then recommend only what will actually move the needle, not the full menu by default.",
  },
  {
    q: "Do you work with early-stage and enterprise brands?",
    a: "Both. Our process scales: lean sprints for early-stage brands, structured multi-channel programs for enterprise teams.",
  },
  {
    q: "How is performance reported?",
    a: "Real-time dashboards plus a monthly strategy call — every metric traced back to spend, no vanity numbers.",
  },
  {
    q: "What's the typical engagement length?",
    a: "Most partnerships run in 3-month cycles, renewed based on results. We don't lock brands into long contracts.",
  },
];

export default function Servicespage() {
  return (
    <Box>
      <Banner
        variant="inner"
        eyebrow="OUR SERVICES"
        title="Every System Your Brand Needs to Fly"
        subtitle="Eight disciplines, one integrated team — strategy, creative, and performance built to work as a single launch system."
      />

      <Services showHeader={false} columns={2} />
      <ProcessTimeline />

      <Box component="section" sx={{ py: { xs: 10, md: 14 }, background: "#f4f8fb" }}>
        <Container maxWidth="md">
          <Stack alignItems="center" textAlign="center" spacing={2} sx={{ mb: 6 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "2.6rem" }, color: "primary.main" }}>
              Common Questions
            </Typography>
          </Stack>

          {FAQS.map((f, i) => (
            <Accordion
              key={f.q}
              disableGutters
              sx={{
                mb: 2,
                borderRadius: "16px !important",
                overflow: "hidden",
                boxShadow: "0 6px 20px rgba(22,40,75,0.06)",
                "&:before": { display: "none" },
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "#22d3ee" }} />}>
                <Typography sx={{ fontWeight: 600, color: "primary.main" }}>{f.q}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {f.a}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </Box>

      <CTASection />
    </Box>
  );
}