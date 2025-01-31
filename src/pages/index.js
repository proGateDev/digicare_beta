import React from "react";
import AdminLogin from "../pages/admin/auth/login"
// import Login from "../pages/auth/login"
// import { useRouter } from 'next/router';
// import Navbar from "../component/LandingPage/Navbar";
// import Header from '../component/LandingPage/Header';
// import Product from '../component/LandingPage/Product'
// import About from '../component/LandingPage/About'
// import Review from '../component/LandingPage/Review'
// import Footer from '../component/LandingPage/Footer'
// import Features from '../component/LandingPage/Features'
// import Partner from '../component/LandingPage/Partner'
// import Hero from '../component/LandingPage/Hero'
// import { ContactUs } from "../component/LandingPage/ContactUs";


export default function Home() {

  return (
    <>
      <div className="bg-white py-4">
        <AdminLogin/>
        {/* <Navbar />
     
        <Hero />
        <Header />
        <Product />
        <Features />
        <About />
        <Partner />
        <Footer /> */}
      </div>
    </>
  );
}

