import styled from 'styled-components';

const Sidebar = () => {
  return (
    <Container>
      <div>사이드바</div>
    </Container>
  );
};

const Container = styled.div`
  ${props => props.theme.wrapper}
`;
export default Sidebar;
