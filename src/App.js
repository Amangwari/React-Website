import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SecondHeader from "./Components/SecondHeader/SecondHeader";
import FirstHeader from "./Components/FirstHeader/FirstHeader";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <FirstHeader />
      <SecondHeader />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
