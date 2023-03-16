import styled from "styled-components";

export const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  
  @media screen and (max-width: 612px) {
    flex-direction: column;
  }
`

export const UserInfoInput = styled.div`
  max-width: 300px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const UserImg = styled.div`
  margin: 10px 150px 10px 10px;
  
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
    width: 200px;
    margin-top: 30px; 
  }
  
  & img{
    width: 100%;
    height: auto;
    object-fit: cover;
    border: 2px solid black;
    border-radius: 50%;
  }
`

export const InfoItem = styled.div`
  padding: 10px;
  line-height: 25px;
  
  & > label {
    font-size: 12px;
    color: grey;
    font-weight: 500;
    display: block;
  }
  
  & > span{
    font-size: 14px;
    color: grey;
  }
`