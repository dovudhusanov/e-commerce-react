import styled from "styled-components";

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

export const Title = styled.h2`
  text-align: center;
  color: var(--color-black);
  font-size: 30px;
  position: relative;
  top: -10px;
`

export const FilterButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 16px;
  color: #5e5e5e;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  
  & i {
    color: var(--color-blue);
  }
`