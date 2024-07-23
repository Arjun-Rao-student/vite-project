import React from "react";
import Dup_Blog from "./Dup_Blog";

function Blog() {
  return (
    <div>
      <div className="flex flex-col mt-10 gap-y-4 justify-around">
        <div className="flex flex-col mx-auto justify-center">
          <h1 className="font-bold text-4xl">Blog</h1>
          <hr className="mt-3 w-10 h-1 rounded mx-auto bg-green-400" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-12">
          <Dup_Blog
            img="Blog/ar-1.jpg"
            heading="Beans"
            text="hi this is very special product. You can buy this from only this website . its very trusted website"
            date="21 March 2024"
            count="5"
          />
          <Dup_Blog
            img="Blog/ar-2.jpg"
            heading="Orange Fruit "
            text="hi this is very special product. You can buy this from only this website . its very trusted website"
            date="21 March 2024"
            count="6"
          />
          <Dup_Blog
            img="Blog/ar-3.jpg"
            heading="Juices"
            text="hi this is very special product. You can buy this from only this website . its very trusted website"
            date="21 March 2024"
            count="4"
          />
        </div>
      </div>
    </div>
  );
}

export default Blog;
