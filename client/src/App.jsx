import { Box} from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import Navbar from "./components/Navbar";
import { Toaster} from "@/components/ui/toaster"


const App = () => {
  return (
    <Box minH={"100vh"}>
      <Navbar />
      <Toaster />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/create" element={<CreatePage/>}/>
      </Routes>
      

    </Box>
  );
};

export default App;
