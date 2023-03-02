import './Footer.css'
import { Link } from "react-router-dom";



export const Footer = () => {
    return (
        <div className='footer-container'>
            <Link style={{ textDecoration: "none" }} to="/">
            <h3 className='footer-name'>© The Hoptimist</h3>
            <p className='footer-city'>Denver, CO</p>
            </Link>
        </div>
    )
}