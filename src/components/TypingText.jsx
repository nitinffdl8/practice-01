import { useEffect, useState } from "react";
import { Box } from "@mui/material";

/**
 * TypingText — cycles through a list of phrases with a type/delete effect.
 * Used sparingly (one line in the hero) so it reads as a signal, not noise.
 */
export default function TypingText({
  words = [],
  typingSpeed = 70,
  deletingSpeed = 40,
  pauseTime = 1600,
  color = "#22d3ee",
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return;
    const current = words[wordIndex % words.length];

    let timeout;
    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), typingSpeed);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pauseTime);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), deletingSpeed);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <Box component="span" sx={{ color, fontWeight: 600, whiteSpace: "nowrap" }}>
      {text}
      <Box
        component="span"
        sx={{
          display: "inline-block",
          width: "2px",
          height: "1em",
          ml: "2px",
          verticalAlign: "middle",
          background: color,
          animation: "twinkle 0.9s steps(1) infinite",
        }}
      />
    </Box>
  );
}
