

import Blog from "./component/Blog"
import Categories from "./component/Categories"
import Featured from "./component/Featured";
import Footer from "./component/Footer";
import Nav from "./component/Nav";
import Header from "./component/Header";
import Banner from "./component/Banner"




function App() {


  return (
    <>
    <Nav/>
    <Header />
    <Banner />
     <Categories />
     <Featured />
      <Blog/>
      <Footer />
      </>
  );
    

}
export default App
