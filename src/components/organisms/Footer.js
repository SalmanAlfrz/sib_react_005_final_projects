import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-primary text-white">
            <div>
                <Link to="/about" className="text-white hover:text-gray-300 font-bold text-3xl">About Us</Link>
                <p>Copyright © 2022 - Kelompok 4</p>
            </div>
        </footer>
    )
}

export default Footer