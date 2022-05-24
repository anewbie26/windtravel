import Head from "next/head";
import HeroSection from "../components/hero_section/HeroSection";
import Category from "../components/Categories/Category.jsx"
import Destination from "../components/Destination/Destination";
import NextTrip from "../components/NextTrip/NextTrip";
import Testimonial from "../components/Testimonials/Testimonial";
import Partners from "../components/Partners/Partners";
import Subscribe from "../components/Subscription/Subscribe";
import Footer from "../components/Footer/Footer"
export default function Home() {
  return (
    // bg-[#E5E5E5]
    <div className="">
      <Head>
        <title>WindTravels</title>
        <meta name="description" content="Best travel agency in the world!" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <HeroSection />
        <Category />
        <Destination />
        <NextTrip />
        <Testimonial />
        <Partners />
        <Subscribe />
        <Footer />
      </main>
    </div>
  );
}
