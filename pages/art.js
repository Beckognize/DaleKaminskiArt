import { useState } from 'react'
import Navbar from '../components/navbar'
import Header from '../components/header'
import Slider from '../components/slider'

const myImages = [
  {
    src:'images/art/market.jpg',
    alt:'Shopping isle in chinese market',
    style:{ top: "0%", left: "0%", width: '28%' }
  },
  {
    src:'images/art/refelection.jpg',
    alt:'reflection of painting in mirror of cupboard',
    style:{ top: "0%", left: "29%", width: '25%' }
  },
  {
    src: 'images/art/reflection2.jpg',
    alt: 'reflection of tree in ice on ground',
    style: { top: "0%", right: "30%", width: '15%' }
  },
  {
    src:'images/art/calder-18.jpg' ,
    alt:'calder scupture with painting behind',
    style: { top: "0%", right: "15%", width: '15%' }
  },
  {
    src:'images/art/watts.jpg' ,
    alt:'Charlie Watts drumset',
    style: { top: "0%", right: "0%", width: '15%' }
  },
  {
    src:'images/art/sandyroad.jpg',
    alt:'sand with rocks on bits of wood',
    style:{ top: "26%", left: "0%", width: '13%' }
  },
  {
    src:'images/art/sandyroad2.jpg',
    alt:'sand with rocks on bits of wood',
    style:{ top: "26%", left: "15%", width: '15%' }
  },
  {
    src:'images/art/duchamp.jpg',
    alt:'display of duchamp pieces in museum',
    style:{ top: "26%", left: "33%", width: '16%' }
  },
  {
    src:'images/art/fireroad.jpg',
    alt:'sand with objects',
    style:{ top: "27%", right: "36%", width: '14%' }
  },
  {
    src:'images/art/glitch.jpg',
    alt:'stack of cars and people in digital glitch',
    style:{top: "27%", right: "0%", width: '20%' }
  },
  {
    src:'images/art/hicontree.jpg',
    alt:'hi contrast tree in in woods',         
    style:{top: "43%", right: "2%", width: '18%' } 
  },
  {
    src:'images/art/glitch2.jpg',
    alt:'abstract glitchy art',
    style:{top: "54%", left: "0%", width: '15%' }
  },
  {
    src:'images/art/reflection3.jpg',
    alt:'reflection of tree in ice on ground',
    style:{top: "58%", left: "34%", width: '15%' }
  },
  {
    src:'images/art/nytrain.jpg',
    alt:'long panorama of newyork subway',
    style:{top: "52%", right: "37%", width: '40%' }
  },
  {
    src:'images/art/opensky.jpg',
    alt:'open sky in wuhan building',
    style:{ top: "53%", right: "0%", width: '20%' }
  },
  {
    src:'images/art/plasticland.jpg',
    alt:'psychadelic band poster',
    style:{ top: "53%", right: "21%", width: '14%' }
  },
  {
    src:'images/art/ravenrocks.jpg',
    alt:'black and white picture of raven on rocks',
    style:{ top: "70%", left: "26%", width: '14%' }
  },
  {
    src:'images/art/Renoirflowers.jpg',
    alt:'flowers painted by Renoir',
    style:{ top: "70%", left: "13%", width: '14%' }
  },
  {
    src:'images/art/sculpture.jpg',
    alt:'sculpture with text',
    style:{ top: "70%", left: "0%", width: '14%' }
  },
  {
    src:'images/art/cloudcircle.jpg',
    alt:'circle of sky',
    style:{ top: "80%", right:"0%", width: '21%' }
  },
{
    src:'images/art/listen.jpg',
    alt:'bird on birdhouse with text',
    style:{ top: "80%", right:"40%", width: '21%' }
  },
{
    src:'images/art/motel.jpg',
    alt:'house with swingset blurred',
    style:{ top: "80%", right:"50%", width: '21%' }
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
        <h1 className='text-center mt-5 mb-5 fs-1 fw-normal '>ART</h1>
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
