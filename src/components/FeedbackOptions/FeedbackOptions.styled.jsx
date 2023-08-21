import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledIcon = styled(FontAwesomeIcon)`
  color: #666666;

  button:hover & {
    color: #fff;
  }
`;
