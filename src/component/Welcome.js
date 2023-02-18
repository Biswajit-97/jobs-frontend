import { Grid, Typography } from "@material-ui/core";
import HeroSection from "./LandingComponent/HeroSection";
import Navbar from "./LandingComponent/Navbar";
import NoteSection from "./LandingComponent/NoteSection";

const Welcome = (props) => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <NoteSection />
    </>
  );
};

export const ErrorPage = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h2">Error 404</Typography>
      </Grid>
    </Grid>
  );
};

export default Welcome;
