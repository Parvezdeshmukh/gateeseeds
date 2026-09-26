import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

import logo from '../../assets/logo.jpg';
import siteConfig from '../../config/siteConfig';
import { whatsappLink, telLink } from '../../utils/whatsapp';
import { useLanguage } from '../../context/LanguageContext';

import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const location = useLocation();
  const { t } = useLanguage();

  // Navigation links from translations
  const links = [
    { to: '/', label: t.navbar.home, end: true },
    { to: '/about', label: t.navbar.about },
    { to: '/onion-seeds', label: t.navbar.onionSeeds },
    {
      to: '/#why-choose-us',
      label: t.navbar.whyChooseUs,
      hash: true
    },
    { to: '/gallery', label: t.navbar.gallery },
    { to: '/contact', label: t.navbar.contact }
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);

    onScroll();

    window.addEventListener('scroll', onScroll, {
      passive: true
    });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };

    window.addEventListener('keydown', onKey);

    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const brand = (
    <Link
      to="/"
      className="nav__brand"
      aria-label="GATEE SEEDS Pvt. Ltd. — home"
    >
      <span className="logo-chip nav__logo">
        <img
          src={logo}
          alt="GATEE SEEDS Pvt. Ltd. logo"
          width="58"
          height="58"
        />
      </span>

      <span className="nav__brandText">
        <strong>GATEE SEEDS</strong>
        <small>Pvt. Ltd.</small>
      </span>
    </Link>
  );

  return (
    <header className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="shell nav__inner">

        {/* Phone */}
        <a
          className="nav__call"
          href={telLink(siteConfig.contact.phonePrimary)}
          aria-label={t.navbar.call}
        >
          <FiPhone aria-hidden="true" />
        </a>

        {/* Brand */}
        {brand}

        {/* Desktop Navigation */}
        <nav className="nav__links" aria-label={t.navbar.mainMenu}>
          {links.map((link) =>
            link.hash ? (
              <a
                key={link.label}
                href={link.to}
                className="nav__link"
              >
                {link.label}
              </a>
            ) : (
              <NavLink
                key={link.label}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `nav__link${
                    isActive ? ' nav__link--active' : ''
                  }`
                }
              >
                {link.label}
              </NavLink>
            )
          )}
        </nav>

        {/* Desktop WhatsApp CTA */}
        <a
          className="btn btn--sm nav__cta"
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp aria-hidden="true" />
          {t.navbar.enquire}
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="nav__burger"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={
            open
              ? t.navbar.closeMenu
              : t.navbar.openMenu
          }
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`nav__mobile${
          open ? ' nav__mobile--open' : ''
        }`}
        aria-hidden={!open}
      >
        <nav aria-label={t.navbar.mobileMenu}>
          {links.map((link, i) =>
            link.hash ? (
              <a
                key={link.label}
                href={link.to}
                className="nav__mobileLink"
                style={{ '--i': i }}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ) : (
              <NavLink
                key={link.label}
                to={link.to}
                end={link.end}
                style={{ '--i': i }}
                className={({ isActive }) =>
                  `nav__mobileLink${
                    isActive
                      ? ' nav__mobileLink--active'
                      : ''
                  }`
                }
              >
                {link.label}
              </NavLink>
            )
          )}
        </nav>

        {/* Mobile Actions */}
        <div className="nav__mobileActions">

          <a
            className="btn"
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp aria-hidden="true" />
            {t.navbar.whatsappEnquiry}
          </a>

          <a
            className="btn btn--outline"
            href={telLink(
              siteConfig.contact.phonePrimary
            )}
          >
            <FiPhone aria-hidden="true" />
            {siteConfig.contact.phonePrimaryDisplay}
          </a>

        </div>
      </div>

      {/* Mobile Scrim */}
      <button
        type="button"
        className={`nav__scrim${
          open ? ' nav__scrim--on' : ''
        }`}
        tabIndex={-1}
        aria-hidden="true"
        onClick={() => setOpen(false)}
      />
    </header>
  );
}