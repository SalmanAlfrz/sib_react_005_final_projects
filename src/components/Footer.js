import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer-center p-7 bg-wen-minty shadow-md sm:text-xl">
      <div>
        <p>
          Copyright © 2022 - Kelompok 4 - <Link to="/about">About Us</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
