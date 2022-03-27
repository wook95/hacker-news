import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import DOMPurify from 'dompurify';
import LoadingSpinner from '@/components/base/LoadingSpinner';
import Comment from '@/pages/Detail/Comment';
import getDetail from '@/apis/api/detail';
import calculateTimeAgo from '@/utils/function/calculateTimeBefore';

const Detail = () => {
  const params = useParams();
  const postId = params.id;

  const {
    isLoading,
    error,
    data: postDetail,
  } = useQuery(postId, () => getDetail(postId), {});
  if (error) return 'An error has occurred: ' + error.message;

  const comments = postDetail?.kids;

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <DetailCard>
            <Title>{postDetail.title}</Title>
            <Author>{postDetail.by}</Author>
            <StatusBar>
              <p>{calculateTimeAgo(postDetail.time)}</p>
              <p>{postDetail.score} score </p>
              {postDetail?.url && (
                <ExternalLink href={postDetail.url} target='_blank'>
                  Link
                </ExternalLink>
              )}
            </StatusBar>
            {postDetail?.text && (
              <Content
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(postDetail.text),
                }}
              />
            )}
          </DetailCard>
          {comments && <Comment comments={comments} />}
        </>
      )}
    </>
  );
};

const DetailCard = styled.div`
  padding: 3rem 3rem 5rem 3rem;
  margin-bottom: 1rem;
  font-size: 1.4rem;
  border: 0.1rem solid ${props => props.theme.colors.gray800};
  box-shadow: 0.2rem 0.2rem 0.2rem 0.1rem ${props => props.theme.colors.gray800};
`;

const Title = styled.h3`
  margin-bottom: 0.7rem;
  font-size: 1.9rem;
`;

const Author = styled.p`
  margin-bottom: 0.6rem;
  color: ${props => props.theme.colors.primary};
`;

const StatusBar = styled.div`
  padding-bottom: 1rem;
  margin-bottom: 3rem;
  display: flex;
  gap: 1.5rem;
  border-bottom: 1px solid #ccc;
  color: ${props => props.theme.colors.gray100};
`;

const ExternalLink = styled.a`
  color: ${props => props.theme.colors.blue};
`;

const Content = styled.div`
  line-height: 1.8;
`;

export default Detail;
