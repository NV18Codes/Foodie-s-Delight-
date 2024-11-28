import React from 'react';

const Footer = () => (
    <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
            <p>&copy; {new Date().getFullYear()} Foodie's Delight. All rights reserved.</p>
            <nav className="flex justify-center space-x-4 mt-4">
                <a href="#!" className="hover:underline">
                    Privacy Policy
                </a>
                <a href="#!" className="hover:underline">
                    Terms of Service
                </a>
                <a href="#!" className="hover:underline">
                    Contact
                </a>
            </nav>
        </div>
    </footer>
);

export default Footer;
