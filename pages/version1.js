
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
