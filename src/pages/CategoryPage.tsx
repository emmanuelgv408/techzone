import { useParams } from "react-router-dom";
import data from "../data/products.json";
import ProductCard from "../components/ProductCard";

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
  brand: string;
  backgroundImage:string;
}

function CategoryPage() {
  const {category} = useParams<{ category: string }>();

  // Filter products by category (case-insensitive)
  const filteredProducts: Product[] = data.filter(
    (product) => product.category.toLowerCase() === category?.toLowerCase()
  );
  const categoryImg = filteredProducts[0].backgroundImage;

  if (filteredProducts.length === 0) {
    return <div>No products found in this category</div>;
  }

  return (
    <div className="px-4 py-6 bg-black">
      <img src={categoryImg} alt="categoryImg" className="w-full " />
      <div></div>
      <h1 className="text-2xl font-bold mb-4 capitalize">{category}</h1>
      <div className="grid grid-cols-2 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard product={product}/>
          
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
