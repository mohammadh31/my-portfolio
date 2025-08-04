import { AppBar, Toolbar, Typography, Button } from "@mui/material";

function Header() {
  return (
    <AppBar position="sticky" sx={{ background: "#0d47a1" }}>
      <Toolbar>
        <Typography variant="h5" sx={{ flexGrow: 1 }}>
          Mohammad Haoaj
        </Typography>
        <Button color="inherit">Resume</Button>
        <Button color="inherit">Contact</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
