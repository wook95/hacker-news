import styled, { keyframes } from 'styled-components';

const LoadingSpinner = () => {
  return (
    <Container>
      <Spinner />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 1.5rem 0;
`;
const spin = keyframes`
    from {transform: rotate(0deg); }
  to {transform: rotate(360deg);}
`;

const Spinner = styled.div`
  margin: 0 auto;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  border: 0.5rem solid ${props => props.theme.colors.primary500};
  border-bottom-color: ${props => props.theme.colors.primary};
  animation: ${spin} 1000ms linear infinite;
`;

export default LoadingSpinner;
