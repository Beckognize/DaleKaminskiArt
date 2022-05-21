export default ({images, setImageNumber, setSliderIsVisible}) => {
  return (
    <div className='photobox'>
      {images.map((image, i) =>
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          style={image.style}
          onClick={() => {
            setImageNumber(i)
            setSliderIsVisible(true)
          }}
        />
      )}
  </div>
  );
}