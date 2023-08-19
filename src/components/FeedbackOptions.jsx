import Button from './Button';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      {options.map(option => (
        <Button key={option} handler={onLeaveFeedback}>
          {option}
        </Button>
      ))}
    </>
  );
}
