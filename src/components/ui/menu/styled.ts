import styled from 'styled-components'
import { bp } from '@/styled/vars'

export const MenuContent = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  animation: move-to-left 200ms linear;
  will-change: opacity, transform;
  z-index: 100;

  @keyframes move-to-left {
    from {
      transform: translateX(100%);
    }

    to {
      transform: translateX(0);
    }
  }

  ${bp.sm} {
    width: 100%;
  }
`
