import React, { useEffect } from "react";
import "./Contacts.css";
import { FiLinkedin, FiMail, FiPhoneCall } from "react-icons/fi";
import Aos from "aos";

const ContactCard = () => {
  useEffect(() => {
    Aos.init({ duration: 1100 });
  }, []);
  return (
    <div data-aos="zoom-in" aos-delay="200" className="contact__card_main">
      <img
        src="https://avatars.githubusercontent.com/u/110590339?s=200&v=4"
        className="ctct_image"
        alt=""
      />
      <div className="contact__card_desc_part">
        <div className="name_n_pos_ctct">
          <p className="ctct__name">Mathew Davis</p>
          <p className="ctct__position">Chairperson</p>
        </div>

        <div className="ctct__icons">
          <FiLinkedin className="social__icon_contact" />
          <FiMail className="social__icon_contact" />
          <FiPhoneCall className="social__icon_contact" />
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
