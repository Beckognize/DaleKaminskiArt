import { useState } from 'react'
import Navbar from '../components/navbar'
import Header from '../components/header'
import Slider from '../components/slider'

const myImages = [
  {
    src:'images/art/market.jpg',
    alt:'Shopping isle in chinese market',
    caption:'341,309 views on google maps. Why?',
    style:{ top: "0%", right: "10%", width: '50%' }
  },
  {
    src:'images/art/glitch.jpg',
    alt:'stack of cars and people in digital glitch',
    caption:'Beijing Traffic',
    style:{top: "0%", right: "65%", width: '25%' }
  },
  {
    src:'images/art/nytrain.jpg',
    alt:'long panorama of newyork subway',
    caption:'Clark Street subway station',
    style:{top: "45%", left: "10%", width: '65%' }
  },  
  {
    src:'images/art/opensky.jpg',
    alt:'open sky in wuhan building',
    caption:'Wuhan Museum of Art courtyard',
    style:{ top: "145%", left: "7%", width: '25%' }
  },
  {
    src:'images/art/cloudcircle.jpg',
    alt:'circle of sky',
    caption:'James Turrell, MAss Moca',
    style:{ top: "170%", left:"0%", width: '27%' }
  },
  {
    src:'images/art/refelection.jpg',
    alt:'reflection of painting in mirror of cupboard',
    caption:'"Reflecting on the Agnew Clinic by Thomas Eakins," Philadelphia Museum of Art',
    style:{ top: "100%", right: "14%", width: '47%' }
  }, 
  {
    src:'images/art/motel.jpg',
    alt:'house with swingset blurred',
    caption:'Lake Huron near Mackinac',
    style:{ top: "69%", left:"0%", width: '30%' }
  },
  { 
    src:'images/art/hicontree.jpg',
    alt:'hi contrast tree in in woods',
    caption:'Tree and Vine',        
    style:{top: "145%", left: "50%", width: '25%' } 
  },
  {
    src:'images/art/glitch2.jpg',
    alt:'abstract glitchy art',
    caption:'Landscape Glitch',
    style:{top: "140%", right: "2%", width: '22%' }
  },
  {
    src:'images/travels/wavefeild.jpg',
    alt:'Panorama of wave feild by may lin',
    caption:'"Wave field" ( sculpture by Maya Lin) Storm King, New York.',
    style:{ top: "79%", right: "0%", width: '70%' }
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
        <h1 className='text-center mt-5 mb-5 fs-1 fw-normal '>GALLERY 2</h1>
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
