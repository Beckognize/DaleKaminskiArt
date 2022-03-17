import { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
export default ({visible, exit, images, imageNumber, selectImage}) => {
 
  return (
    <div
      style={{
        background: 'white',
        position: 'fixed',
        height: '100vh',
        top: '0',
        left: '0',
        right: '0',
        padding: '2rem',
        zIndex: 200,
        display: visible ? 'block' : 'none'
      }}>
      <Carousel indicators = {false}activeIndex={imageNumber} onSelect={selectImage}>
      {images.map(image =>
        <Carousel.Item>
          <img
            style={{height: '90vh', display: 'block', margin: 'auto'}}
            src={image.src}
            alt={image.alt}
          />
          <Carousel.Caption>
            <h3>{image.alt}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      )}
      </Carousel>
      
      <button onClick={exit}>Close</button>
    </div>
  );
}