import { useState } from 'react'
import Navbar from '../components/navbar'
import Header from '../components/header'
import Slider from '../components/slider'

const myImages = [
  {
    src:'images/america/flags.jpg',
    alt:'pickup truck with many american flags',
    caption:'Main Street 2021',
    style:{top: "0%", left: "0%", width: '30%' }
  },
   {
    src:'images/america/flagbar1.jpg',
    alt:'American decorations on bar in resturant',
    caption:'"Right Wing Dinner," Ohio',
    style:{ top: "45%", left: "5%", width: '30%' }
  },
  {
    src: 'images/america/flagbar2.jpg',
    alt: 'American decorations on wall in bar',
    caption:'"Right Wing Dinner 2," Ohio',
    style: { top: "45%", right: "35%", width: '30%' }
  },
  {
    src:'images/america/flagbar3.jpg' ,
    alt:'American flag on bar wall with writing on it',
    caption:'"Right Wing Dinner 3," Ohio',
    style: { top: "45%", right: "5%", width: '30%' }
  }, 
    {
    src:'images/america/diner.jpg',
    alt:'wide shot of inside of american diner',
    caption:'1 hour before total eclipse. Welcome to Paradise',
    style:{top: "22%", right: "24%", width: '55%' }
  },
  {
    src:'images/america/cloudflag.jpg',
    alt:'american flag in stormy weather',
    caption:'Camping World Giant Flag',
    style:{ top: "80%", left: "0%", width: '50%' }
  },  
  {
    src:'images/america/animals.jpg',
    alt:'Stuffed animals on rocks',
    caption:'Hyper-reality',
    style:{top: "70%", right: "5%", width: '30%' }
  },
  {
    src:'images/america/powerstation.jpg',
    alt:'people swimming on beach next to power station',
    caption:'"Industrial Swimming," Dunkirk, NY.',
    style:{top: "120%", left: "0%", width: '35%' }
  },
  {
    src:'images/america/caution3.jpg',
    alt:'caution tape on baby swing',
    caption:'Kiddie Swing Police Line',
    style:{top: "162%", left: "10%", width: '17%' }
  },
  {
    src:'images/america/fall.jpg',
    alt:'man on ground woman on phone',
    caption:'',
    style:{top: "120%", right: "40%", width: '17%' }
  },
  {
    src:'images/people/3peopleriver.jpg',
    alt:'three people in river',
    caption:'"Huron River," Ann Arbor, Michigan.',
    style:{ top: "150%", right: "2%", width: '30%' }
  },
  {
    src:'images/people/sitinshit.jpg',
    alt:'people sitting by river',
    caption:'"Sitting in Shit," Manitowoc, Wisconsin.',
    style:{ top: "158%", right: "40%", width: '17%' }
  },
  {
    src:'images/people/conriver.jpg',
    alt:'people in river',
    caption:'"Flags in Connecticut River," Connecticut river, Connecticut.',
    style:{top: "190%", left: "0%", width: '55%' }
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
        <h1 className='text-center mt-5 mb-5 fs-1 fw-normal '>Sign of the Times</h1>
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
