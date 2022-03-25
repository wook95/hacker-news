import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import getList from '@/apis/api/list';
import getListDescending from '@/apis/services/list';

const List = () => {
  const params = useParams();
  const category = params.id;

  const {
    isLoading,
    error,
    data: sortedList,
  } = useQuery(category, () => getList(category).then(getListDescending));

  if (error) return 'An error has occurred: ' + error.message;
  console.log(sortedList);

  return (
    <div>
      <h1>list</h1>
      {isLoading ? (
        <div>Loading . . .</div>
      ) : (
        sortedList.map(list => {
          return <div key={list}>{list}</div>;
        })
      )}
    </div>
  );
};

export default List;
