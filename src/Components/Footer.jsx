
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaTwitter, FaMapMarkerAlt } from "react-icons/fa";
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

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
    { icon: <CallIcon />, value: "9572343472" },
    { icon: <EmailIcon />, value: "guriyakumari@gmail.com" },
  ],
};

const Address = {
  title: 'Our Address',
  value: 'Suresh Gyan Vihar University, Jaipur, Rajasthan',
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
          <Link to='/' className='text-3xl font-bold text-white mb-4'>Spiritural Yatra</Link>
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
                    <span className='font-bold hover:text-gray-800'>{contact.icon} </span>{contact.value}
                  </li>
                ))}
              </ul>
            </FooterColumn>

            <div className='footer-column'>
              <h4 className='footer-column-title font-extrabold mb-3 text-white'>{Address.title}</h4>
              <div className='flex items-center text-white'>
                <FaMapMarkerAlt className='mr-2' /> {Address.value}
              </div>
            </div>

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