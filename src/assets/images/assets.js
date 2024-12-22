import appleWatchImg from './AppleWatch.jpg';
import boseSpeakerImg from './BoseSpeaker.jpg';
import cannonCameraImg from './CanonCamera.jpg';
import dellLaptopImg from './DellLaptop.jpg';
import iphoneImg from './IPhone.jpg';
import logitechImg from './LogitechMouse.jpg';
import nintendoSwitchImg from './NintendoSwitch.jpg';
import playstationImg from './Playstation5.jpg';
import samsungImg from './SamsungPhone.jpg';
import sonyHeadphonesImg from './SonyHeadphones.jpg';

import accesoriesCategory from './AccesoriesCategory.jpg';
import audioCategory from './AudioCategory.jpg';
import cameraCategory from './CameraCategory.jpg';
import gamingCategory from './GamingCategory.jpg';
import headphoneCategory from './HeadphoneCategory.jpg';
import laptopCategory from './LaptopCategory.jpg';
import smartphoneCategory from './SmartphoneCategory.jpg';
import wearablesCategory from './WearablesCategory.jpg';


import heroImg from './Hero.jpg'
import bars_icon from './icons/bars.svg'
import cart_icon from'./icons/cart.svg'
import categories_icon from './icons/categories.svg'
import heart_icon from './icons/heart.svg'
import search_icon from './icons/search.svg'
import user_icon from 'user.svg'
import x_icon from './x.svg'

export const assets = {
    heroImg,
    bars_icon,
    cart_icon,
    categories_icon,
    heart_icon,
    search_icon,
    user_icon,
    x_icon
}



export const products = [
  {
    id: 1,
    name: "MacBook Pro 16-inch",
    category: "Laptops",
    price: "2499.99",
    image: dellLaptopImg, 
    description: "The ultimate pro laptop with M2 Max chip, stunning display, and long-lasting battery life.",
    brand: "Apple",
    backgroundImage: laptopCategory 
  },
  {
    id: 2,
    name: "Dell XPS 13",
    category: "Laptops",
    price: "1199.99",
    image: dellLaptopImg, 
    description: "Sleek, lightweight, and powerful. Perfect for on-the-go productivity.",
    brand: "Dell",
    backgroundImage: laptopCategory 
  },
  {
    id: 3,
    name: "Sony WH-1000XM5",
    category: "Headphones",
    price: "399.99",
    image: sonyHeadphonesImg, 
    description: "Industry-leading noise-canceling headphones with crystal-clear audio quality.",
    brand: "Sony",
    backgroundImage: headphoneCategory
  },
  {
    id: 4,
    name: "Samsung Galaxy S23",
    category: "Smartphones",
    price: "999.99",
    image: samsungImg, 
    description: "A flagship phone with stunning display, fast processor, and great camera features.",
    brand: "Samsung",
    backgroundImage: smartphoneCategory 
  },
  {
    id: 5,
    name: "Apple Watch Series 8",
    category: "Wearables",
    price: "399.99",
    image: appleWatchImg, 
    description: "The ultimate health companion with advanced sensors and beautiful design.",
    brand: "Apple",
    backgroundImage: wearablesCategory 
  },
  {
    id: 6,
    name: "Logitech MX Master 3",
    category: "Accessories",
    price: "99.99",
    image: logitechImg, 
    description: "Ergonomic wireless mouse with advanced features for productivity.",
    brand: "Logitech",
    backgroundImage: accesoriesCategory 
  },
  {
    id: 7,
    name: "Nintendo Switch OLED",
    category: "Gaming",
    price: "349.99",
    image: nintendoSwitchImg, 
    description: "The ultimate hybrid gaming console with vibrant OLED display.",
    brand: "Nintendo",
    backgroundImage: gamingCategory // Adjusted background image
  },
  {
    id: 8,
    name: "Sony PlayStation 5",
    category: "Gaming",
    price: "499.99",
    image: playstationImg, 
    description: "Next-gen gaming console with stunning graphics and ultra-fast loading times.",
    brand: "Sony",
    backgroundImage: gamingCategory // Adjusted background image
  },
  {
    id: 9,
    name: "Bose SoundLink Revolve+",
    category: "Audio",
    price: "299.99",
    image: boseSpeakerImg, 
    description: "Portable Bluetooth speaker with 360-degree sound.",
    brand: "Bose",
    backgroundImage: audioCategory 
  },
  {
    id: 10,
    name: "Canon EOS R6",
    category: "Cameras",
    price: "2499.99",
    image: cannonCameraImg, 
    description: "Full-frame mirrorless camera with exceptional image quality.",
    brand: "Canon",
    backgroundImage: cameraCategory 
  }
];