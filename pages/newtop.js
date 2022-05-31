import { useState } from 'react'
import Navbar from '../components/navbar'
import Header from '../components/header'
import Footer from '../components/footer'
import Photobox from '../components/photobox'
import Slider from '../components/slider'

const myImages = [
  {
    src: 'images/topographics/coopsilo.jpg',
    alt: 'grain silo with coop on it',
    caption: 'Silo1 COOP (Homage to Bechers)',
    style: { top: "0%", left: "0%", width: '28%' }
  },
  {
    src: 'images/topographics/grainsilos1.jpg',
    alt: 'grain silo',
    caption: 'Silo2 (Homage to Bechers)',
    style: { top: "0%", left: "29%", width: '35%' }
  },
  {
    src: 'images/topographics/windmills.jpg',
    alt: 'windmills across sky',
    caption: 'Wind Farm on the great plains',
    style: { top: "3%", right: "0%", width: '36%' }
  },
  {
    src: 'images/topographics/odetosilo.jpg',
    alt: 'grain silo',
    caption: 'Silo5 (Homage to Bechers)',
    style: { top: "42%", left: "0%", width: '25%' }
  },
  {
    src: 'images/topographics/odetosilo9.jpg',
    alt: 'grain silo',
    caption: 'Silo6 (Homage to Bechers)',
    style: { top: "26%", left: "29%", width: '30%' }
  },
  {
    src: 'images/topographics/silosugar.jpg',
    alt: 'sugar silo',
    caption: 'Silo4 (Sugar City , Homage to Bechers)',
    style: { top: "25%", right: "18%", width: '22%' }
  },
  {
    src: 'images/topographics/silosquare.jpg',
    alt: 'grain silo',
    caption: 'Silo3',
    style: { top: "25%", right: "0%", width: '18%' }
  },
  {
    src: 'images/topographics/stopsigns.jpg',
    alt: 'group of stop signs',
    caption: 'No Motor vehicles and 4 stop signs',
    style: { top: "85%", left: "0%", width: '25%' }
  },
  {
    src: 'images/topographics/3electrictower.jpg',
    alt: 'three electric towers',
    caption: 'Powerline Towers',
    style: { top: "70%", right: "42%", width: '30%' }
  },
  {
    src: 'images/topographics/small_lighthouse.jpg',
    alt: 'small lighthouse in distance',
    caption: 'Lighthouse',
    style: { top: "85%", right: "20%", width: '20%' }
  },
  {
    src: 'images/topographics/topocortez.jpg',
    alt: 'landscape',
    caption: 'Dispensary Cortez, Colorado',
    style: { top: "64%", right: "0%", width: '40%' }
  },
  {
    src: 'images/travels/farmtrain.jpg',
    alt: 'train on a big farm',
    caption: '"Farm on the Plains", Somewhere in Iowa.',
    style: { top: "116%", right: "2%", width: '75%' }
  },
]

export default () => {
  const [sliderIsVisible, setSliderIsVisible] = useState(false)
  const [imageNumber, setImageNumber] = useState(0)

  return (
    <>
      <Header title='New Topographics' />
      <Navbar />
      <div className='container'>
        <h1 className='text-center mt-5 mb-5 fs-1 fw-normal '>New Topographics</h1>
        <p className="blurb">
          The New Topographics exhibition struck a chord with me and I take
          photos in this style when I see them. It’s interesting to go to the
          edge of towns and cities and see where the encroachment into the
          wildlands is just starting.
        </p>
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
