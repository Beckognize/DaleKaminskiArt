import { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
export default ({visible, exit, images, imageNumber, selectImage}) => {
 
  if (typeof document !== 'undefined') {
    if (visible) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'initial'
    }
  }

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
        <Carousel.Item>
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