"use client";
import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Works from "./components/Works";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
      <Works></Works>
    </>
  );
}
