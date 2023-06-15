import React from "react";
import NavBar from "../../components/NavBar";
import Hero from "../../components/heroSection/Hero";
import Menu from "../../components/menuSection/Menu";
import SubMenu from "../../components/subMenuSection/SubMenu";
import "./Home.css"
export const Home = () => {
  return (
    <div className="containe  my-5 mx-20 ">
      <NavBar />
      <Hero />
      <Menu/>
      <SubMenu/>
    </div>
  );
};
