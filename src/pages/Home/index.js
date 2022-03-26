import styled from 'styled-components';
import Title from '@/components/base/Title';
import CategoryLists from '@/components/base/CategoryLists';

const Home = () => {
  return (
    <Container>
      <Title />
      <CategoryLists />
    </Container>
  );
};

const Container = styled.div`
  ${props => props.theme.wrapper}
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  font-size: 1.6rem;
`;

export default Home;
