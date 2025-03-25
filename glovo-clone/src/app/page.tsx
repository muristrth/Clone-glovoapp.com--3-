import MobileMenu from "@/components/MobileMenu";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <CategoriesSection />
        <HowItWorksSection />
        <VisitUsSection />
      </main>
      <Footer />
    </div>
  );
}

// Header component with Muriithi Empire Farms navigation
function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Logo />
          <nav className="hidden md:flex ml-8 space-x-6">
            <a href="#" className="font-medium text-green-800 hover:text-green-600">Our Farms</a>
            <Link href="/products" className="font-medium text-green-800 hover:text-green-600">Products</Link>
            <a href="#" className="font-medium text-green-800 hover:text-green-600">Visit Us</a>
            <a href="#" className="font-medium text-green-800 hover:text-green-600">About</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <button className="hidden md:block text-green-800 hover:text-green-600 font-medium">Contact</button>
          <Link href="/products" className="hidden md:block bg-green-700 hover:bg-green-800 text-white font-medium py-2 px-4 rounded-full">
            Order Now
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

// Logo component
function Logo() {
  return (
    <div className="text-xl font-bold text-green-700 flex items-center">
      <span className="mr-2">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.5 10.5C4.5 8.84315 5.84315 7.5 7.5 7.5C9.15685 7.5 10.5 8.84315 10.5 10.5C10.5 12.1569 9.15685 13.5 7.5 13.5C5.84315 13.5 4.5 12.1569 4.5 10.5Z" fill="#15803d"/>
          <path d="M7.5 3.75C5.42893 3.75 3.75 5.42893 3.75 7.5C3.75 9.57107 5.42893 11.25 7.5 11.25C9.57107 11.25 11.25 9.57107 11.25 7.5C11.25 5.42893 9.57107 3.75 7.5 3.75Z" fill="#15803d"/>
          <path d="M7.5 15C5.42893 15 3.75 16.6789 3.75 18.75C3.75 20.8211 5.42893 22.5 7.5 22.5C9.57107 22.5 11.25 20.8211 11.25 18.75C11.25 16.6789 9.57107 15 7.5 15Z" fill="#15803d"/>
          <path d="M16.5 7.5C14.4289 7.5 12.75 9.17893 12.75 11.25C12.75 13.3211 14.4289 15 16.5 15C18.5711 15 20.25 13.3211 20.25 11.25C20.25 9.17893 18.5711 7.5 16.5 7.5Z" fill="#15803d"/>
        </svg>
      </span>
      Muriithi Empire Farms
    </div>
  );
}

