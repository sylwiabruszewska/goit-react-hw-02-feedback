import styled from 'styled-components';

const StyledNotification = styled.p`
  font-size: 16px;
`;

export default function Notification({ message }) {
  return <StyledNotification>{message}</StyledNotification>;
}
