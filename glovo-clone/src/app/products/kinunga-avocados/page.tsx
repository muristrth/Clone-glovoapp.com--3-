import ProductList from "@/components/ProductList";
import Link from "next/link";
import { AvocadoIcon } from "@/components/icons/FarmIcons";

export default function KinungaAvocadosPage() {
  const avocadoProducts = [
    {
      id: "a1",
      name: "Organic Hass Avocados",
      description: "Premium ripe Hass avocados grown in our organic farm. Perfect for guacamole or toasts.",
      price: 1.99,
      unit: "each",
      image: "https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      inStock: true,
    },
    {
      id: "a2",
      name: "Ready-to-Eat Avocado Pack",
      description: "Four perfectly ripened avocados, ready to eat immediately.",
      price: 6.99,
      unit: "pack of 4",
      image: "https://images.unsplash.com/photo-1592495979143-e8acfe6eb9cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      inStock: true,
    },
    {
      id: "a3",
      name: "Jumbo Avocados",
      description: "Extra large avocados with more flesh and smaller pits.",
      price: 2.49,
      unit: "each",
      image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      inStock: true,
    },
    {
      id: "a4",
      name: "Organic Avocado Oil",
      description: "Cold-pressed avocado oil from our farm. Perfect for cooking and dressings.",
      price: 12.99,
      unit: "500ml bottle",
      image: "https://images.unsplash.com/photo-1620139269222-b99897c3d6a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      inStock: true,
    },
    {
      id: "a5",
      name: "Unripe Avocados",
      description: "Firm avocados that will ripen in 3-5 days. Perfect for planning ahead.",
      price: 5.99,
      unit: "pack of 5",
      image: "https://images.unsplash.com/photo-1602170284347-f9c28856c929?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      inStock: true,
    },
    {
      id: "a6",
      name: "Fresh Guacamole",
      description: "Homemade guacamole prepared with our farm-fresh avocados and organic ingredients.",
      price: 4.99,
      unit: "250g container",
      image: "https://images.unsplash.com/photo-1580914185388-d10b8b63465a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      inStock: false,
    },
    {
      id: "a7",
      name: "Avocado Honey",
      description: "Unique honey produced by bees that pollinate our avocado trees. Limited availability.",
      price: 8.99,
      unit: "250g jar",
      image: "https://images.unsplash.com/photo-1601063476524-7e13949e28d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      inStock: true,
    },
    {
      id: "a8",
      name: "Avocado Gift Box",
      description: "Premium gift box with 4 avocados, avocado oil, and seasoning.",
      price: 24.99,
      unit: "box",
      image: "https://images.unsplash.com/photo-1604644772821-327a65af3277?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      inStock: true,
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <nav className="flex mb-4" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="text-gray-600 hover:text-farm-green-700">Home</Link>
            </li>
            <li>
              <div className="flex items-center">
                <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                </svg>
                <Link href="/products" className="text-gray-600 hover:text-farm-green-700 ml-1 md:ml-2">Products</Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                </svg>
                <span className="text-gray-500 ml-1 md:ml-2">Kinunga Fresh Avocados</span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8">
          <div className="md:flex">
            <div className="md:flex-shrink-0 bg-farm-green-50 farm-pattern bg-pattern-sm p-6 flex items-center justify-center md:w-64">
              <AvocadoIcon />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-farm-green-500 font-semibold">Sustainably Grown</div>
              <h1 className="text-3xl font-bold text-farm-green-800 mt-1">Kinunga Fresh Avocados</h1>
              <p className="text-gray-600 mt-3">Organic hass avocados grown in the fertile soils of our Kinunga farm</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <div className="bg-farm-green-50 px-3 py-1 rounded-full text-farm-green-700 text-sm font-medium">
                  Organic
                </div>
                <div className="bg-farm-green-50 px-3 py-1 rounded-full text-farm-green-700 text-sm font-medium">
                  Sustainably Grown
                </div>
                <div className="bg-farm-green-50 px-3 py-1 rounded-full text-farm-green-700 text-sm font-medium">
                  Pesticide-Free
                </div>
                <div className="bg-farm-green-50 px-3 py-1 rounded-full text-farm-green-700 text-sm font-medium">
                  Hand-Picked
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-farm-green-50 p-6 rounded-lg mb-8 border border-farm-green-100">
          <h2 className="text-lg font-semibold text-farm-green-800 mb-3">About Our Avocado Farm</h2>
          <p className="text-gray-700 mb-4">
            Our Kinunga avocado farm sits on the fertile slopes of Mt. Kenya, providing the perfect environment
            for growing premium Hass avocados. We use sustainable farming practices, including drip irrigation,
            natural pest control, and organic fertilizers.
          </p>
          <p className="text-gray-700">
            Our avocados are handpicked at the optimal ripeness to ensure the best flavor and texture.
            We pride ourselves on producing some of the creamiest, most flavorful avocados in the region,
            rich in healthy fats and nutrients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-5 rounded-lg shadow border border-gray-100 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-farm-green-100 flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-farm-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="font-bold text-gray-800 mb-1">Sustainable Farming</h3>
            <p className="text-sm text-gray-600">We use eco-friendly practices that protect our land and water resources</p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-gray-100 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-farm-green-100 flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-farm-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 className="font-bold text-gray-800 mb-1">Chemical-Free</h3>
            <p className="text-sm text-gray-600">No synthetic pesticides or fertilizers used in our avocado production</p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-gray-100 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-farm-green-100 flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-farm-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 className="font-bold text-gray-800 mb-1">Nutrient-Rich</h3>
            <p className="text-sm text-gray-600">Our avocados are packed with healthy fats, vitamins, and minerals</p>
          </div>
        </div>
      </div>

      <ProductList products={avocadoProducts} categoryName="Kinunga Fresh Avocados" />
    </div>
  );
}
