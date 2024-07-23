import Dup_Featured from "./Dup_Featured";

function Featured() {
  return (
    <>
      <div className="flex flex-col justify-center font-bold text-2xl mt-7 mb-6">
        <h1 className="flex justify-center">Featured products</h1>
        <hr className="mt-3 w-24 h-1 rounded mx-auto bg-green-400" />
      </div>

      <div className="grid grid-cols-3 gap-4 md:grid-cols-4"> 
        <Dup_Featured img="Featured/feature-1.jpg" alt="Banana" name="Product1" price="10.00" />
        <Dup_Featured img="Featured/feature-2.jpg" alt="beans" name="Product2" price="20.00" />
        <Dup_Featured img="Featured/feature-3.jpg" alt="beanshari" name="Product3" price="30.00" />
        <Dup_Featured img="Featured/feature-4.jpg" alt="female" name="Product4" price="40.00" />
        <Dup_Featured img="Featured/feature-5.jpg" alt="Banana" name="Product1" price="10.00" />
        <Dup_Featured img="Featured/feature-6.jpg" alt="beans" name="Product2" price="20.00" />
        <Dup_Featured img="Featured/feature-7.jpg" alt="beanshari" name="Product3" price="30.00" />
        <Dup_Featured img="Featured/feature-8.jpg" alt="female" name="Product4" price="40.00" />
        <div className=" lg:hidden md:grid-cols-4 ">
        <Dup_Featured img="Featured/feature-8.jpg" alt="female" name="Product4" price="40.00" />
        </div>
      </div>
    </>
  );
}

export default Featured;
