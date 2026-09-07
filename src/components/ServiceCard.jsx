import { Box, Typography, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export default function ServiceCard({ icon: Icon, title, description, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      whileHover={{ y: -8 }}
      style={{ height: "100%" }}
    >
      <Box
        sx={{
          position: "relative",
          height: "100%",
          p: 4,
          borderRadius: 5,
          background: "#fff",
          border: "1px solid #eef1f6",
          boxShadow: "0 10px 30px rgba(22,40,75,0.06)",
          overflow: "hidden",
          transition: "box-shadow 0.35s ease, border-color 0.35s ease",
          "&:hover": {
            boxShadow: "0 20px 50px rgba(22,40,75,0.16)",
            borderColor: "transparent",
          },
          "&:hover .service-border": { opacity: 1 },
          "&:hover .service-arrow": {
            background: "linear-gradient(135deg, #22d3ee, #16284b)",
            color: "#fff",
            transform: "rotate(45deg)",
          },
        }}
      >
        {/* gradient border glow on hover */}
        <Box
          className="service-border"
          sx={{
            position: "absolute",
            inset: 0,
            borderRadius: 5,
            padding: "1.5px",
            background: "linear-gradient(135deg, #22d3ee, #16284b)",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            opacity: 0,
            transition: "opacity 0.35s ease",
            pointerEvents: "none",
          }}
        />

        <Box
          sx={{
            width: 60,
            height: 60,
            borderRadius: "18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, rgba(34,211,238,0.14), rgba(22,40,75,0.08))",
            mb: 3,
          }}
        >
          <Icon sx={{ fontSize: 28, color: "#16284b" }} />
        </Box>

        <Typography variant="h6" sx={{ mb: 1.5, color: "primary.main" }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary", mb: 3, minHeight: 66 }}>
          {description}
        </Typography>

        <IconButton
          className="service-arrow"
          size="small"
          sx={{
            border: "1px solid #e2e6ee",
            transition: "all 0.3s ease",
          }}
        >
          <ArrowOutwardIcon fontSize="small" />
        </IconButton>
      </Box>
    </motion.div>
  );
}
