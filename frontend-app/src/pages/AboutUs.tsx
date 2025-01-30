import banner from '../assets/aboutus-banner.png'
import bannerSmall from '../assets/banner-small.png'


const AboutUs = () => {
 
  return (
    <div className="bg-[#FDF5E6] min-h-screen">
       {/* Hero Section */}
       <div className="relative h-[300px] bg-amber-800">
        <div className="absolute inset-0">
          {/* Large banner for larger screens */}
          <img
            src={banner}
            alt="Bakery Distribution"
            className="hidden md:block w-full h-full object-cover opacity-40"
          />
          {/* Small banner for smaller screens */}
          <img
            src={bannerSmall}
            alt="Bakery Distribution"
            className="md:hidden w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-5xl font-bold mb-6 text-center">About Cream Castle</h1>
          <p className="text-xl max-w-2xl text-center">
            Your Trusted Bakery Distribution Partner
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Distribution Overview */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-amber-800">Distribution Excellence</h2>
            <p className="text-gray-700 leading-relaxed">
              At Cream Castle, we specialize in distributing high-quality bakery products 
              throughout Alachulli, Kottakkal. Our state-of-the-art storage and delivery 
              system ensures that every product reaches our customers in perfect condition.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="text-amber-800">✓</span> Temperature-controlled storage facilities
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-800">✓</span> Timely delivery schedules
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-800">✓</span> Quality assurance at every step
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-800">✓</span> Professional handling and packaging
              </li>
            </ul>
          </div>
          <div className="h-[400px] rounded-lg overflow-hidden">
            <img
              src="https://thumbs.dreamstime.com/b/industrial-convection-oven-cooked-bakery-products-catering-professional-kitchen-equipment-148356224.jpg"
              alt="Distribution Center"
              className="w-full h-full object-cover"
            />
          </div>
        </div>



        {/* Quality Commitment */}
        <h2 className="text-2xl font-bold text-amber-800 mb-6">Our Quality Commitment</h2>
        <div className="bg-white rounded-xl p-8 shadow-lg mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <h3 className="font-semibold text-amber-800">Storage Standards</h3>
              <p className="text-gray-600">
                Climate-controlled storage facilities to maintain product freshness
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-amber-800">Distribution Network</h3>
              <p className="text-gray-600">
                Efficient delivery system covering all major locations
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-amber-800">Quality Checks</h3>
              <p className="text-gray-600">
                Regular quality inspections throughout the distribution process
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-amber-800 text-white rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Partner With Us</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Looking for reliable bakery product distribution? Let's discuss how we can serve your needs.
          </p>
          <button className="bg-white text-amber-800 px-8 py-3 rounded-full font-semibold hover:bg-amber-100 transition-colors">
            Contact Our Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;