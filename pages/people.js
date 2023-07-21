import { useState } from 'react'
import Navbar from '../components/navbar'
import Header from '../components/header'
import Footer from '../components/footer'
import Photobox from '../components/photobox'
import Slider from '../components/slider'

const myImages = [
  {
    src: 'images/people/Dawn1.jpg',
    alt: 'woman jumping',
    caption: '"Dawn Jump 1," Driftless Area, Wisconsin.',
    style: { top: "5%", right: "57%", width: '16%' }
  },
  {
    src: 'images/people/Dawn2.jpg',
    alt: 'woman jumping',
    caption: '"Dawn Jump 2," Driftless Area, Wisconsin.',
    style: { top: "5%", right: "42%", width: '16%' }
  },
  {
    src: 'images/people/Dawn3.jpg',
    alt: 'woman jumping',
    caption: '"Dawn Jump 3," Driftless Area, Wisconsin.',
    style: { top: "5%", right: "27%", width: '16%' }
  },
  {
    src: 'images/people/korinji.jpg',
    alt: 'woman smiling',
    caption: '"Smile," Korinji Monastery, Wisconsin.',
    style: { top: "40%", left: "13%", width: '16%' }
  },
  {
    src: 'images/people/monk2.jpg',
    alt: 'monk standing',
    caption: '"Leaning Monk," Korinji Monastery, Wisconsin.',
    style: { top: "40%", right: "13%", width: '15%' }
  },
  {
    src: 'images/people/monkleans.jpg',
    alt: 'monk leaning',
    caption: '"Contemplating Monk," Korinji Monastery, Wisconsin.',
    style: { top: "40%", right: "28%", width: '15%' }
  },
  {
    src: 'images/people/monksitsporch.jpg',
    alt: 'monk siting',
    caption: '"Meditating Monk," Korinji Monastery, Wisconsin.',
    style: { top: "40%", right: "43%", width: '15%' }
  },
 {
    src: 'images/people/lotsgoingonhere.jpg',
    alt: 'Woman posing for a picture',
    caption: '"Lots going on here"',
    style: { top: "68%", left: "4%", width: '21%' }
  }, 
  {
    src: 'images/people/3ladies.jpg',
    alt: 'three old ladies on bench',
    caption: '"Three Ladies," Wuhan, China.',
    style: { top: "74%", left: "34%", width: '26%' }
  },
  {
    src: 'images/people/vootvicjake.jpg',
    alt: 'three men with wig',
    caption: '"Voot Warnings Band Riverwest," Milwaukee Wisconsin.',
    style: { top: "76%", left: "63%", width: '26%' }
  },
  
  {
    src: 'images/people/studentshadow.jpg',
    alt: 'group of people with umbrella',
    caption: '"Students taking pictures of shadows," Wuhan, China.',
    style: { top: "100%", left: "0%", width: '30%' }
  },
  {
    src: 'images/people/mask.jpg',
    alt: 'woman in mask',
    caption: '"Masked Student," Wuhan, China.',
    style: { top: "100%", right: "42%", width: '20%' }
  },
  {
    src: 'images/people/studentshay.jpg',
    alt: 'students in classroom',
    caption: 'Students with Art Shay Postcards," Wuhan, China.',
    style: { top: "100%", right: "0%", width: '35%' }
  },
  {
    src: 'images/people/studentjump.jpg',
    alt: 'student jumping',
    caption: '"Student Jump," Wuhan, China.',
    style: { top: "137%", right: "25%", width: '25%' }
  },
  {
    src: 'images/people/kidjump.jpg',
    alt: 'kid jumping',
    caption: '"Kid Jump," Wuhan, China.',
    style: { top: "137%", right: "0%", width: '25%' }
  },
  {
    src: 'images/people/boybent.jpg',
    alt: 'boy in sunset bent',
    caption: '"Kid Fishing," Luddington, Michigan.',
    style: { top: "137%", left: "0%", width: '22%' }
  },
  {
    src: 'images/people/poseforpicture.jpg',
    alt: 'Woman with arms raised posing for picture',
    caption: '"Pose for picture"',
    style: { top: "137%", left: "22%", width: '22%' }
  },
  {
    src: 'images/people/waving.jpg',
    alt: 'people waving on lighthouse',
    caption: '"Waving from lighthouse Deck of the Badger Ferry," Manitowoc, Wisconsin.',
    style: { top: "175%", left: "25%", width: '30%' }
  },
  {
    src: 'images/people/twopeopleonbeach.jpg',
    alt: 'two people on beach',
    caption: 'Two people on a beach',
    style: { top: "182%", left: "65%", width: '30%' }
  },
  {
    src: 'images/people/Bowpeeps.jpg',
    alt: 'people on bow of boat',
    caption: '"Deck of Badger crossing Lake Michigan.',
    style: { top: "192%", left: "0%", width: '55%' }
  },
]

export default () => {
  const [sliderIsVisible, setSliderIsVisible] = useState(false)
  const [imageNumber, setImageNumber] = useState(0)

  return (
    <>
      <Header title='People'/>
      <Navbar />
      <div className='container'>
        <h1 className='text-center mt-5 mb-5 fs-1 fw-normal '>People</h1>
        <p className='blurb text-center'></p>
        </div>
        <div className="container-fluid">
        <Photobox
          images={myImages}
          setImageNumber={setImageNumber}
          setSliderIsVisible={setSliderIsVisible}
        />
      </div>
      <Footer />
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
