import React from "react";
import { Link } from 'react-router-dom';

import './AccountLink.css';

const AccountLink = ({ title }) => {
  return (
    <Link to="/" className="account-link">{title}
      <div className="account-link__icon"></div>
    </Link>
  );
};

export default AccountLink;