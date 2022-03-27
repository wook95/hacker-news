import { useQuery } from 'react-query';
import styled from 'styled-components';
import LoadingSpinner from '@/components/base/LoadingSpinner';
import getDetail from '@/apis/api/detail';
import calculateTimeAgo from '@/utils/function/calculateTimeBefore';

const ListCard = ({ listId }) => {
  const {
    isLoading,
    error,
    data: postDetail,
  } = useQuery(listId, () => getDetail(listId));
  if (error) {
    console.log(error);
    return 'An error has occurred: ';
  }

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <Container>
      <PostNumber>{listId}</PostNumber>
      <div>
        <Title>{postDetail.title}</Title>
        <StatusBar>
          <Author>{postDetail.by}</Author>
          <Time>{calculateTimeAgo(postDetail.time)}</Time>
        </StatusBar>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 1rem;
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

const PostNumber = styled.p`
  color: ${props => props.theme.colors.gray100};
`;

const Title = styled.p`
  margin-bottom: 1rem;
`;

const StatusBar = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const Author = styled.p`
  padding: 0.5rem 1rem;
  border: 0.1rem solid ${props => props.theme.colors.gray800};
  border-radius: 1rem;
  color: ${props => props.theme.colors.black100};
  box-shadow: 0.1rem 0.1rem 0.1rem ${props => props.theme.colors.gray100};
`;

const Time = styled(Author)`
  color: ${props => props.theme.colors.gray100};
`;

export default ListCard;
