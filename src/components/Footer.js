import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer footer-center p-4 bg-base-300 text-base-content">
            <div>
                <p>Copyright © 2022 - <Link to="/about">About Us</Link> </p>
            </div>
        </footer>
    );
}

export default Footer;