import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '@/components/domain/Header';
import TopNav from '@/components/domain/TopNav';

const Layout = () => {
  return (
    <Container>
      <TopContainer>
        <Header />
        <TopNav />
      </TopContainer>
      <BottomContainer>
        <Outlet />
      </BottomContainer>
    </Container>
  );
};

const Container = styled.div`
  ${props => props.theme.wrapper}
  position: relative;
`;

const TopContainer = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  background-color: ${props => props.theme.colors.white};
`;

const BottomContainer = styled.div`
  margin-top: 20rem;
`;
export default Layout;
