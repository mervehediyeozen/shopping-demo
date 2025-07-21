import { Route, Routes , Navigate } from 'react-router-dom'; 
import Main from './pages/Main';
import OrdersPage from './pages/OrdersPage';
import OrdersDetail from './pages/OrdersDetail';
import Signin from './pages/Signin';
import Products from './pages/Products';
import './App.css';
import AdressPage from './pages/AdressPage';
import ShowClient from './pages/ShowClients';
import SubscribedClient from './pages/SubscribedClient';
import ProductDetail from './pages/ProductDetail';
import Profile from './pages/Profile';
import ProductKindPages from './pages/ProductKindPages';
import Error from './pages/Error404';
import Basket from './pages/Basket';
import ProtectedRoute from './ProtectedRoute';
import AllAdresses from './pages/AllAdresses';
import Communication from './pages/AboutUs/Communication';
import Opportunities from './pages/Opportunities';
import FilteredProductsPage from './pages/ProductKindTypepages';
import SimilarProductsCard from './components/SimilarProductsCard';
import MostSellers from './pages/MostSeller';
import ProductKindFavs from './pages/ProductKindFavs';
import FavProducts from './pages/FavProducts';
import AllCommentsPage from './pages/AllCommentsPage';

function App() {
  return (
  
      <Routes>
        <Route path="/" element={<Navigate to="/Main" />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/orders/:id" element={<OrdersDetail/>} />
        <Route path="/Profile" element={<ProtectedRoute element={Profile} />} />
        <Route path="/OrdersPage" element={<OrdersPage />} />
        <Route path="/Products"  element={<Products />} />
        <Route path="/ShowClient" element= {<ShowClient/>} />
        <Route path="/SubscribedClient" element= {<SubscribedClient/>} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/Signin" element= {<Signin/>} />
        <Route path="/Error" element={<Error/>} />
        <Route path="/MostSellers" element={<MostSellers/>} />
        <Route path="/Basket" element={<Basket/>} />
        <Route path="/Communication" element={<Communication/>} />
        <Route path="/Opportunities" element={<Opportunities/>} />
        <Route path="/AllAdresses" element={<AllAdresses/>} />
        <Route path="/Adresspage" element={<AdressPage/>} />
        <Route path="/products/:kind" element={<ProductKindPages/>} />
        <Route path="/favproducts/:kind" element={<ProductKindFavs/>} />
        <Route path="/products/:a" element={<SimilarProductsCard/>} />
        <Route path="/products/:kind/:type" element={<FilteredProductsPage />} />
        <Route path="/FavProducts" element={<FavProducts/>} />
        <Route path="/AllCommentsPage" element={<AllCommentsPage/>} />



      </Routes>
  
  );
}

export default App;