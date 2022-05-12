import Navbar from "../components/navbar";
import Header from "../components/header";
import Link from "next/link";
export default () => {
  return (
    <>
      <Header />
      <Navbar />
      <body>
        <div className="container-fluid">
          <div className="conbox">
            <div className="wordbox">
              <div>
                <h1>Contact me</h1>
                <p className="a">
                  For inquiries, including the purchase of prints, please email{" "}
                  <a href="mailto:info@dalekimages.com">info@dalekimages.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};
