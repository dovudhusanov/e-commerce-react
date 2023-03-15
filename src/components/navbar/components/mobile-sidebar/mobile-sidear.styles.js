import styled from "styled-components";

export const Siderbar = styled.div`
  position: fixed;
  top: 0;
  left: -100%;
  display: flex;
  flex-flow: column;
  height: 100%;
  width: 100%;
  background: #f4f5f5;
  text-align: left;
  z-index: 999;
  transition: 0.3s ease;

  ${(props) => {
    if (props.sModal) {
      return `
            left: 0
          `
    }
  }}
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 0 15px;
  height: 52px;
  background: #fff;
  width: 100%;
`

export const Close = styled.button`
  width: initial;
  background-color: transparent;
  border: none;
  font-size: 20px;

  & i {
    cursor: pointer;
  }
`

export const AuthLinks = styled.div`
  font-size: .875rem;
  font-weight: 500;

  & a {
    text-decoration: underline;
    color: var(--color-black);
  }
`

export const Content = styled.div`
  flex: 1 1 auto;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 52px;
  margin-top: 7px;
  color: var(--color-blue);
`

export const CategoryButton = styled.button`
  cursor: pointer;
  text-decoration: none;
  color: #141415;
  justify-items: flex-start;
  font-size: .875rem;
  font-weight: 500;
  line-height: 1.2em;
  width: 100%;
  height: 52px;
  background: #fff;
  padding: 0 15px !important;
  border: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  transition: all .2s;
`

export const Icon = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin-right: 7px;
`

export const IconName = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  font-weight: 500;
  line-height: 1.2em;
  color: var(--color-blue);
`

export const DownArrow = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: auto;
  font-weight: 500;
  line-height: 1.2em;
  font-size: 21px;
  color: var(--color-blue);
  transition: 0.3s ease;

  ${(props) => {
    if (props.active) {
      return `
          transform: rotate(180deg);|
        `
    }
  }}
`

export const CategoryList = styled.div`
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s ease;

  ${(props) => {
    if (props.active) {
      return `
              max-height: 600px;
              min-height: initial !important;
            `
    }
  }}
`

export const Cities = styled.div`
  margin-top: 7px;
  padding: 2px 0;
  color: #141415;
  background: #fff;
`

export const InnerBtn = styled.button`
  cursor: pointer;
  text-decoration: none;
  color: #141415;
  justify-items: flex-start;
  font-size: .875rem;
  font-weight: 500;
  line-height: 1.2em;
  width: 100%;
  height: 40px;
  background: #fff;
  padding: 0 15px !important;
  display: inline-flex;
  border: none;
  justify-content: center;
  align-items: center;
  align-self: center;
  transition: all .2s;
`

export const InnerBtnIcon = styled.div`
  margin-right: 7px;
  height: 100%;
  display: flex;
  align-items: center;
`

export const InnerBtnText = styled.div`
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  & a {
    font-size: 13px;
    font-weight: 500;
    color: black;
    width: 100%;
  }
`

export const Split = styled.div`
  height: 1px;
  margin-left: auto;
  width: 100%;
  background: rgba(118, 121, 127, 0.2);
  border-left: 16px solid #fff;
`

export const CategoryLink = styled.div`
  & .short {
    border-left-width: 53px;
  }

  & i {
    color: var(--color-blue);
    font-size: 16px;
    width: 30px;
  }
`