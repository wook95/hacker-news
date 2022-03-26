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
  padding: 3rem 4rem 0rem;
  margin: -3rem 0 3rem 0;
  border-top: 1px solid ${props => props.theme.colors.gray100};
`;
export default TopNav;
