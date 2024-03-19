import { Link } from "react-router-dom";
import useSeasonCategory from "src/Store/useSeasonCategory";
import useDiscount from "src/Store/useDiscount";
import useProductCategory from "src/Store/useProductCategory";

export default function PlantCollection() {
  const { isSeasonCategory, setSeasonCategory } = useSeasonCategory();
  const { isDiscount } = useDiscount();
  const { isProductCategory, setProductCategory } = useProductCategory();

  return (
    <form
      action=""
      method="post"
      name="plantCollection"
      className="w-full mt-24"
    >
      <span className="block text-center text-5xl font-bold tracking-wide font-serif">
        Flower Collection
      </span>
      <div className="grid grid-cols-3 gap-2 mt-20">
        <Link
          to={"/Product"}
          name="springFlower"
          className="h-96 w-full col-span-2 relative"
          onClick={() => setProductCategory("flower") || setSeasonCategory("spring")}
        >
          <span className="absolute bottom-4 left-4 text-white text-2xl font-semibold">
            Spring
          </span>
          <img
            className="w-auto h-full"
            src={`Home-Images/FlowerCollection/Columbine-Flower.jpg`}
            alt="Post Img"
          />
        </Link>
        <Link
          to={"/Product"}
          name="summerFlower"
          className="h-96 w-full relative"
          onClick={() => setProductCategory("flower") || setSeasonCategory("summer")}
        >
          <span className="absolute bottom-4 left-4 text-white text-2xl font-semibold">
            Summer
          </span>
          <img
            className="w-auto h-full"
            src={`Home-Images/FlowerCollection/Marigold-Flower.jpg`}
            alt="Post Img"
          />
        </Link>
        <Link
          to={"/Product"}
          name="autumnFlower"
          className="h-96 w-full relative"
          onClick={() => setProductCategory("flower") || setSeasonCategory("autumn")}
        >
          <span className="absolute bottom-4 left-4 text-white text-2xl font-semibold">
            Autumn
          </span>
          <img
            className="w-auto h-full"
            src={`Home-Images/FlowerCollection/Dahlia-Flower.jpg`}
            alt="Post Img"
          />
        </Link>
        <Link
          to={"/Product"}
          name="winterFlower"
          className="h-96 w-full col-span-2 relative"
          onClick={() => setProductCategory("flower") || setSeasonCategory("winter")}
        >
          <span className="absolute bottom-4 left-4 text-white text-2xl font-semibold">
            Winter
          </span>
          <img
            className="w-auto h-full"
            src={`Home-Images/FlowerCollection/Winter-Flower.jpg`}
            alt="Post Img"
          />
        </Link>
      </div>
    </form>
  );
}
