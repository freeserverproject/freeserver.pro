import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollRestoration() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // ハッシュがある場合は、要素にスクロール
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          const offset = 90;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }, 100);
    } else {
      // ハッシュがない場合は、ページトップにスクロール
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return null;
}
