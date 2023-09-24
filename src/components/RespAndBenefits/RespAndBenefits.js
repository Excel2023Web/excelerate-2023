import React from "react";
import "./RespAndBenefits.css";
import titleVectorLeft from "../../assets/svg/title_vector_left.svg";
import titleVecotrRight from "../../assets/svg/title__vector_right.svg";
function RespAndBenefits() {
  return (
    <div className="resp__bene__container">
      <div className="responsibilit__container">
        <div className="responsibilit__heading">
          <div className="resp__upper__heading">
            <img src={titleVectorLeft} alt="" />
            <h1>Responsibilities</h1>
            <img src={titleVecotrRight} alt="" />
          </div>
          <h2 className="resp__second__heading">
            Become the face of Excel in your Campus!
          </h2>
        </div>
        <div className="resposibility__points">
          <ul className="resp___points">
            <li>
              Connect your classmates and friends with the innovative and lit
              events that Excel conducts.
            </li>
            <li>
              Promote the posters and links shared to you in your college and
              provide sufficient publicity.
            </li>

            <li>
              Encourage students of your college to participate in Excel and
              join one of the most reputed tech fests around!
            </li>
          </ul>
        </div>
      </div>

      <div className="responsibilit__container">
        <div className="responsibilit__heading">
          <div className="resp__upper__heading">
            <img src={titleVectorLeft} alt="" />
            <h1>Benifits</h1>
            <img src={titleVecotrRight} alt="" />
          </div>
        </div>
        <div className="resposibility__points">
          <ul className="resp___points">
            <li>
              Get the chance to avail cash prizes and rewards of upto 12k!
            </li>
            <li>
              Enrich your communication, leadership, marketing and team skills.
            </li>

            <li>Earn KTU Activity Points through Issued Certificates.</li>
            <li>
              Add Excel Campus Ambassador as a valuable experience to your
              resume!
            </li>
            <li>
              Get discount ticket prices and free entry to selected Excel
              events.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RespAndBenefits;
