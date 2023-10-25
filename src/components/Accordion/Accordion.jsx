import React, { useState } from "react";
import "./Accordion.css";
import titleVectorLeft from "../../assets/svg/title_vector_left.svg";
import titleVecotrRight from "../../assets/svg/title__vector_right.svg";
import down from "../../assets/svg/down_arrow.svg";
import up from "../../assets/svg/up_arrow.svg";
import faqimg from "../../assets/png/faq.png";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="faq__section" id="faq">
      <div data-aos="zoom-in" aos-delay="200" className="resp__upper__heading">
        <img src={titleVectorLeft} alt="" />
        <h1>FAQ</h1>
        <img src={titleVecotrRight} alt="" />
      </div>
      <div className="wrapper">
        <div className="accordion">
          {data.map((item, i) => (
            <div
              data-aos="zoom-in"
              aos-delay="150"
              className={`item aos-init aos-animate ${
                selected === i ? "selected" : ""
              }`}
            >
              <div className="title" onClick={() => toggle(i)}>
                <h2>{item.question}</h2>
                <span>
                  {selected === i ? (
                    <img src={up} alt="" />
                  ) : (
                    <img src={down} alt="" />
                  )}
                </span>
              </div>
              <div className={selected === i ? "content show" : "content"}>
                <div dangerouslySetInnerHTML={{ __html: item.answer }} />
              </div>
            </div>
          ))}
        </div>
          <img className="faqimgimg" alt="" src={faqimg} />
      </div>
    </div>
  );
};

const data = [
  {
    question: "What is the role of a Campus Ambassador?",
    answer:
      "As a Campus Ambassador, your primary role is to represent the tech fest on your campus. This involves promoting the event, engaging with your peers, and encouraging participation.",
  },
  {
    question: "How do I become a Campus Ambassador?",
    answer:
      "Typically, you can apply to become a Campus Ambassador by filling out an application provided by the tech fest organizing team.",
  },
  {
    question: "What are the responsibilities of a Campus Ambassador?",
    answer:
      "Responsibilities may include spreading awareness about the event, sharing content, organizing promotional activities, and assisting in logistics.",
  },
  {
    question: "Do Campus Ambassadors have specific targets or goals to meet?",
    answer:
      "Yes, often Campus Ambassadors are given targets such as a minimum number of registrations, event attendees, or social media engagement.",
  },
  {
    question: "What benefits do Campus Ambassadors receive?",
    answer:
      "Benefits can include free or discounted event tickets, exclusive merchandise, networking opportunities, and recognition on the tech fest's official channels.",
  },
  {
    question: "What kind of content should I share with my peers?",
    answer:
      "You should share information about the tech fest, its events, speakers, and any other exciting content related to the event.",
  },
  {
    question:
      "What should I do if someone is interested participating in the tech fest?",
    answer:
      " Encourage them to register, provide guidance on the registration process, and offer any necessary support or information they might need.",
  },
  {
    question:
      "Can non-tech students become Campus Ambassadors for a tech fest?",
    answer:
      "Yes, tech fests often welcome students from various backgrounds to become Campus Ambassadors, as their diversity can help in reaching a wider audience.",
  },
  {
    question:
      "How can I stay updated about the tech fest's latest developments and updates?",
    answer:
      "The organizing team will usually provide you with regular updates and you can also follow their official communication channels for the latest information.",
  },
];
export default Accordion;
