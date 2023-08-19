import styled from 'styled-components';

const StyledList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export default function Statistics(props) {
  const { good, neutral, bad } = props;

  return (
    <StyledList>
      <li>
        Good:<span> {good}</span>
      </li>
      <li>
        Neutral:<span> {neutral}</span>
      </li>
      <li>
        Bad:<span> {bad}</span>
      </li>
    </StyledList>
  );
}
