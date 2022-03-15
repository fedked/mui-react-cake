import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import CakeSection from "./components/CakeSection";
import ContactUs from "./components/ContactUs";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#864313",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Container>
        <HeroSection />
        <CakeSection />
        <ContactUs />
      </Container>
    </ThemeProvider>
  );
}

export default App;
