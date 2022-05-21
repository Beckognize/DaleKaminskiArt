import { useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel'
export default ({visible, exit, images, imageNumber, selectImage}) => {
 
  if (typeof document !== 'undefined') {
    if (visible) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'initial'
    }
  }

  // Add event listener when the slider is opened
  useEffect(() => {
    const keyDownHandler = (event) => {
      if (!visible) return;

      const KEY_CODE_LEFT = 37;
      const KEY_CODE_RIGHT = 39;
      const { keyCode } = event;
  
      if (keyCode === KEY_CODE_LEFT) {
        if (imageNumber === 0) {
          selectImage(images.length - 1);
        } else {
          selectImage(imageNumber - 1);
        }
      }
  
      if (keyCode === KEY_CODE_RIGHT) {
        if (imageNumber === (images.length - 1)) {
          selectImage(0);
        } else {
          selectImage(imageNumber + 1);
        }
      }
    };
    window.addEventListener('keydown', keyDownHandler);
    // Remove event listeners when slider is closed
    return () => window.removeEventListener('keydown', keyDownHandler);
  }, [visible, imageNumber]);

  return (
    <div
      style={{
        display: visible ? 'block' : 'none',
      }}>
      <Carousel
        pause="hover"
        interval="10000000"
        variant="dark"
        indicators={false}
        slide={false}
        activeIndex={imageNumber}
        onSelect={selectImage}
        >
      {images.map(image =>
        <Carousel.Item key={image.src}>
            <div
              style={{
                position: 'fixed',
                top: '3rem',
                left: '1rem',
                bottom: '4rem',
                right: '1rem',
                backgroundColor: 'white',
                backgroundImage: `url(${image.src})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                backgroundSize: 'contain',
              }}
              />
              <Carousel.Caption>
                {image?.caption} 
              </Carousel.Caption>
        </Carousel.Item>
      )}
      </Carousel>
      
      <div
        style={{
          position: 'fixed',
          display: 'block',
          top: '.75rem',
          right: '1.5rem',
          zIndex: '210',
          cursor: 'pointer',
        }}
        onClick={exit}
        >× Close</div>
    </div>
  );
}