import { useState } from 'react'
import Navbar from '../components/navbar'
import Header from '../components/header'
import Slider from '../components/slider'

const myImages = [
{ 
    src:'images/graphic/blackBird.jpg',
    alt:'black bird with blue sky and contrail in the distance',
    caption:'Contrail Blackbird',
    style:{ top: "0%", left: "22%", width: '22%' }
 }, 
 {
    src:'images/graphic/reeds1.jpg',
    alt:'reeds reflected in pond',
    caption:'Sublime Symmetry (Reeds on pond)',
    style:{top: "11%", right: "23%", width: '32%' }
  },
  {
    src:'images/graphic/marsh.jpg',
    alt:'wooden bridge over marsh',
    caption:'"Rose Oaks Boardwalk," Holly, Michigan.',
    style:{ top: "33%", left: "22%", width: '22%' }
  },
  {
    src:'images/graphic/redtractor.jpg',
    alt:'red tractor on mailbox',
    caption:'Farmall mailbox',
    style:{top: "48%", left: "22%", width: '17%' }
  },
  {
    src:'images/graphic/pano19.jpg',
    alt:'panorama landscape',
    caption:'"Triple Hay Wheels," Driftless region, Wisconsin.',
    style:{ top: "55%", left: "40%", width: '40%' }
  },
  {
    src:'images/graphic/armour.jpg' ,
    alt:'metal with rivits on boat ',
    caption:'"Metal Plate Triangles," Luddington Lighthouse, Michigan.',
    style: { top: "72%", left: "35%", width: '30%' }
  },
  {
    src:'images/graphic/corner.jpg',
    alt:'Corner with shadow in Milwaukee art museum',
    caption:'Railing Brown Wall (Milwaukee Art Museum, Milwaukee)',
    style:{top: "85.5%", left: "21.5%", width: '15%' }
  },
  {
    src:'images/graphic/sunset.jpg',
    alt:'sunset in verticle orientation',
    caption:'Vertical orange stripes tree',
    style:{top: "95%", right: "30%", width: '30%' }
  },
  {
    src:'images/graphic/lakemich.jpg',
    alt:'lake and beach in vertical orientation',
    caption:'Vertical stripes 1',
    style:{ top: "112%", right: "33%", width: '20%' }
  },
  {
    src:'images/graphic/sandwater.jpg',
    alt:'Sand water and sky in verticle orientation',
    caption:'Vertical Stripes 2 (sand water sky)',
    style:{top: "140%", right: "34%", width: '22%' }
  },
  {
    src:'images/graphic/reeds2.jpg',
    alt:'reeds reflected in pond',
    caption:'Sublime Symmetry 2 (Reeds on pond)',
    style:{top: "120%", left: "5%", width: '30%' }
  },
  {
    src:'images/graphic/rigging.jpg',
    alt:'close up of oil rig machinery',
    caption:'Badger Ferry Rigging',
    style:{ top: "160%", right: "28%", width: '30%' }
  },
  {
    src:'images/graphic/threerungs.jpg',
    alt:'three rungs on boat',
    caption:'Red black and white',
    style:{top: "160%", right: "14%", width: '13.5%' }
  },
  {
    src:'images/graphic/shadow2.jpg' ,
    alt:'shadow lines in snow with footprints',
    caption:'"Blue Snow Shadows," Holly, Michigan.',
    style: { top: "185%", left: "10%", width: '29%' }
  },
  {
    src: 'images/graphic/shadow.jpg',
    alt: 'shadow on bridge in marsh',
    caption:'"Rose Oaks Boardwalk Shadows," Holly, Michigan.',
    style: { top: "185%", left: "41%", width: '26%' }
  },
  {
    src:'images/graphic/water.jpg',
    alt:'Turbulent water behind boat',
    caption:'Wake and Stern Badger Ferry',
    style:{top: "228%", left: "10%", width: '28.3%' }
  },
  {
    src:'images/graphic/water2.jpg',
    alt:'closeup of turbulent water',
    caption:'Wake water',
    style:{top: "228%", right: "32%", width: '27.5%' }
  },
  {
    src:'images/graphic/sculpture.jpg',
    alt:'marble sculpture and text',
    caption:'',
    style:{ top: "272%", left: "20%", width: '18%' }
  },
  {
    src:'images/graphic/listen.jpg',
    alt:'bird house green leaves and text',
    caption:'',
    style:{ top: "272%", left: "38%", width: '18%' }
  },
  {
    src:'images/graphic/plasticland.jpg',
    alt:'Band poster that says plasticland',
    caption:'',
    style:{top: "300%", left: "15%", width: '30%' }
  },
  {
    src:'images/graphic/buildingA.jpg',
    alt:'front entrance to building A',
    caption:'A Entrance',
    style:{ top: "300%", left: "50%", width: '15%' }
  },
  {
    src:'images/graphic/BeanView.jpg',
    alt:'city reflected in the bean in Chicago',
    caption:'View of Chicago in Cloud Gate',
    style:{top: "315%", right: "17.5%", width: '19%' }
  },
  {
    src:'images/graphic/nytrain.jpg',
    alt:'digitally altered panorama of newyork subway train',
    caption:'Clark Street Subway Station',
    style:{ top: "343%", right: "18%", width: '70%' }
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
