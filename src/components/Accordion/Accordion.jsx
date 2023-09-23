import React from 'react'
import { useState } from 'react';
import "./Accordion.css";
import titleVectorLeft from "../../assets/svg/title_vector_left.svg";
import titleVecotrRight from "../../assets/svg/title__vector_right.svg";
import down from "../../assets/svg/down_arrow.svg";
import up from "../../assets/svg/up_arrow.svg";




const Accordion = () => {

    const [selected, setSelected] = useState(null)
    const toggle = (i) => {
        if(selected === i){
            return setSelected(null)
        }

        setSelected(i)
    }


  return (
    <div className="faq__section">
      <div className="section__title">
            <img src={titleVectorLeft} alt="" />
                <h1>
                FAQ 
                </h1>
            <img src={titleVecotrRight} alt="" />
        </div>
                <div className='wrapper'>
                    <div className="accordion">
                         {data.map((item,i) => (
                            <div className="item">
                                <div className="title" onClick={()=> toggle(i)}>
                                    <h2>{item.question}</h2>
                                    <span>{selected === i?  <img src={up} alt="" /> :  <img src={down} alt="" />}</span>
                                </div>
                             <div className={selected === i? 'content show' : 'content'}>{item.answer}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        
    
  ) 
}

const data = [
    {
        question : 'What is excel?',
        answer :
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolorum suscipit? Cum beatae corrupti ipsum eos reiciendis optio atque enim sapiente commodi illum unde incidunt est, alias consequatur nihil magni. Laudantium alias ab adipisci at, aliquam mollitia molestiae non magnam optio illum. Corrupti laudantium voluptatem excepturi, laborum sapiente quos ratione.'
    },
    {
        question : 'What is excel?',
        answer :
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolorum suscipit? Cum beatae corrupti ipsum eos reiciendis optio atque enim sapiente commodi illum unde incidunt est, alias consequatur nihil magni. Laudantium alias ab adipisci at, aliquam mollitia molestiae non magnam optio illum. Corrupti laudantium voluptatem excepturi, laborum sapiente quos ratione.'
    },
    {
        question : 'What is excel?',
        answer :
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolorum suscipit? Cum beatae corrupti ipsum eos reiciendis optio atque enim sapiente commodi illum unde incidunt est, alias consequatur nihil magni. Laudantium alias ab adipisci at, aliquam mollitia molestiae non magnam optio illum. Corrupti laudantium voluptatem excepturi, laborum sapiente quos ratione.'
    },
    {
        question : 'What is excel?',
        answer :
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolorum suscipit? Cum beatae corrupti ipsum eos reiciendis optio atque enim sapiente commodi illum unde incidunt est, alias consequatur nihil magni. Laudantium alias ab adipisci at, aliquam mollitia molestiae non magnam optio illum. Corrupti laudantium voluptatem excepturi, laborum sapiente quos ratione.'
    }
]

export default Accordion