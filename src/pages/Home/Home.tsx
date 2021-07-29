import React, { FC } from "react";
import NavBar from "../../componenets/NavBar/NavBar";
import fashion from "../../assests/fashion.png";
import feature1 from "../../assests/feature1.jpeg";
import feature2 from "../../assests/feature2.jpeg";
import feature3 from "../../assests/feature3.jpeg";
import feature5 from "../../assests/feature5.jpeg";

import "./Home.scss";

const Home: FC = () => {
  return (
    <>
      <NavBar />
      <div className="grid grid-cols-2">
        <span className=" m-20 text-5xl">
          <p className="welcome font-bold">Welcome to Deeyal Store</p>
          <p className="text-2xl mt-4 font-semibold ad">
            {" "}
            With unlimited enthusiasm and creativeness, we are creating what we
            believe that will make you happy with unique look and best prices.
          </p>
        </span>
        <div>
          <img
            className="flex chain  items-center justify-center"
            src={fashion}
            alt="apparel"
          />
        </div>
      </div>
      <h2 className="flex justify-center items-center font-bold p-4 text-3xl  mt-8">
        FEATURED COLLECTIONS
      </h2>
      <div className="flex  items-center justify-around">
        <div>
          <img src={feature1} />
        </div>
        <div>
          {" "}
          <img src={feature2} />
        </div>
        <div>
          {" "}
          <img src={feature3} />
        </div>
        <div>
          {" "}
          <img src={feature5} />
        </div>
      </div>
    </>
  );
};

export default Home;
