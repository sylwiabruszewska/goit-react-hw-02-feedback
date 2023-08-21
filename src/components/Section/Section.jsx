import {
  StyledSection,
  StyledSectionHeading,
  StyledSectionContent,
} from './Section.styled';

export default function Section({ title, children }) {
  return (
    <StyledSection>
      <StyledSectionHeading>{title}</StyledSectionHeading>
      <StyledSectionContent>{children}</StyledSectionContent>
    </StyledSection>
  );
}
