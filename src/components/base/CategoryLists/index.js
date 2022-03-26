import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CATEGORIES from '@/constants/category';

const CategoryLists = ({ isColumn } = { isColumn: false }) => {
  return (
    <Lists isColumn={isColumn}>
      {CATEGORIES.map(list => {
        return (
          <List key={list.id}>
            <Link to={`/list/${list.endPoint}`}>{list.name}</Link>
          </List>
        );
      })}
    </Lists>
  );
};

const Lists = styled.ul`
  display: flex;
  justify-content: center;
  gap: 2rem;
  ${props => props.isColumn && 'flex-direction: column;'}
`;

const List = styled.li`
  font-size: 2.5rem;
  font-weight: 600;

  a:hover {
    color: ${props => props.theme.colors.gray200};
  }
`;

export default CategoryLists;
