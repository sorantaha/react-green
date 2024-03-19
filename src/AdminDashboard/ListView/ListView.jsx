import { useState, useEffect } from "react";
import postData from "src/Forms/Post/data";
import FlowerSeasonCategory from "./AdminFlowerCategory/FlowerSeasonCategory";
import "./module.css";

import useFlowerSeasons from "./AdminFlowerCategory/useFlowerSeasons";
import useTreeSeasons from "./AdminTreeCategory/useTreeSeasons";
import TreeSeasonCategory from "./AdminTreeCategory/TreeSeasonsCategory";

let flowerCategory = "flower";
let treeCategory = "tree";
let giftCategory = "gift";

function postReturn(post, SeasonCategory, isProductCategory) {
  if (post.category == isProductCategory) {
    if (post.season == SeasonCategory) {
      return (
        <tr className="odd:bg-gray-300  text-center">
          <td>{post.id}</td>
          <td>{post.title}</td>
          <td>{post.price}</td>
          <td>{post.discount}</td>
          <td>{post.city}</td>
        </tr>
      );
    } else {
    }
  }
}

export default function ListView() {
  const { isFlowerSeasons } = useFlowerSeasons();
  const { isTreeSeasons } = useTreeSeasons();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setPosts(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="w-4/5 h-auto  absolute right-0">
      <p className="text-3xl tracking-wider font-bold mt-10 ml-6">
        All Products
      </p>
      <div className="w-[74rem] py-10  mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-8">
          <p className="text-2xl font-bold">Flowers</p>
          <div className="">
            <div className="flex gap-4">
              <FlowerSeasonCategory></FlowerSeasonCategory>
            </div>

            <form
              action=""
              method=""
              className="w-full h-[30rem] overflow-auto scrollbar-hide mt-4 border-y-2"
            >
              <table className="w-full h-auto">
                <tr className="bg-gray-300">
                  <th>ID</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Discount</th>
                  <th>Quantity</th>
                </tr>
                {postData.map((post) =>
                  postReturn(post, isFlowerSeasons, flowerCategory)
                )}
              </table>
            </form>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <p className="text-2xl font-bold">Trees</p>
          <div className="">
            <div className="flex gap-4">
              <TreeSeasonCategory></TreeSeasonCategory>
            </div>

            <form
              action=""
              method=""
              className="w-full h-[30rem] overflow-auto scrollbar-hide mt-4 border-y-2"
            >
              <table className="w-full h-auto">
                <tr className="bg-gray-300">
                  <th>ID</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Discount</th>
                  <th>Quantity</th>
                </tr>
                {postData.map((post) =>
                  postReturn(post, isTreeSeasons, treeCategory)
                )}
              </table>
            </form>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <p className="text-2xl font-bold">Gifts</p>
          <div className="">
            <div className="flex gap-4"></div>

            <form
              action=""
              method=""
              className="w-full h-[30rem] overflow-auto scrollbar-hide mt-4 border-y-2"
            >
              <table className="w-full h-auto">
                <tr className="bg-gray-300">
                  <th>ID</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Discount</th>
                  <th>Quantity</th>
                </tr>
                {postData.map((post) =>
                  post.category == giftCategory ? (
                    <tr className="odd:bg-gray-300  text-center">
                      <td>{post.id}</td>
                      <td>{post.title}</td>
                      <td>{post.price}</td>
                      <td>{post.discount}</td>
                      <td>{post.city}</td>
                    </tr>
                  ) : (
                    ""
                  )
                )}
              </table>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

{
}
