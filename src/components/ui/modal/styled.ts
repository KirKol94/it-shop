import styled from 'styled-components'

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fade-in-overlay 300ms linear;
  backdrop-filter: blur(20px);
  background-color: rgba(0, 0, 0, 0.5);
  will-change: opacity;
  z-index: 100;

  @keyframes fade-in-overlay {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`

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
