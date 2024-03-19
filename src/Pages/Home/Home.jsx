import HomeSlider from "./HomeSlider";
import "./module.css";
import PlantCollection from "./PlantCollection";
import Service from "./Services";
import DiscountSection from "./DiscountSection";
import ChoosingUs from "./ChoosingUs";
import GiftCollection from "./GiftCollection";
export default function Home({ className = "", children }) {
  return (
    <div>
      <HomeSlider></HomeSlider>
      <div className="w-5/6 mx-auto mt-[1rem]">
        <PlantCollection></PlantCollection>
        <Service></Service>
      </div>
        <DiscountSection></DiscountSection>
      <div className="w-5/6 mx-auto mt-[1rem]">
        <ChoosingUs></ChoosingUs>
        <GiftCollection></GiftCollection>
      </div>
    </div>
  );
}