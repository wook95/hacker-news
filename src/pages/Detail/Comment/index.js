import { useQueries } from 'react-query';
import styled from 'styled-components';
import DOMPurify from 'dompurify';
import LoadingSpinner from '@/components/base/LoadingSpinner';
import getDetail from '@/apis/api/detail';
import calculateTimeAgo from '@/utils/function/calculateTimeBefore';

const Comment = ({ comments }) => {
  const commentQueries = useQueries(
    comments.map(comment => ({
      queryKey: [comment],
      queryFn: () => getDetail(comment),
    })),
  );

  return (
    <Container>
      <Title>{comments.length} Comments</Title>
      {commentQueries.map((res, index) =>
        res.isLoading ? (
          <LoadingSpinner key={index} />
        ) : (
          <CommentCard key={res.data.id}>
            <Author>{res.data.by}</Author>
            <Content
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(res.data.text),
              }}
            />
            <Status>{calculateTimeAgo(res.data.time)}</Status>
          </CommentCard>
        ),
      )}
    </Container>
  );
};

const Container = styled.div`
  margin-top: 2rem;
  padding: 3rem;
`;

const Title = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.6rem;
`;

const CommentCard = styled.div`
  min-height: 5rem;
  padding: 2rem 0;
  border-bottom: 1px solid #ccc;
  font-size: 1.4rem;
`;

const Author = styled.p`
  margin-bottom: 0.3rem;
  color: ${props => props.theme.colors.primary};
`;

const Content = styled.p`
  margin: 1rem 0;
  line-height: 1.5;
`;

const Status = styled.p`
  color: ${props => props.theme.colors.gray100};
`;

export default Comment;
