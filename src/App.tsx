import { ChakraBaseProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { themeChakra } from "./styles/theme";
import { Stories } from "./pages/stories";

const App = () => {
  return (
    <>
      <ChakraBaseProvider theme={themeChakra}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stories" element={<Stories />} />
          </Routes>
        </BrowserRouter>
      </ChakraBaseProvider>
    </>
  );
};

export default App;
