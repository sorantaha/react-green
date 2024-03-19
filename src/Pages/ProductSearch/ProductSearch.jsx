import React, { useState, useEffect } from "react";

import postData from "src/Forms/Post/data";
import Post from "src/Forms/Post/Post";

let handleSearchChangeValue;

export default function ProductSearch() {
  const [searchTerm, setSearchTerm] = useState();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const ProductList = () => {

    useEffect(() => {
      fetchProducts();
    }, []);

    const fetchProducts = () => {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((data) => {
          setProducts(data);
          setFilteredProducts(data);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    };

    const handleSearchChange = (event) => {
      const searchValue = event.target.value;
      setSearchTerm(searchValue);
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredProducts(filtered);
    };
    handleSearchChangeValue=handleSearchChange;

  };
  ProductList();

  return (
    <div className="w-5/6 mx-auto mt-[6rem] bg-transparent">
      <div className="w-96 mx-auto">
        <input
          className="w-96 h-10 bg-gray-200 rounded-full px-3 outline-none"
          type={"text"}
          placeholder={"Search"}
          value={searchTerm}
          onChange={handleSearchChangeValue}
          autofocus
        />
      </div>
      <div className="grid grid-cols-5 gap-4 my-12">
        {filteredProducts.map((post) => (
          <Post
            key={post.id}
            photo={post.src}
            title={post.title}
            price={post.price}
            discount={post.discount}
          ></Post>
        ))}
      </div>
    </div>
  );
}
