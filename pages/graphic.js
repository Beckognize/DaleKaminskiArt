import { useState } from 'react'
import Navbar from '../components/navbar'
import Header from '../components/header'
import Slider from '../components/slider'

const myImages = [
  {
    src:'images/graphic/pano19.jpg',
    alt:'panorama landscape',
    style:{ top: "0%", left: "0%", width: '28%' }
  },
  {
    src:'images/graphic/marsh.jpg',
    alt:'wooden bridge over marsh',
    style:{ top: "0%", left: "29%", width: '25%' }
  },
  {
    src: 'images/graphic/shadow.jpg',
    alt: 'shadow on bridge in marsh',
    style: { top: "0%", right: "30%", width: '15%' }
  },
  {
    src:'images/graphic/shadow2.jpg' ,
    alt:'shadow lines in snow with footprints',
    style: { top: "0%", right: "15%", width: '15%' }
  },
  {
    src:'images/graphic/armour.jpg' ,
    alt:'metal with rivits on boat ',
    style: { top: "0%", right: "0%", width: '15%' }
  },
  {
    src:'images/graphic/lakemich.jpg',
    alt:'lake and beach in vertical orientation',
    style:{ top: "26%", left: "0%", width: '13%' }
  },
  {
    src:'images/graphic/rigging.jpg',
    alt:'close up of oil rig machinery',
    style:{ top: "26%", left: "15%", width: '15%' }
  },
  {
    src:'images/graphic/blackBird.jpg',
    alt:'black bird with blue sky and contrail in the distance',
    style:{ top: "26%", left: "33%", width: '16%' }
  },
  {
    src:'images/graphic/buildingA.jpg',
    alt:'front entrance to building A',
    style:{ top: "27%", right: "36%", width: '14%' }
  },
  {
    src:'images/graphic/BeanView.jpg',
    alt:'city reflected in the bean in Chicago',
    style:{top: "30%", right: "23%", width: '11%' }
  },
  {
    src:'images/graphic/reeds1.jpg',
    alt:'reeds reflected in pond',
    style:{top: "27%", right: "0%", width: '20%' }
  },
   {
    src:'images/graphic/corner.jpg',
    alt:'Corner with shadow in Milwaukee art museum',
    style:{top: "27%", right: "0%", width: '20%' }
  },
 {
    src:'images/graphic/reeds2.jpg',
    alt:'reeds reflected in pond',
    style:{top: "27%", right: "0%", width: '20%' }
  },
 {
    src:'images/graphic/sandwater.jpg',
    alt:'Sand water and sky in verticle orientation',
    style:{top: "27%", right: "0%", width: '20%' }
  },
 {
    src:'images/graphic/water.jpg',
    alt:'Turbulent water behind boat',
    style:{top: "27%", right: "0%", width: '20%' }
  },
{
    src:'images/graphic/threerungs.jpg',
    alt:'three rungs on boat',
    style:{top: "27%", right: "0%", width: '20%' }
  },
{
    src:'images/graphic/sunset.jpg',
    alt:'sunset in verticle orientation',
    style:{top: "27%", right: "0%", width: '20%' }
  },
{
    src:'images/graphic/water2.jpg',
    alt:'closeup of turbulent water',
    style:{top: "27%", right: "0%", width: '20%' }
  },
{
    src:'images/graphic/redtractor.jpg',
    alt:'red tractor on mailbox',
    style:{top: "27%", right: "0%", width: '20%' }
  },
  {
    src:'images/graphic/reeds3.jpg',
    alt:'reeds reflected in pond',
    style:{ top: "73%", left: "42%", width: '36%' }
  },
  {
    src:'images/graphic/reeds4.jpg',
    alt:'reeds reflected in pond',
    style:{ top: "80%", right:"0%", width: '21%' }
  },
  {
    src:'images/graphic/spec-17.jpg',
    alt:'upclose rusted metal word spec',
    style:{ top: "73%", left: "42%", width: '36%' }
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
        <h1 className='text-center mt-5 mb-5 fs-1 fw-normal '>GRAPHIC</h1>
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
