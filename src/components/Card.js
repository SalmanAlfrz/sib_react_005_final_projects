import React from "react";

const Card = ({movie}) => {
  return (
    <div
      className="card bg-gas-money-black w-80 bg-cover bg-no-repeat bg-center shadow-xl my-10 overflow-hidden"
      style={{
        backgroundImage: `url(${movie.Poster})`,
        backgroundBlendMode: "luminosity",
      }}
    >
      <div className="h-80"></div>
      <figure>
        <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt="film" className="w-52 absolute mb-64" />
      </figure>
      <div className="card-body glass rounded-bl-sm rounded-tl-none rounded-tr-full text-wen-minty">
        <h2 className="card-title text-3xl">{movie.Title}</h2>
        <p>{movie.Year}</p>
        <p className="text-xl font-bold">{movie.Type}</p>
      </div>
    </div>
  );
};

export default Card;
