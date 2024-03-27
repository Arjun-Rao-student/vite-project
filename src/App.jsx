import Blog from "./component/Blog"
import Categories from "./component/Categories"
import Featured from "./component/Featured";
import Footer from "./component/Footer";
import Nav from "./component/Nav";
import Header from "./component/Header";
import Banner from "./component/Banner"
import Showcase from "./component/Showcase";
import Banner_mid from "./component/Banner_mid";
import Cards from "./component/pages/Cards";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Layout from "./component/Layout";
import Bulk_Form from "./component/Bulk_Form";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route path="vegetables" element={<Cards/>}/>
        <Route path="bulkOrder" element={<Bulk_Form /> }/>   
      </Routes>
    </BrowserRouter>
  );
  
}
export default App
