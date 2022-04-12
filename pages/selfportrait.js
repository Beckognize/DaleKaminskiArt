import { useState } from 'react'
import Navbar from '../components/navbar'
import Header from '../components/header'
import Slider from '../components/slider'

const myImages = [
  {
    src:'images/self_portrait/treeshadow.jpg',
    alt:'DaleK shadow on a tree trunk in the woods',
    caption:'Standing on tree ( shadow on tree )',
    style:{ top: "0%", left: "0%", width: '40%' }
  },
  {
    src:'images/self_portrait/shinybug.jpg',
    alt:'Dalek reflected in the shiny shell of a beetle',
    caption:'Bug Reflection',
    style:{ top: "6%", left: "40%", width: '25%' }
  },
  {
    src:'images/self_portrait/walkingdead.jpg',
    alt:'DaleK fishing split screen with charecter from walking dead',
    caption:'Walking dead with Fish',
    style:{ top: "66%", right: "0%", width: '33%' }
  },
  {
    src: 'images/self_portrait/selfmirror.jpg',
    alt: 'DaleK face mirrored as a kalidiscope',
    caption:'House of Mirrors face',
    style: { top: "35%", right: "26%", width: '30%' }
  },
  {
    src:'images/self_portrait/wrinkles.jpg' ,
    alt:'Digital manipulation to make Dalek face distorted',
    caption:'Dale Wrinkle face',
    style: { top: "0%", right: "0%", width: '35%' }
  },
  {
    src:'images/self_portrait/panoshadow.jpg' ,
    alt:'panorama of farm land with my shadow ',
    caption:'Shadow on Road',
    style: { top: "70%", leftt: "0%", width: '62%' }
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
