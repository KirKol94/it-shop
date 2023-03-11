import styled from 'styled-components'
import { containerWidth } from './vars'

// основной контейнер, от которого наследуются другие контейнеры
export const RootContainer = styled.div`
  max-width: ${containerWidth};
  padding: 0 15px;
  margin: 0 auto;
`
