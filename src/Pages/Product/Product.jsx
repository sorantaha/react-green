import React, { useState, useEffect } from "react";
import postData from "src/Forms/Post/data";
import ProductNav from "src/Pages/Product/ProductNav";
import Post from "src/Forms/Post/Post";
import useSeasonCategory from "src/Store/useSeasonCategory";
import useDiscount from "src/Store/useDiscount";
import useProductCategory from "src/Store/useProductCategory";
import useSingleProductStore from "src/Store/useSingleProductStore";

function postReturn(post, isSeasonCategory, isDiscount, isProductCategory) {
  if (isProductCategory === post.category) {
    if (isSeasonCategory === "all" && isDiscount === false) {
      return (
        <Post
          key={+post.id}
          Id={post.id}
          className=""
          photo={post.src}
          title={post.title}
          price={post.price}
          discount={post.discount}
        ></Post>
      );
    }
    if (isDiscount === true && post.discount !== "") {
      return (
        <Post
          key={+post.id}
          Id={post.id}
          className=""
          photo={post.src}
          title={post.title}
          price={post.price}
          discount={post.discount}
        ></Post>
      );
    }
    if (isSeasonCategory === post.season) {
      return (
        <Post
          key={+post.id}
          className=""
          photo={post.src}
          title={post.title}
          price={post.price}
          discount={post.discount}
        ></Post>
      );
    }
  }

  return "";
}
export default function Product() {
  const { isSeasonCategory } = useSeasonCategory();
  const { isDiscount } = useDiscount();
  const { isProductCategory } = useProductCategory();
  console.log(
    isSeasonCategory + " , " + isDiscount + " , " + isProductCategory
  );

  // const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/todos"
  //     );
  //     if (!response.ok) {
  //       throw new Error("Failed to fetch data");
  //     }
  //     const data = await response.json();
  //     setPosts(data);
  //     setLoading(false);
  //   } catch (error) {
  //     setError(error.message);
  //     setLoading(false);
  //   }
  // };

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  // if (error) {
  //   return <p>Error: {error}</p>;
  // }

  return (
    <div className="w-5/6 mx-auto bg-transparent">
      <ProductNav></ProductNav>
      <div className="grid grid-cols-5 gap-4 mt-40 mb-12">
        {postData.map((post) =>
          postReturn(post, isSeasonCategory, isDiscount, isProductCategory)
        )}
      </div>
    </div>
  );
}
