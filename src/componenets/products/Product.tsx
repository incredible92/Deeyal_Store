import React, { FC } from "react";
import product1 from '../../assests/download2.jpg';
import product2 from '../../assests/download3.jpg';
import product3 from '../../assests/download4.jpg';

import "./Product.scss";

const Product: FC = () => {
  return (
    <>
    <div className="flex p-4 justify-center items-center">
      <span className="product"><img src={product3}/>Price: $100</span>
      <span  className="product"><img src={product2}/>Price: $150</span>
      <span  className="product"><img src={product1}/>Price: $200</span>

    </div>
    </>
  )
}

export default Product
