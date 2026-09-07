import { Dialog, DialogContent, IconButton, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

/**
 * VideoModal — a fullscreen-ish lightbox that plays a video file.
 * Only mounts the <video> element while open, so the 90MB+ showreel
 * is never downloaded until the visitor actually clicks play.
 */
export default function VideoModal({ open, onClose, src }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          background: "#000",
          borderRadius: 3,
          overflow: "hidden",
        },
      }}
    >
      <DialogContent sx={{ p: 0, position: "relative", lineHeight: 0 }}>
        <IconButton
          onClick={onClose}
          aria-label="Close video"
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            zIndex: 1,
            color: "#fff",
            background: "rgba(0,0,0,0.5)",
            "&:hover": { background: "rgba(0,0,0,0.7)" },
          }}
        >
          <CloseIcon />
        </IconButton>

        {open && (
          <Box
            component="video"
            src={src}
            controls
            autoPlay
            sx={{ width: "100%", display: "block", maxHeight: "80vh" }}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}