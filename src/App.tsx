import { ChakraBaseProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";

const App = () => {
  return (
    <>
      <ChakraBaseProvider>
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
