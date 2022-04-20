import { useState } from 'react'
import Navbar from '../components/navbar'
import Header from '../components/header'
import Slider from '../components/slider'

const myImages = [
  {
    src:'images/topographics/coopsilo.jpg',
    alt:'grain silo with coop on it',
    caption:'Silo1 COOP (Homage to Bechers)',
    style:{ top: "0%", left: "0%", width: '28%' }
  },
  {
    src:'images/topographics/grainsilos1.jpg',
    alt:'grain silo',
    caption:'Silo2 (Homage to Bechers)',
    style:{ top: "0%", left: "29%", width: '35%' }
  },
  {
    src:'images/topographics/windmills.jpg',
    alt:'windmills across sky',
    caption:'Wind Farm on the great plains',
    style:{top: "3%", right: "0%", width: '36%' }
  },
  {
    src:'images/topographics/odetosilo.jpg',
    alt:'grain silo',
    caption:'Silo5 (Homage to Bechers)',
    style:{ top: "42%", left: "0%", width: '25%' }
  },
  {
    src:'images/topographics/odetosilo9.jpg',
    alt:'grain silo',
    caption:'Silo6 (Homage to Bechers)',
    style:{ top: "26%", left: "29%", width: '30%' }
  },
  {
    src:'images/topographics/silosugar.jpg',
    alt:'sugar silo',
    caption:'Silo4 (Sugar City , Homage to Bechers)',
    style:{ top: "25%", right: "18%", width: '22%' }
  },
  {
    src:'images/topographics/silosquare.jpg' ,
    alt:'grain silo',
    caption:'Silo3',
    style: { top: "25%", right: "0%", width: '18%' }
  },
  {
    src:'images/topographics/stopsigns.jpg',
    alt:'group of stop signs',
    caption:'No Motor vehicles and 4 stop signs',
    style:{top: "85%", left: "0%", width: '25%' }
  },
  {
    src:'images/topographics/3electrictower.jpg' ,
    alt:'three electric towers',
    caption:'Powerline Towers',
    style: { top: "70%", right: "42%", width: '30%' }
  },
  {
    src: 'images/topographics/small_lighthouse.jpg',
    alt: 'small lighthouse in distance',
    caption:'Lighthouse',
    style: { top: "85%", right: "20%", width: '20%' }
  },
  {
    src:'images/topographics/topocortez.jpg',
    alt:'landscape',
    caption:'Dispensary Cortez, Colorado',
    style:{ top: "64%", right: "0%", width: '40%' }
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
        <h1 className='text-center mt-5 mb-5 fs-1 fw-normal '>GALLERY 7</h1>
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
