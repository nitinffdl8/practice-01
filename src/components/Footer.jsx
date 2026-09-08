import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  IconButton,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import { SERVICES } from "./Services.jsx";
// Behance isn't in Material Icons, so this is a lightweight custom SVG icon
function BehanceIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1.25rem"
      height="1.25rem"
      fill="currentColor"
      {...props}
    >
      <path d="M22 7.5h-6.5V6H22v1.5zM6.94 12.06c1.1-.55 1.72-1.44 1.72-2.7 0-2.32-1.72-3.36-4.2-3.36H0v13.2h4.7c2.68 0 4.9-1.1 4.9-3.86 0-1.72-.94-2.82-2.66-3.28zM2.7 8.02h1.98c1.02 0 1.86.34 1.86 1.42 0 1-.7 1.5-1.86 1.5H2.7V8.02zm2.2 8.14H2.7v-3.36h2.3c1.3 0 2.1.56 2.1 1.68 0 1.2-.98 1.68-2.2 1.68zM17.3 9.4c-3 0-4.9 2.1-4.9 5.02 0 3.04 1.78 4.98 4.98 4.98 2.44 0 3.98-1.14 4.5-3.12h-2.28c-.22.72-.98 1.24-2.14 1.24-1.5 0-2.42-.9-2.5-2.42h7.06c.1-3.16-1.5-5.7-4.72-5.7zm-2.34 3.9c.16-1.3 1-2.06 2.3-2.06 1.22 0 2.06.86 2.14 2.06h-4.44z" />
    </svg>
  );
}
// Update these URLs as each account goes live — Instagram is already wired.
const SOCIAL_LINKS = [
  { icon: FacebookIcon, url: "https://www.facebook.com/profile.php?id=100092682287400", label: "Facebook" },
  { icon: InstagramIcon, url: "https://www.instagram.com/kloutzindia/?hl=en", label: "Instagram" },
  { icon: LinkedInIcon, url: "#", label: "LinkedIn" },
  { icon: BehanceIcon, url: "https://www.behance.net/nitinffdl", label: "Behance" },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        background: "linear-gradient(180deg, #0b1730, #060d1c)",
        color: "#fff",
        pt: { xs: 8, md: 10 },
        overflow: "hidden",
      }}
    >
      {/* soft top glow */}
      <Box
        sx={{
          position: "absolute",
          top: -80,
          left: "50%",
          transform: "translateX(-50%)",
          width: 500,
          height: 200,
          background: "radial-gradient(circle, rgba(34,211,238,0.18), transparent 70%)",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
              <Box
                component="img"
                src="/logo.png"
                alt="KLOUTZ logo"
                sx={{
                  height: 36,
                  width: "auto",
                  objectFit: "contain",
                }}
              />
              <Typography variant="h6" sx={{ fontWeight: 800 }}>
                KLOUTZ
              </Typography>
            </Stack>
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.6)", maxWidth: 300, mb: 3 }}>
              A digital marketing agency built to launch brands beyond limits — strategy,
              creative, and performance under one sky.
            </Typography>
            <Stack direction="row" spacing={1}>
              {SOCIAL_LINKS.map(({ icon: Icon, url, label }) => (
                <IconButton
                  key={label}
                  component="a"
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  size="small"
                  sx={{
                    color: "#fff",
                    border: "1px solid rgba(255,255,255,0.15)",
                    "&:hover": { background: "rgba(34,211,238,0.15)", borderColor: "#22d3ee" },
                  }}
                >
                  <Icon fontSize="small" />
                </IconButton>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 6, md: 2 }}>
            <Typography variant="subtitle2" sx={{ mb: 2, color: "#22d3ee", fontWeight: 700 }}>
              Quick Links
            </Typography>
            <Stack spacing={1.2}>
              {[
                { label: "Home", to: "/" },
                { label: "About", to: "/about" },
                { label: "Services", to: "/services" },
                { label: "Blog", to: "/blog" },
                { label: "Contact", to: "/contact" },
              ].map((l) => (
                <Typography
                  key={l.to}
                  component={Link}
                  to={l.to}
                  variant="body2"
                  sx={{ color: "rgba(255,255,255,0.65)", textDecoration: "none", "&:hover": { color: "#22d3ee" } }}
                >
                  {l.label}
                </Typography>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 6, md: 3 }}>
            <Typography variant="subtitle2" sx={{ mb: 2, color: "#22d3ee", fontWeight: 700 }}>
              Services
            </Typography>
            <Stack spacing={1.2}>
              {SERVICES.slice(0, 5).map((s) => (
                <Typography key={s.title} variant="body2" sx={{ color: "rgba(255,255,255,0.65)" }}>
                  {s.title}
                </Typography>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="subtitle2" sx={{ mb: 2, color: "#22d3ee", fontWeight: 700 }}>
              Get In Touch
            </Typography>
            <Stack spacing={1.5} sx={{ mb: 3 }}>
              <Stack direction="row" spacing={1.2} alignItems="center">
                <EmailIcon fontSize="small" sx={{ color: "#22d3ee" }} />
                <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.65)" }}>
                  kloutzindia@gmail.com
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1.2} alignItems="center">
                <PhoneIcon fontSize="small" sx={{ color: "#22d3ee" }} />
                <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.65)" }}>
                  +91 94604-69597
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1.2} alignItems="flex-start">
                <LocationOnIcon fontSize="small" sx={{ color: "#22d3ee", mt: 0.3 }} />
                <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.65)" }}>
                  65-70/C, Krishna Vihar road2, Near King Palace Hotel,
                  pratap nagar, Udaipur (RAJ.)
                </Typography>
              </Stack>
            </Stack>

            <Typography variant="body2" sx={{ mb: 1, color: "rgba(255,255,255,0.65)" }}>
              Join our newsletter
            </Typography>
            <Stack direction="row" spacing={1}>
              <TextField
                size="small"
                placeholder="Your email"
                variant="outlined"
                sx={{
                  input: { color: "#fff" },
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 999,
                    background: "rgba(255,255,255,0.06)",
                    "& fieldset": { borderColor: "rgba(255,255,255,0.2)" },
                  },
                }}
                fullWidth
              />
              <Button variant="contained" color="primary" sx={{ px: 2, minWidth: "unset" }}>
                Join
              </Button>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.1)", my: 5 }} />

        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifycontent="space-between"
          alignItems="center"
          spacing={2}
          sx={{ pb: 4 }}
        >
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.45)" }}>
            © {new Date().getFullYear()} KLOUTZ. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.45)" }}>
            Launch Your Brand Beyond Limits
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}