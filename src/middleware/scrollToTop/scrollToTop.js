import React, {useEffect, useState} from "react";
import "./scrollToTop.css"

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <div className="scroll__top-top-parent">
            <button
                type={"button"}
                onClick={scrollToTop}
                style={isVisible ? {bottom: 10, position: "relative"} : {bottom: "-60px", position: "relative"}}
                className={"scrollToTopBTn"}
            >
                <i className="fa-solid fa-angle-up"></i>
            </button>
        </div>
    );
}

export default ScrollToTop;
