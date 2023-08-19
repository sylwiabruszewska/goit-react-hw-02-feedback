import styled from 'styled-components';
import Button from './Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faMeh, faFrown } from '@fortawesome/free-regular-svg-icons';

const StyledIcon = styled(FontAwesomeIcon)`
  color: #666666;

  button:hover & {
    color: #fff;
  }
`;

const getIcon = icon => <StyledIcon icon={icon} size="2xl" />;

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  const iconMap = {
    Good: getIcon(faSmile),
    Neutral: getIcon(faMeh),
    Bad: getIcon(faFrown),
  };

  return (
    <>
      {options.map(option => (
        <Button key={option} handler={onLeaveFeedback}>
          <span>{iconMap[option]}</span>
          <span>{option}</span>
        </Button>
      ))}
    </>
  );
}
