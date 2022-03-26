import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import Pagination from '@/pages/List/Pagination';
import getList from '@/apis/api/list';
import getListDescending from '@/apis/services/list';
import { POSTS_PER_PAGE } from '@/constants/pagination';

const List = () => {
  const params = useParams();
  const category = params.id;

  const [page, setPage] = useState(1);
  const offset = (page - 1) * POSTS_PER_PAGE;

  useEffect(() => {
    setPage(1);
  }, [params]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const {
    isLoading,
    error,
    data: sortedList,
  } = useQuery(category, () => getList(category).then(getListDescending));
  if (error) return 'An error has occurred: ' + error.message;

  return (
    <>
      {isLoading ? (
        <div>Loading . . .</div>
      ) : (
        sortedList.slice(offset, offset + POSTS_PER_PAGE).map(list => {
          return (
            <Link key={list} to={`/detail/${list}`}>
              <ListCard>{list}</ListCard>
            </Link>
          );
        })
      )}
      <Pagination
        totalPost={sortedList?.length}
        postsPerPage={POSTS_PER_PAGE}
        page={page}
        setPage={setPage}
      />
    </>
  );
};

const ListCard = styled.div`
  padding: 2rem 1rem;
  margin-bottom: 1rem;
  font-size: 1.4rem;
  border: 0.1rem solid #ccc;
  border-radius: 0.5rem;
  box-shadow: 0.2rem 0.2rem 0.2rem 0.1rem ${props => props.theme.colors.gray800};
  transition: ease 150ms;

  &:hover {
    background: ${props => props.theme.colors.gray800};
    transform: translateY(-0.5rem);
  }
`;

export default List;
