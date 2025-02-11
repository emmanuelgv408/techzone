import React from "react";
import { products } from "../assets/assets";
import { useParams } from "react-router-dom";
import accessoriesCategory from "../assets/AccesoriesCategory.jpg";
import audioCategory from "../assets/AudioCategory.jpg";
import cameraCategory from "../assets/CameraCategory.jpg";
import gamingCategory from "../assets/GamingCategory.jpg";
import headphoneCategory from "../assets/HeadphoneCategory.jpg";
import laptopCategory from "../assets/LaptopCategory.jpg";
import smartphoneCategory from "../assets/SmartphoneCategory.jpg";
import wearablesCategory from "../assets/WearablesCategory.jpg";
import ProductCard from "../components/ProductCard";

const categoryBackgrounds: { [key: string]: string } = {
  laptops: laptopCategory,
  smartphones: smartphoneCategory,
  audio: audioCategory,
  cameras: cameraCategory,
  gaming: gamingCategory,
  headphones: headphoneCategory,
  accessories: accessoriesCategory,
  wearables: wearablesCategory,
};

const CategoryPage = () => {
  const { category, brand } = useParams<{ category: string; brand?: string}>();
  const filteredProducts = products.filter(
    (product) =>
      product.category.toLowerCase() === category?.toLowerCase() &&
      (!brand || product.brand.toLowerCase() === brand.toLowerCase())
  );

  const backgroundImg = category ? categoryBackgrounds[category] : null;

  if (!backgroundImg) {
    return (
      <div>
        <h1 className="text-center text-xl font-bold text-red-500 mt-4">
          Category not found!
        </h1>
      </div>
    );
  }

  return (
    <div>
 
      <div className="relative">
        <img
          src={backgroundImg}
          alt={`${category} background`}
          className="w-full h-64 object-cover"
        />
        <div className="text-white absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <h1 className="text-center text-2xl font-bold mt-4 uppercase">
            {category}
          </h1>
        </div>
      </div>


      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
