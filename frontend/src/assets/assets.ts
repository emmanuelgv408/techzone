


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
    },
    {
        id: 11,
        name: "Google Pixel 7 Pro",
        category: "Smartphones",
        price: "899.99",
        image: "https://res.cloudinary.com/dliqgqmbr/image/upload/v1743271608/googlepixel7pro_dszyo1.jpg",
        description: "Google's flagship phone with top-tier camera and AI-powered features.",
        brand: "Google",
        backgroundImage: smartphoneCategory
    },
    {
        id: 12,
        name: "Razer DeathAdder V3 Pro",
        category: "Accessories",
        price: "149.99",
        image: "https://res.cloudinary.com/dliqgqmbr/image/upload/v1743271706/RazerV3Pro_mmyzxo.jpg",
        description: "Ultra-lightweight gaming mouse with precision tracking.",
        brand: "Razer",
        backgroundImage: accesoriesCategory
    },
    {
        id: 13,
        name: "ASUS ROG Zephyrus G14",
        category: "Laptops",
        price: "1599.99",
        image: "https://res.cloudinary.com/dliqgqmbr/image/upload/v1743271907/AsusRog_vkr8vf.jpg",
        description: "High-performance gaming laptop with AMD Ryzen and RTX graphics.",
        brand: "ASUS",
        backgroundImage: laptopCategory
    },
    {
        id: 14,
        name: "Samsung Galaxy Tab S8",
        category: "Tablets",
        price: "699.99",
        image: "https://res.cloudinary.com/dliqgqmbr/image/upload/v1743272073/samsung_galaxy_tab_s8_y9bfcg.jpg",
        description: "Powerful Android tablet with a stunning AMOLED display.",
        brand: "Samsung",
        backgroundImage: smartphoneCategory
    },
    {
        id: 15,
        name: "Apple iPad Pro 12.9",
        category: "Tablets",
        price: "1099.99",
        image: "https://res.cloudinary.com/dliqgqmbr/image/upload/v1743272135/IpadPro12.9_yo88fe.jpg",
        description: "A powerful tablet with an M2 chip and a gorgeous Liquid Retina display.",
        brand: "Apple",
        backgroundImage: smartphoneCategory
    },
    {
        id: 16,
        name: "Meta Quest 3",
        category: "Gaming",
        price: "499.99",
        image: "https://res.cloudinary.com/dliqgqmbr/image/upload/v1743272196/metaquest3_rp8yub.jpg",
        description: "Next-gen VR headset with high resolution and improved performance.",
        brand: "Meta",
        backgroundImage: gamingCategory
    },
    {
        id: 17,
        name: "SteelSeries Arctis Nova Pro",
        category: "Headphones",
        price: "349.99",
        image: "https://res.cloudinary.com/dliqgqmbr/image/upload/v1743272371/NovaPro_fgbq0u.jpg",
        description: "Premium gaming headset with 360° spatial audio and active noise cancellation.",
        brand: "SteelSeries",
        backgroundImage: headphoneCategory
    },
    {
        id: 18,
        name: "DJI Mini 3 Pro",
        category: "Cameras",
        price: "799.99",
        image: "https://res.cloudinary.com/dliqgqmbr/image/upload/v1743272429/Mini2pro_h4ivpz.webp",
        description: "Compact and powerful drone with 4K HDR video recording.",
        brand: "DJI",
        backgroundImage: cameraCategory
    },
    {
        id: 19,
        name: "HyperX Cloud II Wireless",
        category: "Headphones",
        price: "159.99",
        image: "https://res.cloudinary.com/dliqgqmbr/image/upload/v1743272473/hyperxcloud_r0tcz1.jpg",
        description: "Comfortable wireless gaming headset with immersive sound.",
        brand: "HyperX",
        backgroundImage: headphoneCategory
    },
    {
        id: 20,
        name: "LG C2 OLED 55-inch",
        category: "Audio",
        price: "1399.99",
        image: "https://res.cloudinary.com/dliqgqmbr/image/upload/v1743272473/hyperxcloud_r0tcz1.jpg",
        description: "Stunning OLED TV with deep blacks and amazing color accuracy.",
        brand: "LG",
        backgroundImage: audioCategory
    }
    ,    {
        id: 21,
        name: "Apple iPhone 15 Pro Max",
        category: "Smartphones",
        price: "1199.99",
        image: "https://res.cloudinary.com/dliqgqmbr/image/upload/v1743273452/iphone15pro_oqenv7.jpg",
        description: "Apple's most advanced iPhone with a titanium design and A17 Pro chip.",
        brand: "Apple",
        backgroundImage: smartphoneCategory
    }
];
