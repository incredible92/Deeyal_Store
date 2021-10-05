import React from "react";

import icon from '../../assests/chains.png'
import NavBar from "../../componenets/NavBar/NavBar";
import "./about.scss";

const About = () => {
  return (
    <>
    <NavBar />
    <div className="flex justify-between">
      <span className="flex justify-center items-center w-3/5 text-xl p-12 text-black font-bold texts">
        Welcome to Deeyal store,<br /> your number one source for all accessories and
        unisex fashion apparels. We're dedicated to giving you the very
        best of customized fashion apparels, with a focus on jewellery, shoes &
        shirts and bags. <br />Founded in 2021 by Aliagan Mardiyah, <br />Deeyal store has
        come a long way from its beginnings in Ilorin. When Deeyal first started
        out, their passion for customized jewellery drove them to quit day job
        so that Deeyal store can offer you the world's most advanced and
        cusomized jewellery. <br /> We now serve customers all over Ilorin, Lagos and
        Abuja and are thrilled that we're able to turn our passion into our own
        website. <br />we hope you enjoy our products as much as we enjoy offering
        them to you. If you have any questions or comments, please don't
        hesitate to contact us.
      </span>
      <img src={icon} className="mt-6 mr-10" />
    </div>
    </>
  );
};

export default About;
