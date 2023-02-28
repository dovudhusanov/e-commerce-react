import React, {useState} from 'react';
import {Title, FaqItemWrapper, FaqQuestion, FaqAnswer} from "./FAQ.styled";
import {faqData} from "../../data/data";

function Faq() {

    const [active, setActive] = useState(false)

    return (
        <div className="container">
            <Title>Frequently asked questions</Title>

            <FaqItemWrapper>
                {faqData.map((faqItem) => (
                    <>
                        <FaqQuestion key={faqItem.id} active={active} onClick={() => setActive(!active)}>
                            <span>{faqItem.question}</span>
                            <span>{active ? "-" : "+"}</span>
                        </FaqQuestion>
                        <FaqAnswer active={active}>{faqItem.answer}</FaqAnswer>
                    </>
                ))}
            </FaqItemWrapper>
        </div>
    );
}

export default Faq;