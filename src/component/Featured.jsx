import Dup_Featured from "./Dup_Featured"



function Featured() {
  return (
    <>
    <div className="flex flex-row justify-center  font-bold text-2xl ">
        <h1 className="flex">Featured product</h1>
        <hr className="mt-4 w-57 h-1 bg-green-700"/>
    </div>
    

    <div className="flex flex-row justify-center  ">
    <Dup_Featured img=" public/Featured/feature-1.jpg" alt="Banana" name="Product1" price="10.00" />
    <Dup_Featured img=" public/Featured/feature-2.jpg" alt="beans" name="Product2" price="20.00" />
    <Dup_Featured img=" public/Featured/feature-3.jpg" alt="beanshari" name="Product3" price="30.00" />
    <Dup_Featured img=" public/Featured/feature-4.jpg" alt="female" name="Product4" price="40.00" />
    </div>
    <div className="flex flex-row justify-center ">
    <Dup_Featured img=" public/Featured/feature-5.jpg" alt="Banana" name="Product1" price="10.00"  />
    <Dup_Featured img=" public/Featured/feature-6.jpg" alt="beans" name="Product2" price="20.00" />
    <Dup_Featured img=" public/Featured/feature-7.jpg" alt="beanshari" name="Product3" price="30.00" />
    <Dup_Featured img=" public/Featured/feature-8.jpg" alt="female" name="Product4" price="40.00" />

    </div>

    </>
  )
}

export default Featured