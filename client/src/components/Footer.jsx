import React from 'react';

import logo from "../assets/logo.png"
const Footer = () => {
    return (

        <>

<hr />          <div className="maincss" style={{margin :"margin: 30px 0 0 00"}}>
            <footer className=" ">
                <section className="py-15">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
                            {/* Widget About */}
                            <div>
                                <div className="mb-6">
                                    <a href="/" className="mb-4 block">
                                        <img
                                            src={logo}
                                            alt="logo"
                                            className="h-8"
                                        />
                                    </a>
                                    <p className="text-lg text-gray-800">
                                        Awesome grocery store website template
                                    </p>
                                </div>
                                <ul className="space-y-4">
                                    {/* <li className="flex items-start">
                  <img
                    src={logo}
                    alt="location"
                    className="mr-2"
                  /> */}
                                    {/* <span>
                    5171 W Campbell Ave undefined Kent, Utah 53127 United States
                  </span>
                </li> */}
                                    {/* <li className="flex items-start">
                  <img
                    src="assets/imgs/theme/icons/icon-contact.svg"
                    alt="contact"
                    className="mr-2"
                  />
                  <span>(+91) - 540-025-124553</span>
                </li>
                <li className="flex items-start">
                  <img
                    src="assets/imgs/theme/icons/icon-email-2.svg"
                    alt="email"
                    className="mr-2"
                  />
                  <span>sale@Nest.com</span>
                </li>
                <li className="flex items-start">
                  <img
                    src="assets/imgs/theme/icons/icon-clock.svg"
                    alt="clock"
                    className="mr-2"
                  />
                  <span>10:00 - 18:00, Mon - Sat</span>
                </li> */}
                                </ul>
                            </div>

                            {/* Links */}
                            <div>
                                <h4 className="font-semibold text-lg mb-4">Company</h4>
                                <ul className="space-y-2">
                                    <li><a href="#" className="hover:text-gray-900">About Us</a></li>
                                    <li><a href="#" className="hover:text-gray-900">Delivery Information</a></li>
                                    <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
                                    <li><a href="#" className="hover:text-gray-900">Terms & Conditions</a></li>
                                    <li><a href="#" className="hover:text-gray-900">Contact Us</a></li>
                                    <li><a href="#" className="hover:text-gray-900">Support Center</a></li>
                                    <li><a href="#" className="hover:text-gray-900">Careers</a></li>
                                </ul>
                            </div>

                            {/* Account */}
                            <div>
                                <h4 className="font-semibold text-lg mb-4">Account</h4>
                                <ul className="space-y-2">
                                    <li><a href="#" className="hover:text-gray-900">Sign In</a></li>
                                    <li><a href="#" className="hover:text-gray-900">View Cart</a></li>
                                    <li><a href="#" className="hover:text-gray-900">My Wishlist</a></li>
                                    <li><a href="#" className="hover:text-gray-900">Track My Order</a></li>
                                    <li><a href="#" className="hover:text-gray-900">Help Ticket</a></li>
                                    <li><a href="#" className="hover:text-gray-900">Shipping Details</a></li>
                                    <li><a href="#" className="hover:text-gray-900">Compare Products</a></li>
                                </ul>
                            </div>

                            {/* Corporate */}
                            <div>
                                <h4 className="font-semibold text-lg mb-4">Corporate</h4>
                                <ul className="space-y-2">
                                    <li><a href="#" className="hover:text-gray-900">Become a Vendor</a></li>
                                    <li><a href="#" className="hover:text-gray-900">Affiliate Program</a></li>
                                    <li><a href="#" className="hover:text-gray-900">Farm Business</a></li>
                                    <li><a href="#" className="hover:text-gray-900">Farm Careers</a></li>
                                    <li><a href="#" className="hover:text-gray-900">Our Suppliers</a></li>
                                    <li><a href="#" className="hover:text-gray-900">Accessibility</a></li>
                                    <li><a href="#" className="hover:text-gray-900">Promotions</a></li>
                                </ul>
                            </div>

                            {/* Popular */}
                            <div>
              <h4 className="font-semibold text-lg mb-4">Popular</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-900">Milk & Flavoured Milk</a></li>
                <li><a href="#" className="hover:text-gray-900">Butter and Margarine</a></li>
                <li><a href="#" className="hover:text-gray-900">Eggs Substitutes</a></li>
                <li><a href="#" className="hover:text-gray-900">Marmalades</a></li>
                <li><a href="#" className="hover:text-gray-900">Sour Cream and Dips</a></li>
                <li><a href="#" className="hover:text-gray-900">Tea & Kombucha</a></li>
                <li><a href="#" className="hover:text-gray-900">Cheese</a></li>
              </ul>
                    </div>

                            {/* Install App */}
                            <div>
                                <h4 className="font-semibold text-lg mb-4">Install App</h4>
                                <p>From App Store or Google Play</p>
                                <div className="flex space-x-4 my-4">
                                    <a href="#" className="hover:opacity-80">
                                        <img src="assets/imgs/theme/app-store.jpg" alt="App Store" />
                                    </a>
                                    <a href="#" className="hover:opacity-80">
                                        <img src="assets/imgs/theme/google-play.jpg" alt="Google Play" />
                                    </a>
                                </div>
                                <p>Secured Payment Gateways</p>
                                <img
                                    src="assets/imgs/theme/payment-method.png"
                                    alt="Payment Methods"
                                    className="mt-4"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer Bottom */}
                <div className="border-t py-4 bg-gray-200">
                    <div className="container mx-auto px-6 flex flex-wrap items-center justify-between">
                        <p className="text-sm">
                            &copy; 2024, <strong className="text-gray-800">Nest</strong> - All rights reserved.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-gray-800">Facebook</a>
                            <a href="#" className="hover:text-gray-800">Twitter</a>
                            <a href="#" className="hover:text-gray-800">Instagram</a>
                            <a href="#" className="hover:text-gray-800">YouTube</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
        
        
        </>
      

    );
};

export default Footer;
