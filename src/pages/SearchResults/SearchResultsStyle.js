import styled from "styled-components";

export const SearchResultsStyle = {
    NotFound: styled.div`
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-top: 150px;

      & h1 {
        text-align: center;
        font-size: 36px;
        color: #a9a9a9;
        font-weight: 600;
        
        & span{
          font-weight: 800;
        }
        
        @media screen and (max-width: 425px) {
          font-size: 30px;
        }
      }
`
}