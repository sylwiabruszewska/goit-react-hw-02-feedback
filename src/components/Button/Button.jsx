import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled';

export default function Button({ handler, children }) {
  return (
    <StyledButton type="button" onClick={handler}>
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  handler: PropTypes.func.isRequired,
  children: PropTypes.array.isRequired,
};
