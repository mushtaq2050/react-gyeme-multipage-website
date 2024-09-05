import React from 'react';
import "./Question.css";
import { FaQuestion, FaPlus, FaMinus } from "react-icons/fa";
import { DATA } from './Questiondata';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

const Question = () => {
  return (
    <div className='container'>
      <div className="question-container">
        <div className="top-text-question">
          <span className='question-svg-container'><FaQuestion/></span>
          <span className='faqs'>FAQs</span>
        </div>

        <div className="faqs-container">
          <Accordion
            className="accordian"
            allowMultipleExpanded={false}
            preExpanded={[]} 
          >
            {DATA.map((item, i) => (
              <AccordionItem className='accordian-item' key={i} uuid={i}>
                <AccordionItemState>
                  {({ expanded }) => (
                    <>
                      <AccordionItemHeading>
                        <AccordionItemButton className="accordian-button">
                          <div className="item-heading">{item.heading}</div>
                          <span className="item-icon">
                            {expanded ? <FaMinus /> : <FaPlus />}
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel className='panel'>
                        <p className="accordiat-detail">{item.detail}</p>
                      </AccordionItemPanel>
                    </>
                  )}
                </AccordionItemState>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Question;
