import React,{FC} from 'react'

import feature1 from "../../assests/feature1.jpeg";
import feature2 from "../../assests/feature2.jpeg";
import feature3 from "../../assests/feature3.jpeg";
import feature5 from "../../assests/feature5.jpeg";
import NavBar from '../../componenets/NavBar/NavBar';

import "./Catalog.scss";

const Catalog:FC = () => {
  return (
    <div>
      <NavBar />
      <h1  className="flex  items-center justify-around mt-2 text-3xl text-gray-50 font-bold">Place Your Order NOW!!!</h1>
      <div className="flex  items-center justify-around mt-8">
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
    </div>
  )
}

export default Catalog
