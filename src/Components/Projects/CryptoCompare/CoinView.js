import React from 'react';

const CoinView = () => {
  return (
    <div>
      <h2>Coin View</h2>
      <img src={process.env.PUBLIC_URL + '/images/COMPARE_ccview.png'} alt="crypto compare dashboard"></img>
    </div>
  );
}

export default CoinView;
