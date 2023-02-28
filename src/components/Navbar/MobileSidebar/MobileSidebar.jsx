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
    Split, CategoryList, CategoryLink
} from "./MobileSidear.styles";
import {Link} from "react-router-dom";
import {categoryList} from "../../../data/data";
import MobileInnerBtn from "./MobileInnerBtn/MobileInnerBtn";
import {CategoryIcon, ContactUs, FAQ, MyOrder, Whishlist} from "../../../assets/icons";

function MobileSidebar({sModal, setSModal}) {

    const [active, setActive] = React.useState(false);

    return (
        <Siderbar sModal={sModal}>
            <Header>
                <Close onClick={() => setSModal(false)}><i className="fa-solid fa-xmark"></i></Close>
                <AuthLinks onClick={() => setSModal(false)}>
                    <Link to="/login">log in</Link> / <Link to="/signup">sign up</Link>
                </AuthLinks>
            </Header>
            <Content>
                <CategoryButton onClick={() => setActive(prevState => !prevState)}>
                    <Icon><CategoryIcon /></Icon>
                    <IconName>Category</IconName>
                    <DownArrow><i className="fa-regular fa-angle-down"></i></DownArrow>
                </CategoryButton>
                <CategoryList active={active}>
                    {categoryList.map((list) => (
                        <CategoryLink id={list.id} onClick={() => setSModal(false)}>
                            <MobileInnerBtn icon={list.icon} link={`/categories/${list.pathName}`} title={list.categoryName}/>
                            <Split className="short"/>
                        </CategoryLink>
                    ))}
                </CategoryList>
                <Cities onClick={() => setSModal(false)}>
                    <MobileInnerBtn icon={<MyOrder />} link="/my-orders" title="My Orders"/>
                    <MobileInnerBtn icon={<Whishlist />} link="/wishlist" title="Wishlist"/>
                    <Split />
                    <MobileInnerBtn icon={<FAQ />} link="/faq" title="FAQ"/>
                   <MobileInnerBtn icon={<ContactUs />} link="https://t.me/apezon" title="Contact with us" target="_blank"/>
                </Cities>
            </Content>
        </Siderbar>
    );
}

export default MobileSidebar;