import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaTiktok,
  FaYoutube,
} from 'react-icons/fa';
import logo from '../../../Components/images/Logo.png';
import company1 from '../../../OurCompanies/rodhidigital.png';
import company2 from '../../../OurCompanies/RodhiImportExport.png';
import company3 from '../../../OurCompanies/rodhipicture.png';
import company4 from '../../../OurCompanies/rodhiFilms.png';
const Footer = () => {
  const HowItWorks = () => {
    const pricingSection = document.getElementById('HowItWorks');
    pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricingSection');
    pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const Portfolio = () => {
    const pricingSection = document.getElementById('portfolio');
    pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const Testimonial = () => {
    const pricingSection = document.getElementById('testimonial');
    pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="bg-gray-300 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 mobile:grid-cols-2 gap-8">
          <div>
            <img src={logo} className="w-[8rem] mb-4" alt="Logo" />
            <p className="text-black mb-4 max-w-[25rem]">
              Welcome to Rodhi Shop! Get the best directly from the source
              itself. Best quaility for your growing business.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/watch/rodhisource/?paipv=0&eav=Afa6yd10Zn-RWMIdahm1MO6Juk6-uflm9Su2Nba08Tvc8kxBSgXqSAZY7NuwvP-5Juw&_rdr"
                className="rodhiRed rodhiBlueHover transition-colors duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.youtube.com/@rodhi.sources"
                className="rodhiRed rodhiBlueHover transition-colors duration-300"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.instagram.com/p/Ci5HeMzBJIg/?hl=en"
                className="rodhiRed rodhiBlueHover transition-colors duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/82490648/admin/feed/posts/"
                className="rodhiRed rodhiBlueHover transition-colors duration-300"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.pinterest.com/rodhisources/"
                className="rodhiRed rodhiBlueHover transition-colors duration-300"
              >
                <FaTiktok />
              </a>
              <a
                href="https://www.tiktok.com/@rodhi.sources"
                className="rodhiRed rodhiBlueHover transition-colors duration-300"
              >
                <FaPinterest />
              </a>
            </div>
          </div>
          <div className="">
            <ul className="list-none grid grid-cols-2 md:grid-cols-2 gap-4 text-black style-none leading-loose">
              <div>
                <h3 className="text-xl font-bold mb-4 rodhiRed">Links</h3>
                <li onClick={HowItWorks} className="rodhiRedHover">
                  Our Product
                </li>
                <li onClick={scrollToPricing} className="rodhiRedHover">
                  Something
                </li>
                <li onClick={Portfolio} className="rodhiRedHover">
                  Something
                </li>
                <li onClick={Testimonial} className="rodhiRedHover">
                  Something
                </li>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 rodhiRed">Contact Us</h3>
                <li onClick={HowItWorks} className="rodhiRedHover">
                  Call Us
                </li>
                <li onClick={scrollToPricing} className="rodhiRedHover">
                  Our Location
                </li>
                <li onClick={Portfolio} className="rodhiRedHover">
                  Something
                </li>
                <li onClick={Testimonial} className="rodhiRedHover">
                  Something
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 md:grid-cols-2 gap-2 w-full mx-auto">
        <div className="flex justify-center items-center">
          <a
            href="http://digital.rodhigroup.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={company1} height="150px" width="150px" alt="Company 1" />
          </a>
        </div>
        <div className="flex justify-center items-center">
          <a
            href="http://rodhisources.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={company2} height="150px" width="150px" alt="Company 2" />
          </a>
        </div>
        <div className="flex justify-center items-center">
          <a
            href="http://pictures.rodhigroup.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={company3} height="120px" width="120px" alt="Company 3" />
          </a>
        </div>
        <div className="flex justify-center items-center">
          <a
            href="http://films.rodhigroup.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={company4} height="120px" width="120px" alt="Company 4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
