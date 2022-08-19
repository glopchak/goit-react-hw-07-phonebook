import styled from '@emotion/styled';

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const Label = styled.label`
  margin-bottom: ${p => p.theme.space[4]}px;
  
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.titleColor};
`;

export const Input = styled.input`
  min-width: 400px;
  min-height: 30px;
  padding: ${p => p.theme.space[2]}px;

  font-size: ${p => p.theme.fontSizes.s};
  text-align: center;

  border: none;
  outline: none;
  border-radius: ${p => p.theme.radii.sm};
  :focus {
    box-shadow: ${p => p.theme.shadows.normal};
  }
`;
