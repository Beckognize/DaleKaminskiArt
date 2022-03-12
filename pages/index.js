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
        <img style={{ top: "15%", right: "18%", width: '15%' }} src='images/DawnV_1.jpg' alt='woman jumping'></img>
        <img style={{ top: "40%", right: "35%", width: '7%' }} src='images/Bee_polen_flower.jpg' alt='flower and bee'></img>
        <img style={{ top: "40%", left: "50%", width: '7%' }} src='images/lotus.jpg' alt='woman jumping'></img>
        <img style={{ top: "20%", left: "25%", width: '16%' }} src='images/Hail_Badger.jpg' alt='woman jumping'></img>
        <img style={{ top: "8%", left: "14%", width: '16%' }} src='images/MainStreet_flags_america.jpg' alt='woman jumping'></img>
        <img style={{ top: "45%", left: "2%", width: '20%' }} src='images/three ladies_on bench.jpg' alt='woman jumping'></img>
        <img style={{ top: "70%", left: "16%", width: '13%' }} src='images/blackBird_contrail.jpg' alt='airplane'></img>
        <img style={{ top: "53%", left: "40%", width: '20%' }} src='images/windmills_sky_atmosphere.jpg' alt='woman jumping'></img> 
        <img style={{ top: "73%", right: "28%", width: '13%' }} src='images/Wuhan_rags and riches.jpg' alt='woman jumping'></img>
        <img style={{ top: "50%", right: "3%", width: '11%' }} src='images/reeds_and_Pond.jpg' alt='woman jumping'></img>   
    </div>
    </div>
</body>
</>
);
}
