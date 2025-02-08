import Footer from "../components/footer";
import Header from "../components/header";
import NavBar from "../components/NavBar";

export default function About () {
return (


<section className="py-16 bg-white">
  <Header/>
  <NavBar/>
  <div className="container mx-auto  mt-20 flex flex-col items-center text-center px-4">
    {/* Heading */}
    <h1 className="text-3xl mt-15 font-bold text-gray-800 mb-4">Get In Touch With Us</h1>
    {/* Paragraph */}
    <p className="text-gray-600 max-w-2xl mb-12">
      For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. 
      Our Staff Always Be There To Help You Out. Do Not Hesitate!
    </p>

    {/* Contact Section */}
    <div className="grid lg:grid-cols-2 gap-8 w-full max-w-6xl">
      {/* Left Section - Contact Information */}
      <div className="bg-white shadow-lg rounded-lg p-6 text-left">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Address</h2>
        <p className="text-gray-600 mb-6">
          236 5th SE Avenue, New York NY10000, United States
        </p>

        <h2 className="text-lg font-semibold text-gray-800 mb-4">Phone</h2>
        <p className="text-gray-600 mb-6">
          Mobile: +(84) 546-6789<br />
          Hotline: +(84) 456-6789
        </p>

        <h2 className="text-lg font-semibold text-gray-800 mb-4">Working Time</h2>
        <p className="text-gray-600">
          Monday-Friday: 9:00 - 22:00<br />
          Saturday-Sunday: 9:00 - 21:00
        </p>
      </div>

      {/* Right Section - Contact Form */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <form className="space-y-4">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
            <input 
              type="text" 
              id="name" 
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Arshad"
            />
          </div>
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="email"
            />
          </div>
          {/* Subject Field */}
          <div>
            <label htmlFor="subject" className="block text-gray-700 mb-1">Subject</label>
            <input 
              type="text" 
              id="subject" 
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="This is optional"
            />
          </div>
          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
            <textarea 
              id="message" 
            
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="hi! I would like to ask about"
            ></textarea>
          </div>
          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-[327px]  bg-blue-600 text-white py-2 rounded-md text-sm font-semibold hover:bg-blue-500 transition">
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
  <section className="relative bg-gray-300 mt-20">
  <div className="container mx-auto w-[1320px] h-[270px] py-[100px] px-0 flex justify-between items-center  ">
    {/* Centered Images */}
    <div className="flex justify-center gap-4 w-full">
      <img
        src="/Frame1.svg"
        alt="Image 1"
        className="w-[337px] h-[70px] object-cover rounded-lg"
      />
      <img
        src="Frame2.svg"
        alt="Image 2"
       className="w-[337px] h-[70px] object-cover rounded-lg"
      />
      <img
        src="Frame3.svg"
        alt="Image 3"
      className="w-[337px] h-[75px] object-cover rounded-lg"
      />
    </div>
  </div>
</section>
<Footer/>
</section>



)

}