import { useState } from 'react'
import Navbar from '../components/navbar'
import Header from '../components/header'
import Slider from '../components/slider'

const myImages = [
  {
    src:'images/flower/lotus.jpg',
    alt:'lotus blossom',
    style:{ top: "0%", left: "0%", width: '26%' }
  },
  {
    src:'images/flower/peony-22.jpg',
    alt:'peony flower',
    style:{top: "0%", left: "26%", width: '26%' }
  },
 {
    src:'images/flower/waterdrops.jpg' ,
    alt:'flower with water droplets',
    style: { top: "0%", right: "24%", width: '24%' }
  }, 
  {
    src:'images/flower/beeflower.jpg',
    alt:'bee with pollen on flower',
    style:{ top: "0%", right: "0%", width: '24%' }
  },
  {
    src:'images/flower/dragonfly.jpg',
    alt:'dragonfly on leaf',
    style:{ top: "16%", left: "0%", width: '21%' }
  },
  {
    src:'images/flower/wisteria-14.jpg',
    alt:'wisteria plant',
    style:{top: "17%", left: "21%", width: '24%' }
  },
  {
    src:'images/flower/hangpod.jpg',
    alt:'seed pod in sky',
    style:{ top: "31%", left: "46%", width: '28%' }
  },
  {
    src:'images/flower/jewel.jpg',
    alt:'red small flowers',
    style:{ top: "14%", right: "0%", width: '22%' }
  },
  {
    src:'images/flower/thistle-1.jpg',
    alt:'thistle flower',
    style:{top: "32%", left: "0%", width: '21%' }
  },
  {
    src:'images/flower/resin.jpg',
    alt:'drop of resin on leaf',
    style:{top: "52%", left: "45%", width: '15%' }
  },
  {
    src:'images/flower/pinecone.jpg',
    alt:'closeup pine cone flower',
    style:{top: "52%", right: "24%", width: '15%' }
  },
  {
    src: 'images/flower/flowerbridge.jpg',
    alt: 'bridge with flowers',
    style: { top: "71%", left: "0%", width: '22%' }
  },
  {
    src:'images/flower/tallbush.jpg',
    alt:'tall bush with trees',
    style:{top: "36%", right: "0%", width: '24%' }
  },
  {
    src:'images/flower/snowtree.jpg' ,
    alt:'tree with snow by lake',
    style: { top: "73%", right: "57%", width: '20%' }
  },
  {
    src:'images/flower/twist2.jpg',
    alt:'twisted wood in desert',
    style:{top: "81%", right: "19%", width: '16%' }
  },
  {
    src:'images/flower/twist.jpg',
    alt:'twisted wood in desert with brown rock',
    style:{top: "73%", right: "0%", width: '19%' }
  },
  {
    src:'images/flower/monarch.jpg',
    alt:'monarch butterfly on green flower',
    style:{top: "81%", right: "36%", width: '20%' }
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
        <h1 className='text-center mt-5 mb-5 fs-1 fw-normal '>Flowers and Insects</h1>
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
