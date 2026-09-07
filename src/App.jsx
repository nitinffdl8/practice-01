import { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Box } from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx"; 
import RocketScrollIndicator from "./components/RocketScrollIndicator.jsx";
import BackToTop from "./components/BackToTop.jsx";

// Route-level code-splitting: each page ships as its own chunk and is
// only fetched when the visitor actually navigates to it.
const Home = lazy(() => import("./pages/Home.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Servicespage = lazy(() => import("./pages/Servicespage.jsx"));
const Blog = lazy(() => import("./pages/Blog.jsx"));

const pageTransition = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -24 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

function PageLoader() {
  return (
    <Box
      sx={{
        minHeight: "60vh",
        display: "flex",
        alignitems: "center",
        justifycontent: "center",
        background: "linear-gradient(180deg, #0b1730, #16284b)",
      }}
    >
      <motion.div
        animate={{ y: [0, -14, 0], rotate: [-8, -8, -8] }}
        transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
      >
        <RocketLaunchIcon sx={{ fontSize: 44, color: "#22d3ee" }} />
      </motion.div>
    </Box>
  );
}

function AnimatedPage({ children }) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      transition={pageTransition.transition}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <Box sx={{ position: "relative", overflowX: "hidden" }}>
      <Header />
      <RocketScrollIndicator />
      <Suspense fallback={<PageLoader />}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <AnimatedPage>
                  <Home />
                </AnimatedPage>
              }
            />
            <Route
              path="/about"
              element={
                <AnimatedPage>
                  <About />
                </AnimatedPage>
              }
            />
            <Route
              path="/services"
              element={
                <AnimatedPage>
                  <Servicespage />
                </AnimatedPage>
              }
            />
            <Route
              path="/blog"
              element={
                <AnimatedPage>
                  <Blog />
                </AnimatedPage>
              }
            />
           
          </Routes>
        </AnimatePresence>
      </Suspense>
      <Footer />
      <BackToTop />
    </Box>
  );
}
