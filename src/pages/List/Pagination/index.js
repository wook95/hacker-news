import styled from 'styled-components';
import { PAGES_PER_BLOCK } from '@/constants/pagination';

const Pagination = ({ totalPost, postsPerPage, page, setPage }) => {
  const totalPage = Math.ceil(totalPost / postsPerPage);
  const lastBlock = Math.ceil(totalPage / PAGES_PER_BLOCK);
  const currentBlock = Math.ceil(page / PAGES_PER_BLOCK);
  const currentBlockLength =
    currentBlock !== lastBlock
      ? PAGES_PER_BLOCK
      : totalPage - PAGES_PER_BLOCK * (lastBlock - 1);

  return (
    <Container>
      <Button
        type='button'
        onClick={() => setPage((currentBlock - 1) * PAGES_PER_BLOCK)}
        disabled={currentBlock === 1}>
        &lt;
      </Button>
      {Array.from({ length: currentBlockLength }, (_, i, arr) => (
        <Button
          type='button'
          key={i + 1 + PAGES_PER_BLOCK * (currentBlock - 1)}
          onClick={() => setPage(i + 1 + PAGES_PER_BLOCK * (currentBlock - 1))}
          aria-current={
            page === i + 1 + PAGES_PER_BLOCK * (currentBlock - 1)
              ? 'page'
              : null
          }>
          {i + 1 + PAGES_PER_BLOCK * (currentBlock - 1)}
        </Button>
      ))}
      <Button
        type='button'
        onClick={() => setPage(currentBlock * PAGES_PER_BLOCK + 1)}
        disabled={currentBlock === lastBlock}>
        &gt;
      </Button>
    </Container>
  );
};

const Container = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin: 2rem 1rem;
`;

const Button = styled.button`
  width: 3.5rem;
  padding: 1rem 0.5rem;
  margin: 0;
  color: ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.black100};
  border: 0rem solid ${props => props.theme.colors.gray500};
  border-radius: 0.8rem;
  font-size: 1.2rem;
  box-shadow: 2px 2px 2px 1px ${props => props.theme.colors.gray800};
  transition: ease 150ms;

  &:hover {
    background: ${props => props.theme.colors.gray100};
    transform: scale(1.1);
    cursor: pointer;
  }

  &[disabled] {
    background: ${props => props.theme.colors.gray300};
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: ${props => props.theme.colors.primary};
    font-weight: 600;
    cursor: revert;
    transform: revert;
  }
`;

export default Pagination;
