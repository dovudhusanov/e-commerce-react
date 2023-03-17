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
} from "./mobile-sidear.styles";
import {Link, useNavigate} from "react-router-dom";
import {categoryList} from "../../../../data/data";
import MobileInnerBtn from "./mobile-inner-btn/mobile-inner-btn";
import {CategoryIcon, ContactUs, FAQ, MyOrder, Whishlist, Settings, Logout} from "../../../../icons";
import {LogoutApi} from "../../../../api/logout-api";
import {logout} from "../../../../action/auth-login-action";
import {useDispatch} from "react-redux";

function MobileSidebar({sModal, setSModal}) {

    const [active, setActive] = React.useState(false);

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const refresh = localStorage.getItem("refresh")

    async function handleLogout() {
        const accessToken = localStorage.getItem("access");
        console.log(accessToken)
        const headers = {Authorization: `Bearer ${accessToken}`};
        const res = await LogoutApi({refresh: refresh, headers: headers});
        console.log(res);
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        dispatch(logout());
        navigate("/");
    }

    return (
        <Siderbar sModal={sModal}>
            <Header>
                <Close onClick={() => setSModal(false)}><i className="fa-solid fa-xmark"></i></Close>
                <AuthLinks onClick={() => setSModal(false)}>
                    {localStorage.getItem("access") ? <Link to="/user/info">Profile</Link> : (
                        <>
                            <Link to="/login">log in</Link> / <Link to="/signup">sign up</Link>
                        </>
                    )}
                </AuthLinks>
            </Header>
            <Content>
                <CategoryButton onClick={() => setActive(prevState => !prevState)}>
                    <Icon><CategoryIcon/></Icon>
                    <IconName>Category</IconName>
                    <DownArrow active={active}><i className="fa-regular fa-angle-down"></i></DownArrow>
                </CategoryButton>
                {active && <Split/>}
                <CategoryList active={active}>
                    {categoryList.map((list) => (
                        <CategoryLink id={list.id} onClick={() => setSModal(false)}>
                            <MobileInnerBtn icon={list.icon} link={`/categories/${list.pathName}`}
                                            title={list.categoryName}/>
                            <Split className="short"/>
                        </CategoryLink>
                    ))}
                </CategoryList>
                <Cities onClick={() => setSModal(false)}>
                    <MobileInnerBtn icon={<MyOrder/>} link="/user/my-orders" title="My Orders"/>
                    <MobileInnerBtn icon={<Whishlist/>} link="/wishlist" title="Wishlist"/>
                    {localStorage.getItem("access") && <MobileInnerBtn icon={<Settings/>} link="/user/settings" title="Settings"/>}
                    <Split/>
                    <MobileInnerBtn icon={<FAQ/>} link="/faq" title="FAQ"/>
                    <MobileInnerBtn icon={<ContactUs/>} link="https://t.me/apezon" title="Contact with us"
                                    target="_blank"/>
                    {localStorage.getItem("access") && <MobileInnerBtn icon={<Logout/>} onClick={handleLogout} title="Log out"/>}
                </Cities>
            </Content>
        </Siderbar>
    );
}

export default MobileSidebar;