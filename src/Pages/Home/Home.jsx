import React from "react";
import Banner from "../../components/Banner/Banner";
import OurVechile from "../../components/OurVechile/OurVechile";
import About from "../../components/About/About";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <main>
      <section>
        <Banner />
      </section>
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
