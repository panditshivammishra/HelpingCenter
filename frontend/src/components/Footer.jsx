import React from 'react'

function Footer() {
  return (
    <footer className="bg-black text-white py-5 px-4">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 px-3">
          <div>
            <h3 className="font-semibold">Abstract</h3>
            <ul className="mt-2 space-y-1">
              <li><a href="#branches" className="hover:underline">Branches</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Resources</h3>
            <ul className="mt-2 space-y-1">
              <li><a href="#blog" className="hover:underline">Blog</a></li>
              <li><a href="#help-center" className="hover:underline">Help Center</a></li>
              <li><a href="#release-notes" className="hover:underline">Release Notes</a></li>
              <li><a href="#status" className="hover:underline">Status</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Community</h3>
            <ul className="mt-2 space-y-1">
              <li><a href="https://twitter.com" className="hover:underline" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://linkedin.com" className="hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://facebook.com" className="hover:underline" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://dribbble.com" className="hover:underline" target="_blank" rel="noopener noreferrer">Dribbble</a></li>
              <li><a href="#podcast" className="hover:underline">Podcast</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Company</h3>
            <ul className="mt-2 space-y-1">
              <li><a href="#about-us" className="hover:underline">About Us</a></li>
              <li><a href="#careers" className="hover:underline">Careers</a></li>
              <li><a href="#legal" className="hover:underline">Legal</a></li>
              <li><a href="#contact-us" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
        <div className="mt-10">
          <img
            src={require('../images/ass_L.jpg')}
            alt="Logo"
            className="h-6 w-6  mb-2"
          />
          <div>

            <p>&copy; Copyright 2022 Abstract Studio Design, Inc. All rights reserved</p>
            <p className="mt-2"><a href="mailto:info@abstract.com" className="hover:underline">info@abstract.com</a></p>
            </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer
