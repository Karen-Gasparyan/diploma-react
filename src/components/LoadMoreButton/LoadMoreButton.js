import React from 'react';

import './LoadMoreButton.css';

const LoadMoreButton = ({ loadMore, title }) => {
  return (
    <button
      className="load-more-button"
      type="button"
      onClick={ loadMore }>
        { title }
    </button>
  );
};

export default LoadMoreButton;