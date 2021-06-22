import { useEffect, useState } from 'react';

import './ScrollTop.css';

const ScrollTop = () => {
  const [scroll, setScroll] = useState();
  useEffect(() => {
    window.addEventListener('scroll', () => setScroll(window.scrollY));
    console.log(scroll);
  }, [scroll]);
  return (
    <button
      type="button"
      className={`scroll-btn${scroll > 300 ? '--visible' : ''}`}
      onClick={() => window.scrollTo(0, 0)}
    >
      Scroll Top
    </button>
  );
};

export default ScrollTop;
