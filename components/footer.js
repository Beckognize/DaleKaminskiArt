
import { useState, useEffect } from "react";

export default ({}) => {
  const [footerPosition, setFooterPosition] = useState(0)
  const [footerStyle, setFooterStyle] = useState({ opacity: 0 })

  function calculateWhereToStartFooter() {
    let largestBottomValue = 0
    const images = document.querySelectorAll('.photobox img')
    for (const el of images) {
      const rect = el.getBoundingClientRect();
      if (rect.bottom > largestBottomValue) {
        largestBottomValue = rect.bottom;
      }
    }
    setFooterPosition(largestBottomValue)
  }

  useEffect(() => {
    // If the page doesn't have a photobox, show the footer right away
    if (!document.querySelector('.photobox')) {
      setFooterStyle({opacity: 1})
      return
    }
    // If the page does have a photobox, then we keep the footer hidden
    // until we have worked out where to place it, and will update that
    // position anytime the window is resized.
    // We update this 100ms and 1s after loading (and also any time the
    // page is scrolled) to try and compensate for slow loading times.
    setTimeout(calculateWhereToStartFooter, 1000);
    const resizeObserver = new ResizeObserver(() => calculateWhereToStartFooter());
    resizeObserver.observe(document.body);
    return () => resizeObserver.unobserve(document.body);
  }, []);

  // When page is scrolled, recalculate position. This helps
  // with updating the position when pages are slow to load.
  useEffect(() => {
    const scroll = () => calculateWhereToStartFooter();
    window.addEventListener("scroll", scroll);
    return () => window.removeEventListener("scroll", scroll);
  }, []);

  useEffect(() => {
    if (footerPosition > 0) {
      setFooterStyle({
        position: 'absolute',
        left: 0,
        right: 0,
        top: parseInt(footerPosition + window.pageYOffset),
        opacity: 1
      })
    }
  }, [footerPosition]);

  return (
    <footer style={footerStyle}>
      <div className='container'>
        <p className='text-center'>
          <em>
            &copy; Dale Kaminski {new Date().getFullYear()}
          </em>
        </p>
        <p className='text-end text-muted fw-light '><small>Built by Beckognize</small></p>
      </div>
    </footer>
  );
}