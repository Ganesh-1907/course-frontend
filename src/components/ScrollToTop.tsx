import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, state } = useLocation();

  useEffect(() => {
    // If the navigation explicitly asks to prevent scroll reset (e.g. from category tabs)
    if (state?.preventScroll) {
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, state]);

  return null;
};

export default ScrollToTop;
