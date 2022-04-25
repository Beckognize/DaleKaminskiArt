import { useState } from 'react'
import Navbar from '../components/navbar'
import Header from '../components/header'
import Slider from '../components/slider'

const myImages = [
  {
    src:'images/travels/1cloud.jpg',
    alt:'one cloud in the sky',
    caption:'"Lone Cloud", Mesa Verde, Colorado.',
    style:{ top: "0%", left: "0%", width: '31%' }
  },
  {
    src:'images/travels/1tree.jpg',
    alt:'one tree on a plain',
    caption:'"Lone Tree", Moquah Barrens, Washburn, Wisconsin.',
    style:{ top: "0%", left: "70%", width: '28%' }
  },
  {
    src:'images/travels/panovert.jpg',
    alt:'vertical panorama of death valley in a vertical orientaion',
    caption:'"Scorched Earth", Death Valley, California.',
    style:{top: "0%", right: "40%", width: '18%' }
  },
  {
    src:'images/travels/panodeathvally.jpg',
    alt:'panorama of death valley',
    caption:'"Umbra of Mountain", Death Valley, California.',         
    style:{top: "150%", left: "0%", width: '50%' } 
  },
  {
    src:'images/travels/deathvally.jpg',
    alt:'Dry tree in deathvalley',
    caption:'"Tree", Death Valley, California. ',
    style:{ top: "276%", left: "15%", width: '15%' }
  },
  {
    src:'images/travels/jukejoint.jpg',
    alt:'Juke joint',
    caption:'"Juke Joint 3 AM", Clarksville, Mississippi.',
    style:{top: "392%", right: "0%", width: '20%' }
  },
  {
    src:'images/travels/lakecottage.jpg',
    alt:'Cottage by the lake',
    caption:'"Cottage on Big School Lot", Lake Holly, Michigan.',
    style:{ top: "253%", left: "15%", width: '30%' }
  },
  {
    src:'images/travels/cowvally.jpg',
    alt:'cows in a valley',
    caption:'"Cattle in Valley", Driftless region, Wisconsin.',
    style:{ top: "200%", right: "50%", width: '20%' }
  },
  {
    src:'images/travels/lonelyroad.jpg',
    alt:'long road with green grass and blue sky',
    caption:'"Road", Eastern Colorado.',
    style:{ top: "250%", left: "26%", width: '25%' }
  },
  {
    src:'images/travels/longriver.jpg',
    alt:'long river in Alaska',
    caption:'"Falling River", Juneau, Alaska.',
    style:{ top: "270%", left: "13%", width: '14%' }
  },
  {
    src:'images/travels/longtrain.jpg',
    alt:'long train by road',
    caption:'"Vanishing Train", Kansas.',
    style:{ top: "250%", right: "0%", width: '25%' }
  },
  {
    src:'images/travels/mirrorswamp.jpg',
    alt:'swamp with reflection in water',
    caption:'"Bark River", Fort Atkinson, Wisconsin.',
    style:{ top: "235%", left:"0%", width: '21%' }
  },
{
    src:'images/travels/nysmoke.jpg',
    alt:'steam coming out of NY subway',
    caption:'"Steam Vent", New York City.',
    style:{ top: "220%", right:"40%", width: '21%' }
  },
{
    src:'images/travels/panocabin.jpg',
    alt:'panorama of alaskan mountains',
    caption:'"Taku River", Alaska.',
    style:{ top: "143%", left:"0%", width: '35%' }
  },
  {
    src:'images/travels/panovert2.jpg',
    alt:'panorama of street with old theater in a vertical orientaion',
    caption:'"Paramount Theater (Palindrome)" Clarksville, Mississippi.',
    style:{top: "150%", left: "0%", width: '15%' }
  },
    {
    src: 'images/travels/4silos.jpg',
    alt: 'four silos in the distance',
    caption:'"4 Silos With Red Spots", Somewhere in Kansas.',
    style: { top: "100%", right: "20%", width: '20%' }
  },
  {
    src:'images/travels/snowlake.jpg',
    alt:'Snow covered lake at night',
    caption:'"Orion", Holly, Michigan.',
    style:{ top: "115%", right: "0%", width: '20%' }
  },
  {
    src:'images/travels/windingroad.jpg',
    alt:'arial view of a long winding road',
    caption:'"Curve Road", Mesa Verde, Colorado.',
    style:{ top: "380%", left: "30%", width: '14%' }
  },
  {
    src:'images/travels/wolfcreek.jpg',
    alt:'wolf creek valley',
    caption:'"Wolf Creek Pass", Continental divide, Colorado.',
    style:{ top: "105%", left: "0%", width: '25%' }
  },
  {
    src:'images/travels/wuhanally.jpg',
    alt:'an alley in wuhan with buildings in the distance',
    caption:'"Alley in Wuhan", Wuhan, China.',
    style:{ top: "200%", left:"0%", width: '21%' }
  },
{
    src:'images/travels/wuhanstack.jpg',
    alt:'big stack of garbage on cart',
    caption:'"Move out day", Hubei University, Wuhan, China.',
    style:{ top: "200%", right:"00%", width: '21%' }
  },
{
    src:'images/travels/yangtze.jpg',
    alt:'a swimmer in the yangtze river with city in the distance',
    caption:'"Yangtze Swimmer", Wuhan, China.',
    style:{ top: "200%", right:"50%", width: '21%' }
  },
  {
    src:'images/travels/barkriver.jpg' ,
    alt:'reflection in the bark river',
    caption:'"Bark River Flood", Fort Atkinson, Wisconsin.',
    style: { top: "200%", right: "30%", width: '20%' }
  },
  {
    src:'images/travels/plume.jpg',
    alt:'plume of steam from power plant in winter',
    caption:'"Plume", Whitewater, Wisconsin.',
    style:{top: "300%", right: "24%", width: '21%' }
  },
   {
    src:'images/travels/farmtrain.jpg',
    alt:'train on a big farm',
    caption:'"Farm on the Plains", Somewhere in Iowa.',
    style:{ top: "344%", right: "2%", width: '35%' }
  },
  {
    src:'images/travels/windmills.jpg',
    alt:'windmills in the distance',
    caption:'"Windmills", Kansas.',
    style:{ top: "312%", right: "0%", width: '24%' }
  },
   {
    src:'images/travels/clouds.jpg' ,
    alt:'clouds over cornfeilds',
    caption:'"Thunderhead Over Cornfield", Cresco, Iowa.',
    style: { top: "300%", right: "0%", width: '24%' }
  },
  {
    src:'images/travels/hudsonriver.jpg',
    alt:'Hudson river valley',
    caption:'"Windmills in The Berkshires", Williamstown, Massachusetts.',
    style:{top: "325%", right: "0%", width: '25%' }
  },
  {
    src:'images/travels/hailbadger.jpg',
    alt:'large ship coming into port', 
    caption:'"Kid and Badger Car Ferry", Luddington, Michigan.',        
    style:{top: "358%", right: "25%", width: '20%' } 
  },
  {
    src:'images/travels/klutzman.jpg',
    alt:'Mountains and valley',
    caption:'"On Top of Mount Klutchman", Taku River Valley, Alaska.',
    style:{ top: "320%", right: "25%", width: '20%' }
  },
  {
    src:'images/travels/ghostship.jpg',
    alt:'ship in the distance',
    caption:'"Ghost Ship", Luddington, Michigan.',
    style:{top: "357%", right: "0%", width: '25%' }
  },
  {
    src:'images/travels/haywheels.jpg',
    alt:'Hay wheels in green pasture',
    caption:'"Wheels of Hay", Rural Wisconsin.',
    style:{top: "120%", left: "0%", width: '25%' }
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
        <h1 className='text-center mt-5 mb-5 fs-1 fw-normal '>GALLERY 8</h1>
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
