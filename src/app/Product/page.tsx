import Head from "next/head";
import Header from "../components/header";
import NavBar from "../components/NavBar";
import Newsletter from "../components/newaletter";

export default function ProductPage() {
  return (
    <div className="animate-fadeIn">
      <Header />
      <NavBar />
      <div className="bg-white py-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold md:text-left text-center text-gray-800 mb-8">All Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-32 sm:mx-auto items-center">

            {/* Product Card 1 */}
            <div className="bg-white shadow-md rounded-lg w-[312px] h-[377px] overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <img src="/Image.svg" alt="Product 1" className="w-[312px] h-[312px] object-cover" />
              <div className="flex justify-between items-center px-4 py-2">
                <div>
                  <h3 className="hover:text-blue-700 text-[16px] font-normal text-gray-800">Library stool chair</h3>
                  <p className="text-black">$20</p>
                </div>
                <button className="bg-gray-100 text-black px-4 py-2 rounded hover:bg-blue-700 transition">
                  {/* Icon */}
                </button>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="bg-white shadow-md rounded-lg w-[312px] h-[377px] overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <img src="/Image (1).svg" alt="Product 2" className="w-[312px] h-[312px] object-cover" />
              <div className="flex justify-between items-center px-4 py-2">
                <div>
                  <h3 className="hover:text-blue-700 text-[16px] font-normal text-gray-800">Library stool chair</h3>
                  <p className="text-black">$20</p>
                </div>
                <button className="bg-gray-100 text-black px-4 py-2 rounded hover:bg-blue-700 transition">
                  {/* Icon */}
                </button>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="bg-white shadow-md rounded-lg w-[312px] h-[377px] overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <img src="/Image (2).svg" alt="Product 3" className="w-[312px] h-[312px] object-cover" />
              <div className="flex justify-between items-center px-4 py-2">
                <div>
                  <h3 className="hover:text-blue-700 text-[16px] font-normal text-gray-800">Library stool chair</h3>
                  <p className="text-black">$20</p>
                </div>
                <button className="bg-gray-100 text-black px-4 py-2 rounded hover:bg-blue-700 transition">
                  {/* Icon */}
                </button>
              </div>
            </div>

            {/* Product Card 4 */}
            <div className="bg-white shadow-md rounded-lg w-[312px] h-[377px] overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <a href="/singleProduct">
                <img src="/Image (3).svg" alt="Product 4" className="w-[312px] h-[312px] object-cover" />
                <div className="flex justify-between items-center px-4 py-2">
                  <div>
                    <h3 className="hover:text-blue-700 text-[16px] font-normal text-gray-800">Library stool chair</h3>
                    <p className="text-black">$20</p>
                  </div>
                  <button className="bg-gray-100 text-black px-4 py-2 rounded hover:bg-blue-700 transition">
                    {/* Icon */}
                  </button>
                </div>
              </a>
            </div>

            {/* Repeat similar cards for the remaining products... */}

          </div>
        </div>
      </div>
      <Newsletter />
    </div>
  );
}
