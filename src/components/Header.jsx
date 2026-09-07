import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Box,
  Container,
  Stack,
  Button,
  IconButton,
  Drawer,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Blog", to: "/blog" },

];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setDrawerOpen(false);
  }, [location.pathname]);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: scrolled
            ? "rgba(11, 23, 48, 0.75)"
            : "transparent",
          backdropFilter: scrolled ? "blur(16px) saturate(160%)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.12)"
            : "1px solid transparent",
          boxShadow: scrolled ? "0 8px 30px rgba(0,0,0,0.25)" : "none",
          transition: "all 0.35s cubic-bezier(.2,.8,.2,1)",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ py: scrolled ? 1 : 2, transition: "padding 0.3s" }}>
            {/* Logo */}
            <Box
              component={Link}
              to="/"
              sx={{
                display: "flex",
                alignitems: "center",
                gap: 1,
                textDecoration: "none",
                flexGrow: 1,
              }}
            >
              <Box
                component="img"
                src="/logo.png"
                alt="KLOUTZ logo"
                sx={{
                  height: 40,
                  width: "auto",
                  objectFit: "contain",
                }}
              />
              <Typography
                variant="h6"
                sx={{ color: "#22d3ee", letterSpacing: "0.04em", fontWeight: 800 }}
              >
                KLOUTZ
              </Typography>
            </Box>

            {/* Desktop nav */}
            <Stack
              direction="row"
              spacing={4}
              alignItems="center"
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              {NAV_LINKS.map((link) => (
                <NavItem key={link.to} link={link} active={location.pathname === link.to} />
              ))}
              <Button
                component={Link}
                to="/contact"
                variant="contained"
                color="primary"
                sx={{ px: 3.5 }}
              >
                Contact
              </Button>
            </Stack>

            {/* Mobile toggle */}
            <IconButton
              onClick={() => setDrawerOpen(true)}
              sx={{ display: { xs: "flex", md: "none" }, color: "#fff" }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: "78%",
            maxWidth: 320,
            background: "linear-gradient(180deg, #0b1730, #16284b)",
            color: "#fff",
            px: 3,
            py: 3,
          },
        }}
      >
        <Stack direction="row" justifyContent="flex-end">
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: "#fff" }}>
            <CloseIcon />
          </IconButton>
        </Stack>
        <Stack spacing={3} sx={{ mt: 4 }}>
          {NAV_LINKS.map((link) => (
            <Typography
              key={link.to}
              component={Link}
              to={link.to}
              variant="h6"
              sx={{
                textDecoration: "none",
                color: location.pathname === link.to ? "#22d3ee" : "#fff",
                fontWeight: 600,
              }}
            >
              {link.label}
            </Typography>
          ))}
          <Button component={Link} to="/contact" variant="contained" color="primary" fullWidth>
            Contact
          </Button>
        </Stack>
      </Drawer>
    </>
  );
}

function NavItem({ link, active }) {
  return (
    <Box
      component={Link}
      to={link.to}
      sx={{
        position: "relative",
        textDecoration: "none",
        color: "#fff",
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 500,
        fontSize: "0.95rem",
        py: 0.5,
      }}
    >
      {link.label}
      <Box
        component={motion.div}
        initial={false}
        animate={{ scaleX: active ? 1 : 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.25 }}
        sx={{
          position: "absolute",
          left: 0,
          bottom: -4,
          height: 2,
          width: "100%",
          background: "linear-gradient(90deg, #22d3ee, #7fe8f7)",
          transformOrigin: "left",
        }}
      />
    </Box>
  );
}