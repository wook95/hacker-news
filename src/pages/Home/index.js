import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CATEGORIES from '@/constants/category';

const Home = () => {
  return (
    <Container>
      <Title>HACKER NEWS</Title>
      <Lists>
        {CATEGORIES.map(list => {
          return (
            <List key={list.id}>
              <Link to={`/list/${list.endPoint}`}>{list.name}</Link>
            </List>
          );
        })}
      </Lists>
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

const Title = styled.h1`
  margin: 10rem 0 5rem;
  font-weight: 200;
`;

const Lists = styled.ul`
  display: flex;
  gap: 1rem;
`;

const List = styled.li`
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  font-size: 2.5rem;
  font-weight: 600;

  &:hover {
    color: ${props => props.theme.colors.gray500};
  }
`;

export default Home;
