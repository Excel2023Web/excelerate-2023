import React,{useState} from "react";
import "./FAQ.css";

import titleVectorRight from "../../assets/svg/title__vector_right.svg";
import titleVectorLeft from "../../assets/svg/title_vector_left.svg";
import businessWoman from "../../assets/svg/businessWoman.svg";


import Accordion from "./Accordion";
import { faqQues } from "./faqQues";


function FAQ(){
    const [data,setData] = useState(faqQues);
    
    return(
        <div className="FAQ__main">
            <div className="section__title">
                <img src={titleVectorLeft} alt="" />
                <h1>FAQ</h1>
                <img src={titleVectorRight} alt="" />
            </div>
            <div className="faq__content">
                <div className="faq__left">
                    {data.map((item)=>{
                        const {id,question,answer} = item;
                        return(
                            <Accordion key={id} question={question} answer={answer}/>
                        );
                    })}
                </div>
                <div className="faq__image">
                    <img src={businessWoman} alt="" /> 
                </div>
            </div>
        </div>
    );
}

export default FAQ;