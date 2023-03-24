import React, {useEffect, useState} from 'react';
import {faqData} from "../../data/data";
import FaqList from "./faq-list";
import {Title, FAQItem} from "./faq.styles";
import {ChangeTitle, ScrollTop} from "../../middleware";
import {UserInfoGetApi} from "../../api/user-info-get-api";

function Faq() {

    ScrollTop()
    ChangeTitle("Frequently asked questions")


    const [user, setUser] = useState([])

    async function getUserInfo() {
        const response = await UserInfoGetApi(4)
        setUser(response.data)
        console.log(response)
    }

    useEffect(() => {
        getUserInfo()
    }, [])

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