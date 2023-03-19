import styled from 'styled-components'
import { bp, fonts } from '@/styled/vars'

export const RootTitle = styled.h2`
  font-size: clamp(2rem, 1.9rem + 0.5vw, 2.5rem);
  font-family: ${fonts.primary};
  font-weight: 500;
  line-height: 125%;
  text-align: center;

  @media (max-width: ${bp.md}px) {
    font-weight: 600;
  }
`
