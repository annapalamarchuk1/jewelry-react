import React from 'react';
import Main from '../components/Main';

const CatalogPage = ({ addToCart }) => {
  return (
    <div>
      <Main addToCart={addToCart} />
    </div>
  );
};

export default CatalogPage;