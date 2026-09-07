import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// ---------------------------------------------------------------------------
// KLOUTZ Design Tokens
// Primary  : deep sky navy — the atmosphere the rocket climbs through
// Accent   : ion cyan — the glow of thrust / ignition
// Gradients are built from these two so every "glow" moment feels related
// ---------------------------------------------------------------------------
export const brand = {
  primary: "#16284b",
  primaryDark: "#0b1730",
  primaryLight: "#233a63",
  accent: "#22d3ee",
  accentSoft: "#7fe8f7",
  white: "#FFFFFF",
  black: "#000000",
  ink: "#0a1220",
  cloud: "rgba(255,255,255,0.72)",
  mist: "rgba(255,255,255,0.06)",
};

export const gradients = {
  sky: `linear-gradient(180deg, ${brand.primaryDark} 0%, ${brand.primary} 55%, ${brand.primaryLight} 100%)`,
  thrust: `linear-gradient(90deg, ${brand.accent} 0%, ${brand.accentSoft} 100%)`,
  glow: `radial-gradient(circle at 50% 30%, rgba(34,211,238,0.35), transparent 60%)`,
  card: `linear-gradient(155deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)`,
  cta: `linear-gradient(120deg, ${brand.primaryDark} 0%, ${brand.primary} 45%, #0c4f63 100%)`,
};

let theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: brand.primary,
      dark: brand.primaryDark,
      light: brand.primaryLight,
      contrastText: brand.white,
    },
    secondary: {
      main: brand.accent,
      contrastText: brand.ink,
    },
    background: {
      default: brand.white,
      paper: brand.white,
    },
    text: {
      primary: brand.ink,
      secondary: "#4a5872",
    },
  },
  shape: {
    borderRadius: 18,
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
    h1: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 800,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 700,
      letterSpacing: "-0.01em",
    },
    h3: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 700,
    },
    h4: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 700,
    },
    h5: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 600,
    },
    subtitle1: {
      fontFamily: '"Roboto", sans-serif',
      fontWeight: 400,
    },
    body1: {
      fontFamily: '"Roboto", sans-serif',
      fontWeight: 400,
      lineHeight: 1.7,
    },
    body2: {
      fontFamily: '"Roboto", sans-serif',
      fontWeight: 400,
      lineHeight: 1.6,
    },
    button: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 600,
      textTransform: "none",
      letterSpacing: "0.01em",
    },
    overline: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 600,
      letterSpacing: "0.18em",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          padding: "12px 28px",
        },
        containedPrimary: {
          background: gradients.thrust,
          color: brand.ink,
          boxShadow: "0 8px 30px rgba(34,211,238,0.35)",
          "&:hover": {
            background: gradients.thrust,
            boxShadow: "0 10px 40px rgba(34,211,238,0.5)",
            transform: "translateY(-2px)",
          },
          transition: "all 0.3s cubic-bezier(.2,.8,.2,1)",
        },
        outlined: {
          borderColor: "rgba(255,255,255,0.4)",
          "&:hover": {
            borderColor: brand.accent,
            background: "rgba(34,211,238,0.08)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
