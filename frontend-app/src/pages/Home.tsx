import React from "react";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="bg-[#FDF5E6]">
      {/* Hero Section */}
      <div className="relative h-[500px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://c4.wallpaperflare.com/wallpaper/119/629/183/food-doughnut-bun-breakfast-wallpaper-preview.jpg"
            alt="Bakery Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className=" text-center text-white z-10">
          <h1 className="text-5xl font-bold mb-4">Welcome to Cream Castle</h1>
          <p className="text-xl">Crafting delicious baked goods since 2012</p>
        </div>
      </div>
 
      {/* About Section */}
      <section className="bg-[#8B4513] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            About the Company
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg">
                Established in 2012, Cream Castle has been serving the community
                of Alachulli, Kottakkal with freshly baked goods made with love
                and care.
              </p>
              <p className="text-lg">
                Our dedication to quality and tradition makes us a trusted name
                in bakery products.
              </p>
            </div>
            <div className="h-[300px]">
              <img
                src="https://bakerpedia.com/wp-content/uploads/2018/07/Baking_baking-processes-e1532987787503.jpg"
                alt="Our Bakery"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Making Process Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-[#8B4513] text-center mb-12">
          Our Making Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Process Step 1 */}
          <div className="text-center">
            <div className="h-48 mb-4">
              <img
                src="https://redstaryeast.com/wp-content/uploads/2021/08/Ingredients_mobile.jpg"
                alt="Ingredient Selection"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#5C4033] mb-2">
              Quality Ingredients
            </h3>
            <p className="text-gray-600">
              We carefully select the finest ingredients
            </p>
          </div>

          {/* Process Step 2 */}
          <div className="text-center">
            <div className="h-48 mb-4">
              <img
                src="https://cdn.britannica.com/09/203509-050-456A5DC1/bread-dough-rising-bread-pans.jpg"
                alt="Baking Process"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#5C4033] mb-2">
              Traditional Methods
            </h3>
            <p className="text-gray-600">Using time-tested baking techniques</p>
          </div>

          {/* Process Step 3 */}
          <div className="text-center">
            <div className="h-48 mb-4">
              <img
                src="https://bakersmachinery.com/wp-content/uploads/2023/09/discover-how-to-produce-better-quality-bread.jpg"
                alt="Quality Check"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#5C4033] mb-2">
              Quality Assurance
            </h3>
            <p className="text-gray-600">
              Every product meets our high standards
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
