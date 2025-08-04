import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

function Experience() {
  return (
    <Box sx={{ marginY: 5 }}>
      <Typography variant="h4" gutterBottom>
        Personal / Training Projects
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary="Frontend Developer – ABC Company"
            secondary="Jan 2021 – Present"
          />
        </ListItem>
        <ListItem>
          <ListItemText primary="Junior Dev – XYZ" secondary="2019 – 2020" />
        </ListItem>
      </List>
    </Box>
  );
}

export default Experience;
