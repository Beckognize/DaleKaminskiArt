import { useState } from 'react'
import Navbar from '../components/navbar'
import Header from '../components/header'
import Slider from '../components/slider'

const myImages = [
  {
    src:'images/travels/1cloud.jpg',
    alt:'one cloud in the sky',
    caption:'"Lone Cloud", Mesa Verde, Colorado.',
    style:{ top: "0%", left: "0%", width: '28%' }
  },
  {
    src:'images/travels/1tree.jpg',
    alt:'one tree on a plain',
    caption:'"Lone Tree", Moquah Barrens, Washburn, Wisconsin.',
    style:{ top: "0%", left: "29%", width: '25%' }
  },
  {
    src: 'images/travels/4silos.jpg',
    alt: 'four silos in the distance',
    caption:'"4 Silos With Red Spots", Somewhere in Kansas.',
    style: { top: "0%", right: "30%", width: '15%' }
  },
  {
    src:'images/travels/barkriver.jpg' ,
    alt:'reflection in the bark river',
    caption:'"Bark River Flood", Fort Atkinson, Wisconsin.',
    style: { top: "0%", right: "15%", width: '15%' }
  },
  {
    src:'images/travels/clouds.jpg' ,
    alt:'clouds over cornfeilds',
    caption:'"Thunderhead Over Cornfield", Cresco, Iowa.',
    style: { top: "0%", right: "0%", width: '15%' }
  },
  {
    src:'images/travels/cowvally.jpg',
    alt:'cows in a valley',
    caption:'"Cattle in Valley", Driftless region, Wisconsin.',
    style:{ top: "26%", left: "0%", width: '13%' }
  },
  {
    src:'images/travels/deathvally.jpg',
    alt:'Dry tree in deathvalley',
    caption:'"Tree", Death Valley, California. ',
    style:{ top: "26%", left: "15%", width: '15%' }
  },
  {
    src:'images/travels/farmtrain.jpg',
    alt:'train on a big farm',
    caption:'"Farm on the Plains", Somewhere in Iowa.',
    style:{ top: "26%", left: "33%", width: '16%' }
  },
  {
    src:'images/travels/ghostship.jpg',
    alt:'ship in the distance',
    caption:'"Ghost Ship", Luddington, Michigan.',
    style:{top: "27%", right: "0%", width: '20%' }
  },
  {
    src:'images/travels/hailbadger.jpg',
    alt:'large ship coming into port', 
    caption:'"Kid and Badger Car Ferry", Luddington, Michigan.',        
    style:{top: "43%", right: "2%", width: '18%' } 
  },
  {
    src:'images/travels/haywheels.jpg',
    alt:'Hay wheels in green pasture',
    caption:'"Wheels of Hay", Rural Wisconsin.',
    style:{top: "54%", left: "0%", width: '15%' }
  },
  {
    src:'images/travels/hudsonriver.jpg',
    alt:'Hudson river valley',
    caption:'"Windmills in The Berkshires", Williamstown, Massachusetts.',
    style:{top: "58%", left: "34%", width: '15%' }
  },
  {
    src:'images/travels/jukejoint.jpg',
    alt:'Juke joint',
    caption:'"Juke Joint 3 AM", Clarksville, Mississippi.',
    style:{top: "52%", right: "37%", width: '40%' }
  },
  {
    src:'images/travels/klutzman.jpg',
    alt:'Mountains and valley',
    caption:'"On Top of Mount Klutchman", Taku River Valley, Alaska.',
    style:{ top: "53%", right: "0%", width: '20%' }
  },
  {
    src:'images/travels/lakecottage.jpg',
    alt:'Cottage by the lake',
    caption:'"Cottage on Big School Lot", Lake Holly, Michigan.',
    style:{ top: "53%", right: "21%", width: '14%' }
  },
  {
    src:'images/travels/lonelyroad.jpg',
    alt:'long road with green grass and blue sky',
    caption:'"Road", Eastern Colorado.',
    style:{ top: "70%", left: "26%", width: '14%' }
  },
  {
    src:'images/travels/longriver.jpg',
    alt:'long river in Alaska',
    caption:'"Falling River", Juneau, Alaska.',
    style:{ top: "70%", left: "13%", width: '14%' }
  },
  {
    src:'images/travels/longtrain.jpg',
    alt:'long train by road',
    caption:'"Vanishing Train", Kansas.',
    style:{ top: "70%", left: "0%", width: '14%' }
  },
  {
    src:'images/travels/mirrorswamp.jpg',
    alt:'swamp with reflection in water',
    caption:'"Bark River", Fort Atkinson, Wisconsin.',
    style:{ top: "80%", right:"0%", width: '21%' }
  },
{
    src:'images/travels/nysmoke.jpg',
    alt:'steam coming out of NY subway',
    caption:'"Steam Vent", New York City.',
    style:{ top: "80%", right:"40%", width: '21%' }
  },
{
    src:'images/travels/panocabin.jpg',
    alt:'panorama of alaskan mountains',
    caption:'"Taku River", Alaska.',
    style:{ top: "80%", right:"50%", width: '21%' }
  },
{
    src:'images/travels/panodeathvally.jpg',
    alt:'panorama of death valley',
    caption:'"Umbra of Mountain", Death Valley, California.',         
    style:{top: "43%", right: "2%", width: '18%' } 
  },
  {
    src:'images/travels/panovert.jpg',
    alt:'vertical panorama of death valley in a vertical orientaion',
    caption:'"Scorched Earth", Death Valley, California.',
    style:{top: "54%", left: "0%", width: '15%' }
  },
  {
    src:'images/travels/panovert2.jpg',
    alt:'panorama of street with old theater in a vertical orientaion',
    caption:'"Paramount Theater (Palindrome)" Clarksville, Mississippi.',
    style:{top: "58%", left: "34%", width: '15%' }
  },
  {
    src:'images/travels/plume.jpg',
    alt:'plume of steam from power plant in winter',
    caption:'"Plume", Whitewater, Wisconsin.',
    style:{top: "52%", right: "37%", width: '40%' }
  },
  {
    src:'images/travels/snowlake.jpg',
    alt:'Snow covered lake at night',
    caption:'"Orion", Holly, Michigan.',
    style:{ top: "53%", right: "0%", width: '20%' }
  },
  {
    src:'images/travels/wavefeild.jpg',
    alt:'Panorama of wave feild by may lin',
    caption:'"Wave field" ( sculpture by Maya Lin) Storm King, New York.',
    style:{ top: "53%", right: "21%", width: '14%' }
  },
  {
    src:'images/travels/windingroad.jpg',
    alt:'arial view of a long winding road',
    caption:'"Curve Road", Mesa Verde, Colorado.',
    style:{ top: "70%", left: "26%", width: '14%' }
  },
  {
    src:'images/travels/windmills.jpg',
    alt:'windmills in the distance',
    caption:'"Windmills", Kansas.',
    style:{ top: "70%", left: "13%", width: '14%' }
  },
  {
    src:'images/travels/wolfcreek.jpg',
    alt:'wolf creek valley',
    caption:'"Wolf Creek Pass", Continental divide, Colorado.',
    style:{ top: "70%", left: "0%", width: '14%' }
  },
  {
    src:'images/travels/wuhanally.jpg',
    alt:'an alley in wuhan with buildings in the distance',
    caption:'"Alley in Wuhan", Wuhan, China.',
    style:{ top: "80%", right:"0%", width: '21%' }
  },
{
    src:'images/travels/wuhanstack.jpg',
    alt:'big stack of garbage on cart',
    caption:'"Move out day", Hubei University, Wuhan, China.',
    style:{ top: "80%", right:"40%", width: '21%' }
  },
{
    src:'images/travels/yangtze.jpg',
    alt:'a swimmer in the yangtze river with city in the distance',
    caption:'"Yangtze Swimmer", Wuhan, China.',
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
