import styled from "styled-components";

export const ProductMain = styled.div`

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

export const ProductItem = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`

export const ProductImages = styled.div`
  max-width: 600px;
  
  @media screen and (max-width: 685px) {
    max-width: 100%;
  }
`

export const ProductImageSlider = styled.div`

`

export const ProductInfo = styled.div`
  max-width: 500px;
`

export const ProductName = styled.h1`
  font-size: ;
`

export const ProductDescription = styled.span`
  font-size: 16px;
`