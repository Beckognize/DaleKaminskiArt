
export default ({visible, exit, images, currentImage}) => {
  return (
    <div
      style={{
        border: '1px solid red',
        background: 'rgba(255,0,0,.5)',
        position: 'absolute',
        top: '5rem',
        left: '5rem',
        right: '5rem',
        bottom: '5rem',
        display: visible ? 'block' : 'none'
      }}>
      <h2>Slider Component</h2>
      <hr/>
      {images.map(image =>
        <img
          src={image.src}
          alt={image.alt}
          style={{ 
            width: '8rem',
            border: (currentImage?.src == image.src) ? '2px solid yellow' : '2px solid blue'
          }}
          />
      )}
      <hr/>
      <h3> Current image:</h3>
       { currentImage
        ? <img src={currentImage.src} alt={currentImage.alt} style={{ width: '8rem' }}/>
        : 'No image selected'
       }
      <hr/>
      <button onClick={exit}>Close</button>
    </div>
  );
}