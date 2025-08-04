import { Box, Typography, Grid, Paper } from "@mui/material";

function Skills() {
  const skills = [
    { title: "React.js", desc: "Modern frontend library for building UI." },
    { title: "Material UI", desc: "Component library for React." },
  ];

  return (
    <Box sx={{ marginY: 5 }}>
      <Typography variant="h4" gutterBottom>
        Skills
      </Typography>
      <Grid container spacing={3}>
        {skills.map((skill, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Paper
              sx={{ padding: 2, background: "#1a237e", color: "white" }}
              elevation={3}
            >
              <Typography variant="h6">{skill.title}</Typography>
              <Typography>{skill.desc}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Skills;
