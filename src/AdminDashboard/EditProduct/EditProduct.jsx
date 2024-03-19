import Button from "src/Components/Button";
import "./module.css";
import useEditProductStore from "../ListView/useEditProductStore";
import { useState, useEffect } from "react";
import postData from "src/Forms/Post/data";
import axios from "axios";

export default function EditProduct(post) {
  const { isIdProduct } = useEditProductStore();
  console.log("clicked product: " + isIdProduct);

  const [productData, setProductData] = useState({
  });
  
  const [idValue, setIdValue] = useState();
  const [titleValue, setTitleValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState();
  const [categoryValue, setCategoryValue] = useState();
  const [seasonValue, setSeasonValue] = useState();
  const [priceValue, setPriceValue] = useState();
  const [discountValue, setDiscountValue] = useState();
  const [quantityValue, setQuantityValue] = useState();
  const [photoValue, setPhotoValue] = useState();
  console.log(titleValue);

  useEffect(() => {
    // Fetch the product data for the specified productId
    const fetchProductData = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${isIdProduct}`
        ).then((response)=>{

          setProductData(response.data)
          setIdValue(response.data.id)
          setTitleValue(response.data.name)
          setDescriptionValue(response.data.phone)
          setCategoryValue(response.data.street)
          setSeasonValue(response.data.phone)
          setPriceValue(response.data.phone)
          setDiscountValue(response.data.phone)
          setQuantityValue(response.data.phone)
          setPhotoValue()
          console.log("productData: " + productData.name);

        });
        // console.log("aaa");

        console.log(response.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProductData();
  }, [productData.id]);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `https://jsonplaceholder.typicode.com/users/${isIdProduct}`,
        {id:idValue, title:titleValue, description:descriptionValue, category:categoryValue, season:seasonValue, price:priceValue, discount:discountValue, src:photoValue}
        
      );console.log(productData.name);
      console.log("Product updated successfully");
      alert("Product updated successfully");
      // console.log(postId, postTitle, postDescription, postCategory, postSeason);
      // Optionally, you can redirect the user or perform any other action after successful update
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div className="w-4/5 h-auto absolute right-0">
      <p className="text-3xl tracking-wider font-bold mt-10 ml-6">
        Edit Product
        <form
          className="w-11/12 h-[34.75rem] mx-auto flex flex-col justify-end items-end relative"
          onSubmit={handleSubmit}
        >
          <div className="w-full h-full py-10 text-xl grid grid-rows-4 grid-cols-3 gap-7">
            <div className="flex flex-col gap-2">
              <label htmlFor="id">ID</label>
              <input
                type="text"
                className="w-full h-12 outline-none px-3 rounded-sm full-shadow"
                id="id"
                name="id"
                value={idValue}
                onChange={(event)=>setIdValue(event.target.value)}
                readOnly
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="w-full h-12 outline-none px-3 rounded-sm full-shadow"
                id="name"
                name="name"
                value={titleValue}
                onChange={(event)=>setTitleValue(event.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="w-full h-12 outline-none px-3 rounded-sm full-shadow"
                id="description"
                name="description"
                value={descriptionValue}
                onChange={(event)=>setDescriptionValue(event.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="category">Category</label>
              <input
                type="text"
                className="w-full h-12 outline-none px-3 rounded-sm full-shadow"
                id="category"
                name="category"
                value={categoryValue}
                onChange={(event)=>setCategoryValue(event.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="season">Season</label>
              <input
                type="text"
                className="w-full h-12 outline-none px-3 rounded-sm full-shadow"
                id="season"
                name="season"
                value={seasonValue}
                onChange={(event)=>setSeasonValue(event.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="price">Price</label>
              <input
                type="text"
                className="w-full h-12 outline-none px-3 rounded-sm full-shadow"
                id="price"
                name="price"
                value={priceValue}
                onChange={(event)=>setPriceValue(event.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="discount">Discount</label>
              <input
                type="text"
                className="w-full h-12 outline-none px-3 rounded-sm full-shadow"
                id="discount"
                name="discount"
                value={discountValue}
                onChange={(event)=>setDiscountValue(event.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="quantity">Quantity</label>
              <input
                type="text"
                className="w-full h-12 outline-none px-3 rounded-sm full-shadow"
                id="quantity"
                name="quantity"
                value={quantityValue}
                onChange={(event)=>setQuantityValue(event.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="photo">Photo</label>
              <div className="w-80 flex gap-2">
                <div className="w-full h-12 flex items-center px-3 text-sm outline-none full-shadow rounded-sm">
                  <input
                    type="file"
                    className="file:hidden cursor-pointer"
                    id="photo"
                    name="photo"
                    value={photoValue}
                    onChange={(event)=>setPhotoValue(event.target.value)}
                  />
                </div>
                <img src={productData.src} alt="" className="size-12 rounded-sm" />
              </div>
            </div>
          </div>
          <input
            type="submit"
            name="submit"
            id="submit"
            value={"Edit Product"}
            className="w-60 h-16 bg-[#087516] text-xl text-white rounded-md"
          />
        </form>
      </p>
    </div>
  );
}
