import styled, {css} from "styled-components";

css`
  html, body {
    overflow-y: scroll !important;
  }
`

export const Title = styled.h1`
  font-size: 30px;
  color: var(--color-blue);
  text-align: center;
  position: relative;
  top: 10px;
  margin: 40px 0;
`

export const FAQItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const FaqItemWrapper = styled.div`
  width: 100%;
  background-color: rgba(2, 28, 52, 0.06);
  color: var(--color-black);
  margin: 5px 0;
  user-select: none;
  transition: 0.3s ease-in-out;
`

export const FaqQuestion = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px 0 20px;
  font-weight: 500;
  font-size: 20px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  
  @media screen and (max-width: 425px) {
    font-size: 18px;
  }

  ${(props) => {
    if (props.active) {
      return `
            padding: 20px;
          `
    }
  }}
`

export const FaqAnswer = styled.div`
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  padding: 0 20px 20px 20px;
  font-size: 15px;
  opacity: 0;

  ${(props) => {
    if (props.active) {
      return `
            max-height: 600px;
            min-height: initial !important;
            opacity: 1;
          `
    }
  }}
`

export const Arrow = styled.span`
  position: relative;
  transition: 0.3s ease;
  margin-left: 12px;

  ${(props) => {
    if (props.active) {
      return `
        transform: rotate(180deg);
      `
    }
  }}
`