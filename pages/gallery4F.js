import { useState } from 'react'
import Navbar from '../components/navbar'
import Header from '../components/header'
import Slider from '../components/slider'

const myImages = [
  {
    src:'images/graphic/blackBird.jpg',
    alt:'black bird with blue sky and contrail in the distance',
    caption:'Contrail Blackbird',
    style:{ top: "0%", left: "0%", width: '17%' }
  },
  {
    src:'images/graphic/lakemich.jpg',
    alt:'lake and beach in vertical orientation',
    caption:'Vertical stripes 1',
    style:{ top: "0%", left: "18%", width: '15%' }
  },
  {
    src:'images/graphic/marsh.jpg',
    alt:'wooden bridge over marsh',
    caption:'"Rose Oaks Boardwalk," Holly, Michigan.',
    style:{ top: "0%", left: "33%", width: '28%' }
  },
  {
    src: 'images/graphic/shadow.jpg',
    alt: 'shadow on bridge in marsh',
    caption:'"Rose Oaks Boardwalk Shadows," Holly, Michigan.',
    style: { top: "0%", right: "20%", width: '18%' }
  },
  {
    src:'images/graphic/corner.jpg',
    alt:'Corner with shadow in Milwaukee art museum',
    caption:'Railing Brown Wall (Milwaukee Art Museum, Milwaukee)',
    style:{top: "0%", right: "0%", width: '20%' }
  },
  {
    src:'images/graphic/sunset.jpg',
    alt:'sunset in verticle orientation',
    caption:'Vertical orange stripes tree',
    style:{top: "29%", left: "0%", width: '20%' }
  },
  {
    src:'images/graphic/sandwater.jpg',
    alt:'Sand water and sky in verticle orientation',
    caption:'Vertical Stripes 2 (sand water sky)',
    style:{top: "22%", left: "21%", width: '21%' }
  },
  {
    src:'images/graphic/shadow2.jpg' ,
    alt:'shadow lines in snow with footprints',
    caption:'"Blue Snow Shadows," Holly, Michigan.',
    style: { top: "17%", right: "39%", width: '18%' }
  },
  {
    src:'images/graphic/redtractor.jpg',
    alt:'red tractor on mailbox',
    caption:'Farmall mailbox',
    style:{top: "43%", left: "0%", width: '22%' }
  },
  {
    src:'images/graphic/pano19.jpg',
    alt:'panorama landscape',
    caption:'"Triple Hay Wheels," Driftless region, Wisconsin.',
    style:{ top: "57%", left: "25%", width: '35%' }
  },
  {
    src:'images/graphic/spec-17.jpg',
    alt:'upclose rusted metal word spec',
    caption:'SPEC',
    style:{ top: "44%", left: "25%", width: '25%' }
  },
  {
    src:'images/graphic/water2.jpg',
    alt:'closeup of turbulent water',
    caption:'Wake water',
    style:{top: "32%", right: "22%", width: '16%' }
  },
  {
    src:'images/graphic/water.jpg',
    alt:'Turbulent water behind boat',
    caption:'Wake and Stern Badger Ferry',
    style:{top: "57%", left: "62%", width: '16%' }
  },
  
  {
    src:'images/graphic/armour.jpg' ,
    alt:'metal with rivits on boat ',
    caption:'"Metal Plate Triangles," Luddington Lighthouse, Michigan.',
    style: { top: "34%", right: "0%", width: '19%' }
  },
 
  {
    src:'images/graphic/rigging.jpg',
    alt:'close up of oil rig machinery',
    caption:'Badger Ferry Rigging',
    style:{ top: "45%", right: "0%", width: '19%' }
  },
  {
    src:'images/graphic/threerungs.jpg',
    alt:'three rungs on boat',
    caption:'Red black and white',
    style:{top: "58%", right: "0%", width: '18%' }
  },
  {
    src:'images/graphic/buildingA.jpg',
    alt:'front entrance to building A',
    caption:'A Entrance',
    style:{ top: "70%", left: "0%", width: '20%' }
  },
  {
    src:'images/graphic/BeanView.jpg',
    alt:'city reflected in the bean in Chicago',
    caption:'View of Chicago in Cloud Gate',
    style:{top: "73%", left: "21%", width: '19%' }
  },
  {
    src:'images/graphic/reeds1.jpg',
    alt:'reeds reflected in pond',
    caption:'Sublime Symmetry (Reeds on pond)',
    style:{top: "87%", right: "15%", width: '15%' }
  },
  {
    src:'images/graphic/reeds2.jpg',
    alt:'reeds reflected in pond',
    caption:'Sublime Symmetry 2 (Reeds on pond)',
    style:{top: "85%", right: "29%", width: '15%' }
  },
  {
    src:'images/graphic/reeds3.jpg',
    alt:'reeds reflected in pond',
    caption:'Sublime Symmetry 3 (Reeds on pond)',
    style:{ top: "77%", right: "44%", width: '15%' }
  },
  {
    src:'images/graphic/reeds4.jpg',
    alt:'reeds reflected in pond',
    caption:'Sublime Symmetry 4 (Reeds on pond)',
    style:{ top: "89%", right:"0%", width: '15%' }
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
        <h1 className='text-center mt-5 mb-5 fs-1 fw-normal '>GALLERY 4</h1>
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
