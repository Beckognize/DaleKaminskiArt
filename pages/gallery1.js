import { useState } from 'react'
import Navbar from '../components/navbar'
import Header from '../components/header'
import Slider from '../components/slider'

const myImages = [
  {
    src:'images/america/flags.jpg',
    alt:'pickup truck with many american flags',
    caption:'Main Street 2021',
    style:{top: "0%", left: "0%", width: '27%' }
  },
  {
    src:'images/america/truck.jpg',
    alt:'semi truck on overpass',
    caption:'Black Mystery Truck',
    style:{top: "3%", right: "40%", width: '32%' }
  },
  {
    src:'images/america/caution3.jpg',
    alt:'caution tape on baby swing',
    caption:'Kiddie Swing Police Line',
    style:{top: "0%", right: "25%", width: '15%' }
  },
  {
    src:'images/america/flatroad.jpg',
    alt:'flat road panorama',
    caption:'"Road", Rural Kansas.',
    style:{ top: "20%", right: "22%", width: '52%' }
  },
  {
    src:'images/america/jesuscar.jpg',
    alt:'car with religious bumper stickers',
    caption:'Riding with Jesus',
    style:{ top: "16%", left: "0%", width: '25%' }
  },
  {
    src:'images/america/tractor.jpg',
    alt:'tractor on road',
    caption:'Rake',
    style:{top: "0%", right: "0%", width: '20%' }
  },
  {
    src:'images/america/fall.jpg',
    alt:'man on ground woman on phone',
    caption:'Calling it in',
    style:{ top: "46%", right: "0%", width: '20%' }
  },
  {
    src:'images/america/powerstation.jpg',
    alt:'people swimming on beach next to power station',
    caption:'"Industrial Swimming," Dunkirk, NY.',
    style:{top: "60%", left: "25%", width: '25%' }
  },
  {
    src:'images/america/cloudflag.jpg',
    alt:'american flag in stormy weather',
    caption:'Camping World Giant Flag',
    style:{ top: "60%", left: "50%", width: '30%' }
  },
  {
    src:'images/america/animals.jpg',
    alt:'Stuffed animals on rocks',
    caption:'Hyper-reality',
    style:{top: "46%", left: "0%", width: '25%' }
  },
  {
    src:'images/america/bonfire.jpg' ,
    alt:'A bonfire on the beach with a band',
    caption:'"BonFire Beach," Luddington, Michigan.',
    style: { top: "85%", left: "25%", width: '26%' }
  },
  {
    src:'images/america/bowpeeps.jpg',
    alt:'people on the bow of a boat',
    caption:'Deck of the Badger Crossing Lake Michigan',
    style:{top: "78%", right: "21%", width: '27%' }
  },
  {
    src:'images/america/flagbar1.jpg',
    alt:'American decorations on bar in resturant',
    caption:'"Right Wing Dinner," Ohio',
    style:{ top: "30%", left: "11%", width: '25%' }
  },
  {
    src: 'images/america/flagbar2.jpg',
    alt: 'American decorations on wall in bar',
    caption:'"Right Wing Dinner 2," Ohio',
    style: { top: "30%", right: "37%", width: '25%' }
  },
  {
    src:'images/america/flagbar3.jpg' ,
    alt:'American flag on bar wall with writing on it',
    caption:'"Right Wing Dinner 3," Ohio',
    style: { top: "30%", right: "10%", width: '25%' }
  },
{
    src:'images/america/diner.jpg',
    alt:'wide shot of inside of american diner',
    caption:'1 hour before total eclipse. Welcome to Paradise',
    style:{top: "45%", right: "27%", width: '46%' }
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
        <h1 className='text-center mt-5 mb-5 fs-1 fw-normal '>GALLERY 1</h1>
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
