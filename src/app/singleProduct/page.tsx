import Footer from "../components/footer";
import Header from "../components/header";
import NavBar from "../components/NavBar";

export default function Single(){
return(
<div>
<Header/>
<NavBar/>
<section className="flex items-center justify-center mt-14  bg-white">
  <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10 p-4">
    {/* Left Side: Image */}
    <div className="flex-shrink-0">
      <img 
        src="/Image (1).svg" 
        alt="Product Image" 
        className="h-[607px] w-[675px]  rounded-lg object-cover"
      />
    </div>

    {/* Right Side: Product Details */}
    <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 max-w-lg">
      {/* Product Name */}
      <h1 className="text-5xl font-bold text-gray-900">
        Library Stool Chair
      </h1>

      {/* Price Container */}
      <div className="bg-gray-200 rounded-full px-6 py-2 text-lg font-semibold text-gray-800">
        $20.00 USD
      </div>

      {/* Product Description */}
     <hr />
      <p className="text-gray-600 text-base leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius lectus nec commodo
        consectetur. Sed blandit sapien et velit tincidunt, at tristique justo vestibulum.
      </p>

      {/* Add to Cart Button */}
      <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-500 transition">
        Add to Cart
      </button>
    </div>
  </div>
  

</section>
<div className="bg-white
         py-10 ">
        <div className="container mx-auto h-[409px]">
          <h2 className="text-3xl font-bold text-center md:text-left  text-gray-800 mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mx-32 sm:mx-auto justify-between  items-center ">

            <div className="bg-white shadow-md rounded-lg w-[270px]  h-[306px] overflow-hidden ">
            <a href="/singleProduct">
              <img
                src="/Image.svg"
                alt="Product 1"
                className="w-[270px]  h-[263px] object-cover"
              />
              <div className="flex justify-between items-center px-4 py-2">
              
                  <h3 className="hover:to-blue-700 text-[16px] font-normal text-gray-800">Library stool chair</h3>
                  <p className="text-black">$20</p>
               
             
              </div>
              </a>
            </div>

            <div className="bg-white shadow-md rounded-lg w-[270px]  h-[306px] overflow-hidden ">
            <a href="/singleProduct">
              <img
                src="/Image (1).svg"
                alt="Product 2"
                className="w-[270px]  h-[263px] object-cover"
              />
              <div className="flex justify-between items-center px-4 py-2">
            
                  <h3 className="hover:to-blue-700 text-[16px] font-normal text-gray-800">Library stool chair</h3>
                  <p className="text-black">$20</p>
                
              </div>
              </a>
            </div>

            <div className="bg-white shadow-md rounded-lg w-[270px]  h-[306px] overflow-hidden ">
            <a href="/singleProduct">
              <img
                src="/Image (2).svg"
                alt="Product 3"
                className="w-[270px]  h-[263px] object-cover"
              />
              <div className="flex justify-between items-center px-4 py-2">
               
                  <h3 className="hover:to-blue-700 text-[16px] font-normal text-gray-800">Library stool chair</h3>
                  <p className="text-black">$20</p>
              
               
              </div>
              </a>
            </div>

            <div className="bg-white shadow-md rounded-lg w-[270px]  h-[306px] overflow-hidden ">
            <a href="/singleProduct">
              <img
                src="/Image (3).svg"
                alt="Product 4"
                className="w-[270px]  h-[263px] object-cover"
              />
              <div className="flex justify-between items-center px-4 py-2">
                
                  <h3 className="hover:to-blue-700 text-[16px] font-normal text-gray-800">Library stool chair</h3>
                  <p className="text-black">$20</p>
               
              </div>
              </a>
            </div>
            <div className="bg-white shadow-md rounded-lg w-[270px]  h-[306px] overflow-hidden ">
            <a href="/singleProduct">
              <img
                src="/Image (1).svg"
                alt="Product 4"
                className="w-[270px]  h-[263px] object-cover"
              />
              <div className="flex justify-between items-center px-4 py-2">
               
                  <h3 className="hover:to-blue-700 text-[16px] font-normal text-gray-800">Library stool chair</h3>
                  <p className="text-black">$20</p>
              
                
              </div>
              </a>
            </div>




          </div>
        </div>
      </div>
      <Footer/>

</div>


)


}