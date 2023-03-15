import React, { useState } from 'react';
import styled from 'styled-components';

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  position: relative;
  top: 2px;
  left: -10px;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
  width: 20px;
  height: 20px;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  /* Hide the default checkbox */
  position: relative;
  opacity: 0;
  cursor: pointer;
  left: 14.5px;
  top: -4px;

  &:focus + span {
    /* Add a border to the custom checkbox when it's focused */
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.12);
  }

  &:checked + span ${Icon} {
    /* Show the checkmark when the custom checkbox is checked */
    visibility: visible;
  }
`;

const StyledCheckbox = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  background: ${props => props.checked ? 'var(--color-blue)' : 'rgb(32,145,249,0.2)'};
  border-radius: 3px;
  transition: all 150ms;

  ${Icon} {
    visibility: ${props => props.checked ? 'visible' : 'hidden'};
  }
`;

const Checkbox = ({ checked, onChange }) => {
    const [isChecked, setIsChecked] = useState(checked);

    const handleCheckboxChange = event => {
        setIsChecked(event.target.checked);
        onChange && onChange(event.target.checked);
    };

    return (
        <CheckboxContainer>
            <HiddenCheckbox checked={isChecked} onChange={handleCheckboxChange} />
            <StyledCheckbox checked={isChecked}>
                <Icon viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                </Icon>
            </StyledCheckbox>
        </CheckboxContainer>
    );
};

export default Checkbox;
