import Cardswiper from "@/components/Cardswiper";
import Category from "@/components/Category";
import ProductsCard from "@/components/ProductsCard";


const Home = async () => {

  // mongodb+srv://divhp1507:div123@cluster0.ibgcqc9.mongodb.net/
  return (
    <>
      <div className="mx-8 pt-8 md:mx-16 lg:mx-32 ">
        <div className="flex">
          <div className=" border-r-2 border-gray-200 pr-4">
            <Category />
          </div>
          <div className="pl-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla,
            quae eius quas itaque corporis animi nobis fugit impedit doloremque
            error quos laboriosam explicabo temporibus molestias?
            <div></div>
          </div>
        </div>
        <div>
          <div className="flex  items-center mt-16">
            <div className="bg-red-400 w-3 h-6 rounded-sm"></div>
            <span>Todays</span>
          </div>
          <Cardswiper />
        </div>
      </div>
    </>
  );
};
export default Home;
