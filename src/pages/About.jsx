import { Box, Container, Grid, Typography, Stack, Chip } from "@mui/material";
import { motion } from "framer-motion";
import FlagIcon from "@mui/icons-material/Flag";
import VisibilityIcon from "@mui/icons-material/Visibility";
import GroupsIcon from "@mui/icons-material/Groups";
import HandshakeIcon from "@mui/icons-material/Handshake";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import ShieldIcon from "@mui/icons-material/Shield";
import Banner from "../components/Banner.jsx";
import Counter from "../components/Counter.jsx";
import CTASection from "../components/CTASection.jsx";

const TIMELINE = [
  { year: "2017", title: "Ground Zero", text: "KLOUTZ founded by three marketers tired of agencies that hid behind vanity metrics." },
  { year: "2019", title: "First Orbit", text: "Crossed 50 clients and built our in-house performance and creative pods." },
  { year: "2022", title: "Breaking Atmosphere", text: "Opened our second studio and launched the KLOUTZ reporting dashboard." },
  { year: "2026", title: "Deep Space", text: "180+ brands launched, with a team of 40+ strategists, creatives, and engineers." },
];

const VALUES = [
  { icon: GroupsIcon, title: "Partnership Over Vendor", text: "We sit on your side of the table — invested in outcomes, not billable hours." },
  { icon: HandshakeIcon, title: "Radical Transparency", text: "Every dashboard, every number, always visible. No black boxes." },
  { icon: EmojiObjectsIcon, title: "Craft-Obsessed", text: "We sweat the details others skip — because those details are what compound." },
  { icon: ShieldIcon, title: "Accountable Results", text: "We report against goals we set together, not the metrics that flatter us most." },
];

export default function About() {
  return (
    <Box>
      <Banner
        variant="inner"
        eyebrow="ABOUT KLOUTZ"
        title="Built to Make Marketing Perform Better."
        subtitle="KLOUTZ is a digital marketing studio built for brands that want more than likes, impressions, and empty promises. We combine strategy, creativity, technology, and performance to turn marketing into measurable growth."
      />

      {/* Mission / Vision + Image */}
      <Box component="section" sx={{ py: { xs: 10, md: 14 }, background: "#fff" }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ position: "relative", height: { xs: 320, md: 420 } }}>
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: 6,
                    background: "linear-gradient(150deg, #16284b, #0b1730)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <Box sx={{ fontSize: 140, filter: "drop-shadow(0 0 40px rgba(34,211,238,0.5))" }}>
                    🚀
                  </Box>
                </Box>
                <Box
                  className="animate-float"
                  sx={{ position: "absolute", top: -20, left: -20, fontSize: 60, opacity: 0.9 }}
                >
                  ☁️
                </Box>
                <Box
                  className="animate-float-slow"
                  sx={{ position: "absolute", bottom: -16, right: -10, fontSize: 80, opacity: 0.8 }}
                >
                  ☁️
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Chip label="OUR STORY" sx={{ background: "rgba(34,211,238,0.12)", color: "#0e7a91", fontWeight: 700, mb: 2 }} />
              <Typography variant="h2" sx={{ fontSize: { xs: "1.9rem", md: "2.4rem" }, color: "primary.main", mb: 3 }}>
                Marketing shouldn't be complicated. It should work
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary", mb: 4 }}>
                KLOUTZ started with a simple belief: great marketing isn't about doing more — it's about doing what actually moves the needle.
                Too many brands are buried under disconnected campaigns, confusing reports, and strategies that look good on paper but fail to deliver.
                So we built KLOUTZ differently.
                
                We bring strategy, creativity, technology, and performance together under one roof — creating marketing systems designed to attract attention, build trust, and drive real business growth.
              </Typography>

              <Stack spacing={3}>
                <Stack direction="row" spacing={2}>
                  <Box sx={{ color: "#22d3ee" }}><FlagIcon /></Box>
                  <Box>
                    <Typography variant="h6" sx={{ color: "primary.main" }}>Our Mission</Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                     To help ambitious brands turn their marketing into a growth engine through sharp strategy, bold creativity, and measurable execution.
                    </Typography>
                  </Box>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <Box sx={{ color: "#22d3ee" }}><VisibilityIcon /></Box>
                  <Box>
                    <Typography variant="h6" sx={{ color: "primary.main" }}>Our Vision</Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                     To help ambitious brands turn their marketing into a growth engine through sharp strategy, bold creativity, and measurable execution.
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Animated Stats band */}
      <Box
        component="section"
        sx={{ py: { xs: 7, md: 9 }, background: "linear-gradient(120deg, #16284b, #0b1730)" }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {[
              { value: 180, suffix: "+", label: "Brands Launched" },
              { value: 40, suffix: "+", label: "Team Members" },
              { value: 9, suffix: "", label: "Years Flying" },
              { value: 98, suffix: "%", label: "Client Retention" },
            ].map((s) => (
              <Grid item xs={6} md={3} key={s.label}>
                <Counter value={s.value} suffix={s.suffix} label={s.label} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Timeline */}
      <Box component="section" sx={{ py: { xs: 10, md: 14 }, background: "#fbfcfe" }}>
        <Container maxWidth="md">
          <Stack alignItems="center" textalign="center" spacing={2} sx={{ mb: 8 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "2.6rem" }, color: "primary.main" }}>
              Our Trajectory
            </Typography>
          </Stack>

          <Stack spacing={0}>
            {TIMELINE.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Stack direction="row" spacing={3}>
                  <Stack alignItems="center" sx={{ width: 90 }}>
                    <Box
                      sx={{
                        width: 16,
                        height: 16,
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #22d3ee, #16284b)",
                        boxShadow: "0 0 12px rgba(34,211,238,0.6)",
                      }}
                    />
                    {i !== TIMELINE.length - 1 && (
                      <Box sx={{ width: 2, flexGrow: 1, minHeight: 70, background: "#dbe4f0" }} />
                    )}
                  </Stack>
                  <Box sx={{ pb: 6 }}>
                    <Typography variant="overline" sx={{ color: "#22d3ee", fontWeight: 700 }}>
                      {t.year}
                    </Typography>
                    <Typography variant="h6" sx={{ color: "primary.main", mb: 1 }}>
                      {t.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary", maxWidth: 460 }}>
                      {t.text}
                    </Typography>
                  </Box>
                </Stack>
              </motion.div>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* Why Choose Us */}
      <Box component="section" sx={{ py: { xs: 10, md: 14 }, background: "#fff" }}>
        <Container maxWidth="lg">
          <Stack alignItems="center" textalign="center" spacing={2} sx={{ mb: 8 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "2.6rem" }, color: "primary.main" }}>
              Why Brands Choose Us
            </Typography>
          </Stack>
          <Grid container spacing={3}>
            {VALUES.map((v, i) => (
              <Grid item xs={12} sm={6} md={3} key={v.title}>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
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
                      border: "1px solid #eef1f6",
                      boxShadow: "0 10px 30px rgba(22,40,75,0.06)",
                    }}
                  >
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: "16px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "linear-gradient(135deg, rgba(34,211,238,0.14), rgba(22,40,75,0.08))",
                        mb: 2.5,
                      }}
                    >
                      <v.icon sx={{ color: "#16284b" }} />
                    </Box>
                    <Typography variant="h6" sx={{ mb: 1, color: "primary.main" }}>
                      {v.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      {v.text}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <CTASection />
    </Box>
  );
}
