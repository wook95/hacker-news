import { useQueries } from 'react-query';
import LoadingSpinner from '@/components/base/LoadingSpinner';
import getDetail from '@/apis/api/detail';

const Comment = ({ comments }) => {
  const commentQueries = useQueries(
    comments.map(comment => ({
      queryKey: [comment],
      queryFn: () => getDetail(comment),
    })),
  );

  return (
    <div>
      {commentQueries.map(res =>
        res.isLoading ? (
          <LoadingSpinner />
        ) : (
          <div key={res.data.id}>
            <p>{res.data.by}</p>
            <p>{res.data.text}</p>
            <p>{res.data.time}</p>
          </div>
        ),
      )}
    </div>
  );
};

export default Comment;
