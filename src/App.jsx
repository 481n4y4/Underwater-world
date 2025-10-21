import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import FishList from "./pages/Fishlist";
import Ecosystem from "./pages/Ecosystem";
import FoodChain from "./pages/Foodchain";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fish" element={<FishList />} />
            <Route path="/ecosystem" element={<Ecosystem />} />
            <Route path="/foodchain" element={<FoodChain />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;