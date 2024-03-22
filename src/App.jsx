

import Blog from "./component/Blog"
import Categories from "./component/Categories"
import Featured from "./component/Featured";
import Footer from "./component/Footer";
import Nav from "./component/Nav";
import Header from "./component/Header";
import Banner from "./component/Banner"
import Showcase from "./component/Showcase";
import Banner_mid from "./component/Banner_mid";




function App() {


  return (
    <>
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
