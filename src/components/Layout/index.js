import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

const Layout = () => {
  return (
    <Container>
      <Header />
      <Sidebar />
      <Outlet />
    </Container>
  );
};

const Container = styled.div`
  ${props => props.theme.wrapper}
`;
export default Layout;
