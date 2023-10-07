import React, { useEffect } from "react";
import "./Contacts.css";
import titleVectorLeft from "../../assets/svg/title_vector_left.svg";
import titleVecotrRight from "../../assets/svg/title__vector_right.svg";
import ContactCard from "./ContactCard";
import Aos from "aos";
import { contactsData } from "../../data/contacts";
const Contacts = () => {
  useEffect(() => {
    Aos.init({ duration: 700 });
  },[]);
  return (
    <div className="contacts__main" id="contacts">
      <div data-aos="zoom-in" aos-delay="200" className="resp__upper__heading">
        <img src={titleVectorLeft} alt="" />
        <h1>CONTACTS</h1>
        <img src={titleVecotrRight} alt="" />
      </div>
      <div className="contacts__cards_container">
        {contactsData.map((contact,index)=>{
          return (
            <ContactCard key={index} contact={contact}/>
          )
        })}
      </div>
    </div>
  );
};

export default Contacts;
