import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => {
            // If the link is "#", render just the icon div
            if (socialImg.link === "#") {
              return (
                <div key={index} className="icon">
                  <img src={socialImg.imgPath} alt={`${socialImg.name} icon`} />
                </div>
              );
            }
            // Otherwise render a clickable link
            return (
              <a
                key={index}
                href={socialImg.link}
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
              >
                <img src={socialImg.imgPath} alt={`${socialImg.name} icon`} />
              </a>
            );
          })}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Ashish Sapkota. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;