import Navbar from '../components/navbar'
import Header from '../components/header'
import Link from 'next/link'
export default () => {
    return (
        <>

<Header/>
<Navbar/>
<body>
   <div className = 'container-fluid'>
    <div className ='photobox'>
        <Link href='/people'><a><img style={{ top: "8%", right: "10%", width: '18%' }} src='images/DawnV_1.jpg' alt='woman jumping'></img></a></Link>
        <Link href='/flower'><a><img style={{ top: "25%", left: "52%", width: '18%' }} src='images/lotus.jpg' alt='lotus flower'></img></a></Link>
        <Link href='/travels'><a><img style={{ top: "15%", left: "22%", width: '18%' }} src='images/Hail_Badger.jpg' alt='large ship'></img></a></Link>
        <Link href='/america'><a><img style={{ top: "3%", left: "10%", width: '20%' }} src='images/MainStreet_flags_america.jpg' alt='pickup truck with many american flags'></img></a></Link>
        <Link href='/selfportrait'><a><img style={{ top: "40%", left: "2%", width: '18%' }} src='images/shiny_bug_selfPortrait-6.jpg' alt='reflection in shiny beatle shell'></img></a></Link>
        <Link href='/graphic'><a><img style={{ top: "65%", left: "16%", width: '17%' }} src='images/blackBird_contrail.jpg' alt='black bird sky and airplane contrail'></img></a></Link>
        <Link href='/topographics'><a><img style={{ top: "44%", left: "40%", width: '28%' }} src='images/windmills_sky_atmosphere.jpg' alt='windmills and clouds'></img></a></Link>
        <Link href='/travels'><a><img style={{ top: "68%", right: "28%", width: '20%' }} src='images/Wuhan_rags and riches.jpg' alt='alley in Wuhan'></img></a></Link>
        <Link href='/art'><a><img style={{ top: "45%", right: "3%", width: '15%' }} src='images/motel.jpg' alt='motel blurred'></img></a></Link>   
    </div>
    </div>
</body>
</>
);
}
