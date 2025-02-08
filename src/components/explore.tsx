export default function Explore() {

  return (
    <section className="  grid grid-cols-5 gap-4 mb-0 mt-14 -mx-28 p-0 ">

  <div className="col-span-1 flex justify-center items-center ">
    
  </div>


  <div className="mx-0 w-[1320px] h-[648px]col-span-3 sm:grid-cols-2 grid grid-cols-2  grid-rows-2 md:grid-rows-4 md:grid-cols-4 gap-4 p-0">

    <div className="row-span-2 md:col-span-2 ">
      <img 
        src="/Image (1).svg" 
        alt="Large Image" 
        className="md:w-full h-full  object-cover rounded-lg"
      />
    </div>

    <div className="row-span-1">
      <img 
       src="/Image (2).svg" 
        alt="Small Image 1" 
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
    <div className="row-span-1">
      <img 
        src="/Image.svg" 
        alt="Small Image 2" 
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
    <div className="row-span-1">
      <img 
         src="/Image.svg" 
        alt="Small Image 3" 
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
    <div className="row-span-1">
      <img 
        src="/Image.svg"  
        alt="Small Image 4" 
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  </div>
</section>

)
}