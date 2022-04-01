import { useState } from 'react'
import Navbar from '../components/navbar'
import Header from '../components/header'
import Slider from '../components/slider'

const myImages = [
  {
    src:'images/topographics/coopsilo.jpg',
    alt:'grain silo with coop on it',
    style:{ top: "0%", left: "0%", width: '28%' }
  },
  {
    src:'images/topographics/grainsilos1.jpg',
    alt:'grain silo',
    style:{ top: "0%", left: "29%", width: '25%' }
  },
  {
    src: 'images/topographics/small_lighthouse.jpg',
    alt: 'small lighthouse in distance',
    style: { top: "0%", right: "30%", width: '15%' }
  },
  {
    src:'images/topographics/3electrictower.jpg' ,
    alt:'three electric towers',
    style: { top: "0%", right: "15%", width: '15%' }
  },
  {
    src:'images/topographics/silosquare.jpg' ,
    alt:'grain silo',
    style: { top: "0%", right: "0%", width: '15%' }
  },
  {
    src:'images/topographics/silosugar.jpg',
    alt:'sugar silo',
    style:{ top: "26%", left: "0%", width: '13%' }
  },
  {
    src:'images/topographics/odetosilo.jpg',
    alt:'grain silo',
    style:{ top: "26%", left: "15%", width: '15%' }
  },
  {
    src:'images/topographics/odetosilo9.jpg',
    alt:'grain silo',
    style:{ top: "26%", left: "33%", width: '16%' }
  },
  {
    src:'images/topographics/topocortez.jpg',
    alt:'landscape',
    style:{ top: "27%", right: "36%", width: '14%' }
  },
  {
    src:'images/topographics/stopsigns.jpg',
    alt:'group of stop signs',
    style:{top: "30%", right: "23%", width: '11%' }
  },
  {
    src:'images/topographics/windmills.jpg',
    alt:'windmills across sky',
    style:{top: "27%", right: "0%", width: '20%' }
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
        <h1 className='text-center mt-5 mb-5 fs-1 fw-normal '>TOPOGRAPHICS</h1>
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
