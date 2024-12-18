import React from "react";
import Nav from "./Components/Nav";
import Hero from "./Sections/Hero";
import Features from "./Sections/Features";
import Pricing from "./Sections/Pricing";

import FaqItem from "./Sections/FaqItem";
import Testimonial from "./Sections/Testimonial";
import Footer from "./Sections/Footer";
import Filler from "./Sections/Filler";

const App = () => {
  return (
    <main className="bg-s1">
      <Nav />
      <section className="h-screen w-full bg-s1">
        <Hero />
      </section>
      <section className="h-screen w-full bg-s1">
        <Features />
      </section>
      <section className='h-screen w-full bg-s1  '>
      <Pricing/>
      </section>
      <section className='h-screen w-full bg-s1  '>
      <FaqItem/>
      </section>
      <section className='h-screen w-full bg-s1  '>
      <Testimonial/>
      </section>
       <Filler/>
      




      <Footer/>

    </main>
  );
};

export default App;
