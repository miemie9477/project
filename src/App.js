import { HashRouter, Routes, Route, Link, withRouter } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import { LoginProvider } from "./ContextAPI";
import ProtectedRoute from './ProtectedRoute';
import { AccountProvider } from "./ContextAPI";
import { OrdertotalProvider } from "./ContextAPI";

import HomePage from "./component/pages/00HomePage/HomePage";
import GinPage from "./component/pages/GinPage/GinPage";
import A10010 from "./component/pages/01MechandisesPages/Mer_wines/Gin/a10010";
import A21001 from "./component/pages/01MechandisesPages/Mer_wines/Gin/a21001";
import A30012 from "./component/pages/01MechandisesPages/Mer_wines/Gin/a30012";
import A41200 from "./component/pages/01MechandisesPages/Mer_wines/Gin/a41200";
import A50001 from "./component/pages/01MechandisesPages/Mer_wines/Gin/a50001";
import A61111 from "./component/pages/01MechandisesPages/Mer_wines/Gin/a61111";
import BrandyPage from "./component/pages/BrandyPage/BrandyPage";
import C1111 from "./component/pages/01MechandisesPages/Mer_wines/Brandy/c11111"
import C20000 from "./component/pages/01MechandisesPages/Mer_wines/Brandy/c20000"
import C32233 from "./component/pages/01MechandisesPages/Mer_wines/Brandy/c32233"
import C40023 from "./component/pages/01MechandisesPages/Mer_wines/Brandy/c40023"
import C51234 from "./component/pages/01MechandisesPages/Mer_wines/Brandy/c51234"
import VodkaPage from "./component/pages/VodkaPage/VodkaPage";
import B10111 from "./component/pages/01MechandisesPages/Mer_wines/Vodka/b10111"
import B21100 from "./component/pages/01MechandisesPages/Mer_wines/Vodka/b21100"
import B30001 from "./component/pages/01MechandisesPages/Mer_wines/Vodka/b30001"
import B42210 from "./component/pages/01MechandisesPages/Mer_wines/Vodka/b42210"
import B51212 from "./component/pages/01MechandisesPages/Mer_wines/Vodka/b51212"
import B60101 from "./component/pages/01MechandisesPages/Mer_wines/Vodka/b60101"
import RumPage from "./component/pages/RumPage/RumPage";
import D16230 from "./component/pages/01MechandisesPages/Mer_wines/Rum/d16230"
import D27788 from "./component/pages/01MechandisesPages/Mer_wines/Rum/d27788"
import D35566 from "./component/pages/01MechandisesPages/Mer_wines/Rum/d35566"
import D42211 from "./component/pages/01MechandisesPages/Mer_wines/Rum/d42211"
import D57400 from "./component/pages/01MechandisesPages/Mer_wines/Rum/d57400"
import D62020 from "./component/pages/01MechandisesPages/Mer_wines/Rum/d62020"
import WhiskeyPage from "./component/pages/WhiskeyPage/WhiskeyPage";
import E10001 from "./component/pages/01MechandisesPages/Mer_wines/Whiskey/e10001"
import E27777 from "./component/pages/01MechandisesPages/Mer_wines/Whiskey/e27777"
import E36010 from "./component/pages/01MechandisesPages/Mer_wines/Whiskey/e36010"
import E46010 from "./component/pages/01MechandisesPages/Mer_wines/Whiskey/e46010"
import E52220 from "./component/pages/01MechandisesPages/Mer_wines/Whiskey/e52220"
import E68888 from "./component/pages/01MechandisesPages/Mer_wines/Whiskey/e68888"
import TequilaPage from "./component/pages/TequilaPage/TequilaPage";
import F10332 from "./component/pages/01MechandisesPages/Mer_wines/Tequila/f10332"
import F20777 from "./component/pages/01MechandisesPages/Mer_wines/Tequila/f20777"
import F34055 from "./component/pages/01MechandisesPages/Mer_wines/Tequila/f34055"
import F40905 from "./component/pages/01MechandisesPages/Mer_wines/Tequila/f40905"
import F57233 from "./component/pages/01MechandisesPages/Mer_wines/Tequila/f57233"
import F61108 from "./component/pages/01MechandisesPages/Mer_wines/Tequila/f61108"
import LiqueurPage from "./component/pages/LiqueurPage/LiqueurPage";
import G14099 from "./component/pages/01MechandisesPages/Mer_wines/Liqueur/g14099"
import G29170 from "./component/pages/01MechandisesPages/Mer_wines/Liqueur/g29170"
import G38000 from "./component/pages/01MechandisesPages/Mer_wines/Liqueur/g38000"
import G47474 from "./component/pages/01MechandisesPages/Mer_wines/Liqueur/g47474"
import G56020 from "./component/pages/01MechandisesPages/Mer_wines/Liqueur/g56020"
import G62550 from "./component/pages/01MechandisesPages/Mer_wines/Liqueur/g62550"
import SoftDrinksPage from "./component/pages/SoftDrinksPage/SoftDrinksPage";
import H15858 from "./component/pages/01MechandisesPages/Mer_wines/SoftDrinks/h15858"
import H29191 from "./component/pages/01MechandisesPages/Mer_wines/SoftDrinks/h29191"
import H30800 from "./component/pages/01MechandisesPages/Mer_wines/SoftDrinks/h30800"
import H45200 from "./component/pages/01MechandisesPages/Mer_wines/SoftDrinks/h45200"
import H58520 from "./component/pages/01MechandisesPages/Mer_wines/SoftDrinks/h58520"
import H62024 from "./component/pages/01MechandisesPages/Mer_wines/SoftDrinks/h62024"
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
      <OrdertotalProvider>
        <ScrollToTop /> 
        <Routes>
          <Route index element = {<HomePage/>}/>
          <Route path="GinPage" element={<GinPage/>} />
          <Route path="GinPage/a10010" element={<A10010/>} />
          <Route path="GinPage/a21001" element={<A21001/>} />
          <Route path="GinPage/a30012" element={<A30012/>} />
          <Route path="GinPage/a41200" element={<A41200/>} />
          <Route path="GinPage/a50001" element={<A50001/>} />
          <Route path="GinPage/a61111" element={<A61111/>} />
          <Route path="BrandyPage" element={<BrandyPage/>} />
          <Route path="BrandyPage/c1111" element={<C1111/>} />
          <Route path="BrandyPage/c20000" element={<C20000/>} />
          <Route path="BrandyPage/c32233" element={<C32233/>} />
          <Route path="BrandyPage/c40023" element={<C40023/>} />
          <Route path="BrandyPage/c51234" element={<C51234/>} />
          <Route path="VodkaPage" element={<VodkaPage/>} />
          <Route path="VodkaPage/b10111" element={<B10111/>} />
          <Route path="VodkaPage/b21100" element={<B21100/>} />
          <Route path="VodkaPage/b30001" element={<B30001/>} />
          <Route path="VodkaPage/b42210" element={<B42210/>} />
          <Route path="VodkaPage/b51212" element={<B51212/>} />
          <Route path="VodkaPage/b60101" element={<B60101/>} />
          <Route path="RumPage" element={<RumPage/>} />
          <Route path="RumPage/d16230" element={<D16230/>} />
          <Route path="RumPage/d27788" element={<D27788/>} />
          <Route path="RumPage/d35566" element={<D35566/>} />
          <Route path="RumPage/d42211" element={<D42211/>} />
          <Route path="RumPage/d57400" element={<D57400/>} />
          <Route path="RumPage/d62020" element={<D62020/>} />
          <Route path="WhiskeyPage" element={<WhiskeyPage/>} />
          <Route path="WhiskeyPage/e10001" element={<E10001/>} />
          <Route path="WhiskeyPage/e27777" element={<E27777/>} />
          <Route path="WhiskeyPage/e36010" element={<E36010/>} />
          <Route path="WhiskeyPage/e46010" element={<E46010/>} />
          <Route path="WhiskeyPage/e52220" element={<E52220/>} />
          <Route path="WhiskeyPage/e68888" element={<E68888/>} />
          <Route path="TequilaPage" element={<TequilaPage/>} />
          <Route path="TequilaPage/f10332" element={<F10332/>} />
          <Route path="TequilaPage/f20777" element={<F20777/>} />
          <Route path="TequilaPage/f34055" element={<F34055/>} />
          <Route path="TequilaPage/f40905" element={<F40905/>} />
          <Route path="TequilaPage/f57233" element={<F57233/>} />
          <Route path="TequilaPage/f61108" element={<F61108/>} />
          <Route path="LiqueurPage" element={<LiqueurPage/>} />
          <Route path="LiqueurPage/g14099" element={<G14099/>} />
          <Route path="LiqueurPage/g29170" element={<G29170/>} />
          <Route path="LiqueurPage/g38000" element={<G38000/>} />
          <Route path="LiqueurPage/g47474" element={<G47474/>} />
          <Route path="LiqueurPage/g56020" element={<G56020/>} />
          <Route path="LiqueurPage/g62550" element={<G62550/>} />
          <Route path="SoftDrinksPage" element={<SoftDrinksPage/>} />
          <Route path="SoftDrinksPage/h15858" element={<H15858/>} />
          <Route path="SoftDrinksPage/h29191" element={<H29191/>} />
          <Route path="SoftDrinksPage/h30800" element={<H30800/>} />
          <Route path="SoftDrinksPage/h45200" element={<H45200/>} />
          <Route path="SoftDrinksPage/h58520" element={<H58520/>} />
          <Route path="SoftDrinksPage/h62024" element={<H62024/>} />
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
      </OrdertotalProvider>
      </AccountProvider>
      </LoginProvider>
    </HashRouter>
    
    


  );
}

export default App;
