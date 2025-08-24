import { DoubleArrow } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

// -----------------------------

const black = "#000000";
const gray = "#C5C5C5";
const orange = "#D76121";
const white = "#F6F6F6";

// -----------------------------

const About = () => {
  const theme = useTheme();
  return (
    <Box sx={{ height: "100vh", backgroundColor: { white } }}>
      <Container maxWidth={"xl"} sx={{ position: "relative" }} my={3}>
        <Stack
          direction="row"
          justifyContent={"space-around"}
          spacing={4}
          p={3}
          height={"90vh"}
        >
          <Box alignContent={"center"} justifyItems={"start"}>
            <Box mb={3} color={black} variant="h2">
              <Typography variant="h3">Hey,This is</Typography>
              <Stack direction={"row"}>
                <Typography variant="h1" color={orange}>
                  Moh
                </Typography>
                <Typography variant="h1" color={black}>
                  amad Hawaj
                </Typography>
              </Stack>
            </Box>

            <Typography variant="h5" color={black} my={4}>
              a junior interactive web developer
            </Typography>

            <Button
              sx={{ textTransform: "capitalize", borderRadius: "40px" }}
              variant="contained"
              endIcon={<DoubleArrow />}
              color={"warning"}
            >
              lets talk
            </Button>
          </Box>
          <Box
            alignItems={"center"}
            sx={{ width: "25vw", height: "60vh" }}
            overflow={"hidden"}
          >
            <img
              src="../../public/myPhoto.png"
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default About;
