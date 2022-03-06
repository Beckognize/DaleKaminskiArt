
import Navbar from '../components/navbar'
import Header from '../components/header'

export default () => {
    return (
        <>

<Header/>
<Navbar/>
<body>
    <div className = 'container-fluid'>
    <div className ='photobox'>
        {/*
        <img className= 'jump-image'style={{ top: "10%", right: "20%",}} src='images/DawnV_1.jpg' alt='woman jumping'></img>
        <img className= 'small-image'style={{ top: "36%", right: "37%" }} src='images/Bee_polen_flower.jpg' alt='flower and bee'></img>
        <img className= 'small-image'style={{ top: "36%", left: "50%" }} src='images/lotus.jpg' alt='woman jumping'></img>
        <img className= 'med-image'style={{ top: "90%", left: "20%" }} src='images/blackBird_contrail.jpg' alt='airplane'></img>
        <img className= 'small-image'style={{ top: "15%", left: "25%" }} src='images/Hail_Badger.jpg' alt='woman jumping'></img>
        <img className= 'flag-image'style={{ top: "10%", left: "15%" }} src='images/Mainstreet_flags_america.jpg' alt='woman jumping'></img>
        <img className= 'med-image'style={{ top: "65%", right: "33%" }} src='images/reeds_and_Pond.jpg' alt='woman jumping'></img>
        <img className= 'med-image'style={{ top: "65%", right: "30%" }} src='images/windmills_sky_atmosphere.jpg' alt='woman jumping'></img>
        <img className= 'medsmall-image'style={{ top: "65%", right: "50%" }} src='images/three ladies_on bench.jpg' alt='woman jumping'></img>
        <img className= 'med-image'style={{ top: "65%", right: "6%" }} src='images/Wuhan_rags and riches.jpg' alt='woman jumping'></img>
        */}
        <img style={{ top: "10%", right: "18%", width: '15%' }} src='images/Jumpthumb.jpg' alt='woman jumping'></img>
        <img style={{ top: "30%", right: "35%", width: '7%' }} src='images/bflowerthumb.jpg' alt='flower and bee'></img>
        <img style={{ top: "30%", left: "50%", width: '7%' }} src='images/lotusthumb.jpg' alt='woman jumping'></img>
        <img style={{ top: "15%", left: "25%", width: '7%' }} src='images/Hailbadgerthumb.jpg' alt='woman jumping'></img>
        <img style={{ top: "10%", left: "17%", width: '7%' }} src='images/flagsthumb.jpg' alt='woman jumping'></img>
        <img style={{ top: "30%", left: "4%", width: '10%' }} src='images/ladiesthumb.jpg' alt='woman jumping'></img>
        <img style={{ top: "50%", left: "16%", width: '13%' }} src='images/blackBirdthumb.jpg' alt='airplane'></img>
        <img style={{ top: "38%", left: "30%", width: '13%' }} src='images/windmillsthumb.jpg' alt='woman jumping'></img> 
        <img style={{ top: "55%", right: "28%", width: '13%' }} src='images/wuhanthumb.jpg' alt='woman jumping'></img>
        <img style={{ top: "40%", right: "3%", width: '11%' }} src='images/reedsthumb.jpg' alt='woman jumping'></img>   
    </div>
    </div>
</body>
</>
);
}
