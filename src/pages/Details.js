import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";

const Details = () => {
  const {id} = useParams()
  const [data, setData] = useState()
  const [loading, setLoading] = useState();
  window.onscroll = () => {
    const header = document.getElementById("header-detail");
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
      header.classList.add("navbar-fixed");
    } else {
      header.classList.remove("navbar-fixed");
    }
  };

  useEffect(()=>{
    setLoading(true);
    axios({
      method: "GET",
      url: `http://www.omdbapi.com/?apikey=ca3b17a&i=${id}`
    }).then((res) => {
      setData(res.data)
    })
    .catch((e) => console.log(e))
    .finally(() => setLoading(false));
  }, [id])
  
  return (
    <>
      {loading && (
        <div className="text-4xl text-white font-bold p-96">
        <h2>Loading</h2>
      </div>
      )}
      {data && (
      <>
      <div
        id="header-detail"
        className="text-4xl text-white flex flex-row mx-auto py-5"
      >
        <button className="mx-5">
          <Link to="/">⬅️</Link>
        </button>
        <p>Details Film</p>
      </div>
      <div className="hero bg-gradient-to-br from-[#161334]/80 via-[#B286AB] to-[#7493D3]">
        <div className="hero-content flex-col lg:flex-row sm:my-36">
          <img
           src={data.Poster !== 'N/A' ? data.Poster : 'https://via.placeholder.com/400'}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="poster"
          />
          <div className="text-wen-minty w-3/4 sm:ml-8">
            <h1 className="text-5xl font-bold mb-5">{data.Title}</h1>
            <p className="py-3 font-semibold text-2xl ">
              Release : <span className="text-white">{data.Released}</span>
            </p>
            <p className="py-3 font-semibold text-2xl">
              Genre :{" "}
              <span className="text-white">{data.Genre}</span>
            </p>
            <p className="py-3 font-semibold text-2xl">
              Actor :{" "}
              <span className="text-white">
                {data.Actors}
              </span>
            </p>
            <p className="pt-3 font-semibold text-2xl">Plot :</p>
            <p className="pb-3 whitespace-pre-line font-semibold text-2xl text-white">
              {data.Plot}
            </p>
            <p className="py-3 font-semibold text-2xl">
              Runtime : <span className="text-white">{data.Runtime}</span>
            </p>
          </div>
        </div>
      </div>
      </>
      )}
      <Footer />
    </>
  );
};

export default Details;
