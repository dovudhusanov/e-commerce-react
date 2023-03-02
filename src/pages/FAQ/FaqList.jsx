import React from 'react';
import {FaqAnswer, FaqItemWrapper, FaqQuestion, Arrow} from "./FAQ.styled";

function FaqList({question, answer}) {

    const [active, setActive] = React.useState(false);

    return (
        <>
            <FaqItemWrapper active={active}>
                <FaqQuestion active={active} onClick={() => setActive(!active)}>
                    <span>{question}</span>
                    <Arrow active={active}><i className="fa-solid fa-chevron-down"></i></Arrow>
                </FaqQuestion>
                <FaqAnswer active={active} >{answer}</FaqAnswer>
            </FaqItemWrapper>
        </>
    );
}

export default FaqList;