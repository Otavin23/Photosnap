import { ChakraBaseProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { themeChakra } from "./styles/theme";

const App = () => {
  return (
    <>
      <ChakraBaseProvider theme={themeChakra}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ChakraBaseProvider>
    </>
  );
};

export default App;
