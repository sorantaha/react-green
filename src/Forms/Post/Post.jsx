import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "src/Components/Button";
import useSingleProductStore from "src/Store/useSingleProductStore";
import postData from "./data";

export default function Post({ key, Id, photo, method, price, title, discount }) {
  const { isSingleProduct, setSingleProduct } = useSingleProductStore();

  const [saved, setSaved] = useState(false);
  return (
    <form
      className="rounded-md w-[15.125rem] h-[23rem] flex flex-col items-center gap-[6px] overflow-hidden shadow-md shadow-stone-300 bg-white border-stone-200 border-[1px]"
      method={method}
      onChange={""}
    >
      <Link
        onClick={() => {
          setSingleProduct(key);
        }}
        to={"/SingleProduct"}
        className=" h-[58%] w-[90%] mt-3"
      >
        <img
          className="w-[100%] h-[100%] rounded"
          src={`${photo}`}
          alt="Post Img"
        />
      </Link>
      <Link to={"/SingleProduct"} className="font-bold">
        {title}
      </Link>

      {discount !== "" ? (
        <div className="flex gap-2">
          <span className="font-bold line-through">{price}</span>
          <span className="font-bold text-red-500">{discount}</span>
        </div>
      ) : (
        <span className="font-bold">{price}</span>
      )}

      <div className="w-5/6 flex justify-between items-center mt-3">
        <Button className="w-10 h-10">
          <img src="Add-Order.png" className="w-full h-full" alt="" />
        </Button>
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
    </form>
  );
}
