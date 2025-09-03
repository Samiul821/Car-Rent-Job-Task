import React from "react";
import Banner from "../../components/Banner/Banner";
import OurVechile from "../../components/OurVechile/OurVechile";
import About from "../../components/About/About";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import Floating from "../../components/Floating/Floating";

const Home = () => {
  return (
    <main>
      {/* Banner Section */}
      <section className="relative">
        <Banner />
        <Floating />
      </section>

      {/* Other Sections */}
      <section>
        <OurVechile />
      </section>
      <section>
        <About />
      </section>
      <section>
        <WhyChooseUs />
      </section>
    </main>
  );
};

export default Home;
