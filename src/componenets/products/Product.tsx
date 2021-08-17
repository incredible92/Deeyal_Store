import React, { FC } from "react";
import "./Product.scss";

const Product: FC = () => {
  return (
    <>
    <div className="flex p-4 justify-center items-center">
      <span className="product">Product1</span>
      <span  className="product">Product2</span>
      <span  className="product">Product3</span>

    </div>
    </>
  )
}

export default Product
