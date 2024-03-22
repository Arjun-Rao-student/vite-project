

import Blog from "./component/Blog"
import Categories from "./component/Categories"
import Featured from "./component/Featured";
import Footer from "./component/Footer";
import Nav from "./component/Nav";
import Header from "./component/Header";
import Banner from "./component/Banner"
import Showcase from "./component/Showcase";
import Banner1 from "./component/Banner1";




function App() {


  return (
    <>
    <Nav/>
    <Header />
    <Banner />
     <Categories />
     <Featured />
     <Banner1 />
     <Showcase />
      <Blog/>
      <Footer />
      </>
  );
    

}
export default App
