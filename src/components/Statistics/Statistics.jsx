import PropTypes from 'prop-types';
import { StyledList, StyledSpan } from './Statistics.styled';

export default function Statistics(props) {
  const { good, neutral, bad, total, positivePercentage } = props;

  return (
    <StyledList>
      <li>
        Good:<StyledSpan> {good}</StyledSpan>
      </li>
      <li>
        Neutral:<StyledSpan> {neutral}</StyledSpan>
      </li>
      <li>
        Bad:<StyledSpan> {bad}</StyledSpan>
      </li>
      <li>
        Total:<StyledSpan> {total}</StyledSpan>
      </li>
      <li>
        Positive Feedback:
        <StyledSpan> {positivePercentage || '0'} %</StyledSpan>
      </li>
    </StyledList>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
