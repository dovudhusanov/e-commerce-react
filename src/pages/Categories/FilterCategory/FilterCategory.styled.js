import styled from "styled-components";

export const FilterCategoryModal = styled.div`
  max-height: 0;
  overflow: hidden;
  transition: all .5s ease-in-out;
  width: 100%;
  background-color: rgba(32, 145, 249, 0.03);
  position: relative;
  top: 20px;

  ${(props) => {
    if (props.active) {
      return `
              max-height: 3000px;
              min-height: initial !important;
            `
    }
  }}
`

export const FilterCategoryModalItems = styled.div`
  padding: 30px 40px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const FilterList = styled.div`
  margin: 20px 10px;
`

export const Title = styled.h3`
  font-weight: 500;
  font-size: 17px;
  text-transform: uppercase;
  margin-bottom: 20px;
  color: #565656;
`

export const FilterItemDiv = styled.div`
  line-height: 35px;
  overflow-y: auto;
  max-height: 193px;
  max-width: 220px;
  width: 220px;
  
  &::-webkit-scrollbar {
    width: 3px;
    background-color: #E6E6E6;
  }

  &::-webkit-scrollbar-track {
    background-color: #e6e6e6;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #8D8B8B;
  }
`

export const FilterItem = styled.label`
  font-size: 16px;
  color: black;
  cursor: pointer;
`

export const FilterColor = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 10px;
`

export const FilterColorParent = styled.div`
  display: flex;
  align-items: center;
`