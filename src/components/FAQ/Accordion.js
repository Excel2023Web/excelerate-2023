import React,{useState} from "react";
import downArrow from "../../assets/svg/downArrow.svg";
import upArrow from "../../assets/svg/upArrow.svg";
 
function Accordion({question,answer}){
    const [show,setShow] = useState(false);
    return (
        <div className={show?"faq__box__back":"faq__box"}>
            <div className="question">
                <h2>{question}</h2>
                <span>
                    <button onClick={()=>setShow(!show)}>
                        {show ? <img src={upArrow} /> : <img src={downArrow} />}
                    </button>
                </span>
            </div>
            <div className="answer"> 
                {show && <div >{answer}</div>}
            </div>
        </div>
    );
}
export default Accordion;