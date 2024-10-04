import React from "react";
import { useRouter } from 'next/router';
import Navbar from "../component/LandingPage/Navbar";
import Header from '../component/LandingPage/Header';
import Product from '../component/LandingPage/Product'
import About from '../component/LandingPage/About'
import Review from '../component/LandingPage/Review'
import Footer from '../component/LandingPage/Footer';


export default function Home() {
  const handleClick = () => {
    alert('Button Clicked!');
  };

  return (
    <>
      <div className="bg-blue-100 py-4">
        <Navbar />
        <Header />
        <Product />
        <About />
        <Review />
        <Footer />
      </div>
    </>
  );
}

