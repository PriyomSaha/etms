import { Box } from "@mui/material";
import "./App.css";
import DenseAppBar from "./Components/DenseAppBar";
import RouteTimeCard from "./Components/RouteTimeCard";
import ProfileCard from "./Components/ProfileCard";
import Logo from "./Components/Logo";

function App() {
  return (
    <>
      <DenseAppBar />
      <Box height={"90vh"}>
        <RouteTimeCard />
        <ProfileCard />
        <Logo />
      </Box>
    </>
  );
}

export default App;
