import { useState } from "react";

interface ProductCardProps {
  name: string;
  description?: string;
  capacity?: string;
  price: number;
  imageSrc: string;
  imageWidth?: number;
  category: string;
  stock: number;
  slug: string;
}

const SearchBar = ({ products }: { products?: ProductCardProps[] }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Ensure products is an array before filtering
  const filteredProducts = Array.isArray(products)
    ? products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        className="w-full mt-2 p-2 border rounded-md"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <ul className="mt-2">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <li key={product.slug} className="mt-2">
              {product.name} - {product.price} PKR
            </li>
          ))
        ) : (
          <p className="text-gray-500">No products found.</p>
        )}
      </ul>
    </div>
  );
};

export default SearchBar;
