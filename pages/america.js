import { useState } from 'react'
import Navbar from '../components/navbar'
import Header from '../components/header'
import Slider from '../components/slider'

const myImages = [
  {
    src:'images/america/cloudflag.jpg',
    alt:'american flag in stormy weather',
    style:{ top: "0%", left: "0%", width: '28%' }
  },
  {
    src:'images/america/flagbar1.jpg',
    alt:'American decorations on bar in resturant',
    style:{ top: "0%", left: "29%", width: '25%' }
  },
  {
    src: 'images/america/flagbar2.jpg',
    alt: 'American decorations on wall in bar',
    style: { top: "0%", right: "30%", width: '15%' }
  },
  {
    src:'images/america/bonfire.jpg' ,
    alt:'A bonfire on the beach with a band',
    style: { top: "0%", right: "15%", width: '15%' }
  },
  {
    src:'images/america/flagbar3.jpg' ,
    alt:'American flag on bar wall with writing on it',
    style: { top: "0%", right: "0%", width: '15%' }
  },
  {
    src:'images/america/caution.jpg',
    alt:'caution tape on baby swings',
    style:{ top: "26%", left: "0%", width: '13%' }
  },
  {
    src:'images/america/caution2.jpg',
    alt:'caution tape on baby swings',
    style:{ top: "26%", left: "15%", width: '15%' }
  },
  {
    src:'images/america/fall.jpg',
    alt:'man on ground woman on phone',
    style:{ top: "26%", left: "33%", width: '16%' }
  },
  {
    src:'images/america/jesuscar.jpg',
    alt:'car with religious bumper stickers',
    style:{ top: "27%", right: "36%", width: '14%' }
  },
  {
    src:'images/america/bowpeeps.jpg',
    alt:'people on the bow of a boat',
    style:{top: "30%", right: "23%", width: '11%' }
  },
  {
    src:'images/america/truck.jpg',
    alt:'semi truck on overpass',
    style:{top: "27%", right: "0%", width: '20%' }
  },
   {
    src:'images/america/flags.jpg',
    alt:'pickup truck with many american flags',
    style:{top: "27%", right: "0%", width: '20%' }
  },
 {
    src:'images/america/caution3.jpg',
    alt:'caution tape on baby swing',
    style:{top: "27%", right: "0%", width: '20%' }
  },
 {
    src:'images/america/animals.jpg',
    alt:'Stuffed animals on rocks',
    style:{top: "27%", right: "0%", width: '20%' }
  },
 {
    src:'images/america/tractor.jpg',
    alt:'tractor on road',
    style:{top: "27%", right: "0%", width: '20%' }
  },
{
    src:'images/america/powerstation.jpg',
    alt:'people swimming on beach next to power station',
    style:{top: "27%", right: "0%", width: '20%' }
  },
{
    src:'images/america/diner.jpg',
    alt:'wide shot of inside of american diner',
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
        <h1 className='text-center mt-5 mb-5 fs-1 fw-normal '>AMERICA</h1>
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
