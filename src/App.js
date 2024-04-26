import { HashRouter, Routes, Route, Link, withRouter } from "react-router-dom";
// import ScrollToTop from "./component/BasicFrame/ScrollToTop";
import HomePage from "./component/pages/00HomePage/HomePage";
import GinPage from "./component/pages/GinPage/GinPage";
import BrandyPage from "./component/pages/BrandyPage/BrandyPage";
import VodkaPage from "./component/pages/VodkaPage/VodkaPage";
import RumPage from "./component/pages/RumPage/RumPage";
import WhiskeyPage from "./component/pages/WhiskeyPage/WhiskeyPage";
import TequilaPage from "./component/pages/TequilaPage/TequilaPage";
import LiqueurPage from "./component/pages/LiqueurPage/LiqueurPage";
import SoftDrinksPage from "./component/pages/SoftDrinksPage/SoftDrinksPage";
import GordonsGin from "./component/pages/01MechandisesPages/Gordon'sGin/Gordon'sGin";
import CartPage from "./component/pages/01CartPage/CartPage";

function App() {
  return (
    
    <HashRouter basename="/">
      <Routes>
        <Route index element = {<HomePage/>}/>
        <Route path="GinPage" element={<GinPage/>} />
        <Route path="BrandyPage" element={<BrandyPage/>} />
        <Route path="VodkaPage" element={<VodkaPage/>} />
        <Route path="RumPage" element={<RumPage/>} />
        <Route path="WhiskeyPage" element={<WhiskeyPage/>} />
        <Route path="TequilaPage" element={<TequilaPage/>} />
        <Route path="LiqueurPage" element={<LiqueurPage/>} />
        <Route path="SoftDrinksPage" element={<SoftDrinksPage/>} />
        <Route path="GinPage/GordonsGin" element={<GordonsGin/>} />
        <Route path="CartPage" element = {<CartPage/>} />
      </Routes>
    </HashRouter>
    
    


  );
}

export default App;
