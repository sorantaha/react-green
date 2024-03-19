import ProductCategory from "./ProductCategory";
import Button from "../../Components/Button";
import useSeasonCategory from "src/Store/useSeasonCategory";
import useDiscount from "src/Store/useDiscount";
import useProductCategory from "src/Store/useProductCategory";

export default function ProductNav() {
  const { isSeasonCategory, setSeasonCategory } = useSeasonCategory();
  const { isDiscount, setDiscount } = useDiscount();
  const { isProductCategory, } = useProductCategory();
  return (
    <form className="fixed left-0 right-0 mt-[-5rem] bg-white" method="">
      <div className="w-5/6 mx-auto flex justify-between my-[0.9375rem]">
        <ProductCategory></ProductCategory>
        <div className=" flex gap-4  bg-transparent">
          <Button
            className={`h-12 rounded-[4px] text-[#349e60] focus:bg-[#087516] focus:text-white text-[1.125rem] font-bold px-4 ${
              isSeasonCategory !== "all"
                ? "bg-gray-100 hover:bg-gray-200"
                : "bg-[#087516] text-white hover:bg-[#087516] hover:text-white focus:bg-[#087516] focus:text-white"
            }`}
            id="all"
            name="all"
            value="all"
            onClick={() => setSeasonCategory("all") || setDiscount(false)}
          >
            ALL
          </Button>
          <Button
            className={`h-12 rounded-[4px]  text-[#349e60] focus:bg-[#087516] focus:text-white text-[1.125rem] font-bold px-4 
            ${
              isSeasonCategory !== "spring"
                ? "bg-gray-100 hover:bg-gray-200"
                : "bg-[#087516] text-white hover:bg-[#087516] hover:text-white"
            }
            ${
              isProductCategory !== "gift"
                ? ""
                : "hidden"
            }`}
            id="spring"
            name="spring"
            value="spring"
            onClick={() => setSeasonCategory("spring") || setDiscount(false)}
            disable={isProductCategory !== "gift" ? false : true}
          >
            SPRING
          </Button>
          <Button
            className={`h-12 rounded-[4px] text-[#349e60] focus:bg-[#087516] focus:text-white text-[1.125rem] font-bold px-4 
            ${
              isSeasonCategory !== "summer"
                ? "bg-gray-100 hover:bg-gray-200"
                : "bg-[#087516] text-white hover:bg-[#087516] hover:text-white"
            }
            ${
              isProductCategory !== "gift"
                ? ""
                : "hidden"
            }`}
            id="summer"
            name="summer"
            onClick={() => setSeasonCategory("summer") || setDiscount(false)}
            disable={isProductCategory !== "gift" ? false : true}
          >
            SUMMER
          </Button>
          <Button
            className={`h-12 rounded-[4px] text-[#349e60] focus:bg-[#087516] focus:text-white text-[1.125rem] font-bold px-4 
            ${
              isSeasonCategory !== "autumn"
                ? "bg-gray-100 hover:bg-gray-200"
                : "bg-[#087516] text-white hover:bg-[#087516] hover:text-white"
            }
            ${
              isProductCategory !== "gift"
                ? ""
                : "hidden"
            }`}
            id="autumn"
            name="autumn"
            onClick={() => setSeasonCategory("autumn") || setDiscount(false)}
            disable={isProductCategory !== "gift" ? false : true}
          >
            AUTUMN
          </Button>
          <Button
            className={`h-12 rounded-[4px] text-[#349e60] focus:bg-[#087516] focus:text-white text-[1.125rem] font-bold px-4 
            ${
              isSeasonCategory !== "winter"
                ? "bg-gray-100 hover:bg-gray-200"
                : "bg-[#087516] text-white hover:bg-[#087516] hover:text-white"
            }
            ${
              isProductCategory !== "gift"
                ? ""
                : "hidden"
            }`}
            id="winter"
            name="winter"
            onClick={() => setSeasonCategory("winter") || setDiscount(false)}
            disable={isProductCategory !== "gift" ? false : true}
          >
            WINTER
          </Button>
          <Button
            className={`h-12 rounded-[4px]  text-[#349e60] focus:bg-[#087516] focus:text-white text-[1.125rem] font-bold px-4 
            ${
              isSeasonCategory !== "fourSeasons"
                ? "bg-gray-100 hover:bg-gray-200"
                : "bg-[#087516] text-white hover:bg-[#087516] hover:text-white"
            }
            ${
              isProductCategory !== "gift"
                ? ""
                : "hidden"
            }`}
            id="fourSeasons"
            name="fourSeasons"
            onClick={() =>
              setSeasonCategory("fourSeasons") || setDiscount(false)
            }
            disable={isProductCategory !== "gift" ? false : true}
          >
            Four Seasons
          </Button>
          <Button
            className={`h-12 rounded-[4px]  text-[#349e60] focus:bg-[#087516] focus:text-white text-[1.125rem] font-bold px-4 
            ${
              isDiscount !== true
                ? "bg-gray-100 hover:bg-gray-200"
                : "bg-[#087516] text-white hover:bg-[#087516] hover:text-white"
            }
            `}
            id="discount"
            name="discount"
            onClick={() => setDiscount(true) || setSeasonCategory("")}
          >
            DISCOUNT
          </Button>
        </div>
      </div>
    </form>
  );
}
