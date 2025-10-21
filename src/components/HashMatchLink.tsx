import { Link, useLocation } from 'react-router-dom';
import './HashMatchLink.css';

interface HashMatchLinkProps {
  to: string | { pathname?: string; hash?: string };
  children: React.ReactNode;
  className?: string;
}

export default function HashMatchLink({ to, children, className = '' }: HashMatchLinkProps) {
  const location = useLocation();

  const hashMatch = typeof to !== 'string' && location.hash === to.hash;

  const linkClass = `${className} ${hashMatch ? 'router-link-hash-match' : ''}`.trim();

  return (
    <Link to={to} className={linkClass}>
      {children}
    </Link>
  );
}
