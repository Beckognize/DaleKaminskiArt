import Navbar from "../components/navbar";
import Header from "../components/header";
import Footer from "../components/footer";
import Link from "next/link";
import ReactPlayer from "../components/reactplayer";

export default () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="container">
        <h1 className="text-center mt-5 mb-5 fs-1 fw-normal ">Video</h1>
        <div className="blurb text-center">
        <p>In 2014 and 2015, I was made aware of a project entitled Forever Now being 
        curated by the Australian Art Collective, Aphids. The project was a worldwide call for one minute 
        of audio or video to celebrate the 40th anniversary of the famous golden record that Carl Sagan put together 
        for the Voyager spacecraft. Please read more details about Aphids and this project&nbsp; 
        <a href="https://aphids.net" target="_blank" rel="noopener noreferrer">here.</a>&nbsp;
        Space film was juried into the project. During a ceremony at the Mona Foma music festival in Tasmania, all pieces were uploaded to NASA, 
        where they were beamed into outer space.
        </p>
        <br/>
      <h3>Links</h3>
        <p>
        <a href="https://voyager.jpl.nasa.gov/golden-record/" target="_blank" rel="noopener noreferrer">The Golden Record</a><br/>
        <a href="https://carlsagan.com/" target="_blank" rel="noopener noreferrer">Carl Sagan</a>&nbsp;<br/>
        <a href="https://mofo.net.au/" target="_blank" rel="noopener noreferrer">Mona Foma</a>&nbsp;<br/>
        <br/>
        This is a copy of that video that is now over six light-years from Earth. 
        </p> 
        <p>
        A message in a bottle.
        </p>
       </div>
      </div>
      <div className="container-fluid conbox">
        <ReactPlayer url='https://player.vimeo.com/video/711780529?h=d54dcf1738' />
      </div>
      <Footer />
    </>
  );
};
