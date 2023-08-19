import styled from 'styled-components';

const StyledSection = styled.section`
  margin-bottom: 20px;
`;

const StyledSectionHeading = styled.h2`
  margin-bottom: 12px;
  font-weight: 600;
`;

const StyledSectionContent = styled.div`
  display: flex;
  gap: 10px;
`;

export default function Section({ title, children }) {
  return (
    <StyledSection>
      <StyledSectionHeading>{title}</StyledSectionHeading>
      <StyledSectionContent>{children}</StyledSectionContent>
    </StyledSection>
  );
}
