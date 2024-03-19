import Button from "src/Components/Button";
import CartItem from "./cartItem";
import useCardShowStore from "src/Store/useCardShowStore";
export default function AddToCard(className, onClick) {
  const { isOpen } = useCardShowStore();
  return (
    <div
      className={`w-[30rem] h-screen bg-green-50 border-l-[1px] fixed right-0 bottom-0 z-10 flex flex-col ${
        isOpen ? " duration-300" : "translate-x-full duration-300"
      }`}
    >
      <p className="w-full h-16 bg-green-50 text-2xl font-bold absolute top-0 mt-20 pt-4 pl-4 border-b-[1px]">
        Shopping Cart
      </p>
      <div className="pt-40 scrollbar-hide overflow-scroll">
        <div
          className="w-full h-auto grid gap-4 scrollbar-hide mb-28"
          name={`itemContainer`}
          id={`itemContainer`}
        >
          <CartItem></CartItem>
          <CartItem></CartItem>
          <CartItem></CartItem>
          <CartItem></CartItem>
          <CartItem></CartItem>
          <CartItem></CartItem>
          <CartItem></CartItem>
          <CartItem></CartItem>
          <CartItem></CartItem>
          <CartItem></CartItem>
          <CartItem></CartItem>
          <CartItem></CartItem>
          <CartItem></CartItem>
          <CartItem></CartItem>
          <CartItem></CartItem>
        </div>
        <div className="w-full h-20 bg-green-50 border-t-[1px] flex justify-center items-center gap-5 absolute bottom-0">
          <span
            className="w-52 h-14 bg-transparent text-black text-2xl font-semibold tracking-wider flex justify-center items-center"
            name={`totalPrice`}
            id={`totalPrice`}
          >
            Order
          </span>
          <Button
            className="w-52 h-14 bg-[#088516] rounded-md text-white text-2xl font-semibold tracking-wider"
            name={`orderBtn`}
            id={`orderBtn`}
          >
            Order
          </Button>
        </div>
      </div>
    </div>
  );
}
