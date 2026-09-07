import { useEffect, useState } from "react";
import { Fab } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          style={{ position: "fixed", bottom: 28, left: 28, zIndex: 1300 }}
        >
          <Fab
            size="medium"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            sx={{
              background: "linear-gradient(135deg, #22d3ee, #16284b)",
              color: "#fff",
              "&:hover": { background: "linear-gradient(135deg, #22d3ee, #16284b)" },
            }}
          >
            <KeyboardArrowUpIcon />
          </Fab>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
