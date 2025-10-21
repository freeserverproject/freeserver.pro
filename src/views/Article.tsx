import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import './Article.css';

interface ArticleProps {
  noRouter?: boolean;
  children?: React.ReactNode;
}

export default function Article({ noRouter = false, children }: ArticleProps) {
  return (
    <div className="wrapper">
      <Nav />
      <article>{noRouter ? children : <Outlet />}</article>
      <Footer />
    </div>
  );
}
