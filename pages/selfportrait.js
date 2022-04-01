import { useState } from 'react'
import Navbar from '../components/navbar'
import Header from '../components/header'
import Slider from '../components/slider'

const myImages = [
  {
    src:'images/self_portrait/treeshadow.jpg',
    alt:'DaleK shadow on a tree trunk in the woods',
    style:{ top: "0%", left: "0%", width: '28%' }
  },
  {
    src:'images/self_portrait/walkingdead.jpg',
    alt:'DaleK fishing split screen with charecter from walking dead',
    style:{ top: "0%", left: "29%", width: '25%' }
  },
  {
    src: 'images/self_portrait/selfmirror.jpg',
    alt: 'DaleK face mirrored as a kalidiscope',
    style: { top: "0%", right: "30%", width: '15%' }
  },
  {
    src:'images/self_portrait/wrinkles.jpg' ,
    alt:'Digital manipulation to make Dalek face distorted',
    style: { top: "0%", right: "15%", width: '15%' }
  },
  {
    src:'images/self_portrait/panoshadow.jpg' ,
    alt:'panorama of farm land with my shadow ',
    style: { top: "0%", right: "0%", width: '15%' }
  },
  {
    src:'images/self_portrait/shinybug.jpg',
    alt:'Dalek reflected in the shiny shell of a beetle',
    style:{ top: "26%", left: "0%", width: '13%' }
  },
]

        
            
            
        

export default () => {
  const [ sliderIsVisible, setSliderIsVisible ] = useState(false)
  const [ imageNumber, setImageNumber ] = useState(0)

  return (
    <>
      <Header />
      <Navbar />
      <div className='container-fluid'>
        <h1 className='text-center mt-5 mb-5 fs-1 fw-normal '>SELF PORTRAIT</h1>
        <div className='photobox'>
          {myImages.map((image, i) =>
            <img 
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
      </div>
      <Slider
        visible={sliderIsVisible}
        exit={() => setSliderIsVisible(false)}
        images={myImages}
          imageNumber={imageNumber}
          selectImage={(i) => setImageNumber(i)}
      />
    </>
  );
}
