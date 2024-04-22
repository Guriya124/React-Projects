import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const FOOTER = [
  {
    title: 'Learn More',
    links: ['About Us', 'Destinations', 'Travel Guides', 'Book Now', 'Privacy Policy'],
  },
  {
    title: 'Our Community',
    links: ['Terms and Conditions', 'Special Offers', 'Customer Reviews'],
  },
];

const Social = {
  title: 'Social Media',
  links: [<FaFacebook />, <FaInstagram />, <FaTwitter />],
};

const ContactUs = {
  title: 'Contact Us',
  links: [
    { value: "9572343472" },
    { value: "guriyakumari@gmail.com" },
  ],
};

const Footer = () => {
  const FooterColumn = ({ title, children }) => {
    return (
      <div className='footer-column'>
        <h4 className='footer-column-title font-extrabold mb-3 text-white '>{title}</h4>
        {children}
      </div>
    );
  };

  return (
    <footer className='bg-gradient-to-b from-primary to-secondary hover:bg-bg-gradient-to-r text-black py-16'>
      <div className='container mx-auto '>
        <div className='flex flex-wrap justify-between items-center'>
          <Link to='/' className='text-3xl font-bold text-white mb-4'>Yatra</Link>
          <div className='flex flex-wrap gap-8'>
            {FOOTER.map((col, index) => (
              <FooterColumn key={index} title={col.title}>
                <ul className='text-white'>
                  {col.links.map((link, i) => (
                    <li key={i}>
                      <Link to={`/${link}`} className='hover:text-gray-800'>{link}</Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <FooterColumn title={ContactUs.title}>
              <ul className='text-white'>
                {ContactUs.links.map((contact, i) => (
                  <li key={i}>
                    <span className='font-bold hover:text-gray-800'>{contact.label} </span>{contact.value}
                  </li>
                ))}
              </ul>
            </FooterColumn>
            <div className='footer-column'>
              <h4 className='footer-column-title font-extrabold mb-3 text-white'>{Social.title}</h4>
              <ul className='flex gap-5'>
                {Social.links.map((link, index) => (
                  <li key={index} className='text-white hover:text-gray-800'>{link}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
