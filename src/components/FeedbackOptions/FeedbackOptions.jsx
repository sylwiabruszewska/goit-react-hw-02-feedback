import { StyledIcon } from './FeedbackOptions.styled';
import { faSmile, faMeh, faFrown } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';

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
