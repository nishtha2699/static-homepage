import Image from "next/image";
import Header from "./Header";

export default function ChannelManager() {
  const channelManagerArray = [
    {
      name: "Multi Channel Integration",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices eros vel magna dictum, id sollicitudin velit ultrices.",
      img: "/Images/image3.jpg",
    },
    {
      name: "Manage Channels Bookings",
      description:
        "Nam egestas justo at velit dapibus ornare. Nulla in purus eget lectus egestas maximus.",
      img: "/Images/image3.jpg",
    },
  ];
  const channelManagerArray2 = [
    {
      name: "Manage Prices & Inventory",
      description:
        "Vestibulum dignissim tristique sodales. Integer in sem vitae justo aliquam vulputate.",
      img: "/Images/image2.jpg",
    },
    {
      name: "Manage Multiple Hotels",
      description:
        "Suspendisse et tristique nisi. Ut eget commodo felis. Phasellus egestas nisl nec dui aliquet blandit nec lacinia lorem.",
      img: "/Images/image1.jpg",
    },
  ];
  return (
    <div className="main-box-channel">
      <h2 className="text-center font-bold heading-main">Channel Manager</h2>
      <h2 className="text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        malesuada, justo sit amet luctus mattis, metus sem aliquam ligula,
        congue rhoncus mi nibh nec arcu.{" "}
      </h2>
      <a className="hyperlink-text">Read More</a>
      <div className="channel-box flex gap-8 justify-center mt-7">
        <div className="flex flex-col gap-8">
          {channelManagerArray.map((item, index) => {
            return (
              <div key={index} className="shadow-box">
                <img src={item.img}></img>
                <h2 className="manager-heading">{item.name}</h2>
                <p className="manager-description">{item.description}</p>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-8 mt-8">
          {channelManagerArray2.map((item, index) => {
            return (
              <div key={index} className="shadow-box">
                <img src={item.img}></img>
                <h2 className="manager-heading">{item.name}</h2>
                <p className="manager-description">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
