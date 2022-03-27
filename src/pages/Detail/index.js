import { useParams } from 'react-router-dom';
import { useQuery, useQueries } from 'react-query';
import styled from 'styled-components';
import DOMPurify from 'dompurify';
import Comment from '@/pages/Detail/Comment';
import LoadingSpinner from '@/components/base/LoadingSpinner';
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
        <div>
          <p>title: {postDetail.title}</p>
          <p>author: {postDetail.by}</p>
          <p>time: {calculateTimeAgo(postDetail.time)}</p>
          <p>score: {postDetail.score}</p>
          {postDetail?.text && (
            <>
              <span>text </span>
              <span
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(postDetail.text),
                }}></span>
            </>
          )}
          {postDetail?.url && <p>url {postDetail.url}</p>}
          {comments && <Comment comments={comments} />}
        </div>
      )}
    </>
  );
};

export default Detail;
