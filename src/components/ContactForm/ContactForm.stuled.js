import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 400px;

  padding: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[5]}px;

  border: ${p => p.theme.borders.easy};
  border-radius: ${p => p.theme.radii.md};
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  margin-bottom: ${p => p.theme.space[4]}px;

  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.text};

`;

export const Input = styled.input`
  min-height: 30px;
  padding: ${p => p.theme.space[2]}px;
  margin-top: ${p => p.theme.space[3]}px;

  text-align: center;
  font-size: ${p => p.theme.fontSizes.s};

  border: none;
  outline: none;
  border-radius: ${p => p.theme.radii.sm};
  :focus {
    box-shadow: ${p => p.theme.shadows.normal};
  }
`;

export const SubmitBtn = styled.button`
  min-height: 40px;
  padding: ${p => p.theme.space[2]}px;

  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.btnColorText};
  background-color: ${p => p.theme.colors.btnBgc};

  border-radius: ${p => p.theme.radii.sm};
  border: none;
  :hover {
    background-color: ${p => p.theme.colors.btnBgcAccent};
  }
  :focus {
    box-shadow: ${p => p.theme.shadows.normal};
  }
`;
