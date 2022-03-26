import styled from 'styled-components';

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
  margin: 1rem;
`;

const Button = styled.button`
  width: 3.5rem;
  padding: 1rem 0.5rem;
  margin: 0;
  color: white;
  background: ${props => props.theme.colors.black100};
  border: 0;
  border-radius: 0.8rem;
  font-size: 1rem;
  box-shadow: 2px 2px 2px 1px ${props => props.theme.colors.gray800};
  transition: ease 150ms;

  &:hover {
    background: ${props => props.theme.colors.gray100};
    transform: scale(1.1);
    cursor: pointer;
  }

  &[disabled] {
    background: ${props => props.theme.colors.gray200};
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: ${props => props.theme.colors.primary};
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;

const PAGES_PER_BLOCK = 7;

export default Pagination;
