import { Box, Stack, Typography } from "@mui/material";
// import myPhoto from "../../public/tim-swaan-eOpewngf68w-unsplash.jpg";
const About = () => {
  return (
    <Box sx={{ height: "90vh" }} my={3}>
      <Stack
        boxShadow={10}
        direction="row"
        spacing={4}
        border={4}
        p={3}
        borderRadius={5}
        sx={{ backgroundColor: "#393E46" }}
      >
        <Box
          borderRadius={5}
          boxShadow={10}
          sx={{ width: "100vw", height: "80vh" }}
          overflow={"hidden"}
        >
          <img
            src="../../public/tim-swaan-eOpewngf68w-unsplash.jpg"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
        <Box alignContent={"center"} justifyItems={"center"}>
          <Typography
            color="#EEEEEE"
            sx={{ textShadow: "0px 10px 20px black" }}
            variant="h2"
          >
            Hi I'am Mohamad Hawaj
          </Typography>

          <br />
          <Typography variant="h5" color="#EEEEEE">
            A junior frontend developer who has completed several training
            projects using HTML, CSS, and JavaScript. I am looking for an
            opportunity to start my professional career in a dynamic tech
            environment that helps me grow and evolve.
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default About;
