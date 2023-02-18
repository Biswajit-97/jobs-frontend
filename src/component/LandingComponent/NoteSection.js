import React from "react";
import "../../styles/LandingComponent.css"

function NoteSection() {
  return (
    <div className="NoteDiv">
      <h3 className="highlight">Why JOBS is right for you</h3>
      <div className="contentContainer">
        <div className="left">
          <h3>🎯 Shared values matter. Find them more easily.</h3>
          <p className="paraone">
            Comprehensive behavioral tests make it easier to understand why a
            talent is a good fit for your organization. They also ensure your
            future employee’s happiness and their continued engagement with your
            mission.
          </p>
          <p className="paratwo">
            ✓ &nbsp; &nbsp; Find talent with shared values quicker and easier.
          </p>
          <p className="paratwo">
            ✓ &nbsp; &nbsp; Increase your chances of hiring the right talent for
          </p>
          <p className="paratwo">✓ &nbsp; &nbsp; Lower your turnover rate.</p>
          <p className="paraone" style={{ marginTop: "26px" }}>
            Our advanced data modeling using artificial intelligence has been
            built to save you time and focus your efforts on finding the best
            candidates for the roles you need.
          </p>
        </div>
        <div className="right">
          <img
            className=" imgOne"
            src="https://cdn.supertalent.io/static/media/testInstructions-b5de515ae41244ad-946.png"
            alt=""
          />
          <img
            className=" imgTwo"
            src="https://res.cloudinary.com/ddnzqpnvg/image/upload/v1671301783/testResult-ef805f586b297a48-1125_vtpp3j.png"
            alt=""
          />
          <img
            className=" imgThree"
            src="https://cdn.supertalent.io/static/media/test2-01f6c7ee70f1b31d-946.png"
            alt=""
          />
        </div>
      </div>
      <div className="joining">
        <h4 className="text">
          Interested? Create your profile in less than two minutes and start
          hiring right away!
        </h4>
        <button className="joinbtn">Getting Started</button>
      </div>
    </div>
  );
}

export default NoteSection;
