import styled from '@emotion/styled';

export const ContactItem = styled.li`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  font-size: ${p => p.theme.fontSizes.l};
`;
export const Info = styled.p`
  padding: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.text};
`;

export const DeleteBtn = styled.button`
  margin-left: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.xs};

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
