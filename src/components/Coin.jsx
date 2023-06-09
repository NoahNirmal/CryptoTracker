import React from "react";
import { useNavigate } from "react-router-dom";
import "./Coin.css";

const Coin = ({
  id,
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketCap,
}) => {

  const navigate =useNavigate()

  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">₹{price.toLocaleString("en-IN")}</p>
          <p className="coin-volume">₹{volume.toLocaleString("en-IN")}</p>
          {priceChange < 0 ? (
            <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
          )}
          <p className="coin-marketcap">
            Mkt cap : ₹{marketCap.toLocaleString("en-IN")}{" "}
          </p>
          <button className="coin-btn"
            onClick={() => {
              navigate(`/coinsdetails/${id}`)

            }}
          >
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Coin;
