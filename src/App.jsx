

import Blog from "./component/Blog"
import Categories from "./component/Categories"
import Featured from "./component/Featured";
import Footer from "./component/Footer";
import Nav from "./component/Nav";
import Header from "./component/Header";
import Banner from "./component/Banner"
import Showcase from "./component/Showcase";




function App() {


  return (
    <>
    <Nav/>
    <Header />
    <Banner />
     <Categories />
     <Featured />
     <Showcase />
      <Blog/>
      <Footer />
      </>
  );
    

}
export default App
