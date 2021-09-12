import React from "react";

import './Promo.css';

const Promo = ({ title }) => {
  return (
    <section className="promo">
      <h1 className="promo__title">{ title }</h1>
    </section>
  );
};

export default Promo;