import React from "react";
import {
  Navbar,
  Landing,
  Contacts,
  Footer,
  RespAndBenefits,
  WhatsExcel,
  Reward,
  Accordion,
  Partners,
} from "../../components";
const MainPage = () => {
  return (
    <div className="main__container">
      <Navbar />
      <Landing />
      <WhatsExcel />
      <RespAndBenefits />
      <Reward />
      <Accordion />
      <Partners />
      <Contacts />
      <Footer />
    </div>
  );
};

export default MainPage;
