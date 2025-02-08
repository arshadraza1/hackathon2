import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-white items-center font-[Inter] px-[150px]">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center min-h-screen rounded bg-gray-100 p-6 gap-6">
        
        {/* Left Section */}
        <div className="md:text-left sm:text-center grid grid-cols-1 items-center justify-center p-4 leading-[14px]">
          <h1 className="text-md font-medium text-gray-800 mb-4">WELCOME TO CHAIRY</h1>
          <p className="text-black text-[40px] md:text-[60px] leading-[48px] md:leading-[66px] font-bold">
            Best Furniture <br className="hidden md:block" />
            Collection for your interior.
          </p>

          <button className="sm:mx-auto md:mx-0 flex mt-4 justify-center bg-blue-700 rounded text-white w-[171px] h-[52px] px-[14px] py-6 items-center space-x-2 text-base">
            <span>Shop Now</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </button>
        </div>

        {/* Right Section with Image */}
        <div className="flex items-center justify-center p-4">
          <img
            className="w-[434px] md:w-[550px] lg:w-[650px]"
            src="/Productimage.svg"
            alt="Product Image"
          />
        </div>
      </div>
    </div>
  );
}
