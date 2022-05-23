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
        <p className="blurb text-center">This is a video I made which was sent into space. </p>
      </div>
      <div className="container-fluid">
      <ReactPlayer url='https://player.vimeo.com/video/711780529?h=d54dcf1738'/>
      </div>
      <Footer />
    </>
  );
};
