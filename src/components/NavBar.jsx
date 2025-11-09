import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { navLinks } from "../constants";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, link) => {
    e.preventDefault();
    
    if (isHomePage) {
      // On home page, scroll to section
      const targetId = link.replace("#", "");
      const target = document.getElementById(targetId);
      
      if (target) {
        // For work section, scroll higher to show counter
        const offset = targetId === "work" ? 350 : 100; // navbar height + extra for counter visibility
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    } else {
      // On project details page, navigate to home then scroll
      navigate("/");
      setTimeout(() => {
        const targetId = link.replace("#", "");
        const target = document.getElementById(targetId);
        if (target) {
          // For work section, scroll higher to show counter
          const offset = targetId === "work" ? 350 : 100;
          const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }, 100);
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    if (isHomePage) {
      const target = document.getElementById("contact");
      if (target) {
        const offset = 100;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const target = document.getElementById("contact");
        if (target) {
          const offset = 100;
          const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="#hero" onClick={handleLogoClick} className="logo">
          Ashish Sapkota
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link} onClick={(e) => handleNavClick(e, link)}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" onClick={handleContactClick} className="contact-btn group">
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>
      </div>
    </header>
  );
}

export default NavBar;