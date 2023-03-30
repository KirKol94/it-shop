import styled from 'styled-components'
import { bp } from '@/styled/vars'

export const MenuContent = styled.div`
  overflow: hidden;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  animation: move-to-left 300ms linear;
  z-index: 100;

  ${bp.sm} {
    width: 100%;
  }

  @keyframes move-to-left {
    from {
      transform: translateX(100%);
    }

    to {
      transform: translateX(0);
    }
  }
`
