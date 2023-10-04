import { ChakraBaseProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { themeChakra } from "./styles/theme";
import { Stories } from "./pages/stories";
import { Features } from "./pages/features";

const App = () => {
  return (
    <>
      <ChakraBaseProvider theme={themeChakra}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/features" element={<Features />} />
          </Routes>
        </BrowserRouter>
      </ChakraBaseProvider>
    </>
  );
};

export default App;
