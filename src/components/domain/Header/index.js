import styled from 'styled-components';
import Title from '@/components/base/Title';

const Header = () => {
  return (
    <Container>
      <Title />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export default Header;
