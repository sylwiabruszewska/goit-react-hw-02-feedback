import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 5px;
  width: 150px;
  cursor: pointer;
  background-color: white;
  border-radius: 4px;
  border: 1px solid #010101;
`;

export default function Button({ handler, children: text }) {
  return (
    <StyledButton type="button" onClick={handler}>
      {text}
    </StyledButton>
  );
}
