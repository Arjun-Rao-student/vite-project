

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
// import Bulk_Form from "./component/Bulk_Form";

function App() {


  return (
    <>
<Cards />
    <Nav/>
    <Header />
    <Banner />
     <Categories />
     <Featured />
     <Banner_mid />
     <Showcase />
      <Blog/>
      <Footer />
      </>
  );
    

}
export default App
