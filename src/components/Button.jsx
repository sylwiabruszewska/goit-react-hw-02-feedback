import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 5px;
  width: 100px;
  cursor: pointer;
  background-color: white;
  border-radius: 4px;
  border: 1px solid #dddddd;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  color: #666666;
  font-weight: 600;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #71a3ff;
    color: #fff;
  }
`;

export default function Button({ handler, children }) {
  return (
    <StyledButton type="button" onClick={handler}>
      {children}
    </StyledButton>
  );
}
