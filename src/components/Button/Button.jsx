import { StyledButton } from './Button.styled';

export default function Button({ handler, children }) {
  return (
    <StyledButton type="button" onClick={handler}>
      {children}
    </StyledButton>
  );
}
