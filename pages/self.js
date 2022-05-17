import { useState } from 'react'
import Navbar from '../components/navbar'
import Header from '../components/header'
import Slider from '../components/slider'

const myImages = [
  {
    src:'images/self_portrait/treeshadow.jpg',
    alt:'DaleK shadow on a tree trunk in the woods',
    caption:'Standing on tree ( shadow on tree )',
    style:{ top: "0%", left: "0%", width: '33%' }
  },
  {
    src:'images/self_portrait/shinybug.jpg',
    alt:'Dalek reflected in the shiny shell of a beetle',
    caption:'Bug Reflection',
    style:{ top: "0%", left: "34%", width: '26%' }
  },
  {
    src:'images/self_portrait/wrinkles.jpg' ,
    alt:'Digital manipulation to make Dalek face distorted',
    caption:'Dale Wrinkle face',
    style: { top: "0%", right: "0%", width: '33%' }
  },  
  {
    src: 'images/self_portrait/selfmirror.jpg',
    alt: 'DaleK face mirrored as a kalidiscope',
    caption:'House of Mirrors face',
    style: { top: "24%", right: "37%", width: '25%' }
  },
  {
    src:'images/self_portrait/walkingdead.jpg',
    alt:'DaleK fishing split screen with charecter from walking dead',
    caption:'Walking dead with Fish',
    style:{ top: "75%", left: "52%", width: '36.5%' }
  },
  {
    src:'images/self_portrait/wdlady.jpg',
    alt:'DaleK fishing split screen with charecter from walking dead',
    caption:'Walking dead with Fish 2',
    style:{ top: "75%", left: "10%", width: '34%' }
  },
  {
    src:'images/self_portrait/panoshadow.jpg' ,
    alt:'panorama of farm land with my shadow ',
    caption:'Shadow on Road',
    style: { top: "50%", left: "5%", width: '66%' }
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
        <h1 className='text-center mt-5 mb-5 fs-1 fw-normal '>Self Portrait</h1>
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
