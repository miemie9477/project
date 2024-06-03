import { HashRouter, Routes, Route, Link, withRouter } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import { LoginProvider } from "./ContextAPI";
import ProtectedRoute from './ProtectedRoute';
import { AccountProvider } from "./ContextAPI";

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
import IntroductionPage from "./component/pages/00OtherPage/IntroductionPage";
import LoginPage from "./component/pages/00OtherPage/LoginPage";
import RegisterPage from "./component/pages/00OtherPage/RegisterPage";
import DeliveryPage from "./component/pages/00OtherPage/DeliveryPage";
import CheckPage from "./component/pages/02CheckoutPage/CheckPage";
import CheckSucceedPage from "./component/pages/02CheckSucceedPage/CheckSucceedPage";
import RegisterSucceedPage from "./component/pages/02RegisterSucceedPage/RegisterSucceedPage";
import MemberPage from "./component/pages/03MemberPage/MemberPage";
import AdminPage from "./component/pages/03AdminPage/AdminPage";


function App() {
  
  
  return (
    
    <HashRouter basename="/">
      <LoginProvider>
      <AccountProvider>
        <ScrollToTop /> 
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
          <Route path="CartPage" element={<ProtectedRoute element={<CartPage />} allowedRoles={[1, 2]} />} />
          <Route path="IntroductionPage" element={<IntroductionPage/>}/>
          <Route path="LoginPage" element={<LoginPage/>}/>
          <Route path="RegisterPage" element={<RegisterPage/>}/>
          <Route path="DeliveryPage" element={<DeliveryPage/>}/>
          <Route path="CartPage/CheckPage" element={<ProtectedRoute element={<CheckPage />} allowedRoles={[1, 2]} />}/>
          <Route path="CartPage/CheckPage/CheckSucceedPage" element={<ProtectedRoute element={<CheckSucceedPage />} allowedRoles={[1, 2]} />}/>
          <Route path="RegisterPage/RegisterSucceedPage" element={<RegisterSucceedPage/>}/>
          <Route path="MemberPage" element={<ProtectedRoute element={<MemberPage />} allowedRoles={[1, 2]} />}/>
          <Route path="AdminPage" element={<ProtectedRoute element={<AdminPage />} allowedRoles={[2]} />}/>
          

        </Routes>
      </AccountProvider>
      </LoginProvider>
    </HashRouter>
    
    


  );
}

export default App;
