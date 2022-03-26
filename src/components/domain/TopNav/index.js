import styled from 'styled-components';
import CategoryLists from '@/components/base/CategoryLists';

const TopNav = () => {
  return (
    <Container>
      <CategoryLists />
    </Container>
  );
};

const Container = styled.div`
  padding: 3rem 4rem 3rem;
  margin: -3rem 0 0rem 0;
  border-top: 0.1rem solid ${props => props.theme.colors.gray100};
`;
export default TopNav;
