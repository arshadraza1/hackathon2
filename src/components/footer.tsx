export default function Footer (){

    return (


        <footer className="bg-white text-gray-500 py-10">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
    
    <div>
     
      <div className="mb-4">
        <img src="/Logo.svg" alt="Logo" className="w-40"/>
      </div>
   
      <p className="text-gray-400 mb-4">
        Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus.
      </p>
      <div className="flex space-x-4">
        <button className="p-2 bg-white rounded-full hover:bg-gray-600">
          <img src="/Group.svg" alt="Facebook"/>
        </button>
        <button className="p-2 bg-white rounded-full hover:bg-gray-600">
        <img src="/Group1.svg" alt="Twitter"/>
        </button>
        <button className="p-2 bg-white rounded-full hover:bg-gray-600">
        <img src="/Group2.svg" alt="Instagram"/>
        </button>
        <button className="p-2 bg-white rounded-full hover:bg-gray-600">
        <img src="/Group3.svg" alt="Pintrest"/>
        </button>
        <button className="p-2 bg-white rounded-full hover:bg-gray-600">
        <img src="/Group4.svg" alt="youtube"/>
        </button>
      </div>
     

    </div>


    <div>
      <h3 className="text-lg font-semibold mb-4">Categories</h3>
      <ul className="space-y-2 text-gray-400">
        <li>Sofa</li>
        <li>Armchair</li>
        <li>Wing Chair</li>
        <li>Desk Chair</li>
        <li>Wooden Chair</li>
        <li>Park Bench</li>
      </ul>
    </div>

    
    <div>
      <h3 className="text-lg font-semibold mb-4">Support</h3>
      <ul className="space-y-2 text-gray-400">
        <li>Help & Support</li>
        <li>Terms & Conditions</li>
        <li>Privacy Policy</li>
        <li>Help</li>
      </ul>
    </div>

    
    <div>
      <h3 className="text-lg font-semibold mb-4">Newsletter</h3>

      <form className="flex items-center mb-4">
        <input type="email" placeholder="Enter your email" className="w-full p-2 rounded-l-md text-gray-900"></input>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-500">
          Subscribe
        </button>
      </form>
    
      <p className="text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
      </p>
    </div>
  </div>
  <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 p-10">

<p className="text-sm mb-2 md:mb-0">© 2021 - Blogy - Designed & Developed by arshadraza</p>
<div className="flex space-x-4">
 <img src="/Group 13.svg" alt="credite cards" />
</div>
</div>
</footer>

    )
}