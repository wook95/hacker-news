import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Title = () => {
  return (
    <Link to={'/'}>
      <StyledTitle>HACKER NEWS</StyledTitle>
    </Link>
  );
};

const StyledTitle = styled.h1`
  margin: 5rem 0;
  padding: 0.5rem;
  font-weight: 200;

  &:hover {
    color: ${props => props.theme.colors.gray100};
  }

  &:active {
    color: ${props => props.theme.colors.gray300};
  }
`;

export default Title;
