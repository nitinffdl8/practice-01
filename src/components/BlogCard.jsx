import { Box, Typography, Chip, Stack, Button } from "@mui/material";
import { motion } from "framer-motion";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export default function BlogCard({ post, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      whileHover={{ y: -6 }}
      style={{ height: "100%" }}
    >
      <Box
        sx={{
          height: "100%",
          borderRadius: 5,
          overflow: "hidden",
          background: "#fff",
          border: "1px solid #eef1f6",
          boxShadow: "0 10px 30px rgba(22,40,75,0.06)",
          transition: "box-shadow 0.35s ease",
          "&:hover": { boxShadow: "0 20px 50px rgba(22,40,75,0.16)" },
          "&:hover .blog-thumb": { transform: "scale(1.06)" },
        }}
      >
        <Box sx={{ position: "relative", height: 180, overflow: "hidden" }}>
          <Box
            className="blog-thumb"
            sx={{
              position: "absolute",
              inset: 0,
              background: `linear-gradient(150deg, ${post.color}33, #16284b)`,
              transition: "transform 0.5s ease",
            }}
          />
          <Chip
            label={post.category}
            size="small"
            sx={{
              position: "absolute",
              top: 14,
              left: 14,
              background: "rgba(255,255,255,0.9)",
              fontWeight: 600,
              color: "#16284b",
            }}
          />
        </Box>

        <Box sx={{ p: 3.5 }}>
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            {post.date}
          </Typography>
          <Typography variant="h6" sx={{ my: 1.5, color: "primary.main" }}>
            {post.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 2.5 }}>
            {post.excerpt}
          </Typography>
          <Button
            size="small"
            endIcon={<ArrowOutwardIcon fontSize="small" />}
            sx={{ color: "#0e7a91", fontWeight: 600, pl: 0 }}
          >
            Read More
          </Button>
        </Box>
      </Box>
    </motion.div>
  );
}
