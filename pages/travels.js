import { useState } from 'react'
import Navbar from '../components/navbar'
import Header from '../components/header'
import Slider from '../components/slider'

const myImages = [
  {
    src:'images/travels/1cloud.jpg',
    alt:'one cloud in the sky',
    style:{ top: "0%", left: "0%", width: '28%' }
  },
  {
    src:'images/travels/1tree.jpg',
    alt:'one tree on a plain',
    style:{ top: "0%", left: "29%", width: '25%' }
  },
  {
    src: 'images/travels/4silos.jpg',
    alt: 'four silos in the distance',
    style: { top: "0%", right: "30%", width: '15%' }
  },
  {
    src:'images/travels/barkriver.jpg' ,
    alt:'reflection in the bark river',
    style: { top: "0%", right: "15%", width: '15%' }
  },
  {
    src:'images/travels/clouds.jpg' ,
    alt:'clouds over cornfeilds',
    style: { top: "0%", right: "0%", width: '15%' }
  },
  {
    src:'images/travels/cowvally.jpg',
    alt:'cows in a valley',
    style:{ top: "26%", left: "0%", width: '13%' }
  },
  {
    src:'images/travels/deathvally.jpg',
    alt:'Dry tree in deathvalley',
    style:{ top: "26%", left: "15%", width: '15%' }
  },
  {
    src:'images/travels/farmtrain.jpg',
    alt:'train on a big farm',
    style:{ top: "26%", left: "33%", width: '16%' }
  },
  {
    src:'images/travels/flatroad.jpg',
    alt:'flat road panorama',
    style:{ top: "27%", right: "36%", width: '14%' }
  },
  {
    src:'images/travels/ghostship.jpg',
    alt:'ship in the distance',
    style:{top: "27%", right: "0%", width: '20%' }
  },
  {
    src:'images/travels/hailbadger.jpg',
    alt:'large ship coming into port',         
    style:{top: "43%", right: "2%", width: '18%' } 
  },
  {
    src:'images/travels/haywheels.jpg',
    alt:'Hay wheels in green pasture',
    style:{top: "54%", left: "0%", width: '15%' }
  },
  {
    src:'images/travels/hudsonriver.jpg',
    alt:'Hudson river valley',
    style:{top: "58%", left: "34%", width: '15%' }
  },
  {
    src:'images/travels/jukejoint.jpg',
    alt:'Juke joint',
    style:{top: "52%", right: "37%", width: '40%' }
  },
  {
    src:'images/travels/klutzman.jpg',
    alt:'Mountains and valley',
    style:{ top: "53%", right: "0%", width: '20%' }
  },
  {
    src:'images/travels/lakecottage.jpg',
    alt:'Cottage by the lake',
    style:{ top: "53%", right: "21%", width: '14%' }
  },
  {
    src:'images/travels/lonelyroad.jpg',
    alt:'long road with green grass and blue sky',
    style:{ top: "70%", left: "26%", width: '14%' }
  },
  {
    src:'images/travels/longriver.jpg',
    alt:'long river in Alaska',
    style:{ top: "70%", left: "13%", width: '14%' }
  },
  {
    src:'images/travels/longtrain.jpg',
    alt:'long train by road',
    style:{ top: "70%", left: "0%", width: '14%' }
  },
  {
    src:'images/travels/mirrorswamp.jpg',
    alt:'swamp with reflection in water',
    style:{ top: "80%", right:"0%", width: '21%' }
  },
{
    src:'images/travels/nysmoke.jpg',
    alt:'steam coming out of NY subway',
    style:{ top: "80%", right:"40%", width: '21%' }
  },
{
    src:'images/travels/panocabin.jpg',
    alt:'panorama of alaskan mountains',
    style:{ top: "80%", right:"50%", width: '21%' }
  },
{
    src:'images/travels/panodeathvally.jpg',
    alt:'panorama of death valley',         
    style:{top: "43%", right: "2%", width: '18%' } 
  },
  {
    src:'images/travels/panovert.jpg',
    alt:'vertical panorama of death valley in a vertical orientaion',
    style:{top: "54%", left: "0%", width: '15%' }
  },
  {
    src:'images/travels/panovert2.jpg',
    alt:'panorama of street with old theater in a vertical orientaion',
    style:{top: "58%", left: "34%", width: '15%' }
  },
  {
    src:'images/travels/plume.jpg',
    alt:'plume of steam from power plant in winter',
    style:{top: "52%", right: "37%", width: '40%' }
  },
  {
    src:'images/travels/snowlake.jpg',
    alt:'Snow covered lake at night',
    style:{ top: "53%", right: "0%", width: '20%' }
  },
  {
    src:'images/travels/wavefeild.jpg',
    alt:'Panorama of wave feild by may lin',
    style:{ top: "53%", right: "21%", width: '14%' }
  },
  {
    src:'images/travels/windingroad.jpg',
    alt:'arial view of a long winding road',
    style:{ top: "70%", left: "26%", width: '14%' }
  },
  {
    src:'images/travels/windmills.jpg',
    alt:'windmills in the distance',
    style:{ top: "70%", left: "13%", width: '14%' }
  },
  {
    src:'images/travels/wolfcreek.jpg',
    alt:'wolf creek valley',
    style:{ top: "70%", left: "0%", width: '14%' }
  },
  {
    src:'images/travels/wuhanally.jpg',
    alt:'an alley in wuhan with buildings in the distance',
    style:{ top: "80%", right:"0%", width: '21%' }
  },
{
    src:'images/travels/wuhanstack.jpg',
    alt:'big stack of garbage on cart',
    style:{ top: "80%", right:"40%", width: '21%' }
  },
{
    src:'images/travels/yangtze.jpg',
    alt:'a swimmer in the yangtze river with city in the distance',
    style:{ top: "80%", right:"50%", width: '21%' }
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
        <h1 className='text-center mt-5 mb-5 fs-1 fw-normal '>TRAVELS</h1>
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
