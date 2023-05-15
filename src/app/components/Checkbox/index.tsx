import React from 'react';
import styled from 'styled-components';

const Circle = styled.div<{ checked?: boolean }>`
  width: 25px;
  heigt: 20px;
  border-radius: 50%;
  border: 2px solid ${porps => (porps.checked ? 'blue' : 'orange')};
  padding: 3px;

  & > .checkbox-icon {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: red;
  }
`;

export default function CheckBox({
  checked,
  onClick,
}: {
  checked?: boolean;
  onClick?: () => void;
}) {
  return (
    <>
      <Circle checked={checked} onClick={onClick}>
        {checked ? <div className="checkbox-icon" /> : null}
      </Circle>
    </>
  );
}
