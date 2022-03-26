import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Pagination from '@/pages/List/Pagination';
import getList from '@/apis/api/list';
import getListDescending from '@/apis/services/list';

const List = () => {
  const params = useParams();
  const category = params.id;

  const [page, setPage] = useState(1);
  const offset = (page - 1) * POSTS_PER_PAGE;

  useEffect(() => {
    setPage(1);
  }, [params]);

  const {
    isLoading,
    error,
    data: sortedList,
  } = useQuery(category, () => getList(category).then(getListDescending));
  if (error) return 'An error has occurred: ' + error.message;

  return (
    <div>
      <h1>{category}</h1>
      {isLoading ? (
        <div>Loading . . .</div>
      ) : (
        sortedList.slice(offset, offset + POSTS_PER_PAGE).map(list => {
          return <div key={list}>{list}</div>;
        })
      )}
      <Pagination
        totalPost={sortedList?.length}
        postsPerPage={POSTS_PER_PAGE}
        page={page}
        setPage={setPage}
      />
    </div>
  );
};

const POSTS_PER_PAGE = 33;

export default List;
