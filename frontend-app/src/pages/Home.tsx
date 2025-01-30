
import { ArrowRight } from 'lucide-react';
import Footer from "../components/Footer";
import { motion } from 'framer-motion';



const HomePage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-900 h-screen">
        <div className="absolute inset-0">
          <img
            src="public/aboutus-banner.png"
            alt="Bakery Banner"
            className="w-full h-full "
          />
        </div>
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
  <motion.div
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.5, delay:1 }}
    className="inline-block"
  >
    Welcome
  </motion.div>
  <motion.div
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.5, delay: 1}}
    className="inline-block"
  >
    to Cream Castle
  </motion.div>
</h1>

            <p className="text-xl text-gray-200 mb-8">
              Crafting delicious baked goods since 2012
            </p>
            <motion.button
             initial={{y:-5}}
             animate={{
                y:[5,-5],
                transition:{
                    duration:1,
                    ease:"linear",
                    repeat:Infinity,
                    repeatType:"reverse",
                }
             }}
            
               className="inline-flex items-center px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors">
              Order Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About the Company</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
             initial={{x:-100,opacity:0}}
             whileInView={{x:0,opacity:1}}
             transition={{delay:.5}}
             className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Established in 2012, Cream Castle has been serving the community
                of Alachulli, Kottakkal with freshly baked goods made with love
                and care.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our dedication to quality and tradition makes us a trusted name
                in bakery products.
              </p>
            </motion.div>
            <motion.div
           initial={{x:100,opacity:0}}
           whileInView={{x:0,opacity:1}}
           transition={{delay:.5}}
             className="aspect-video rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://bakerpedia.com/wp-content/uploads/2018/07/Baking_baking-processes-e1532987787503.jpg"
                alt="Our Bakery"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Making Process Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Making Process</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          </div>
          <div className="space-y-24">
            {processSteps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center gap-12">
                <motion.div
                   initial={{x:-100,opacity:0}}
                   whileInView={{x:0,opacity:1}}
                   transition={{delay:.5}}
                 className={`md:w-1/2 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
                  />
                </motion.div>
                <motion.div
                   initial={{x:100,opacity:0}}
                   whileInView={{x:0,opacity:1}}
                   transition={{delay:.5}}
                 className="md:w-1/2">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <div className="space-y-4">
                    {step.descriptions.map((desc, i) => (
                      <p key={i} className="text-lg text-gray-600 leading-relaxed">
                        {desc}
                      </p>
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <p className="text-gray-600 text-lg italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img className="w-12 h-12 bg-gray-200 rounded-full" src='https://cdn-icons-png.flaticon.com/512/6596/6596121.png' />
                  <div className="ml-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const processSteps = [
  {
    title: "Quality Ingredients",
    image:"https://redstaryeast.com/wp-content/uploads/2021/08/Ingredients_mobile.jpg",
    descriptions: [
      "At Cream Castle, we believe that the key to making the best pastries lies in the ingredients. We only use the finest, most natural ingredients sourced locally to ensure top-notch quality in every bite.",
      "From hand-picked flour to fresh eggs, we carefully choose every component, ensuring that only the best goes into our baked goods."
    ]
  },
  {
    title: "Traditional Methods",
    image:"https://cdn.britannica.com/09/203509-050-456A5DC1/bread-dough-rising-bread-pans.jpg",
    descriptions: [
      "We stay true to traditional baking methods that have been passed down through generations. These time-tested techniques ensure that each product we bake has the perfect texture and taste.",
      "Whether it's the slow fermentation process or hand-kneading dough, we take our time to get it right, guaranteeing the freshest and most flavorful products for our customers."
    ]
  },
  {
    title: "Quality Assurance",
    image:"https://bakersmachinery.com/wp-content/uploads/2023/09/discover-how-to-produce-better-quality-bread.jpg",
    descriptions: [
      "Every product that comes out of our bakery is carefully inspected to meet the highest standards. We believe in excellence, and our quality assurance process ensures that every loaf, pastry, and cake is up to our exacting standards.",
      "Our expert bakers check each product for consistency in taste, texture, and appearance, so you can be sure that every bite you take is a perfect one."
    ]
  }
];

const testimonials = [
  {
    quote: "The best bakery in town! Their pastries are always fresh and delicious!",
    name: "Sarah Johnson",
    title: "Regular Customer"
  },
  {
    quote: "I love their chocolate cake! It's my go-to for every celebration!",
    name: "Mark Thompson",
    title: "Loyal Customer"
  }
];

export default HomePage;