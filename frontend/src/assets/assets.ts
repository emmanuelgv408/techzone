// Import your images (assets)


import accesoriesCategory from './AccesoriesCategory.jpg';
import audioCategory from './AudioCategory.jpg';
import cameraCategory from './CameraCategory.jpg';
import gamingCategory from './GamingCategory.jpg';
import headphoneCategory from './HeadphoneCategory.jpg';
import laptopCategory from './LaptopCategory.jpg';
import smartphoneCategory from './SmartphoneCategory.jpg';
import wearablesCategory from './WearablesCategory.jpg';

import heroImg from './HeroImg.jpg';
import bars_icon from './icons/bars.svg';
import cart_icon from './icons/cart.svg';
import categories_icon from './icons/categories.svg';
import heart_icon from './icons/heart.svg';
import search_icon from './icons/search.svg';
import user_icon from './icons/user.svg';
import x_icon from './icons/x.svg';
import down_icon from './icons/down.svg';

export type AssetKeys = 'heroImg' | 'bars_icon' | 'cart_icon' | 'categories_icon' | 'heart_icon' | 'search_icon' | 'user_icon' | 'x_icon' | 'down_icon';

export const assets: Record<AssetKeys, string> = {
    heroImg,
    bars_icon,
    cart_icon,
    categories_icon,
    heart_icon,
    search_icon,
    user_icon,
    x_icon,
    down_icon
};

// Define product type
export interface Product {
    id: number;
    name: string;
    category: string;
    price: string;
    image: string;
    description: string;
    brand: string;
    backgroundImage: string;
}

// Product array with proper types
export const products: Product[] = [
    {
        id: 1,
        name: "MacBook Pro 16-inch",
        category: "Laptops",
        price: "2499.99",
        image: 'https://res.cloudinary.com/dliqgqmbr/image/upload/v1738359144/howard-bouchevereau-RSCirJ70NDM-unsplash_ur08bg.jpg',
        description: "The ultimate pro laptop with M2 Max chip, stunning display, and long-lasting battery life.",
        brand: "Apple",
        backgroundImage: laptopCategory
    },
    {
        id: 2,
        name: "Dell XPS 13",
        category: "Laptops",
        price: "1199.99",
        image: 'https://res.cloudinary.com/dliqgqmbr/image/upload/v1738357781/DellLaptop_m8aupj.jpg',
        description: "Sleek, lightweight, and powerful. Perfect for on-the-go productivity.",
        brand: "Dell",
        backgroundImage: laptopCategory
    },
    {
        id: 3,
        name: "Sony WH-1000XM5",
        category: "Headphones",
        price: "399.99",
        image: 'https://res.cloudinary.com/dliqgqmbr/image/upload/v1738357800/SonyHeadphones_filcwy.jpg',
        description: "Industry-leading noise-canceling headphones with crystal-clear audio quality.",
        brand: "Sony",
        backgroundImage: headphoneCategory
    },
    {
        id: 4,
        name: "Samsung Galaxy S23",
        category: "Smartphones",
        price: "999.99",
        image: 'https://res.cloudinary.com/dliqgqmbr/image/upload/v1738357798/SamsungPhone_i0s4b0.jpg',
        description: "A flagship phone with stunning display, fast processor, and great camera features.",
        brand: "Samsung",
        backgroundImage: smartphoneCategory
    },
    {
        id: 5,
        name: "Apple Watch Series 8",
        category: "Wearables",
        price: "399.99",
        image: 'https://res.cloudinary.com/dliqgqmbr/image/upload/v1738357758/AppleWatch_gwuxjr.jpg',
        description: "The ultimate health companion with advanced sensors and beautiful design.",
        brand: "Apple",
        backgroundImage: wearablesCategory
    },
    {
        id: 6,
        name: "Logitech MX Master 3",
        category: "Accessories",
        price: "99.99",
        image: 'https://res.cloudinary.com/dliqgqmbr/image/upload/v1738357791/LogitechMouse_xmiika.jpg',
        description: "Ergonomic wireless mouse with advanced features for productivity.",
        brand: "Logitech",
        backgroundImage: accesoriesCategory
    },
    {
        id: 7,
        name: "Nintendo Switch OLED",
        category: "Gaming",
        price: "349.99",
        image: 'https://res.cloudinary.com/dliqgqmbr/image/upload/v1738357793/NintendoSwitch_hodj5m.jpg',
        description: "The ultimate hybrid gaming console with vibrant OLED display.",
        brand: "Nintendo",
        backgroundImage: gamingCategory
    },
    {
        id: 8,
        name: "Sony PlayStation 5",
        category: "Gaming",
        price: "499.99",
        image: 'https://res.cloudinary.com/dliqgqmbr/image/upload/v1738357795/Playstation5_nthrjj.jpg',
        description: "Next-gen gaming console with stunning graphics and ultra-fast loading times.",
        brand: "Sony",
        backgroundImage: gamingCategory
    },
    {
        id: 9,
        name: "Bose SoundLink Revolve+",
        category: "Audio",
        price: "299.99",
        image: 'https://res.cloudinary.com/dliqgqmbr/image/upload/v1738357771/BoseSpeaker_bxbp5o.jpg',
        description: "Portable Bluetooth speaker with 360-degree sound.",
        brand: "Bose",
        backgroundImage: audioCategory
    },
    {
        id: 10,
        name: "Canon EOS R6",
        category: "Cameras",
        price: "2499.99",
        image: 'https://res.cloudinary.com/dliqgqmbr/image/upload/v1738357779/CanonCamera_ehb5i1.jpg',
        description: "Full-frame mirrorless camera with exceptional image quality.",
        brand: "Canon",
        backgroundImage: cameraCategory
    }
];
