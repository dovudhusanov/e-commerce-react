import React from 'react';
import {
    Siderbar,
    Close,
    Header,
    AuthLinks,
    Content,
    CategoryButton,
    Icon,
    IconName,
    DownArrow,
    Cities,
    InnerBtn,
    InnerBtnText, InnerBtnIcon, Split, CategoryList, CategoryLink
} from "./MobileSidear.styles";
import {Link} from "react-router-dom";
import {categoryList} from "../../../data/data";

function MobileSidebar({sModal, setSModal}) {

    const [active, setActive] = React.useState(false);

    return (
        <Siderbar sModal={sModal}>
            <Header>
                <Close onClick={() => setSModal(false)}
                ><i className="fa-solid fa-xmark"></i></Close>
                <AuthLinks onClick={() => setSModal(false)}>
                    <Link to="/login">log in</Link> / <Link to="/signup">sign up</Link>
                </AuthLinks>
            </Header>
            <Content>
                <CategoryButton onClick={() => setActive(prevState => !prevState)}>
                    <Icon>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                             data-v-58853e36="">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M7.5 3C6.67157 3 6 3.67157 6 4.5H18C18 3.67157 17.3284 3 16.5 3H7.5ZM4.5 7.5C4.5 6.67157 5.17157 6 6 6H18C18.8284 6 19.5 6.67157 19.5 7.5H4.5ZM3 11.25C3 10.0074 4.00736 9 5.25 9H18.75C19.9926 9 21 10.0074 21 11.25V18.75C21 19.9926 19.9926 21 18.75 21H5.25C4.00736 21 3 19.9926 3 18.75V11.25ZM5.25 10.5C4.83579 10.5 4.5 10.8358 4.5 11.25V18.75C4.5 19.1642 4.83579 19.5 5.25 19.5H18.75C19.1642 19.5 19.5 19.1642 19.5 18.75V11.25C19.5 10.8358 19.1642 10.5 18.75 10.5H5.25Z"
                                  fill="#007aff"></path>
                        </svg>
                    </Icon>
                    <IconName>Category</IconName>
                    <DownArrow>
                        <i className="fa-regular fa-angle-down"></i>
                    </DownArrow>
                </CategoryButton>
                <CategoryList active={active}>
                    {categoryList.map((list) => (
                        <CategoryLink id={list.id} onClick={() => setSModal(false)}>
                            <InnerBtn>
                                <InnerBtnIcon>
                                    {list.icon}
                                </InnerBtnIcon>
                                <InnerBtnText>
                                    <Link to={`/categories/${list.pathName}`}>{list.categoryName}</Link>
                                </InnerBtnText>
                            </InnerBtn>
                            <Split className="short"/>
                        </CategoryLink>
                    ))}
                </CategoryList>
                <Cities onClick={() => setSModal(false)}>
                    <InnerBtn>
                        <InnerBtnIcon>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-58853e36=""><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.5C10.2402 2.5 9 3.88779 9 5.5H15C15 3.88779 13.7598 2.5 12 2.5ZM7.5 9.5V7H5.5V12.25C5.5 12.6642 5.16421 13 4.75 13C4.33578 13 4 12.6642 4 12.25V6.25V5.5H4.75H7.5C7.5 3.11221 9.35984 1 12 1C14.6402 1 16.5 3.11221 16.5 5.5H19.25H20V6.25V19.75C20 20.9926 18.9926 22 17.75 22H13.25C12.8358 22 12.5 21.6642 12.5 21.25C12.5 20.8358 12.8358 20.5 13.25 20.5H17.75C18.1642 20.5 18.5 20.1642 18.5 19.75V7H16.5V9.5H15V7H9V9.5H7.5ZM12.2738 16.0323C12.5667 15.7395 12.5667 15.2646 12.2738 14.9717C11.9809 14.6788 11.506 14.6788 11.2131 14.9717L5.99548 20.1893L3.78034 17.9742C3.48744 17.6813 3.01257 17.6813 2.71968 17.9741C2.42678 18.267 2.42677 18.7419 2.71966 19.0348L5.46513 21.7803C5.60579 21.921 5.79655 22 5.99547 22C6.19438 22 6.38515 21.921 6.5258 21.7803L12.2738 16.0323Z" fill="#141415"></path>
                            </svg>
                        </InnerBtnIcon>
                        <InnerBtnText>
                            <Link to="/my-orders">My Orders</Link>
                        </InnerBtnText>
                    </InnerBtn>
                    <InnerBtn>
                        <InnerBtnIcon>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-58853e36=""><path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 5.5C5.26935 5.5 3.5 7.30906 3.5 9.5C3.5 10.4282 3.87684 11.4436 4.5487 12.5105C5.21692 13.5716 6.14148 14.6274 7.15127 15.6219C8.55769 17.007 10.0318 18.1879 11.1708 19.1003C11.4734 19.3427 11.7523 19.5661 12 19.7694C12.2477 19.5661 12.5266 19.3427 12.8292 19.1003C13.9682 18.1879 15.4423 17.007 16.8487 15.6219C17.8585 14.6274 18.7831 13.5716 19.4513 12.5105C20.1232 11.4436 20.5 10.4282 20.5 9.5C20.5 7.30898 18.7314 5.5 16.5 5.5C14.3473 5.5 13.0738 7.20226 12.7262 7.74742C12.3889 8.27655 11.6111 8.27653 11.2738 7.74742C10.9262 7.20225 9.65273 5.5 7.5 5.5ZM2 9.5C2 6.49094 4.43065 4 7.5 4C9.73143 4 11.2249 5.30207 12 6.21581C12.7751 5.30207 14.2686 4 16.5 4C19.5702 4 22 6.49102 22 9.5C22 10.8218 21.4706 12.1189 20.7206 13.3098C19.9669 14.5066 18.954 15.6539 17.9013 16.6906C16.4429 18.1269 14.808 19.4384 13.6502 20.3672C13.1649 20.7565 12.7634 21.0786 12.4939 21.3144C12.2111 21.5619 11.7889 21.5619 11.5061 21.3144C11.2366 21.0786 10.8351 20.7565 10.3498 20.3672C9.19201 19.4384 7.55712 18.1269 6.09873 16.6906C5.04602 15.6539 4.03308 14.5066 3.27942 13.3098C2.52941 12.1189 2 10.8218 2 9.5Z" fill="#141415"></path>
                            </svg>
                        </InnerBtnIcon>
                        <InnerBtnText>
                            <Link to="/saved">Saved</Link>
                        </InnerBtnText>
                    </InnerBtn>
                    <Split />
                    <InnerBtn>
                        <InnerBtnIcon>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="#000"
                                 xmlns="http://www.w3.org/2000/svg" className="ui-icon ">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16ZM10.4908 9.36697C10.6002 8.67414 11.1635 8 12 8C12.823 8 13.3815 8.65255 13.5035 9.33344C13.5246 9.75954 13.4341 10.0331 13.3139 10.238C13.1791 10.4678 12.9791 10.661 12.6984 10.8964C12.6531 10.9345 12.6037 10.9746 12.5515 11.017L12.5514 11.017C12.0385 11.4332 11.25 12.073 11.25 13.25C11.25 13.6642 11.5858 14 12 14C12.4142 14 12.75 13.6642 12.75 13.25C12.75 12.8099 12.9721 12.6239 13.5817 12.1133L13.6625 12.0456C13.9628 11.7937 14.3345 11.4627 14.6077 10.997C14.8922 10.5121 15.0443 9.92852 14.9985 9.20281L14.9963 9.16774L14.9908 9.13303C14.8002 7.92587 13.7728 6.5 12 6.5C10.2272 6.5 9.19978 7.92587 9.00918 9.13303C8.94458 9.54217 9.22388 9.92622 9.63303 9.99082C10.0422 10.0554 10.4262 9.77612 10.4908 9.36697Z"
                                      fill="black"></path>
                            </svg>
                        </InnerBtnIcon>
                        <InnerBtnText>
                            <Link to="/faq">FAQ</Link>
                        </InnerBtnText>
                    </InnerBtn>
                    <InnerBtn>
                        <InnerBtnIcon>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="#000"
                                 xmlns="http://www.w3.org/2000/svg" className="ui-icon ">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M5.56066 7H18.4393L12.8839 12.5555C12.3957 13.0436 11.6043 13.0436 11.1161 12.5555L5.56066 7ZM4.5 15.9393V8.06066L8.43934 12L4.5 15.9393ZM5.56066 17H18.4393L14.5 13.0607L13.9445 13.6161C12.8706 14.6901 11.1294 14.6901 10.0555 13.6161L9.5 13.0607L5.56066 17ZM15.5607 12L19.5 15.9393V8.06066L15.5607 12ZM5 5.5C3.89543 5.5 3 6.39543 3 7.5V16.5C3 17.6046 3.89543 18.5 5 18.5H19C20.1046 18.5 21 17.6046 21 16.5V7.5C21 6.39543 20.1046 5.5 19 5.5H5Z"
                                      fill="black"></path>
                            </svg>
                        </InnerBtnIcon>
                        <InnerBtnText>
                            <Link to="https://t.me/apezon" target="_blank">Connect with us</Link>
                        </InnerBtnText>
                    </InnerBtn>
                </Cities>
            </Content>
        </Siderbar>
    );
}

export default MobileSidebar;