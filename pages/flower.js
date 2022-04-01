import { useState } from 'react'
import Navbar from '../components/navbar'
import Header from '../components/header'
import Slider from '../components/slider'

const myImages = [
  {
    src:'images/flower/Alaskaflower.jpg',
    alt:'yellow flower',
    style:{ top: "0%", left: "0%", width: '28%' }
  },
  {
    src:'images/flower/beeflower.jpg',
    alt:'bee with pollen on flower',
    style:{ top: "0%", left: "29%", width: '25%' }
  },
  {
    src: 'images/flower/flowerbridge.jpg',
    alt: 'bridge with flowers',
    style: { top: "0%", right: "30%", width: '15%' }
  },
  {
    src:'images/flower/snowtree.jpg' ,
    alt:'tree with snow by lake',
    style: { top: "0%", right: "15%", width: '15%' }
  },
  {
    src:'images/flower/waterdrops.jpg' ,
    alt:'flower with water droplets',
    style: { top: "0%", right: "0%", width: '15%' }
  },
  {
    src:'images/flower/hangpod.jpg',
    alt:'seed pod in sky',
    style:{ top: "26%", left: "0%", width: '13%' }
  },
  {
    src:'images/flower/jewel.jpg',
    alt:'red small flowers',
    style:{ top: "26%", left: "15%", width: '15%' }
  },
  {
    src:'images/flower/lotus.jpg',
    alt:'lotus blossom',
    style:{ top: "26%", left: "33%", width: '16%' }
  },
  {
    src:'images/flower/dragonfly.jpg',
    alt:'dragonfly on leaf',
    style:{ top: "27%", right: "36%", width: '14%' }
  },
  {
    src:'images/flower/closeup.jpg',
    alt:'closeup of flower',
    style:{top: "30%", right: "23%", width: '11%' }
  },
  {
    src:'images/flower/pinecone.jpg',
    alt:'closeup pine cone flower',
    style:{top: "27%", right: "0%", width: '20%' }
  },
   {
    src:'images/flower/tallbush.jpg',
    alt:'tall bush with trees',
    style:{top: "27%", right: "0%", width: '20%' }
  },
 {
    src:'images/flower/twist.jpg',
    alt:'twisted wood in desert',
    style:{top: "27%", right: "0%", width: '20%' }
  },
 {
    src:'images/flower/twist2.jpg',
    alt:'twisted wood in desert',
    style:{top: "27%", right: "0%", width: '20%' }
  },
 {
    src:'images/flower/monarch.jpg',
    alt:'monarch butterfly on green flower',
    style:{top: "27%", right: "0%", width: '20%' }
  },
{
    src:'images/flower/peony-22.jpg',
    alt:'peony flower',
    style:{top: "27%", right: "0%", width: '20%' }
  },
{
    src:'images/flower/resin.jpg',
    alt:'drop of resin on leaf',
    style:{top: "27%", right: "0%", width: '20%' }
  },
{
    src:'images/flower/thistle-1.jpg',
    alt:'thistle flower',
    style:{top: "27%", right: "0%", width: '20%' }
  },
{
    src:'images/flower/wisteria-14.jpg',
    alt:'wisteria plant',
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
        <h1 className='text-center mt-5 mb-5 fs-1 fw-normal '>FLOWER</h1>
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
