import NavBar from "./Component/NavBar";
import OfferLine from "./Component/OfferLine";
import "./App.css"
import HeroSection from "./Component/HeroSection";
import Newstoryboard from "./Component/Newstoryboard";

function App() {
  return (
    <div className="w-fit md:w-full">
      <OfferLine/>
      <NavBar/>
      <HeroSection/>
     
    </div>
  );
}

export default App;
