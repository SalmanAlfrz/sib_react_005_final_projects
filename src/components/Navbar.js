import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchAdded } from "../features/searchSlice";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const onClickedSearch = () => {
    dispatch(searchAdded(searchTerm));
  };

  return (
    <>
      <div
        id="navbar"
        className="navbar bg-transparent shadow-2xl backdrop-blur-3xl"
      >
        <div className="flex-1">
          <button className="btn btn-ghost font-bold normal-case text-xl text-airdrop-white">
            <Link to="/">FilmsAPI</Link>
          </button>
        </div>
        <div className="flex-0 mx-4 invisible sm:visible">
          <button className="text-white font-semibold">
            <Link to="/about">About Us</Link>
          </button>
        </div>
        {location.pathname === "/" && (
          <div className="flex-none gap-2">
            <div className="form-control">
              <input
                type="text"
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
                placeholder="🔍 Search"
                className="w-28 md:w-96 input border-t-stake-red border-l-stake-red border-b-alpha-blue border-r-alpha-blue rounded-tl-none rounded-br-none rounded-2xl border-2 bg-gas-money-black text-airdrop-white -ml-12 sm:ml-0"
              />
            </div>
            <div className="navbar-end">
              <button
                className="btn rounded-tl-none rounded-br-none rounded-2xl w-20 md:w-24 bg-wen-minty text-gas-money-black px-8 hover:bg-alpha-blue"
                onClick={() => onClickedSearch(searchTerm)}
              >
                Search
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
