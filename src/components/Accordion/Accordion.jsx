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
        <div className="faqimg">
          <img className="faqimgimg" alt="" src={faqimg} />
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    question: "What is a Campus Ambassador(CA)?",
    answer:
      "A Campus Ambassador of Excel 2023 represents Excel 2023 at their respective colleges and is responsible for sharing vital information regarding Excel 2023 within their campus.",
  },
  {
    question: "Who can become a Campus Ambassador?",
    answer:
      "Any student currently enrolled in a programme at a college with a valid college ID card is eligible to be the Campus Ambassador of Excel 2023 at their campus.",
  },
  {
    question: "Where do I register?",
    answer:
      'Register at the top of the website <a href="https://ca.excelmec.org/" target="_blank" class="content-link">ca.excelmec.org</a> by clicking on the register button and filling in your details.',
  },
];
export default Accordion;
