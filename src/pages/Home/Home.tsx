import React, { FC } from "react";
import NavBar from "../../componenets/NavBar/NavBar";
import fashion from "../../assests/fashion.png";

import "./Home.scss";

const Home: FC = () => {
  return (
    <>
      <NavBar />
      <div className="grid grid-cols-2">
        <span className=" m-20 text-5xl">
          <p className="welcome font-bold">Welcome to Deeyal Store</p>
          <p className="text-2xl mt-4 font-semibold ad"> With unlimited enthusiasm and creativeness, we are creating what we believe that will make you happy with unique look and best prices.</p>
        </span>
        <div>
          <img
            className="flex chain  items-center justify-center"
            src={fashion}
            alt="apparel"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
