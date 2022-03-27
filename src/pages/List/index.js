import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import LoadingSpinner from '@/components/base/LoadingSpinner';
import Pagination from '@/pages/List/Pagination';
import ListCard from '@/pages/List/ListCard';
import getList from '@/apis/api/list';
import getListDescending from '@/apis/services/list';
import { POSTS_PER_PAGE } from '@/utils/constants/pagination';

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
        <LoadingSpinner />
      ) : (
        sortedList.slice(offset, offset + POSTS_PER_PAGE).map(list => {
          return (
            <Link key={list} to={`/detail/${list}`}>
              <ListCard listId={String(list)} />
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

export default List;
