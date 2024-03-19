import { useState, useEffect } from "react";
import QuantityBtn from "src/Components/QuantityBtn";
import Button from "src/Components/Button";
import postData from "src/Forms/Post/data";
import axios from "axios";
import useSingleProductStore from "src/Store/useSingleProductStore";

export default function SingleProduct() {
  const { isSingleProduct, setSingleProduct } = useSingleProductStore();
  console.log(isSingleProduct);
  const [saved, setSaved] = useState(false);

  const [productData, setProductData] = useState({});

  const [titleValue, setTitleValue] = useState();
  const [descriptionValue, setDescriptionValue] = useState();
  const [categoryValue, setCategoryValue] = useState();
  const [seasonValue, setSeasonValue] = useState();
  const [priceValue, setPriceValue] = useState();
  const [discountValue, setDiscountValue] = useState();
  const [quantityValue, setQuantityValue] = useState();
  const [photoValue, setPhotoValue] = useState();

  // useEffect(() => {
  //   // Fetch the product data for the specified productId
  //   const fetchProductData = async () => {
  //     try {
  //       const response = await axios.get(
  //         `https://jsonplaceholder.typicode.com/users/${isSingleProduct}`
  //       ).then((response)=>{

  //         setProductData(response.data);
  //         setTitleValue(response.data.name)
  //         setDescriptionValue(response.data.phone)
  //         setCategoryValue(response.data.street)
  //         setSeasonValue(response.data.phone)
  //         setPriceValue(response.data.phone)
  //         setDiscountValue(response.data.phone)
  //         setQuantityValue(response.data.phone)
  //         setPhotoValue()
  //         console.log("productData: " + productData.name);

  //       });
  //       // console.log("aaa");

  //       console.log(response.data);
  //     } catch (error) {
  //       console.error("Error fetching product data:", error);
  //     }
  //   };

  //   fetchProductData();
  // }, [productData.id]);

  const [posts, setPosts] = useState([]);
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
    } catch (error) {
      setError(error.message);
    }
  };

  if (error) {
    return <p>Error: {error}</p>;
  }

  posts.map((product) =>
    product.id == isSingleProduct ? setTitleValue(product.name) : ""
  );

  return (
    <form
      id="reviewProduct"
      name="reviewProduct"
      className="w-5/6 mx-auto mt-[7.5rem] scrollbar-hide bg-inherit mb-12 rever"
      method=""
    >
      <div className="flex justify-between">
        <div className="w-[31rem] h-[30rem] relative overflow-hidden rounded-lg">
          <img className="w-[100%] h-[100%]" src={photoValue} alt="Post Img" />
          <div className="w-16 h-16 flex justify-center items-center absolute bottom-0 right-0 bg-gray-200 rounded-tl-lg">
            <Button
              onClick={() => {
                setSaved(!saved);
              }}
              className={` w-10 h-10 `}
            >
              <img
                src={`${saved ? "Save-Post.png" : "Unsave-Post.png"}`}
                className="w-full h-full"
                alt=""
              />
            </Button>
          </div>
        </div>
        <div className="w-2/4 h-[28rem] flex flex-col justify-between">
          <div className="flex flex-col gap-8">
            <span
              className="text-5xl font-semibold"
              name="item-title"
              id="item-title"
            >
              {postData[2].title}
            </span>
            <p
              name="item-discription"
              id="item-discription"
              className="w-full text-justify"
            >
              Known for its elegant and mysterious aura, the Black Baccara Rose
              (Rosa ‘Black Baccara’) captivates with its nearly black, beautiful
              deep crimson shade blooms. These roses are often associated with
              romance and luxury due to their velvety texture and intense hue.
              With a strong, pleasant fragrance, Black Baccara Roses are popular
              for bouquets and garden displays. Gardeners value this cultivar
              for its resilience and ability to withstand various weather
              conditions. Proper care, including regular pruning and adequate
              sunlight.
            </p>
          </div>
          <div className="flex flex-col justify-between h-52 -mb-7">
            <div className="h-[7rem] flex flex-col justify-around gap-4">
              <span
                className="text-4xl tracking-tight"
                name="item-category"
                id="item-category"
              >
                CATEGORY | {postData[2].category}
              </span>
              <span
                className="text-4xl tracking-tight"
                name="item-season"
                id="item-season"
              >
                SEASON | {postData[2].season}
              </span>
              <span
                className="text-2xl tracking-tight"
                name="item-price"
                id="item-price"
              >
                {postData[2].discount != "" ? (
                  <div className="flex gap-2">
                    <span className="font-bold line-through">
                      {postData[2].price}
                    </span>
                    <span className="font-bold text-red-500">
                      {postData[2].discount}
                    </span>
                  </div>
                ) : (
                  <span className="font-bold">{postData[2].price}</span>
                )}
              </span>
            </div>
            <div className="flex justify-between -mb-2">
              <QuantityBtn
                parentClassname="w-44 h-14 flex text-center rounded overflow-hidden border-[1px] border-gray-200"
                incClassName="w-10 bg-white text-xl font-semibold text-center"
                inpClassName="w-full h-full bg-white text-xl font-semibold text-center outline-none border-x-[1px] border-gray-200"
                decClassName="w-10 bg-white text-xl font-semibold text-center"
              />
              <Button className="w-[25rem] bg-[#087516] text-white font-bold rounded">
                Add To Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
