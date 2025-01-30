import { useState } from "react";

interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, image, title, description }) => {
  const [expandedCards, setExpandedCards] = useState<{ [key: number]: boolean }>({});

  const toggleReadMore = (cardId: number) => {
    setExpandedCards((prev) => ({ ...prev, [cardId]: !prev[cardId] }));
  };

  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden h-auto flex flex-col">
      <div className="h-48">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4 flex-grow">
        <h3 className="text-xl font-semibold text-[#5C4033] mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">
          {expandedCards[id] ? description : `${description.substring(0, 100)}...`}
        </p>
      </div>
      {description.length > 100 && (
        <div className="p-4">
          <button
            onClick={() => toggleReadMore(id)}
            className="border w-full border-amber-700 text-red-800 rounded-full px-4 py-1 shadow-md transition-transform hover:scale-105 "
          >
            {expandedCards[id] ? "Read Less" : "Read More"}
          </button>
        </div>
      )}
    </div>
  );
};

const Product = () => {
  const products = [
    {
      id: 1,
      image: "https://balajibakers.com/wp-content/uploads/2023/11/F58.jpg",
      title: "Cream Bun",
      description:
        "Soft, fluffy buns filled with rich cream, perfect for a quick snack or as a dessert treat. The light, airy texture complements the sweet, creamy filling, making every bite irresistible. Made with high-quality ingredients, these buns are a delicious indulgence for all ages.",
    },
    {
      id: 2,
      image: "https://assets.bonappetit.com/photos/5c62e4a3e81bbf522a9579ce/16:9/w_4000,h_2250,c_limit/milk-bread.jpg",
      title: "Fresh Bread",
      description:
        "Freshly baked bread made daily, offering a delightful soft and fluffy texture that pairs perfectly with any spread or topping. The golden-brown crust adds an extra layer of flavor and crunch. Ideal for breakfast, sandwiches, or as a side to your favorite soups and stews. Taste the difference of freshly baked bread in every bite!",
    },
    {
      id: 3,
      image: "https://www.kannammacooks.com/wp-content/uploads/Thengai-bun-tamil-Indian-bakery-style-coconut-bun-oven-recipe-1-2.jpg",
      title: "Coconut Bun",
      description:
        "Sweet, soft buns filled with a coconut filling that bursts with flavor in every bite. These buns are a perfect balance of sweetness and texture, offering a tropical twist on your regular baked goods. Enjoy them as a snack, dessert, or with your afternoon tea. These coconut buns are made from premium ingredients to provide a satisfying and delightful experience.",
    },
    {
      id: 4,
      image: "https://neelamfoodlandmumbai.com/cdn/shop/products/IMG_2710_aed84704-6d1f-4b1c-b9f9-6295e9d969d6_800x.jpg?v=1709726265",
      title: "Burger Bun",
      description:
        "Perfect buns for your burgers, made with a soft, fluffy texture that complements any filling. These buns hold together perfectly without falling apart, making them ideal for your favorite burger recipe. Made from high-quality ingredients, these buns are a must-have for any burger lover. Whether grilled, toasted, or served fresh, they are the ideal choice for your next burger night!",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-11 py-16">
      <h2 className="text-3xl font-bold text-[#8B4513] text-center mb-12">Discover Our Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default Product;
