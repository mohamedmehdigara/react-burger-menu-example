import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            {/* Company information */}
            <div className="footer-info">
                <p>&copy; 2024 Cool Restaurant. All rights reserved.</p>
                {/* Contact information */}
                <p>
                    Contact us: <a href="mailto:support@coolrestaurant.com">support@coolrestaurant.com</a> | Phone: +1-555-1234
                </p>
            </div>

            {/* Navigation links */}
            <div className="footer-nav">
                <a href="/" className="footer-link" aria-label="Home">Home</a>
                <a href="/menu" className="footer-link" aria-label="Menu">Menu</a>
                <a href="/about" className="footer-link" aria-label="About Us">About Us</a>
                <a href="/contact" className="footer-link" aria-label="Contact Us">Contact Us</a>
            </div>

            {/* Social media links with icons */}
            <div className="social-links">
                <a href="https://facebook.com" className="social-link" aria-label="Facebook">
                    {/* Add Facebook icon here */}
                    <svg viewBox="0 0 24 24" className="icon">
                        <path d="M22.676 0H1.324C.594 0 0 .594 0 1.324v21.351C0 23.406 .594 24 1.324 24h11.495v-9.294H9.691v-3.622h3.128V8.413c0-3.092 1.893-4.776 4.656-4.776 1.325 0 2.463.099 2.796.143v3.24h-1.92c-1.506 0-1.797.715-1.797 1.763v2.311h3.594l-.469 3.622h-3.125V24h6.117c.73 0 1.324-.594 1.324-1.324V1.324C24 .594 23.406 0 22.676 0z"/>
                    </svg>
                </a>
                <a href="https://twitter.com" className="social-link" aria-label="Twitter">
                    {/* Add Twitter icon here */}
                    <svg viewBox="0 0 24 24" className="icon">
                        <path d="M23.953 4.569c-.885.392-1.83.656-2.825.775a4.934 4.934 0 002.163-2.723c-.95.555-2.005.959-3.127 1.184a4.916 4.916 0 00-8.369 4.483C7.725 8.094 4.1 6.128 1.671 3.148a4.823 4.823 0 00-.667 2.475c0 1.71.87 3.216 2.188 4.096a4.903 4.903 0 01-2.228-.616v.061c0 2.39 1.7 4.38 3.958 4.833a4.943 4.943 0 01-2.224.085c.626 1.951 2.445 3.372 4.604 3.41a9.867 9.867 0 01-7.29 2.048A13.948 13.948 0 008.29 21c9.118 0 14.098-7.548 14.098-14.098 0-.215-.005-.43-.014-.643a10.077 10.077 0 002.48-2.572c-.902.4-1.887.668-2.898.777z"/>
                    </svg>
                </a>
                <a href="https://instagram.com" className="social-link" aria-label="Instagram">
                    {/* Add Instagram icon here */}
                    <svg viewBox="0 0 24 24" className="icon">
                        <path d="M12.004 2.161c3.204 0 3.584.012 4.848.07 1.206.056 1.864.253 2.304.42a4.608 4.608 0 011.597.983c.42.42.725.87.983 1.597.167.44.364 1.098.42 2.304.059 1.264.071 1.644.071 4.848s-.012 3.584-.071 4.848c-.056 1.206-.253 1.864-.42 2.304a4.607 4.607 0 01-.983 1.597c-.42.42-.87.725-1.597.983-.44.167-1.098.364-2.304.42-1.264.059-1.644.071-4.848.071s-3.584-.012-4.848-.071c-1.206-.056-1.864-.253-2.304-.42a4.608 4.608 0 01-1.597-.983c-.42-.42-.725-.87-.983-1.597-.167-.44-.364-1.098-.42-2.304-.059-1.264-.071-1.644-.071-4.848s.012-3.584.071-4.848c.056-1.206.253-1.864.42-2.304.258-.727.563-1.177.983-1.597.42-.42.87-.725 1.597-.983.44-.167 1.098-.364 2.304-.42 1.264-.059 1.644-.071 4.848-.071zm0-2.161c-3.248 0-3.648.012-4.928.071-1.206.056-2.162.248-2.929.521a6.821 6.821 0 00-2.468 1.552 6.82 6.82 0 00-1.552 2.468c-.272.767-.464 1.723-.521 2.929-.059 1.28-.071 1.68-.071 4.928s.012 3.648.071 4.928c.056 1.206.248 2.162.521 2.929a6.82 6.82 0 001.552 2.468 6.82 6.82 0 002.468 1.552c.767.272 1.723.464 2.929.521 1.28.059 1.68.071 4.928.071s3.648-.012 4.928-.071c1.206-.056 2.162-.248 2.929-.521a6.82 6.82 0 002.468-1.552 6.82 6.82 0 001.552-2.468c.272-.767.464-1.723.521-2.929.059-1.28.071-1.68.071-4.928s-.012-3.648-.071-4.928c-.056-1.206-.248-2.162-.521-2.929a6.82 6.82 0 00-1.552-2.468 6.82 6.82 0 00-2.468-1.552c-.767-.272-1.723-.464-2.929-.521-1.28-.059-1.68-.071-4.928-.071zm0 5.944a6.057 6.057 0 11-6.057 6.057 6.058 6.058 0 016.057-6.057zm0 10.1a4.043 4.043 0 10-4.043-4.043 4.044 4.044 0 004.043 4.043zm6.404-10.533a1.45 1.45 0 10-1.45-1.45 1.45 1.45 0 001.45 1.45z"/>
                    </svg>
                </a>
            </div>

            {/* Legal links */}
            <div className="legal-links">
                <a href="/privacy-policy" className="legal-link" aria-label="Privacy Policy">Privacy Policy</a>
                <a href="/terms-of-service" className="legal-link" aria-label="Terms of Service">Terms of Service</a>
            </div>
        </footer>
    );
}

export default Footer;
