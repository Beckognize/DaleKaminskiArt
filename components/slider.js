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
        background: 'white',
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 200,
        display: visible ? 'block' : 'none',
      }}>
      <Carousel
        pause="hover"
        interval="10000000"
        variant="dark"
        indicators ={false}
        activeIndex={imageNumber}
        onSelect={selectImage}
        >
      {images.map(image =>
        <Carousel.Item>
            <div style={{
              position: 'fixed',
              top: '3rem',
              left: '1rem',
              bottom: '4rem',
              right: '1rem',
              backgroundImage: `url(${image.src})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
              backgroundSize: 'contain',
              }} />
        </Carousel.Item>
      )}
      </Carousel>
      
      <div
        style={{
          position: 'absolute',
          display: 'block',
          top: '.75rem',
          right: '1.5rem',
          zIndex: '210',
          cursor: 'pointer'
        }}
        onClick={exit}
        >× Close</div>
    </div>
  );
}