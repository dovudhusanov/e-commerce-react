import React from 'react';
import {faqData} from "../../data/data";
import FaqList from "./FaqList";
import {Title, FAQItem} from "./FAQ.styled";

function Faq() {
    return (
        <div style={{margin: "50px 0"}}>
            <div className="container">
                <Title>Frequently asked questions</Title>
                <FAQItem>
                    {faqData.map((faq) => (
                        <FaqList key={faq.id} question={faq.question} answer={faq.answer} />
                    ))}
                </FAQItem>
            </div>
        </div>
    );
}

export default Faq;