// Hero section with farm showcase
function HeroSection() {
  return (
    <section className="bg-green-50 py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 z-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <pattern id="pattern-circles" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
            <circle id="pattern-circle" cx="10" cy="10" r="5" fill="#15803d" />
          </pattern>
          <rect id="rect" x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">Farm Fresh Produce</h1>
          <p className="text-xl md:text-2xl text-green-800 mb-8">From our family farms to your table</p>

          <div className="bg-white p-2 rounded-full flex items-center shadow-lg max-w-xl mx-auto">
            <div className="flex-1 pl-3">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full text-gray-700 focus:outline-none"
              />
            </div>
            <Link
              href="/products"
              className="bg-green-700 hover:bg-green-800 text-white font-medium py-3 px-6 rounded-full"
            >
              Find Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// Farm categories section
function CategoriesSection() {
  const categories = [
    { name: "Andrew Poultry Farm", icon: "🐔", description: "Free-range chicken and eggs", slug: "andrew-poultry" },
    { name: "Kinunga Fresh Avocados", icon: "🥑", description: "Organic hass avocados", slug: "kinunga-avocados" },
    { name: "Dairy Products", icon: "🥛", description: "Fresh milk and cheese", slug: "dairy-products" },
    { name: "Organic Vegetables", icon: "🥬", description: "Pesticide-free veggies", slug: "organic-vegetables" },
    { name: "Fruit Orchard", icon: "🍎", description: "Seasonal fresh fruits", slug: "fruit-orchard" },
    { name: "Honey Farm", icon: "🍯", description: "Pure natural honey", slug: "honey-farm" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-green-900">Our Specialized Farms</h2>
        <p className="text-center mb-12 text-gray-600 max-w-2xl mx-auto">Discover our family of farms, each dedicated to producing high-quality, sustainable products</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-green-50 rounded-xl shadow-sm p-6 flex flex-col items-center hover:shadow-md transition duration-200 border border-green-100">
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="font-medium text-green-800 text-xl mb-2">{category.name}</h3>
              <p className="text-gray-600 text-center">{category.description}</p>
              <Link
                href={`/products/${category.slug}`}
                className="mt-4 text-green-700 hover:text-green-900 font-medium flex items-center"
              >
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// How it works section
function HowItWorksSection() {
  const steps = [
    {
      title: "Choose your products",
      description: "Browse our selection of farm-fresh produce and select what you need."
    },
    {
      title: "Place your order",
      description: "Order online, by phone, or visit us at the farm market."
    },
    {
      title: "Farm to table delivery",
      description: "We'll deliver your order or prepare it for pick-up at your convenience."
    },
    {
      title: "Enjoy fresh produce",
      description: "Experience the taste of truly fresh, sustainably grown farm products."
    }
  ];

  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-green-900">How Muriithi Empire Farms Works</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-700 text-white font-bold text-xl mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold mb-2 text-green-800">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Visit us section
function VisitUsSection() {
  return (
    <section className="py-16 bg-green-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="leaves" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M10,10 Q15,5 20,10 T30,10 Q25,15 30,20 T20,20 Q15,25 10,20 T0,20 Q5,15 0,10 T10,10 Z" fill="white"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#leaves)"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Visit Our Farm</h2>
            <p className="text-green-100 mb-8 max-w-md">
              Experience farm life firsthand! Tour our facilities, pick your own produce, and enjoy family-friendly activities.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-green-800 hover:bg-green-100 font-medium py-3 px-6 rounded-lg flex items-center">
                <span className="mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </span>
                Get Directions
              </button>
              <button className="bg-transparent border border-white hover:bg-white hover:text-green-800 text-white font-medium py-3 px-6 rounded-lg flex items-center">
                <span className="mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </span>
                Book a Tour
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-96 bg-green-100 rounded-3xl relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-b from-green-200 to-green-300 opacity-70"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mb-4 text-5xl">🌱</div>
                  <p className="text-lg font-bold text-green-900">Farm Experience</p>
                  <p className="text-sm text-green-800 opacity-90">Connect with nature</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer component
function Footer() {
  return (
    <footer className="bg-green-50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-green-900 mb-4">Muriithi Empire Farms</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-green-700 hover:text-green-900">About us</a></li>
              <li><a href="#" className="text-green-700 hover:text-green-900">Our Story</a></li>
              <li><a href="#" className="text-green-700 hover:text-green-900">Farm Blog</a></li>
              <li><a href="#" className="text-green-700 hover:text-green-900">Sustainability</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-green-900 mb-4">Useful links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-green-700 hover:text-green-900">Farm Shop</a></li>
              <li><a href="#" className="text-green-700 hover:text-green-900">Contact us</a></li>
              <li><a href="#" className="text-green-700 hover:text-green-900">Delivery Information</a></li>
              <li><a href="#" className="text-green-700 hover:text-green-900">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-green-900 mb-4">Visit Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-green-700 hover:text-green-900">Farm Tours</a></li>
              <li><a href="#" className="text-green-700 hover:text-green-900">Seasonal Events</a></li>
              <li><a href="#" className="text-green-700 hover:text-green-900">School Trips</a></li>
              <li><a href="#" className="text-green-700 hover:text-green-900">Directions</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-green-900 mb-4">Follow us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-green-700 hover:text-green-900">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-green-700 hover:text-green-900">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-green-700 hover:text-green-900">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-green-200">
          <p className="text-gray-500 text-center">© {new Date().getFullYear()} Muriithi Empire Farms. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
