import { Box, Typography, TextField, Button } from "@mui/material";

function Contact() {
  return (
    <Box sx={{ marginY: 5 }}>
      <Typography variant="h4" gutterBottom>
        Contact Me
      </Typography>
      <Box component="form">
        <TextField
          fullWidth
          label="Name"
          variant="filled"
          sx={{ my: 1, backgroundColor: "white" }}
        />
        <TextField
          fullWidth
          label="Email"
          variant="filled"
          sx={{ my: 1, backgroundColor: "white" }}
        />
        <TextField
          fullWidth
          multiline
          rows={4}
          label="Message"
          variant="filled"
          sx={{ my: 1, backgroundColor: "white" }}
        />
        <Button variant="contained" color="primary" fullWidth>
          Send
        </Button>
      </Box>
    </Box>
  );
}

export default Contact;
