import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaGooglePlay } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-200 py-8">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Branding Section */}
                    <div className="mb-8 md:mb-0">
                        <Image
                            src="/img/Main_logo_on_dark _bg.png"
                            alt="Logo"
                            className="mb-4"
                            width={140}
                            height={40}
                        />
                        <p className="text-sm">
                            Upgrade your world, refresh your wallet. Join us on our journey.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="mb-8 md:mb-0">
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="gap-y-2">
                            <li>
                                <Link href="/">
                                    <p className="hover:underline">Home</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/about">
                                    <p className="hover:underline">About Us</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/services">
                                    <p className="hover:underline">Services</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact">
                                    <p className="hover:underline">Contact</p>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media & Contact Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Connect with Us</h3>
                        <div className="flex space-x-4 mb-4">
                            <Link href="https://m.facebook.com/zervebox/" target='_blank' className="hover:text-gray-400">
                                <FaFacebookF size={20} />
                            </Link>
                            {/* <Link href="#" className="hover:text-gray-400">
                                <FaTwitter />
                            </Link> */}
                            <Link href="https://www.instagram.com/zervebox?igsh=eTFlN2JzMG1kNm5x" target='_blank' className="hover:text-gray-400">
                                <FaInstagram size={20} />
                            </Link>
                            <Link href="https://play.google.com/store/apps/details?id=com.zervebox.app" target='_blank' className="hover:text-gray-400">
                                <FaGooglePlay size={20} />
                            </Link>
                        </div>
                        <p className="text-sm">Email: info@zervebox.com</p>
                        <p className="text-sm">Phone: +91 7978489945</p>
                    </div>
                </div>

                <div className="mt-8 text-center text-sm border-t border-gray-700 pt-4">
                    <p>&copy; 2024 Zervebox. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
