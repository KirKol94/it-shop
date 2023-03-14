import styled from 'styled-components'

export const StyledModal = styled.div`
  animation: fade-in-modal 200ms linear;
  will-change: opacity, transform;
  z-index: 100;

  @keyframes fade-in-modal {
    from {
      opacity: 0;
      transform: translateY(5%);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`
