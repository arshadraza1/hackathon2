import Header from "../components/header";
import Footer from "../components/footer";
import NavBar from "../components/NavBar";
export default function Faq (){
    return(
<div>
<Header/>
<NavBar/>
<section className="py-16 bg-gray-50">
  <div className="container mx-auto text-center px-4">
    {/* Heading */}
    <h1 className="text-3xl font-bold text-gray-800 mb-4">Questions Looks Here</h1>

    {/* Paragraph */}
    <p className="text-gray-600 max-w-3xl mx-auto mb-12">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s.
    </p>

    {/* FAQ Cards Section */}
    <div className="grid grid-cols-1 sm:grid-cols-2  gap-6">
      {/* Card 1 */}
      <div className="bg-gray-200 p-6 rounded-lg relative">
        <button className="absolute top-4 right-4 text-gray-600 text-2xl font-bold">+</button>
        <h3 className="text-xl text-left font-semibold text-gray-800 mb-3">What types of chairs do you offer?</h3>
        <p className="text-gray-600 text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>

      {/* Card 2 */}
      <div className="bg-gray-200 p-6 rounded-lg relative">
        <button className="absolute top-4 right-4 text-gray-600 text-2xl font-bold">+</button>
        <h3 className="text-xl text-left font-semibold text-gray-800 mb-3">What types of chairs do you offer?</h3>
        <p className="text-gray-600 text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>

      {/* Card 3 */}
      <div className="bg-gray-200 p-6 rounded-lg relative">
        <button className="absolute top-4 right-4 text-gray-600 text-2xl font-bold">+</button>
        <h3 className="text-xl text-left font-semibold text-gray-800 mb-3">What types of chairs do you offer?</h3>
        <p className="text-gray-600 text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>

      {/* Card 4 */}
      <div className="bg-gray-200 p-6 rounded-lg relative">
        <button className="absolute top-4 right-4 text-gray-600 text-2xl font-bold">+</button>
        <h3 className="text-xl text-left font-semibold text-gray-800 mb-3">What types of chairs do you offer?</h3>
        <p className="text-gray-600 text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>

      {/* Card 5 */}
      <div className="bg-gray-200 p-6 rounded-lg relative">
        <button className="absolute top-4 right-4 text-gray-600 text-2xl font-bold">+</button>
        <h3 className="text-xl text-left font-semibold text-gray-800 mb-3">What types of chairs do you offer?</h3>
        <p className="text-gray-600 text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>

      {/* Card 6 */}
      <div className="bg-gray-200 p-6 rounded-lg relative">
        <button className="absolute top-4 right-4 text-gray-600 text-2xl font-bold">+</button>
        <h3 className="text-xl text-left font-semibold text-gray-800 mb-3">What types of chairs do you offer?</h3>
        <p className="text-gray-600 text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
    </div>
  </div>
</section>

<Footer/>
</div>

    )
}