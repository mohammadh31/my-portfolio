import { Box, Typography, Grid, Avatar } from "@mui/material";
import profilePic from "../assets/10361139534_ecd5399501_o.jpg";
import { motion as Motion } from "framer-motion";

function About() {
  return (
    <Box sx={{ marginY: 5 }}>
      <Motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={4}>
            <Avatar
              src={profilePic}
              sx={{
                width: 150,
                height: 150,
                border: "4px solid white",
              }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" gutterBottom>
              About Me
            </Typography>
            <Typography>
              • A junior frontend developer who has completed several training
              projects using HTML, CSS, and JavaScript. I am looking for an
              opportunity to start my professional career in a dynamic tech
              environment that helps me grow and evolve.
            </Typography>
          </Grid>
        </Grid>
      </Motion.div>
    </Box>
  );
}

export default About;
