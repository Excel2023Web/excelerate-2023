import React from "react";
import "./Contacts.css";
import titleVectorLeft from "../../assets/svg/title_vector_left.svg";
import titleVecotrRight from "../../assets/svg/title__vector_right.svg";
import ContactCard from "./ContactCard";
const Contacts = () => {
  return (
    <div className="contacts__main">
      <div className="section__title">
        <img src={titleVectorLeft} alt="" />
        <h1>CONTACTS</h1>
        <img src={titleVecotrRight} alt="" />
      </div>
      <div className="contacts__cards_container">
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
      </div>
    </div>
  );
};

export default Contacts;
