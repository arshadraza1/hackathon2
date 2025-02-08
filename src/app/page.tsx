import Image from "next/image";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Company from "@/components/companies";

import FeaturedProducts from "@/components/FeaturedProducts";
import Categories from '../components/Categories';
import Explore from "@/components/explore";
import OurPro from "@/components/ourProduct";
import Footer from "@/components/footer";




export default function Home() {
  return (
      <div>
          <NavBar />
         <Hero/>
         <Company/>
         <FeaturedProducts />
      <Categories />
         <Explore/>
         <OurPro/>
         <Footer/>
      </div>
  );
}
