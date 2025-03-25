import Link from "next/link";
import {
  ChickenIcon,
  AvocadoIcon,
  DairyIcon,
  VegetablesIcon,
  FruitIcon,
  HoneyIcon
} from "@/components/icons/FarmIcons";

export default function ProductsPage() {
  const farmCategories = [
    {
      name: "Andrew Poultry Farm",
      slug: "andrew-poultry",
      icon: <ChickenIcon />,
      description: "Free-range chicken and eggs from our family-owned poultry farm.",
      bgColor: "bg-white",
      accentColor: "border-farm-green-500",
      hoverColor: "hover:border-farm-green-600"
    },
    {
      name: "Kinunga Fresh Avocados",
      slug: "kinunga-avocados",
      icon: <AvocadoIcon />,
      description: "Organic hass avocados grown in the fertile soils of our Kinunga farm.",
      bgColor: "bg-white",
      accentColor: "border-farm-green-500",
      hoverColor: "hover:border-farm-green-600"
    },
    {
      name: "Dairy Products",
      slug: "dairy-products",
      icon: <DairyIcon />,
      description: "Fresh milk, cheese, and other dairy products from grass-fed cows.",
      bgColor: "bg-white",
      accentColor: "border-farm-olive-400",
      hoverColor: "hover:border-farm-olive-500"
    },
    {
      name: "Organic Vegetables",
      slug: "organic-vegetables",
      icon: <VegetablesIcon />,
      description: "Pesticide-free vegetables grown using sustainable farming methods.",
      bgColor: "bg-white",
      accentColor: "border-farm-leaf-400",
      hoverColor: "hover:border-farm-leaf-500"
    },
    {
      name: "Fruit Orchard",
      slug: "fruit-orchard",
      icon: <FruitIcon />,
      description: "Seasonal fruits harvested at peak ripeness from our orchard.",
      bgColor: "bg-white",
      accentColor: "border-farm-olive-400",
      hoverColor: "hover:border-farm-olive-500"
    },
    {
      name: "Honey Farm",
      slug: "honey-farm",
      icon: <HoneyIcon />,
      description: "Pure, natural honey produced by our bee colonies.",
      bgColor: "bg-white",
      accentColor: "border-farm-brown-400",
      hoverColor: "hover:border-farm-brown-500"
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="farm-hero py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white text-center">Our Products</h1>
          <p className="text-green-100 text-center mt-4 max-w-2xl mx-auto">
            Browse through our range of farm-fresh products, sourced directly from our specialized farms.
            Each product is grown with care, using sustainable and environmentally friendly practices.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {farmCategories.map((category) => (
            <Link
              href={`/products/${category.slug}`}
              key={category.slug}
              className={`product-card ${category.bgColor} rounded-lg shadow-md overflow-hidden
                border-2 ${category.accentColor} ${category.hoverColor} transition-all duration-300`}
            >
              <div className="h-60 bg-green-50 farm-pattern bg-pattern-sm flex items-center justify-center p-4">
                {category.icon}
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-farm-green-700 mb-2">{category.name}</h2>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <span className="inline-flex items-center text-farm-green-600 font-medium">
                  Browse products
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
