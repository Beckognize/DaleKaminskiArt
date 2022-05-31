import Navbar from '../components/navbar'
import Header from '../components/header'
import Footer from '../components/footer'

export default () => {
  return (
    <>
      <Header title='Biography'/>
      <Navbar />
      <div className='container words'>
        <h1>Biography</h1>
        <br />
        <p>
          Hello.   Thank you for stopping by my website. My name is Dale Kaminski, and I am an artist currently working with photographic images.
        </p>
        <p>
          I started my life in the midwest of the United States. In my 20' and 30's, I worked in the music business as a touring musician and roadie for the Violent Femmes. This gig took me on journeys all over the world. Highlights include a show at the North Pole and playing at a Woodstock reunion for 350,000 people.
        </p>
        <p>
          In 2012 I earned an MFA degree from the University of Wisconsin- Madison. My thesis was a series of images produced in collaboration with a man going through the final agonizing stages of cystic fibrosis. Every day, we took a photograph as he waited for the call summoning him to the hospital for his double lung transplant.
        </p>
        <p>
          During my time as a grad student, I began to once again do Zazen Sitting practice which has been very enlightening. :) Zazen practice has opened doors of perception that I see reflected in my photographic work. Sometimes this is present very directly with the use of Koan and capping phrases added directly to the image but also in a more nuanced manner that is noticeable and pleasing when a simple, clear formal composition is present. I try and see the world openly and capture images in the present moment.
        </p>
        <p>
          I have spent time as a teacher and had the unique and excellent experience of teaching a course in cell phone photography in China. I also worked for several years at a University as a lecturer and found the experience very gratifying. I have taught students that have become my friends. This is something I value tremendously.
        </p>
        <p>
          Today, I live a somewhat nomadic life; playing music, sitting zazen, visiting friends, and taking pictures.
        </p>
        <p>
          Other projects of note include:
          The PakaPaka Lightshow, in which my associate and I have built software that controls video in real-time for music, dance, and theater performances.
          I also worked on a project called Space Film, which is a 1-minute video that was sent into space by NASA in 2015.
        </p>
        <p>
          It was an honor to be part of the Forever Now project. This project was created by the <a href="https://aphids.net" target="_blank" rel="noopener noreferrer">Aphids.net</a> artist collective based in Melbourne, Australia.
        </p>
        <p>
          Please contact me with questions, concerns, or just a friendly hello. You can email me at <a href="mailto:info@dalekimages.com">info@dalekimages.com</a>
        </p>
        <p>
          Dale
        </p>
      </div>
      <Footer />
    </>
  );
}