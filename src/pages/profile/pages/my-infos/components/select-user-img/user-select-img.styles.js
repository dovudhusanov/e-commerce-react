import styled from "styled-components";

export const Form = styled.form`
  position: relative;
`

export const UserImg = styled.div`
  margin: 10px 150px 10px 10px;
  position: relative;
  border-radius: 50%;
  cursor: pointer;
  width: 220px;
  height: 220px;

  &:after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    border-radius: 50%;
    cursor: pointer;
    transition: 0.3s ease;
  }
  
  &:hover {
    &:after {
      background-color: rgba(0, 0, 0, 0.42);
    }
  }
  
  ${(props) => {
      if(props.setting) {
          return`
            margin-right: 10px!important;
          `
      }
  }};

  @media screen and (max-width: 1050px) {
    margin-right: 0;
  }

  @media screen and (max-width: 820px) {
    margin-right: 50px;
  }

  @media screen and (max-width: 635px) {
    margin-right: 0;
  }

  @media screen and (max-width: 612px) {
    margin-top: 30px;

    width: 160px !important;
    height: 160px !important;
    
    & img {
      width: 160px !important;
      height: 160px !important;
    }
  }

  & img {
    width: 220px;
    height: 220px;
    object-fit: cover;
    border-radius: 50%;
  }
`


export const ImageContainer = styled.div`
  position: relative;
  border-radius: 50%;
`;

export const Image = styled.img`
  width: 100%;
`;

export const CameraIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: ${props => props.isVisible ? 1 : 0};
  border-radius: 50%;
  z-index: 2;
  transition: 0.3s ease;
`;

export const Icon = styled.i`
  font-size: 3rem;
  color: white;
`;

export const HiddenInput = styled.input.attrs({type: 'file', accept: 'image/*'})`
  opacity: 0;
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const SaveButton = styled.button`
  border: none;
  position: absolute;
  top: 20px;
  right: 170px;
  background: #379D00;
  color: white;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  z-index: 99999;
  cursor: pointer;

  
  ${(props) => {
      if (props.disabled) {
          return`
           background: #3e5e2e;
            color: #b2b2b2;
            cursor: default;
          `
      }
  }}
`