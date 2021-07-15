import React, { FC } from "react";
import NavBar from "../../componenets/NavBar/NavBar";
import fashion from "../../assests/fashion.png";

import "./Home.scss";

const Home: FC = () => {
  return (
    <div>
      <NavBar />
      
      <img
        className="flex chain  items-center justify-center"
        src={fashion}
        alt="apparel"
      />
     
    </div>
  );
};

export default Home;
