// import Button from "src/Components/Button";
import "./module.css";
import { useState } from "react";
import axios from "axios";

export default function AddProduct() {
  const [productData, setProductData] = useState({
    id: "",
    name: "",
    description: "",
    category: "",
    season: "",
    price: 0,
    discount: 0,
    quantity: 0,
    photo: "",
  });

  console.log(productData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        productData
      );
      console.log("Product added successfully:", response.data);
      alert("Product added successfully:", response.data);
      // Optionally, you can redirect the user or perform any other action after successful addition
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="w-4/5 h-auto absolute right-0">
      <p className="text-3xl tracking-wider font-bold mt-10 ml-6">
        Add Product
        <form
          className="w-11/12 mx-auto flex flex-col justify-end items-end"
          onSubmit={handleSubmit}
        >
          <div className="w-full py-10 text-xl grid grid-cols-2 gap-7">
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="w-full h-12 outline-none px-3 rounded-sm full-shadow"
                id="name"
                name="name"
                value={productData.name}
                onChange={handleChange}
                placeholder="Name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="w-full h-12 outline-none px-3 rounded-sm full-shadow"
                id="description"
                name="description"
                value={productData.description}
                onChange={handleChange}
                placeholder="Description"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="category">Category</label>
              <input
                type="text"
                className="w-full h-12 outline-none px-3 rounded-sm full-shadow"
                id="category"
                name="category"
                value={productData.category}
                onChange={handleChange}
                placeholder="Category"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="season">Season</label>
              <input
                type="text"
                className="w-full h-12 outline-none px-3 rounded-sm full-shadow"
                id="season"
                name="season"
                value={productData.season}
                onChange={handleChange}
                placeholder="Season"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="price">Price</label>
              <input
                type="text"
                className="w-full h-12 outline-none px-3 rounded-sm full-shadow"
                id="price"
                name="price"
                value={productData.price}
                onChange={handleChange}
                placeholder="Price"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="discount">Discount</label>
              <input
                type="text"
                className="w-full h-12 outline-none px-3 rounded-sm full-shadow"
                id="discount"
                name="discount"
                value={productData.discount}
                onChange={handleChange}
                placeholder="Discount"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="quantity">Quantity</label>
              <input
                type="text"
                className="w-full h-12 outline-none px-3 rounded-sm full-shadow"
                id="quantity"
                name="quantity"
                value={productData.quantity}
                onChange={handleChange}
                placeholder="Discount"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="photo">Photo</label>
              <div className="w-full h-12 px-3 rounded-sm full-shadow flex items-center">
                <input
                  type="text"
                  className="file:hidden"
                  id=""
                  name="photo"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            name="submit"
            id="submit"
            className="w-60 h-14 bg-[#087516] text-xl text-white rounded-md"
          >
            Add Product
          </button>
        </form>
      </p>
    </div>
  );
}
