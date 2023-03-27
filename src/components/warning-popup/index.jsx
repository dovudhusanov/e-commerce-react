import React from 'react';
import {WarningPopupStyles, WarningPopupCard} from "./warning-popup.styles";
import {Button} from "../index";

function WarningPopup({question, buttonText, btnFunction, setPopup}) {
    return (
        <WarningPopupStyles>
            <WarningPopupCard>
                <span>{question}</span>
                <div>
                    <Button type={"button"} onClick={btnFunction} className={"btn-cancel"}>{buttonText}</Button>
                    <Button type={"button"} onClick={() => setPopup(false)}>Cancel</Button>
                </div>
            </WarningPopupCard>
        </WarningPopupStyles>
    );
}

export default WarningPopup;