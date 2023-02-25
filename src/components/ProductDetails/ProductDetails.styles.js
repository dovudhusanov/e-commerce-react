import styled from "styled-components";

export const ProductMain = styled.div`
  padding-bottom: 40px;
`

export const Product = styled.div`
  margin-top: 30px;
`

export const Location = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: #000000;

  & a {
    color: #b4b4b4;
    transition: 0.3s ease;

    &:hover {
      color: black;
    }
  }
`

export const ProductName = styled.h1`
  text-align: center;
  padding: 40px 0 20px 0;
  color: #363A45;
  font-size: 32px;
  
  @media screen and (max-width: 425px) {
    font-size: 24px;
  }
`

export const ProductItem = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`

export const ProductImages = styled.div`
  max-width: 500px;
  width: 500px;
  border: 1px solid #DADCDC;
  padding: 20px;
  border-radius: 10px;
  position: relative;

  @media screen and (max-width: 1049px) {
    max-width: 650px;
    width: 650px;
  }

  @media screen and (max-width: 685px) {
    max-width: 100%;
  }
`

export const ProductImageSlider = styled.div`

`

export const ProductInfo = styled.div`
  max-width: 500px;
  width: 500px;
  margin-left: 20px;
  
  @media screen and (max-width: 1049px) {
    margin-left: 0;
    max-width: 650px;
    width: 650px;
    margin-top: 30px;
  }
`

export const ProductInfoCard = styled.div`
  box-shadow: 1px 2px 16px 3px #363A4514;
  border-radius: 5px;
  padding: 20px;
  width: 100%;
  margin-bottom: 20px;

  & .add-btn {
    width: 100%;
    margin-top: 20px;
  }
  
  ${(props) => {
      if(props.info) {
          return `
            display: flex;
            flex-direction: column;
          `
      }
  }}
`

export const ProductInfoItem = styled.span`
  font-size: 16px;
  color: #7c7c7c;
  font-weight: 400;
  padding: 5px 0;

  & span {
    color: #363A45;
    font-weight: 600;
    padding-left: 5px;
  }
`

export const PriceAndAddSaved = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  color: #363A45;

  & button {
    border: none;
    font-size: 13px;
    padding: 7px 16px;
    margin-right: 25px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 500;
    transition: 0.3s ease;
    background-color: rgba(32, 145, 249, 0.16);
    color: var(--color-blue);
    width: 40%;
    margin-top: 0;

    @media screen and (max-width: 380px) {
      margin-right: 0;
      width: 35%;
    }


    ${(props) => {
      if (props.save) {
        return `
            background-color: var(--color-blue);
            color: white;
                    
            & i {
                color: white !important;
            }
            &:hover {
               background-color: var(--color-blue) !important;
            }
                 `
      }
    }}
    &:hover {
      background-color: rgba(32, 145, 249, 0.33);
    }

    & i {
      color: rgba(32, 145, 249, 0.42);
    }
  }


  & span {
    font-size: 24px;
    font-weight: 700;
    padding-left: 10px;
  }
`

export const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const CounterForQuantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 75%;
  margin-top: 22px;
  
  @media screen and (max-width: 490px) {
    width: 100%;
  }

  & div {
    border: 1px solid rgba(128, 128, 128, 0.29);
    border-radius: 2px;
    padding: 3px;
    display: flex;
    align-items: center;
    max-width: 160px;
    width: 160px;
    justify-content: center;
    
    @media screen and (max-width: 360px) {
      max-width: 120px;
      width: 120px;
    }

    & button {
      border: none;
      background-color: transparent;
      font-size: 18px;
      color: #919191;
      margin: 0 10px 0 7px;
      cursor: pointer;
      width: inherit;

      &:hover {
        background-color: transparent;
        color: inherit;
      }
    }

    &:last-child {
      margin: 0 7px 0 20px !important;
    }
  }
`

export const Price = styled.div`

`

export const DeleteProduct = styled.button`
  background-color: rgba(255, 0, 0, 0.16);
  border: none;
  font-size: 13px;
  padding: 10px 24px;
  margin-right: 25px;
  border-radius: 8px;
  color: red;
  cursor: pointer;
  font-weight: 500;
  transition: 0.3s ease;

  @media screen and (max-width: 380px) {
    margin-right: 0;
  }

  &:hover {
    background-color: red;
    color: white;
  }

  & {
    i {
      padding-right: 5px;
    }
`