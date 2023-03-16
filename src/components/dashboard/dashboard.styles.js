import styled from "styled-components";

export const DashboardStyle = styled.div`
  position: relative;
  flex: 0 0 200px;
  max-width: 250px;
  min-width: 250px;
  width: 250px;
  transition: all 0.3s ease 0s;
  z-index: 989;
  display: flex;

  @media screen and (max-width: 820px) {
    display: none;
  }
`

export const TopItems = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 40px 0 0;

  & > a {
    padding: 8px;
    border-radius: 8px;
    margin: 3px 0px;
    transition: all 0.3s ease 0s;
    color: black;
    
    &.active{
      background-color: var(--color-blue);
      color: white;
      font-weight: 400;
    }

    &:hover {
      background-color: var(--color-blue);
      color: white;
    }
  }
`