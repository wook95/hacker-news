import { useParams } from 'react-router-dom';

const List = () => {
  const params = useParams();
  console.log(params);
  return <div>list</div>;
};

export default List;
