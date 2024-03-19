import QuantityBtn from "src/Components/QuantityBtn";

export default function CartItem() {
  return (
    <div className="w-full h-auto flex justify-center">
      <div className="w-11/12 h-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img
            src="Post-Images/circle.jpg"
            className="w-12 h-12 rounded-md"
            alt=""
          />
          <span className="text-sm font-semibold">Circle</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm font-semibold">75.00$</span>
          <QuantityBtn
            parentClassname="w-24 h-12 flex text-center rounded overflow-hidden border-[1px] border-gray-200"
            incClassName="w-10 bg-white text-md font-semibold text-center"
            inpClassName="w-full h-full bg-white text-md font-semibold text-center outline-none border-x-[1px] border-gray-200"
            decClassName="w-10 bg-white text-md font-semibold text-center"
          />
        </div>
      </div>
    </div>
  );
}
