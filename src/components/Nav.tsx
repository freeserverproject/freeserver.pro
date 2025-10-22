import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HashMatchLink from './HashMatchLink';
import HamburgerButton from './HamburgerButton';
import logo from '../assets/logo.webp';
import './Nav.css';

interface NavProps {
  zooming?: boolean;
}

export default function Nav({ zooming = false }: NavProps) {
  const [zoom, setZoom] = useState(() => window.scrollY <= 70 && zooming);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    // zoomingプロップが変わった時に状態を更新
    setZoom(window.scrollY <= 70 && zooming);
  }, [zooming]);

  useEffect(() => {
    const handleScroll = () => {
      setZoom(window.scrollY <= 70 && zooming);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [zooming]);

  return (
    <nav className={`global-nav ${zoom ? 'zoom' : ''}`}>
      <span className="logo">
        <Link to="/" className="no-underline">
          <img src={logo} alt="FREESERVER Logo" />
        </Link>
      </span>
      <div className={`links ${drawerOpen ? 'open' : ''}`} onClick={() => setDrawerOpen(false)}>
        <HashMatchLink to={{ pathname: '/', hash: '#about' }}>About</HashMatchLink>
        <HashMatchLink to={{ pathname: '/', hash: '#feature' }}>Feature</HashMatchLink>
        <a href="//wiki.freeserver.pro/">Wiki</a>
        <a href="//maps.freeserver.pro/">Maps</a>
      </div>
      <HamburgerButton checked={drawerOpen} onChange={setDrawerOpen} />
    </nav>
  );
}
