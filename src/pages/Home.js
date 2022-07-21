import React from "react";
import Categories from "../components/Layouts/Categories";
import Header from "../sections/Header";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center relative">
      <header>
        <Header />
      </header>
      <Categories />
      <main></main>
    </div>
  );
};

export default Home;
