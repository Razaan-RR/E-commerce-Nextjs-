import Image from "next/image";
import Hero from "./Components/Hero";
import FeaturedProducts from "./Components/FeaturedProducts";
import Features from "./Components/Features";
import Testimonials from "./Components/Testimonials";
import Newsletter from "./Components/Newsletter";

export default function Home() {
  return (
    <div className="">
      <Hero></Hero>
      <FeaturedProducts></FeaturedProducts>
      <Features></Features>
      <Testimonials></Testimonials>
      <Newsletter></Newsletter>
    </div>
  );
}
