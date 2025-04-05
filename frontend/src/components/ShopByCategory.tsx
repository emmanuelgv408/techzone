
import { Link } from "react-router-dom";
import accessoriesCategory from '../assets/AccesoriesCategory.jpg';
import audioCategory from '../assets/AudioCategory.jpg';
import cameraCategory from '../assets/CameraCategory.jpg';
import gamingCategory from '../assets/GamingCategory.jpg';
import headphoneCategory from '../assets/HeadphoneCategory.jpg';
import laptopCategory from '../assets/LaptopCategory.jpg';
import smartphoneCategory from '../assets/SmartphoneCategory.jpg';
import wearablesCategory from '../assets/WearablesCategory.jpg';

const ShopByCategory = () => {
  return (
    <div className="uppercase px-4">
      <h1 className="text-xl text-center font-medium mb-6">Shop By Category</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {/* Laptops */}
        <div className="relative text-center">
          <img src={laptopCategory} alt="Laptops" className="w-full h-40 object-cover" />
          <Link to="/laptops" className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 font-bold">
            Laptops
          </Link>
        </div>

        {/* Smartphones */}
        <div className="relative text-center">
          <img src={smartphoneCategory} alt="Smartphones" className="w-full h-40 object-cover" />
          <Link to="/smartphones" className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 font-bold">
            Smartphones
          </Link>
        </div>

        {/* Wearables */}
        <div className="relative text-center">
          <img src={wearablesCategory} alt="Wearables" className="w-full h-40 object-cover" />
          <Link to="/wearables" className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 font-bold">
            Wearables
          </Link>
        </div>

        {/* Gaming */}
        <div className="relative text-center">
          <img src={gamingCategory} alt="Gaming" className="w-full h-40 object-cover" />
          <Link to="/gaming" className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 font-bold">
            Gaming
          </Link>
        </div>

        {/* Audio */}
        <div className="relative text-center">
          <img src={audioCategory} alt="Audio" className="w-full h-40 object-cover" />
          <Link to="/audio" className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 font-bold">
            Audio
          </Link>
        </div>

        {/* Cameras */}
        <div className="relative text-center">
          <img src={cameraCategory} alt="Cameras" className="w-full h-40 object-cover" />
          <Link to="/cameras" className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 font-bold">
            Cameras
          </Link>
        </div>

        {/* Accessories */}
        <div className="relative text-center">
          <img src={accessoriesCategory} alt="Accessories" className="w-full h-40 object-cover" />
          <Link to="/accessories" className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 font-bold">
            Accessories
          </Link>
        </div>

        {/* Headphones */}
        <div className="relative text-center">
          <img src={headphoneCategory} alt="Headphones" className="w-full h-40 object-cover" />
          <Link to="/headphones" className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 font-bold">
            Headphones
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
