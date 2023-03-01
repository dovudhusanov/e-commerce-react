import React from 'react';
import {FaqAnswer, FaqItemWrapper, FaqQuestion, Title} from "./FAQ.styled";

function FaqList({question, answer}) {

    const [active, setActive] = React.useState(false);

    return (
        <>
            <FaqItemWrapper active={active}>
                <FaqQuestion active={active} onClick={() => setActive(!active)}>
                    <span>{question}</span>
                    <span>{active ? "-" : "+"}</span>
                </FaqQuestion>
                <FaqAnswer active={active} >{answer}</FaqAnswer>
            </FaqItemWrapper>
        </>
    );
}

export default FaqList;