import React, { FC } from "react";
import NavBar from "../../componenets/NavBar/NavBar";
import fashion from "../../assests/fashion.png";

import "./Home.scss";

const Home: FC = () => {
  return (
    <>
      <NavBar />
      <div className="grid grid-cols-2">
        <div className=" m-20 ">
          <p className="welcome text-5xl font-bold">Welcome to Deeyal Store</p>
          <p className="text-2xl mt-4 font-semibold ad">
            {" "}
            We vend customized accessories💍and unisex fashion apparels💫✨🥰
            with unlimited enthusiasm and creativeness, <br /> we are creating what we
            believe that will make you happy with unique look and best prices.
          </p>
          
          <button  className="w-72 h-16 font-bold text-2xl mt-20 check rounded ">Check collections ----></button>
        </div>
        <div>
          <img
            className="flex chain  items-center justify-center"
            src={fashion}
            alt="apparel"
          />
        </div>
      </div>
      <h2></h2>
      <h2 className="flex justify-center items-center font-bold p-4 text-3xl  mt-8">
        FEATURED COLLECTIONS
      </h2>
      
    </>
  );
};

export default Home;
