import styled from '@emotion/styled'

export const AppContainer = styled.div`
    display:flex;
    flex-direction:column;
    margin-left:${p => p.theme.space[5]}px;
    height: 100vh;
    justify-content: center;
    align-items:center; 
`

export const PageTitle = styled.h1`
  margin-bottom: ${p => p.theme.space[5]}px;
  
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-align: center;
  color: ${p => p.theme.colors.titleColor};
`

export const Title = styled.h2`
  margin-bottom: ${p => p.theme.space[5]}px;
  
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-align: center;
  color: ${p => p.theme.colors.titleColor};
`