import React, { useState } from 'react';

const Layout = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState('home');

    const navLinks = [
        { name: 'Home', href: '/', id: 'home' },
        { name: 'About', href: '/about', id: 'about' },
        { name: 'Academics', href: '/academics', id: 'academics' },
        { name: 'Achievements', href: '/achievements', id: 'achievements' },
        { name: 'Contact', href: '/contact', id: 'contact' },
    ];

    return (
        <div className="min-h-screen flex flex-col font-sans text-neutral-800 bg-neutral-100">
            <nav className="bg-white shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo - Left Edge */}
                        <div className="flex items-center">
                            <a href="/" className="flex items-center space-x-3">
                                <img src="/images/gpla.jpg" alt="GPLA Logo" className="h-16 w-16 object-contain" />
                                <span className="font-bold text-2xl text-blue-900">GPLA</span>
                            </a>
                        </div>

                        {/* Desktop Navigation - Center */}
                        <div className="hidden md:flex items-center space-x-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setCurrentPage(link.id)}
                                    className="relative px-4 py-2 text-gray-700 hover:text-blue-900 font-medium transition-colors duration-200 group"
                                >
                                    {link.name}
                                    {/* Active underline */}
                                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-red-600 transition-all duration-300 ${
                                        currentPage === link.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                                    }`}></span>
                                </a>
                            ))}
                        </div>

                        {/* Apply Button - Right Edge */}
                        <div className="hidden md:block">
                            <a href="/contact" className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition-all duration-300 font-semibold shadow-md hover:shadow-lg transform hover:scale-105">
                                Apply Now
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="flex items-center md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-gray-700 hover:text-blue-900 focus:outline-none"
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    {isMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t">
                        <div className="px-4 pt-2 pb-3 space-y-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => {
                                        setCurrentPage(link.id);
                                        setIsMenuOpen(false);
                                    }}
                                    className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${
                                        currentPage === link.id
                                            ? 'text-blue-900 bg-blue-50 border-l-4 border-red-600'
                                            : 'text-gray-700 hover:text-blue-900 hover:bg-gray-50'
                                    }`}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="/contact"
                                className="block w-full text-center bg-red-600 text-white px-4 py-3 rounded-full hover:bg-red-700 transition-colors font-semibold mt-4"
                            >
                                Apply Now
                            </a>
                        </div>
                    </div>
                )}
            </nav>

            <main className="flex-grow">
                {children}
            </main>

            <footer className="bg-blue-900 text-white pt-12 pb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="font-heading text-xl font-bold mb-4">Gibson Pillay Learning Academy</h3>
                            <p className="text-gray-300">
                                Empowering learners to achieve excellence through quality education and holistic development.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                                <li><a href="/academics" className="text-gray-300 hover:text-white transition-colors">Academics</a></li>
                                <li><a href="/achievements" className="text-gray-300 hover:text-white transition-colors">Achievements</a></li>
                                <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
                            <p className="text-gray-300 mb-2">1144 Lancaster Street, Lenasia South</p>
                            <p className="text-gray-300 mb-2">Phone: +27 011 855 0672</p>
                            <p className="text-gray-300">Email: gpla05@telkomsa.net</p>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-blue-700 text-center text-gray-300 text-sm">
                        &copy; {new Date().getFullYear()} Gibson Pillay Learning Academy. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;