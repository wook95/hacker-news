import { useParams } from 'react-router-dom';
import { useQuery, useQueries } from 'react-query';
import styled from 'styled-components';
import DOMPurify from 'dompurify';
import getDetail from '@/apis/api/detail';

const Detail = () => {
  const params = useParams();
  const postId = params.id;

  const {
    isLoading,
    error,
    data: postDetail,
  } = useQuery(postId, () => getDetail(postId), {});
  if (error) return 'An error has occurred: ' + error.message;

  return (
    <>
      {isLoading ? (
        <div>Loading . . .</div>
      ) : (
        <div>
          <p>제목 {postDetail.title}</p>
          <p>글쓴이 {postDetail.by}</p>
          <p>
            시간{' '}
            {new Intl.DateTimeFormat('ko-KR').format(postDetail.time * 1000)}
          </p>
          <p>score {postDetail.score}</p>
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
        </div>
      )}
    </>
  );
};

export default Detail;
