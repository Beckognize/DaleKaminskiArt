import { useState } from 'react'
import Navbar from '../components/navbar'
import Header from '../components/header'
import Slider from '../components/slider'

const myImages = [
  
  {
    src:'images/people/studentshay.jpg',
    alt:'students in classroom',
    style:{ top: "0%", left: "0%", width: '25%' }
  },
  {
    src:'images/people/studentshadow.jpg',
    alt:'group of people with umbrella',
    style:{ top: "0%", left: "29%", width: '25%' }
  },
  {
    src: 'images/people/Dawn1.jpg',
    alt: 'woman jumping',
    style: { top: "0%", right: "30%", width: '15%' }
  },
  {
    src:'images/people/Dawn2.jpg' ,
    alt:'woman jumping',
    style: { top: "0%", right: "15%", width: '15%' }
  },
  {
    src:'images/people/Dawn3.jpg' ,
    alt:'woman jumping',
    style: { top: "0%", right: "0%", width: '15%' }
  },
  {
    src:'images/people/sitinshit.jpg',
    alt:'people sitting by river',
    style:{ top: "26%", left: "0%", width: '13%' }
  },
  {
    src:'images/people/3peopleriver.jpg',
    alt:'three people in river',
    style:{ top: "26%", left: "15%", width: '15%' }
  },
  {
    src:'images/people/boybent.jpg',
    alt:'boy in sunset bent',
    style:{ top: "26%", left: "33%", width: '16%' }
  },
  {
    src:'images/people/korinji.jpg',
    alt:'woman smiling',
    style:{ top: "27%", right: "36%", width: '14%' }
  },
  {
    src:'images/people/mask.jpg',
    alt:'woman in mask',
    style:{top: "30%", right: "23%", width: '11%' }
  },
  {
    src:'images/people/3ladies.jpg',
    alt:'three old ladies on bench',
    style:{top: "27%", right: "0%", width: '20%' }
  },
  {
    src:'images/people/vootvicjake.jpg',
    alt:'three men with wig',         
    style:{top: "43%", right: "2%", width: '18%' } 
  },
  {
    src:'images/people/conriver.jpg',
    alt:'people in river',
    style:{top: "54%", left: "0%", width: '32%' }
  },
  {
    src:'images/people/waving.jpg',
    alt:'people waving on lighthouse',
    style:{top: "58%", left: "34%", width: '15%' }
  },
  {
    src:'images/people/gramps.jpg',
    alt:'grandfather and child',
    style:{top: "52%", right: "37%", width: '12%' }
  },
  {
    src:'images/people/kidjump.jpg',
    alt:'kid jumping',
    style:{ top: "53%", right: "0%", width: '20%' }
  },
  {
    src:'images/people/studentjump.jpg',
    alt:'student jumping',
    style:{ top: "53%", right: "21%", width: '14%' }
  },
  {
    src:'images/people/monk2.jpg',
    alt:'monk standing',
    style:{ top: "75%", left: "26%", width: '13%' }
  },
  {
    src:'images/people/monkleans.jpg',
    alt:'monk leaning',
    style:{ top: "75%", left: "13%", width: '13%' }
  },
  {
    src:'images/people/monksitsporch.jpg',
    alt:'monk siting',
    style:{ top: "75%", left: "0%", width: '13%' }
  },
  {
    src:'images/people/Lambeau.jpg',
    alt:'lambeau stadium',
    style:{ top: "73%", left: "40%", width: '36%' }
  },
  {
    src:'images/people/double.jpg',
    alt:'man in truck window',
    style:{ top: "80%", right:"0%", width: '21%' }
  },
]

            
            
            
        

export default () => {
  const [ sliderIsVisible, setSliderIsVisible ] = useState(false)
  const [ currentImage, setCurrentImage ] = useState()

  return (
    <>
      <Header />
      <Navbar />
      <div className='container-fluid'>
        <h1 className='text-center mt-5 mb-5 fs-1 fw-normal '>PEOPLE</h1>
        <div className='photobox'>
          {myImages.map((image, i) =>
            <img 
              src={image.src}
              alt={image.alt}
              style={image.style}
              onClick={() => {
                setCurrentImage(image)
                setSliderIsVisible(true)
              }}
            />
          )}
          {/*
            <img style={{ top: "0%", right: "34%", width: '15%' }} src='images/people/Dawn1.jpg' alt='woman jumping'></img>
            <img style={{ top: "0%", right: "17%", width: '15%' }} src='images/people/Dawn2.jpg' alt='woman jumping'></img>
            <img style={{ top: "0%", right: "0%", width: '15%' }} src='images/people/Dawn3.jpg' alt='woman jumping'></img>
            <img style={{ top: "0%", left: "0%", width: '25%' }} src='images/people/studentshadow.jpg' alt='group of people with umbrella'></img>
            <img style={{ top: "0%", left: "29%", width: '18%' }} src='images/people/3ladies.jpg' alt='three old ladies on bench'></img>
            <img style={{ top: "16%", left: "27%", width: '18%' }} src='images/people/vootvicjake.jpg' alt='three men with wig'></img>
            
            <img style={{ top: "26%", left: "0%", width: '13%' }} src='images/people/sitinshit.jpg' alt='people sitting by river'></img>
            <img style={{ top: "26%", left: "15%", width: '15%' }} src='images/people/3peopleriver.jpg' alt='three people in river'></img>
            <img style={{ top: "26%", left: "32%", width: '16%' }} src='images/people/boybent.jpg' alt='boy in sunset bent'></img>
            <img style={{ top: "52%", left: "0%", width: '31%' }} src='images/people/conriver.jpg' alt='people in river'></img>
            <img style={{ top: "45%", left: "0%", width: '15%' }} src='images/people/waving.jpg' alt='people waving on lighthouse'></img>
            
            <img style={{ top: "21%", left: "51%", width: '27%' }} src='images/people/studentshay.jpg' alt='students in classroom'></img>
            <img style={{ top: "20%", right: "0%", width: '17%' }} src='images/people/korinji.jpg' alt='woman smiling'></img>
            <img style={{ top: "38%", left: "51%", width: '11%' }} src='images/people/mask.jpg' alt='woman in mask'></img> 
            
            
            <img style={{ top: "36%", left: "66%", width: '12%' }} src='images/people/double.jpg' alt='man in truck window'></img>
            <img style={{ top: "65%", left: "6%", width: '13%' }} src='images/people/gramps.jpg' alt='grandfather and child'></img>
            <img style={{ top: "59%", right: "0%", width: '20%' }} src='images/people/kidjump.jpg' alt='kid jumping'></img> 
            <img style={{ top: "59%", right: "22%", width: '12%' }} src='images/people/studentjump.jpg' alt='student jumping'></img>
            
            <img style={{ top: "65%", right: "39%", width: '40%' }} src='images/people/Lambeau.jpg' alt='lambeau stadium'></img>
            
            <img style={{ top: "44%", right: "0%", width: '11%' }} src='images/people/monk2.jpg' alt='monk standing'></img> 
            <img style={{ top: "44%", right: "12%", width: '11%' }} src='images/people/monkleans.jpg' alt='monk leaning'></img> 
            <img style={{ top: "44%", right: "24%", width: '11%' }} src='images/people/monksitsporch.jpg' alt='monk siting'></img>
            */}
        </div>
      </div>
      <Slider
        visible={sliderIsVisible}
        exit={() => setSliderIsVisible(false)}
        images={myImages}
          currentImage={currentImage}
      />
    </>
  );
}
