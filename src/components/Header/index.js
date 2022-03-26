import styled from 'styled-components';

const Header = () => {
  return (
    <Container>
      <div>헤더</div>
    </Container>
  );
};

const Container = styled.div`
  ${props => props.theme.wrapper}
`;
export default Header;
