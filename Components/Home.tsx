import Image from "next/image";
import Header from "./Header";

export default function HomePage() {
  return (
    <div>
      <section className="banner-section">
        <Header></Header>
        <div className="container-fluid">
          <div className="right_text title-text">
            <h3>Free Open Source</h3>
            <p> Reservation And Booking System For Hotels</p>
            <h2 className="left-side">
              Take your hotel business online with the help of us
            </h2>
            <div className="flex gap-2 mt-5 mb-10">
            <button className="select-btn">View Demo</button>
            <button className="select-btn1">Download</button>
            </div>
          </div>
        </div>
      </section>
      <div className="featured-section">
        <h2 className="text-style">We got featured!</h2>
        <h2 className="text-style1 mt-3">
          We got mentioned and listed on various platforms You can find us here.
        </h2>
        <div className="flex justify-around">
          {/* <div> */}
            <img width="200px" height="150px" alt="" src="/Images/capterra.png"></img>
          {/* </div>
          <div> */}
          <img width="200px" height="150px" alt="" src="/Images/download.png"></img>
          {/* </div>
          <div> */}
          <img width="200px" height="150px" alt="" src="/Images/software.png"></img>
          {/* </div>
          <div> */}
          <img width="200px" height="150px" alt="" src="/Images/techjockey1.png"></img>
          {/* </div> */}
        </div>
      </div>
      <section className="users">
        <div className="flex justify-around">
          <div className="back-circle">
            <div>
              <h2 className="circle-text"> 25,000+</h2>
              <h2 className="text-center">Downloads</h2>
            </div>
          </div>
          <div className="back-circle1">
            <div>
              <h2 className="circle-text"> 120+ </h2>
              <h2 className="text-center">Countries</h2>
            </div>
          </div>
          <div className="back-circle2">
            <div>
              <h2 className="circle-text"> 10,000+ </h2>
              <h2 className="text-center">Users</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
