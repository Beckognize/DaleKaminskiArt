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
        top: '0',
        left: '0',
        height: '100vh',
        width: '100vw',
        zIndex: 200,
        display: visible ? 'table' : 'none',
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
          <center>
            <div style={{
                display: 'table-cell',
                verticalAlign: 'middle',
                height: '100vh',
                width: '100vw',
              }}>
              <img
                style={{
                  display: 'block',
                  margin: 'auto',
                  maxHeight: '95vh',
                  maxWidth: '95vw',
                }}
                src={image.src}
                alt={image.alt}
              />
            </div>
          </center>
        </Carousel.Item>
      )}
      </Carousel>
      
      <button
        style={{
          position: 'absolute',
          top: '1rem',
          right: '2rem',
          zIndex: '210'
        }}
        onClick={exit}
        >Close</button>
    </div>
  );
}