import React from "react";
import { Link } from 'react-router-dom';

import './NavigationLink.css';

const NavigationLink = ({ title }) => {
  return (
    <Link to="/" className="navigation-link">{ title }</Link>
  );
};

export default NavigationLink;