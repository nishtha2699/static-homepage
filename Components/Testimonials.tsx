export default function Testimonials() {
  const testmonialsArray = [
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices eros vel magna dictum, id sollicitudin velit ultrices.",
      name: "John Doe",
      designation: "Marketing Head",
    },
    {
      description:
        " Nam egestas justo at velit dapibus ornare. Nulla in purus eget lectus egestas maximus.",
      name: "Jack Ryan",
      designation: "Web Designer",
    },
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices eros vel magna dictum, id sollicitudin velit ultrices.",
      name: "Jenna Thomas",
      designation: "Business Developer",
    },
  ];
  return (
    <div className="main-box-channel">
      <h2 className="text-center font-bold heading-main">Testimonials</h2>
      <h2 className="text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        malesuada, justo sit amet luctus mattis, metus sem aliquam ligula,
        congue rhoncus mi nibh nec arcu.{" "}
      </h2>
      <a className="hyperlink-text">Read More</a>
      <div className="testmonial-box flex gap-20 justify-center mt-10">
        {testmonialsArray.map((item,index) => {
          return (
            <div key={index} className="testimonials-box">
              <div className="profile-image"></div>
              <p className="manager-description">
                {item.description}
              </p>
              <h2 className="manager-heading mt-11 ml-5">{item.name}</h2>
              <h6 className="ml-5 designation">{item.designation}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
}
