import ProductList from "@/components/ProductList";
import Link from "next/link";
import { ChickenIcon } from "@/components/icons/FarmIcons";

export default function AndrewPoultryPage() {
  const poultryProducts = [
    {
      id: "p1",
      name: "Free-Range Whole Chicken",
      description: "Pasture-raised chicken, fed with organic feed without antibiotics or hormones.",
      price: 12.99,
      unit: "kg",
      image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      inStock: true,
    },
    {
      id: "p2",
      name: "Organic Chicken Breast",
      description: "Boneless, skinless chicken breast from free-range chickens.",
      price: 15.99,
      unit: "kg",
      image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      inStock: true,
    },
    {
      id: "p3",
      name: "Chicken Drumsticks",
      description: "Juicy and tender free-range chicken drumsticks, perfect for grilling or roasting.",
      price: 10.99,
      unit: "kg",
      image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      inStock: true,
    },
    {
      id: "p4",
      name: "Fresh Farm Eggs",
      description: "Large brown eggs from our free-range hens. Pack of 12.",
      price: 4.99,
      unit: "dozen",
      image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      inStock: true,
    },
    {
      id: "p5",
      name: "Premium Chicken Thighs",
      description: "Bone-in, skin-on thighs from our pasture-raised chickens.",
      price: 9.99,
      unit: "kg",
      image: "https://images.unsplash.com/photo-1501200291289-c5a76c232e5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      inStock: true,
    },
    {
      id: "p6",
      name: "Organic Chicken Wings",
      description: "Perfect for buffalo wings or your favorite wing recipe.",
      price: 8.99,
      unit: "kg",
      image: "https://images.unsplash.com/photo-1588167056547-c183313da47c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      inStock: false,
    },
    {
      id: "p7",
      name: "Quail Eggs",
      description: "Delicate, spotted eggs with a high yolk-to-white ratio. Pack of 24.",
      price: 6.99,
      unit: "pack",
      image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      inStock: true,
    },
    {
      id: "p8",
      name: "Whole Roasting Chicken",
      description: "Large whole chicken perfect for Sunday roast. Approximately 2kg each.",
      price: 18.99,
      unit: "each",
      image: "https://images.unsplash.com/photo-1602526430780-782d6b1783fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      inStock: true,
    },
    {
      id: "p9",
      name: "Chicken Liver",
      description: "Fresh chicken livers, cleaned and ready to cook.",
      price: 5.99,
      unit: "kg",
      image: "https://images.unsplash.com/photo-1600180883635-68d1169e6863?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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
                <span className="text-gray-500 ml-1 md:ml-2">Andrew Poultry Farm</span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8">
          <div className="md:flex">
            <div className="md:flex-shrink-0 bg-farm-green-50 farm-pattern bg-pattern-sm p-6 flex items-center justify-center md:w-64">
              <ChickenIcon />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-farm-green-500 font-semibold">Premium Poultry Products</div>
              <h1 className="text-3xl font-bold text-farm-green-800 mt-1">Andrew Poultry Farm</h1>
              <p className="text-gray-600 mt-3">Free-range chicken and eggs from our family-owned poultry farm</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <div className="bg-farm-green-50 px-3 py-1 rounded-full text-farm-green-700 text-sm font-medium">
                  Cage-Free
                </div>
                <div className="bg-farm-green-50 px-3 py-1 rounded-full text-farm-green-700 text-sm font-medium">
                  Organic Feed
                </div>
                <div className="bg-farm-green-50 px-3 py-1 rounded-full text-farm-green-700 text-sm font-medium">
                  Antibiotic-Free
                </div>
                <div className="bg-farm-green-50 px-3 py-1 rounded-full text-farm-green-700 text-sm font-medium">
                  Pasture Raised
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-farm-green-50 p-6 rounded-lg mb-8 border border-farm-green-100">
          <h2 className="text-lg font-semibold text-farm-green-800 mb-3">About Our Poultry Farm</h2>
          <p className="text-gray-700 mb-4">
            At Andrew Poultry Farm, we raise our chickens in a stress-free environment with access to open pastures.
            Our chickens are fed with organic feed, free from antibiotics and growth hormones. This results in
            healthier, tastier meat and more nutritious eggs.
          </p>
          <p className="text-gray-700">
            All our poultry products are processed in our state-of-the-art facility that meets the highest
            standards of hygiene and quality. We take pride in providing you with the freshest,
            most ethically raised poultry products possible.
          </p>
        </div>
      </div>

      <ProductList products={poultryProducts} categoryName="Andrew Poultry Farm" />
    </div>
  );
}
