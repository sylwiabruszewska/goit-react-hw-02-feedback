import { StyledList } from './Statistics.styled';

export default function Statistics(props) {
  const { good, neutral, bad, total, positivePercentage } = props;

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
      <li>
        Total:<span> {total}</span>
      </li>
      <li>
        Positive Feedback:<span> {positivePercentage || '0'} %</span>
      </li>
    </StyledList>
  );
}
