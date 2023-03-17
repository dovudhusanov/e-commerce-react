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

export const InfoItem = styled.div`
  padding: 10px;
  line-height: 25px;

  & > label {
    font-size: 12px;
    color: grey;
    font-weight: 500;
    display: block;
  }

  & > span {
    font-size: 14px;
    color: grey;
  }
`