import styled from "styled-components";

export const NavbarBottomStyle = {
    NavbarBottom: styled.div`
      width: 100%;
      background: rgba(85, 170, 246, 0.01);
      position: relative;
      top: 16px;
      border-bottom: 1px solid rgba(128, 128, 128, 0.23);
      
      @media screen and (max-width: 820px) {
        display: none;
      }
    `
}

export const NavbarBottomItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &  a {
    padding: 17px 25px;
    color: var(--color-blue);

    :nth-child(2) {
      position: relative;
      left: 7px;
    }
  }

  .active {
    font-weight: 400;
    background-color: var(--color-blue);
    color: white;
  }

  & > div {
    :nth-child(1) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 270px;
    }
  }
`

export const NavbarBottomRight = styled.div`
  display: flex;
  align-items: center;
  
  & a{
    position: relative;
  }
  
  .active{
    & > .cart-length{
      background: var(--color-white)!important;
      color: var(--color-blue);
    }
  }
  
  & i{
    padding-right: 8px;
  }
`

export const CategoryButton = styled.button`
  display: flex;
  border: none;
  cursor: pointer;
  justify-content: center;
  align-content: center;
  align-items: center;
  transition: all .2s;
  font-size: .875rem;
  font-weight: 500;
  text-decoration: none;
  border-radius: 4px;
  background-color: rgba(49, 49, 196, 0.1);
  color: var(--color-blue);
  position: relative;
  padding: 20px;

  &:hover {
    background-color: rgba(49, 49, 196, 0.13);
  }

  @media screen and (max-width: 990px) {
    position: relative;
  }

  @media screen and (max-width: 820px) {
    display: none;
  }
`

export const CategoryIcon = styled.div`
  position: relative;
  top: -12px;
`

export const CategoryBtnRect = styled.div`
  transition: all .11s .11s ease-out, transform .11s .001ms ease-out;
  position: absolute;
  width: 18px;
  height: 12px;
  border: 2px solid var(--color-blue);
  border-radius: 2px;
  background: var(--color-blue);
  box-sizing: border-box;
  transform: translate(-50%, 0);
  top: 9px;
  left: 50%;

  & div {
    transition: all .11s .11s ease-out;
    background-color: #e5e5ff;
    width: 100%;
    height: 100%;
    border-radius: 1px;
    margin: auto;
  }
`

export const CategoryBtnTop = styled.div`
  transition: all .11s .11s ease-out, opacity .001ms .11s;
  position: absolute;
  width: 13.991999999999999px;
  height: 0;
  border-top: 2px solid var(--color-blue);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  top: 3px;
  transform: translate(-50%, 0);
  left: 50%;
`

export const CategoryBtnBottom = styled.div`
  transition: all .11s .11s ease-out, transform .11s .001ms ease-out;
  position: absolute;
  width: 15.984000000000002px;
  height: 0;
  background: var(--color-blue);
  border-top: 2px solid var(--color-blue);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  top: 6px;
  transform: translate(-50%, 0);
  left: 50%;
`

export const CartLength = styled.p`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 8px;
  left: 32px;
  width: 15px;
  height: 15px;
  background: var(--color-blue);
  color: white;
  border-radius: 50%;
  font-size: 11px;
`