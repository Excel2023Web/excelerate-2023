import React from "react";
import "./Contacts.css";
import { FiLinkedin, FiMail, FiPhoneCall } from "react-icons/fi";

const ContactCard = ({ contact }) => {

  return (
    <div data-aos="zoom-in" aos-delay="200" className="contact__card_main">
      <img src={contact.image} className="ctct_image" alt="" />
      <div className="contact__card_desc_part">
        <div className="name_n_pos_ctct">
          <p className="ctct__name">{contact.name}</p>
          <p className="ctct__position">{contact.designation}</p>
        </div>

        <div className="ctct__icons">
          <a href={contact.linkedIn} target="_blank" rel="noreferrer">
            <FiLinkedin className="social__icon_contact" />
          </a>
          <a href={`mailto:${contact.email}`} target="_blank" rel="noreferrer">
            <FiMail className="social__icon_contact" />
          </a>
          <a href={`tel:${contact.phone}`} target="_blank" rel="noreferrer">
            <FiPhoneCall className="social__icon_contact" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
