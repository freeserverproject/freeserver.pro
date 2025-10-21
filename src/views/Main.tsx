import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import './Main.css';

export default function Main() {
  return (
    <div className="wrapper">
      <Nav zooming />
      <Outlet />
      <Footer />
    </div>
  );
}
