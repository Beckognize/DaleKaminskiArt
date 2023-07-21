import { useState } from 'react'
import Navbar from '../components/navbar'
import Header from '../components/header'
import Footer from '../components/footer'
import Photobox from '../components/photobox'
import Slider from '../components/slider'

const myImages = [
  {
    src: 'images/travels/windmills.jpg',
    alt: 'windmills in the distance',
    caption: '"Windmills", Kansas.',
    style: { top: "0%", right: "12%", width: '75%' }
  },
  {
    src: 'images/travels/montanaClouds.jpg',
    alt: 'clouds over Montana',
    caption: '"Clouds, Montana"',
    style: { top: "130%", left: "8%", width: '25%' }
  },
  {
    src: 'images/travels/superiorbeach.jpg',
    alt: 'Lake superior beach',
    caption: '"Superior Beach"',
    style: { top: "147%", left: "3%", width: '30%' }
  },
  {
    src: 'images/travels/clouds.jpg',
    alt: 'clouds over cornfeilds',
    caption: '"Thunderhead Over Cornfield", Cresco, Iowa.',
    style: { top: "36%", right: "12%", width: '75%' }
  },
  {
    src: 'images/travels/1cloud.jpg',
    alt: 'one cloud in the sky',
    caption: '"Lone Cloud", Mesa Verde, Colorado.',
    style: { top: "73%", left: "3%", width: '36%' }
  },
  {
    src: 'images/travels/panovert.jpg',
    alt: 'vertical panorama of death valley in a vertical orientaion',
    caption: '"Scorched Earth", Death Valley, California.',
    style: { top: "73%", left: "42%", width: '18%' }
  },
  {
    src: 'images/travels/1tree.jpg',
    alt: 'one tree on a plain',
    caption: '"Lone Tree", Moquah Barrens, Washburn, Wisconsin.',
    style: { top: "73%", right: "3%", width: '32.5%' }
  },
  {
    src: 'images/travels/panocabin.jpg',
    alt: 'panorama of alaskan mountains',
    caption: '"Taku River", Alaska.',
    style: { top: "176%", left: "2%", width: '69%' }
  },
  {
    src: 'images/travels/panodeathvally.jpg',
    alt: 'panorama of death valley',
    caption: '"Umbra of Mountain", Death Valley, California.',
    style: { top: "190%", left: "2%", width: '69%' }
  },
  {
    src: 'images/travels/flatroad.jpg',
    alt: 'flat road panorama',
    caption: '"Road", Rural Kansas.',
    style: { top: "205%", left: "2%", width: '69%' }
  },
  {
    src: 'images/travels/lakecottage.jpg',
    alt: 'Cottage by the lake',
    caption: '"Cottage on Big School Lot", Lake Holly, Michigan.',
    style: { top: "217%", left: "2%", width: '69%' }
  },
  {
    src: 'images/travels/klutzman.jpg',
    alt: 'Mountains and valley',
    caption: '"On Top of Mount Klutchman", Taku River Valley, Alaska.',
    style: { top: "252%", left: "1%", width: '40%' }
  },
  {
    src: 'images/travels/longriver.jpg',
    alt: 'long river in Alaska',
    caption: '"Falling River", Juneau, Alaska.',
    style: { top: "260%", left: "44%", width: '27%' }
  },
  {
    src: 'images/travels/snowlake.jpg',
    alt: 'Snow covered lake at night',
    caption: '"Orion", Holly, Michigan.',
    style: { top: "300%", left: "0%", width: '35%' }
  },
  {
    src: 'images/travels/4silos.jpg',
    alt: 'four silos in the distance',
    caption: '"4 Silos With Red Spots", Somewhere in Kansas.',
    style: { top: "130%", right: "1%", width: '25%' }
  },
  {
    src: 'images/travels/plume.jpg',
    alt: 'plume of steam from power plant in winter',
    caption: '"Plume", Whitewater, Wisconsin.',
    style: { top: "147%", right: "1%", width: '25%' }
  },
  {
    src: 'images/travels/nysmoke.jpg',
    alt: 'steam coming out of NY subway',
    caption: '"Steam Vent", New York City.',
    style: { top: "172%", right: "2%", width: '22%' }
  },
  {
    src: 'images/travels/hailbadger.jpg',
    alt: 'large ship coming into port',
    caption: '"Kid and Badger Car Ferry", Luddington, Michigan.',
    style: { top: "204%", right: "1%", width: '26%' }
  },
  {
    src: 'images/travels/yangtze.jpg',
    alt: 'a swimmer in the yangtze river with city in the distance',
    caption: '"Yangtze Swimmer", Wuhan, China.',
    style: { top: "229%", right: "1%", width: '26%' }
  },
  {
    src: 'images/travels/wuhanally.jpg',
    alt: 'an alley in wuhan with buildings in the distance',
    caption: '"Alley in Wuhan", Wuhan, China.',
    style: { top: "255%", right: "1%", width: '26%' }
  },
  {
    src: 'images/travels/jukejoint.jpg',
    alt: 'Juke joint',
    caption: '"Juke Joint 3 AM", Clarksville, Mississippi.',
    style: { top: "289%", right: "2%", width: '25%' }
  },
  {
    src: 'images/travels/panovert2.jpg',
    alt: 'panorama of street with old theater in a vertical orientaion',
    caption: '"Paramount Theater (Palindrome)" Clarksville, Mississippi.',
    style: { top: "315%", right: "2%", width: '25%' }
  },
  {
    src: 'images/travels/wuhanstack.jpg',
    alt: 'big stack of garbage on cart',
    caption: '"Move out day", Hubei University, Wuhan, China.',
    style: { top: "339%", right: "33%", width: '30%' }
  },
  {
    src: 'images/travels/farmwindmills.jpg',
    alt: 'road with farm and windmills in he background',
    caption: 'Three Windmills',
    style: { top: "312%", right: "31%", width: '30%' }
  },
  {
    src: 'images/travels/pano19.jpg',
    alt: 'panorama landscape',
    caption: '"Triple Hay Wheels," Driftless region, Wisconsin.',
    style: { top: "360%", left: "0%", width: '70%' }
  },
  {
    src: 'images/travels/NorthDakota_field.jpg',
    alt: 'Bright green grass and blue sky',
    caption: '"North Dakota Field"',
    style: { top: "385%", left: "0%", width: '26%' }
  },
  {
    src: 'images/travels/windingroad.jpg',
    alt: 'arial view of a long winding road',
    caption: '"Curve Road", Mesa Verde, Colorado.',
    style: { top: "388%", left: "28%", width: '42%' }
  },
  {
    src: 'images/travels/cowvally.jpg',
    alt: 'cows in a valley',
    caption: '"Cattle in Valley", Driftless region, Wisconsin.',
    style: { top: "410%", right: "0%", width: '27%' }
  },
  {
    src: 'images/travels/hudsonriver.jpg',
    alt: 'Hudson river valley',
    caption: '"Windmills in The Berkshires", Williamstown, Massachusetts.',
    style: { top: "415%", left: "27%", width: '43%' }
  },
  {
    src: 'images/travels/longtrain.jpg',
    alt: 'long train by road',
    caption: '"Vanishing Train", Kansas.',
    style: { top: "445%", left: "2%", width: '56%' }
  },
  {
    src: 'images/travels/mirrorswamp.jpg',
    alt: 'swamp with reflection in water',
    caption: '"Bark River", Fort Atkinson, Wisconsin.',
    style: { top: "444%", right: "0%", width: '18%' }
  },
  {
    src: 'images/travels/barkriver.jpg',
    alt: 'reflection in the bark river',
    caption: '"Bark River Flood", Fort Atkinson, Wisconsin.',
    style: { top: "455%", right: "12%", width: '27%' }
  },
  {
    src: 'images/travels/deathvally.jpg',
    alt: 'Dry tree in deathvalley',
    caption: '"Tree", Death Valley, California. ',
    style: { top: "478%", left: "0%", width: '50%' }
  },
  {
    src: 'images/travels/lakeLouise.jpg',
    alt: 'Lake Louise',
    caption: 'Lake Louise',
    style: { top: "510%", right: "10%", width: '30%' }
  },
  {
    src: 'images/travels/lonelyroad.jpg',
    alt: 'long road with green grass and blue sky',
    caption: '"Road", Eastern Colorado.',
    style: { top: "555%", right: "2%", width: '50%' }
  },
  {
    src: 'images/travels/ghostship.jpg',
    alt: 'ship in the distance',
    caption: '"Ghost Ship", Luddington, Michigan.',
    style: { top: "560%", left: "0%", width: '45%' }
  },
  {
    src: 'images/travels/wolfcreek.jpg',
    alt: 'wolf creek valley',
    caption: '"Wolf Creek Pass", Continental divide, Colorado.',
    style: { top: "590%", left: "0%", width: '100%' }
  },
  {
    src: 'images/travels/burnedHouse.jpg',
    alt: 'Burned out house in field',
    caption: '"Burned house"',
    style: { top: "482%", right: "0%", width: '44%' }
  },
]

export default () => {
  const [sliderIsVisible, setSliderIsVisible] = useState(false)
  const [imageNumber, setImageNumber] = useState(0)

  return (
    <>
      <Header title='On the Road'/>
      <Navbar />
      <div className='container'>
        <h1 className='text-center mt-5 mb-5 fs-1 fw-normal '>On the Road</h1>
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
