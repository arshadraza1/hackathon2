import Footer from "./footer"
export default function Newsletter () {

    return(

        <section className="bg-gray-200 py-10 h-[754px] mt-[250px] ">
  <div className="container mx-auto text-center px-4 mt-20">
    {/* Newsletter Section */}
    <div className="mb-8">
      {/* Newsletter Heading */}
      <p className="text-lg font-medium mb-4 md:text-2xl lg:text-[50px]">
        Or subscribe to the newsletter
      </p>
      {/* Newsletter Form */}
      <form className="flex flex-col md:flex-row justify-center items-center gap-2 mb-4">
        <input 
          type="email" 
          placeholder="Enter your email" 
          className="w-full max-w-md p-2 border border-gray-400 rounded-md focus:outline-none focus:ring focus:ring-blue-300 text-gray-900"
        />
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-500">
          Submit
        </button>
      </form>
      {/* Horizontal Divider */}
      <hr className="border-gray-300 w-3/4 mx-auto" />
    </div>

    {/* Instagram Follow Section */}
    <div className="mb-8">
      {/* Instagram Heading */}
      <h2 className="text-lg font-semibold  sm:text-xl lg:text-[50px] mb-11">
        Follow products and discounts on Instagram
      </h2>
      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4  ">
        {/* Instagram Images */}
        <img 
          src="/top2.svg" 
          alt="Product 1" 
          className="w-full h-auto rounded-lg object-cover"
        />
        <img 
         src="/image (2).svg"
          alt="Product 2" 
          className="w-full h-auto rounded-lg object-cover"
        />
        <img 
              src="/top1.svg" 
          alt="Product 3" 
          className="w-full h-auto rounded-lg object-cover"
        />
        <img 
              src="/top2.svg" 
          alt="Product 4" 
          className="w-full h-auto rounded-lg object-cover"
        />
        <img 
           src="/top3.svg" 
          alt="Product 5" 
          className="w-full h-auto rounded-lg object-cover"
        />
        <img 
              src="/image (1).svg" 
          alt="Product 6" 
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>
    </div>
  </div>
  <Footer/>
</section>


    )
}